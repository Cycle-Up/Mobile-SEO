import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterontharder Kopen 2026: Complete Gids',
  description:
    'Waterontharder kopen? Vergelijk ionenwisselaar, zoutloze TAC en kali-zout systemen. Leer op welke criteria je let: capaciteit, regeneratie, installatiekosten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/kopen' },
  openGraph: {
    title: 'Waterontharder Kopen 2026: Complete Gids',
    description:
      'Alles over waterontharder kopen: soorten, merken (Kinetico, BWT, Harvey, Hague), kosten, capaciteit en wanneer osmose een betere keuze is.',
    url: 'https://waterfilterplatform.nl/waterontharder/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is de beste waterontharder om te kopen in 2026?',
    answer:
      'De "beste" waterontharder hangt af van je situatie. Een ionenwisselaar met vraaggestuurde regeneratie (zoals van Kinetico of BWT) is de meest effectieve keuze voor gezinnen in harde watergebieden. Woon je in een appartement of ben je huurder, dan is een omgekeerde osmose systeem onder het aanrecht een praktischer alternatief: goedkoper in aanschaf, geen installatie op de hoofdleiding vereist en ook effectief tegen chloor en andere verontreinigingen.',
  },
  {
    question: 'Hoeveel kost een waterontharder inclusief installatie?',
    answer:
      'Een kwalitatieve ionenwisselaar kost €500–1.500 aanschaf. Installatie door een erkend loodgieter kost €150–350. Inclusief installatie betaal je dus €650–1.850 eenmalig. Daarna komen jaarlijkse kosten voor zout (€10–60), water en onderhoud (€50–100), totaal circa €85–240 per jaar. Een zoutloze TAC-systeem is al verkrijgbaar vanaf €200–800 maar verwijdert kalk niet echt.',
  },
  {
    question: 'Welke capaciteit heeft een waterontharder nodig voor een gezin van 4 personen?',
    answer:
      'Een gezin van 4 personen verbruikt gemiddeld 400–600 liter water per dag. Een ontharder met een harsvolume van 15–25 liter is voor de meeste gezinnen in hard-watergebieden (15–22 °dH) voldoende. Kies bij voorkeur een vraaggestuurd systeem dat automatisch regenereert wanneer het harsbed verzadigd is, in plaats van tijdgestuurd.',
  },
  {
    question: 'Kan ik een waterontharder zelf installeren?',
    answer:
      'Technisch gezien is dat voor enkele modellen mogelijk, maar de meeste professionele ionenwisselaars worden op de hoofdwaterleiding aangesloten. Dit vereist loodgieterswerk: het afkoppelen van de bestaande watertoevoer, het plaatsen van bypass-kranen en het aansluiten van de afvoer voor het regeneratiespoelwater. Zoutloze TAC-systemen zijn soms eenvoudiger te installeren op een bestaande leiding.',
  },
  {
    question: 'Wanneer is omgekeerde osmose beter dan een waterontharder?',
    answer:
      'Omgekeerde osmose is beter als je (1) in een appartement of huurwoning woont, (2) een kleiner huishouden hebt (1–2 personen), (3) naast kalk ook chloor, nitraten, PFAS of microplastics wilt verwijderen, of (4) geen ruimte hebt voor een ontharder in de meterkast of garage. Osmose filtert uitsluitend het drinkwater aan de keukenkraan en is goedkoper in aanschaf (€150–899). Een waterontharder onthardt het volledige huishoudelijk water inclusief douche- en waswater.',
  },
];

const soorten = [
  {
    naam: 'Ionenwisselaar (zout)',
    subtitel: 'Klassieke ontharding',
    prijs: '€ 500 – 1.500',
    effectiviteit: '95–99% kalkverwijdering',
    jaarlijkseKosten: '€ 85 – 240 / jaar',
    regeneratie: 'Zout + water (pekel)',
    capaciteit: '15–30 L hars voor gezin van 4',
    installatie: 'Loodgieter vereist (hoofdleiding)',
    voordelen: [
      'Volledige huisonthardering (douche, waswater, leidingen)',
      'Bewezen meest effectieve techniek',
      'Beschermt cv-ketel, wasmachine en vaatwasser',
      'Vraaggestuurde modellen besparen 30–50% zout',
    ],
    nadelen: [
      'Verhoogd natriumgehalte in drinkwater',
      'Zout- en waterverbruik (milieu-impact)',
      'Hoge aanschaf- en installatiekosten',
      'Niet geschikt voor huurwoningen zonder toestemming',
    ],
    beste_voor: 'Eigenwoningbezitters in hard-watergebied (>15 °dH)',
    highlight: true,
  },
  {
    naam: 'Zoutloze ontharder (TAC)',
    subtitel: 'Template Assisted Crystallization',
    prijs: '€ 200 – 800',
    effectiviteit: 'Voorkomt aanslag (verwijdert kalk niet)',
    jaarlijkseKosten: '€ 0 – 30 / jaar',
    regeneratie: 'Geen — onderhoudsloos',
    capaciteit: 'Geen hars; doorstroommodel',
    installatie: 'Eenvoudiger; soms zelf te plaatsen',
    voordelen: [
      'Geen zoutgebruik of afvalwater',
      'Geen natriumtoevoeging aan drinkwater',
      'Weinig onderhoud',
      'Milieuvriendelijker dan klassieke ontharder',
    ],
    nadelen: [
      'Verwijdert kalk niet — zet het alleen om in niet-hechtende kristallen',
      'Minder effectief bij zeer hard water (>20 °dH)',
      'Bestaande kalkaanslag wordt niet opgelost',
      'Geen bescherming voor het volledige leidingnet',
    ],
    beste_voor: 'Lichte kalklast; milieubewuste gebruikers; huurders',
    highlight: false,
  },
  {
    naam: 'Kali-zout / kaliumchloride ontharder',
    subtitel: 'Variant op klassieke ionenwisselaar',
    prijs: '€ 500 – 1.500 + hogere zoutkosten',
    effectiviteit: '95–99% kalkverwijdering',
    jaarlijkseKosten: '€ 150 – 350 / jaar (duurder zout)',
    regeneratie: 'Kaliumchloride in plaats van natriumchloride',
    capaciteit: 'Identiek aan ionenwisselaar',
    installatie: 'Loodgieter vereist (hoofdleiding)',
    voordelen: [
      'Voegt kalium toe in plaats van natrium (gezonder profiel)',
      'Geschikt voor mensen op natriumarm dieet',
      'Zelfde effectiviteit als klassieke ionenwisselaar',
    ],
    nadelen: [
      'Kaliumzout is 2–3x duurder dan natriumzout',
      'Beperktere beschikbaarheid van zout',
      'Geen milieuvoordeel ten opzichte van natriumsysteem',
    ],
    beste_voor: 'Mensen met hoge bloeddruk of hartfalen; natriumarm dieet',
    highlight: false,
  },
];

const merken = [
  {
    naam: 'Kinetico',
    land: '🇺🇸 USA / NL distributie',
    kenmerk: 'Non-elektrisch, twin-tank, vraaggestuurd',
    prijsrange: '€ 900 – 2.000',
    sterk: 'Zuinig zoutgebruik; no power required; betrouwbaar',
    aandacht: 'Hogere aanschafprijs; service via dealer',
  },
  {
    naam: 'BWT',
    land: '🇦🇹 Oostenrijk',
    kenmerk: 'Breed assortiment; magnesiumtechnologie',
    prijsrange: '€ 600 – 1.800',
    sterk: 'Magnesium-ionenwisseling (gezonder drinkwater); groot servicenetwerk',
    aandacht: 'Magnesiumpellets zijn duurder dan standaard zout',
  },
  {
    naam: 'Harvey',
    land: '🇬🇧 Groot-Brittannië',
    kenmerk: 'Twin-tank, compact design',
    prijsrange: '€ 700 – 1.500',
    sterk: 'Compact formaat; continu zacht water; solide reputatie UK',
    aandacht: 'Minder service-punten in NL dan BWT of Kinetico',
  },
  {
    naam: 'Hague',
    land: '🇺🇸 USA / internationale distributie',
    kenmerk: 'Whole-home water treatment',
    prijsrange: '€ 1.200 – 3.000',
    sterk: 'Combinatie ontharder + filter in één systeem; premium kwaliteit',
    aandacht: 'Hogere prijs; beperkte NL distributie',
  },
];

const kostentabel = [
  { post: 'Aanschaf ontharder (enkelvoudig)', eenmalig: '€ 500 – 1.500', perjaar: '—' },
  { post: 'Installatie loodgieter', eenmalig: '€ 150 – 350', perjaar: '—' },
  { post: 'Zout (50–150 kg/jaar)', eenmalig: '—', perjaar: '€ 10 – 60' },
  { post: 'Regeneratiewater (spoeling)', eenmalig: '—', perjaar: '€ 5 – 20' },
  { post: 'Jaarlijks onderhoud / servicebeurt', eenmalig: '—', perjaar: '€ 50 – 100' },
  { post: 'Harsvervanging (eens per 8–12 jr)', eenmalig: '—', perjaar: '€ 20 – 60' },
  { post: 'Totaal jaarlijkse bedrijfskosten', eenmalig: '—', perjaar: '€ 85 – 240' },
];

export default function WaterontharderKopenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Kopen', url: 'https://waterfilterplatform.nl/waterontharder/kopen' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder Kopen 2026: Complete Gids
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Overweeg je een <strong>waterontharder te kopen</strong>? Er zijn drie hoofdtypen —
            ionenwisselaar met zout, zoutloze TAC en kali-zout variant — elk met eigen kosten, prestaties
            en beperkingen. In deze gids lees je alles wat je moet weten vóórdat je een keuze maakt:
            van capaciteitkeuze en regeneratiegebruik tot total cost of ownership en merkenvergelijking.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#soorten"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Soorten vergelijken →
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterhardheid in mijn gemeente
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#soorten" className="hover:underline">Soorten waterontharders</a></li>
            <li><a href="#koopkriteria" className="hover:underline">Koopkriteria</a></li>
            <li><a href="#capaciteit" className="hover:underline">Capaciteit kiezen</a></li>
            <li><a href="#tco" className="hover:underline">Total cost of ownership</a></li>
            <li><a href="#merken" className="hover:underline">Merkenoverz icht</a></li>
            <li><a href="#wanneer-osmose" className="hover:underline">Wanneer osmose beter is</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Soorten */}
        <section id="soorten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Soorten waterontharders: ionenwisselaar, TAC en kali-zout
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Niet elke waterontharder werkt hetzelfde. Op de Nederlandse markt zijn drie relevante
            technieken verkrijgbaar. Hieronder lichten we elk type toe, zodat je een weloverwogen keuze
            kunt maken bij het waterontharder kopen.
          </p>
          <div className="space-y-5">
            {soorten.map(s => (
              <div
                key={s.naam}
                className={`rounded-2xl border p-5 ${s.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{s.naam}</h3>
                    <p className="text-sm text-gray-500">{s.subtitel}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A]">{s.prijs}</p>
                    {s.highlight && (
                      <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Meest effectief</span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-4">
                  <div className="bg-white/60 rounded-lg p-2">
                    <p className="text-gray-400 text-xs mb-0.5">Effectiviteit</p>
                    <p className="font-medium text-gray-800">{s.effectiviteit}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-2">
                    <p className="text-gray-400 text-xs mb-0.5">Jaarlijkse kosten</p>
                    <p className="font-medium text-gray-800">{s.jaarlijkseKosten}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-2 col-span-2 sm:col-span-1">
                    <p className="text-gray-400 text-xs mb-0.5">Regeneratie</p>
                    <p className="font-medium text-gray-800">{s.regeneratie}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-3">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Voordelen</p>
                    <ul className="space-y-0.5">
                      {s.voordelen.map(v => (
                        <li key={v} className="text-green-700 text-xs">✓ {v}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Nadelen</p>
                    <ul className="space-y-0.5">
                      {s.nadelen.map(n => (
                        <li key={n} className="text-gray-500 text-xs">− {n}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-600 border-t border-gray-200 pt-2 mt-2">
                  <span className="font-semibold">Beste voor:</span> {s.beste_voor}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Koopkriteria */}
        <section id="koopkriteria">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Koopkriteria: waar let je op bij een waterontharder?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Een waterontharder kopen is een investering voor de lange termijn. Let bij de aanschaf op de
            volgende vier kernpunten.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Capaciteit: liters per dag en harsvolume',
                inhoud: `De capaciteit van een waterontharder wordt bepaald door het harsvolume (in liters) en de
                  waterhardheid in jouw regio. Een eenvoudige vuistregel: een gezin van 4 personen in een
                  gebied met 18 °dH heeft een ontharder nodig met minimaal 15–20 liter hars. Bij zeer
                  hard water (>20 °dH) of een groot huishouden stijgt dat naar 20–30 liter. Controleer
                  altijd het technisch datasheet: dit vermeldt de maximale hardheidsgraad en het
                  waterverbruik vóór regeneratie. Een undersized ontharder regenereert te frequent,
                  verbruikt meer zout en slijt sneller.`,
              },
              {
                nr: '2',
                titel: 'Regeneratie: water- en zoutgebruik',
                inhoud: `De regeneratiecyclus is het moment waarop de ontharder zichzelf "herlaadt" met verse
                  natriumionen via een spoeling met pekelwater. Modern vraaggestuurde systemen meten het
                  werkelijke waterverbruik en starten regeneratie uitsluitend wanneer het harsbed bijna
                  verzadigd is. Dit is 30–50% zuiniger dan de oudere tijdgestuurde systemen die elke
                  nacht regenereren — ook als er nauwelijks water gebruikt is. Let bij aankoop op:
                  (a) is het systeem vraaggestuurd of tijdgestuurd? (b) hoeveel zout verbruikt het per
                  regeneratiecyclus (typisch 0,5–2 kg)? (c) hoeveel spoelwater gaat er per cyclus naar
                  de afvoer (50–200 liter)?`,
              },
              {
                nr: '3',
                titel: 'Installatiecomplexiteit',
                inhoud: `Een klassieke ionenwisselaar wordt op de hoofdwaterleiding aangesloten, vóór de
                  verdere leidingverdeling in huis. Dit vereist loodgieterswerk, inclusief bypass-kranen
                  waarmee je de ontharder kunt omzeilen voor onderhoud. Reken op 2–4 uur arbeid
                  (€150–350). De ontharder zelf heeft ook een afvoer nodig voor het regeneratiespoelwater
                  — in de meeste situaties voldoet de cv-ketelafvoer of een dichtbijgelegen sifon.
                  Zoutloze TAC-systemen zijn eenvoudiger: zij worden in-line op de leiding geplaatst
                  zonder afvoer, maar hebben ook geen zouttank nodig.`,
              },
              {
                nr: '4',
                titel: 'Kosten: aanschaf en total cost of ownership',
                inhoud: `Kijk niet alleen naar de aanschafprijs, maar naar de totale kosten over 10 jaar.
                  Een goedkopere ontharder van €500 met hogere jaarlijkse zout- en onderhoudskosten
                  kan duurder uitvallen dan een kwalitatief systeem van €1.200 met vraaggestuurde
                  regeneratie. Bereken de TCO: aanschaf + installatie + (jaarlijkse zout/water/onderhoud
                  × 10 jaar) + eventuele harsvervanging. Zie de kostentabel verderop op deze pagina.`,
              },
            ].map(k => (
              <div key={k.nr} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {k.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{k.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{k.inhoud}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capaciteit kiezen */}
        <section id="capaciteit">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Capaciteit kiezen: hoeveel liter per dag?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De juiste capaciteit hangt af van drie factoren: het dagelijks waterverbruik van het
            huishouden, de waterhardheid en de gewenste regeneratiefrequentie. Hieronder een praktisch
            overzicht:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Huishouden</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Waterverbruik/dag</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanbevolen hars</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Regen. frequentie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { huishouden: '1–2 personen', verbruik: '150–300 L', hars: '8–12 L', freq: '1× per 10–14 dagen' },
                  { huishouden: '3–4 personen', verbruik: '350–600 L', hars: '15–20 L', freq: '1× per 7–10 dagen' },
                  { huishouden: '5+ personen', verbruik: '600–900 L', hars: '25–35 L', freq: '1× per 5–7 dagen' },
                  { huishouden: 'Groot gezin / hard water >20°dH', verbruik: '600–900 L', hars: '30–40 L (twin-tank)', freq: 'Continu zacht water' },
                ].map(r => (
                  <tr key={r.huishouden} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium">{r.huishouden}</td>
                    <td className="py-2.5 px-3 text-right">{r.verbruik}</td>
                    <td className="py-2.5 px-3 text-right">{r.hars}</td>
                    <td className="py-2.5 px-3 text-right">{r.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Tip:</strong> Kies liever iets te groot dan te klein.
            Een ontharder die te frequent regenereert verbruikt meer zout en water, en slijt sneller.
            Bij twijfel: kies het grotere model of kies een twin-tank systeem voor continue zachte
            waterlevering ook tijdens regeneratiecycli.
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Weet je niet hoe hard het water is bij jou thuis? Controleer dit in onze{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>{' '}
            database. De hardheid heeft directe invloed op de benodigde harsgrootte.
          </p>
        </section>

        {/* TCO */}
        <section id="tco">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Total cost of ownership (TCO): wat kost een waterontharder echt?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Veel mensen kijken alleen naar de aanschafprijs, maar de werkelijke kosten van een
            waterontharder spreiden zich over vele jaren. Een lagere aanschafprijs gaat vaak gepaard
            met hogere jaarlijkse kosten. Hieronder de TCO breakdown voor een klassieke ionenwisselaar
            bij een gezin van 2–4 personen in een hard-watergebied (18–22 °dH):
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[460px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Eenmalig</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Per jaar</th>
                </tr>
              </thead>
              <tbody>
                {kostentabel.map(r => (
                  <tr
                    key={r.post}
                    className={
                      r.post === 'Totaal jaarlijkse bedrijfskosten'
                        ? 'bg-[#E0F2FE] font-semibold'
                        : 'border-b border-gray-100'
                    }
                  >
                    <td className="py-2.5 px-3">{r.post}</td>
                    <td className="py-2.5 px-3 text-right">{r.eenmalig}</td>
                    <td className="py-2.5 px-3 text-right">{r.perjaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Indicatief voor een vraaggestuurde enkelvoudige ontharder. Tijdgestuurde modellen verbruiken
            30–50% meer zout. Kali-zout varianten hebben 2–3× hogere zoutkosten.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">TCO over 10 jaar (midden scenario)</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Aanschaf + installatie: € 1.000</li>
                <li>Jaarlijkse kosten (€ 160 × 10 jr): € 1.600</li>
                <li>Harsvervanging (1×): € 250</li>
                <li className="font-bold text-[#005F8A] border-t border-gray-100 pt-1 mt-1">Totaal 10 jaar: ± € 2.850</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2 text-sm">Vergelijking: osmose systeem (10 jaar)</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Aanschaf (4-in-1 kraan): € 799</li>
                <li>Filterkosten (€ 100 × 10 jr): € 1.000</li>
                <li>Vervanging membraan (2×): € 200</li>
                <li className="font-bold text-[#005F8A] border-t border-gray-100 pt-1 mt-1">Totaal 10 jaar: ± € 1.999</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Let op: bovenstaande vergelijking toont dat een osmose systeem voor het drinkwater op de
            lange termijn goedkoper kan zijn — maar een waterontharder onthardt ook het douche-,
            was- en apparatenwater. De keuze hangt af van je prioriteiten.
          </p>
        </section>

        {/* Merken */}
        <section id="merken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Merken overzicht: Kinetico, BWT, Harvey en Hague
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Op de Nederlandse markt zijn diverse merken actief. Hieronder een objectief overzicht van
            de meest voorkomende merken. Dit overzicht is informatief en beoogt geen specifieke
            aanbeveling — vergelijk altijd meerdere offertes van erkende installateurs.
          </p>
          <div className="space-y-4">
            {merken.map(m => (
              <div key={m.naam} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{m.naam}</h3>
                    <p className="text-xs text-gray-400">{m.land}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#005F8A]">{m.prijsrange}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2 italic">{m.kenmerk}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-400 text-xs">Sterk punt: </span>
                    <span className="text-gray-700 text-xs">{m.sterk}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs">Let op: </span>
                    <span className="text-gray-700 text-xs">{m.aandacht}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mt-4 text-sm text-gray-700">
            <strong className="text-amber-900">Kooptip:</strong> Vraag minimaal twee of drie offertes
            van erkende waterbehandelingsbedrijven in jouw regio. De installatieprijzen en service
            overeenkomsten kunnen sterk variëren, zelfs bij hetzelfde merk of model.
          </div>
        </section>

        {/* Wanneer osmose beter is */}
        <section id="wanneer-osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is omgekeerde osmose een betere keuze dan een waterontharder?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterontharder is krachtig, maar niet voor iedereen de juiste oplossing. In de
            onderstaande situaties is een <strong>omgekeerde osmose systeem</strong> een praktischer
            en often goedkoper alternatief.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                situatie: 'Appartement of huurwoning',
                uitleg:
                  'Een ionenwisselaar installeren op de hoofdleiding vereist toestemming van de verhuurder en doorgaans professioneel loodgieterswerk. Een osmose systeem wordt eenvoudig onder het aanrecht gemonteerd op de koudwatertoevoer — geen toestemming vereist en volledig verwijderbaar bij verhuizing.',
              },
              {
                situatie: '1 of 2 persoons huishouden',
                uitleg:
                  'Voor kleine huishoudens zijn de kosten van een volledige ionenwisselaar (€650–1.850 inclusief installatie) moeilijk te rechtvaardigen. Een osmose filter voor €150–899 geeft je schoon, kalkarm drinkwater voor één fractie van de prijs. De waterontharder onthardt ook douche- en waswater, maar voor kleine huishoudens zijn die kosten doorgaans niet noemenswaardig.',
              },
              {
                situatie: 'Je wilt ook chloor, pesticiden en PFAS verwijderen',
                uitleg:
                  'Een waterontharder verwijdert uitsluitend kalk (calcium en magnesium). Chloor, nitraten, pesticiden, PFAS, medicijnresten en microplastics blijven ongemoeid. Omgekeerde osmose verwijdert 95–99% van alle opgeloste stoffen — een veel grondigere aanpak voor schoon drinkwater.',
              },
              {
                situatie: 'Je volgt een natriumarm dieet',
                uitleg:
                  'Een klassieke ionenwisselaar voegt natrium toe aan het water (ca. 10–20 mg Na⁺ per °dH verwijderd). In hard-watergebieden kan dit het natriumgehalte met 100–200 mg/L verhogen. Voor mensen met hoge bloeddruk, hartfalen of nierproblemen is osmose-gefilterd water de betere keuze: het natriumgehalte is verwaarloosbaar laag.',
              },
            ].map(s => (
              <div key={s.situatie} className="flex gap-3 items-start border border-gray-100 rounded-xl p-4">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{s.situatie}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-0.5">{s.uitleg}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#E0F2FE] to-white border border-[#005F8A]/20 rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">
              Kleinere huishoudens of huurders: osmose is vaak slimmer
            </p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Een 4-in-1 osmose kraan combineert omgekeerde osmose filtratie met kokend, koud, warm
              en bruisend water — alles uit één keukenkraan. Dit is de meest complete drinkwateroplossing
              voor appartementen en kleine huishoudens. Bekijk het aanbod op onze{' '}
              <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
                osmose filter kopen pagina
              </Link>
              .
            </p>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose systemen bekijken →
            </Link>
          </div>
        </section>

        <CTABanner context="waterhardheid" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterontharder', label: 'Waterontharder: werking, kosten en alternatieven' },
              { href: '/kennisbank/waterontharder', label: 'Kennisbank: waterontharder' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen — welk systeem past bij jou?' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente in Nederland' },
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

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterontharder kopen
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
