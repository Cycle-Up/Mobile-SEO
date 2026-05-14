import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterhardheid Verlagen: Methoden & Kosten 2026',
  description:
    'Hoe kunt u de waterhardheid verlagen? Vergelijk waterontharder, TAC-filter, omgekeerde osmose en meer. Complete gids met kosten, effectiviteit en advies voor 2026.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterhardheid/verlagen' },
  openGraph: {
    title: 'Waterhardheid Verlagen: Methoden & Kosten 2026',
    description:
      'Vergelijk alle methoden om waterhardheid te verlagen: waterontharder, TAC, osmosefilter en meer. Inclusief kosten en effectiviteitsoverzicht.',
  },
};

const faqItems = [
  {
    question: 'Wat is de beste manier om waterhardheid te verlagen?',
    answer:
      'Voor drinkwater is een omgekeerde osmose filter de meest effectieve methode: het verwijdert 95–99% van calcium en magnesium. Voor de gehele huisinstallatie is een ionenwisselende waterontharder het meest grondig. TAC-systemen zijn een zoutloos alternatief dat kalkafzetting voorkomt zonder water te ontharden.',
  },
  {
    question: 'Heeft een magnetisch waterontharder echt effect?',
    answer:
      'De wetenschappelijke onderbouwing voor magnetische en elektronische waterontharders is zwak. Meerdere onafhankelijke onderzoeken — waaronder van de DVGW en Stiftung Warentest — vonden geen meetbaar effect op kalkaanslag. We raden aan te kiezen voor bewezen methoden zoals ionenuitwisseling, TAC of omgekeerde osmose.',
  },
  {
    question: 'Hoe schadelijk is hard water voor cv-ketel en apparaten?',
    answer:
      'Hard water (>12°dH) veroorzaakt kalkaanslag in warmtewisselaars, verwarmingselementen en pompen. Een kalklaag van slechts 1 mm verhoogt het energieverbruik met 6–8%. De levensduur van een cv-ketel daalt aanzienlijk: in hardwatergebieden ziet men reparaties en vervanging 3–5 jaar eerder dan in zachtwatergebieden.',
  },
  {
    question: 'Hoe verschilt een waterontharder van een osmosefilter?',
    answer:
      'Een waterontharder (ionenuitwisseling) vervangt calcium en magnesium door natrium — het water blijft "zacht" maar bevat meer zout. Geschikt voor de gehele huisinstallatie. Een omgekeerde osmose filter verwijdert nagenoeg alle opgeloste stoffen inclusief natrium, nitraten en zware metalen — ideaal voor drinkwater, maar werkt alleen op het punt van gebruik (bijv. bij de keukenkraan).',
  },
  {
    question: 'Wat kost het om waterhardheid te verlagen?',
    answer:
      'Kosten variëren sterk per methode. Een omgekeerde osmose systeem onder het aanrecht kost €200–€600 inclusief installatie, met jaarlijkse filterkosten van €40–€80. Een ionenwisselende waterontharder kost €800–€2.000 plus installatiekosten en doorlopende zout- en onderhoudkosten (€100–€200 per jaar). TAC-systemen kosten €300–€800 en hebben nauwelijks lopende kosten.',
  },
];

interface Methode {
  naam: string;
  werking: string;
  effectiviteit: string;
  kosten: string;
  zout: string;
  onderhoud: string;
  geschiktVoor: string;
  pros: string[];
  cons: string[];
  kleur: string;
  badge: string;
}

const methoden: Methode[] = [
  {
    naam: 'Waterontharder (ionenuitwisseling)',
    werking:
      'Een ionenwisselende waterontharder vervangt calcium (Ca²⁺) en magnesium (Mg²⁺) ionen door natriumionen (Na⁺) via een harsbed. Het hars wordt periodiek geregenereerd met zout (NaCl). Het resultaat is zacht water door de gehele huisinstallatie.',
    effectiviteit: 'Zeer hoog (90–100%)',
    kosten: '€800–€2.000 aanschaf + €100–€200/jaar zout & onderhoud',
    zout: 'Ja — zoutzak nodig',
    onderhoud: 'Maandelijks zout bijvullen, jaarlijkse servicebeurt',
    geschiktVoor: 'Gehele huisinstallatie, hoge hardheid (>15°dH)',
    pros: [
      'Verwijdert hardheid volledig door het hele huis',
      'Beschermt cv-ketel, wasmachine en boiler',
      'Bewezen effectiviteit over tientallen jaren',
    ],
    cons: [
      'Hoog zoutverbruik (ca. 5–10 kg/week bij gezin van 4)',
      'Voegt natrium toe aan drinkwater',
      'Hoge aanschaf- en installatiekosten',
      'Niet ideaal als enige drinkwateroplossing',
    ],
    kleur: 'border-blue-200 bg-blue-50',
    badge: 'Meest effectief voor het huis',
  },
  {
    naam: 'TAC / Zoutloze ontharding',
    werking:
      'Template Assisted Crystallization (TAC) zet calcium en magnesium om van een oplosbare naar een kristallijne vorm. Het kalk blijft in het water maar hecht niet meer aan oppervlakken. Er worden geen ionen verwijderd en er wordt geen zout gebruikt.',
    effectiviteit: 'Hoog voor kalkpreventie (80–95% minder aanslag)',
    kosten: '€300–€800 aanschaf, minimale lopende kosten',
    zout: 'Nee — zoutloos systeem',
    onderhoud: 'Filterpatroon elke 1–3 jaar vervangen',
    geschiktVoor: 'Kalkpreventie zonder natriumtoevoeging, huurders',
    pros: [
      'Geen zout, geen chemicaliën',
      'Lage onderhoudkosten',
      'Water blijft mineraalrijk',
      'Geschikt voor gebieden met milieurestricties op zout lozen',
    ],
    cons: [
      'Verwijdert geen hardheid — vermindert alleen aanslag',
      'Minder effectief bij zeer hard water (>20°dH)',
      'Geen effect op smaak of drinkwaterkwaliteit',
    ],
    kleur: 'border-green-200 bg-green-50',
    badge: 'Zoutloos alternatief',
  },
  {
    naam: 'Omgekeerde osmose (RO-filter)',
    werking:
      'Een omgekeerde osmose filter perst water door een semidoorlatend membraan met poriën van 0,0001 micrometer. Calcium, magnesium, nitraten, zware metalen, bacteriën en virussen worden tegengehouden. Alleen watermoleculen passeren. Het gefilterde water is uiterst puur.',
    effectiviteit: 'Zeer hoog voor drinkwater (95–99% kalkverwijdering)',
    kosten: '€200–€600 aanschaf, €40–€80/jaar filters',
    zout: 'Nee',
    onderhoud: 'Filterpatronen elk half jaar tot jaar wisselen',
    geschiktVoor: 'Drinkwater, koken, koffie, babyvoeding',
    pros: [
      'Verwijdert vrijwel alle onzuiverheden inclusief kalk',
      'Beste smaak van alle methoden',
      'Geen zout of chemicaliën',
      'Beschermt koffiezetapparaat, waterkoker en stoomoven',
    ],
    cons: [
      'Werkt alleen op het punt van gebruik (keukenkraan)',
      'Beschermt niet de rest van de installatie',
      'Afvalwater: ca. 2–4 liter voor elke liter puur water',
      'Filtert ook gezonde mineralen eruit',
    ],
    kleur: 'border-[#005F8A] bg-[#E0F2FE]',
    badge: 'Beste voor drinkwater',
  },
  {
    naam: 'Citroenzuur & azijn (nareiniging)',
    werking:
      'Citroenzuur en azijn lossen kalkaanslag op door een zure reactie met calciumcarbonaat. Dit is een nabehandeling — geen preventieve maatregel. Geschikt voor het verwijderen van bestaande kalk uit apparaten, kranen en douches.',
    effectiviteit: 'Effectief voor reiniging, geen preventie',
    kosten: '€1–€5 per behandeling',
    zout: 'Nee',
    onderhoud: 'Regelmatig herhalen nodig',
    geschiktVoor: 'Waterkoker, koffieapparaat, kranen ontkalk',
    pros: [
      'Zeer goedkoop en direct beschikbaar',
      'Verwijdert bestaande kalkaanslag effectief',
      'Milieuvriendelijk en biologisch afbreekbaar',
    ],
    cons: [
      'Geen preventie — kalk blijft terugkomen',
      'Tijdrovend: regelmatig ontkalken nodig',
      'Niet geschikt voor cv-ketel of verborgen leidingen',
    ],
    kleur: 'border-yellow-200 bg-yellow-50',
    badge: 'Ontkalken, geen preventie',
  },
  {
    naam: 'Magnetisch / elektronisch systeem',
    werking:
      'Magnetische en elektronische waterontharders beweren de structuur van kalk te beïnvloeden via een magnetisch of elektrisch veld, zodat kalk minder hecht. De werking is gebaseerd op het idee dat de kristalstructuur van calciet verandert.',
    effectiviteit: 'Beperkt — weinig wetenschappelijk bewijs',
    kosten: '€30–€200',
    zout: 'Nee',
    onderhoud: 'Minimaal',
    geschiktVoor: 'Mogelijk lichte preventie in zachte watergebieden',
    pros: [
      'Eenvoudig te installeren, geen loodgieterswerk',
      'Lage aanschafkosten',
      'Geen verbruiksmateriaal nodig',
    ],
    cons: [
      'Geen consistente wetenschappelijke onderbouwing',
      'DVGW en Stiftung Warentest vonden geen meetbaar effect',
      'Niet aan te raden als primaire oplossing',
    ],
    kleur: 'border-gray-200 bg-gray-50',
    badge: 'Beperkt bewijs',
  },
];

export default function WaterhardheidVerlagenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterhardheid', url: 'https://waterfilterplatform.nl/waterhardheid' },
          { name: 'Verlagen', url: 'https://waterfilterplatform.nl/waterhardheid/verlagen' },
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
            <span>Verlagen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid Verlagen: Methoden &amp; Kosten 2026
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Hard water veroorzaakt kalkaanslag, slijt apparaten sneller en maakt schoonmaken lastiger. Op deze pagina vergelijken we alle bewezen methoden om waterhardheid te verlagen — van waterontharder tot omgekeerde osmose — inclusief kosten, effectiviteit en een eerlijk advies.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="inline-flex items-center gap-2 bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#004A6D] transition-colors text-sm"
            >
              Bekijk osmose systemen →
            </Link>
            <Link
              href="/waterhardheid"
              className="inline-flex items-center gap-2 bg-white text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl border border-[#005F8A] hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Controleer uw gemeente
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-14">

        {/* Why lower water hardness */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom zou u waterhardheid willen verlagen?</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Waterhardheid is op zichzelf niet gevaarlijk voor de gezondheid. Calcium en magnesium zijn zelfs nuttige mineralen. Maar hoe harder het water, hoe meer problemen het in en rond het huis veroorzaakt. Bewoners in hardwatergebieden als Noord-Brabant, Limburg en Oost-Gelderland zijn hier dagelijks mee geconfronteerd.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: '🔩',
                titel: 'Kalkafzetting in leidingen en apparaten',
                tekst:
                  'Kalkaanslag in CV-ketels, boilers en warmtewisselaars verlaagt het rendement en veroorzaakt vroegtijdige slijtage. Een kalklaag van 1 mm verhoogt het energieverbruik al met 6–8%. In hardwatergebieden moeten CV-ketels 3–5 jaar eerder vervangen worden.',
              },
              {
                icon: '🧼',
                titel: 'Hoger gebruik van zeep en wasmiddel',
                tekst:
                  'Hard water reageert met zeep en vormt kalkzeep — een witte aanslag. Hierdoor schuimt zeep minder goed. Huishoudens in hardwatergebieden gebruiken gemiddeld 40–60% meer wasmiddel en afwasmiddel dan in zachtwatergebieden.',
              },
              {
                icon: '🥛',
                titel: 'Smaak en kwaliteit van drinkwater',
                tekst:
                  'Bij hoge hardheid (>15°dH) heeft leidingwater een licht krijtachtige, zware smaak. Thee en koffie smaken anders. Koken met hard water geeft een witte afzetting in pannen. Zacht gefilterd water geeft een neutrale, frisse smaak.',
              },
            ].map(item => (
              <div key={item.titel} className="flex flex-col gap-2 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-semibold text-gray-900">{item.titel}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.tekst}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-gray-700 leading-relaxed">
            Uit onderzoek van TNO blijkt dat huishoudens in hardwatergebieden jaarlijks gemiddeld €200–€400 meer kwijt zijn aan energieverbruik, schoonmaakmiddelen en apparaatreparaties dan huishoudens met zacht water. Voor gezinnen met een harde wateraansluiting (boven 15°dH) kan een investering in ontkalking of filtratie zichzelf in 2–4 jaar terugverdienen.
          </p>
        </section>

        {/* Comparison table */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Methoden vergeleken in één oogopslag</h2>
          <p className="text-gray-600 mb-5">
            De tabel hieronder geeft een snel overzicht van alle vijf methoden op de belangrijkste criteria. Hieronder vindt u een uitgebreide bespreking van elke methode.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#005F8A] text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl min-w-[160px]">Methode</th>
                  <th className="text-center px-4 py-3 font-semibold min-w-[120px]">Effectiviteit</th>
                  <th className="text-center px-4 py-3 font-semibold min-w-[140px]">Investering</th>
                  <th className="text-center px-4 py-3 font-semibold min-w-[80px]">Zout nodig</th>
                  <th className="text-center px-4 py-3 font-semibold rounded-tr-2xl min-w-[120px]">Onderhoud</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    naam: 'Waterontharder',
                    effectiviteit: '★★★★★',
                    effectTekst: 'Zeer hoog',
                    investering: '€800–€2.000',
                    zout: 'Ja',
                    onderhoud: 'Maandelijks',
                    rowKleur: 'bg-white',
                  },
                  {
                    naam: 'TAC / Zoutloos',
                    effectiviteit: '★★★★☆',
                    effectTekst: 'Hoog (preventie)',
                    investering: '€300–€800',
                    zout: 'Nee',
                    onderhoud: '1–3 jaar',
                    rowKleur: 'bg-gray-50',
                  },
                  {
                    naam: 'Omgekeerde osmose',
                    effectiviteit: '★★★★★',
                    effectTekst: 'Zeer hoog (drink)',
                    investering: '€200–€600',
                    zout: 'Nee',
                    onderhoud: 'Halfjaarlijks',
                    rowKleur: 'bg-[#E0F2FE]/30',
                  },
                  {
                    naam: 'Citroenzuur/azijn',
                    effectiviteit: '★★☆☆☆',
                    effectTekst: 'Alleen reiniging',
                    investering: '€1–€5 p.keer',
                    zout: 'Nee',
                    onderhoud: 'Regelmatig',
                    rowKleur: 'bg-gray-50',
                  },
                  {
                    naam: 'Magnetisch',
                    effectiviteit: '★☆☆☆☆',
                    effectTekst: 'Onbewezen',
                    investering: '€30–€200',
                    zout: 'Nee',
                    onderhoud: 'Minimaal',
                    rowKleur: 'bg-white',
                  },
                ].map(row => (
                  <tr key={row.naam} className={row.rowKleur}>
                    <td className="px-4 py-3 font-medium text-gray-800">{row.naam}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="text-amber-500 text-xs">{row.effectiviteit}</span>
                      <br />
                      <span className="text-xs text-gray-600">{row.effectTekst}</span>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.investering}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={row.zout === 'Ja' ? 'text-orange-600 font-medium' : 'text-green-600 font-medium'}>
                        {row.zout}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-gray-600">{row.onderhoud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed method descriptions */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Methoden in detail</h2>
          <div className="space-y-8">
            {methoden.map((methode, index) => (
              <div key={methode.naam} className={`border rounded-2xl p-6 ${methode.kleur}`}>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-[#003F5C]">
                    {index + 1}. {methode.naam}
                  </h3>
                  <span className="shrink-0 text-xs font-semibold bg-white/70 text-[#005F8A] border border-[#005F8A]/30 px-2.5 py-1 rounded-full">
                    {methode.badge}
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">{methode.werking}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-sm">
                  {[
                    { label: 'Effectiviteit', value: methode.effectiviteit },
                    { label: 'Kosten', value: methode.kosten },
                    { label: 'Zout nodig', value: methode.zout },
                    { label: 'Onderhoud', value: methode.onderhoud },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white/60 rounded-lg p-2.5">
                      <p className="text-xs text-gray-500 font-medium mb-0.5">{stat.label}</p>
                      <p className="text-gray-900 font-semibold text-xs leading-tight">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Voordelen</p>
                    <ul className="space-y-1">
                      {methode.pros.map(pro => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-green-600 font-bold mt-0.5 shrink-0">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Nadelen</p>
                    <ul className="space-y-1">
                      {methode.cons.map(con => (
                        <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-red-500 font-bold mt-0.5 shrink-0">✗</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  <span className="font-semibold">Geschikt voor: </span>{methode.geschiktVoor}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Drinking water focus */}
        <section className="bg-[#E0F2FE] rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Voor drinkwater: omgekeerde osmose is de beste keuze
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Als u specifiek het drinkwater wilt verbeteren — minder kalk, betere smaak, geen stoffen als nitraat of medicijnresten — dan is een <strong>omgekeerde osmose filter</strong> de meest effectieve oplossing. Het systeem wordt onder het aanrecht geplaatst en levert puur water direct uit een aparte kraan.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titel: 'Wat osmose verwijdert',
                items: [
                  '95–99% calcium en magnesium (kalk)',
                  'Nitraten en nitriet',
                  'Zware metalen (lood, arseen, chroom)',
                  'Medicijnresten en hormonen',
                  'Bacteriën, virussen en chloor',
                ],
                kleur: 'bg-white',
                icon: '✓',
                iconKleur: 'text-green-600',
              },
              {
                titel: 'Ideaal gebruik',
                items: [
                  'Drinkwater en koken',
                  'Babyvoeding bereiden',
                  'Koffie, thee en ijsblokjes',
                  'Stoomoven en waterkoker',
                  'Aquarium en planten water',
                ],
                kleur: 'bg-white',
                icon: '→',
                iconKleur: 'text-[#005F8A]',
              },
            ].map(col => (
              <div key={col.titel} className={`${col.kleur} rounded-xl p-4`}>
                <p className="font-bold text-gray-900 mb-3">{col.titel}</p>
                <ul className="space-y-1.5">
                  {col.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className={`font-bold shrink-0 mt-0.5 ${col.iconKleur}`}>{col.icon}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een <strong>4-in-1 kraan met osmose</strong> combineert een omgekeerde osmose filter met een kokendwaterkraan, koud water, warm water en bruisend water — alles in één design kraan. Inclusief NSF-gecertificeerde membranen en eenvoudige filterwissel zonder gereedschap.
          </p>
          <Link
            href="/omgekeerde-osmose/kopen"
            className="inline-flex items-center gap-2 bg-[#005F8A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#004A6D] transition-colors"
          >
            Bekijk osmose systemen →
          </Link>
        </section>

        {/* Which method for which situation */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke methode past bij uw situatie?</h2>
          <p className="text-gray-600 mb-5">
            De juiste keuze hangt af van uw doel (drinkwater of de hele installatie), de hardheid van uw water en uw budget. Hieronder vindt u een praktisch keuzeschema.
          </p>
          <div className="space-y-4">
            {[
              {
                situatie: 'Ik wil alleen beter drinkwater (lekker, kalkloos)',
                advies: 'Omgekeerde osmose filter',
                reden: 'Goedkoopste en eenvoudigste oplossing, instellen op aansluiting keukenkraan. Verwijdert kalk, nitraat en alle overige verontreinigingen.',
                link: '/omgekeerde-osmose/kopen',
                linkTekst: 'Bekijk osmosefilters',
                kleur: 'border-[#005F8A] bg-[#E0F2FE]/30',
              },
              {
                situatie: 'Ik wil kalk in cv-ketel en wasmachine voorkomen',
                advies: 'Waterontharder (ionenuitwisseling)',
                reden: 'Enige methode die de hardheid door de gehele installatie verlaagt. Effectief voor CV, boiler, wasmachine en douche.',
                link: '/waterontharder',
                linkTekst: 'Over waterontharders',
                kleur: 'border-blue-200 bg-blue-50/50',
              },
              {
                situatie: 'Ik wil kalk voorkomen maar geen zout gebruiken',
                advies: 'TAC / zoutloze ontharding',
                reden: 'Voorkomt kalkaanslag zonder natrium toe te voegen. Duurzaam alternatief voor wie zout vermijdt of huurder is.',
                link: '/waterontharder',
                linkTekst: 'Meer over TAC',
                kleur: 'border-green-200 bg-green-50/50',
              },
              {
                situatie: 'Ik wil bestaande kalk verwijderen van apparaten',
                advies: 'Citroenzuur of ontkalker',
                reden: 'Goedkoop en direct beschikbaar. Geen preventie, maar effectief voor bestaande aanslag op waterkokers, koffiezetapparaten en kranen.',
                link: '/kennisbank/waterhardheid-verlagen',
                linkTekst: 'Hoe ontkalk je apparaten?',
                kleur: 'border-yellow-200 bg-yellow-50/50',
              },
            ].map(item => (
              <div key={item.situatie} className={`border rounded-2xl p-5 ${item.kleur}`}>
                <p className="text-sm text-gray-600 mb-1">
                  <em>&ldquo;{item.situatie}&rdquo;</em>
                </p>
                <p className="font-bold text-gray-900 mb-1">
                  Advies: <span className="text-[#005F8A]">{item.advies}</span>
                </p>
                <p className="text-sm text-gray-700 mb-3">{item.reden}</p>
                <Link href={item.link} className="text-sm text-[#005F8A] font-semibold hover:underline">
                  {item.linkTekst} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Installation tips */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Praktische tips voor installatie en gebruik</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-700">
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Omgekeerde osmose installeren</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#005F8A] font-bold shrink-0">1.</span>
                  <span>Sluit het systeem aan op de koude waterleiding onder het aanrecht (1/4&quot; aansluitingen).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#005F8A] font-bold shrink-0">2.</span>
                  <span>Boor een gat voor de aparte kraan in het aanrecht of de gootsteen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#005F8A] font-bold shrink-0">3.</span>
                  <span>Verbind de afvoerslang met de vaatwasserafvoer of een standaardafvoer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#005F8A] font-bold shrink-0">4.</span>
                  <span>Laat het systeem 24 uur vullen voor eerste gebruik. Spoel de eerste tank weg.</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Waterontharder installeren</h3>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#005F8A] font-bold shrink-0">1.</span>
                  <span>Kies de installatielocatie vlak na de hoofdkraan, voor alle aftakkingen behalve buiten.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#005F8A] font-bold shrink-0">2.</span>
                  <span>Houd de koudwaterkraan in de keuken op onbehandeld water (of plaats een extra aftakking).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#005F8A] font-bold shrink-0">3.</span>
                  <span>Stel de regeneratiefrequentie in op basis van waterverbruik en hardheid.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#005F8A] font-bold shrink-0">4.</span>
                  <span>Zorg voor een regelmatige servicebeurt bij hoge waterdruk of ijzergehalte.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-5 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900">
            <strong>Tip:</strong> Controleer eerst de waterhardheid van uw gemeente via onze{' '}
            <Link href="/waterhardheid" className="font-semibold underline">
              gemeentepagina
            </Link>
            . Bij waterhardheid onder 10°dH is een volledige waterontharder zelden nodig; een osmosefilter voor drinkwater is dan voldoende.
          </div>
        </section>

        {/* Long-term costs */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Totale kosten over 5 jaar vergeleken</h2>
          <p className="text-gray-600 mb-4">
            De aanschafprijs is maar een deel van het verhaal. Hieronder vindt u een realistisch overzicht van de totale kosten inclusief verbruiksmateriaal en onderhoud over een periode van vijf jaar.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-2xl">Methode</th>
                  <th className="text-center px-4 py-3 font-semibold">Aanschaf</th>
                  <th className="text-center px-4 py-3 font-semibold">Jaarlijkse kosten</th>
                  <th className="text-center px-4 py-3 font-semibold rounded-tr-2xl">Totaal 5 jaar (schatting)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { methode: 'Waterontharder', aanschaf: '€1.200', jaar: '€150', totaal: '€1.950', highlight: false },
                  { methode: 'TAC / Zoutloos', aanschaf: '€550', jaar: '€40', totaal: '€750', highlight: false },
                  { methode: 'Omgekeerde osmose', aanschaf: '€400', jaar: '€60', totaal: '€700', highlight: true },
                  { methode: 'Citroenzuur (ontkalken)', aanschaf: '€0', jaar: '€30', totaal: '€150', highlight: false },
                  { methode: 'Magnetisch systeem', aanschaf: '€100', jaar: '€0', totaal: '€100', highlight: false },
                ].map((row, i) => (
                  <tr
                    key={row.methode}
                    className={row.highlight ? 'bg-[#E0F2FE] font-medium' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 text-gray-800">
                      {row.methode}
                      {row.highlight && (
                        <span className="ml-2 text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Aanbevolen</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.aanschaf}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.jaar}</td>
                    <td className="px-4 py-3 text-center font-bold text-[#003F5C]">{row.totaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">Schattingen op basis van gemiddeld gezinsverbruik (4 personen, 200 liter/dag). Prijzen inclusief btw, exclusief installatie door loodgieter.</p>
        </section>

        <CTABanner context="waterhardheid" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterhardheid verlagen</h2>
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
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente opzoeken' },
              { href: '/waterontharder', label: 'Waterontharder: uitleg en vergelijking' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter kopen — 4-in-1 kraan met osmose' },
              { href: '/kennisbank/waterhardheid-verlagen', label: 'Kennisbank: waterhardheid verlagen' },
              { href: '/waterhardheid/kaart', label: 'Waterhardheid per provincie — kaart' },
              { href: '/kennisbank/hardwatergebied-nederland', label: 'Hardwatergebieden in Nederland' },
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
