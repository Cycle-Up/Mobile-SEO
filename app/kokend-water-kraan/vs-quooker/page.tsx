import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SgsResults } from '@/components/SgsResults';
import { FourInOneRecommendation } from '@/components/FourInOneRecommendation';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kokend water kraan vs Quooker: welke is beter in 2026?',
  description:
    'Quooker of een 4-in-1 kokend water kraan met osmose? Eerlijke vergelijking op prijs, functies, filterkwaliteit en totale kosten — inclusief 12-criteria tabel.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/vs-quooker' },
  openGraph: {
    title: 'Kokend water kraan vs Quooker: welke is beter in 2026?',
    description:
      'Een Quooker Flex PRO3 met CUBE kost bij PureAqua €2.240, de PureAqua 4-in-1 €1.948 (zonder bruisend water). Vergelijk eerlijk op functies, filterkwaliteit, PFAS en kosten.',
    url: 'https://waterfilterplatform.nl/kokend-water-kraan/vs-quooker',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen een Quooker en een 4-in-1 kokend water kraan?',
    answer:
      'Een Quooker is een merknaam voor een kokendwaterkraan zonder ingebouwde osmosefiltratie. Een 4-in-1 kraan zoals de PureAqua combineert omgekeerde osmose (vermindert PFAS, nitraten, lood en kalk) met zeer heet (circa 96 graden), gekoeld en gewoon warm en koud water in één kraan. Bruisend water heeft de PureAqua 4-in-1 niet. De Quooker Fusion met CUBE biedt bruisend water maar filtert geen zware metalen of nitraten.',
  },
  {
    question: 'Verwijdert een Quooker ook PFAS en nitraten?',
    answer:
      'Nee. Een standaard Quooker heeft geen osmosefilter. De CUBE-tank van Quooker gebruikt een koolstoffilter die chloor en geur verbetert, maar PFAS, nitraten, lood, arseen en microplastics blijven aanwezig in het water — ook in het kokende water. Alleen een omgekeerde osmose filter verwijdert deze stoffen effectief.',
  },
  {
    question: 'Wat kost een Quooker in totaal versus een 4-in-1 osmose kraan?',
    answer:
      'Bij PureAqua kost een Quooker Flex PRO3 met CUBE €2.240 (kokend, gekoeld en bruisend, met actieve kool). Wilt u ook osmosefiltratie? Dan komt er nog eens €400–600 bij voor een apart osmosesysteem. Een PureAqua 4-in-1 kost €1.948, inclusief osmosefiltratie. Dat is in aanschaf circa €300 goedkoper dan de Quooker met CUBE, maar zonder bruisend water.',
  },
  {
    question: 'Wat doet de Quooker CUBE?',
    answer:
      'De Quooker CUBE voegt bruisend water en gekoeld water toe aan de Quooker Fusion kraan. De CUBE bevat een koolstoffilter die de smaak verbetert. De CUBE is geen osmosefilter: het verwijdert geen zware metalen, nitraten of PFAS. Het CUBE-filter vervangt u circa jaarlijks (circa €39–49).',
  },
  {
    question: 'Is een Quooker geschikt als ik PFAS in mijn drinkwater heb?',
    answer:
      'Nee, een standaard Quooker (ook met CUBE) verwijdert geen PFAS. Hiervoor is omgekeerde osmose noodzakelijk — de enige bewezen technologie om PFAS effectief uit drinkwater te verwijderen. Kiest u voor een Quooker én osmosefiltratie, dan heeft u twee aparte systemen nodig. Een 4-in-1 kraan combineert beide in één product.',
  },
  {
    question: 'Hoeveel energie verbruikt een Quooker versus een 4-in-1 kraan?',
    answer:
      'Een Quooker verbruikt in standbymodus 3–5 watt per uur om het water op temperatuur te houden — circa €13–22 per jaar aan extra elektriciteitskosten. Voor de PureAqua 4-in-1 kraan is geen fabrieksopgave van het standbyverbruik bekend. Hij houdt zowel een heetwatertank als een koelunit op temperatuur, dus reken op meer dan een Quooker zonder CUBE.',
  },
  {
    question: 'Kan ik een Quooker zelf installeren?',
    answer:
      'Quooker adviseert installatie door een erkend installateur, wat €150–250 extra kost. Ook voor een 4-in-1 kraan met osmose is installatie door een installateur aanbevolen; PureAqua biedt dat aan voor €299. Voor beide systemen is een boorgat in het aanrechtblad nodig als er nog geen extra kraanpositie beschikbaar is.',
  },
  {
    question: 'Wie moet een Quooker kiezen en wie kiest beter voor een 4-in-1 osmose kraan?',
    answer:
      'Kies Quooker als: u specifiek de Quooker-merknaam belangrijk vindt, u bruisend water wilt (via CUBE) zonder osmosefiltratie, of u in een watergebied woont waar waterkwaliteit geen zorg is. Kies een 4-in-1 osmose kraan als: u PFAS/nitraten/lood wilt filteren, u zeer heet, gekoeld en gefilterd water in één kraan wilt, u bruisend water niet nodig hebt, of u een all-in-one oplossing zonder extra osmoseinstallatie wilt.',
  },
];

const vergelijkCriteria = [
  { criterium: 'Kokend of zeer heet water', quooker: 'Ja, kokend (100°C)', vierin1: 'Zeer heet (circa 96°C)' },
  { criterium: 'Gekoeld gefilterd water', quooker: 'Alleen met CUBE', vierin1: 'Ja (osmose, circa 5°C)' },
  { criterium: 'Warm water', quooker: 'Via bestaande mengkraan', vierin1: 'Ja' },
  { criterium: 'Bruisend water', quooker: 'Alleen met CUBE', vierin1: 'Nee' },
  { criterium: 'Osmosefiltratie', quooker: 'Nee (apart systeem nodig)', vierin1: 'Ja (ingebouwd)' },
  { criterium: 'PFAS verwijdering', quooker: 'Nee', vierin1: 'Ja (SGS: PFOS &gt;99,6%, PFOA 99,5%)' },
  { criterium: 'Nitraten en lood', quooker: 'Nee', vierin1: 'Ja (SGS: lood &gt;99,8%)' },
  { criterium: 'Kalk verwijderd', quooker: 'Nee', vierin1: 'Ja (osmose)' },
  { criterium: 'Aanschafprijs', quooker: '€2.240 (Flex PRO3 met CUBE)', vierin1: '€1.948' },
  { criterium: 'Filterkosten per jaar', quooker: '€39–49 (CUBE-filter circa jaarlijks)', vierin1: 'circa €150 gemiddeld (fabrikantprijzen omgerekend; filters jaarlijks, membraan 2-jaarlijks)' },
  { criterium: 'Energieverbruik standby', quooker: '3–5 W', vierin1: 'Geen fabrieksopgave (heet én koelen)' },
  { criterium: 'Installatie door professional', quooker: 'Sterk aanbevolen', vierin1: 'Aanbevolen (PureAqua: €299)' },
];

export default function VsQuookerPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Vs Quooker', url: 'https://waterfilterplatform.nl/kokend-water-kraan/vs-quooker' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kokend water kraan vs Quooker: welke is beter in 2026?',
          description:
            'Eerlijke vergelijking tussen Quooker en 4-in-1 osmose kokendwaterkraan op prijs, functies, filterkwaliteit en totale kosten.',
          datePublished: '2026-04-18',
          url: 'https://waterfilterplatform.nl/kokend-water-kraan/vs-quooker',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Vs Quooker</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan vs Quooker: welke is beter in 2026?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Quooker is het bekendste merk op de markt voor <strong>kokend water kranen</strong>, maar de PureAqua
            4-in-1 biedt osmosefiltratie en gekoeld water voor minder geld dan een Quooker met CUBE, al zonder bruisend water. In dit artikel vergelijken we beide opties eerlijk:
            functies, filterkwaliteit, aanschafprijs, jaarlijkse kosten en wie welke keuze het beste past.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#vergelijking"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar vergelijking →
            </Link>
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle kranen vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Quooker (categorieleider) geeft direct kokend water maar heeft geen osmosefilter: PFAS, nitraten en lood blijven aanwezig. PureAqua 4-in-1 combineert osmose + zeer heet (circa 96°C) + gekoeld + warm en koud voor €1.948, zonder bruisend water. Een Quooker Flex PRO3 met CUBE kost bij PureAqua €2.240 en filtert met actieve kool, niet met osmose. Kies Quooker voor merktrouw; kies 4-in-1 voor filterkwaliteit en prijs." />

        <FourInOneRecommendation content="kokend-water-kraan-vs-quooker-aanbeveling" />

        <SgsResults />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-beide-doen" className="hover:underline">Wat beide systemen doen</a></li>
            <li><a href="#quooker-nadelen" className="hover:underline">Wat Quooker niet filtert</a></li>
            <li><a href="#prijsvergelijking" className="hover:underline">Prijsvergelijking all-in</a></li>
            <li><a href="#vergelijking" className="hover:underline">12-criteria vergelijkingstabel</a></li>
            <li><a href="#design-energie" className="hover:underline">Design en energieverbruik</a></li>
            <li><a href="#wie-kiest-wat" className="hover:underline">Wie kiest welk systeem?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wat beide doen */}
        <section id="wat-beide-doen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat Quooker en de 4-in-1 osmose kraan allebei doen
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Zowel een Quooker (kokend, 100°C) als een PureAqua 4-in-1 kraan (zeer heet, circa 96°C) geven direct heet water via een geïsoleerd
            boilersysteem onder het aanrecht. U kunt water voor thee, pasta, koffie of sterilisatie direct tappen
            zonder waterkoker. Beide systemen hebben een veiligheidsventiel dat brandwonden voorkomt en een slim
            reservoir dat energie-efficiënt water op temperatuur houdt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3">Quooker (alle modellen)</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {[
                  'Direct kokend water (100°C)',
                  'WRAS-gecertificeerd veiligheidssysteem',
                  'Stijlvol kraandesign in meerdere afwerkingen',
                  'Compatibel met bestaande mengkraan',
                  'Bruisend en gekoeld water via CUBE-uitbreiding',
                  'Koolstoffilter in CUBE verbetert smaak/geur',
                ].map(p => (
                  <li key={p} className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#E0F2FE] border border-[#005F8A] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-3">PureAqua 4-in-1 (met osmose)</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {[
                  'Direct zeer heet water (circa 96°C)',
                  'Veiligheidssysteem voor heet water',
                  'Slank kraandesign, één kraanpunt',
                  'Gekoeld osmosewater (circa 5°C)',
                  'Warm water (mengfunctie)',
                  'Osmosewater op kamertemperatuur (geen bruisend water)',
                  'Ingebouwde omgekeerde osmose filtratie',
                ].map(p => (
                  <li key={p} className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span>{p}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Het cruciale verschil zit in de filtratie. Een Quooker geeft direct kokend <em>kraanwater</em> — wat in
            Nederland van hoge kwaliteit is, maar bepaalde verontreinigingen als PFAS, nitraten en lood (uit
            huisleidingen) nog steeds kan bevatten. Een 4-in-1 kraan met osmose filtert het water eerst met osmose
            voordat het wordt verwarmd of gekoeld.
          </p>
        </section>

        {/* Wat Quooker niet doet */}
        <section id="quooker-nadelen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat Quooker niet filtert: PFAS, nitraten en lood
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De Quooker heeft standaard geen osmosefilter. De CUBE voegt wel een koolstoffilter toe, maar een
            koolstoffilter verwijdert geur, chloor en een deel van de organische stoffen — géén zware metalen,
            nitraten, PFAS of farmaceutische residuen. Dit zijn precies de verontreinigingen die in toenemende
            mate in het nieuws komen in Nederland:
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                stof: 'PFAS (forever chemicals)',
                uitleg: 'PFAS zijn aangetroffen in Nederlands drinkwater in concentraties die boven de Europese normen liggen. Alleen omgekeerde osmose verwijdert PFAS effectief (&gt;95%).',
              },
              {
                stof: 'Nitraten',
                uitleg: 'Nitraten in drinkwater zijn een risico voor baby\'s en zwangere vrouwen. Ze kunnen voorkomen in gebieden met intensieve landbouw. Een Quooker filtert ze niet; een osmosefilter verwijdert &gt;90%.',
              },
              {
                stof: 'Lood (uit huisleidingen)',
                uitleg: 'In woningen gebouwd vóór 1960 kunnen nog loden leidingen aanwezig zijn. Lood lost op in stilstaand water. Osmosefilters verwijderen lood effectief; koolstoffilters niet.',
              },
              {
                stof: 'Microplastics',
                uitleg: 'Microplastics zijn aangetroffen in Nederlands leidingwater. Een RO-membraan houdt deeltjes groter dan 0,0001 micron tegen — vrijwel alle microplastics. Een koolstoffilter biedt hier geen bescherming.',
              },
            ].map(s => (
              <div key={s.stof} className="bg-red-50 border border-red-100 rounded-xl p-4 text-sm">
                <p className="font-semibold text-red-800 mb-1">{s.stof}</p>
                <p className="text-gray-700">{s.uitleg}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Wilt u toch een Quooker én osmosefiltratie?</strong> Dan heeft u
            een apart onderbouw-osmosesysteem nodig (€300–600) dat uw Quooker voedt. Met een Quooker Flex PRO3 met CUBE
            (€2.240 bij PureAqua) komt de investering daarmee op circa €2.540–2.840. De PureAqua 4-in-1 combineert zeer heet water, gekoeld water en osmose voor €1.948, maar zonder bruisend water.
          </div>
        </section>

        {/* Prijsvergelijking */}
        <section id="prijsvergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Prijsvergelijking all-in: Quooker vs. 4-in-1 osmose kraan
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een eerlijke kostenvergelijking kijkt naar de totale aanschafkosten voor <em>vergelijkbare</em> functies.
            Wilt u (bijna) kokend water, gekoeld gefilterd water én osmosefiltratie? Dan zijn dit de
            indicatieve kosten (de Quooker geeft daarbij ook bruisend water, de 4-in-1 niet):
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Kostenpost</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Quooker Flex PRO3 + CUBE + osmose</th>
                  <th className="py-2.5 px-3 font-semibold text-center bg-[#005F8A]">PureAqua 4-in-1</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { post: 'Aanschaf kraan met CUBE', quooker: '€ 2.240', vierin1: '€ 1.948' },
                  { post: 'Apart osmosesysteem', quooker: '€ 400–600', vierin1: 'Ingebouwd' },
                  { post: 'All-in aanschafprijs', quooker: '€ 2.640–2.840', vierin1: '€ 1.948' },
                  { post: 'Installatie (professional)', quooker: '€ 200–300', vierin1: '€ 299 (optioneel)' },
                  { post: 'Filterkosten/jaar (CUBE circa jaarlijks)', quooker: '€ 39–49', vierin1: '—' },
                  { post: 'Osmosefilterkosten/jaar', quooker: '€ 60–100 (apart)', vierin1: 'circa € 150 (gemiddeld)' },
                  { post: 'Totale kosten jaar 1', quooker: '€ 2.939–3.289', vierin1: '± € 2.352' },
                  { post: 'Totale kosten 3 jaar', quooker: '€ 3.137–3.587', vierin1: '± € 2.657' },
                ].map((r, i) => (
                  <tr
                    key={r.post}
                    className={
                      r.post.startsWith('Totale')
                        ? 'bg-[#E0F2FE] font-semibold text-[#003F5C]'
                        : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }
                  >
                    <td className="py-2.5 px-3">{r.post}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.quooker}</td>
                    <td className="py-2.5 px-3 text-center text-xs bg-[#E0F2FE]/60">{r.vierin1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-green-900">Wat scheelt het?</strong> In aanschaf is de PureAqua 4-in-1
            <strong> circa €300 goedkoper</strong> dan een Quooker Flex PRO3 met CUBE (PureAqua-prijzen september 2026).
            {' '}Wilt u bij de Quooker ook osmosefiltratie, dan komt daar een apart osmosesysteem bij. De Quooker met CUBE geeft wel bruisend water, de 4-in-1 niet.
          </div>
        </section>

        {/* 12-criteria tabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            12-criteria vergelijking: Quooker vs. PureAqua 4-in-1
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De onderstaande tabel vergelijkt beide systemen op twaalf criteria die voor consumenten
            het meest relevant zijn. Scroll horizontaal op mobiel.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Criterium</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Quooker Flex PRO3 + CUBE</th>
                  <th className="py-2.5 px-3 font-semibold text-center bg-[#005F8A]">PureAqua 4-in-1</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkCriteria.map((r, i) => (
                  <tr key={r.criterium} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-700 text-xs">{r.criterium}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-600"
                      dangerouslySetInnerHTML={{ __html: r.quooker }}
                    />
                    <td className="py-2.5 px-3 text-center text-xs font-medium text-[#003F5C] bg-[#E0F2FE]"
                      dangerouslySetInnerHTML={{ __html: r.vierin1 }}
                    />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Quooker: Flex PRO3 met CUBE zonder apart osmosesysteem (PureAqua-prijzen september 2026). PureAqua 4-in-1: inclusief ingebouwde RO. SGS-waarden gemeten op een nieuw systeem.
          </p>
        </section>

        {/* Design en energie */}
        <section id="design-energie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Design en energieverbruik: wat zijn de verschillen?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Beide systemen zijn ontworpen voor een moderne keuken en hebben een slank kraandesign dat naast
            de bestaande mengkraan wordt geïnstalleerd. Quooker biedt een breder assortiment kraanafwerkingen
            (mat zwart, geborsteld goud, chroom, brons) en heeft daarmee een voorsprong op het gebied van
            designflexibiliteit. PureAqua 4-in-1 is verkrijgbaar in de meest gangbare afwerkingen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2">Quooker energieverbruik</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>Standby: 3–5 watt continu</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>Jaarlijkse standbykosten: ca. €13–22</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>CUBE-tank: extra koeling voor gekoeld water</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>Energielabel: A (COMBI+)</li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] border border-[#005F8A]/30 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2">PureAqua 4-in-1 energieverbruik</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>Standby: geen fabrieksopgave bekend</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>Houdt heet water én gekoeld water op temperatuur</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>Osmosepomp: kortstondig actief bij tappen</li>
                <li className="flex gap-2"><span className="text-gray-400 shrink-0">•</span>Vergelijkbaar energieprofiel met Quooker</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Beide systemen zijn aanzienlijk energiezuiniger dan dagelijks een waterkoker opwarmen. Een
            standaard waterkoker (2.000 watt) verbruikt bij 4× dagelijks gebruik circa 70–100 kWh per jaar,
            terwijl de standby van een kokendwaterkraan op 26–44 kWh per jaar uitkomt. Op energiegebied
            zijn Quooker en 4-in-1 kraan nagenoeg gelijkwaardig.
          </p>
        </section>

        <CTABanner context="kokend" />

        {/* Wie kiest wat */}
        <section id="wie-kiest-wat">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wie kiest voor Quooker en wie kiest voor een 4-in-1 osmose kraan?
          </h2>
          <div className="space-y-4">
            <div className="bg-[#005F8A] text-white rounded-xl p-5">
              <p className="text-blue-200 text-xs font-semibold uppercase tracking-wide mb-3">Kies PureAqua 4-in-1 als...</p>
              <ul className="space-y-2 text-sm">
                {[
                  'U PFAS, nitraten, lood of microplastics wilt filteren',
                  'U zeer heet, gekoeld en osmose-gefilterd water plus gewoon warm en koud water in één kraan wilt',
                  'U osmosefiltratie wilt voor minder dan een Quooker met CUBE kost',
                  'U geen apart osmosesysteem naast uw Quooker wilt installeren',
                  'U bruisend water niet nodig hebt (of een losse SodaStream gebruikt)',
                  'U in een hardwatergebied woont of PFAS-gerelateerde zorgen heeft',
                ].map(p => (
                  <li key={p} className="flex gap-2"><span className="shrink-0">✓</span>{p}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-3">Kies Quooker als...</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Merktrouw aan Quooker voor u doorslaggevend is',
                  'U bruisend water specifiek via het Quooker CUBE-systeem wilt',
                  'Waterkwaliteitsfiltratie voor u geen prioriteit is',
                  'U kiest voor een uitgebreider assortiment kraanafwerkingen',
                  'Budget geen rol speelt en u bereid bent €2.240+ te investeren',
                ].map(p => (
                  <li key={p} className="flex gap-2"><span className="shrink-0">•</span>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan/vergelijken', label: 'Alle kokend water kranen vergelijken' },
              { href: '/omgekeerde-osmose/kosten', label: 'Osmose kosten: volledig overzicht' },
              { href: '/waterfilter/best-getest-2026', label: 'Beste waterfilter 2026: getest' },
              { href: '/drinkwater/kwaliteitsrapport', label: 'Drinkwater kwaliteitsrapport lezen' },
            ].map(l => (
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

        <CTABanner context="kokend" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: kokend water kraan vs Quooker
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering Quooker-alternatieven</h3>
              <p className="text-sm text-gray-600">Hoe CE-markering en EN 61770 garanderen dat Quooker-alternatieven voldoen aan dezelfde Europese veiligheidseisen.</p>
            </Link>
            <Link href="/vergelijken/kokend-water-kraan-merken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kokend water kraan merken vergelijken</h3>
              <p className="text-sm text-gray-600">Alle Quooker-alternatieven naast elkaar: prijs, garantie, filtermogelijkheden en installatie-eisen vergeleken.</p>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
