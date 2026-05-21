import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Drinkwaterkwaliteit Nederland 2026: normen en feiten',
  description:
    'Overzicht van drinkwaterkwaliteit in Nederland 2026: EU-Drinkwaterrichtlijn 2020/2184, RIVM-monitoring, PFAS-update 2024, Nederlandse score vs.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/kwaliteit' },
  openGraph: {
    title: 'Drinkwaterkwaliteit Nederland 2026: normen en feiten',
    description:
      'Nederland heeft uitstekend kraanwater — maar wat zeggen de normen precies? EU-richtlijn, RIVM-metingen, PFAS-update 2024 en wanneer een waterfilter zinvol is.',
    url: 'https://waterfilterplatform.nl/drinkwater/kwaliteit',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe goed is Nederlands kraanwater vergeleken met andere EU-landen?',
    answer:
      'Nederland behoort tot de top van Europa voor drinkwaterkwaliteit. Het RIVM-rapport 2024 toont dat 99,9% van de gemeten watermonsters voldeed aan alle wettelijke normen. Ter vergelijking: het EU-gemiddelde lag op 98,5% normconformiteit. Factoren als verouderd leidingwerk in sommige steden en lokale PFAS-belasting brengen dit gemiddelde omlaag.',
  },
  {
    question: 'Wat verandert er door de EU-Drinkwaterrichtlijn 2020/2184?',
    answer:
      'De nieuwe EU-richtlijn, die Nederland volledig implementeerde per 12 januari 2023, introduceert: een risicogebaseerde aanpak per stroomgebied, nieuwe normen voor PFAS (0,1 μg/L totaal) en microplastics (monitoring + actiedrempel), uitbreiding van het te monitoren parameterenpakket van 48 naar 63 stoffen, betere informatieplicht richting consumenten en strengere eisen voor loodverwijdering in woningen.',
  },
  {
    question: 'Zijn er PFAS-problemen in Nederlands drinkwater?',
    answer:
      'RIVM-monitoring in 2023–2024 toonde PFAS-sporen in meerdere drinkwaterbronnen, met name in de omgeving van vliegvelden (Schiphol, Eindhoven Airport), brandweeroefenterreinen en industrieterreinen. De concentraties lagen in vrijwel alle gevallen onder de nieuwe EU-norm. In een beperkt aantal gevallen werden preventieve maatregelen genomen. De situatie wordt nauwgezet gevolgd.',
  },
  {
    question: 'Welk waterbedrijf levert het beste drinkwater?',
    answer:
      'Alle Nederlandse drinkwaterbedrijven (Vitens, PWN, Evides, WMD, WML, Dunea, e.a.) leveren water dat voldoet aan de wettelijke normen. Regionale kwaliteitsverschillen bestaan in smaak (afhankelijk van hardheid en chloorgehalte), maar niet in veiligheid. RIVM publiceert jaarlijks het Drinkwaterrapport met per-bedrijf resultaten.',
  },
  {
    question: 'Moet ik mijn kraanwater filteren in Nederland?',
    answer:
      'Wettelijk is dat niet nodig — Nederlands kraanwater is veilig. Redenen om toch te filteren: verbetering van smaak en geur (chloor), zorgen over PFAS of medicijnresten, oude loodleidingen in de woning, of extra bescherming voor kwetsbare groepen (zuigelingen, zwangere vrouwen, immuungecompromitteerden).',
  },
];

const normsTabel = [
  { parameter: 'PFAS (som 20 stoffen)', euNorm: '0,10 μg/L', nlBevinding: 'Doorgaans <0,10 μg/L', status: 'Goed' },
  { parameter: 'Nitraat', euNorm: '50 mg/L', nlBevinding: 'Gemiddeld 15–25 mg/L', status: 'Goed' },
  { parameter: 'Lood', euNorm: '5 μg/L (per 2036)', nlBevinding: 'Levering <1 μg/L', status: 'Goed' },
  { parameter: 'Chloor (vrij)', euNorm: '0,5 mg/L (WHO richtlijn)', nlBevinding: '0,1–0,3 mg/L', status: 'Goed' },
  { parameter: 'Arseen', euNorm: '10 μg/L', nlBevinding: '<1 μg/L (meeste locaties)', status: 'Goed' },
  { parameter: 'Pesticide (individueel)', euNorm: '0,10 μg/L', nlBevinding: 'Sporadisch grenswaarde', status: 'Let op' },
  { parameter: 'Microplastics', euNorm: 'Monitoring (norm in ontwikkeling)', nlBevinding: 'Aanwezig (laag niveau)', status: 'Monitoring' },
  { parameter: 'Medicijnresten', euNorm: 'Geen norm', nlBevinding: 'Sporen (<0,001 μg/L)', status: 'Monitoring' },
  { parameter: 'Waterhardheid', euNorm: 'Geen EU-norm', nlBevinding: '4–25 °dH (regionaal)', status: 'Variabel' },
];

const waterbedrijven = [
  { bedrijf: 'Vitens', regio: 'Oost- en Noord-Nederland', aansluitingen: '5,7 mln', bijzonder: 'Grootste NL waterbedrijf' },
  { bedrijf: 'PWN', regio: 'Noord-Holland', aansluitingen: '1,1 mln', bijzonder: 'Duinwatergebied' },
  { bedrijf: 'Evides', regio: 'Zeeland, deels Z-Holland', aansluitingen: '1,3 mln', bijzonder: 'Mix oppervlakte + grondwater' },
  { bedrijf: 'Dunea', regio: 'Zuid-Holland kust', aansluitingen: '1,0 mln', bijzonder: 'Duinwatergebied' },
  { bedrijf: 'WML', regio: 'Limburg', aansluitingen: '0,6 mln', bijzonder: 'Hoog calciumgehalte (hard)' },
  { bedrijf: 'WMD', regio: 'Drenthe', aansluitingen: '0,4 mln', bijzonder: 'Zeer zacht grondwater' },
];

export default function DrinkwaterKwaliteitPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Drinkwaterkwaliteit Nederland 2026: normen en feiten',
          description:
            'Overzicht van Nederlandse drinkwaterkwaliteit: EU-richtlijn 2020/2184, RIVM-monitoring, PFAS-update 2024 en vergelijking met EU.',
          datePublished: '2026-01-02',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/drinkwater/kwaliteit',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Drinkwater', url: 'https://waterfilterplatform.nl/drinkwater' },
          { name: 'Kwaliteit', url: 'https://waterfilterplatform.nl/drinkwater/kwaliteit' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwater" className="hover:text-[#005F8A]">Drinkwater</Link>
            <span className="mx-2">/</span>
            <span>Kwaliteit</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Drinkwaterkwaliteit Nederland 2026: normen en feiten
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Nederlands kraanwater is veilig — maar wat betekent &ldquo;veilig&rdquo; precies?
            Op deze pagina bespreken we de EU-Drinkwaterrichtlijn 2020/2184, de actuele RIVM-monitoringresultaten,
            de PFAS-situatie van 2024, en hoe Nederland scoort ten opzichte van het EU-gemiddelde.
            Plus: wanneer is een extra waterfilter toch zinvol?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterfilter/gezondheid"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Wat filtert welk filter? →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmosefilter kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#eu-richtlijn" className="hover:underline">EU-Drinkwaterrichtlijn 2020/2184</a></li>
            <li><a href="#normen" className="hover:underline">Normen per parameter</a></li>
            <li><a href="#pfas" className="hover:underline">PFAS-update 2024</a></li>
            <li><a href="#rivm" className="hover:underline">RIVM-monitoring</a></li>
            <li><a href="#waterbedrijven" className="hover:underline">Nederlandse waterbedrijven</a></li>
            <li><a href="#wanneer-filter" className="hover:underline">Wanneer extra filtratie?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* EU-richtlijn */}
        <section id="eu-richtlijn">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">EU-Drinkwaterrichtlijn 2020/2184</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            In januari 2021 trad de herziene EU-Drinkwaterrichtlijn (2020/2184) in werking, de eerste
            grondige herziening in 20 jaar. Nederland implementeerde de richtlijn volledig per
            12 januari 2023 via een aanpassing van het Drinkwaterbesluit.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De belangrijkste veranderingen ten opzichte van de oude richtlijn:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Nieuwe PFAS-norm',
                tekst: 'Voor het eerst een wettelijke norm: maximaal 0,10 μg/L voor de som van 20 specifieke PFAS-verbindingen. Dit is aanmerkelijk strenger dan eerdere WHO-aanbevelingen.',
              },
              {
                titel: 'Risicogebaseerde benadering',
                tekst: 'Waterbedrijven moeten per stroomgebied een risicoanalyse uitvoeren op potentiële verontreinigingsbronnen — van landbouw tot industrie en klimaatverandering.',
              },
              {
                titel: 'Uitbreiding parameterpakket',
                tekst: 'Van 48 naar 63 wettelijk te monitoren parameters. Nieuw: bisfenol A, microplastics (monitoring), radioactiviteit en meer hormoonverstorende stoffen.',
              },
              {
                titel: 'Lood: strengere norm',
                tekst: 'De EU-loodnorm gaat van 10 μg/L naar 5 μg/L (per 2036). Lidstaten moeten plannen maken voor vervanging van loodleidingen.',
              },
              {
                titel: 'Informatierechten consumenten',
                tekst: 'Waterbedrijven zijn verplicht jaarlijks actuele kwaliteitsgegevens publiek beschikbaar te stellen, inclusief vergelijking met wettelijke normen.',
              },
            ].map(p => (
              <div key={p.titel} className="flex gap-3 items-start">
                <span className="text-[#005F8A] font-bold text-lg mt-0.5 shrink-0">→</span>
                <div>
                  <p className="font-semibold text-gray-900">{p.titel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{p.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Normen tabel */}
        <section id="normen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Normen en actuele Nederlandse bevindingen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderstaande tabel toont de EU-norm per relevante parameter en de actuele Nederlandse
            bevindingen op basis van RIVM-data 2023–2024.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Parameter</th>
                  <th className="text-left py-2.5 px-3 font-semibold">EU-norm</th>
                  <th className="text-left py-2.5 px-3 font-semibold">NL bevinding</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {normsTabel.map(r => (
                  <tr key={r.parameter} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-900">{r.parameter}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs font-mono">{r.euNorm}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.nlBevinding}</td>
                    <td className="py-2.5 px-3 text-center">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        r.status === 'Goed' ? 'bg-green-100 text-green-800' :
                        r.status === 'Let op' ? 'bg-amber-100 text-amber-800' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Bronnen: RIVM Drinkwaterrapport 2024, EU Commissie DWD-rapportage 2022, EFSA PFAS-evaluatie.
          </p>
        </section>

        {/* PFAS update */}
        <section id="pfas">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PFAS-update 2024</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PFAS (per- en polyfluoralkylstoffen) stond in 2024 hoog op de politieke en
            publieke agenda in Nederland. De belangrijkste ontwikkelingen:
          </p>
          <div className="space-y-4">
            {[
              {
                datum: 'Januari 2024',
                tekst: 'RIVM publiceert uitgebreid monitoringsrapport: PFAS aangetroffen in 14 van de 23 onderzochte drinkwaterbronnen. Concentraties varieerden van <0,01 tot 0,07 μg/L — onder de EU-norm.',
              },
              {
                datum: 'Maart 2024',
                tekst: 'Tweede Kamer debat over PFAS in drinkwater. Staatssecretaris kondigt versneld actieplan aan voor de 20 hoogst belaste gebieden.',
              },
              {
                datum: 'Juni 2024',
                tekst: 'Drie waterbedrijven introduceren actieve koolstoffiltratie als extra stap in het zuiveringsproces voor gebieden dichtbij bekende PFAS-bronnen.',
              },
              {
                datum: '2025–2026',
                tekst: 'Nieuwe EU-actiedrempel voor microplastics verwacht. RIVM start grootschalig monitoringsprogramma voor 40+ PFAS-verbindingen buiten de standaardlijst.',
              },
            ].map(r => (
              <div key={r.datum} className="flex gap-4 items-start">
                <span className="text-xs font-semibold text-[#005F8A] shrink-0 bg-[#E0F2FE] px-2 py-1 rounded mt-0.5">{r.datum}</span>
                <p className="text-sm text-gray-700 leading-relaxed">{r.tekst}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Voor consumenten:</strong> de kans op schadelijke
            PFAS-concentraties via kraanwater is in Nederland klein. Voor extra zekerheid is
            omgekeerde osmose de meest effectieve thuisoplossing (95–99% PFAS-verwijdering).
          </div>
        </section>

        {/* RIVM */}
        <section id="rivm">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">RIVM-monitoring: hoe werkt het?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het RIVM coördineert het nationale drinkwatermonitoringsprogramma. Jaarlijks worden
            meer dan 200.000 wateranalyses uitgevoerd op circa 300 punten in het distributiesysteem.
            Het resultaat wordt jaarlijks gepubliceerd in het <em>Drinkwaterrapport</em>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Elk waterbedrijf is ook zelf verantwoordelijk voor interne kwaliteitsmonitoring en
            verplicht klanten jaarlijks te informeren via jaarverslag en website. U kunt de
            drinkwaterkwaliteit van uw specifieke adres opvragen bij uw waterbedrijf.
          </p>
        </section>

        {/* Waterbedrijven */}
        <section id="waterbedrijven">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Nederlandse waterbedrijven</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[460px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Bedrijf</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Regio</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Aansluitingen</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Bijzonder</th>
                </tr>
              </thead>
              <tbody>
                {waterbedrijven.map(w => (
                  <tr key={w.bedrijf} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-900">{w.bedrijf}</td>
                    <td className="py-2.5 px-3 text-gray-600">{w.regio}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{w.aansluitingen}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs">{w.bijzonder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wanneer filter */}
        <section id="wanneer-filter">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is extra filtratie zinvol?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor de meeste consumenten is Nederlands kraanwater direct drinkbaar. Extra filtratie
            kan nuttig zijn in de volgende situaties:
          </p>
          <div className="space-y-3">
            {[
              { situatie: 'Woning gebouwd vóór 1960', reden: 'Risico op loodleidingen in huis — zelfs als het water de woning binnengekomen is als loodvrij.', actie: 'Koolstoffilter met loodcertificaat of RO' },
              { situatie: 'Nabij vliegveld of industrieterrein', reden: 'Verhoogd risico op PFAS in grondwater en drinkwaterbron.', actie: 'Omgekeerde osmose (95–99% PFAS)' },
              { situatie: 'Zuigelingen en zwangere vrouwen', reden: 'Nitraat kan een risico vormen; extra voorzichtigheid bij kwetsbare groepen.', actie: 'RO of gecertificeerd koolstoffilter' },
              { situatie: 'Hoge waterhardheid (>15 °dH)', reden: 'Geen gezondheidsrisico, maar schade aan apparaten en leidingen.', actie: 'Waterontharder of RO voor drinkwater' },
              { situatie: 'Chloor smaak of geur', reden: 'Subjectief maar veelvoorkomend bezwaar — lagere drempel voor chloor bij sommige mensen.', actie: 'Koolstoffilter of filterkan' },
            ].map(r => (
              <div key={r.situatie} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{r.situatie}</p>
                <p className="text-xs text-gray-600 mb-1">{r.reden}</p>
                <p className="text-xs font-medium text-[#005F8A]">Advies: {r.actie}</p>
              </div>
            ))}
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
            <p className="text-sm text-gray-600">Wettelijke normen voor drinkwaterkwaliteit in Nederland.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Stoffen in drinkwater</h3>
            <p className="text-sm text-gray-600">Overzicht van alle stoffen die in drinkwater kunnen voorkomen.</p>
          </Link>
          <Link href="/waterkwaliteit/nederland" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterkwaliteit in Nederland</h3>
            <p className="text-sm text-gray-600">Hoe goed is de drinkwaterkwaliteit in Nederland per regio?</p>
          </Link>
          <Link href="/kraanwater/kwaliteit" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kraanwaterkwaliteit</h3>
            <p className="text-sm text-gray-600">Alles over de kwaliteit en veiligheid van Nederlands kraanwater.</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
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

        {/* Gerelateerde pagina&apos;s */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verwante onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/waterfilter/gezondheid', title: 'Waterfilter en gezondheid', desc: 'Per contaminant: aanwezig in NL, risico en welk filter helpt.' },
              { href: '/waterhardheid', title: 'Waterhardheid per gemeente', desc: 'Zoek de hardheid op voor jouw woonplaats.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose gids', desc: 'Complete uitleg over RO-filtratie voor thuis.' },
              { href: '/kraanwater', title: 'Kraanwater vs. flessenwater', desc: 'Feitelijke vergelijking op kwaliteit, kosten en milieu.' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">{l.title}</p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
