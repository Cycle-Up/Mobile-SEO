import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { gemeenten, getGemeente, getHardheidLabel, type Gemeente } from '@/data/gemeenten';
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
  const full = `Leidingwater ${naam}: kwaliteit, samenstelling & info`;
  if (full.length <= 70) return full;
  const medium = `Leidingwater ${naam}: kwaliteit & samenstelling`;
  if (medium.length <= 70) return medium;
  return `Leidingwater ${naam}: kwaliteit & info`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) return {};

  const title = buildTitle(gemeente.naam);
  const description = `Kwaliteit en samenstelling van leidingwater in ${gemeente.naam}. Geleverd door ${gemeente.waterbedrijf}: hardheid ${gemeente.hardheid}°dH, zuiveringsproces, pH, nitraat en vergelijking met andere gemeenten in ${gemeente.provincie}.`;

  return {
    title,
    description,
    alternates: { canonical: `https://waterfilterplatform.nl/leidingwater/${gemeente.slug}` },
    openGraph: {
      title,
      description: `Leidingwater ${gemeente.naam}: wie levert het, hoe wordt het gezuiverd en wat zit erin? Hardheid ${gemeente.hardheid}°dH via ${gemeente.waterbedrijf}.`,
    },
  };
}

// ─── Helper: waterbedrijf info per leverancier ────────────────────────────────

function getWaterbedrijfInfo(waterbedrijf: string, naam: string): string {
  const info: Record<string, string> = {
    Vitens: `Vitens is het grootste drinkwaterbedrijf van Nederland en levert leidingwater aan ruim 5,7 miljoen mensen in vijf provincies. In ${naam} zorgt Vitens voor de productie, zuivering en distributie van leidingwater. Vitens wint zijn water voornamelijk uit grondwater maar ook uit oppervlaktewater, afhankelijk van de regio.`,
    'Brabant Water': `Brabant Water levert leidingwater aan ruim 2,5 miljoen mensen in Noord-Brabant. Het bedrijf wint zijn water uitsluitend uit grondwater — Noord-Brabant heeft voor een groot deel te maken met relatief hard grondwater door de kalkrijke bodem. In ${naam} is Brabant Water verantwoordelijk voor kwaliteit en distributie.`,
    PWN: `PWN (Provinciaal Waterleidingbedrijf Noord-Holland) levert leidingwater in het noorden en westen van Noord-Holland. PWN wint water uit duinwater en IJsselmeer. In ${naam} zorgt PWN voor een betrouwbare drinkwatervoorziening. Het water heeft een relatief lage hardheid door de duinwaterbron.`,
    Waternet: `Waternet beheert het drinkwater en het afvalwater in de regio Amsterdam en omgeving. In ${naam} levert Waternet leidingwater afkomstig van de Bethunepolder en het Loenderveen — een unieke combinatie van infiltratie en oppervlaktewater. De hardheid is relatief laag voor stedelijk water.`,
    Dunea: `Dunea levert drinkwater aan ruim 1,1 miljoen mensen in Zuid-Holland, van Wassenaar tot Goeree-Overflakkee. Het water is afkomstig van de Lek en wordt via de duinen gezuiverd door een langzame, natuurlijke infiltratie. In ${naam} is het leidingwater helder, zacht tot matig hard, en van hoge microbiologische kwaliteit.`,
    Evides: `Evides Waterbedrijf levert drinkwater aan 1,3 miljoen mensen in Zeeland, Zuid-Holland en een deel van Brabant. Het water is afkomstig van de Maas, Biesbosch-reservoirs en grondwater. In ${naam} zorgt Evides voor een constante levering van leidingwater dat voldoet aan alle wettelijke normen.`,
    WML: `WML (Waterleiding Maatschappij Limburg) levert drinkwater aan vrijwel de gehele provincie Limburg. WML wint zijn water uit de Maas en grondwater. Door de kalkrijke bodem van Limburg is het leidingwater in ${naam} relatief hard. WML levert water van hoge kwaliteit dat uitgebreid wordt getest.`,
    'Groningen Waterleiding': `Het waterbedrijf Groningen (onderdeel van Waterbedrijf Groningen) levert drinkwater aan inwoners in de provincie Groningen. Het water is afkomstig van grondwater dat in de regio relatief zacht is. In ${naam} is het leidingwater van lage hardheid en fris van smaak.`,
    WMD: `WMD (Waterleidingmaatschappij Drenthe) levert drinkwater aan alle inwoners van Drenthe. WMD wint zijn water uitsluitend uit grondwater dat door de zandbodems van Drenthe natuurlijk wordt gefilterd. In ${naam} is het leidingwater zacht tot matig hard met een zuiver smaakprofiel.`,
  };
  return info[waterbedrijf] ?? `${waterbedrijf} levert leidingwater aan ${naam} en voldoet aan alle Nederlandse drinkwaternormen. Het bedrijf is verantwoordelijk voor de winning, zuivering en distributie van leidingwater in de regio.`;
}

// ─── Helper: waterbron tekst ──────────────────────────────────────────────────

function getWaterbronTekst(g: Gemeente): string {
  if (['PWN', 'Dunea'].includes(g.waterbedrijf)) {
    return `${g.waterbedrijf} wint zijn water primair uit oppervlaktewater en duininfiltratiewater. Rivierwater of meerwater wordt eerst voorzuiverd, daarna via zandduinen geïnfiltreerd en daar natuurlijk gezuiverd door bodempassage. Dit langzame proces verwijdert bacteriën, virussen en veel organische stoffen van nature. Daarna volgt een nazuivering met UV-ontsmetting en eventueel een kleine hoeveelheid chloor voor de distributiefase.`;
  }
  if (['Waternet', 'Evides'].includes(g.waterbedrijf)) {
    return `${g.waterbedrijf} gebruikt een combinatie van oppervlaktewater en grondwater. Oppervlaktewater wordt intensiever behandeld: coagulatie, flotatie, snelfiltratie, ozonisatie en actief koolfiltratie zijn typische stappen. Grondwater doorloopt een eenvoudiger proces omdat het al deels gezuiverd is door de bodem. Het eindresultaat is leidingwater dat voldoet aan alle Nederlandse en Europese normen.`;
  }
  if (['Brabant Water', 'WML', 'Vitens', 'WMD', 'Groningen Waterleiding'].includes(g.waterbedrijf)) {
    return `${g.waterbedrijf} wint zijn water primair uit grondwater. Grondwater wordt door de bodemlagen van nature al goed voorgefilterd. Na oppomping wordt het water beluchting, ontijzering en ontharding (deels) onderworpen. In de regio van ${g.naam} is het grondwater van nature ${g.categorie === 'zacht' || g.categorie === 'matig' ? 'relatief zacht' : 'kalkrijk'}, wat de hardheid van ${g.hardheid}°dH verklaart. Na zuivering wordt een kleine hoeveelheid chloor toegevoegd voor microbiologische veiligheid tijdens distributie.`;
  }
  return `${g.waterbedrijf} wint water via grondwater- of oppervlaktewaterbronnen. Na winning worden standaard zuiveringsstappen doorlopen: filtratie, desinfectie en pH-correctie. Het resulterende leidingwater voldoet aan alle wettelijke drinkwaternormen.`;
}

// ─── Helper: samenstelling per tier ──────────────────────────────────────────

function getSamenstellingTekst(g: Gemeente): {
  hardheidsklasse: string;
  nitraatProfiel: string;
  chloorProfiel: string;
  phProfiel: string;
  toelichting: string;
} {
  const nitraat = g.categorie === 'zeer hard' || g.categorie === 'hard'
    ? 'Laag–matig (<25 mg/l)'
    : 'Laag (<15 mg/l)';
  const chloor = g.hardheid >= 12 ? '<0,3 mg/l (laag)' : '<0,2 mg/l (minimaal)';
  const ph = g.hardheid >= 12 ? '7,8–8,5 (basisch)' : '7,3–8,0 (neutraal–licht basisch)';

  let toelichting: string;
  if (g.categorie === 'zeer hard') {
    toelichting = `In ${g.naam} bevat leidingwater de hoogste concentratie calcium en magnesium van Nederland. De totale hardheid van ${g.hardheid}°dH is het gevolg van grondwater dat door kalkrijke bodemlagen stroomt. Nitraatgehalte ligt ruim onder de wettelijke norm van 50 mg/l. Chloor is aanwezig als desinfectiemiddel maar in lage concentratie. De hoge pH (basisch) is typisch voor kalkrijk leidingwater.`;
  } else if (g.categorie === 'hard') {
    toelichting = `Leidingwater in ${g.naam} heeft een hardheid van ${g.hardheid}°dH: calcium en magnesium zijn duidelijk aanwezig. De samenstelling is stabiel en veilig. Nitraat zit ruim onder de norm. De pH is licht basisch door de aanwezige kalkbuffer. Chloor wordt in kleine hoeveelheden toegevoegd voor microbiologische veiligheid.`;
  } else if (g.categorie === 'matig hard') {
    toelichting = `Het leidingwater in ${g.naam} heeft een evenwichtige samenstelling. Calcium en magnesium zijn aanwezig in gezonde concentraties (${g.hardheid}°dH) zonder de extremen van zeer hard water. Nitraat, chloor en pH zijn allemaal ruimschoots binnen de Nederlandse normen. Dit water staat bekend om zijn goede drinkbaarheid en smakelijkheid.`;
  } else if (g.categorie === 'matig') {
    toelichting = `Het leidingwater in ${g.naam} is licht mineraalrijk. De lage hardheid (${g.hardheid}°dH) geeft een frisse smaak. Calcium en magnesium zijn aanwezig in bescheiden mate. Chloor is minimaal aanwezig; nitraat zit laag. De pH is neutraal tot licht basisch. Een uitgebalanceerd waterprofiel.`;
  } else {
    toelichting = `Zacht leidingwater in ${g.naam} (${g.hardheid}°dH) bevat weinig calcium en magnesium. De lage hardheid geeft een licht, fris karakter. Chloor is minimaal aanwezig. Nitraat is laag. Door de lage mineralenconcentratie kan de pH lager liggen dan bij harder water; ${g.waterbedrijf} corrigeert dit indien nodig.`;
  }

  return {
    hardheidsklasse: `${g.hardheid}°dH — ${getHardheidLabel(g.categorie)}`,
    nitraatProfiel: nitraat,
    chloorProfiel: chloor,
    phProfiel: ph,
    toelichting,
  };
}

// ─── Helper: provincievergelijking ────────────────────────────────────────────

function getProvincieTekst(g: Gemeente): string {
  const provincieGemeenten = gemeenten.filter(gm => gm.provincie === g.provincie && gm.slug !== g.slug);
  if (provincieGemeenten.length === 0) {
    return `${g.naam} is de enige gemeente in dit overzicht voor ${g.provincie}.`;
  }
  const gemiddeld = Math.round(
    provincieGemeenten.reduce((sum, gm) => sum + gm.hardheid, 0) / provincieGemeenten.length
  );
  const hardste = provincieGemeenten.reduce((prev, cur) => cur.hardheid > prev.hardheid ? cur : prev);
  const zachtste = provincieGemeenten.reduce((prev, cur) => cur.hardheid < prev.hardheid ? cur : prev);

  if (g.hardheid > gemiddeld + 2) {
    return `Vergeleken met andere gemeenten in ${g.provincie} heeft ${g.naam} relatief hard leidingwater (${g.hardheid}°dH versus het provinciegemiddelde van ~${gemiddeld}°dH). ${hardste.naam} heeft het hardste water in de provincie (${hardste.hardheid}°dH); ${zachtste.naam} het zachtste (${zachtste.hardheid}°dH). De hardheid in ${g.naam} is het directe gevolg van de lokale bodemgesteldheid en de bronnen die ${g.waterbedrijf} gebruikt.`;
  }
  if (g.hardheid < gemiddeld - 2) {
    return `In vergelijking met andere gemeenten in ${g.provincie} heeft ${g.naam} relatief zacht leidingwater (${g.hardheid}°dH versus het provinciegemiddelde van ~${gemiddeld}°dH). ${hardste.naam} heeft het hardste water in de provincie (${hardste.hardheid}°dH); ${zachtste.naam} het zachtste (${zachtste.hardheid}°dH). Het water van ${g.waterbedrijf} in ${g.naam} wordt gewaardeerd om zijn frisse smaak.`;
  }
  return `Het leidingwater in ${g.naam} (${g.hardheid}°dH) zit dicht bij het gemiddelde voor ${g.provincie} (~${gemiddeld}°dH). ${hardste.naam} heeft het hardste water in de provincie (${hardste.hardheid}°dH); ${zachtste.naam} het zachtste (${zachtste.hardheid}°dH). De samenstelling van leidingwater in ${g.naam} is representatief voor de regio.`;
}

export default async function LeidingwaterPage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const hardLabel = getHardheidLabel(gemeente.categorie);
  const waterbedrijfInfo = getWaterbedrijfInfo(gemeente.waterbedrijf, gemeente.naam);
  const waterbronTekst = getWaterbronTekst(gemeente);
  const samenstelling = getSamenstellingTekst(gemeente);
  const provincieTekst = getProvincieTekst(gemeente);

  const isHardWater = gemeente.hardheid >= 12;
  const isZeerHard = gemeente.hardheid >= 18;

  const naburigeGemeenten = gemeenten
    .filter(g => g.provincie === gemeente.provincie && g.slug !== gemeente.slug)
    .slice(0, 6);

  const faqItems = [
    {
      question: `Wie levert het leidingwater in ${gemeente.naam}?`,
      answer: `Het leidingwater in ${gemeente.naam} wordt geleverd door ${gemeente.waterbedrijf}. Dit bedrijf is verantwoordelijk voor de winning, zuivering en distributie van drinkwater in de regio. Het water voldoet aan alle Nederlandse drinkwaternormen.`,
    },
    {
      question: `Hoe hard is het leidingwater in ${gemeente.naam}?`,
      answer: `Het leidingwater in ${gemeente.naam} heeft een hardheid van ${gemeente.hardheid}°dH (Deutsche Härtegrade). Dat valt in de categorie "${hardLabel.toLowerCase()}". Hardheid wordt bepaald door de concentratie calcium en magnesium in het water. Een volledig hardheidoverzicht vind je op /waterhardheid/${gemeente.slug}.`,
    },
    {
      question: `Zit er nitraat in het leidingwater van ${gemeente.naam}?`,
      answer: `Ja, maar in veilige hoeveelheden. Het nitraatgehalte in het leidingwater van ${gemeente.naam} (${gemeente.waterbedrijf}) ligt ruimschoots onder de wettelijke norm van 50 mg/liter. Nitraat komt van nature voor in grondwater door landbouwactiviteiten. ${gemeente.waterbedrijf} monitort dit continu. Lees meer op /kennisbank/nitraat-drinkwater.`,
    },
    {
      question: `Is het leidingwater in ${gemeente.naam} gefluorideerd?`,
      answer: `Nee. Nederland voegt geen fluoride toe aan het leidingwater. Fluoride komt van nature in kleine hoeveelheden voor in grondwater, maar het wordt niet kunstmatig toegevoegd door waterbedrijven — ook niet door ${gemeente.waterbedrijf} in ${gemeente.naam}. Lees meer op /kennisbank/fluor-drinkwater.`,
    },
    {
      question: `Heeft leidingwater in ${gemeente.naam} kalk?`,
      answer: `Ja, leidingwater bevat altijd enige hoeveelheid calcium en magnesium (kalk). In ${gemeente.naam} is de hardheid ${gemeente.hardheid}°dH — ${isHardWater ? 'dat is relatief hoog en zorgt voor zichtbare kalkaanslag in waterkokers en kranen' : 'dat is gematigd en geeft weinig kalkproblemen'}. ${isHardWater ? 'Een waterfilter zoals omgekeerde osmose kan de kalklast sterk verminderen.' : 'Bij deze hardheid is een filter voor kalk-verwijdering niet urgent.'}`,
    },
  ];

  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Leidingwater', url: 'https://waterfilterplatform.nl/leidingwater' },
          {
            name: `Leidingwater ${gemeente.naam}`,
            url: `https://waterfilterplatform.nl/leidingwater/${gemeente.slug}`,
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
            <Link href="/kennisbank/waterkwaliteit-nederland" className="hover:text-[#005F8A]">Leidingwater</Link>
            <span>/</span>
            <span className="text-gray-600">{gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4 leading-tight">
            Leidingwater {gemeente.naam}: kwaliteit, samenstelling & info
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Alles over het leidingwater in {gemeente.naam}: wie levert het, hoe wordt het
            gezuiverd, wat zit erin en hoe verhoudt het zich tot andere gemeenten in{' '}
            {gemeente.provincie}? Hardheid: <strong>{gemeente.hardheid}°dH</strong> via{' '}
            <strong>{gemeente.waterbedrijf}</strong>.
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
            <span className="text-xs text-gray-500">{gemeente.waterbedrijf} · {gemeente.provincie}</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Snelle feitenkaart */}
        <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-[#003F5C] mb-3">
            Leidingwater {gemeente.naam} in het kort
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
              <dt className="text-xs text-gray-500">Waterbedrijf</dt>
              <dd className="font-semibold text-gray-800">{gemeente.waterbedrijf}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Provincie</dt>
              <dd className="font-semibold text-gray-800">{gemeente.provincie}</dd>
            </div>
          </dl>
        </section>

        {/* Sectie 1: Waterbedrijf */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Welk bedrijf levert leidingwater in {gemeente.naam}?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{waterbedrijfInfo}</p>
          <Link
            href={`/waterhardheid/${gemeente.slug}`}
            className="text-sm text-[#005F8A] underline"
          >
            Waterhardheid {gemeente.naam} — volledig overzicht →
          </Link>
        </section>

        {/* Sectie 2: Waterbron & zuivering */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Waterbron en zuiveringsproces
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{waterbronTekst}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/kennisbank/waterkwaliteit-nederland"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Waterkwaliteit Nederland
              </p>
              <p className="text-xs text-gray-500 mt-1">Landelijk overzicht van normen en bronnen</p>
            </Link>
            <Link
              href="/kennisbank/nitraat-drinkwater"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Nitraat in drinkwater
              </p>
              <p className="text-xs text-gray-500 mt-1">Normen, risico's en waterfilters</p>
            </Link>
          </div>
        </section>

        {/* Sectie 3: Samenstelling */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Samenstelling leidingwater {gemeente.naam}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">{samenstelling.toelichting}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            <div className="bg-[#E0F2FE] rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500">Hardheid</p>
              <p className="text-base font-bold text-[#005F8A]">{gemeente.hardheid}°dH</p>
              <p className="text-xs text-gray-600">{hardLabel}</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500">pH (typisch)</p>
              <p className="text-base font-bold text-[#005F8A]">{samenstelling.phProfiel.split(' ')[0]}</p>
              <p className="text-xs text-gray-600">Licht basisch</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500">Nitraat</p>
              <p className="text-base font-bold text-[#005F8A]">&lt;25 mg/l</p>
              <p className="text-xs text-gray-600">Ruim onder norm</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-3 text-center">
              <p className="text-xs text-gray-500">Chloor</p>
              <p className="text-base font-bold text-[#005F8A]">&lt;0,5 mg/l</p>
              <p className="text-xs text-gray-600">Laag</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Waarden zijn indicatief op basis van bekende waterprofielen voor deze regio. Raadpleeg {gemeente.waterbedrijf} voor exacte jaarrapportages.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/kennisbank/fluor-drinkwater"
              className="text-sm text-[#005F8A] underline"
            >
              Fluoride in leidingwater: feiten en fabels →
            </Link>
            <Link
              href="/kennisbank/nitraat-drinkwater"
              className="text-sm text-[#005F8A] underline"
            >
              Nitraat in drinkwater →
            </Link>
          </div>
        </section>

        {/* Sectie 4: Vergelijking provincie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Leidingwater in {gemeente.naam} vs andere gemeenten in {gemeente.provincie}
          </h2>
          <p className="text-gray-700 leading-relaxed">{provincieTekst}</p>
        </section>

        {/* CTA */}
        {isHardWater ? (
          <div className="bg-gradient-to-br from-[#005F8A] to-[#003F5C] text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              {isZeerHard
                ? `Zeer hard leidingwater in ${gemeente.naam} (${gemeente.hardheid}°dH)`
                : `Hard leidingwater in ${gemeente.naam} (${gemeente.hardheid}°dH)`}
            </h2>
            <p className="text-blue-100 mb-5 max-w-lg">
              {isZeerHard
                ? `Omgekeerde osmose verwijdert 95–99% van de kalk en andere opgeloste stoffen uit het harde leidingwater in ${gemeente.naam}.`
                : `Met hard leidingwater is een osmosefilter de meest effectieve aanpak voor kalkreductie en smaakverbetering.`}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="inline-block bg-white text-[#005F8A] font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Vergelijk osmose systemen →
              </Link>
              <Link
                href="/omgekeerde-osmose"
                className="inline-block border border-blue-300 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Meer over omgekeerde osmose
              </Link>
            </div>
          </div>
        ) : (
          <CTABanner context="algemeen" variant="default" />
        )}

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer informatie over leidingwater</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href={`/waterhardheid/${gemeente.slug}`}
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Waterhardheid {gemeente.naam}
              </p>
              <p className="text-xs text-gray-500 mt-1">Uitgebreid overzicht van hardheid en kalk</p>
            </Link>
            <Link
              href="/kennisbank/waterkwaliteit-nederland"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Waterkwaliteit Nederland
              </p>
              <p className="text-xs text-gray-500 mt-1">Landelijk overzicht en achtergrond</p>
            </Link>
            <Link
              href="/kennisbank/nitraat-drinkwater"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Nitraat in drinkwater
              </p>
              <p className="text-xs text-gray-500 mt-1">Normen, risico's en hoe je het verwijdert</p>
            </Link>
            <Link
              href="/kennisbank/fluor-drinkwater"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Fluoride in drinkwater
              </p>
              <p className="text-xs text-gray-500 mt-1">Feiten en wat je eraan kunt doen</p>
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Omgekeerde osmose
              </p>
              <p className="text-xs text-gray-500 mt-1">Hoe het werkt en wanneer het loont</p>
            </Link>
            <Link
              href={`/kraanwater/${gemeente.slug}`}
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Kraanwater {gemeente.naam}
              </p>
              <p className="text-xs text-gray-500 mt-1">Direct drinkbaar of beter filteren?</p>
            </Link>
          </div>
        </section>

        {/* Naburige gemeenten */}
        {naburigeGemeenten.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">
              Leidingwater in andere gemeenten in {gemeente.provincie}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Vergelijk de leidingwaterkwaliteit van {gemeente.naam} met naburige gemeenten:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {naburigeGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/leidingwater/${g.slug}`}
                  className="border border-gray-100 rounded-xl px-4 py-2.5 hover:border-[#005F8A] hover:shadow-sm transition-all flex justify-between items-center"
                >
                  <span className="text-sm font-medium text-gray-800">Leidingwater {g.naam}</span>
                  <span className="text-xs text-gray-500">{g.hardheid}°dH · {g.waterbedrijf}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <GemeenteLinks gemeente={gemeente} currentPath="leidingwater" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: leidingwater in {gemeente.naam}
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
