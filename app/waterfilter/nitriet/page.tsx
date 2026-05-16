import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Nitriet in drinkwater: verschil met nitraat en filter',
  description: 'Nitriet (NO2-) in drinkwater: 10x toxischer dan nitraat bij gelijke concentratie. WHO-grens 0,5 mg/L. Baby-blue-syndroom risico en filteroplossingen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/nitriet' },
  openGraph: {
    title: 'Nitriet in drinkwater: verschil met nitraat en filter',
    description: 'Nitriet (NO2-) in drinkwater: 10x toxischer dan nitraat bij gelijke concentratie. WHO-grens 0,5 mg/L. Baby-blue-syndroom risico en filteroplossingen.',
    url: 'https://waterfilterplatform.nl/waterfilter/nitriet',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het verschil tussen nitriet en nitraat in drinkwater?',
    answer:
      'Nitraat (NO3-) en nitriet (NO2-) zijn beide stikstofverbindingen, maar chemisch en toxicologisch verschilt ze sterk. Nitraat heeft drie zuurstofatomen; nitriet twee. Nitriet is bij gelijke concentratie circa 10 keer toxischer dan nitraat omdat het direct methemoglobine vormt in het bloed. Nitraat kan in het lichaam deels worden omgezet in nitriet, maar nitriet werkt direct. De WHO-norm voor nitriet in drinkwater is 0,5 mg/L, terwijl die voor nitraat 50 mg/L is.',
  },
  {
    question: 'Hoe komt nitriet in drinkwater terecht?',
    answer:
      'Nitriet kan op twee manieren in drinkwater terechtkomen: (1) Directe verontreiniging van bron of leidingen, bijvoorbeeld door corrosiereacties in leidingwerk of industriele lozingen. (2) Bacteriele omzetting: bacterien kunnen nitraat reduceren tot nitriet in stilstaand water, zoals in leidingen die lang niet gebruikt zijn, in slechte waterfilters die niet tijdig zijn vervangen, of in putwater met hoog nitraatgehalte en slechte hygiëne.',
  },
  {
    question: 'Wat is de WHO-norm voor nitriet in drinkwater?',
    answer:
      'De WHO-gezondheidskundige richtwaarde voor nitriet in drinkwater is 0,5 mg/L. De EU-drinkwaternorm (Richtlijn 2020/2184) hanteert dezelfde waarde van 0,5 mg/L. Dit is 100 keer strenger dan de nitraatnorm van 50 mg/L, wat de hogere toxiciteit van nitriet weerspiegelt.',
  },
  {
    question: 'Wat is het baby-blue-syndroom?',
    answer:
      'Het baby-blue-syndroom (methemoglobinemie) ontstaat wanneer nitriet of nitraat wordt omgezet in nitriet in het lichaam. Nitriet oxideert hemoglobine in de rode bloedcellen naar methemoglobine, wat geen zuurstof meer kan transporteren. Baby\'s jonger dan 6 maanden zijn het kwetsbaarst door een zuurarmer maagmilieu, andere bacterieflorasamenstelling en minder enzymactiviteit. Symptomen: blauwe verkleuring van huid en lippen (cyanose), kortademigheid, lethargie. Ernstige gevallen kunnen fataal zijn.',
  },
  {
    question: 'Is nitriet een probleem in Nederlands leidingwater?',
    answer:
      'In het Nederlandse leidingwater is nitriet vrijwel nooit een probleem. Drinkwaterbedrijven monitoren nitriet structureel en de waarden liggen typisch lager dan 0,02 mg/L, ver onder de norm. Het risico is wel aanwezig in: (1) particuliere putten of bronnen die niet worden gemonitord, (2) woningen met verouderd leidingwerk of stagnant water na langdurige afwezigheid, (3) slecht onderhouden waterfilters waar bacterien nitraat omzetten.',
  },
  {
    question: 'Verwijdert een koolstoffilter nitriet uit drinkwater?',
    answer:
      'Nee. Een actieve koolstoffilter zoals een Brita-filterkan of een inline koolstoffilter verwijdert geen nitriet of nitraat. Koolstoffilters adsorberen organische verbindingen, chloor, geur en smaak. Ionische verbindingen zoals NO2- en NO3- worden niet gebonden. Voor nitrietverwijdering zijn ionenwisseling (99% effectiviteit) of omgekeerde osmose (90-95% effectiviteit) de aangewezen methoden.',
  },
  {
    question: 'Hoe effectief is omgekeerde osmose voor nitriet?',
    answer:
      'Omgekeerde osmose verwijdert 90-95% van nitriet uit drinkwater. Bij een inkomende concentratie van 0,5 mg/L (de norm) daalt nitriet naar minder dan 0,05 mg/L in het gefilterde water. Osmose verwijdert tegelijk nitraat, zware metalen, PFAS en medicijnresten. Voor huishoudens met putwater of verhoogde nitrietwaarden is osmose de meest complete en praktische filteroplossing.',
  },
];

const filterEffectiviteit = [
  { methode: 'Ionenwisseling (anionenwisselaar)', nitriet: '99%', nitraat: '90-95%', kosten: '400-1.000 euro', opmerking: 'Meest effectief voor beide; vereist zoutregeneratie' },
  { methode: 'Omgekeerde osmose (RO)', nitriet: '90-95%', nitraat: '85-95%', kosten: '300-800 euro', opmerking: 'Breed inzetbaar; verwijdert ook PFAS en zware metalen' },
  { methode: 'Actieve kool (koolstoffilter)', nitriet: '0%', nitraat: '0-5%', kosten: '20-60 euro/jaar', opmerking: 'Niet geschikt voor ionen; werkt alleen voor organische stoffen' },
  { methode: 'Filterkan (Brita e.d.)', nitriet: '0%', nitraat: '0%', kosten: '5-10 euro/maand', opmerking: 'Geen effect op nitriet of nitraat' },
  { methode: 'UV-desinfectie', nitriet: '0%', nitraat: '0%', kosten: '100-300 euro', opmerking: 'Doodt bacterien maar verwijdert geen chemische stoffen' },
];

export default function WaterfilterNitrietPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Nitriet', url: 'https://waterfilterplatform.nl/waterfilter/nitriet' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Nitriet in drinkwater: verschil met nitraat en filter',
          description: 'Nitriet (NO2-) in drinkwater: 10x toxischer dan nitraat bij gelijke concentratie. WHO-grens 0,5 mg/L. Baby-blue-syndroom risico en filteroplossingen.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-01',
          url: 'https://waterfilterplatform.nl/waterfilter/nitriet',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Nitriet</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Nitriet in drinkwater: verschil met nitraat en filteroplossingen
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Nitriet (NO2-) is chemisch verwant aan nitraat maar aanzienlijk gevaarlijker: bij gelijke
            concentratie is nitriet circa 10 keer toxischer. De WHO-grens is slechts 0,5 mg/L.
            Wat is het risico voor zuigelingen, hoe herkent u nitriet en welke filters werken?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#filters"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Filteroplossingen bekijken &rarr;
            </Link>
            <Link
              href="/waterfilter/nitraat"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Over nitraat in water
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Nitriet (NO2-) is 10x toxischer dan nitraat bij gelijke concentratie. WHO-norm: 0,5 mg/L. In Nederlands leidingwater is nitriet vrijwel nooit een probleem, maar in putwater en slecht onderhouden filters kan het voorkomen. Koolstoffilters verwijderen geen nitriet. Osmose verwijdert 90-95%, ionenwisseling tot 99%." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#verschil" className="hover:underline">Nitriet vs nitraat: het verschil</a></li>
            <li><a href="#bronnen" className="hover:underline">Hoe komt nitriet in water?</a></li>
            <li><a href="#normen" className="hover:underline">WHO-norm en EU-norm</a></li>
            <li><a href="#baby-blue" className="hover:underline">Baby-blue-syndroom</a></li>
            <li><a href="#filters" className="hover:underline">Filteroplossingen</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Verschil nitriet vs nitraat */}
        <section id="verschil">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Nitriet vs nitraat: het chemische en toxicologische verschil
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nitraat (NO3-) en nitriet (NO2-) zijn beide opgeloste stikstofverbindingen in water.
            Nitraat heeft drie zuurstofatomen; nitriet slechts twee. Dit kleine chemische verschil
            heeft grote gevolgen voor de toxiciteit:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Kenmerk</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Nitraat (NO3-)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Nitriet (NO2-)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Zuurstofatomen', '3', '2'],
                  ['WHO-norm drinkwater', '50 mg/L', '0,5 mg/L'],
                  ['Relatieve toxiciteit', 'Referentie (1x)', 'Circa 10x hoger'],
                  ['Directe werking bloed', 'Nee (indirect via omzetting)', 'Ja (direct methemoglobinevorming)'],
                  ['Koolstoffilter effectief?', 'Nee', 'Nee'],
                  ['Osmose effectief?', '85-95%', '90-95%'],
                  ['Ionenwisseling effectief?', '90-95%', 'Tot 99%'],
                ].map(([kenmerk, nitraat, nitriet], i) => (
                  <tr key={kenmerk} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800 text-xs">{kenmerk}</td>
                    <td className="py-2.5 px-3 text-center text-xs text-gray-600">{nitraat}</td>
                    <td className="py-2.5 px-3 text-center text-xs font-semibold text-[#003F5C]">{nitriet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bronnen */}
        <section id="bronnen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe komt nitriet in drinkwater?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nitriet in drinkwater kan via twee routes ontstaan:
          </p>
          <div className="space-y-3 mb-5">
            <div className="border border-gray-100 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Bacteriele omzetting van nitraat</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Bacterien kunnen nitraat (NO3-) reduceren tot nitriet (NO2-) in stilstaand water.
                Dit kan optreden in slecht onderhouden waterfilters die lang niet zijn vervangen,
                in putwater dat stagnant staat, of in water dat lang in leidingen stilstaat.
                Dit is de meest voorkomende bron van nitriet in drinkwater bij particulieren.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-4">
              <h3 className="font-semibold text-[#003F5C] mb-2">Directe verontreiniging</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Nitriet kan ook direct in het water terechtkomen via corrosiereacties in
                leidingwerk, industriele lozingen of agrarische verontreiniging. In Nederland
                is dit voor leidingwater vrijwel uitgesloten door de strenge monitoring van
                drinkwaterbedrijven.
              </p>
            </div>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1">NL situatie: leidingwater veilig, putwater risico</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              In Nederlands leidingwater is nitriet vrijwel nooit een probleem. Drinkwaterbedrijven
              monitoren nitriet structureel; waarden liggen typisch lager dan 0,02 mg/L. Het risico
              is groter bij particuliere putten, regenwatertanks en slecht onderhouden filters.
              Laat putwater regelmatig analyseren door een gecertificeerd laboratorium.
            </p>
          </div>
        </section>

        {/* Normen */}
        <section id="normen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            WHO-norm en EU-drinkwaternorm voor nitriet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">WHO-richtwaarde / EU-norm (2020/2184)</p>
              <p className="text-3xl font-bold text-[#003F5C]">0,5 mg/L</p>
              <p className="text-xs text-gray-600 mt-1">Nitriet (NO2-) in drinkwater</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-1">WHO-richtwaarde / EU-norm nitraat</p>
              <p className="text-3xl font-bold text-gray-700">50 mg/L</p>
              <p className="text-xs text-gray-600 mt-1">Nitraat (NO3-) in drinkwater</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De nitrietlimiet is 100 keer strenger dan de nitraatlimiet, wat de hogere toxiciteit
            van nitriet weerspiegelt. In Nederland wordt de norm voor nitriet vrijwel nooit
            overschreden in leidingwater. Voor putwater gelden geen wettelijke monitoringsverplichtingen.
          </p>
        </section>

        {/* Baby-blue */}
        <section id="baby-blue">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Baby-blue-syndroom: methemoglobinemie bij zuigelingen
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het baby-blue-syndroom (methemoglobinemie) is het bekendste gezondheidsrisico van
            nitriet in drinkwater. Nitriet oxideert hemoglobine in de rode bloedcellen naar
            methemoglobine, wat geen zuurstof meer kan transporteren.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Zuigelingen jonger dan 6 maanden zijn het kwetsbaarst. Hun maag heeft een hogere pH
            waardoor meer bacteriele omzetting van nitraat naar nitriet plaatsvindt. Bovendien
            hebben zij fetaal hemoglobine dat gevoeliger is voor oxidatie en minder activiteit
            van het enzym dat methemoglobine terugzet naar hemoglobine.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <p className="font-semibold text-red-900 mb-2">Symptomen baby-blue-syndroom</p>
            <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
              <li>Blauwe of grijze verkleuring van huid, lippen en nagels (cyanose)</li>
              <li>Kortademigheid en snelle ademhaling</li>
              <li>Lethargie en sloomheid</li>
              <li>In ernstige gevallen: bewustzijnsverlies en overlijden</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor de bereiding van zuigelingenvoeding wordt aanbevolen om water te gebruiken met
            een nitrietgehalte lager dan 0,1 mg/L. Osmosewater biedt hiervoor de betrouwbaarste
            garantie. Lees ook onze pagina over{' '}
            <Link href="/waterfilter/nitraat" className="text-[#005F8A] underline hover:no-underline">
              nitraat in drinkwater
            </Link>{' '}
            voor de bredere context.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Filters */}
        <section id="filters">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke waterfilters verwijderen nitriet effectief?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet alle waterfilters zijn effectief voor nitriet. Hier is een compleet overzicht:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Filtermethode</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Nitriet</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Nitraat</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten</th>
                </tr>
              </thead>
              <tbody>
                {filterEffectiviteit.map((f, i) => (
                  <tr key={f.methode} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 text-gray-800 text-xs font-medium">{f.methode}</td>
                    <td className={`py-2.5 px-3 text-center text-xs font-semibold ${
                      f.nitriet === '0%' ? 'text-red-500' :
                      parseInt(f.nitriet) >= 90 ? 'text-green-700' : 'text-amber-600'
                    }`}>{f.nitriet}</td>
                    <td className={`py-2.5 px-3 text-center text-xs font-semibold ${
                      f.nitraat === '0%' || f.nitraat === '0-5%' ? 'text-red-500' :
                      parseInt(f.nitraat) >= 85 ? 'text-green-700' : 'text-amber-600'
                    }`}>{f.nitraat}</td>
                    <td className="py-2.5 px-3 text-right text-xs text-[#005F8A] font-medium">{f.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] mb-2">Aanbeveling</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Voor huishoudens met putwater of verhoogde nitrietwaarden is omgekeerde osmose de
              meest praktische oplossing. Osmose verwijdert 90-95% van nitriet en combineert dit
              met de verwijdering van PFAS, zware metalen en medicijnresten. Ionenwisseling is
              iets effectiever voor nitriet, maar vereist zoutregeneratie en meer onderhoud. Lees
              meer op onze pagina over{' '}
              <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
                omgekeerde osmose
              </Link>.
            </p>
          </div>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterfilter', label: 'Alle waterfilters vergelijken' },
              { href: '/waterfilter/nitraat', label: 'Nitraat in drinkwater' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitleg' },
              { href: '/putwater', label: 'Putwater filteren' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>&rarr;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over nitriet in drinkwater
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

      </div>
    </>
  );
}
