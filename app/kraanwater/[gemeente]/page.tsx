import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { gemeenten, getGemeente, getHardheidLabel, type Gemeente } from '@/data/gemeenten';
import { clampDescription } from '@/lib/seo';

import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { GemeenteLinks } from '@/components/GemeenteLinks';

interface PageProps {
  params: Promise<{ gemeente: string }>;
}

export async function generateStaticParams() {
  return gemeenten.map(g => ({ gemeente: g.slug }));
}

function buildTitle(naam: string): string {
  const full = `Kraanwater ${naam}: veilig drinken of filteren?`;
  if (full.length <= 70) return full;
  const medium = `Kraanwater ${naam}: veilig of filteren?`;
  if (medium.length <= 70) return medium;
  return `Kraanwater ${naam}: drinkbaar?`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) return {};

  const title = buildTitle(gemeente.naam);
  const description = clampDescription(`Is het kraanwater in ${gemeente.naam} direct drinkbaar uit de kraan? Hardheid ${gemeente.hardheid}°dH via ${gemeente.waterbedrijf}. Wat zit erin, hoe smaakt het en wanneer kies je voor een filter?`);

  return {
    title,
    description,
    alternates: { canonical: `https://waterfilterplatform.nl/kraanwater/${gemeente.slug}` },
    openGraph: {
      title,
      description: `Kraanwater ${gemeente.naam} (${gemeente.hardheid}°dH): direct drinkbaar, smaak, samenstelling en advies. Geleverd door ${gemeente.waterbedrijf}.`,
    },
  };
}

// ─── Helper: drinkbaarheid per tier ──────────────────────────────────────────

function getDrinkbaarheidTekst(g: Gemeente): { heading: string; body: string } {
  switch (g.categorie) {
    case 'zeer hard':
      return {
        heading: `Kraanwater in ${g.naam} is drinkbaar — maar met kanttekeningen`,
        body: `Ja, het kraanwater in ${g.naam} voldoet aan alle wettelijke normen en is officieel veilig om te drinken. Maar met een hardheid van ${g.hardheid}°dH is het water erg kalkrijk. Dat heeft geen directe gevolgen voor je gezondheid, maar velen ervaren de smaak als 'zwaar' of 'kalkig'. Kalk zet zich bovendien snel af in de waterkoker en koffiezetapparaat. Wie dagelijks veel kraanwater drinkt in ${g.naam}, overweegt vaak een filter voor smaakcomfort en apparatenbescherming.`,
      };
    case 'hard':
      return {
        heading: `Kraanwater in ${g.naam} is veilig te drinken`,
        body: `Het kraanwater in ${g.naam} (${g.hardheid}°dH) is veilig en voldoet aan de Nederlandse drinkwaternormen. De hardheid is merkbaar: je ziet kalkranden in de waterkoker en de smaak wordt door sommigen als 'vol' of 'robuust' omschreven. Direct drinken uit de kraan is gewoon mogelijk — een waterfilter is een keuze voor smaak en gemak, geen noodzaak voor veiligheid.`,
      };
    case 'matig hard':
      return {
        heading: `Kraanwater in ${g.naam}: veilig en goed drinkbaar`,
        body: `In ${g.naam} is het kraanwater met ${g.hardheid}°dH matig hard en prima direct drinkbaar. Het water smaakt neutraal tot licht mineraalrijk. De meeste inwoners drinken het kraanwater direct zonder problemen. Een filter is optioneel en wordt vooral gebruikt om restchloor te verwijderen of de smaak te verfijnen.`,
      };
    case 'matig':
      return {
        heading: `Kraanwater in ${g.naam}: uitstekend drinkbaar`,
        body: `Het kraanwater in ${g.naam} heeft een hardheid van ${g.hardheid}°dH — aangenaam matig. Het water smaakt fris en neutraal, en is door de meeste mensen als prettig te omschrijven. Directe consumptie uit de kraan is prima. Een filter is puur voor wie de laatste restjes chloor of smaaksporen wil wegnemen.`,
      };
    case 'zacht':
      return {
        heading: `Kraanwater in ${g.naam}: zacht en goed drinkbaar`,
        body: `Met een hardheid van slechts ${g.hardheid}°dH is het kraanwater in ${g.naam} zacht en smakelijk. De lage mineralenconcentratie zorgt voor een licht, fris smaakprofiel. Directe consumptie wordt door bijna iedereen als prettig ervaren. Sommige mensen voegen liever iets mineralenrijker water toe via een remineralisatiefilter, maar dat is een persoonlijke voorkeur.`,
      };
  }
}

// ─── Helper: samenstelling tekst per tier ─────────────────────────────────────

function getSamenstellingTekst(g: Gemeente): string {
  if (g.categorie === 'zeer hard') {
    return `Het kraanwater van ${g.waterbedrijf} in ${g.naam} bevat veel calcium en magnesium — de mineralen die waterhardheid bepalen. Bij ${g.hardheid}°dH zitten die in de hoogste categorie. Naast kalk bevat het water ook een kleine hoeveelheid chloor die door het waterbedrijf wordt toegevoegd als desinfectiemiddel. In de leidingen kan dat chloor geleidelijk afnemen; direct uit de kraan ruikt of proef je het soms licht. De pH van het kraanwater in ${g.naam} ligt normaal gesproken tussen 7,5 en 8,5 (licht basisch), wat bijdraagt aan de kalkrijke smaak.`;
  }
  if (g.categorie === 'hard') {
    return `${g.waterbedrijf} levert in ${g.naam} water met een relatief hoge mineralenconcentratie (${g.hardheid}°dH). Calcium en magnesium zijn de dominante mineralen. Chloor wordt in kleine hoeveelheden toegevoegd voor desinfectie en is soms licht merkbaar in smaak of geur — dit is volkomen normaal en veilig. De pH is licht basisch. Nitraatgehaltes liggen in de meeste regio's ruim onder de wettelijke norm van 50 mg/l.`;
  }
  if (g.categorie === 'matig hard') {
    return `Het kraanwater van ${g.waterbedrijf} in ${g.naam} heeft een evenwichtige samenstelling: voldoende calcium en magnesium voor een prettige minerale smaak, zonder de zware kalklast van harder water. Chloor is aanwezig als desinfectiemiddel en is bij sommige mensen licht merkbaar. pH en nitraatgehalte voldoen ruimschoots aan de normen.`;
  }
  if (g.categorie === 'matig') {
    return `Het kraanwater in ${g.naam} (${g.waterbedrijf}) is licht mineraalrijk. Calcium en magnesium zijn aanwezig maar in bescheiden concentraties. Chloorgehalte is laag; de frisse, neutrale smaak is hier deels aan te danken. De pH schommelt rond neutraal tot licht basisch. Een gezonde en evenwichtige samenstelling.`;
  }
  return `Zacht water zoals in ${g.naam} bevat weinig calcium en magnesium (${g.hardheid}°dH). Het waterprofiel van ${g.waterbedrijf} kenmerkt zich door een lage mineraalconcentratie, lage pH-buffer en een frisse smaak. Omdat zacht water iets agressiever is voor leidingen, voegen waterbedrijven soms een kleine hoeveelheid kalk toe om corrosie te beperken. Chloor is aanwezig als microbiologische bescherming maar nauwelijks merkbaar.`;
}

// ─── Helper: smaaktekst per tier ──────────────────────────────────────────────

function getSmaakTekst(g: Gemeente): string {
  if (g.categorie === 'zeer hard') {
    return `Inwoners van ${g.naam} omschrijven het kraanwater vaak als 'zwaar', 'kalkig' of 'vol'. De hoge concentratie calcium en magnesium geeft een uitgesproken smaak die niet iedereen prettig vindt — zeker niet vergeleken met flessenwater of gefilterd water. Chloor kan na lang stilstaand water (bijv. 's ochtends) even merkbaar zijn. Koelkasgefilterd of door een actief koolfilter gehaald water smaakt aanmerkelijk friser.`;
  }
  if (g.categorie === 'hard') {
    return `Het kraanwater in ${g.naam} heeft een robuste, mineralige smaak door de ${g.hardheid}°dH hardheid. Sommigen waarderen dit; anderen vinden het minder fris dan flessenwater. Chloor is soms licht aanwezig, met name als het water lang in de leidingen heeft gestaan. Een actief koolfilter verbetert de smaak merkbaar door chloor en smaakstoffen te absorberen.`;
  }
  if (g.categorie === 'matig hard') {
    return `Het kraanwater in ${g.naam} smaakt neutraal tot licht mineraalrijk. De meeste inwoners vinden het prettig drinkbaar rechtstreeks uit de kraan. Chloor is aanwezig maar zelden dominant aanwezig in de smaak. Een filterkan kan de subtiele kloorsmaak wegnemen voor wie dat prefereert.`;
  }
  if (g.categorie === 'matig') {
    return `In ${g.naam} is het kraanwater verfrissend van smaak. Door de gematigde hardheid (${g.hardheid}°dH) is er een aangename mineralige achtergrond zonder kalkzwaarte. Chloor is nauwelijks merkbaar. Het water doet qua smaak niet veel onder voor kwaliteitsbrands flessenwater.`;
  }
  return `Zacht kraanwater zoals in ${g.naam} heeft een lichte, schone smaak. De afwezigheid van veel mineralen geeft het water een 'vlak' of fris karakter — vergelijkbaar met bronwater. Chloor is minimaal aanwezig. Sommige mensen vinden zacht water net iets te vlak; een remineralisatiefilter kan hier smaakdepth toevoegen.`;
}

// ─── Helper: wanneer filter per tier ──────────────────────────────────────────

function getFilterAdviesTekst(g: Gemeente): string {
  if (g.categorie === 'zeer hard') {
    return `In ${g.naam} kiezen mensen voor een waterfilter om meerdere redenen: de zware kalksmaak, kalkaanslag in apparaten, en voor wie bewust wil consumeren ook nitraten en chloor. Een osmosefilter is hier de gouden standaard: het verwijdert 95–99% van kalk, chloor, nitraten en microplastics. Een inline kalkfilter lost de smaak op maar beschermt apparaten minder volledig. Wie dagelijks liters kraanwater drinkt uit ${g.naam}, investeert vrijwel altijd in een goed systeem.`;
  }
  if (g.categorie === 'hard') {
    return `Inwoners van ${g.naam} grijpen naar een filter wanneer ze kalkaanslag willen verminderen, een frisser smaakprofiel wensen, of apparaten willen beschermen. Bij ${g.hardheid}°dH laat een filterkan een deel van de kalk erin zitten; een inline filter of osmosefilter geeft betere resultaten. Gezondheid is zelden de primaire reden — smaak en onderhoud zijn dat vaker.`;
  }
  if (g.categorie === 'matig hard') {
    return `In ${g.naam} kiezen mensen voor een filter omdat ze de restchloor willen verwijderen, de smaak willen verfijnen, of voor extra zekerheid over microplastics en spoorvervuilingen. Bij ${g.hardheid}°dH is de kalklast acceptabel maar merkbaar. Een eenvoudige filterkan of inline actief koolfilter geeft al een merkbare smaakvabeterening.`;
  }
  if (g.categorie === 'matig') {
    return `In ${g.naam} is de reden voor een waterfilter bijna altijd smaak — niet veiligheid of kalk. Een filterkan verwijdert restchloor en kleine smaaksporen effectief. Wie maximale zuiverheid nastreeft (bijv. vanwege zwangerschap of gezondheidsredenen) kan ook voor een osmosefilter kiezen, hoewel dat bij deze hardheid minder urgent is.`;
  }
  return `Met zacht water zoals in ${g.naam} is een filter geen noodzaak maar een keuze. Populaire redenen: smaakverbetering, het toevoegen van mineralen via een remineralisatiefilter, of voor ouders van jonge kinderen die extra zekerheid willen. Een actief koolfilter met remineralisatie is de meest logische keuze bij ${g.hardheid}°dH.`;
}

export default async function KraanwaterPage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const hardLabel = getHardheidLabel(gemeente.categorie);
  const drinkbaarheid = getDrinkbaarheidTekst(gemeente);
  const samenstellingTekst = getSamenstellingTekst(gemeente);
  const smaakTekst = getSmaakTekst(gemeente);
  const filterAdviesTekst = getFilterAdviesTekst(gemeente);

  const isHardWater = gemeente.hardheid >= 12;
  const isZeerHard = gemeente.hardheid >= 18;

  const naburigeGemeenten = gemeenten
    .filter(g => g.provincie === gemeente.provincie && g.slug !== gemeente.slug)
    .slice(0, 6);

  const faqItems = [
    {
      question: `Is het kraanwater in ${gemeente.naam} veilig om te drinken?`,
      answer: `Ja, het kraanwater in ${gemeente.naam} voldoet aan alle Nederlandse drinkwaternormen en is veilig te drinken. Het water wordt geleverd door ${gemeente.waterbedrijf} en regelmatig gecontroleerd. De hardheid van ${gemeente.hardheid}°dH (${hardLabel.toLowerCase()}) heeft geen negatief effect op de gezondheid.`,
    },
    {
      question: `Hoe hard is het kraanwater in ${gemeente.naam}?`,
      answer: `Het kraanwater in ${gemeente.naam} heeft een hardheid van ${gemeente.hardheid}°dH (Duitse hardheidsgraden). Dat valt in de categorie "${hardLabel.toLowerCase()}". Een uitgebreid overzicht van waterhardheid per gemeente vind je op /waterhardheid/${gemeente.slug}.`,
    },
    {
      question: `Waarom smaakt kraanwater in ${gemeente.naam} anders dan flessenwater?`,
      answer: `Het smaakprofiel van kraanwater wordt bepaald door de hardheid (calcium/magnesium), een kleine hoeveelheid chloor die voor desinfectie wordt toegevoegd, en de pH. In ${gemeente.naam} is de hardheid ${gemeente.hardheid}°dH — ${isHardWater ? 'dat geeft een vollere, soms als kalkig ervaren smaak' : 'dat geeft een frisse, neutrale smaak'}. Flessenwater heeft een ander mineraalprofiel en geen chloor, vandaar het verschil.`,
    },
    {
      question: `Kan ik kraanwater in ${gemeente.naam} gebruiken voor koffie en thee?`,
      answer: `Zeker. Kraanwater in ${gemeente.naam} is prima geschikt voor koffie en thee. ${isHardWater ? `Bij ${gemeente.hardheid}°dH kan kalk invloed hebben op de smaak van koffie en de levensduur van het apparaat. Een filter verbetert de smaak en beschermt de machine.` : `De gematigde hardheid heeft weinig invloed op de smaak van warme dranken. Een filter is optioneel.`}`,
    },
    {
      question: `Welk waterfilter past bij het kraanwater in ${gemeente.naam}?`,
      answer: `Voor ${gemeente.naam} (${gemeente.hardheid}°dH — ${hardLabel.toLowerCase()}) ${isZeerHard ? 'is een omgekeerde osmose filter de beste keuze vanwege de hoge kalklast.' : isHardWater ? 'is een inline kalkfilter of osmosefilter aanbevolen voor effectieve kalkreductie.' : 'volstaat een filterkan of actief koolfilter voor smaakverbetering.'} Zie ook /waterfilter/${gemeente.slug} voor een volledig filteradvies.`,
    },
  ];

  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kraanwater', url: 'https://waterfilterplatform.nl/kraanwater' },
          {
            name: `Kraanwater ${gemeente.naam}`,
            url: `https://waterfilterplatform.nl/kraanwater/${gemeente.slug}`,
          },
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
          <nav className="text-xs text-gray-400 mb-4 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>/</span>
            <Link href="/kennisbank/waterkwaliteit-nederland" className="hover:text-[#005F8A]">Kraanwater</Link>
            <span>/</span>
            <span className="text-gray-600">{gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4 leading-tight">
            Kraanwater {gemeente.naam}: veilig drinken of filteren?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Het kraanwater in {gemeente.naam} heeft een hardheid van{' '}
            <strong>{gemeente.hardheid}°dH</strong> ({hardLabel.toLowerCase()}) en wordt geleverd
            door <strong>{gemeente.waterbedrijf}</strong>. Is het veilig, hoe smaakt het en wanneer
            kies je voor een filter?
          </p>
          <div className="mt-5 inline-flex items-center gap-2 flex-wrap">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
              isZeerHard
                ? 'bg-red-100 text-red-700 border border-red-200'
                : isHardWater
                ? 'bg-orange-100 text-orange-700 border border-orange-200'
                : gemeente.categorie === 'matig hard'
                ? 'bg-amber-100 text-amber-700 border border-amber-200'
                : 'bg-green-100 text-green-700 border border-green-200'
            }`}>
              {hardLabel}
            </span>
            <span className="text-xs text-gray-500">{gemeente.hardheid}°dH · {gemeente.waterbedrijf}</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Snelle feitenkaart */}
        <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-[#003F5C] mb-3">
            Kraanwater {gemeente.naam} in het kort
          </h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <dt className="text-xs text-gray-500">Hardheid</dt>
              <dd className="font-semibold text-gray-800">{gemeente.hardheid}°dH</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Categorie</dt>
              <dd className="font-semibold text-gray-800">{hardLabel}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Leverancier</dt>
              <dd className="font-semibold text-gray-800">{gemeente.waterbedrijf}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Provincie</dt>
              <dd className="font-semibered text-gray-800">{gemeente.provincie}</dd>
            </div>
          </dl>
        </section>

        {/* Sectie 1: Drinkbaarheid */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            {drinkbaarheid.heading}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{drinkbaarheid.body}</p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              href={`/waterhardheid/${gemeente.slug}`}
              className="text-sm text-[#005F8A] underline"
            >
              Waterhardheid {gemeente.naam} — volledig overzicht →
            </Link>
            <Link
              href={`/drinkwater/${gemeente.slug}`}
              className="text-sm text-[#005F8A] underline"
            >
              Drinkwaterkwaliteit {gemeente.naam} →
            </Link>
          </div>
        </section>

        {/* Sectie 2: Samenstelling */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Wat zit er in het kraanwater van {gemeente.waterbedrijf} in {gemeente.naam}?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{samenstellingTekst}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-[#E0F2FE] rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500">Hardheid (Ca/Mg)</p>
              <p className="text-lg font-bold text-[#005F8A]">{gemeente.hardheid}°dH</p>
              <p className="text-xs text-gray-600">{hardLabel}</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500">pH (typisch)</p>
              <p className="text-lg font-bold text-[#005F8A]">7,5–8,5</p>
              <p className="text-xs text-gray-600">Licht basisch</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500">Chloor</p>
              <p className="text-lg font-bold text-[#005F8A]">&lt;0,5 mg/l</p>
              <p className="text-xs text-gray-600">Lage concentratie</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Waarden zijn indicatief. Raadpleeg {gemeente.waterbedrijf} voor exacte meetresultaten.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/kennisbank/chloor-in-drinkwater"
              className="text-sm text-[#005F8A] underline"
            >
              Chloor in drinkwater: wat betekent dat? →
            </Link>
          </div>
        </section>

        {/* Sectie 3: Smaak */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Smaakt het kraanwater goed in {gemeente.naam}?
          </h2>
          <p className="text-gray-700 leading-relaxed">{smaakTekst}</p>
        </section>

        {/* Sectie 4: Wanneer filter */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Wanneer kiezen mensen in {gemeente.naam} voor een waterfilter?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{filterAdviesTekst}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/waterfilter/${gemeente.slug}`}
              className="text-sm text-[#005F8A] underline"
            >
              Filteradvies voor {gemeente.naam} — welk type past? →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="text-sm text-[#005F8A] underline"
            >
              Omgekeerde osmose kopen →
            </Link>
          </div>
        </section>

        {/* CTA */}
        {isHardWater ? (
          <div className="bg-gradient-to-br from-[#005F8A] to-[#003F5C] text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              {isZeerHard
                ? `Zeer hard kraanwater in ${gemeente.naam} (${gemeente.hardheid}°dH)`
                : `Hard kraanwater in ${gemeente.naam} (${gemeente.hardheid}°dH)`}
            </h2>
            <p className="text-blue-100 mb-5 max-w-lg">
              {isZeerHard
                ? `Bij ${gemeente.hardheid}°dH verwijdert een osmosefilter de hoge kalklast vrijwel volledig. Bekijk onze vergelijking van osmosefilters voor hard kraanwater.`
                : `Met hard kraanwater in ${gemeente.naam} is een osmosesysteem de meest effectieve keuze. Bekijk welk systeem het beste bij jouw situatie past.`}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="inline-block bg-white text-[#005F8A] font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Osmosefilters vergelijken →
              </Link>
              <Link
                href="/waterhardheid"
                className="inline-block border border-blue-300 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Waterhardheid Nederland
              </Link>
            </div>
          </div>
        ) : (
          <CTABanner context="waterhardheid" variant="default" />
        )}

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer over kraanwater en filteren</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href={`/waterhardheid/${gemeente.slug}`}
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Waterhardheid {gemeente.naam}
              </p>
              <p className="text-xs text-gray-500 mt-1">Hardheid, kalk en wat dit betekent</p>
            </Link>
            <Link
              href={`/drinkwater/${gemeente.slug}`}
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Drinkwater {gemeente.naam}
              </p>
              <p className="text-xs text-gray-500 mt-1">Kwaliteitsrapport en normen</p>
            </Link>
            <Link
              href="/kennisbank/waterkwaliteit-nederland"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Waterkwaliteit Nederland
              </p>
              <p className="text-xs text-gray-500 mt-1">Landelijk overzicht en normen</p>
            </Link>
            <Link
              href="/kennisbank/chloor-in-drinkwater"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Chloor in drinkwater
              </p>
              <p className="text-xs text-gray-500 mt-1">Wat is het en moet je het verwijderen?</p>
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Osmosefilter kopen
              </p>
              <p className="text-xs text-gray-500 mt-1">Beste systemen voor thuis vergeleken</p>
            </Link>
            <Link
              href={`/waterfilter/${gemeente.slug}`}
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Waterfilter {gemeente.naam}
              </p>
              <p className="text-xs text-gray-500 mt-1">Welk filtertype past bij jouw water?</p>
            </Link>
          </div>
        </section>

        {/* Naburige gemeenten */}
        {naburigeGemeenten.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">
              Kraanwater in andere gemeenten in {gemeente.provincie}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Vergelijk het kraanwater van {gemeente.naam} met naburige gemeenten:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {naburigeGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/kraanwater/${g.slug}`}
                  className="border border-gray-100 rounded-xl px-4 py-2.5 hover:border-[#005F8A] hover:shadow-sm transition-all flex justify-between items-center"
                >
                  <span className="text-sm font-medium text-gray-800">Kraanwater {g.naam}</span>
                  <span className="text-xs text-gray-500">{g.hardheid}°dH</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <GemeenteLinks gemeente={gemeente} currentPath="kraanwater" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: kraanwater in {gemeente.naam}
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
