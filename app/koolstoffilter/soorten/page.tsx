import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Soorten koolstoffilters: GAC, blokfilter, inline en meer',
  description:
    'Overzicht van alle soorten koolstoffilters: GAC (granulair), koolstofblok (CTO), inline carbon, activated carbon string en keramisch+kool.',
  alternates: { canonical: 'https://waterfilterplatform.nl/koolstoffilter/soorten' },
  openGraph: {
    title: 'Soorten koolstoffilters: GAC, blokfilter, inline en meer',
    description:
      'Alle 5 types koolstoffilters vergeleken: GAC, CTO-blokfilter, inline carbon, snaarfilter en keramisch+kool. Met vergelijkingstabel, toepassingsmatrix en.',
    url: 'https://waterfilterplatform.nl/koolstoffilter/soorten',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat zijn de vijf hoofdtypen koolstoffilters?',
    answer:
      'De vijf hoofdtypen koolstoffilters zijn: (1) GAC (Granular Activated Carbon) — losse koolkorrels, gebruikt in filterkannen en eenvoudige kraanfilters; (2) Koolstofblokfilter (CTO — Carbon Block) — samengeperste kool, superieure adsorptie en mechanische filtratie; (3) Inline carbon — cilindrische patronen op snelkoppelingen, voor onder-aanrecht en pre-filtrage; (4) Activated carbon string/gewikkeld filter — koolstofimpregneerde draden rond een kern; (5) Keramisch met geïntegreerde actieve kool — keramische schaal combineert mechanische filtratie met adsorptie.',
  },
  {
    question: 'Welk type koolstoffilter filtert het beste?',
    answer:
      'Voor de hoogste filterkwaliteit is een koolstofblokfilter (CTO) de beste keuze. De compacte structuur zorgt voor langere contacttijd, betere adsorptie en ook mechanische filtratie van deeltjes tot 0,5–5 micron. NSF/ANSI 53-gecertificeerde blokfilters van merken als Pentair, Doulton of Ecosoft bieden gemiddeld 15–25% hogere verwijderingspercentages dan granulaire filters (GAC) bij gelijke koolstofmassa. Voor eenvoudige smaakverbetering is GAC voldoende.',
  },
  {
    question: 'Wat is het verschil tussen koolstof uit kokosnoot, steenkool en hout?',
    answer:
      'De grondstof bepaalt de poriestructuur. Kokosnootschil-kool heeft veel microporiën (<2 nm) en is optimaal voor chloor-, geur- en smaakverwijdering. Het heeft het hoogste intern oppervlak (1000–1500 m²/g) en is de meest gebruikte variant in kwalitatieve drinkwaterfilters. Steenkoolkool heeft meer mesoporiën (2–50 nm) en verwijdert grotere organische moleculen effectiever, zoals bepaalde pesticiden. Houtskoolgranulaat heeft meer macroporiën en wordt minder gebruikt voor drinkwaterfiltratie vanwege lagere adsorptiecapaciteit.',
  },
  {
    question: 'Wanneer combineer je meerdere types koolstoffilters?',
    answer:
      'Combinaties worden gebruikt om de sterke punten van verschillende types te benutten. Een veelgebruikte combinatie: GAC als pre-filter (goedkoop, hoog debiet, vangt grove deeltjes en bulk chloor op) gevolgd door een koolstofblok (fijne adsorptie, mechanische filtratie). Een andere combinatie: keramisch filter voor bacteriën en sediment, aangevuld met een inline koolstofblok voor geur en smaak. Vrijwel alle osmose systemen gebruiken een koolstoffilter als pre-filter (chloor beschermt het RO-membraan niet) én als nafilter (smaakoptimalisatie).',
  },
  {
    question: 'Welk koolstoffilter is geschikt voor een filterkan (pitcher)?',
    answer:
      'Filterkannen zoals Brita, PearlCo, TAPP Water en BWT gebruiken GAC (granulair) gecombineerd met ionenwisselaarhars in een cartridge. Er zijn ook filterkannen die een koolstofblok gebruiken — zoals sommige TAPP Water-modellen met CTO-technologie — die een betere filterkwaliteit bieden maar ook duurder zijn in aanschaf. Voor filterkannen vervangt u de cartridge als geheel: GAC en ionenwisselhars zijn geïntegreerd en niet afzonderlijk vervangbaar.',
  },
  {
    question: 'Wat is NSF/ANSI 42 vs NSF/ANSI 53 certificering voor koolstoffilters?',
    answer:
      'NSF/ANSI 42 is het basisnorm dat prestaties voor smaak- en geurverbetering certificeert, met name chloorverwijdering. Vrijwel elke koolstoffilter van naam heeft deze certificering. NSF/ANSI 53 is strenger en certificeert verwijdering van gezondheidsschadelijke stoffen zoals lood, bepaalde pesticiden en cystes van Giardia. Zoek bij aankoop minimaal naar NSF/ANSI 42; voor een hogere garantie ook NSF/ANSI 53. Koolstofblokfilters behalen vaker NSF/ANSI 53 dan GAC-filters.',
  },
  {
    question: 'Kan een koolstoffilter ook bacteriën verwijderen?',
    answer:
      'Standaard koolstoffilters (GAC of blok) verwijderen bacteriën niet. De poriën zijn daarvoor te groot. Uitzondering: keramische filters met geïntegreerde kool hebben een keramische schaal met poriën van 0,2–0,9 µm die bacteriën mechanisch tegenhoudt. Sommige koolstofblokfilters zijn NSF/ANSI 53 gecertificeerd voor cystes (Giardia, Cryptosporidium) bij een poriegrootte van 0,5–1 µm — dit zijn protozoa, geen bacteriën. Voor volledige bacteriologische bescherming heeft u een UV-filter of omgekeerde osmose nodig.',
  },
  {
    question: 'Welk type koolstoffilter is geschikt voor een heel-huis-installatie?',
    answer:
      'Voor een "whole house" koolstoffilter is een grote GAC-tank (volumefilter) de meest gebruikte oplossing. Deze installatie bevat een grote hoeveelheid GAC-media (5–50 kg) in een drukvat op het hoofdwatertoevoerpunt. De grote media-hoeveelheid compenseert de kortere contacttijd bij de hogere debieten. Alternatief is een groot koolstofblok met hoge doorstroom (big blue 10"–20"). Voor heel-huis installaties raadpleeg altijd een erkende waterbehandelaar, gezien de hogere druk- en debietvereisten.',
  },
];

const soorten = [
  {
    id: 'gac',
    naam: 'GAC — Granular Activated Carbon',
    porieGrootte: '0,5–2 mm (korrel)',
    intern: '600–1200 m²/g',
    verwijdering: 'Chloor 80–95%, geur 85–90%, THM 75–90%',
    gebruik: 'Filterkannen, eenvoudige kraanfilters, pre-filter voor grote systemen',
    kosten: '€5–15 per cartridge',
    levensduur: '4–12 weken (kan) / 3–6 mnd (systeem)',
    pro: 'Goedkoop, hoge doorstroomsnelheid, breed beschikbaar',
    con: 'Kanalvorming mogelijk, minder effectief dan blokfilter, geen mechanische filtratie',
  },
  {
    id: 'cto',
    naam: 'Koolstofblokfilter (CTO — Carbon Block)',
    porieGrootte: '0,5–5 µm (blokporiën)',
    intern: '800–1500 m²/g',
    verwijdering: 'Chloor 95–99%, THM 90–99%, pesticiden 70–90%, deeltjes >0,5 µm',
    gebruik: 'Onderbouw systemen, kraanfilters (premium), osmose pre-filter',
    kosten: '€15–50 per cartridge',
    levensduur: '6–12 maanden / 2000–4000 liter',
    pro: 'Hoogste adsorptie, ook mechanische filtratie, consistente kwaliteit',
    con: 'Hogere aanschafprijs, lagere doorstroomsnelheid dan GAC',
  },
  {
    id: 'inline',
    naam: 'Inline carbon (cilindrisch patroon)',
    porieGrootte: 'Afhankelijk van vulling (GAC of CTO)',
    intern: '600–1500 m²/g (type-afhankelijk)',
    verwijdering: 'Afhankelijk van vulling: vergelijkbaar met GAC of CTO',
    gebruik: 'Onderbouw pre-/nafilter, koelkastfilter, RO-systeem',
    kosten: '€10–40 per patroon',
    levensduur: '6–12 maanden / 3000–10.000 liter',
    pro: 'Eenvoudige snelkoppeling montage, veelzijdig, grote keuze',
    con: 'Kwaliteit afhankelijk van fabrikant; altijd nakijken wat de vulling is',
  },
  {
    id: 'string',
    naam: 'Activated carbon string / gewikkeld',
    porieGrootte: '1–30 µm (gewikkeld)',
    intern: 'Lager dan CTO (geen persing)',
    verwijdering: 'Primair sediment en deeltjes; beperkte adsorptie',
    gebruik: 'Sediment pre-filter, brouwerijwater, industrieel',
    kosten: '€5–20 per element',
    levensduur: '3–6 maanden',
    pro: 'Hoge sediment-retentie, goedkoop',
    con: 'Beperkte adsorptiecapaciteit; niet voor geur/chloor verwijdering',
  },
  {
    id: 'keramisch',
    naam: 'Keramisch + actieve kool (combinatiefilter)',
    porieGrootte: '0,2–0,9 µm (keramisch)',
    intern: '500–1000 m²/g (koolstofkern)',
    verwijdering: 'Bacteriën (keramisch), chloor + geur (koolstofkern), deeltjes',
    gebruik: 'Vrijstaande filterkraan, onder aanrecht zonder osmose, landhuizen, reis',
    kosten: '€30–80 per filterpatroon',
    levensduur: '6–12 maanden',
    pro: 'Bacteriologische bescherming zonder elektriciteit, geen verbruikswater',
    con: 'Lagere doorstroomsnelheid, hogere patroonprijs, keramiek breekt bij stoten',
  },
];

const vergelijkingsTabel = [
  {
    type: 'GAC (granulair)',
    porie: '—',
    chloor: '80–95%',
    thm: '75–90%',
    bacterien: '0%',
    prijs: '€5–15/patroon',
    leven: '4 wk – 6 mnd',
  },
  {
    type: 'Koolstofblok (CTO)',
    porie: '0,5–5 µm',
    chloor: '95–99%',
    thm: '90–99%',
    bacterien: '0%',
    prijs: '€15–50/patroon',
    leven: '6–12 mnd',
  },
  {
    type: 'Inline carbon',
    porie: 'Afhankelijk',
    chloor: '80–99%*',
    thm: '75–99%*',
    bacterien: '0%',
    prijs: '€10–40/patroon',
    leven: '6–12 mnd',
  },
  {
    type: 'Carbon string',
    porie: '1–30 µm',
    chloor: '<40%',
    thm: '<30%',
    bacterien: '0%',
    prijs: '€5–20/element',
    leven: '3–6 mnd',
  },
  {
    type: 'Keramisch + kool',
    porie: '0,2–0,9 µm',
    chloor: '90–95%',
    thm: '80–90%',
    bacterien: '99%+',
    prijs: '€30–80/patroon',
    leven: '6–12 mnd',
  },
];

const toepassingsMatrix = [
  { toepassing: 'Filterkan (pitcher)', gac: true, cto: false, inline: false, string: false, keramisch: false },
  { toepassing: 'Kraanfilter (op de kraan)', gac: true, cto: true, inline: false, string: false, keramisch: false },
  { toepassing: 'Onderbouw (onder aanrecht)', gac: true, cto: true, inline: true, string: false, keramisch: true },
  { toepassing: 'Heel-huis (whole house)', gac: true, cto: false, inline: false, string: true, keramisch: false },
  { toepassing: 'Inline (koelkast, RO-pre)', gac: true, cto: true, inline: true, string: false, keramisch: false },
  { toepassing: 'Reisfilter / noodfilter', gac: false, cto: false, inline: false, string: false, keramisch: true },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Koolstoffilter', url: 'https://waterfilterplatform.nl/koolstoffilter' },
  { name: 'Soorten', url: 'https://waterfilterplatform.nl/koolstoffilter/soorten' },
];

export default function SoortenKoolstoffiltersPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Soorten koolstoffilters: GAC, blokfilter, inline en meer',
          description:
            'Alle 5 types koolstoffilters vergeleken: GAC, CTO-blokfilter, inline carbon, snaarfilter en keramisch+kool. Met vergelijkingstabel, toepassingsmatrix en.',
          datePublished: '2026-02-25',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/koolstoffilter/soorten',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/koolstoffilter" className="hover:text-[#005F8A]">Koolstoffilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Soorten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Soorten koolstoffilters: GAC, blokfilter, inline en meer
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Niet alle koolstoffilters zijn gelijk. Van losse GAC-korrels in een filterkan tot
            een samengeperst koolstofblok met 0,5-micron filtratie en keramische combinatiefilters
            met bacteriologische bescherming — de keuze bepaalt hoe goed uw filter presteert.
            Op deze pagina vergelijken we alle vijf soorten koolstoffilters op poriegrootte,
            verwijderingscapaciteit, kosten en toepassingen.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~8 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Er zijn vijf soorten koolstoffilters: GAC (granulair, filterkannen), koolstofblok/CTO (beste adsorptie, onderbouw), inline carbon (snelkoppelingen, RO-pre-filter), carbon string (sediment), en keramisch+kool (bacteriën+geur). Een blokfilter (CTO) filtert het beste. GAC is het goedkoopst. Keramisch biedt als enige type ook bacteriologische bescherming." />

        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#overzicht', 'Overzicht van alle 5 types'],
              ['#vergelijking', 'Vergelijkingstabel'],
              ['#matrix', 'Toepassingsmatrix'],
              ['#combineren', 'Wanneer types combineren?'],
              ['#kooptips', 'Kooptips en certificering'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Inleiding */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vijf types koolstoffilters — een introductie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Alle koolstoffilters delen hetzelfde basisprincipe: geactiveerde kool adsorbeert
            verontreinigingen via van der Waals-krachten. Maar de fysieke vorm, de grondstoffen
            en de fabricagemethode bepalen enorm hoe effectief en hoe lang een filter werkt.
            De vijf hoofdtypen dekken een breed spectrum van eenvoudige smaakverbetering tot
            gecombineerde bacteriologische en chemische bescherming.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wilt u eerst begrijpen hoe actieve kool in zijn algemeenheid werkt? Lees de pagina{' '}
            <Link href="/koolstoffilter/werking" className="text-[#005F8A] underline hover:no-underline">
              koolstoffilter werking
            </Link>{' '}
            voor de wetenschap achter adsorptie en van der Waals-krachten.
          </p>
        </section>

        {/* Overzicht 5 types */}
        <section id="overzicht">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Alle 5 soorten koolstoffilters uitgelegd</h2>
          <div className="space-y-6">
            {soorten.map((s, i) => (
              <div key={s.id} id={s.id} className="border border-gray-100 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-[#003F5C] text-lg">{i + 1}. {s.naam}</h3>
                  <span className="text-xs text-[#005F8A] font-semibold bg-[#E0F2FE] px-2.5 py-1 rounded-full shrink-0 ml-2">
                    {s.kosten}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold mb-1">Poriegrootte</p>
                    <p className="text-gray-800">{s.porieGrootte}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold mb-1">Intern oppervlak</p>
                    <p className="text-gray-800">{s.intern}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold mb-1">Verwijderingscapaciteit</p>
                    <p className="text-gray-800">{s.verwijdering}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase font-semibold mb-1">Levensduur</p>
                    <p className="text-gray-800">{s.levensduur}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  <strong className="text-gray-800">Typisch gebruik:</strong> {s.gebruik}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.pro.split(', ').map(p => (
                    <span key={p} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">{p}</span>
                  ))}
                  {s.con.split('; ').map(c => (
                    <span key={c} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijkingstabel: alle 5 types naast elkaar</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Onderstaande tabel geeft een overzicht van de vijf types op de meest relevante criteria.
            De percentages zijn typische waarden bij normaal Nederlands leidingwater.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">Porie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Chloor</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">THM</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden md:table-cell">Bacteriën</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Prijs/patroon</th>
                  <th className="py-2.5 px-3 font-semibold text-right hidden md:table-cell">Levensduur</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingsTabel.map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.type}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 hidden sm:table-cell text-xs">{r.porie}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-green-700">{r.chloor}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700 hidden sm:table-cell">{r.thm}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700 hidden md:table-cell">{r.bacterien}</td>
                    <td className="py-2.5 px-3 text-center text-[#005F8A] font-semibold">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600 text-xs hidden md:table-cell">{r.leven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            * Inline carbon kwaliteit is afhankelijk van de vulling (GAC of CTO). Controleer het type
            vulling bij aankoop. Bron: NSF/ANSI 42 en 53 testprotocollen; fabrikantspecificaties Pentair,
            Doulton, Ecosoft (2025–2026).
          </p>
        </section>

        {/* Toepassingsmatrix */}
        <section id="matrix">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Toepassingsmatrix: welk type voor welke situatie?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Niet elk filtertype is voor elke installatie geschikt. Onderstaande matrix geeft snel
            inzicht in welke types bruikbaar zijn voor de meest voorkomende toepassingen.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Toepassing</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">GAC</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">CTO</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Inline</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">String</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">Keramisch</th>
                </tr>
              </thead>
              <tbody>
                {toepassingsMatrix.map((r, i) => (
                  <tr key={r.toepassing} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.toepassing}</td>
                    {(['gac', 'cto', 'inline', 'string', 'keramisch'] as const).map(key => (
                      <td key={key} className="py-2.5 px-3 text-center">
                        {r[key]
                          ? <span className="text-green-600 font-bold">✓</span>
                          : <span className="text-gray-300">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wanneer combineren */}
        <section id="combineren">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer combineert u meerdere filtertypen?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Combinaties van verschillende koolstoffiltertypes zijn de norm in professionele en
            semi-professionele watersystemen. De meest voorkomende en effectieve combinaties:
          </p>
          <div className="space-y-4">
            {[
              {
                combinatie: 'Sediment-string + GAC + CTO-blok (3-staps)',
                waarom: 'De string filter verwijdert zand en sediment, GAC vangt bulk chloor op (goedkoop), en het CTO-blok geeft de fijnste adsorptie met langere levensduur. Ideaal voor een onderbouw systeem met langdurige kwaliteit.',
                toepassing: 'Onderbouw, hoog verbruik',
              },
              {
                combinatie: 'GAC pre-filter + RO-membraan + CTO nafilter (osmose systeem)',
                waarom: 'GAC pre-filter verwijdert chloor dat het RO-membraan zou oxideren en beschadigen. Het RO-membraan filtert op moleculair niveau. De CTO nafilter verbetert smaak en verwijdert eventuele geurstoffen uit het drukvat.',
                toepassing: 'Omgekeerde osmose systeem',
              },
              {
                combinatie: 'Keramisch + CTO-kern (combinatiepatroon)',
                waarom: 'De keramische buitenschaal biedt bacteriologische bescherming (0,2–0,9 µm) en de actieve koolkern adsorbeert chloor, THM en geurstoffen. Deze combinatie is beschikbaar als single-unit patroon bij Doulton en Berkey.',
                toepassing: 'Vrijstaande filterkraan, reisfilter',
              },
              {
                combinatie: 'Inline GAC + inline CTO (dubbele inline)',
                waarom: 'Twee opeenvolgende inline cartridges: de eerste als grove GAC voor bulk chloor en sediment, de tweede als CTO voor fijne adsorptie. Veelgebruikt in koelkastfilters en semi-professionele barinstallaties.',
                toepassing: 'Koelkast, espressomachine, bar',
              },
            ].map(item => (
              <div key={item.combinatie} className="border border-gray-100 rounded-xl p-5">
                <p className="font-bold text-[#003F5C] mb-1 text-sm">{item.combinatie}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.waarom}</p>
                <span className="text-xs text-[#005F8A] font-medium bg-[#E0F2FE] px-2.5 py-1 rounded-full">
                  Toepassing: {item.toepassing}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Kooptips */}
        <section id="kooptips">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kooptips en certificering</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Bij de aankoop van een koolstoffilter zijn er een aantal criteria die bepalend zijn
            voor de werkelijke kwaliteit van het systeem:
          </p>
          <div className="space-y-3">
            {[
              {
                tip: 'Controleer de NSF/ANSI-certificering',
                desc: 'Kies minimaal een filter met NSF/ANSI 42 (chloor/geur) en bij voorkeur ook NSF/ANSI 53 (zware metalen, pesticiden, cystes). GAC-filters hebben vaak alleen NSF/ANSI 42; blokfilters halen vaker de strengere 53-norm.',
              },
              {
                tip: 'Let op de grondstof: kokosnoot vs steenkool',
                desc: 'Koolstof van kokosnootschillen heeft meer microporiën en is optimaal voor chloor- en geurverwijdering (het meest voorkomende probleem in NL). Steenkoolkool is effectiever voor grotere organische moleculen. Premium merken (Pentair, Doulton, Ecosoft) specificeren de grondstof.',
              },
              {
                tip: 'Kies koolstofblok boven GAC voor thuisgebruik',
                desc: 'Tenzij uw enige doel een filterkan is, kiest u voor een CTO-blokfilter. De meerprijs per patroon (€10–30) wordt ruimschoots gecompenseerd door de betere filterprestaties en vergelijkbare of zelfs langere levensduur.',
              },
              {
                tip: 'Zorg voor voldoende vervangingspatronen beschikbaarheid',
                desc: 'Kies een systeem waarvoor patronen breed en gemakkelijk verkrijgbaar zijn in Nederland. Een goedkoop filter van een obscuur merk kan een probleem worden als de patronen niet meer beschikbaar zijn.',
              },
              {
                tip: 'Combineer met een sediment voorfilter in hardwatergebieden',
                desc: 'In regio\'s met water boven 14°dH (groot deel van Nederland) beschermt een goedkope sediment voorfilter uw duurdere koolstofpatroon en verlengt daarmee de levensduur. De investering (€8–20 per sedimentpatroon) betaalt zich terug.',
              },
            ].map(item => (
              <div key={item.tip} className="flex gap-3 items-start bg-gray-50 rounded-xl p-4 border border-gray-100">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-800 mb-1 text-sm">{item.tip}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <Link
              href="/koolstoffilter/kopen"
              className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar de koopgids koolstoffilters →
            </Link>
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter overzicht',
                desc: 'Complete gids over koolstoffilters: werking, types en kosten.',
              },
              {
                href: '/koolstoffilter/werking',
                title: 'Hoe werkt een koolstoffilter?',
                desc: 'De wetenschap van adsorptie, van der Waals-krachten en poriestructuur.',
              },
              {
                href: '/koolstoffilter/onderbouw',
                title: 'Onderbouw koolstoffilter',
                desc: 'Top 5 onderbouw systemen: installatie, kosten en voor wie het geschikt is.',
              },
              {
                href: '/koolstoffilter/vervangen',
                title: 'Koolstoffilter vervangen',
                desc: 'Vervangingsintervallen per type en stap-voor-stap handleiding.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Wanneer is osmose een betere keuze dan alleen een koolstoffilter?',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Alle waterfiltersoorten',
                desc: 'Vergelijking van alle filtertechnologieën: koolstof, osmose, UV, ionenwisseling.',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">
                  {l.title}
                </p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over soorten koolstoffilters
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details
                key={item.question}
                className="border border-gray-100 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    ▾
                  </span>
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
