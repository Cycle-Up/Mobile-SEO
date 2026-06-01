import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Waterontharder Prijs: Kosten & Vergelijking 2026',
  description:
    'Wat kost een waterontharder? Aanschafprijs, jaarlijkse zout- en onderhoudskosten, huur vs. koop en TCO over 5 jaar. Vergelijking met osmosefilter en niets.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/prijs' },
  openGraph: {
    title: 'Waterontharder Prijs: Kosten & Vergelijking 2026',
    description:
      'Aanschafprijs €300–4000, zoutkosten €30–120/jaar. Vergelijk de totale kosten van een waterontharder over 5 jaar — inclusief huur vs.',
    url: 'https://waterfilterplatform.nl/waterontharder/prijs',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat kost een waterontharder gemiddeld?',
    answer:
      'Een compacte waterontharder (single-tap of appartement) kost €300–600. Een model voor een klein huishouden (1–2 personen) kost €600–1000. Een familieontharder (3–4 personen) kost €1000–2000. Premium modellen met twin-tank of volumetrische regeneratie kosten €2000–4000. Daarboven komen jaarlijkse lopende kosten voor zout (€30–120), water voor regeneratie en eventueel onderhoud.',
  },
  {
    question: 'Hoeveel kost een waterontharder per jaar aan zout?',
    answer:
      'Het jaarlijkse zoutverbruik hangt af van de waterhardheid in uw regio en het waterverbruik van uw huishouden. Bij zacht tot matig hard water (8–15 °dH) verbruikt een gemiddeld gezin 30–60 kg zout per jaar. Bij hard water (15–21 °dH) loopt dat op naar 80–120 kg. Onthardingszout kost €0,20–0,40 per kg, wat neerkomt op €10–50 per jaar voor lichte hardheid en €30–120 per jaar voor harde watergebieden.',
  },
  {
    question: 'Is een waterontharder huren goedkoper dan kopen?',
    answer:
      'Huren kost doorgaans €15–40 per maand (€180–480/jaar), inclusief installatie, onderhoud en eventuele reparaties. Kopen inclusief installatie kost eenmalig €700–2350. De break-even voor huren versus kopen ligt bij een maandhuur van €25 op 5–7 jaar. Voor langdurig gebruik (eigenaar koopwoning) is kopen op termijn goedkoper. Huren is aantrekkelijk bij onzekerheid over de woonduur of als u geen grote eenmalige investering wilt doen.',
  },
  {
    question: 'Wat zijn de verborgen kosten van een waterontharder?',
    answer:
      'Naast de aanschafprijs zijn er installatiekosten (€200–400 voor een professional), de prijs van de eerste zoutvulling (€15–30), een eventuele bypass-klep (€30–80) en jaarlijkse onderhoudskosten (€50–100). Bij oudere woningen kunnen extra loodgieterswerkzaamheden nodig zijn voor het aansluiten op de hoofdleiding. Vraag altijd om een totaalofferte inclusief installatie.',
  },
  {
    question: 'Is een waterontharder duurder dan een osmose filter?',
    answer:
      'Een waterontharder is doorgaans duurder in aanschaf (€700–2000+ inclusief installatie) dan een onderbouw osmosefilter (€150–500 aanschaf, zelf te installeren). Bovendien heeft een waterontharder hogere jaarlijkse kosten: €85–240/jaar voor zout en onderhoud versus €50–150/jaar voor osmose filterkosten. Een osmosefilter filtert ook bredere contaminanten (nitraten, pesticiden, PFAS) waar een waterontharder alleen kalk aanpakt. Voor kleine huishoudens of huurders is een osmosefilter daarmee een kostenefficiënter alternatief.',
  },
];

const prijsTiers = [
  {
    naam: 'Compact / single-tap',
    aanschaf: '€ 300 – 600',
    doelgroep: 'Appartement, 1–2 personen',
    capaciteit: '5–10 L/min',
    regeneratie: 'Tijdgestuurd',
    zoutVerbruik: '30–60 kg/jaar',
    aanbevolen: false,
    badge: '',
  },
  {
    naam: 'Klein huishouden',
    aanschaf: '€ 600 – 1.000',
    doelgroep: '1–2 personen, matig hard water',
    capaciteit: '10–15 L/min',
    regeneratie: 'Vraaggestuurd',
    zoutVerbruik: '50–80 kg/jaar',
    aanbevolen: false,
    badge: 'Beste instapper',
  },
  {
    naam: 'Gezinsontharder',
    aanschaf: '€ 1.000 – 2.000',
    doelgroep: '3–5 personen, hard water',
    capaciteit: '15–25 L/min',
    regeneratie: 'Vraaggestuurd',
    zoutVerbruik: '80–120 kg/jaar',
    aanbevolen: true,
    badge: 'Meest gekozen',
  },
  {
    naam: 'Premium / twin-tank',
    aanschaf: '€ 2.000 – 4.000',
    doelgroep: 'Groot gezin, continu zacht water',
    capaciteit: '25–40 L/min',
    regeneratie: 'Continu beschikbaar',
    zoutVerbruik: '100–180 kg/jaar',
    aanbevolen: false,
    badge: 'Geen downtime',
  },
];

const tcoData = [
  {
    naam: 'Compact (€450 aanschaf)',
    aanschaf: 450,
    installatie: 250,
    jaarlijks: 100,
    jaar1: 800,
    jaar2: 900,
    jaar3: 1000,
    jaar4: 1100,
    jaar5: 1200,
    highlight: false,
  },
  {
    naam: 'Klein huishouden (€800)',
    aanschaf: 800,
    installatie: 300,
    jaarlijks: 120,
    jaar1: 1220,
    jaar2: 1340,
    jaar3: 1460,
    jaar4: 1580,
    jaar5: 1700,
    highlight: false,
  },
  {
    naam: 'Gezinsontharder (€1500)',
    aanschaf: 1500,
    installatie: 350,
    jaarlijks: 160,
    jaar1: 2010,
    jaar2: 2170,
    jaar3: 2330,
    jaar4: 2490,
    jaar5: 2650,
    highlight: true,
  },
  {
    naam: 'Premium twin-tank (€3000)',
    aanschaf: 3000,
    installatie: 400,
    jaarlijks: 220,
    jaar1: 3620,
    jaar2: 3840,
    jaar3: 4060,
    jaar4: 4280,
    jaar5: 4500,
    highlight: false,
  },
];

const huurData = [
  { tier: 'Compact', maand: '€ 15 – 20', jaar: '€ 180 – 240', inbegrepen: 'Installatie, jaarlijks onderhoud' },
  { tier: 'Klein huishouden', maand: '€ 20 – 30', jaar: '€ 240 – 360', inbegrepen: 'Installatie, onderhoud, reparaties' },
  { tier: 'Gezinsontharder', maand: '€ 25 – 40', jaar: '€ 300 – 480', inbegrepen: 'Installatie, volledige service, zout kortingen' },
  { tier: 'Premium twin-tank', maand: '€ 35 – 55', jaar: '€ 420 – 660', inbegrepen: 'Alles inclusief, 24/7 service' },
];

export default function WaterOntharderPrijsPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Prijs', url: 'https://waterfilterplatform.nl/waterontharder/prijs' },
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
            <span>Prijs</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder Prijs: Kosten &amp; Vergelijking 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Wat kost een <strong>waterontharder</strong> echt — aanschaf, installatie, zout, onderhoud en
            alles daartussenin? Op deze pagina vergelijken we alle kostenposten voor de vier
            prijscategorieën, berekenen we de 5-jaar TCO en leggen we uit wanneer huren goedkoper is
            dan kopen.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#prijsoverzicht"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar prijsoverzicht →
            </Link>
            <Link
              href="/waterontharder/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterontharder kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#prijsoverzicht" className="hover:underline">Aanschafprijs per categorie</a></li>
            <li><a href="#lopende-kosten" className="hover:underline">Jaarlijkse lopende kosten</a></li>
            <li><a href="#tco" className="hover:underline">5-jaar TCO vergelijking</a></li>
            <li><a href="#huur-vs-koop" className="hover:underline">Huren vs. kopen</a></li>
            <li><a href="#verborgen-kosten" className="hover:underline">Verborgen kosten</a></li>
            <li><a href="#vergelijking" className="hover:underline">Waterontharder vs. osmose vs. niets doen</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Prijsoverzicht */}
        <section id="prijsoverzicht">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Aanschafprijs per categorie: wat kost een waterontharder?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Waterontharders worden onderverdeeld in vier prijscategorieën op basis van capaciteit,
            doelgroep en regeneratiemethode. De aanschafprijs zegt echter niet alles: een goedkoop model
            met tijdgestuurde regeneratie kan op jaarbasis meer zout verbruiken dan een duurder
            vraaggestuurd model. Hieronder de vier categorieën met de belangrijkste kenmerken.
          </p>
          <div className="space-y-5">
            {prijsTiers.map(s => (
              <div
                key={s.naam}
                className={`rounded-2xl border p-5 ${s.aanbevolen ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{s.naam}</h3>
                    <p className="text-sm text-gray-500">{s.doelgroep}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A] text-lg">{s.aanschaf}</p>
                    {s.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${s.aanbevolen ? 'bg-[#005F8A] text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {s.badge}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                  {[
                    { label: 'Capaciteit', value: s.capaciteit },
                    { label: 'Regeneratie', value: s.regeneratie },
                    { label: 'Zoutverbruik', value: s.zoutVerbruik },
                  ].map(spec => (
                    <div key={spec.label} className="bg-white/70 rounded-lg p-2">
                      <p className="text-gray-400 text-xs mb-0.5">{spec.label}</p>
                      <p className="font-medium text-gray-800 text-xs">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#005F8A]">Let op:</strong> De aanschafprijs is exclusief installatie.
            Professionele installatie door een loodgieter kost doorgaans{' '}
            <strong>€200–400 extra</strong>, afhankelijk van de complexiteit van de aansluiting op de
            hoofdwaterleiding. Vraag altijd om een totaalofferte inclusief installatie en eerste zoutvulling.
          </div>
        </section>

        {/* Lopende kosten */}
        <section id="lopende-kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Jaarlijkse lopende kosten: zout, water en onderhoud
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De aanschapprijs is maar een deel van het verhaal. Een waterontharder heeft drie categorieën
            aan terugkerende kosten: zout voor regeneratie, water dat tijdens de spoelcyclus verbruikt
            wordt en servicekosten voor periodiek onderhoud. Hieronder een gedetailleerd overzicht.
          </p>

          {/* Zoutkosten */}
          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Zoutkosten: €30–120 per jaar</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Zout is de grootste terugkerende kostenpost voor een waterontharder. Het zoutverbruik hangt
            af van drie factoren: de waterhardheid in uw regio, het dagelijkse waterverbruik van uw
            huishouden en de instelling van de regeneratiefrequentie. Moderne vraaggestuurde ontharders
            regenereren alleen als het nodig is — dit bespaart 30–50% zout ten opzichte van
            tijdgestuurde modellen.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Waterhardheid</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Zout/jaar (2 pers.)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Zout/jaar (4 pers.)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Kosten/jaar</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { hardheid: 'Matig (8–12 °dH)', twee: '20–35 kg', vier: '35–60 kg', kosten: '€ 10 – 25' },
                  { hardheid: 'Hard (12–18 °dH)', twee: '35–60 kg', vier: '60–100 kg', kosten: '€ 25 – 50' },
                  { hardheid: 'Zeer hard (18–25 °dH)', twee: '60–80 kg', vier: '100–150 kg', kosten: '€ 30 – 65' },
                  { hardheid: 'Extreem hard (>25 °dH)', twee: '80–100 kg', vier: '150–200 kg', kosten: '€ 50 – 120' },
                ].map((r, i) => (
                  <tr key={r.hardheid} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium">{r.hardheid}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.twee}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.vier}</td>
                    <td className="py-2.5 px-3 text-center text-xs font-semibold text-[#005F8A]">{r.kosten}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-6">
            Gebaseerd op een gemiddeld zoutprijsvan €0,30/kg. Vraaggestuurde ontharder verondersteld.
            Tijdgestuurde modellen verbruiken 30–50% meer zout.
          </p>

          {/* Water voor regeneratie */}
          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Water voor regeneratie: €5–20 per jaar</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Elke regeneratiecyclus verbruikt 50–150 liter spoelwater (pekeloplossing + naspoeling).
            Bij een gezin van 4 in een hard-watergebied zijn 1–3 regeneraties per week realistisch,
            wat neerkomt op 5.000–22.000 liter extra waterverbruik per jaar. Tegen een waterprijs van
            €0,80–1,20 per m³ zijn dat extra kosten van €4–22 per jaar — een beperkte post maar wel
            een die de milieuvoetprint vergroot.
          </p>

          {/* Elektriciteit */}
          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Elektriciteitsverbruik: €5–15 per jaar</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een moderne waterontharder verbruikt weinig elektriciteit: het motorventiel en de
            regeleenheid verbruiken samen 3–10 watt in stand-by. Over een jaar betekent dat
            26–87 kWh, ofwel €5–17 bij een stroomprijs van €0,20/kWh. Dit is een verwaarloosbare post.
          </p>

          {/* Onderhoud */}
          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Onderhoud en service: €50–100 per jaar</h3>
          <p className="text-gray-700 leading-relaxed">
            De meeste fabrikanten en installateurs adviseren een jaarlijkse servicebeurt waarbij het
            apparaat wordt gecontroleerd op lekken, de regeneratieprogrammering wordt geoptimaliseerd
            en het zouttankcompartiment wordt gereinigd. Kosten liggen op €50–100 per beurt. Sommige
            huurcontracten en onderhoudsabonnementen dekken deze kosten. Na 8–12 jaar is harsbedvervanging
            nodig: reken op €150–300 exclusief arbeid.
          </p>
        </section>

        {/* TCO */}
        <section id="tco">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5-jaar totale eigendomskosten (TCO): welke categorie is het voordeligst?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Om een eerlijke vergelijking te maken, berekenen we de cumulatieve kosten over 5 jaar voor
            elke prijscategorie. Dit omvat de aanschafprijs, installatie en jaarlijkse lopende kosten
            (zout, water, elektriciteit, onderhoud). Voor een gezin van 4 personen in een hard-watergebied
            (gemiddeld 18 °dH).
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[540px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Categorie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 1</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 2</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 3</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 4</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Jaar 5</th>
                </tr>
              </thead>
              <tbody>
                {tcoData.map((r, i) => (
                  <tr
                    key={r.naam}
                    className={r.highlight ? 'bg-[#E0F2FE] font-semibold text-[#003F5C]' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="py-2.5 px-3">{r.naam}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar1.toLocaleString('nl-NL')}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar2.toLocaleString('nl-NL')}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar3.toLocaleString('nl-NL')}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar4.toLocaleString('nl-NL')}</td>
                    <td className="py-2.5 px-3 text-center text-xs">€ {r.jaar5.toLocaleString('nl-NL')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-5">
            Cumulatieve kosten inclusief aanschap, installatie en gemiddelde jaarlijkse kosten (zout, water,
            onderhoud). Hard-watergebied (18 °dH), gezin van 4 personen, vraaggestuurde ontharder.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-[#003F5C] mb-2">Wat de tabel laat zien:</p>
            <ul className="space-y-1.5">
              <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>Het compacte model heeft de laagste aanloopkosten maar is beperkt in capaciteit — bij meer dan 2 personen of hard water raakt het systeem snel overbelast.</li>
              <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>De gezinsontharder (€1000–2000) biedt de beste balans: hoge capaciteit, efficiënte vraaggestuurde regeneratie en lage kosten per liter onthaard water.</li>
              <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>De premium twin-tank rechtvaardigt zijn hogere prijs pas echt bij grote gezinnen (5+ personen) of woningen waar continu zacht water vereist is zonder enige downtime tijdens regeneratie.</li>
            </ul>
          </div>
        </section>

        {/* Huren vs kopen */}
        <section id="huur-vs-koop">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterontharder huren of kopen: voor- en nadelen op een rij
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Veel installateurs en fabrikanten bieden naast koop ook huur- of leaseconstructies aan.
            Bij huur betaalt u een vast maandelijks bedrag dat doorgaans installatie, jaarlijks onderhoud
            en reparaties dekt. Hieronder de maandelijkse en jaarlijkse huurkosten per categorie, gevolgd
            door een break-even analyse.
          </p>

          {/* Huurkosten tabel */}
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Categorie</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Per maand</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Per jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Inbegrepen</th>
                </tr>
              </thead>
              <tbody>
                {huurData.map((r, i) => (
                  <tr key={r.tier} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium">{r.tier}</td>
                    <td className="py-2.5 px-3 text-center text-xs font-semibold text-[#005F8A]">{r.maand}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.jaar}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-500">{r.inbegrepen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Break-even */}
          <h3 className="text-lg font-bold text-[#003F5C] mb-3">Break-even: wanneer is kopen goedkoper?</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Bij een maandelijkse huurprijs van €25 en een aankoopprijs van €1500 (inclusief installatie
            van €350) betaalt u bij huur op jaarbasis €300. Na <strong>6 jaar</strong> heeft u bij huur
            evenveel betaald als bij koop — daarna is koop goedkoper. Bij een huurprijs van €35/maand
            (€420/jaar) is de break-even al na <strong>4,4 jaar</strong> bereikt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3">Huren is voordelig als…</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>U niet zeker weet hoe lang u in de woning blijft</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>U geen grote eenmalige investering wilt doen</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>Installatie, onderhoud en reparaties volledig gedekt moeten zijn</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>U een nieuw model wilt zodra betere technologie beschikbaar is</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3">Kopen is voordelig als…</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>U eigenaar bent van de woning en langdurig wilt ontharden</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>U zelf onderhoud kunt uitvoeren (zout bijvullen, reinigen)</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>U de totale eigendomskosten over 5–10 jaar wilt minimaliseren</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span>U een verhoogde woningwaarde als bijkomend voordeel ziet</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Let op bij huurcontracten:</strong> Controleer altijd de
            minimumduur (vaak 2–5 jaar), de opzegtermijn, wat er bij verhuizing gebeurt en of u het
            apparaat kunt overnemen. Sommige contracten bevatten indexeringsclausules waardoor de
            maandhuur jaarlijks stijgt.
          </div>
        </section>

        {/* Verborgen kosten */}
        <section id="verborgen-kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Verborgen kosten: wat staat er niet in de advertentieprijs?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De geadverteerde aanschafprijs van een waterontharder is zelden de werkelijke totaalprijs.
            Hieronder de kostenposten die verkopers niet altijd proactief noemen maar die uw uiteindelijke
            investering aanzienlijk kunnen verhogen.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: 1,
                titel: 'Professionele installatie: €200–400',
                tekst: 'Een waterontharder moet worden aangesloten op de hoofdwaterleiding, vóór de aftakking naar de rest van de woning. Dit vereist altijd een erkend loodgieter. In nieuwbouw is de aansluiting eenvoudig; in oudere woningen met gegoten ijzeren leidingen of complexe leidingkasten kan de installatie meer tijd (en geld) kosten. Inclusief voorrijkosten, materiaal en arbeid rekent u realistisch op €200–400.',
              },
              {
                nr: 2,
                titel: 'Bypass-klep: €30–80',
                tekst: 'Een bypass-klep is een driewegsklep die u toelaat de waterontharder te omzeilen zonder de watertoevoer te onderbreken — essentieel bij onderhoud of storing. Bij veel (goedkopere) modellen zit de bypass-klep niet standaard in de set. Vraag altijd of de bypass inbegrepen is.',
              },
              {
                nr: 3,
                titel: 'Eerste zoutvulling: €15–30',
                tekst: 'Bij levering van een nieuwe waterontharder is het zouttankcompartiment leeg. Onthardingszout (tabletten of blokken) moet u zelf aanschaffen. Voor een eerste vulling heeft u doorgaans 15–25 kg nodig, afhankelijk van de tankgrootte. Zout kost €0,25–0,40 per kg — een kleine post maar niet onbelangrijk.',
              },
              {
                nr: 4,
                titel: 'Extra loodgieterswerkzaamheden bij oudere woningen',
                tekst: 'In woningen gebouwd vóór 1970 kunnen loodzinken of ijzeren leidingen problemen geven bij het aansluiten van de ontharder. Soms is vervanging van een leidstuik nodig, wat de installatiekosten met €100–300 kan verhogen. Laat altijd een inspectie uitvoeren voordat u een offerte accepteert.',
              },
              {
                nr: 5,
                titel: 'Drainagepunt voor spoelwater',
                tekst: 'Het afvalwater van de regeneratiecyclus (gezouten spoelwater) moet worden afgevoerd naar de riolering. Als er geen drainageaansluiting nabij de installatielocatie is, zijn extra afvoerwerkzaamheden nodig: reken op €50–150 extra.',
              },
            ].map(f => (
              <div key={f.nr} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {f.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{f.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-[#003F5C] mb-1">Realistisch totaal bij aankoop (gezinsontharder):</p>
            <ul className="space-y-1">
              <li className="flex justify-between"><span>Aanschap ontharder</span><span className="font-semibold">€ 1.000 – 2.000</span></li>
              <li className="flex justify-between"><span>Installatie loodgieter</span><span className="font-semibold">€ 200 – 400</span></li>
              <li className="flex justify-between"><span>Bypass-klep (indien apart)</span><span className="font-semibold">€ 30 – 80</span></li>
              <li className="flex justify-between"><span>Eerste zoutvulling</span><span className="font-semibold">€ 15 – 30</span></li>
              <li className="flex justify-between border-t border-[#005F8A]/20 pt-2 font-bold text-[#003F5C]">
                <span>Totaal startkosten</span><span>€ 1.245 – 2.510</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Vergelijking */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waterontharder vs. osmosefilter vs. niets doen: de kostenvergelijking
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een veelgehoorde vraag is: wat kost het eigenlijk om niets te doen en gewoon met hard water
            te blijven leven? Kalkschade aan apparaten, verhoogd energieverbruik en eerder afgeschreven
            verwarmingselementen tellen ook op. Hieronder een eerlijke vergelijking van de drie opties
            over 5 jaar voor een gezin van 4 personen in een hard-watergebied.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                optie: 'Waterontharder (gezinsmodel)',
                startkosten: '€ 1.300 – 2.350',
                jaarlijks: '€ 160 – 240 / jaar',
                vijfJaar: '€ 2.100 – 3.550',
                beschermt: 'CV-ketel, leidingen, wasmachine, vaatwasser, tegels',
                nadelen: 'Voegt natrium toe; milieu-impact zout; regelmatig onderhoud',
                kleur: 'border-[#005F8A] bg-[#E0F2FE]',
              },
              {
                optie: 'Osmosefilter (onderbouw premium)',
                startkosten: '€ 400 – 800',
                jaarlijks: '€ 80 – 120 / jaar',
                vijfJaar: '€ 800 – 1.400',
                beschermt: 'Drinkwaterkwaliteit: kalk, chloor, nitraten, PFAS',
                nadelen: 'Beschermt alleen drinkwater, niet leidingen en apparaten',
                kleur: 'border-gray-200 bg-white',
              },
              {
                optie: 'Niets doen (hard water accepteren)',
                startkosten: '€ 0',
                jaarlijks: '€ 200 – 600 / jaar (schade)',
                vijfJaar: '€ 1.000 – 3.000',
                beschermt: 'Geen bescherming',
                nadelen: 'Ontkalkmiddelen, eerder afgeschreven apparaten, verhoogd energieverbruik ketel',
                kleur: 'border-amber-100 bg-amber-50',
              },
            ].map(o => (
              <div key={o.optie} className={`rounded-2xl border p-5 ${o.kleur}`}>
                <h3 className="font-bold text-gray-900 text-base mb-3">{o.optie}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-3">
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">Startkosten</p>
                    <p className="font-semibold text-gray-800">{o.startkosten}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">Jaarlijks</p>
                    <p className="font-semibold text-gray-800">{o.jaarlijks}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">5-jaar totaal</p>
                    <p className="font-semibold text-gray-800">{o.vijfJaar}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mb-1"><strong>Beschermt:</strong> {o.beschermt}</p>
                <p className="text-xs text-gray-500"><strong>Nadelen:</strong> {o.nadelen}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#005F8A]">Conclusie:</strong> Voor kleine huishoudens of huurders
            is een <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">osmosefilter</Link>{' '}
            de kostenefficiëntste oplossing voor zuiver drinkwater. Wie de volledige woning wil
            beschermen (leidingen, cv-ketel, wasmachine) en beschikt over een koopwoning met hard water,
            maakt met een gezinsontharder op termijn de juiste keuze. Kalkschade door &apos;niets
            doen&apos; loopt op de lange termijn op tot vergelijkbare bedragen als een ontharder — zonder
            de voordelen van zacht water.
          </div>

          <p className="text-gray-700 mt-5 leading-relaxed">
            Meer weten over de details van wateronthardingskosten over een langere periode? Lees ons
            kennisbankartikel over{' '}
            <Link href="/kennisbank/waterontharder-kosten" className="text-[#005F8A] underline hover:no-underline">
              waterontharder kosten
            </Link>{' '}
            voor een uitgebreide analyse inclusief regio-specifieke berekeningen.
          </p>
        </section>

        <CTABanner context="waterhardheid" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterontharder', label: 'Waterontharder: werking en soorten' },
              { href: '/waterontharder/kopen', label: 'Waterontharder kopen — welk model?' },
              { href: '/kennisbank/waterontharder-kosten', label: 'Kennisbank: waterontharder kosten uitgelegd' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter als alternatief voor kleine huishoudens' },
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
            Veelgestelde vragen over waterontharder prijs
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
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Budget keuzehulp waterontharder</h3>
              <p className="text-sm text-gray-600">Welke prijsklasse past bij uw behoefte en welke functies extra kosten rechtvaardigen.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling: prijs versus kwaliteit</h3>
              <p className="text-sm text-gray-600">Wat ionenwisselhars en regelautomaten kosten bij verschillende prijsklassen.</p>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
