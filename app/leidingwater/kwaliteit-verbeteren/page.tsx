import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Leidingwater kwaliteit verbeteren: 6 bewezen methoden',
  description:
    'Hoe verbeter je de kwaliteit van leidingwater thuis? 6 bewezen methoden vergeleken op kosten, onderhoud en effectiviteit — van filterkan tot omgekeerde.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/kwaliteit-verbeteren' },
  openGraph: {
    title: 'Leidingwater kwaliteit verbeteren: 6 bewezen methoden',
    description:
      '6 manieren om de kwaliteit van uw kraanwater te verbeteren — van goedkope filterkan tot complete osmose-installatie. Met vergelijkingstabel en advies.',
    url: 'https://waterfilterplatform.nl/leidingwater/kwaliteit-verbeteren',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is de beste methode om leidingwater te verbeteren voor de smaak?',
    answer:
      'Voor smaakverbetering is een actieve koolstoffilter de meest kostenefficiënte oplossing. Hij verwijdert chloor, chloramines en organische geurstoffen die de smaak beïnvloeden. Kosten: €80–150 per jaar inclusief filtervervanging. Voor de puurste smaak (vergelijkbaar met premium bronwater) is omgekeerde osmose de topkeuze.',
  },
  {
    question: 'Wat helpt het beste tegen hard leidingwater?',
    answer:
      'Twee opties: (1) Een waterontharder behandelt het totale huishoudwaterverbruik en verwijdert calcium en magnesium via ionenwisseling. Kosten: €500–1500 aanschaf plus zout (~€50–100/jaar). (2) Een omgekeerde osmose systeem levert puur drinkwater bij de keukenkraan en verwijdert ook kalk. Keuze hangt af van of u alleen drinkwater of het totale verbruik wilt behandelen.',
  },
  {
    question: 'Verwijdert een filterkan PFAS uit leidingwater?',
    answer:
      'Standaard filterkannen (Brita-type) zijn NIET gecertificeerd voor PFAS-verwijdering. Ze verbeteren de smaak maar bieden geen betrouwbare bescherming tegen PFAS. Voor PFAS-verwijdering is omgekeerde osmose de enige bewezen thuisoplossing — met een verwijderingsrendement van 95–99%.',
  },
  {
    question: 'Hoe lang gaan waterfilters mee en wat kost het onderhoud?',
    answer:
      'Filterleven hangt af van het type: filterkannen-patronen: 1–2 maanden (€5–8/stuk), koolstoffilters onderbouw: 6–12 maanden (€25–60/stuk), omgekeerde osmose: membraan elke 2–3 jaar (€30–80), pre-filters elk half jaar (€10–20). Waterontharders vergen periodiek zout bijvullen (€40–80/jaar). UV-lampen: jaarlijks vervangen (€30–60).',
  },
  {
    question: 'Is omgekeerde osmose water gezond?',
    answer:
      'Omgekeerde osmose verwijdert vrijwel alle opgeloste stoffen, inclusief nuttige mineralen zoals calcium en magnesium. Puur RO-water is veilig, maar een remineralisatiefilter als extra trap voegt belangrijke mineralen terug toe en verbetert de smaak. Voor de dagelijkse mineraalinname zijn groenten, fruit en andere voeding overigens de hoofdbron, niet drinkwater.',
  },
  {
    question: 'Kan ik leidingwater verbeteren zonder apparaten te kopen?',
    answer:
      'Ja. Gratis quick wins: (1) gebruik altijd koud water voor koken en drinken (warm kraanwater bevat meer opgeloste stoffen), (2) laat de kraan 15–30 seconden lopen als hij lang niet gebruikt is (flusht stilstaand water met meer lood/chloor), (3) gebruik een waterkan in de koelkast (chloor verdampt deels bij bewaren), (4) bij oude woning: vraag drinkwaterbedrijf om loodtest.',
  },
  {
    question: 'Welk waterfilter is het beste voor een gezin met jonge kinderen?',
    answer:
      'Voor gezinnen met kinderen jonger dan 6 maanden (flessenvoeding) is omgekeerde osmose de veiligste keuze: het verwijdert nitraten, lood, PFAS en bacteriën. Voor oudere kinderen volstaat in de meeste gevallen gewoon leidingwater. Controleer of uw woning loodleidingen heeft (bouw voor 1960) en overweeg een koolstoffilter voor smaakverbetering.',
  },
  {
    question: 'Wat is het verschil tussen een waterontharder en omgekeerde osmose?',
    answer:
      'Een waterontharder behandelt alle water in het huis (douche, wasmachine, vaatwasser) en verwijdert calcium en magnesium via ionenwisseling — maar laat nitraten, PFAS en chloor in het water. Omgekeerde osmose behandelt alleen het drinkwater bij de keukenkraan maar verwijdert vrijwel alles (mineralen, PFAS, nitraten, lood, bacteriën). Combinatie van beide is optimaal voor hard watergebieden met kwaliteitszorgen.',
  },
];

const methoden = [
  {
    nr: '1',
    naam: 'Filterkan (Brita/Aquaphor)',
    verwijdert: 'Chloor, kalk (deels), koper',
    verwijdertNiet: 'PFAS, nitraten, lood, bacteriën',
    kostenJaar: '~€25',
    onderhoud: 'Patroon elke 1–2 mnd',
    voor: 'Smaakverbetering, lage kosten',
    kleur: 'bg-green-50 border-green-200',
    badge: 'Goedkoopst',
    badgeKleur: 'bg-green-100 text-green-800',
  },
  {
    nr: '2',
    naam: 'Koolstoffilter onderbouw',
    verwijdert: 'Chloor, organische stoffen, geur/smaak',
    verwijdertNiet: 'PFAS, nitraten, lood, hardheid',
    kostenJaar: '€80–150',
    onderhoud: 'Filter 6–12 maanden',
    voor: 'Permanente smaakverbetering, geen kruken',
    kleur: 'bg-blue-50 border-blue-200',
    badge: 'Populair',
    badgeKleur: 'bg-blue-100 text-blue-800',
  },
  {
    nr: '3',
    naam: 'UV-filter',
    verwijdert: 'Bacteriën, virussen, Cryptosporidium',
    verwijdertNiet: 'Chemische stoffen, hardheid, PFAS',
    kostenJaar: '€100–200 + lamp',
    onderhoud: 'UV-lamp jaarlijks',
    voor: 'Eigen put, bacteriologische veiligheid',
    kleur: 'bg-purple-50 border-purple-200',
    badge: 'Microbiologisch',
    badgeKleur: 'bg-purple-100 text-purple-800',
  },
  {
    nr: '4',
    naam: 'Waterontharder',
    verwijdert: 'Calcium, magnesium (hardheid)',
    verwijdertNiet: 'PFAS, nitraten, bacteriën, chloor',
    kostenJaar: '€500–1500 aanschaf + €50–100 zout',
    onderhoud: 'Zout bijvullen, regeneratie',
    voor: 'Totale huishoudbehandeling hard water',
    kleur: 'bg-orange-50 border-orange-200',
    badge: 'Hard water',
    badgeKleur: 'bg-orange-100 text-orange-800',
  },
  {
    nr: '5',
    naam: 'Omgekeerde osmose systeem',
    verwijdert: 'PFAS (95–99%), nitraten, lood, chloor, bacteriën, microplastics, hardheid',
    verwijdertNiet: 'Gassen (CO₂) — mineralen terug met remineralisatie',
    kostenJaar: '€300–800 aanschaf, €60–120/jr filters',
    onderhoud: 'Pre-filters 6 mnd, membraan 2–3 jr',
    voor: 'Meest complete oplossing, PFAS/nitraat/lood',
    kleur: 'bg-[#E0F2FE] border-[#005F8A]/30',
    badge: 'Meest compleet',
    badgeKleur: 'bg-[#005F8A] text-white',
  },
  {
    nr: '6',
    naam: 'PureAqua 4-in-1 kraan (osmose)',
    verwijdert: 'Alles van osmose + kokend + koud + bruisend water uit één kraan',
    verwijdertNiet: 'Gassen — remineralisatie beschikbaar',
    kostenJaar: 'Eenmalig systeem incl. osmose + boiler',
    onderhoud: 'Zelfde als osmose',
    voor: 'Totaaloplossing voor drinken én koken',
    kleur: 'bg-[#003F5C]/5 border-[#003F5C]/20',
    badge: 'Complete oplossing',
    badgeKleur: 'bg-[#003F5C] text-white',
  },
];

const vergelijkingsTabel = [
  { methode: 'Filterkan', verwijdert: 'Chloor, kalk deels', kostenJaar: '~€25', onderhoud: 'Maandelijks', voor: 'Smaak' },
  { methode: 'Koolstoffilter', verwijdert: 'Chloor, organisch', kostenJaar: '€80–150', onderhoud: 'Halfjaarlijks', voor: 'Smaak permanent' },
  { methode: 'UV-filter', verwijdert: 'Bacteriën, virussen', kostenJaar: '€100–200', onderhoud: 'Jaarlijks (lamp)', voor: 'Eigen put/bron' },
  { methode: 'Waterontharder', verwijdert: 'Calcium, magnesium', kostenJaar: '€500–1500 + zout', onderhoud: 'Zout bijvullen', voor: 'Hard water totaal huis' },
  { methode: 'Osmose systeem', verwijdert: 'Vrijwel alles', kostenJaar: '€60–120', onderhoud: 'Halfjaarlijks/2-jaarlijks', voor: 'PFAS, nitraat, lood, alles' },
  { methode: 'PureAqua 4-in-1', verwijdert: 'Alles + kokend/bruisend', kostenJaar: 'Zelfde als osmose', onderhoud: 'Zelfde als osmose', voor: 'Totale keukenoplossing' },
];

export default function LeidingwaterKwaliteitVerberenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Leidingwater kwaliteit verbeteren: 6 bewezen methoden',
          description:
            '6 bewezen methoden om de kwaliteit van leidingwater te verbeteren, van filterkan tot omgekeerde osmose. Met vergelijkingstabel en advies op maat.',
          datePublished: '2026-03-25',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/leidingwater/kwaliteit-verbeteren',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Leidingwater', url: 'https://waterfilterplatform.nl/leidingwater' },
          { name: 'Kwaliteit verbeteren', url: 'https://waterfilterplatform.nl/leidingwater/kwaliteit-verbeteren' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/leidingwater" className="hover:text-[#005F8A]">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Kwaliteit verbeteren</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Leidingwater kwaliteit verbeteren: 6 bewezen methoden
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Nederlands leidingwater is veilig — maar niet altijd optimaal voor iedereen.
            Of u nu last heeft van een chloor-nasmaak, hard water, zorgen over PFAS of nitraten,
            of gewoon de lekkerste smaak wilt: er zijn zes bewezen methoden om de kwaliteit
            van uw kraanwater te verbeteren. Van goedkope filterkan tot complete osmose-installatie.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#methoden"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk alle 6 methoden →
            </Link>
            <Link
              href="#vergelijking"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Vergelijkingstabel
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* QuickAnswer */}
        <QuickAnswer answer="De beste methode hangt af van uw specifieke probleem: voor smaak/chloor is een koolstoffilter (€80–150/jaar) de beste keuze. Voor hard water een waterontharder of osmose. Voor PFAS, nitraten of lood is omgekeerde osmose (€60–120/jaar) de enige bewezen oplossing. Een PureAqua 4-in-1 kraan combineert osmose met kokend en bruisend water." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#waarom" className="hover:underline">Waarom leidingwater verbeteren?</a></li>
            <li><a href="#quick-wins" className="hover:underline">Quick wins zonder investering</a></li>
            <li><a href="#methoden" className="hover:underline">6 bewezen methoden</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijkingstabel</a></li>
            <li><a href="#welke-keuze" className="hover:underline">Welke methode past bij u?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Waarom verbeteren */}
        <section id="waarom">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom willen mensen leidingwater verbeteren?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Hoewel Nederlands leidingwater voldoet aan alle wettelijke kwaliteitseisen, zijn
            er vijf veel voorkomende redenen waarom consumenten de kwaliteit willen verbeteren:
          </p>

          <div className="space-y-3">
            {[
              {
                nr: '1',
                reden: 'Smaak: chloor en mineralen',
                uitleg: 'Residueel chloor (0,05–0,3 mg/L) en een hoog calciumgehalte geven leidingwater een typische smaak die niet iedereen waardeert. Zeker in warmer water of na lang stilstaan kan de chloor-geur opvallen.',
              },
              {
                nr: '2',
                reden: 'Hard water: kalkvorming',
                uitleg: 'In gebieden met hard water (>14 °dH, zoals Limburg en Brabant) vormt kalk wittige afzettingen in waterkokers, koffiemachines, kranen en cv-ketels. Dit verhoogt energieverbruik en verkort de levensduur van apparaten.',
              },
              {
                nr: '3',
                reden: 'Veiligheidszorgen: PFAS, nitraten, lood',
                uitleg: 'Toenemende media-aandacht voor PFAS ("forever chemicals"), nitraatproblematiek in landbouwgebieden en lood uit oude binnenleidingen drijft consumenten naar aanvullende bescherming — ook als de wettelijke normen worden gehaald.',
              },
              {
                nr: '4',
                reden: 'Gezondheid en zuiverheid',
                uitleg: 'Bewuste consumenten wensen het schoonst mogelijke drinkwater, zeker voor baby\'s, zwangere vrouwen of bij een verminderde weerstand. Omgekeerde osmose verwijdert vrijwel alle opgeloste stoffen en biedt maximale zuiverheid.',
              },
              {
                nr: '5',
                reden: 'Microplastics en medicijnresten',
                uitleg: 'Hoewel de concentraties in Nederlands leidingwater laag zijn, groeit het bewustzijn rondom microplastics en farmaceutische residuen. Normen zijn nog in ontwikkeling, maar voor consumenten die extra zekerheid wensen is osmose de beste keuze.',
              },
            ].map(r => (
              <div key={r.nr} className="flex gap-3 items-start bg-white border border-gray-100 rounded-xl p-4">
                <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {r.nr}
                </div>
                <div>
                  <p className="font-semibold text-[#003F5C] mb-1">{r.reden}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{r.uitleg}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick wins */}
        <section id="quick-wins">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Quick wins zonder investering</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voordat u investeert in een filter, zijn er een aantal gratis of zeer goedkope
            maatregelen die al een merkbaar verschil kunnen maken:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                titel: 'Altijd koud water gebruiken',
                tekst: 'Warm kraanwater bevat meer opgeloste stoffen (waaronder koper en lood uit verwarmingssystemen en leidingen). Gebruik altijd koud kraanwater voor koken en drinken.',
              },
              {
                titel: 'Kraan even laten lopen',
                tekst: 'Als de kraan lang niet is gebruikt (na de nacht of vakantie), laat hem 15–30 seconden lopen. Stilstaand water bevat hogere chloor- en mineraalconcentraties.',
              },
              {
                titel: 'Water in koelkast bewaren',
                tekst: 'Een karaf koud water in de koelkast laten staan geeft chloor (een gas) de kans te verdampen. Na 30 minuten is de chloor-geur sterk verminderd zonder filter.',
              },
            ].map(t => (
              <div key={t.titel} className="bg-[#E0F2FE]/40 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-2 text-sm">{t.titel}</p>
                <p className="text-xs text-gray-700 leading-relaxed">{t.tekst}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-4 leading-relaxed text-sm">
            Voor structurele verbeteringen op het gebied van smaak, hardheid of veiligheid zijn
            de onderstaande methoden effectiever. Bekijk ook de{' '}
            <Link href="/leidingwater/kwaliteit" className="text-[#005F8A] underline hover:no-underline">
              pagina over leidingwater kwaliteit
            </Link>
            {' '}voor een overzicht van normen en parameters.
          </p>
        </section>

        {/* 6 methoden */}
        <section id="methoden">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">6 bewezen methoden om leidingwater te verbeteren</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            De methoden zijn gerangschikt op toenemende scope en investering — van de eenvoudigste
            filterkan tot de meest complete 4-in-1 keukenoplossing.
          </p>

          <div className="space-y-4">
            {methoden.map(m => (
              <div key={m.nr} className={`border rounded-2xl p-5 ${m.kleur}`}>
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                      {m.nr}
                    </div>
                    <p className="font-bold text-gray-900 text-lg">{m.naam}</p>
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${m.badgeKleur}`}>
                    {m.badge}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm mb-3">
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Verwijdert</span>
                    <p className="text-gray-700 mt-0.5">{m.verwijdert}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Verwijdert NIET</span>
                    <p className="text-gray-700 mt-0.5">{m.verwijdertNiet}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Kosten</span>
                    <p className="text-gray-700 mt-0.5">{m.kostenJaar}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Onderhoud</span>
                    <p className="text-gray-700 mt-0.5">{m.onderhoud}</p>
                  </div>
                </div>
                <div className="text-xs text-[#005F8A] font-medium">
                  Beste voor: {m.voor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijkingstabel: alle methoden op een rij</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Methode</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Verwijdert</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Kosten/jaar</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Onderhoud</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Beste voor</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingsTabel.map((r, i) => (
                  <tr
                    key={r.methode}
                    className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-[#E0F2FE]/20 border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-900">{r.methode}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.verwijdert}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs font-mono">{r.kostenJaar}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.onderhoud}</td>
                    <td className="py-2.5 px-3 text-xs text-[#005F8A]">{r.voor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Welke keuze */}
        <section id="welke-keuze">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke methode past bij uw situatie?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De juiste keuze hangt af van uw specifieke wens of probleem. Hier volgt een
            beslisschema op basis van de meest voorkomende situaties:
          </p>

          <div className="space-y-3">
            {[
              {
                situatie: 'Chloor-smaak of -geur stoort mij',
                advies: 'Koolstoffilter onderbouw (€80–150/jaar) — verwijdert chloor volledig. Als goedkoper alternatief: filterkan (~€25/jaar).',
                kleur: 'border-blue-200 bg-blue-50',
              },
              {
                situatie: 'Ik woon in een hard watergebied (Limburg, Brabant)',
                advies: 'Waterontharder voor totaal huishoudverbruik (€500–1500 aanschaf) + osmose voor drinkwater, of alleen osmose bij de keukenkraan. Controleer uw hardheid via de waterhardheid per gemeente pagina.',
                kleur: 'border-orange-200 bg-orange-50',
              },
              {
                situatie: 'Ik maak me zorgen over PFAS, nitraten of lood',
                advies: 'Omgekeerde osmose (€300–800 eenmalig, €60–120/jaar onderhoud). Dit is de enige thuismethode die PFAS (95–99%), nitraten (90–95%) en lood (95–99%) betrouwbaar verwijdert.',
                kleur: 'border-red-200 bg-red-50',
              },
              {
                situatie: 'Ik heb een eigen waterput of wil bacteriologische veiligheid',
                advies: 'UV-filter gecombineerd met sedimentfilter en koolstoffilter. Voor complete zekerheid: osmose als eindstap. Laat het putwater minimaal jaarlijks professioneel testen.',
                kleur: 'border-purple-200 bg-purple-50',
              },
              {
                situatie: 'Ik wil de complete oplossing voor drinken én koken',
                advies: 'PureAqua 4-in-1 kraan met ingebouwde omgekeerde osmose, kokend water functie en optioneel bruisend water. Één systeem vervangt waterkoker, britta-kan en geeft puur gefilterd water.',
                kleur: 'border-[#005F8A]/30 bg-[#E0F2FE]/40',
              },
            ].map(s => (
              <div key={s.situatie} className={`border rounded-xl p-4 ${s.kleur}`}>
                <p className="font-semibold text-gray-900 mb-1 text-sm">{s.situatie}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{s.advies}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Niet zeker welke methode bij u past?</p>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              Bekijk de uitgebreide vergelijking van alle waterfiltersoorten. U vindt er ook
              specifiek advies voor uw hardheidsklasse en waterregio.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/waterfilter/soorten"
                className="bg-[#005F8A] text-white font-semibold px-4 py-2 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Alle filtersoorten vergelijken →
              </Link>
              <Link
                href="/omgekeerde-osmose"
                className="border border-[#005F8A] text-[#005F8A] font-semibold px-4 py-2 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
              >
                Omgekeerde osmose gids
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer over waterkwaliteit en filtratie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/leidingwater/kwaliteit',
                title: 'Leidingwater kwaliteit Nederland',
                desc: 'Normen, parameters en regionale hardheidsverschillen in detail.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Zoek de exacte hardheid op voor uw woonplaats.',
              },
              {
                href: '/kraanwater/vs-gefilterd',
                title: 'Kraanwater vs gefilterd water',
                desc: 'Smaak, veiligheid, kosten en milieu — uitgebreide vergelijking.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose uitgelegd',
                desc: 'Hoe werkt RO-filtratie en voor wie is het de beste keuze?',
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

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over leidingwater verbeteren</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
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
