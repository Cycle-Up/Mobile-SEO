import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kalk op douchedeur en tegels: oorzaak en kalksteen verwijderen',
  description:
    'Witte kalkafzetting op douchedeur en tegels? Oorzaak, preventie en reinigingstips. Waterontharder of osmose als structurele oplossing.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kalk-in/douche' },
  openGraph: {
    title: 'Kalk in douche: witte aanslag op douchedeur en tegels verwijderen',
    description:
      'Waarom slaat kalk neer in de douche? Citroenzuur of azijn, douchefilter of waterontharder: alles over kalkaanslag in de badkamer.',
  },
};

const faqItems = [
  {
    question: 'Waarom slaat er zo snel kalk neer op de douchedeur?',
    answer:
      'De douchedeur wordt constant nat en droogt daarna op. Bij elke droogronde blijft calciumcarbonaat achter als wit laagje. Hoe harder het water, hoe meer mineralen per liter, hoe zichtbaarder de aanslag. Glazen deuren zijn extra opvallend omdat kalk moeilijk in het glas absorbeert en dus als losse korst zichtbaar blijft.',
  },
  {
    question: 'Is kalk in de douche schadelijk voor de huid?',
    answer:
      'Kalk zelf is niet schadelijk maar het vormt in combinatie met zeep "kalkzeep" (calciumstearaat). Dit mengsel spoelt slecht af en laat een droge, trekkerige film op de huid achter. Dit kan leiden tot droge huid, jeuk en verminderde zeepwerking. Mensen met een gevoelige huid of eczeem merken dit het sterkst.',
  },
  {
    question: 'Hoe verwijder ik kalk van de douchedeur met citroenzuur?',
    answer:
      'Los 100 gram citroenzuur op in 1 liter warm water (1:10 verdunning). Breng de oplossing aan op de douchedeur met een spons of doek en laat 15-30 minuten inwerken. Schuur daarna licht met een niet-krassende spons en spoel grondig af met schoon water. Voor hardnekkige aanslag kunt u onverdund citroenzuurpoeder op een natte spons aanbrengen.',
  },
  {
    question: 'Helpt azijn ook om kalk in de douche te verwijderen?',
    answer:
      'Ja, schoonmaakazijn (6-9% azijnzuur) is effectief tegen kalk. Verdun 1:1 met water voor glazen deuren. Azijn heeft een sterkere geur dan citroenzuur maar werkt net zo goed. Let op: gebruik geen azijn op natuursteen (marmer, kalkzandsteen) omdat het de steen kan aantasten.',
  },
  {
    question: 'Hoe vaak moet ik de douche schoonmaken bij hard water?',
    answer:
      'Bij hard water (boven 14 dH) wordt wekelijks afvegen met een trekker na het douchen sterk aanbevolen om kalkopbouw te voorkomen. Een grondige ontkalkbeurt met citroenzuur of azijn is aan te raden elke 2-4 weken. In zeer zachte-watergebieden (onder 8 dH) volstaat maandelijks een ontkalkbeurt.',
  },
  {
    question: 'Wat doet kalk met mijn haar?',
    answer:
      'Kalk in douchewater hecht aan de haarkuticula. De mineralen trekken de fijnste laagjes van het haar open, wat leidt tot dof, droog en onhandelbaar haar. Shampoo en conditioner werken minder goed omdat de mineralen de werkzame stoffen deactiveren. In hard-watergebieden is de kwaliteit van haar merkbaar slechter dan in zachte-waterregio\'s.',
  },
  {
    question: 'Helpt een douchefilter tegen kalk?',
    answer:
      'Een eenvoudig koolstof-douchefilter verwijdert geen kalk. Sommige douchefilters bevatten een kleine hoeveelheid ionenwisselhars die tijdelijk kalk vermindert, maar de capaciteit is beperkt (typisch 3-6 maanden). Voor structurele kalkverwijdering is een centrale waterontharder of een ontharder direct voor de douche-toevoer nodig.',
  },
  {
    question: 'Is een waterontharder de oplossing voor kalk in de douche?',
    answer:
      'Ja, een centrale waterontharder elimineert kalkaanslag in de douche nagenoeg volledig. Zacht water laat geen kalkafzetting achter op deuren en tegels en werkt beter samen met zeep en shampoo. Drinkwater kunt u via een apart osmosefilter voorzien als u geen natriumtoevoeging in uw drinkwater wilt.',
  },
];

const reinigingsTips = [
  {
    middel: 'Citroenzuur',
    verdunning: '100 g per liter water',
    inwerktijd: '15-30 minuten',
    geschikt: 'Glas, tegels, chroom, kunststof',
    niet: 'Gebruik niet op marmer of kalkzandsteen',
    kleur: 'border-green-200 bg-green-50',
  },
  {
    middel: 'Schoonmaakazijn',
    verdunning: '1:1 verdund',
    inwerktijd: '10-20 minuten',
    geschikt: 'Glas, tegels, chroom',
    niet: 'Niet op natuursteen; sterke geur',
    kleur: 'border-amber-200 bg-amber-50',
  },
  {
    middel: 'Commercieel kalkverwijderaar',
    verdunning: 'Zie verpakking',
    inwerktijd: '5-15 minuten',
    geschikt: 'Glas en tegels, krachtige aanpak',
    niet: 'Duur bij frequent gebruik; chemisch',
    kleur: 'border-blue-200 bg-blue-50',
  },
  {
    middel: 'Bakpoeder + azijn',
    verdunning: 'Pasta maken',
    inwerktijd: '20 minuten',
    geschikt: 'Hardnekkige vlekken op voegen',
    niet: 'Minder effectief op groot oppervlak',
    kleur: 'border-gray-200 bg-gray-50',
  },
];

const hardheidFrequentie = [
  { range: 'Minder dan 8 dH (zacht)', frequentie: '1 x per maand', advies: 'Regelmatig natmaken en afvegen volstaat' },
  { range: '8-12 dH (matig hard)', frequentie: '2 x per maand', advies: 'Wekelijks aftrekken na douchen' },
  { range: '12-18 dH (hard)', frequentie: '1-2 x per week', advies: 'Dagelijks aftrekken, wekelijks ontkalkbeurt' },
  { range: 'Meer dan 18 dH (zeer hard)', frequentie: '2-3 x per week', advies: 'Dagelijks aftrekken is minimum; overweeg waterontharder' },
];

export default function KalkDouchePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kalk in leidingwater', url: 'https://waterfilterplatform.nl/kalk-in' },
          { name: 'Kalk in douche', url: 'https://waterfilterplatform.nl/kalk-in/douche' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kalk op douchedeur en tegels: oorzaak en kalksteen verwijderen',
          description:
            'Witte kalkafzetting op douchedeur en tegels? Oorzaak, preventie en reinigingstips. Waterontharder of osmose als structurele oplossing.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/kalk-in/douche',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kalk-in" className="hover:text-[#005F8A]">Kalk in leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Kalk in douche</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kalk op douchedeur en tegels: oorzaak en kalksteen verwijderen
          </h1>
          <p className="text-gray-600 text-lg">
            Witte kalkafzetting op de douchedeur, kalkranden op tegels en een verstopte douchekop: herkenbare problemen in hard-watergebieden.
            Leer de oorzaak, de beste reinigingsmiddelen en hoe u kalk structureel aanpakt.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <QuickAnswer answer="Kalk in de douche ontstaat doordat waterdamp verdampt en calciumcarbonaat achterblijft op glas en tegels. Citroenzuur (100 g/L) of azijn (1:1) verwijdert kalkaanslag effectief. Dagelijks aftrekken van de douchedeur voorkomt opbouw. Voor structurele aanpak is een waterontharder de meest effectieve oplossing." />

        {/* Waarom kalk in douche */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom slaat kalk neer in de douche?</h2>
          <p className="text-gray-600 text-sm mb-4">
            In de douche worden water en stoom gecombineerd. Als de douchedeur, tegels en kraanbeslag nat worden en vervolgens aan de lucht drogen, verdampt het water maar blijft het calcium achter als vast calciumcarbonaat. Dit proces herhaalt zich bij elk douchebeurt.
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Warmer douchewater versnelt de kalkafzetting: bij hogere temperaturen lost meer calcium op en bij afkoeling slaat het juist neer. Op plaatsen waar water lang stilstaat of langzaam droogt &mdash; zoals doucheroosterputjes en silikonen naden &mdash; is de aanslag het hardnekkigst.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-[#003F5C]">
            <p className="font-semibold mb-2">Verschil tussen harde en zachte watergebieden</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="font-medium text-xs mb-1">Hard water (boven 14 dH):</p>
                <p className="text-xs text-gray-600">Zichtbare kalk binnen 2-3 dagen na schoonmaken. Dagelijks aftrekken noodzakelijk.</p>
              </div>
              <div>
                <p className="font-medium text-xs mb-1">Zacht water (onder 8 dH):</p>
                <p className="text-xs text-gray-600">Nauwelijks kalkafzetting. Maandelijks schoonmaken volstaat. Minder zeep nodig.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gezondheidsaspecten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kalk, zeep en huidgezondheid</h2>
          <p className="text-gray-600 text-sm mb-4">
            Kalk in douchewater heeft directe gevolgen voor huid en haar, ook al is kalk zelf niet gevaarlijk:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                titel: 'Kalkzeep op huid',
                tekst: 'Calcium reageert met vetzuren in zeep tot calciumstearaat ("kalkzeep"). Dit spoelt moeilijk af en laat een droge, witte film op de huid achter.',
                icon: '🧴',
              },
              {
                titel: 'Verminderde zeepwerking',
                tekst: 'In hard water heeft u meer zeep, shampoo en conditioner nodig om hetzelfde effect te bereiken. Schattingen lopen op tot 40% meer verbruik.',
                icon: '💆',
              },
              {
                titel: 'Haar: kuticula-schade',
                tekst: 'Calciumionen hechten aan de haarkuticula en trekken die open. Het haar wordt dof, breekbaar en moeilijk te ontwarren na wassen.',
                icon: '💇',
              },
              {
                titel: 'Droge en gevoelige huid',
                tekst: 'De kalkzeepfilm blokkeert de porieen deels en vermindert de afweer van de huid. Mensen met eczeem of psoriasis ervaren meer last in hard-watergebieden.',
                icon: '🩺',
              },
            ].map(p => (
              <div key={p.titel} className="border border-gray-100 rounded-xl p-4 flex gap-3">
                <span className="text-xl shrink-0">{p.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{p.titel}</p>
                  <p className="text-xs text-gray-600">{p.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reinigingsmiddelen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kalk verwijderen: welk middel werkt het beste?</h2>
          <p className="text-gray-600 text-sm mb-4">
            Alle onderstaande middelen lossen kalk chemisch op via een zuur-base reactie. Het verschil zit in de sterkte, geur en geschiktheid voor verschillende oppervlakken.
          </p>
          <div className="space-y-3">
            {reinigingsTips.map(r => (
              <div key={r.middel} className={`border rounded-xl p-4 ${r.kleur}`}>
                <p className="font-semibold text-gray-800 text-sm mb-2">{r.middel}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-gray-600">
                  <div><span className="font-medium text-gray-700">Verdunning: </span>{r.verdunning}</div>
                  <div><span className="font-medium text-gray-700">Inwerktijd: </span>{r.inwerktijd}</div>
                  <div><span className="font-medium text-gray-700">Geschikt: </span>{r.geschikt}</div>
                  <div><span className="font-medium text-gray-700">Let op: </span>{r.niet}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reinigingsfrequentie per hardheid */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe vaak schoonmaken per waterhardheidsniveau?</h2>
          <div className="space-y-2">
            {hardheidFrequentie.map(h => (
              <div key={h.range} className="border border-gray-100 rounded-xl p-3 flex flex-wrap gap-2 items-center justify-between">
                <div>
                  <p className="font-semibold text-sm text-gray-800">{h.range}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{h.advies}</p>
                </div>
                <span className="text-xs bg-[#E0F2FE] text-[#005F8A] rounded-full px-2 py-0.5 whitespace-nowrap">
                  {h.frequentie}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Controleer de waterhardheid van uw gemeente op{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] hover:underline">onze hardheidspagina</Link>.
          </p>
        </section>

        <CTABanner context="osmose" variant="compact" />

        {/* Structurele oplossingen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Structurele oplossingen voor kalk in de douche</h2>
          <p className="text-gray-600 text-sm mb-4">
            Schoonmaken pakt het symptoom aan, maar kalk blijft terugkomen zolang het leidingwater hard is. Structurele oplossingen:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Centrale waterontharder',
                beschrijving: 'Behandelt al het water in de woning via ionenwisseling. Geen kalkafzetting meer in douche, op tegels of in douchekop. Beste bescherming. Vereist installatie in meterkast en periodiek zout bijvullen.',
                aanbevolen: true,
                href: '/waterontharder',
              },
              {
                titel: 'Douchefilter met ionenwisselhars',
                beschrijving: 'Kleine inline-filter direct voor de douchekop. Vermindert kalk in de douche maar heeft beperkte capaciteit (3-6 maanden). Goede tijdelijke of budgetvriendelijke oplossing.',
                aanbevolen: false,
                href: '/kalk-in/filter',
              },
              {
                titel: 'Osmose voor drinkwater, ontharder voor leidingen',
                beschrijving: 'Optimale combinatie: osmosefilter geeft puur drinkwater zonder natrium, centrale ontharder beschermt douche en alle andere leidingen en apparaten.',
                aanbevolen: true,
                href: '/omgekeerde-osmose/voor-thuis',
              },
            ].map(opl => (
              <Link
                key={opl.titel}
                href={opl.href}
                className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">{opl.titel}</p>
                  {opl.aanbevolen && (
                    <span className="shrink-0 text-xs bg-green-100 text-green-800 rounded-full px-2 py-0.5">Aanbevolen</span>
                  )}
                </div>
                <p className="text-xs text-gray-600">{opl.beschrijving}</p>
              </Link>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kalk in de douche</h2>
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

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kalk-in', label: 'Kalk in leidingwater: overzicht' },
              { href: '/waterhardheid', label: 'Waterhardheid in uw gemeente' },
              { href: '/waterontharder', label: 'Waterontharder: alle opties' },
              { href: '/kalk-in/filter', label: 'Kalkfilter vergelijken' },
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
      </div>
    </>
  );
}
