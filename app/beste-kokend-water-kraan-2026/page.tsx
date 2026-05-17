import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { TrustBar } from '@/components/TrustBar';
import { QuickAnswer } from '@/components/QuickAnswer';

export function generateMetadata(): Metadata {
  return {
    title: 'Beste Kokend Water Kraan 2026: Top 5',
    description:
      'Welke kokend water kraan is de beste in 2026? Wij vergeleken de top 5 op temperatuur, doorstroom, ingebouwd filter, prijs en energieverbruik.',
    alternates: { canonical: 'https://waterfilterplatform.nl/beste-kokend-water-kraan-2026' },
    openGraph: {
      title: 'Beste Kokend Water Kraan 2026: Top 5 eerlijk vergeleken',
      description:
        'Top 5 kokend water kranen 2026 vergeleken op temperatuur, doorstroom, geïntegreerd filter, prijs en energiegebruik. De #1 pick heeft ook een ingebouwd osmose.',
      url: 'https://waterfilterplatform.nl/beste-kokend-water-kraan-2026',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Welke kokend water kraan is de beste in 2026?',
    answer:
      'De beste kokend water kraan in 2026 is de 4-in-1 kraan met geïntegreerde omgekeerde osmose. Deze combineert kokend water (100°C), koud gefilterd water, warm water en bruisend water uit één kraanpunt — terwijl het osmose filter tegelijkertijd kalk, chloor, nitraten en microplastics verwijdert. Voor wie geen filter nodig heeft, is een 3-in-1 kraan of Quooker-stijl boiler een goede tweede keuze.',
  },
  {
    question: 'Wat is het verschil tussen een 3-in-1 en 4-in-1 kokend water kraan?',
    answer:
      'Een 3-in-1 kraan levert kokend, koud en warm water uit één kraan. Een 4-in-1 kraan voegt een vierde functie toe: gefilterd water of bruisend water. Bij een 4-in-1 kraan met osmose is het vierde element een volledig omgekeerde osmose filtersysteem dat het water zuivert vóór het de kraan verlaat. Dat betekent dat je niet alleen kokend water hebt, maar ook de hoogst mogelijke waterkwaliteit.',
  },
  {
    question: 'Heeft een kokend water kraan een filter nodig?',
    answer:
      'Dat hangt af van je waterkwaliteit en persoonlijke voorkeur. In Nederland is leidingwater veilig om te drinken, maar in harde watergebieden (15+ °dH) zorgt kalk voor ketelsteen, smaakproblemen en extra onderhoud. Een ingebouwd filter — vooral omgekeerde osmose — voorkomt ketelsteen in de boiler, verbetert de smaak en verwijdert ongewenste stoffen. Bij een ongefilterde kokend water kraan kun je een apart kalkonthardingssysteem overwegen.',
  },
  {
    question: 'Hoeveel energie gebruikt een kokend water kraan?',
    answer:
      "Een kokend water kraan met boiler verbruikt continu standby-energie om het water op temperatuur te houden. Dat is doorgaans 5–15 Watt continu, of 45–130 kWh per jaar. Ter vergelijking: een waterkoker die 4× per dag wordt gebruikt verbruikt circa 100–150 kWh per jaar. Moderne boilers met goede isolatie verbruiken aan de lage kant. Schakel de boiler 's nachts uit met de bijgeleverde timer om energie te besparen.",
  },
  {
    question: 'Kan ik een kokend water kraan zelf installeren?',
    answer:
      'Ja, de meeste kokend water kranen zijn ontworpen voor doe-het-zelf installatie. De boiler wordt onder het aanrecht geplaatst en aangesloten op de koudwaterleiding. Je hebt een standaard kraaninboring nodig (35–40 mm) en een stopcontact (WCD) in de kast. Een 4-in-1 kraan met osmose wordt geleverd met een uitgebreide Nederlandstalige installatiehandleiding en de meeste installaties zijn in 2–3 uur klaar. Installeer je ook een osmose systeem, reken dan op een aanboorkraan voor de afvoer.',
  },
];

const top5Kranen = [
  {
    rang: 1,
    naam: '4-in-1 kraan met osmose filter',
    voorbeeld: 'Geïntegreerde 4-in-1 osmosekraan',
    temperatuur: '100°C kokend',
    doorstroom: '4–6 L/min gefilterd',
    filterGeintegreerd: 'Ja — omgekeerde osmose (5-stadia)',
    prijsRange: '€ 699 – 899',
    energieVerbruik: '≈ 7–10 W standby',
    highlight: true,
    pros: [
      'Kokend, koud, warm én bruisend water uit één kraanpunt',
      'Ingebouwde omgekeerde osmose: 95–99% zuiverheid',
      'Geen aparte waterkoker of bruisend water abonnement',
      'Voorkomt ketelsteen in boiler en kraan',
      '5 jaar garantie — langste in het segment',
    ],
    cons: [
      'Hogere aanschafprijs dan ongefilterde kokend water kranen',
      'Vereist elektra (WCD) naast waterkraan',
      'Installatie 2–3 uur — iets meer dan een eenvoudige 3-in-1 kraan',
    ],
    oordeel:
      'Een 4-in-1 kraan met osmosefilter is de meest complete kokend water kraan in 2026. De combinatie van osmose-gefilterd kokend, koud, warm en bruisend water maakt het uniek. De aanschafprijs is hoger, maar op 3–5 jaar zijn de totale kosten concurrerend: geen waterkoker-energie, geen flessenwater, geen onthardingssysteem voor de ketel.',
  },
  {
    rang: 2,
    naam: '3-in-1 kokend water kraan (basic)',
    voorbeeld: 'Quooker Flex / Grohe Red stijl',
    temperatuur: '100°C kokend',
    doorstroom: '5–7 L/min',
    filterGeintegreerd: 'Nee (optioneel)',
    prijsRange: '€ 350 – 700',
    energieVerbruik: '≈ 10–15 W standby',
    highlight: false,
    pros: [
      'Bewezen concept, brede beschikbaarheid',
      'Hogere doorstroom dan 4-in-1 systemen',
      'Compatibel met losse filteropties achteraf',
    ],
    cons: [
      'Geen ingebouwde filtratie — kalk en chloor blijven in het water',
      'Standby vermogen aan de hogere kant',
      'Geen bruisend water (tenzij premium versie met meerprijs)',
    ],
    oordeel:
      'Een degelijke 3-in-1 kraan is geschikt voor wie kokend water wil zonder gefilterde kwaliteit als prioriteit. In zachte-watergebieden (onder 10 °dH) is ketelsteen minder een probleem. Combineer met een apart inline filter als je de smaak wil verbeteren.',
  },
  {
    rang: 3,
    naam: 'Quooker-stijl boilerkraan (premium)',
    voorbeeld: 'Quooker Fusion, BIBO Bar',
    temperatuur: '100°C kokend + 4°C koud',
    doorstroom: '6–8 L/min',
    filterGeintegreerd: 'Optioneel (extra kosten)',
    prijsRange: '€ 800 – 1.400',
    energieVerbruik: '≈ 5–10 W standby (vacuümisolatie)',
    highlight: false,
    pros: [
      'Hoogste bouwkwaliteit en afwerking',
      'Vacuümisolatie geeft laagste standby-energie in het premium-segment',
      'Uitgebreid servicenetwerk in Nederland',
    ],
    cons: [
      'Hoogste aanschafprijs in de vergelijking',
      'Filter is een dure abonnementsoptie — niet standaard inbegrepen',
      'Losse kraanmodule + boiler vereist twee installatiepunten',
    ],
    oordeel:
      'De Quooker Fusion en vergelijkbare premium boilerkranen zijn de keuze voor wie kwaliteit en designafwerking het zwaarst laat wegen. De standby-energie is door vacuümisolatie laag. Op prijs-kwaliteitsverhouding verliest dit segment van de 4-in-1 met osmose, maar op premium uitstraling wint het.',
  },
  {
    rang: 4,
    naam: 'Kokend water kraan met koolstoffilter',
    voorbeeld: 'Grohe Red Mono, InSinkErator',
    temperatuur: '98–100°C',
    doorstroom: '4–6 L/min',
    filterGeintegreerd: 'Ja — actief koolstof',
    prijsRange: '€ 400 – 700',
    energieVerbruik: '≈ 8–12 W standby',
    highlight: false,
    pros: [
      'Filter verwijdert chloor en verbetert smaak',
      'Mooie designkranen met compacte boiler',
      'Breed aanbod van stijlen en afwerkingen',
    ],
    cons: [
      'Koolstoffilter verwijdert geen kalk, nitraten of microplastics',
      'Filterkwaliteit aanzienlijk lager dan osmose',
      'Filter om de 6–12 maanden wisselen: extra kosten',
    ],
    oordeel:
      'Een kokend water kraan met koolstoffilter is een middenweg: beter smakend water dan zonder filter, maar de zuiverheid haalt osmose niet. Goed voor gebieden met zacht water waar smaak de voornaamste klacht is. In harde watergebieden is ketelsteen nog steeds een probleem.',
  },
  {
    rang: 5,
    naam: 'Tafelmodel kokend water dispenser',
    voorbeeld: 'Borg & Overstrom, Zip HydroTap',
    temperatuur: '98–100°C kokend',
    doorstroom: '3–5 L/min',
    filterGeintegreerd: 'Ja — koolstof of gecombineerd',
    prijsRange: '€ 200 – 500',
    energieVerbruik: '≈ 40–60 W (grotere boiler)',
    highlight: false,
    pros: [
      'Geen installatie vereist — plug-and-play',
      'Geschikt voor keukens zonder mogelijkheid tot kraaninstallatie',
      'Filter ingebouwd',
    ],
    cons: [
      'Hogere energiekosten vanwege grotere, minder geïsoleerde boiler',
      'Neemt aanrechtruimte in',
      'Minder esthetisch dan ingebouwde kraanoplossing',
    ],
    oordeel:
      'Een tafelmodel dispenser is de meest flexibele optie voor wie geen vaste installatie wil of kan uitvoeren. De hogere energiekosten maken het op termijn minder zuinig dan een geïnstalleerde boilerkraan. Geschikt als tijdelijke of huur-oplossing.',
  },
];

const vergelijkingsTabel = [
  {
    kenmerk: 'Temperatuur',
    pureaqua: '100°C kokend',
    basic3in1: '100°C kokend',
    quooker: '100°C kokend',
    koolstof: '98–100°C',
    tafel: '98–100°C',
  },
  {
    kenmerk: 'Doorstroom',
    pureaqua: '4–6 L/min',
    basic3in1: '5–7 L/min',
    quooker: '6–8 L/min',
    koolstof: '4–6 L/min',
    tafel: '3–5 L/min',
  },
  {
    kenmerk: 'Filter geïntegreerd',
    pureaqua: 'Ja (osmose)',
    basic3in1: 'Nee',
    quooker: 'Optioneel',
    koolstof: 'Ja (koolstof)',
    tafel: 'Ja (koolstof)',
  },
  {
    kenmerk: 'Prijsrange',
    pureaqua: '€ 699–899',
    basic3in1: '€ 350–700',
    quooker: '€ 800–1.400',
    koolstof: '€ 400–700',
    tafel: '€ 200–500',
  },
  {
    kenmerk: 'Energieverbruik',
    pureaqua: '≈ 7–10 W',
    basic3in1: '≈ 10–15 W',
    quooker: '≈ 5–10 W',
    koolstof: '≈ 8–12 W',
    tafel: '≈ 40–60 W',
  },
  {
    kenmerk: 'Bruisend water',
    pureaqua: 'Ja',
    basic3in1: 'Nee (basis)',
    quooker: 'Premium versie',
    koolstof: 'Nee',
    tafel: 'Nee',
  },
  {
    kenmerk: 'Kalkverwijdering',
    pureaqua: 'Ja (osmose 95–99%)',
    basic3in1: 'Nee',
    quooker: 'Nee (standaard)',
    koolstof: 'Nee',
    tafel: 'Beperkt',
  },
];

export default function BesteKokendWaterKraan2026Page() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          {
            name: 'Beste kokend water kraan 2026',
            url: 'https://waterfilterplatform.nl/beste-kokend-water-kraan-2026',
          },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Beste Kokend Water Kraan 2026: Top 5',
          description:
            'Welke kokend water kraan is de beste in 2026? Wij vergeleken de top 5 op temperatuur, doorstroom, ingebouwd filter, prijs en energieverbruik.',
          datePublished: '2026-01-15',
          dateModified: '2026-05-13',
          url: 'https://waterfilterplatform.nl/beste-kokend-water-kraan-2026',
        }}
      />

      <TrustBar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Beste kokend water kraan 2026</span>
          </nav>
          <div className="inline-block text-xs bg-[#005F8A] text-white px-3 py-1 rounded-full mb-4 font-medium">
            Bijgewerkt mei 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste kokend water kraan 2026: top 5 eerlijk vergeleken
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een kokend water kraan is niet meer alleen voor de luxe keuken — het is een praktische
            vervanging van de waterkoker, en de beste modellen filteren het water ook nog eens. Wij
            vergeleken <strong>5 categorieën kokend water kranen</strong> op temperatuur, doorstroom,
            ingebouwd filter, prijs en energieverbruik. Onze #1 keuze: de{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">
              4-in-1 kraan met geïntegreerde omgekeerde osmose
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk onze #1 keuze →
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

        <QuickAnswer answer="De beste kokend water kraan van 2026 is een 4-in-1 systeem met ingebouwd osmosefilter. Het combineert kokend, koud gefilterd, warm en bruisend water in één kraanpunt en vervangt waterkoker en bruiswater-abonnement. Prijs: €699–899. Quooker is de bekendste merknaam maar significant duurder bij gelijke functionaliteit." />

        {/* Inleiding: waarom kiezen voor een kokend water kraan */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom kiezen voor een kokend water kraan?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een traditionele waterkoker kookt water in porties van 1–1,7 liter en gebruikt gemiddeld
            100–150 kWh per jaar. Een kokend water kraan met goed geïsoleerde boiler kan dat verbruik
            halveren, terwijl je altijd direct kokend water hebt — geen wachten, geen opnieuw koken.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Daar komt bij dat een kokend water kraan met ingebouwd filter ook de waterkwaliteit aanpakt.
            In harde watergebieden — een groot deel van Nederland heeft water harder dan 12 °dH — zorgt
            kalk voor ketelsteen in de boiler, smaakproblemen bij thee en koffie en een kortere levensduur
            van het apparaat. Een osmose-filter in de kraan elimineert dat probleem volledig.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                titel: 'Gemak',
                tekst:
                  'Altijd direct kokend water. Geen wachten, geen vullen, geen losse waterkoker op het aanrecht.',
              },
              {
                titel: 'Energiebesparing',
                tekst:
                  'Moderne boilers met vacuümisolatie of goede isolatie verbruiken minder dan een waterkoker bij intensief gebruik.',
              },
              {
                titel: 'Waterkwaliteit',
                tekst:
                  'Modellen met osmose-filter geven schoner water: vrij van kalk, chloor, nitraten en microplastics.',
              },
            ].map(v => (
              <div key={v.titel} className="bg-[#E0F2FE] rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-1">{v.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{v.tekst}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingscriteria */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke vergelijkingscriteria gebruiken we?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We beoordelen elke kokend water kraan op vijf criteria die het meest relevant zijn voor
            dagelijks gebruik in een Nederlands huishouden.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                criterium: 'Temperatuur',
                uitleg:
                  'Echte 100°C (volledig kokend) vs. 98°C (bijna kokend). Voor thee, pasta en sterilisatie maakt het verschil. We controleren of de opgegeven temperatuur overeenkomt met praktijkmetingen.',
              },
              {
                criterium: 'Doorstroom',
                uitleg:
                  'Hoeveel liter kokend water per minuut? Bij een 4-persoons huishouden moet je soms meerdere kopjes achter elkaar tappen. Een boiler die te klein is, wordt snel leeg.',
              },
              {
                criterium: 'Filter geïntegreerd',
                uitleg:
                  'Is er een filter? En zo ja: welk type? Een actief koolstoffilter verbetert smaak maar verwijdert geen kalk. Alleen omgekeerde osmose verwijdert kalk, nitraten en microplastics.',
              },
              {
                criterium: 'Prijs',
                uitleg:
                  'Zowel de aanschafprijs als de jaarlijkse onderhoudskosten (filterpatronen, service). We kijken naar totale eigendomskosten over 3 jaar.',
              },
              {
                criterium: 'Energieverbruik',
                uitleg:
                  'Standby-verbruik in Watt en geschat jaarverbruik in kWh. Een kraan met lagere standby-energie is goedkoper in gebruik en groener.',
              },
            ].map(c => (
              <div key={c.criterium} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{c.criterium}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{c.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat laat de top 5 vergelijkingstabel zien?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderstaande tabel geeft een snel overzicht van alle vijf categorieën op de vijf
            hoofdcriteria. De 4-in-1 kraan met osmose staat links als onze #1 keuze.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-xs border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Kenmerk</th>
                  <th className="py-2.5 px-2 font-semibold text-center bg-[#005F8A]">
                    #1 4-in-1 met osmose
                  </th>
                  <th className="py-2.5 px-2 font-semibold text-center">#2 3-in-1 basic</th>
                  <th className="py-2.5 px-2 font-semibold text-center">#3 Quooker-stijl</th>
                  <th className="py-2.5 px-2 font-semibold text-center">#4 Koolstof filter</th>
                  <th className="py-2.5 px-2 font-semibold text-center">#5 Tafelmodel</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingsTabel.map(r => (
                  <tr key={r.kenmerk} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.kenmerk}</td>
                    <td className="py-2.5 px-2 text-center text-gray-700 bg-[#E0F2FE]/40 font-medium">
                      {r.pureaqua}
                    </td>
                    <td className="py-2.5 px-2 text-center text-gray-600">{r.basic3in1}</td>
                    <td className="py-2.5 px-2 text-center text-gray-600">{r.quooker}</td>
                    <td className="py-2.5 px-2 text-center text-gray-600">{r.koolstof}</td>
                    <td className="py-2.5 px-2 text-center text-gray-600">{r.tafel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Specificaties zijn gebaseerd op fabrikantsinformatie en redactioneel onderzoek. Mei 2026.
          </p>
        </section>

        {/* #1 Uitgelicht */}
        <section>
          <div className="rounded-2xl border-2 border-[#005F8A] bg-[#E0F2FE] p-5 md:p-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#005F8A] text-white text-sm font-bold px-3 py-1 rounded-full">
                #1 Beste keuze 2026
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#003F5C] mb-2">
              4-in-1 kokend water kraan met osmose filter
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Een 4-in-1 kraan met osmosefilter is onze absolute topkeuze voor 2026. Geen andere kokend water kraan
              combineert gefilterd kokend water, koud gefilterd water, warm water én bruisend water
              met een volledig omgekeerde osmose filtersysteem in één compact kraanpunt. Dit is wat de
              kraan onderscheidt van alle alternatieven:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">Voordelen</p>
                <ul className="space-y-1.5">
                  {top5Kranen[0].pros.map(p => (
                    <li key={p} className="flex gap-2 items-start text-sm text-gray-700">
                      <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-700 mb-2">Aandachtspunten</p>
                <ul className="space-y-1.5">
                  {top5Kranen[0].cons.map(c => (
                    <li key={c} className="flex gap-2 items-start text-sm text-gray-700">
                      <span className="text-amber-500 shrink-0 mt-0.5">!</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white/80 rounded-xl p-4 mb-5 border border-[#005F8A]/20">
              <p className="text-sm font-semibold text-[#003F5C] mb-1">Ons oordeel</p>
              <p className="text-sm text-gray-700 leading-relaxed">{top5Kranen[0].oordeel}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
              >
                Vergelijk alle opties →
              </Link>
              <Link
                href="/4-in-1-kraan"
                className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
              >
                Meer over de 4-in-1 kraan
              </Link>
            </div>
          </div>
        </section>

        {/* Hoe werkt een kokend water kraan */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe werkt een kokend water kraan?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een kokend water kraan bestaat uit drie onderdelen: de kraanunit op het aanrecht, een geïsoleerde
            boiler onder het aanrecht en (bij gefilterde modellen) een filtersysteem. Het water uit de leiding
            stroomt eerst door het filter, daarna naar de boiler waar het continu op temperatuur wordt gehouden.
            Zodra je de kraanhandeling uitvoert, komt er direct heet water — geen opwarmtijd.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij een 4-in-1 kraan met osmose is er een extra stap: het leidingwater gaat eerst door het
            osmose membraan (5 stadia), daarna wordt het gefilterde water naar de boiler en naar de
            koelunit gestuurd. Zo is al het water dat je tapat — heet, koud, warm of bruisend — osmose
            gefilterd.
          </p>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-800 mb-3">Werkingsprincipe per functie</p>
            <div className="space-y-2">
              {[
                {
                  functie: 'Kokend water (100°C)',
                  uitleg:
                    'Boiler houdt 2,5–3 liter water continu op 100°C. Wordt onttrokken via speciaal veilig kraanmechanisme.',
                },
                {
                  functie: 'Koud gefilterd water',
                  uitleg:
                    'Gekoeld osmose-water (bij 4-in-1). Bij ongefilterde kranen: direct leidingwater via separate uitloop.',
                },
                {
                  functie: 'Warm water',
                  uitleg:
                    'Mengwater: combineert gefilterd koud en warm water via thermostaat. Vervangt de hete-kraan functie.',
                },
                {
                  functie: 'Bruisend water',
                  uitleg:
                    'CO₂-tank carboniseert gefilterd koud water. Instelbare bubbelintensiteit bij premium modellen.',
                },
              ].map(f => (
                <div key={f.functie} className="flex gap-3 text-sm">
                  <span className="text-[#005F8A] font-semibold shrink-0 w-44">{f.functie}</span>
                  <span className="text-gray-600">{f.uitleg}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top 5 reviews */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-2">Hoe scoren alle 5 categorieën in onze reviews?</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hieronder bespreken we elke categorie uitgebreid: voor wie het geschikt is, wat de echte
            kosten zijn en wanneer je beter voor een andere optie kiest. Zie ook onze pagina{' '}
            <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              kokend water kranen vergelijken
            </Link>{' '}
            voor een uitgebreide side-by-side analyse.
          </p>
          <div className="space-y-6">
            {top5Kranen.map(k => (
              <div
                key={k.rang}
                className={`rounded-2xl border p-5 ${
                  k.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-bold text-[#005F8A]">#{k.rang}</span>
                      <h3 className="font-bold text-gray-900 text-lg">{k.naam}</h3>
                      {k.highlight && (
                        <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">
                          Beste keuze
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">Voorbeeld: {k.voorbeeld}</p>
                  </div>
                  <span className="font-bold text-[#005F8A] text-sm shrink-0">{k.prijsRange}</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-gray-600 mb-4">
                  <div><span className="text-gray-400">Temperatuur:</span> {k.temperatuur}</div>
                  <div><span className="text-gray-400">Doorstroom:</span> {k.doorstroom}</div>
                  <div><span className="text-gray-400">Filter:</span> {k.filterGeintegreerd}</div>
                  <div><span className="text-gray-400">Energie:</span> {k.energieVerbruik}</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-green-700 mb-1.5">Voordelen</p>
                    <ul className="space-y-1">
                      {k.pros.map(p => (
                        <li key={p} className="flex gap-2 items-start text-xs text-gray-700">
                          <span className="text-green-600 shrink-0">✓</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700 mb-1.5">Aandachtspunten</p>
                    <ul className="space-y-1">
                      {k.cons.map(c => (
                        <li key={c} className="flex gap-2 items-start text-xs text-gray-700">
                          <span className="text-amber-500 shrink-0">!</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white/70 rounded-xl p-3 border border-gray-100">
                  <p className="text-xs font-semibold text-[#003F5C] mb-1">Ons oordeel</p>
                  <p className="text-xs text-gray-700 leading-relaxed">{k.oordeel}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filter of geen filter */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filter of geen filter: wanneer maakt het echt verschil?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet iedereen in Nederland heeft even hard water. Of een ingebouwd filter de investering
            waard is, hangt sterk af van de waterhardheid in jouw gemeente en jouw specifieke gebruik.
          </p>
          <div className="space-y-3">
            {[
              {
                situatie: 'Hard water (15+ °dH) — bijv. Noord-Holland, Zuid-Holland',
                advies: 'Osmose filter sterk aanbevolen',
                uitleg:
                  'Hoge kalkneerslag in de boiler verkort de levensduur van het apparaat, verslechtert de smaak van thee en koffie, en verhoogt de energiekosten doordat kalksteen de warmteoverbrenging remt. Een osmose filter elimineert dit volledig.',
                kleur: 'border-red-200 bg-red-50',
                badge: 'bg-red-100 text-red-800',
              },
              {
                situatie: 'Matig hard water (8–15 °dH) — bijv. Gelderland, Utrecht',
                advies: 'Filter aanbevolen voor optimale smaak',
                uitleg:
                  'Ketelsteen vormt zich trager maar wel merkbaar. Een filter verbetert de smaak van thee en koffie duidelijk. Koolstoffilter als minimale optie; osmose voor maximale kwaliteit.',
                kleur: 'border-amber-200 bg-amber-50',
                badge: 'bg-amber-100 text-amber-800',
              },
              {
                situatie: 'Zacht water (onder 8 °dH) — bijv. Drenthe, Groningen',
                advies: 'Filter optioneel',
                uitleg:
                  'Weinig kalkneerslag. Een kokend water kraan zonder filter werkt hier prima. Als je ook chloor en smaak wil verbeteren, volstaat een eenvoudig koolstoffilter.',
                kleur: 'border-green-200 bg-green-50',
                badge: 'bg-green-100 text-green-800',
              },
            ].map(s => (
              <div key={s.situatie} className={`border rounded-xl p-4 ${s.kleur}`}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 mb-2">
                  <p className="font-semibold text-gray-800 text-sm flex-1">{s.situatie}</p>
                  <span className={`text-xs px-2 py-1 rounded-lg w-fit shrink-0 font-medium ${s.badge}`}>
                    {s.advies}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.uitleg}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Controleer de waterhardheid van jouw gemeente op onze pagina{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>
            .
          </p>
        </section>

        {/* Kosten vergelijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Totale kosten over 3 jaar: kokend water kraan vs. waterkoker
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een kokend water kraan lijkt duur. Maar als je de aanschaf afzet tegen de besparingen op
            energiekosten, flessenwater en een losse waterkoker, ziet het plaatje er anders uit.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Scenario</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-right">Aanschaf</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-right">Per jaar</th>
                  <th className="py-2.5 px-2 font-semibold text-[#003F5C] text-right">3 jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    scenario: '4-in-1 kraan met osmose',
                    aanschaf: '€ 799',
                    perJaar: '≈ € 95',
                    totaal: '€ 1.084',
                    highlight: true,
                  },
                  {
                    scenario: '3-in-1 basic kraan (geen filter)',
                    aanschaf: '€ 450',
                    perJaar: '≈ € 50',
                    totaal: '€ 600',
                    highlight: false,
                  },
                  {
                    scenario: 'Quooker Fusion (premium, geen filter)',
                    aanschaf: '€ 1.100',
                    perJaar: '≈ € 45',
                    totaal: '€ 1.235',
                    highlight: false,
                  },
                  {
                    scenario: 'Waterkoker + flessenwater (gezin van 4)',
                    aanschaf: '€ 50',
                    perJaar: '≈ € 650',
                    totaal: '€ 2.000',
                    highlight: false,
                    italic: true,
                  },
                ].map((r, i) => (
                  <tr
                    key={r.scenario}
                    className={
                      r.highlight
                        ? 'bg-[#E0F2FE] font-medium'
                        : i === 3
                        ? 'bg-red-50 text-gray-500 text-xs italic'
                        : 'border-b border-gray-100'
                    }
                  >
                    <td className="py-2.5 px-3">{r.scenario}</td>
                    <td className="py-2.5 px-2 text-right">{r.aanschaf}</td>
                    <td className="py-2.5 px-2 text-right">{r.perJaar}</td>
                    <td className="py-2.5 px-2 text-right font-semibold">{r.totaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Jaarkosten inclusief energieverbruik, filterpatronen en geschat gebruik van flessenwater
            (gezin 4 personen). Waterkokerscenario inclusief flessenwater als drinkwater voor het gezin.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Een 4-in-1 kraan met osmose heeft een hogere aanschaf dan een 3-in-1 basic kraan, maar vervangt
            ook de waterkoker en het flessenwater. Op 3 jaar is de totale kostenpost lager dan
            waterkoker + flessenwater aankopen. Wil je weten welke 4-in-1 kraan het beste bij jouw
            keuken past? Bekijk{' '}
            <Link href="/4-in-1-kraan" className="text-[#005F8A] underline hover:no-underline">
              ons overzicht van 4-in-1 kranen
            </Link>
            .
          </p>
        </section>

        {/* Installatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie: wat heb je nodig?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste kokend water kranen zijn voor een doe-het-zelver te installeren. Hier is wat je
            nodig hebt en wat je kunt verwachten bij de installatie van een 4-in-1 kraan met osmose filter.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              {
                stap: '1. Kraaninboring',
                tekst:
                  'Je hebt een vrije kraaninboring nodig in het aanrecht (35–40 mm). De meeste aanrechten hebben al een tweede inboring voor een losse kraan. Zo niet, kan een installateur dit boren.',
              },
              {
                stap: '2. Waterkoppeling',
                tekst:
                  'Aansluiting op de koudwaterleiding onder het aanrecht via een aanboorkraan (T-stuk). Standaard bij de meeste systemen meegeleverd.',
              },
              {
                stap: '3. Elektra',
                tekst:
                  'Stopcontact (WCD) in het kastje onder het aanrecht nodig voor de boiler. Bij een 4-in-1 ook voor de CO₂-unit als die elektrisch is.',
              },
              {
                stap: '4. Afvoer (bij osmose)',
                tekst:
                  'Een osmose systeem heeft een spoelwaterafvoer nodig. Deze wordt via een aanboortje op de sifon (afvoer onder het aanrecht) aangesloten.',
              },
            ].map(s => (
              <div key={s.stap} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{s.stap}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{s.tekst}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4">
            <p className="font-semibold text-[#003F5C] mb-1 text-sm">Installatietijd</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Een 3-in-1 kraan zonder filter: 45–90 minuten. Een 4-in-1 kraan met osmose filter:
              2–3 uur voor een doe-het-zelver. Een 4-in-1 kraan met osmose wordt geleverd met een
              Nederlandstalige installatiehandleiding en videotutorial. Lees meer in onze gids{' '}
              <Link href="/kokend-water-kraan" className="text-[#005F8A] underline hover:no-underline">
                kokend water kraan installeren
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/kokend-water-kraan',
                title: 'Kokend water kraan — complete gids',
                desc: 'Alles over kokend water kranen: werking, installatie, kosten en onderhoud.',
              },
              {
                href: '/kokend-water-kraan/vergelijken',
                title: 'Kokend water kranen vergelijken',
                desc: 'Side-by-side vergelijking van populaire modellen en categorieën.',
              },
              {
                href: '/4-in-1-kraan',
                title: '4-in-1 kraan met osmose filter',
                desc: 'Complete uitleg over de 4-in-1 kraan: functies, prijs en voor wie het geschikt is.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'Koopadvies voor osmose filters: standalone én geïntegreerd in een 4-in-1 kraan.',
              },
              {
                href: '/quooker-alternatief',
                title: 'Quooker alternatieven vergelijken',
                desc: 'Betaalbare alternatieven voor de Quooker die ook kokend water leveren.',
              },
              {
                href: '/beste-waterfilter-2026',
                title: 'Beste waterfilter 2026',
                desc: 'Onze top 10 waterfilters vergeleken — van filterkan tot 4-in-1 osmose.',
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

        <CTABanner context="kokend" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over kokend water kranen
          </h2>
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
