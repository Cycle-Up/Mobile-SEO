import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterhardheid per regio Nederland: complete kaart 2026',
  description:
    'Waterhardheid per provincie in Nederland: kaart 2026. Hardste regio\'s (Limburg 25+ °dH, Zuid-Holland 20+ °dH), zachtste regio\'s (Drenthe, Groningen 5–8 °dH) en links naar gemeenten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterhardheid/regio' },
  openGraph: {
    title: 'Waterhardheid per regio Nederland: complete kaart 2026',
    description:
      'Complete overzicht van waterhardheid per provincie in Nederland — van zeer zacht Drenthe tot zeer hard Limburg, met gemeentedoorlinks.',
    url: 'https://waterfilterplatform.nl/waterhardheid/regio',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welke provincie heeft het hardste water in Nederland?',
    answer:
      'Limburg heeft gemiddeld het hardste leidingwater van Nederland, met waarden van 20–28 °dH in de meeste gemeenten. Zuid-Holland en Zeeland volgen met waarden van 16–24 °dH. Het harde water in het zuiden is een gevolg van kalkhoudende bodemlagen en grondwateronttrekking in kalkrijke gebieden.',
  },
  {
    question: 'Welke provincie heeft het zachtste water in Nederland?',
    answer:
      'Drenthe en Groningen hebben het zachtste leidingwater van Nederland, met waarden van 3–8 °dH. Delen van Friesland en Overijssel (Veluwe-gebied) zitten ook in het zachte segment. Dit zachte water is afkomstig uit zandige bodems en veengebieden die weinig kalkhoudende mineralen bevatten.',
  },
  {
    question: 'Wat betekent waterhardheid in graden Deutsche Härte (°dH)?',
    answer:
      'De hardheid van water wordt uitgedrukt in graden Deutsche Härte (°dH) of in millimol per liter (mmol/l). 1 °dH staat voor 10 mg calciumoxide (CaO) per liter water. Zacht water ligt onder 7 °dH, matig hard van 7–14 °dH, hard van 14–21 °dH en zeer hard boven 21 °dH.',
  },
  {
    question: 'Heeft hard water invloed op mijn gezondheid?',
    answer:
      'Hard water is niet schadelijk voor de gezondheid — calcium en magnesium zijn essentiële mineralen. Het geeft wel meer kalkaanslag op apparaten, in de waterkoker, op kranen en in de douche. Sommige mensen vinden de smaak van hard water minder aangenaam. Een waterfilter zoals omgekeerde osmose verwijdert kalk effectief.',
  },
  {
    question: 'Kan ik de waterhardheid in mijn gemeente opzoeken?',
    answer:
      'Ja, op WaterfilterPlatform.nl kun je de actuele waterhardheid per gemeente opzoeken. Ga naar de pagina waterhardheid en zoek op jouw gemeente. Waterbedrijven in Nederland zijn verplicht de waterkwaliteitsgegevens jaarlijks te publiceren.',
  },
  {
    question: 'Wat is de beste oplossing voor hard water in huis?',
    answer:
      'De meest effectieve oplossing voor drinkwater is omgekeerde osmose: dit verwijdert 95–99% van de kalk. Voor het hele huis (douche, wasmachine, vaatwasser) is een waterontharder op ionenwisselaarbasis de meest volledige oplossing. Voor specifiek de keuken volstaat een under-sink osmosefilter.',
  },
  {
    question: 'Hoe meet ik zelf de waterhardheid thuis?',
    answer:
      'Je kunt waterhardheid meten met een TDS-meter (meet totale opgeloste stoffen), testdruppels of een dipstick testset. TDS-meters zijn verkrijgbaar voor €10–20 en geven een indicatieve meting. Voor exacte hardheidswaarden kun je ook een watertest van je waterbedrijf aanvragen of een professionele laboratoriumtest laten uitvoeren.',
  },
];

const provincieData = [
  {
    provincie: 'Limburg',
    hardheid: '20–28 °dH',
    categorie: 'Zeer hard',
    kleur: 'red',
    voorbeeldGemeenten: ['Maastricht', 'Venlo', 'Roermond', 'Sittard'],
    toelichting:
      'Kalkrijke ondergrond (mergelgebied) zorgt voor het hardste water van Nederland. Waterontharder of RO-filter sterk aanbevolen.',
  },
  {
    provincie: 'Zuid-Holland',
    hardheid: '16–24 °dH',
    categorie: 'Hard tot zeer hard',
    kleur: 'orange',
    voorbeeldGemeenten: ['Rotterdam', 'Den Haag', 'Leiden', 'Dordrecht'],
    toelichting:
      'Polderwater met veel kalk. Variatie tussen steden is groot — check je gemeente apart.',
  },
  {
    provincie: 'Zeeland',
    hardheid: '15–22 °dH',
    categorie: 'Hard tot zeer hard',
    kleur: 'orange',
    voorbeeldGemeenten: ['Middelburg', 'Vlissingen', 'Goes', 'Terneuzen'],
    toelichting:
      'Deels grondwater uit kalkrijke lagen. Kustgemeenten kunnen hoger uitvallen.',
  },
  {
    provincie: 'Noord-Brabant',
    hardheid: '10–20 °dH',
    categorie: 'Matig hard tot hard',
    kleur: 'yellow',
    voorbeeldGemeenten: ['Eindhoven', 'Tilburg', 'Breda', '\'s-Hertogenbosch'],
    toelichting:
      'Oost-Brabant (Eindhoven) harder dan West-Brabant. Variatie per waterwingebied aanzienlijk.',
  },
  {
    provincie: 'Noord-Holland',
    hardheid: '10–18 °dH',
    categorie: 'Matig hard tot hard',
    kleur: 'yellow',
    voorbeeldGemeenten: ['Amsterdam', 'Haarlem', 'Alkmaar', 'Hoorn'],
    toelichting:
      'Amsterdam is relatief zacht voor een grote stad (ca. 10 °dH). Kustgemeenten harder.',
  },
  {
    provincie: 'Utrecht',
    hardheid: '8–16 °dH',
    categorie: 'Matig hard',
    kleur: 'yellow',
    voorbeeldGemeenten: ['Utrecht', 'Amersfoort', 'Nieuwegein', 'Veenendaal'],
    toelichting: 'Gevoed door Rijn-infiltratie en lokaal grondwater. Gemiddelde hardheid.',
  },
  {
    provincie: 'Gelderland',
    hardheid: '5–15 °dH',
    categorie: 'Zacht tot matig hard',
    kleur: 'green',
    voorbeeldGemeenten: ['Arnhem', 'Nijmegen', 'Apeldoorn', 'Ede'],
    toelichting:
      'Grote variatie: Veluwe-flank zacht, riviergebied harder. Check gemeente specifiek.',
  },
  {
    provincie: 'Overijssel',
    hardheid: '5–14 °dH',
    categorie: 'Zacht tot matig hard',
    kleur: 'green',
    voorbeeldGemeenten: ['Zwolle', 'Enschede', 'Almelo', 'Deventer'],
    toelichting:
      'Zandgronden in het westen zacht, rivierklei in het oosten harder.',
  },
  {
    provincie: 'Flevoland',
    hardheid: '8–14 °dH',
    categorie: 'Matig hard',
    kleur: 'yellow',
    voorbeeldGemeenten: ['Almere', 'Lelystad', 'Emmeloord'],
    toelichting:
      'Ingepolderd land met gemengd grond- en oppervlaktewater. Gemiddelde hardheidsniveaus.',
  },
  {
    provincie: 'Friesland',
    hardheid: '4–9 °dH',
    categorie: 'Zacht',
    kleur: 'green',
    voorbeeldGemeenten: ['Leeuwarden', 'Heerenveen', 'Sneek', 'Drachten'],
    toelichting:
      'Grotendeels zacht water uit veengebieden. Weinig kalkaanslag, filteronderhoud minder urgent.',
  },
  {
    provincie: 'Groningen',
    hardheid: '3–8 °dH',
    categorie: 'Zeer zacht tot zacht',
    kleur: 'blue',
    voorbeeldGemeenten: ['Groningen', 'Emmen', 'Veendam', 'Appingedam'],
    toelichting:
      'Een van de zachtste waterprovincies van Nederland. Zandgronden en veengebieden.',
  },
  {
    provincie: 'Drenthe',
    hardheid: '3–7 °dH',
    categorie: 'Zeer zacht',
    kleur: 'blue',
    voorbeeldGemeenten: ['Assen', 'Emmen', 'Hoogeveen', 'Meppel'],
    toelichting:
      'Het zachtste leidingwater van Nederland. Nauwelijks kalkaanslag. RO-filter minder noodzakelijk tenzij gewenst voor zuivering.',
  },
];

const kleurKlassen: Record<string, { bg: string; text: string; badge: string }> = {
  red: {
    bg: 'bg-red-50',
    text: 'text-red-900',
    badge: 'bg-red-100 text-red-800 border-red-200',
  },
  orange: {
    bg: 'bg-orange-50',
    text: 'text-orange-900',
    badge: 'bg-orange-100 text-orange-800 border-orange-200',
  },
  yellow: {
    bg: 'bg-yellow-50',
    text: 'text-yellow-900',
    badge: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  },
  green: {
    bg: 'bg-green-50',
    text: 'text-green-900',
    badge: 'bg-green-100 text-green-800 border-green-200',
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-900',
    badge: 'bg-blue-100 text-blue-800 border-blue-200',
  },
};

export default function WaterhardheidRegioPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterhardheid per regio Nederland: complete kaart 2026',
          description:
            'Overzicht van waterhardheid per provincie in Nederland: van zeer zacht Drenthe en Groningen (3–8 °dH) tot zeer hard Limburg en Zuid-Holland (20+ °dH), met toelichting en links naar gemeenten.',
          datePublished: '2025-12-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterhardheid/regio',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterhardheid', url: 'https://waterfilterplatform.nl/waterhardheid' },
          { name: 'Regio', url: 'https://waterfilterplatform.nl/waterhardheid/regio' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/waterhardheid" className="hover:text-[#005F8A]">
              Waterhardheid
            </Link>
            <span className="mx-2">/</span>
            <span>Regio</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid per regio Nederland: complete kaart 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            De waterhardheid in Nederland varieert enorm: van bijna zacht regenwater in Drenthe
            (3–7 °dH) tot krijthard water in Limburg (20–28 °dH). De provincie waar je woont
            bepaalt grotendeels hoeveel kalk je water bevat — en dus hoe snel je apparaten
            kalk­aanslag krijgen. Op deze pagina vind je een compleet overzicht per provincie, met
            links naar gemeente-specifieke pagina&apos;s.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterhardheid"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Gemeente opzoeken →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Filter voor hard water kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li>
              <a href="#legenda" className="hover:underline">
                Legenda hardheidscategorieën
              </a>
            </li>
            <li>
              <a href="#provincies" className="hover:underline">
                Alle provincies
              </a>
            </li>
            <li>
              <a href="#hardste" className="hover:underline">
                Hardste regio&apos;s
              </a>
            </li>
            <li>
              <a href="#zachtste" className="hover:underline">
                Zachtste regio&apos;s
              </a>
            </li>
            <li>
              <a href="#gevolgen" className="hover:underline">
                Gevolgen voor je huis
              </a>
            </li>
            <li>
              <a href="#gemeenten" className="hover:underline">
                Gemeente opzoeken
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                Veelgestelde vragen
              </a>
            </li>
          </ol>
        </section>

        {/* Legenda */}
        <section id="legenda">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Legenda: waterhardheid categorieën
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: 'Zeer zacht', range: '< 5 °dH', kleur: 'bg-blue-100 border-blue-200 text-blue-900' },
              { label: 'Zacht', range: '5–8 °dH', kleur: 'bg-green-100 border-green-200 text-green-900' },
              { label: 'Matig hard', range: '8–14 °dH', kleur: 'bg-yellow-100 border-yellow-200 text-yellow-900' },
              { label: 'Hard', range: '14–21 °dH', kleur: 'bg-orange-100 border-orange-200 text-orange-900' },
              { label: 'Zeer hard', range: '> 21 °dH', kleur: 'bg-red-100 border-red-200 text-red-900' },
            ].map(cat => (
              <div key={cat.label} className={`border rounded-xl p-3 ${cat.kleur}`}>
                <p className="font-bold text-sm">{cat.label}</p>
                <p className="text-xs mt-0.5">{cat.range}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Bron: waterbedrijfsdata 2025–2026. °dH = graden Deutsche Härte. 1 °dH ≈ 17,8 mg/l
            CaCO₃ ≈ 0,178 mmol/l.
          </p>
        </section>

        {/* Alle provincies */}
        <section id="provincies">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Waterhardheid per provincie — alle 12 provincies
          </h2>
          <div className="space-y-4">
            {provincieData.map(p => {
              const stijl = kleurKlassen[p.kleur];
              return (
                <div
                  key={p.provincie}
                  className={`border rounded-2xl p-5 ${stijl.bg} border-opacity-60`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className={`font-bold text-lg ${stijl.text}`}>{p.provincie}</h3>
                      <p className={`font-semibold text-sm ${stijl.text} opacity-75`}>
                        {p.hardheid}
                      </p>
                    </div>
                    <span
                      className={`border rounded-full px-3 py-1 text-xs font-semibold shrink-0 ${stijl.badge}`}
                    >
                      {p.categorie}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3 leading-relaxed">{p.toelichting}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.voorbeeldGemeenten.map(gemeente => (
                      <Link
                        key={gemeente}
                        href={`/waterhardheid/${gemeente.toLowerCase().replace(/['\s]/g, '-').replace(/-+/g, '-')}`}
                        className="text-xs text-[#005F8A] bg-white border border-[#005F8A] border-opacity-30 px-2.5 py-1 rounded-full hover:bg-[#E0F2FE] transition-colors"
                      >
                        {gemeente}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Hardste regio's */}
        <section id="hardste">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hardste regio&apos;s: Limburg en Zuid-Holland
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Limburg en Zuid-Holland staan al jaren bekend als de provincies met het hardste
            leidingwater van Nederland. Dit heeft directe gevolgen voor je dagelijks leven:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 border border-red-100 rounded-xl p-4">
              <p className="font-bold text-red-900 mb-2">Limburg (20–28 °dH)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Maastricht: ca. 22–25 °dH</li>
                <li>• Venlo: ca. 20–24 °dH</li>
                <li>• Roermond: ca. 21–26 °dH</li>
                <li>• Kalklaag (mergel): natuurlijke oorzaak</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
              <p className="font-bold text-orange-900 mb-2">Zuid-Holland (16–24 °dH)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Rotterdam: ca. 18–22 °dH</li>
                <li>• Den Haag: ca. 17–21 °dH</li>
                <li>• Leiden: ca. 16–20 °dH</li>
                <li>• Polderwater: kalkrijke bodem</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In deze regio&apos;s is kalkafzetting een serieus probleem: waterkokers zitten na
            weken vol kalk, vaatwassers en wasmachines gaan eerder stuk en douchemuren zijn
            permanent bedekt met wittige kalkaanslag. Een omgekeerde osmose filter of
            waterontharder is hier bijna een noodzaak. Bekijk onze pagina{' '}
            <Link
              href="/waterfilter/voor-hard-water"
              className="text-[#005F8A] underline hover:no-underline"
            >
              waterfilter voor hard water
            </Link>{' '}
            voor de beste oplossingen.
          </p>
        </section>

        {/* Zachtste regio's */}
        <section id="zachtste">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Zachtste regio&apos;s: Drenthe en Groningen
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Aan de andere kant van het spectrum staan Drenthe en Groningen. Het water hier is
            geoogst uit zandgronden en veengebieden die weinig calcium bevatten.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="font-bold text-blue-900 mb-2">Drenthe (3–7 °dH)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Assen: ca. 4–6 °dH</li>
                <li>• Emmen: ca. 3–5 °dH</li>
                <li>• Hoogeveen: ca. 4–7 °dH</li>
                <li>• Zandondergrond zonder kalk</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <p className="font-bold text-blue-900 mb-2">Groningen (3–8 °dH)</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Groningen stad: ca. 5–8 °dH</li>
                <li>• Veendam: ca. 3–5 °dH</li>
                <li>• Appingedam: ca. 4–7 °dH</li>
                <li>• Veen- en kleigebieden</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In zachte watergebieden is kalk nauwelijks een probleem. Een waterfilter voor zuivering
            van chloor, PFAS of andere stoffen kan alsnog zinvol zijn — maar een waterontharder is
            hier in de meeste gevallen niet nodig.
          </p>
        </section>

        {/* Gevolgen voor je huis */}
        <section id="gevolgen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat betekent waterhardheid voor je huis?
          </h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Toepassing</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Zacht (3–8 °dH)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Matig (8–14 °dH)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Hard (&gt;14 °dH)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    app: 'Waterkoker',
                    zacht: 'Nauwelijks kalk',
                    matig: 'Ontkalken 2× jaar',
                    hard: 'Ontkalken maandelijks',
                  },
                  {
                    app: 'Wasmachine',
                    zacht: 'Geen extra kalkpoeder',
                    matig: 'Bescheiden dosering',
                    hard: 'Hogere doseringen',
                  },
                  {
                    app: 'Vaatwasser',
                    zacht: 'Geen extra zout nodig',
                    matig: 'Standaard zoutdosering',
                    hard: 'Verhoogde zoutdosering',
                  },
                  {
                    app: 'Douche/badkamer',
                    zacht: 'Vrijwel geen kalkvlekken',
                    matig: 'Wekelijks schoonmaken',
                    hard: 'Dagelijks afspoelen aanbevolen',
                  },
                  {
                    app: 'Espressomachine',
                    zacht: 'Minimaal onderhoud',
                    matig: 'Ontkalken 3–4× jaar',
                    hard: 'Osmose water aanbevolen',
                  },
                ].map(r => (
                  <tr key={r.app} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.app}</td>
                    <td className="py-2.5 px-3 text-center text-green-700 text-xs">{r.zacht}</td>
                    <td className="py-2.5 px-3 text-center text-yellow-700 text-xs">{r.matig}</td>
                    <td className="py-2.5 px-3 text-center text-red-700 text-xs font-medium">
                      {r.hard}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Gemeente opzoeken */}
        <section id="gemeenten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterhardheid per gemeente opzoeken
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Wil je de exacte waterhardheid van jouw gemeente weten? Op WaterfilterPlatform.nl hebben
            we gegevens van honderden Nederlandse gemeenten verzameld. Klik hieronder op de
            provinciale links of gebruik de zoekfunctie.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {provincieData.map(p => (
              <Link
                key={p.provincie}
                href={`/waterhardheid/${p.provincie.toLowerCase().replace(/\s/g, '-')}`}
                className="group border border-gray-100 rounded-xl p-3 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors text-sm">
                  {p.provincie}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{p.hardheid}</p>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/waterhardheid"
              className="inline-flex items-center gap-2 text-[#005F8A] font-semibold text-sm hover:underline"
            >
              Alle gemeenten zoeken →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Verdere links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'De beste oplossing voor hard water: RO verwijdert 95–99% van de kalk.',
              },
              {
                href: '/waterontharder',
                title: 'Waterontharder',
                desc: 'Voor heel-huis ontharding: alles over ionenwisselaars en waterontkalkers.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Exacte hardheidswaarden voor jouw gemeente opzoeken.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose gids',
                desc: 'Hoe werkt RO, wat verwijdert het en wat zijn de kosten?',
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterhardheid per regio
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
