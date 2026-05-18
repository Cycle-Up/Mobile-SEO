import type { Metadata } from 'next';
import Link from 'next/link';
import { gemeenten } from '@/data/gemeenten';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterhardheid Nederland: Kaart & Overzicht',
  description:
    'Ontdek de waterhardheid in elke provincie van Nederland. Bekijk ons regionaal overzicht met gemiddelde °dH-waarden, hardste en zachtste gebieden en uitleg.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterhardheid/kaart' },
  openGraph: {
    title: 'Waterhardheid Nederland: Kaart & Overzicht per provincie',
    description:
      'Welke provincies hebben het hardste of zachtste water? Bekijk ons overzicht van waterhardheid per provincie en regio.',
  },
};

const faqItems = [
  {
    question: 'Welke provincie heeft het hardste water in Nederland?',
    answer:
      'Noord-Brabant en Limburg hebben het hardste leidingwater in Nederland. In gemeenten zoals Eindhoven, Helmond, Asten en Sittard-Geleen loopt de waterhardheid op tot 18–19°dH. Dit komt door de kalkrijke ondergrond en het gebruik van grondwater.',
  },
  {
    question: 'Waar is het water het zachtst in Nederland?',
    answer:
      'Groningen en Drenthe hebben het zachtste leidingwater, met gemiddeld 5–7°dH. Ook Friesland scoort laag. Het water wordt hier gewonnen uit veengebieden en zandgrond, die weinig calcium en magnesium bevatten.',
  },
  {
    question: 'Waarom verschilt de waterhardheid zo sterk per regio?',
    answer:
      'De waterhardheid hangt samen met de bodemgesteldheid. In zandgronden (noordelijk Nederland) lost weinig kalk op in het grondwater. In kleigronden en kalkrijke bodems (Brabant, Limburg, Zeeland) neemt het water veel calcium en magnesium op. Ook de winning — oppervlaktewater versus grondwater — speelt een rol.',
  },
  {
    question: 'Is de waterhardheid op de kaart altijd actueel?',
    answer:
      'De gegevens zijn gebaseerd op de meest recente jaarverslagen van de Nederlandse waterbedrijven (Vitens, Brabant Water, WML, Dunea, Evides, PWN e.a.). Waterhardheid kan licht variëren per seizoen en bron, maar de gemiddelden zijn stabiel van jaar tot jaar.',
  },
  {
    question: 'Hoe weet ik precies hoe hard het water in mijn gemeente is?',
    answer:
      'Via onze gemeentepagina kunt u de exacte waterhardheid voor uw eigen gemeente opzoeken. We hebben gegevens voor meer dan 340 gemeenten beschikbaar. Ga naar /waterhardheid en zoek uw gemeente op voor de specifieke °dH-waarde.',
  },
];

// Derive province statistics from gemeenten data
function buildProvincieData() {
  const map = new Map<string, { sum: number; count: number; min: number; max: number }>();
  for (const g of gemeenten) {
    const existing = map.get(g.provincie);
    if (existing) {
      existing.sum += g.hardheid;
      existing.count += 1;
      if (g.hardheid < existing.min) existing.min = g.hardheid;
      if (g.hardheid > existing.max) existing.max = g.hardheid;
    } else {
      map.set(g.provincie, { sum: g.hardheid, count: 1, min: g.hardheid, max: g.hardheid });
    }
  }
  return Array.from(map.entries())
    .map(([naam, stats]) => ({
      naam,
      avg: Math.round(stats.sum / stats.count),
      min: stats.min,
      max: stats.max,
      count: stats.count,
    }))
    .sort((a, b) => b.avg - a.avg);
}

function getCategorie(dh: number): { label: string; kleur: string; ring: string } {
  if (dh < 8) return { label: 'Zacht', kleur: 'bg-green-100 text-green-800', ring: 'ring-green-300' };
  if (dh < 12) return { label: 'Matig', kleur: 'bg-lime-100 text-lime-800', ring: 'ring-lime-300' };
  if (dh < 18) return { label: 'Matig hard', kleur: 'bg-amber-100 text-amber-800', ring: 'ring-amber-300' };
  if (dh < 25) return { label: 'Hard', kleur: 'bg-orange-100 text-orange-800', ring: 'ring-orange-300' };
  return { label: 'Zeer hard', kleur: 'bg-red-100 text-red-800', ring: 'ring-red-300' };
}

export default function WaterhardheidKaartPage() {
  const provincieData = buildProvincieData();

  const hardeGemeenten = gemeenten
    .filter(g => g.hardheid >= 18)
    .sort((a, b) => b.hardheid - a.hardheid)
    .slice(0, 12);

  const zachteGemeenten = gemeenten
    .filter(g => g.hardheid <= 6)
    .sort((a, b) => a.hardheid - b.hardheid)
    .slice(0, 12);

  // Province grouping for detailed table
  const provincies = [...new Set(gemeenten.map(g => g.provincie))].sort();

  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterhardheid', url: 'https://waterfilterplatform.nl/waterhardheid' },
          { name: 'Kaart & Overzicht', url: 'https://waterfilterplatform.nl/waterhardheid/kaart' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterhardheid" className="hover:text-[#005F8A]">Waterhardheid</Link>
            <span className="mx-2">/</span>
            <span>Kaart & Overzicht</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid Nederland: Kaart &amp; Regionaal Overzicht
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            In welke provincie is het water het hardst? En waar is het zacht? Bekijk ons uitgebreid overzicht van waterhardheid per provincie — van Groningen tot Limburg — inclusief de oorzaken en praktische gevolgen voor uw huishouden.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/waterhardheid"
              className="inline-flex items-center gap-2 bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#004A6D] transition-colors text-sm"
            >
              Zoek uw gemeente →
            </Link>
            <Link
              href="/waterhardheid/verlagen"
              className="inline-flex items-center gap-2 bg-white text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl border border-[#005F8A] hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterhardheid verlagen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-14">

        {/* Hardheidsklassen uitleg */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De 5 categorieën waterhardheid</h2>
          <p className="text-gray-600 mb-5">
            Waterhardheid wordt uitgedrukt in graden Duitse hardheid (°dH). Het getal geeft aan hoeveel calcium (Ca²⁺) en magnesium (Mg²⁺) er per liter water opgelost zijn. Hoe hoger het getal, hoe meer kalk het water bevat en hoe sneller kalkaanslag ontstaat op apparaten en kranen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-sm">
            {[
              { label: 'Zacht', range: '< 8°dH', desc: 'Weinig kalk, ideaal water', kleur: 'bg-green-50 border-green-200 text-green-900' },
              { label: 'Matig', range: '8–12°dH', desc: 'Lichte kalkaanslag mogelijk', kleur: 'bg-lime-50 border-lime-200 text-lime-900' },
              { label: 'Matig hard', range: '12–18°dH', desc: 'Kalkaanslag op apparaten', kleur: 'bg-amber-50 border-amber-200 text-amber-900' },
              { label: 'Hard', range: '18–25°dH', desc: 'Merkbare kalk, filter aan te raden', kleur: 'bg-orange-50 border-orange-200 text-orange-900' },
              { label: 'Zeer hard', range: '> 25°dH', desc: 'Zware kalkaanslag, filter nodig', kleur: 'bg-red-50 border-red-200 text-red-900' },
            ].map(h => (
              <div key={h.label} className={`border rounded-xl p-3 ${h.kleur}`}>
                <p className="font-bold text-base">{h.label}</p>
                <p className="font-semibold text-sm mt-0.5">{h.range}</p>
                <p className="text-xs mt-1 opacity-80">{h.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Bron: NEN-EN 15768 / VEWIN richtlijnen voor de Nederlandse watermarkt. In Nederland hanteert men ook de indeling &lt;4, 4–8, 8–12, 12–18, &gt;18°dH — dit overzicht gebruikt de bredere Europese klasse-indeling.
          </p>
        </section>

        {/* Province overview table */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Waterhardheid per provincie</h2>
          <p className="text-gray-600 mb-5">
            De tabel hieronder toont de gemiddelde waterhardheid per provincie, berekend op basis van de gegevens van alle gemeenten in onze database. Naast het gemiddelde ziet u ook de laagste en hoogste waarde binnen de provincie, zodat u een goed beeld krijgt van de spreiding.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#005F8A] text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Provincie</th>
                  <th className="text-center px-4 py-3 font-semibold">Gem. (°dH)</th>
                  <th className="text-center px-4 py-3 font-semibold">Min</th>
                  <th className="text-center px-4 py-3 font-semibold">Max</th>
                  <th className="text-center px-4 py-3 font-semibold rounded-tr-2xl">Klasse</th>
                </tr>
              </thead>
              <tbody>
                {provincieData.map((p, i) => {
                  const cat = getCategorie(p.avg);
                  return (
                    <tr key={p.naam} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium text-gray-800">{p.naam}</td>
                      <td className="px-4 py-3 text-center font-bold text-[#005F8A]">{p.avg}°dH</td>
                      <td className="px-4 py-3 text-center text-gray-600">{p.min}°</td>
                      <td className="px-4 py-3 text-center text-gray-600">{p.max}°</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${cat.kleur}`}>
                          {cat.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Gemiddelden berekend op basis van {gemeenten.length} gemeenten in de WaterfilterPlatform-database.</p>
        </section>

        {/* Regional narrative */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hardste regio&apos;s van Nederland</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-[#003F5C]">Noord-Brabant</strong> heeft verreweg het hardste leidingwater van Nederland. Brabant Water — het enige waterbedrijf in de provincie — levert water met een gemiddelde hardheid van 16–19°dH, afhankelijk van de gemeente. In het oostelijke deel van Brabant (de Peelregio) is het water nog harder dan in het westen. De oorzaak ligt in de diepe kalkrijke zandgronden waaruit het grondwater gewonnen wordt; het water passeert op weg naar de pompstations lagen vol calciumcarbonaat die het oplost.
            </p>
            <p>
              <strong className="text-[#003F5C]">Limburg</strong> heeft vergelijkbaar hard water. WML (Waterleiding Maatschappij Limburg) levert water uit de kalkrijke Maas-ondergrond en de Limburgse heuvelformaties. In Sittard-Geleen, Maastricht en het zuidelijke Heuvelland loopt de hardheid op tot 17–18°dH. Het zuiden van Limburg staat in heel Nederland bekend als een van de zwaarste kalkgebieden.
            </p>
            <p>
              <strong className="text-[#003F5C]">Gelderland</strong> laat een grote spreiding zien: de Betuwe en de gebieden langs de grote rivieren (Nijmegen, Tiel, Beuningen) scoren 15–16°dH, terwijl Zutphen, Lochem en de Veluwerand op 11–12°dH uitkomen. Het verschil zit in de bodem: rivierklei in het rivierengebied heeft een hoger calciumgehalte dan de zandgronden van de Veluwe.
            </p>
            <p>
              <strong className="text-[#003F5C]">Utrecht</strong> scoort met een gemiddelde van 12–14°dH in het middensegment. De provincie haalt zijn water grotendeels uit grondwater in de Utrechtse Heuvelrug en duinzandgebieden bij Soest en Baarn. Gemeenten als Amersfoort (13°dH) en Veenendaal (14°dH) liggen hoger dan het Groene Hart en de Midden-Utrechtse veenpolder.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Zachtste regio&apos;s van Nederland</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              <strong className="text-[#003F5C]">Groningen</strong> heeft met 5–6°dH het zachtste leidingwater van de drie noordelijke provincies. Het water wordt gewonnen uit ondiepe zandaquifers en oerstroomdalen met veenachtige ondergrond. De kalkgehalten in deze bodems zijn laag: het water passeert nauwelijks kalkrijke lagen voordat het gewonnen wordt.
            </p>
            <p>
              <strong className="text-[#003F5C]">Drenthe</strong> scoort vergelijkbaar zacht (6–7°dH). WMD levert water uit de Drentse zandgronden en het hoogveen-invloedsgebied. De provincie staat al decennialang bekend als een van de beste regio&apos;s voor huishoudens die weinig last willen hebben van kalkaanslag.
            </p>
            <p>
              <strong className="text-[#003F5C]">Friesland</strong> heeft eveneens zacht water (6°dH gemiddeld). Vitens wint er water uit de freatische zandlagen onder de veenweidegebieden en de Friese klei. In de kuststrook en rond het IJsselmeer kan de hardheid iets hoger zijn door zeekleiinvloed, maar de meeste Friese gemeenten scoren comfortabel onder de 7°dH.
            </p>
            <p>
              <strong className="text-[#003F5C]">Noord-Holland en Zuid-Holland (kuststrook)</strong> scoren overwegend 7–8°dH. De duingebieden filteren het oppervlaktewater voordat het als drinkwater wordt geleverd door PWN, Dunea en Evides. Dit duinfiltratieproces geeft het water een gematigde hardheid — harder dan Groningen, maar zeker niet zo problematisch als de Brabantse binnengebieden.
            </p>
          </div>
        </section>

        {/* Top hard & soft */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Hardste gemeenten (≥18°dH)</h2>
            <p className="text-xs text-gray-500 mb-3">Gemeenten met het hardste leidingwater in Nederland</p>
            <div className="space-y-2">
              {hardeGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/waterhardheid/${g.slug}`}
                  className="flex items-center justify-between p-3 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
                >
                  <div>
                    <span className="font-medium text-gray-800">{g.naam}</span>
                    <span className="text-xs text-gray-500 ml-2">{g.provincie}</span>
                  </div>
                  <span className="font-bold text-red-700">{g.hardheid}°dH</span>
                </Link>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Zachtste gemeenten (≤6°dH)</h2>
            <p className="text-xs text-gray-500 mb-3">Gemeenten met het zachtste leidingwater in Nederland</p>
            <div className="space-y-2">
              {zachteGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/waterhardheid/${g.slug}`}
                  className="flex items-center justify-between p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <div>
                    <span className="font-medium text-gray-800">{g.naam}</span>
                    <span className="text-xs text-gray-500 ml-2">{g.provincie}</span>
                  </div>
                  <span className="font-bold text-green-700">{g.hardheid}°dH</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Geology explanation */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom verschilt waterhardheid per regio?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              De waterhardheid in Nederland is vrijwel volledig bepaald door de bodemgesteldheid en de herkomst van het drinkwater. Nederland heeft grofweg vier geologische zones die elk een heel andere invloed hebben op de waterhardheid.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  titel: 'Zandgrond (Noord, Oost)',
                  kleur: 'bg-yellow-50 border-yellow-200',
                  tekst:
                    'In Groningen, Drenthe, Friesland en de Veluwe domineert zand- en veengrond. Deze bodems zijn arm aan calcium en magnesium. Regenwater infiltreert snel zonder veel mineralen op te lossen, wat resulteert in zacht grondwater (4–8°dH).',
                },
                {
                  titel: 'Rivierklei (Gelderland, Utrecht)',
                  kleur: 'bg-amber-50 border-amber-200',
                  tekst:
                    'In het rivierengebied bestaat de bodem uit rivierklei die rijk is aan calcium en ijzer. Grondwater en oppervlaktewater uit de Rijn en Maas nemen meer mineralen op, wat leidt tot matig tot hard water (12–16°dH).',
                },
                {
                  titel: 'Zeeklei & duinzand (Kust)',
                  kleur: 'bg-blue-50 border-blue-200',
                  tekst:
                    'Langs de kust wint men water via duininfiltratie: rivierwater wordt in de duinen geïnfiltreerd en na filtering gewonnen. De duinen bevatten schelpen (calciumcarbonaat) die het water matig hard maken (7–10°dH).',
                },
                {
                  titel: 'Kalkrijke gronden (Brabant, Limburg)',
                  kleur: 'bg-orange-50 border-orange-200',
                  tekst:
                    'In Noord-Brabant en Limburg domineert diep grondwater uit kalkrijke formaties (Maas-afzettingen, Roerdalslenslagen). Het water lost grote hoeveelheden calciumcarbonaat op, wat resulteert in het hardste water van Nederland (15–20°dH).',
                },
              ].map(item => (
                <div key={item.titel} className={`border rounded-xl p-4 ${item.kleur}`}>
                  <h3 className="font-bold text-gray-900 mb-2">{item.titel}</h3>
                  <p className="text-sm text-gray-700">{item.tekst}</p>
                </div>
              ))}
            </div>
            <p>
              Naast de bodemgesteldheid speelt ook de winmethode een rol. Waterbedrijven die oppervlaktewater (rivieren, meren) gebruiken — zoals Evides in Rotterdam en Dunea in de Randstad — kunnen de hardheid bij de zuivering iets bijsturen. Bedrijven die uitsluitend grondwater winnen (zoals Brabant Water) zijn volledig afhankelijk van de plaatselijke bodemchemie.
            </p>
          </div>
        </section>

        {/* Province-by-province detailed breakdown */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Alle gemeenten per provincie</h2>
          <p className="text-gray-600 mb-5">
            Klik op een gemeente om de volledige informatie te zien, inclusief het waterbedrijf, de exacte waterhardheidswaarde en advies voor waterfilters.
          </p>
          <div className="space-y-8">
            {provincies.map(provincie => {
              const pgemeenten = gemeenten
                .filter(g => g.provincie === provincie)
                .sort((a, b) => a.naam.localeCompare(b.naam));
              const provGem = Math.round(pgemeenten.reduce((s, g) => s + g.hardheid, 0) / pgemeenten.length);
              const provCat = getCategorie(provGem);
              return (
                <div key={provincie}>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-bold text-gray-800 text-base uppercase tracking-wide">{provincie}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${provCat.kleur}`}>
                      gem. {provGem}°dH — {provCat.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pgemeenten.map(g => {
                      const kleur =
                        g.categorie === 'zacht' ? 'bg-green-50 text-green-800 border-green-200' :
                        g.categorie === 'matig' ? 'bg-lime-50 text-lime-800 border-lime-200' :
                        g.categorie === 'matig hard' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                        g.categorie === 'hard' ? 'bg-orange-50 text-orange-800 border-orange-200' :
                        'bg-red-50 text-red-800 border-red-200';
                      return (
                        <Link
                          key={g.slug}
                          href={`/waterhardheid/${g.slug}`}
                          className={`text-xs border rounded-full px-3 py-1 hover:shadow-sm transition-shadow ${kleur}`}
                        >
                          {g.naam} ({g.hardheid}°)
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Consequences of hard water */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gevolgen van hard water voor uw huishouden</h2>
          <p className="text-gray-600 mb-5">
            De waterhardheid heeft directe gevolgen voor uw huishouden — van de levensduur van apparaten tot uw maandelijkse energierekening. In hardwatergebieden (15°dH en hoger) zijn de effecten het meest merkbaar.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '🍵',
                titel: 'Waterkoker & koffiezetapparaat',
                tekst:
                  'Kalk hecht zich aan verwarmingselementen. Bij 18°dH heeft een waterkoker na 6 maanden al een merkbare kalklaag. Een kalklaag van 1 mm verhoogt het energieverbruik met 6–8%.',
              },
              {
                icon: '🚿',
                titel: 'Douche en badkamer',
                tekst:
                  'Kalkaanslag op douchewanden, kranen en glazen deuren is in hardwatergebieden een dagelijkse ergernis. Kalk hecht zich aan sanitair en is zonder zuur reinigingsmiddel nauwelijks te verwijderen.',
              },
              {
                icon: '🔥',
                titel: 'CV-ketel en boiler',
                tekst:
                  'In de CV-ketel en het warmwaterboilersysteem slaat kalk neer op warmtewisselaars. Dit verlaagt het rendement en verkort de levensduur. Vervanging van een CV-ketel kost gemiddeld €1.500–€2.500.',
              },
              {
                icon: '🧺',
                titel: 'Wasmachine & vaatwasser',
                tekst:
                  'Hard water vermindert de werking van wasmiddel: u heeft meer zeep nodig voor hetzelfde resultaat. Kalk beschadigt bovendien de pompen en verwarmingselementen, wat reparatiekosten verhoogt.',
              },
              {
                icon: '🧼',
                titel: 'Zeep en huidverzorging',
                tekst:
                  'In hardwatergebieden schuimt zeep minder goed. Het kalkzouten-residu op de huid kan huidirritatie veroorzaken — bekend fenomeen bij mensen met eczeem of een gevoelige huid.',
              },
              {
                icon: '🍹',
                titel: 'Smaak van drinkwater',
                tekst:
                  'Hard water smaakt "zwaarder" en heeft soms een licht krijtachtige nasmaak. Thee en koffie smaken anders dan in zachtwatergebieden. Een omgekeerde osmose filter geeft neutraal, zacht drinkwater.',
              },
            ].map(item => (
              <div key={item.titel} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.titel}</h3>
                  <p className="text-sm text-gray-600">{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions CTA inline */}
        <section className="bg-[#E0F2FE] rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Wat kunt u doen tegen hard water?</h2>
          <p className="text-gray-700 mb-4">
            Afhankelijk van uw situatie zijn er meerdere oplossingen voor hard water. De meest effectieve methode voor drinkwater is een <strong>omgekeerde osmose filter</strong>: dit systeem verwijdert 95–99% van alle calcium en magnesium, waardoor u zacht, puur drinkwater krijgt direct uit de kraan.
          </p>
          <ul className="space-y-2 mb-5 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#005F8A] font-bold mt-0.5">✓</span>
              <span><strong>Omgekeerde osmose</strong> — verwijdert 95–99% kalk, beste oplossing voor drinkwater</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#005F8A] font-bold mt-0.5">✓</span>
              <span><strong>Waterontharder</strong> — effectief voor de gehele huisinstallatie via ionenuitwisseling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#005F8A] font-bold mt-0.5">✓</span>
              <span><strong>TAC/zoutloze ontharding</strong> — voorkomt kalkafzetting zonder zout of chemicaliën</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterhardheid/verlagen"
              className="inline-flex items-center gap-2 bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#004A6D] transition-colors text-sm"
            >
              Alle methoden vergelijken →
            </Link>
            <Link
              href="/waterontharder"
              className="inline-flex items-center gap-2 bg-white text-[#005F8A] font-semibold px-4 py-2.5 rounded-xl border border-[#005F8A] hover:bg-white/80 transition-colors text-sm"
            >
              Over waterontharders
            </Link>
          </div>
        </section>

        <CTABanner context="waterhardheid" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterhardheid per regio</h2>
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

        {/* Internal links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen over waterfilters en waterkwaliteit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente opzoeken' },
              { href: '/waterontharder', label: 'Waterontharder: werking en kosten' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter kopen — 4-in-1 kraan met osmose' },
              { href: '/kennisbank/hardwatergebied-nederland', label: 'Hardwatergebieden in Nederland' },
              { href: '/waterhardheid/verlagen', label: 'Waterhardheid verlagen: alle methoden' },
              { href: '/kennisbank/waterhardheid-verlagen', label: 'Gids: waterhardheid verlagen' },
              { href: '/stoffen-in-drinkwater/kalk-mineralen', label: 'Kalk en mineralen in drinkwater' },
            ].map((l: { href: string; label: string }) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
