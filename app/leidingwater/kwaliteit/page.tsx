import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Leidingwater kwaliteit Nederland: wat zit er in uw kraanwater?',
  description:
    'Alles over de kwaliteit van leidingwater in Nederland: het Drinkwaterbesluit 2011, EU-Drinkwaterrichtlijn 2020/2184, meer dan 60 gemeten parameters, regionale hardheidsverschillen en wanneer een waterfilter zinvol is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/kwaliteit' },
  openGraph: {
    title: 'Leidingwater kwaliteit Nederland: wat zit er in uw kraanwater?',
    description:
      'Wat zit er in Nederlands leidingwater? Normen, parameters, regionale hardheidsverschillen en wanneer filtratie zinvol is.',
    url: 'https://waterfilterplatform.nl/leidingwater/kwaliteit',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe goed is de kwaliteit van leidingwater in Nederland?',
    answer:
      'Nederlands leidingwater behoort tot de hoogste kwaliteit ter wereld. Het RIVM rapporteert jaarlijks dat meer dan 99,9% van de gemeten watermonsters voldoet aan alle wettelijke normen van het Drinkwaterbesluit. De EU plaatst Nederland consequent in de top 3 van drinkwaterkwaliteit in Europa.',
  },
  {
    question: 'Welke wet regelt de kwaliteit van leidingwater?',
    answer:
      'De kwaliteit van leidingwater wordt geregeld door het Drinkwaterbesluit (2011, geactualiseerd 2023), dat de EU-Drinkwaterrichtlijn 2020/2184 implementeert. Dit besluit stelt maximumwaarden vast voor meer dan 60 parameters, van bacteriën en zware metalen tot PFAS en pesticiden. De Inspectie Leefomgeving en Transport (ILT) houdt toezicht; RIVM monitort onafhankelijk.',
  },
  {
    question: 'Wat zijn de normen voor nitraat en lood in leidingwater?',
    answer:
      'De wettelijke norm voor nitraat is maximaal 50 mg/L. In de praktijk ligt het gemiddelde in Nederlands leidingwater tussen 15–25 mg/L. Voor lood geldt sinds de implementatie van de EU-richtlijn een aangescherpte norm: maximaal 5 µg/L (tijdelijk tot 10 µg/L met overgangsperiode tot 2036). De levering van drinkwater door waterbedrijven ligt doorgaans ruim onder 1 µg/L lood.',
  },
  {
    question: 'Wat is de PFAS-norm voor leidingwater?',
    answer:
      'De EU-Drinkwaterrichtlijn 2020/2184 stelt een norm van maximaal 0,10 µg/L voor de som van 20 specifieke PFAS-verbindingen. Nederland implementeerde deze norm per 12 januari 2023. In de meeste gevallen liggen de gemeten waarden ruim onder deze grens. Nabij vliegvelden en industrieterreinen zijn lokaal verhoogde concentraties gemeten, maar steeds onder de norm.',
  },
  {
    question: 'Verschilt de waterkwaliteit per regio in Nederland?',
    answer:
      'Alle leidingwater in Nederland voldoet aan dezelfde wettelijke normen, maar de samenstelling verschilt merkbaar per regio. Het grootste verschil is waterhardheid: in Limburg en Noord-Brabant (kalkrijke bodem) is water very hard (15–22 °dH), terwijl kustgebieden zacht water leveren (4–8 °dH). Hardheid heeft geen gezondheidsrisico maar beïnvloedt smaak en kalkvorming.',
  },
  {
    question: 'Wie controleert de kwaliteit van leidingwater?',
    answer:
      'Drie instanties controleren de kwaliteit van leidingwater: (1) De drinkwaterbedrijven zelf via uitgebreide interne monitoring, (2) de Inspectie Leefomgeving en Transport (ILT) als handhavingsinstantie, en (3) het RIVM dat jaarlijks de "Staat van de Drinkwaterkwaliteit" publiceert als onafhankelijke analyse.',
  },
  {
    question: 'Is leidingwater veilig voor baby\'s en zwangere vrouwen?',
    answer:
      'In de meeste gevallen is leidingwater veilig voor baby\'s en zwangere vrouwen. Uitzonderingen: (1) woningen met loden leidingen (voor 1960 gebouwd) — hierbij kan lood oplossen, (2) verhoogde nitraatconcentraties in agrarische gebieden. In twijfelgevallen is een gecertificeerd omgekeerde osmose filter de meest betrouwbare bescherming.',
  },
  {
    question: 'Wanneer is een waterfilter zinvol voor leidingwater?',
    answer:
      'Een waterfilter voegt waarde toe bij: (1) een merkbare chloor- of kalksmaak, (2) waterhardheid boven 15 °dH waardoor kalkvorming optreedt, (3) zorgen over PFAS in risicogebieden (nabij vliegvelden of industrie), (4) verhoogde nitraatconcentraties in landbouwgebieden, (5) loden leidingen in woningen gebouwd vóór 1960, of (6) extra zekerheid voor kwetsbare groepen. Omgekeerde osmose is de meest complete filteroplossing.',
  },
];

const parametersTabel = [
  { parameter: 'Nitraat (NO₃⁻)', norm: '<50 mg/L', typischNL: '15–25 mg/L', risico: 'Baby\'s bij hoge conc.', filter: 'Osmose (90–95%)' },
  { parameter: 'Lood (Pb)', norm: '<5 µg/L', typischNL: '<1 µg/L (levering)', risico: 'Loden leidingen intern', filter: 'Osmose, koolstof NSF53' },
  { parameter: 'PFAS (som 20)', norm: '<0,10 µg/L', typischNL: '<0,05 µg/L (gem.)', risico: 'Lokaal vliegveld/industrie', filter: 'Osmose (95–99%)' },
  { parameter: 'Waterhardheid', norm: 'Geen EU-norm', typischNL: '4–25 °dH (regionaal)', risico: 'Kalkvorming apparaten', filter: 'Ontharder, osmose' },
  { parameter: 'pH', norm: '6,5–9,5', typischNL: '7,3–8,0', risico: 'Geen gezondheidsrisico', filter: 'Niet nodig' },
  { parameter: 'Chloor (vrij)', norm: '<0,5 mg/L (WHO)', typischNL: '0,05–0,3 mg/L', risico: 'Smaak/geur bezwaar', filter: 'Koolstoffilter' },
  { parameter: 'E.coli / coliformen', norm: '0 KVE/100mL', typischNL: '0 (geleverd water)', risico: 'Zeer laag (zie intern net)', filter: 'UV, osmose' },
  { parameter: 'Troebelheid (turbiditeit)', norm: '<1 NTU', typischNL: '<0,3 NTU', risico: 'Geen bij norm conform', filter: 'Sedimentfilter' },
];

const hardheidsPerRegio = [
  { regio: 'Zeeland / Walcheren', waterbedrijf: 'Evides', hardheid: '4–6 °dH' },
  { regio: 'Kennemerland / Noord-Holland kust', waterbedrijf: 'PWN', hardheid: '7–9 °dH' },
  { regio: 'Den Haag / Westland', waterbedrijf: 'Dunea', hardheid: '8–10 °dH' },
  { regio: 'Amsterdam', waterbedrijf: 'Waternet', hardheid: '9–11 °dH' },
  { regio: 'Rotterdam / Rijnmond', waterbedrijf: 'Evides', hardheid: '10–13 °dH' },
  { regio: 'Groningen / Drenthe', waterbedrijf: 'WMD', hardheid: '10–14 °dH' },
  { regio: 'Friesland / Oost-Overijssel', waterbedrijf: 'Vitens', hardheid: '12–16 °dH' },
  { regio: 'Gelderland / Veluwe', waterbedrijf: 'Vitens', hardheid: '14–18 °dH' },
  { regio: 'Noord-Brabant', waterbedrijf: 'Brabant Water', hardheid: '15–20 °dH' },
  { regio: 'Limburg (Zuid)', waterbedrijf: 'WML', hardheid: '18–22 °dH' },
];

export default function LeidingwaterKwaliteitPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Leidingwater kwaliteit Nederland: wat zit er in uw kraanwater?',
          description:
            'Uitgebreide gids over de kwaliteit van leidingwater in Nederland: regelgeving, parameters, regionale hardheidsverschillen en wanneer filtratie zinvol is.',
          datePublished: '2026-03-25',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/leidingwater/kwaliteit',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Leidingwater', url: 'https://waterfilterplatform.nl/leidingwater' },
          { name: 'Kwaliteit', url: 'https://waterfilterplatform.nl/leidingwater/kwaliteit' },
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
            <span>Kwaliteit</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Leidingwater kwaliteit Nederland: wat zit er in uw kraanwater?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Nederlands leidingwater behoort tot de schoonste ter wereld — maar wat betekent
            dat concreet? Op deze pagina bespreken we de regelgeving (Drinkwaterbesluit 2011,
            EU-Drinkwaterrichtlijn 2020/2184), welke parameters worden getest, de actuele
            normen en hoe de kwaliteit per regio verschilt. Zo weet u precies wat er uit uw
            kraan komt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#parameters"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk normen en parameters →
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Hardheid in mijn gemeente
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* QuickAnswer */}
        <QuickAnswer answer="Nederlands leidingwater voldoet aan meer dan 60 kwaliteitsparameters uit het Drinkwaterbesluit en de EU-Drinkwaterrichtlijn 2020/2184. Nitraat mag maximaal 50 mg/L bevatten, lood maximaal 5 µg/L en PFAS maximaal 0,10 µg/L. De waterhardheid verschilt sterk per regio: van 4 °dH in Zeeland tot 22 °dH in Limburg. In de meeste gevallen is leidingwater direct veilig te drinken." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#regelgeving" className="hover:underline">Regelgeving: Drinkwaterbesluit & EU-richtlijn</a></li>
            <li><a href="#parameters" className="hover:underline">Wat wordt er getest? (&gt;60 parameters)</a></li>
            <li><a href="#normen-tabel" className="hover:underline">Normen en actuele waarden</a></li>
            <li><a href="#hardheid" className="hover:underline">Waterhardheid per regio</a></li>
            <li><a href="#toezicht" className="hover:underline">Wie controleert de kwaliteit?</a></li>
            <li><a href="#filter-wanneer" className="hover:underline">Wanneer is filtratie zinvol?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Regelgeving */}
        <section id="regelgeving">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Regelgeving: Drinkwaterbesluit 2011 en EU-Drinkwaterrichtlijn 2020/2184</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De kwaliteit van leidingwater in Nederland is verankerd in twee lagen wet- en regelgeving.
            Samen vormen ze één van de striktste drinkwaternormen ter wereld.
          </p>

          <div className="space-y-4 mb-6">
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#005F8A]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#005F8A] font-bold text-xs">NL</span>
                </div>
                <div>
                  <p className="font-semibold text-[#003F5C] mb-2">Drinkwaterbesluit 2011 (geactualiseerd 2023)</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Het Nederlandse Drinkwaterbesluit uit 2011 is de nationale uitwerking van de
                    Europese drinkwaternormen. Het besluit stelt maximumwaarden vast voor meer dan
                    60 parameters — van bacteriën en zware metalen tot pesticiden en PFAS — en
                    verplicht drinkwaterbedrijven tot continue monitoring en jaarlijkse openbare
                    rapportage. In 2023 werd het besluit geactualiseerd om de nieuwe EU-richtlijn
                    volledig te implementeren.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#005F8A]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#005F8A] font-bold text-xs">EU</span>
                </div>
                <div>
                  <p className="font-semibold text-[#003F5C] mb-2">EU-Drinkwaterrichtlijn 2020/2184</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    De herziene EU-richtlijn uit 2020 (volledig van kracht per 12 januari 2023)
                    bracht een grondige update van de normen: voor het eerst een wettelijke PFAS-norm
                    (0,10 µg/L voor som van 20 PFAS), een aangescherpte loodnorm (van 10 naar 5 µg/L,
                    met overgangsperiode), uitbreiding van het monitoringspakket van 48 naar 63
                    parameters, en verplichte risicoanalyse per waterwingebied. Nederland was koploper
                    in de implementatie.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#E0F2FE]/60 rounded-2xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1 text-sm">Wat betekent &ldquo;voldoet aan normen&rdquo; in de praktijk?</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Wanneer een drinkwaterbedrijf zegt dat zijn water &ldquo;voldoet aan alle normen&rdquo;,
              betekent dit dat alle gemeten waarden onder de wettelijke maximumwaarden liggen. Dit
              is een juridische veiligheidsgrens, geen optimum. Sommige stoffen — zoals PFAS — hebben
              geen bekende veilige drempel, waardoor consumenten die extra zekerheid wensen kiezen
              voor een aanvullend waterfilter.
            </p>
          </div>
        </section>

        {/* Parameters */}
        <section id="parameters">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat wordt er getest? Meer dan 60 parameters</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Drinkwaterbedrijven zijn verplicht het water te testen op een uitgebreid pakket
            parameters. Deze zijn onderverdeeld in vijf categorieën:
          </p>

          <div className="space-y-3 mb-6">
            {[
              {
                cat: 'Microbiologische parameters',
                desc: 'Escherichia coli (E.coli), enterokokken, Legionella en Cryptosporidium. Norm: 0 kolonievormende eenheden per 100 mL voor E.coli en enterokokken. Dit garandeert microbiologische veiligheid.',
                kleur: 'bg-green-50 border-green-200',
              },
              {
                cat: 'Chemische parameters (anorganisch)',
                desc: 'Lood, arseen, kwik, cadmium, chroom, koper, nitraat, nitriet, fluoride, ammonium. Elk met eigen maximumwaarde gebaseerd op gezondheidskundig onderzoek.',
                kleur: 'bg-blue-50 border-blue-200',
              },
              {
                cat: 'Chemische parameters (organisch)',
                desc: 'Pesticiden (per stof max. 0,10 µg/L), PFAS (som max. 0,10 µg/L), benzo(a)pyreen, trihalomethanen (bijproducten van chloordesinfectie), bisfenol A.',
                kleur: 'bg-sky-50 border-sky-200',
              },
              {
                cat: 'Indicatoren voor behandeling en distributie',
                desc: 'Residueel chloor, pH (6,5–9,5), troebelheid (<1 NTU), geleidbaarheid, kleur en reuk. Deze parameters signaleren problemen in zuivering of distributienet.',
                kleur: 'bg-indigo-50 border-indigo-200',
              },
              {
                cat: 'Nieuwe monitoring parameters (2023+)',
                desc: 'Microplastics (monitoring zonder actiedrempel), radioactiviteit, hormoonverstorende stoffen. Voor deze categorie lopen normontwikkelingstrajecten op EU-niveau.',
                kleur: 'bg-purple-50 border-purple-200',
              },
            ].map(c => (
              <div key={c.cat} className={`border rounded-2xl p-4 ${c.kleur}`}>
                <p className="font-semibold text-gray-800 mb-1">{c.cat}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">
            De exacte meetfrequentie hangt af van de omvang van het distributiesysteem en de
            risicoklasse van de bron. Grote drinkwaterbedrijven zoals Vitens en Evides voeren
            jaarlijks tienduizenden analysen uit. Alle resultaten worden gepubliceerd in jaarverslagen
            en zijn opvraagbaar via{' '}
            <span className="font-medium">drinkwaterinfo.nl</span>.
          </p>
        </section>

        {/* Normen tabel */}
        <section id="normen-tabel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Normen en actuele Nederlandse waarden</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderstaande tabel geeft een overzicht van de meest relevante parameters voor consumenten,
            de wettelijke norm en de typische waarden in Nederlands leidingwater op basis van
            RIVM-monitoringdata.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Parameter</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Wettelijke norm</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Typisch NL</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Risico</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Filter</th>
                </tr>
              </thead>
              <tbody>
                {parametersTabel.map((r, i) => (
                  <tr
                    key={r.parameter}
                    className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-[#E0F2FE]/20 border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-900">{r.parameter}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs font-mono">{r.norm}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.typischNL}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.risico}</td>
                    <td className="py-2.5 px-3 text-xs text-[#005F8A] font-medium">{r.filter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Bronnen: Drinkwaterbesluit 2023, RIVM Drinkwaterrapport 2024, EU-Drinkwaterrichtlijn 2020/2184.
          </p>
        </section>

        {/* Hardheid per regio */}
        <section id="hardheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterhardheid per regio: grote regionale verschillen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het meest in het oog springende kwaliteitsverschil tussen regio&apos;s is de waterhardheid.
            Hardheid wordt bepaald door het calciumgehalte van de bodem waaruit het grondwater wordt
            gewonnen. In kalkrijke gebieden (Limburg, Brabant) is het water very hard; langs de kust
            en in deltagebieden is het water zacht. Hardheid heeft geen directe gezondheidsrisico&apos;s
            maar is wél relevant voor kalkvorming in apparaten en het smaakprofiel van het water.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
            <p className="font-semibold text-amber-800 mb-1 text-sm">Hardheidsschaal (°dH = Duitse Hardheidsgraden)</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-amber-700">
              <div><span className="font-semibold">Zacht:</span> 0–7 °dH</div>
              <div><span className="font-semibold">Matig:</span> 7–14 °dH</div>
              <div><span className="font-semibold">Hard:</span> 14–21 °dH</div>
              <div><span className="font-semibold">Zeer hard:</span> &gt;21 °dH</div>
            </div>
          </div>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[420px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Regio</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Waterbedrijf</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Hardheid °dH</th>
                </tr>
              </thead>
              <tbody>
                {hardheidsPerRegio.map((r, i) => (
                  <tr
                    key={r.regio}
                    className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-[#E0F2FE]/20 border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-900">{r.regio}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.waterbedrijf}</td>
                    <td className="py-2.5 px-3 font-mono text-sm text-[#003F5C] font-semibold">{r.hardheid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Waarden zijn indicatief en kunnen per gemeente en seizoen licht variëren.
          </p>

          <p className="text-gray-700 mt-5 leading-relaxed">
            Wil je de exacte hardheid voor jouw gemeente weten? Bekijk het{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheidsoverzicht per gemeente
            </Link>
            {' '}met filteradvies op maat. Bij hardheid boven 14 °dH is een waterontharder of
            omgekeerde osmose systeem een zinvolle investering voor drinkwater.
          </p>
        </section>

        {/* Toezicht */}
        <section id="toezicht">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wie controleert de kwaliteit van leidingwater?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Het toezicht op de leidingwaterkwaliteit in Nederland is georganiseerd via drie
            onafhankelijke lagen, wat een betrouwbaar systeem van checks and balances garandeert.
          </p>

          <div className="space-y-4">
            {[
              {
                afk: 'RIVM',
                naam: 'Rijksinstituut voor Volksgezondheid en Milieu',
                rol: 'RIVM publiceert jaarlijks de "Staat van de Drinkwaterkwaliteit" — een onafhankelijke analyse van alle meetresultaten van de drinkwaterbedrijven. RIVM signaleert trends zoals toenemende PFAS-concentraties, stijgend nitraatgehalte in landbouwgebieden of opkomende microverontreinigingen, en adviseert de overheid over normaanpassing.',
              },
              {
                afk: 'ILT',
                naam: 'Inspectie Leefomgeving en Transport',
                rol: 'ILT is de handhavende overheidsinstantie. Ze controleren of drinkwaterbedrijven voldoen aan het Drinkwaterbesluit. Bij normoverschrijdingen worden bedrijven verplicht onmiddellijk corrigerende maatregelen te nemen en consumenten actief te informeren. Overschrijdingen zijn in de praktijk uiterst zeldzaam.',
              },
              {
                afk: 'DWB',
                naam: 'Drinkwaterbedrijven (interne monitoring)',
                rol: 'Elk van de tien drinkwaterbedrijven voert een uitgebreid intern monitoringprogramma uit. Grote bedrijven zoals Vitens en Brabant Water voeren tienduizenden analyses per jaar uit op honderden meetpunten in het distributiesysteem. Resultaten worden jaarlijks openbaar gemaakt.',
              },
            ].map(t => (
              <div key={t.afk} className="border border-gray-100 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-10 rounded-full bg-[#005F8A]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#005F8A] font-bold text-xs">{t.afk}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#003F5C] mb-1">{t.naam}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{t.rol}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 bg-[#E0F2FE]/60 rounded-2xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1 text-sm">Jaarverslagen raadplegen</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              De jaarverslagen van alle drinkwaterbedrijven zijn openbaar beschikbaar. Via
              drinkwaterinfo.nl kunt u de waterkwaliteitsrapportage voor uw specifieke adres
              of regio opzoeken. Het RIVM-drinkwaterrapport verschijnt elk voorjaar voor het
              voorgaande meetjaar.
            </p>
          </div>
        </section>

        {/* Wanneer filter */}
        <section id="filter-wanneer">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is extra filtratie zinvol bij leidingwater?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Leidingwater is veilig en voldoet aan alle wettelijke normen. Toch zijn er situaties
            waarbij een aanvullend waterfilter zinvolle meerwaarde biedt — voor smaak, comfort
            of als extra beschermlaag voor kwetsbare groepen.
          </p>

          <div className="space-y-3 mb-6">
            {[
              {
                titel: 'Woning gebouwd vóór 1960: lood in binnenleidingen',
                tekst: 'Woningen van vóór 1960 kunnen nog loden binnenleidingen hebben. Lood lost op in stilstaand water, met name bij zacht of licht zuur water. Een omgekeerde osmose filter op de keukenkraan verwijdert 95–99% van het lood. Laat bij twijfel een loodtest uitvoeren door een erkend laboratorium.',
                link: null,
              },
              {
                titel: 'Hard water (>14 °dH): kalkvorming en smaak',
                tekst: 'In Limburg, Noord-Brabant en delen van Gelderland ligt de waterhardheid structureel boven 14–18 °dH. Dit leidt tot kalkafzetting in waterkokers, koffiemachines en cv-ketels. Een waterontharder behandelt het totale huishoudwaterverbruik; omgekeerde osmose geeft puur drinkwater direct bij de keukenkraan.',
                link: '/waterhardheid',
              },
              {
                titel: 'PFAS-zorgen nabij vliegvelden of industrie',
                tekst: 'Nabij Schiphol, Eindhoven Airport en chemische industrieterreinen zijn lokaal verhoogde PFAS-concentraties in grondwater gemeten. Hoewel de drinkwaterlevering binnen normen valt, biedt omgekeerde osmose extra zekerheid — het verwijdert 95–99% van PFAS-verbindingen.',
                link: null,
              },
              {
                titel: 'Chloor smaak of geur',
                tekst: 'Residueel chloor in leidingwater is veilig maar kan bij sommige mensen een merkbare smaak of geur geven. Een actieve koolstoffilter verwijdert chloor volledig en verbetert de smaak aanzienlijk. De eenvoudigste optie is een filterkan; voor permanente oplossing is een onderbouwkoolstoffilter aan te raden.',
                link: null,
              },
              {
                titel: 'Kwetsbare groepen: zuigelingen en immuungecompromitteerden',
                tekst: 'Voor baby\'s jonger dan 6 maanden geldt dat flessenvoeding bij voorkeur bereid wordt met water dat laag in nitraten (<10 mg/L) en bacterievrij is. Een omgekeerde osmose filter geeft hiervoor de meest betrouwbare garantie.',
                link: null,
              },
            ].map(item => (
              <div key={item.titel} className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="font-semibold text-[#003F5C] mb-2">{item.titel}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">{item.tekst}</p>
                {item.link && (
                  <Link href={item.link} className="text-xs text-[#005F8A] font-medium hover:underline">
                    Meer informatie →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Welk filter past bij uw situatie?</p>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              Afhankelijk van uw specifieke concern — smaak, hardheid, PFAS of microbiologische
              veiligheid — is een ander filtertype de beste keuze. Bekijk de vergelijking van
              alle waterfiltertypen of lees meer over omgekeerde osmose, de meest complete oplossing.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/waterfilter/soorten"
                className="bg-[#005F8A] text-white font-semibold px-4 py-2 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Filtersoorten vergelijken →
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

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen over leidingwater en waterkwaliteit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/leidingwater',
                title: 'Leidingwater: uitgebreide gids',
                desc: 'Alles over het Nederlandse leidingwaterstelsel, zuivering, prijs en samenstelling.',
              },
              {
                href: '/leidingwater/kwaliteit-verbeteren',
                title: 'Leidingwater kwaliteit verbeteren',
                desc: '6 bewezen methoden: van filterkan tot omgekeerde osmose. Kosten en advies per situatie.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Zoek de exacte waterhardheid op voor uw woonplaats — met filteradvies op maat.',
              },
              {
                href: '/kraanwater/kwaliteit',
                title: 'Kraanwater kwaliteit',
                desc: 'Veilig, maar niet altijd optimaal: wat consumenten werkelijk bezighoudt over kraanwater.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose uitgelegd',
                desc: 'Hoe werkt RO-filtratie? Wat verwijdert het? Voor wie is het de beste keuze?',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Alle waterfiltersoorten',
                desc: 'Filterkan, koolstof, UV, ontharder of osmose — welk type past bij uw situatie?',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over leidingwater kwaliteit</h2>
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
