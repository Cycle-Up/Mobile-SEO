import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterontharder vergelijken: de beste modellen van 2026',
  description:
    'Waterontharder vergelijken op capaciteit, zoutverbruik, NSF/ANSI 44 certificering, stroomverbruik en smart-bediening. 6-modellen tabel, 5-jaar TCO en wanneer.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/vergelijken' },
  openGraph: {
    title: 'Waterontharder vergelijken: de beste modellen van 2026',
    description:
      'Vergelijk de beste waterontharders van 2026: Kinetico, Harvey, BWT, Ecowat en meer. Capaciteit, zoutverbruik, NSF-certificering, kosten en wie wat nodig.',
    url: 'https://waterfilterplatform.nl/waterontharder/vergelijken',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het belangrijkste criterium bij het vergelijken van waterontharders?',
    answer:
      'Capaciteit en regeneratielogica zijn de twee meest bepalende criteria. Een ontharder die te klein is voor jouw waterverbruik en waterhardheid zal te frequent regenereren, wat leidt tot hoger zout- en waterverbruik en snellere slijtage. Kies altijd een vraaggestuurde (demand-initiated) ontharder boven een tijdgestuurde — dat scheelt 30–50% op zout en water.',
  },
  {
    question: 'Wat betekent NSF/ANSI 44 certificering bij een waterontharder?',
    answer:
      'NSF/ANSI 44 is de internationale productstandaard voor residentiële ionenwisselaars. Een gecertificeerd systeem voldoet aan aantoonbare prestatiespecificaties voor harshoeveelheid, zoutefficiëntie en materiaalkwaliteit. Voor de Nederlandse markt is NEN 1006 relevanter als installatienorm, maar NSF/ANSI 44 biedt aanvullende garantie voor productkwaliteit. Kies bij voorkeur een ontharder met deze certificering.',
  },
  {
    question: 'Wat is het verschil tussen een single-tank en duplex (twin-tank) ontharder?',
    answer:
      'Een single-tank ontharder levert tijdelijk ongezacht water tijdens de regeneratiecyclus (doorgaans 60–90 minuten midden in de nacht). Een duplex of twin-tank systeem heeft twee harsvaten die afwisselend werken: terwijl het ene regenereert, levert het andere zacht water. Het resultaat: continu zacht water, 24 uur per dag. Twin-tank systemen zijn duurder in aanschaf maar noodzakelijk voor grote gezinnen of bedrijven.',
  },
  {
    question: 'Is een zoutloze waterontharder echt effectief?',
    answer:
      'Dat hangt af van je definitie van "effectief". Template Assisted Crystallization (TAC) verandert de kristalstructuur van calcium en magnesium zodat ze minder aan leidingen hechten — maar verwijdert de hardheidsionen niet. Het water blijft hard in de chemische zin. Voor leidingbescherming kan TAC nuttig zijn; voor zachte huid, minder zeepgebruik en zachter waswater heb je een echte ionenwisselaar nodig.',
  },
  {
    question: 'Hoeveel zout verbruikt een moderne waterontharder per jaar?',
    answer:
      'Een modern vraaggestuurd systeem verbruikt 50–120 kg zout per jaar voor een gemiddeld gezin (4 personen, waterverbruik 400–600 L/dag, hardheid 18 °dH). Oudere tijdgestuurde systemen kunnen 150–250 kg/jaar verbruiken. De Kinetico Premier Compact scoort bijzonder zuinig door zijn niet-elektrische vraaggestuurde mechanisme: gemiddeld 60–80 kg/jaar.',
  },
  {
    question: 'Wanneer is een osmosefilter beter dan een waterontharder?',
    answer:
      'Een omgekeerde osmose filter is beter als je (1) in een huurwoning of appartement woont zonder toestemming voor leidingwerk, (2) ook chloor, nitraten, PFAS en microplastics wilt verwijderen, (3) een klein huishouden hebt (1–2 personen), of (4) je zorgen maakt over natriumtoevoeging aan je drinkwater. Een osmosefilter onthardt alleen het drinkwater aan de keukenkraan; een ionenwisselaar onthardt het volledige huishoudelijke water.',
  },
  {
    question: 'Wat zijn de 5-jaar kosten van een waterontharder?',
    answer:
      'Budget ontharder: aanschaf + installatie €700–800, zout + water + onderhoud €800–1.200 over 5 jaar = totaal €1.500–2.000. Premium systeem (Kinetico/Harvey): aanschaf + installatie €1.200–1.700, zout + water + onderhoud €500–700 over 5 jaar = totaal €1.700–2.400. Het verschil zit in het lagere zoutverbruik en lagere stroomkosten van premium modellen.',
  },
  {
    question: 'Heeft een waterontharder WiFi of smart-bediening nodig?',
    answer:
      'Voor de meeste huishoudens is smart-bediening een handige extra, geen noodzaak. Smart-functies (app-notificaties bij laag zoutniveau, verbruiksstatistieken, remote regeneratie) zijn nuttig voor drukke gezinnen die hun systeem willen monitoren. Sommige systemen zoals de BWT Perla koppelen aan een app voor saltverbruiksrapportages. Kinetico en Harvey zijn bewust niet-elektrisch — betrouwbaarheid boven connectiviteit.',
  },
];

const modellen = [
  {
    naam: 'Kinetico Premier Compact',
    type: 'Twin-tank, non-elektrisch',
    capaciteitL: '30–50 L/dag (harde zones)',
    zoutPerJaar: '60–80 kg',
    stroomverbruik: 'Geen (watergedreven)',
    nsf44: true,
    smart: false,
    aanschaf: '€ 1.100 – 1.600',
    garantie: '10 jaar',
    beste_voor: 'Gezinnen met continu zacht water, energiebewust',
    highlight: true,
  },
  {
    naam: 'Harvey Mini Classic',
    type: 'Twin-tank, compact',
    capaciteitL: '25–40 L/dag',
    zoutPerJaar: '70–100 kg',
    stroomverbruik: '< 5 W',
    nsf44: true,
    smart: false,
    aanschaf: '€ 900 – 1.300',
    garantie: '7 jaar',
    beste_voor: 'Kleine ruimtes, appartementen met toestemming',
    highlight: false,
  },
  {
    naam: 'BWT Perla Silk',
    type: 'Single-tank, vraaggestuurd + app',
    capaciteitL: '35–60 L/dag',
    zoutPerJaar: '80–120 kg',
    stroomverbruik: '< 8 W',
    nsf44: false,
    smart: true,
    aanschaf: '€ 850 – 1.400',
    garantie: '5 jaar',
    beste_voor: 'Gebruikers die app-monitoring willen, magnesiumtechnologie',
    highlight: false,
  },
  {
    naam: 'Ecowat EcoSoft Pro',
    type: 'Single-tank, vraaggestuurd',
    capaciteitL: '30–50 L/dag',
    zoutPerJaar: '80–110 kg',
    stroomverbruik: '< 6 W',
    nsf44: true,
    smart: false,
    aanschaf: '€ 700 – 1.100',
    garantie: '5 jaar',
    beste_voor: 'Prijs-kwaliteit voor eigenwoningbezitters',
    highlight: false,
  },
  {
    naam: 'Aqua Pure HF-25',
    type: 'Single-tank, tijdgestuurd',
    capaciteitL: '25–40 L/dag',
    zoutPerJaar: '120–180 kg',
    stroomverbruik: '< 10 W',
    nsf44: false,
    smart: false,
    aanschaf: '€ 450 – 700',
    garantie: '2 jaar',
    beste_voor: 'Lage aanschafprijs; hogere gebruikskosten',
    highlight: false,
  },
  {
    naam: 'Budget ionenwisselaar (no-brand)',
    type: 'Single-tank, tijdgestuurd',
    capaciteitL: '20–30 L/dag',
    zoutPerJaar: '150–220 kg',
    stroomverbruik: '< 12 W',
    nsf44: false,
    smart: false,
    aanschaf: '€ 200 – 450',
    garantie: '1 jaar',
    beste_voor: 'Tijdelijk gebruik of huurwoning met toestemming',
    highlight: false,
  },
];

const tcoTabel = [
  {
    model: 'Budget (tijdgestuurd)',
    aanschafInstallatie: '€ 650',
    zoutElektraJaar: '€ 200',
    tco5jr: '€ 1.650',
    tco10jr: '€ 2.650',
  },
  {
    model: 'Middenklasse vraaggestuurd',
    aanschafInstallatie: '€ 1.000',
    zoutElektraJaar: '€ 140',
    tco5jr: '€ 1.700',
    tco10jr: '€ 2.400',
  },
  {
    model: 'Premium twin-tank (Kinetico/Harvey)',
    aanschafInstallatie: '€ 1.500',
    zoutElektraJaar: '€ 100',
    tco5jr: '€ 2.000',
    tco10jr: '€ 2.500',
  },
  {
    model: 'Osmose 4-in-1 (alternatief)',
    aanschafInstallatie: '€ 900',
    zoutElektraJaar: '€ 100',
    tco5jr: '€ 1.400',
    tco10jr: '€ 1.900',
  },
];

const wieWatNodig = [
  {
    profiel: 'Huurder of appartement',
    aanbeveling: 'Elektrisch/magnetisch apparaat of osmosefilter',
    reden:
      'Geen toestemming voor aansluiting op hoofdleiding. Magnetische apparaten klemmen op de buitenkant van de leiding. Osmosefilter onder aanrecht is eenvoudig zelf te installeren en volledig verwijderbaar.',
  },
  {
    profiel: 'Eigenwoningbezitter — matig hard water (10–18 °dH)',
    aanbeveling: 'Enkele ionenwisselaar, vraaggestuurd',
    reden:
      'Effectieve ontharding voor de hele woning. Vraaggestuurde regeneratie houdt kosten beheersbaar bij gemiddeld waterverbruik.',
  },
  {
    profiel: 'Eigenwoningbezitter — zeer hard water (&gt; 18 °dH)',
    aanbeveling: 'Twin-tank ionenwisselaar (Kinetico/Harvey)',
    reden:
      'Continu zacht water ook tijdens regeneratie. Hogere capaciteit voor hard water. De extra investering verdient zich terug via lager zoutverbruik en betere bescherming cv-ketel en huishoudapparaten.',
  },
  {
    profiel: 'Smaak + filtratie + hardheid willen aanpakken',
    aanbeveling: 'Osmose 4-in-1 kraan (voor drinkwater) + eventueel TAC voor leidingen',
    reden:
      'Osmose verwijdert 95–99% van alle opgeloste stoffen: kalk, chloor, nitraten, PFAS. Gecombineerd met een TAC-systeem op de hoofdleiding krijg je de beste leidingbescherming én het zuiverste drinkwater.',
  },
];

export default function WaterontharderVergelijkenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/waterontharder/vergelijken' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontharder vergelijken: de beste modellen van 2026',
          description:
            'Vergelijk de beste waterontharders van 2026 op capaciteit, zoutverbruik, NSF/ANSI 44 certificering, stroomverbruik en smart-bediening.',
          datePublished: '2026-04-22',
          url: 'https://waterfilterplatform.nl/waterontharder/vergelijken',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder vergelijken: de beste modellen van 2026
          </h1>

          {/* QuickAnswer */}
          <div className="bg-white border border-[#005F8A]/30 rounded-xl p-4 mb-6">
            <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-1">Snel antwoord</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              De beste waterontharder voor een gemiddeld gezin in een hard-watergebied is een vraaggestuurde ionenwisselaar met NSF/ANSI 44 certificering. Kinetico en Harvey scoren het hoogst op zoutefficiëntie en betrouwbaarheid; BWT biedt smart-functies. Budget modellen zijn goedkoper in aanschaf maar duurder in gebruik.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#vergelijking"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Modellen vergelijken →
            </Link>
            <Link
              href="/waterontharder/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Koopgids waterontharder
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#criteria" className="hover:underline">Koopkriteria</a></li>
            <li><a href="#vergelijking" className="hover:underline">6-modellen vergelijkingstabel</a></li>
            <li><a href="#zoutloos-vs-zout" className="hover:underline">Zoutloos vs. ionenwisselaar</a></li>
            <li><a href="#wie-wat" className="hover:underline">Wie heeft wat nodig?</a></li>
            <li><a href="#tco" className="hover:underline">5-jaar kostentabel</a></li>
            <li><a href="#wanneer-osmose" className="hover:underline">Wanneer is osmose beter?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Koopkriteria */}
        <section id="criteria">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Koopkriteria: waar let je op bij het vergelijken?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Bij het vergelijken van waterontharders zijn er zeven criteria die de kwaliteit en de totale kosten bepalen. Hieronder lichten we elk punt toe.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Capaciteit (liters/dag of grain-equivalents)',
                inhoud:
                  'De capaciteit bepaalt hoeveel water een ontharder kan behandelen vóór regeneratie. In Nederland wordt dit uitgedrukt in liters per dag bij een bepaalde hardheid. In de VS gebruiken fabrikanten "grains per gallon" (gpg) en "grain capacity". Reken: 1 °dH ≈ 17,9 mg CaCO₃/L ≈ 1 gpg. Een gezin van 4 personen in een zone van 18 °dH heeft een ontharder nodig met minimaal 15–20 L harsvolume, wat overeenkomt met ca. 30.000–40.000 grain capaciteit.',
              },
              {
                nr: '2',
                titel: 'Regeneratiefrequentie en -logica',
                inhoud:
                  'Tijdgestuurde ontharders regenereren op vaste momenten (bijv. elke nacht om 02:00), ongeacht het werkelijke waterverbruik. Dit leidt tot 30–50% meer zout- en watergebruik dan nodig. Vraaggestuurde systemen meten het werkelijke verbruik en regenereren alleen wanneer het harsbed daadwerkelijk verzadigd raakt. Kies altijd een vraaggestuurd systeem voor lagere gebruikskosten.',
              },
              {
                nr: '3',
                titel: 'Zoutverbruik',
                inhoud:
                  'Het jaarlijkse zoutverbruik varieert van 60 kg (Kinetico, non-elektrisch vraaggestuurd) tot 220 kg (budget tijdgestuurd model) voor een gezin van 4. Zout kost €10–20 per 25 kg-zak. Over 10 jaar kan dit verschil oplopen tot €500–1.000. Controleer het technisch datasheet: zoek naar "zoutverbruik per regeneratiecyclus" (normaal: 0,5–2 kg) en "regeneratiefrequentie" (normaal: eens per 7–10 dagen voor een gemiddeld gezin).',
              },
              {
                nr: '4',
                titel: 'NSF/ANSI 44 certificering',
                inhoud:
                  'NSF/ANSI 44 is de internationale productstandaard voor residentiële waterontharders. Gecertificeerde systemen zijn getest op harshoeveelheid, zoutefficiëntie, structurele integriteit en materiaalveiligheid. Een NSF 44-gecertificeerde ontharder geeft meer garantie over de kwaliteit dan een niet-gecertificeerd model. Vraag de leverancier naar het certificaatnummer om zelfstandig te verifiëren.',
              },
              {
                nr: '5',
                titel: 'Stroomverbruik',
                inhoud:
                  'De meeste moderne elektrische ontharders verbruiken 5–15 W continu. Dat is €10–25 per jaar. Kinetico-systemen zijn volledig watergedreven (non-elektrisch): geen stroomkosten, geen kwetsbaarheid voor stroomuitval. Voor de meeste gebruikers is het stroomverbruik een klein maar niet onbelangrijk onderdeel van de TCO.',
              },
              {
                nr: '6',
                titel: 'WiFi en smart-bediening',
                inhoud:
                  'Smart-functies zijn aanwezig op premium modellen zoals de BWT Perla: app-notificaties bij laag zoutniveau, verbruiksrapportages, remote regeneratie. Handig voor gezinnen die het systeem willen monitoren zonder er actief mee bezig te zijn. Kinetico en Harvey zijn bewust niet-smart gehouden — hun betrouwbaarheid steunt op eenvoud van mechanische onderdelen.',
              },
              {
                nr: '7',
                titel: 'Single-tank vs. duplex (twin-tank)',
                inhoud:
                  "Een single-tank ontharder levert tijdelijk ongezacht water tijdens de regeneratie (60–90 min, doorgaans &apos;s nachts). Een twin-tank of duplex systeem wisselt af tussen twee harsvaten zodat altijd zacht water beschikbaar is. Twin-tank is duurder maar noodzakelijk voor grote gezinnen, grote huizen of situaties waar continu zacht water vereist is (bijv. koelinstallaties, hospitality).",
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

        {/* 6-modellen vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            6 modellen vergeleken: capaciteit, zout, kosten en garantie
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hieronder vergelijken we zes waterontharders die representatief zijn voor het huidige aanbod in Nederland en België. Prijzen zijn richtprijzen exclusief installatie.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[680px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Model</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Zout/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-center">NSF 44</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Smart</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Garantie</th>
                </tr>
              </thead>
              <tbody>
                {modellen.map((m, i) => (
                  <tr
                    key={m.naam}
                    className={`border-b border-gray-100 ${m.highlight ? 'bg-[#E0F2FE]' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-2.5 px-3 font-medium text-gray-900">
                      {m.naam}
                      {m.highlight && (
                        <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full">Top</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{m.type}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{m.zoutPerJaar}</td>
                    <td className="py-2.5 px-3 text-center">{m.nsf44 ? '✓' : '—'}</td>
                    <td className="py-2.5 px-3 text-center">{m.smart ? '✓' : '—'}</td>
                    <td className="py-2.5 px-3 text-right font-medium text-[#005F8A]">{m.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{m.garantie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-6">
            Aanschafprijzen zijn richtprijzen exclusief installatie (€150–350 via erkend loodgieter). NSF 44 = gecertificeerd door NSF International of equivalent.
          </p>
          <div className="space-y-4">
            {modellen.map(m => (
              <div key={m.naam} className={`rounded-2xl border p-4 ${m.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{m.naam}</h3>
                  <span className="font-bold text-[#005F8A] text-sm">{m.aanschaf}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{m.type} — Stroom: {m.stroomverbruik}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Beste voor:</span> {m.beste_voor}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Zoutloos vs zout */}
        <section id="zoutloos-vs-zout">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Zoutloos vs. ionenwisselaar: het cruciale verschil
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Zoutloze waterontharders worden steeds populairder, maar het is essentieel om het fundamentele verschil te begrijpen voordat je een keuze maakt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#E0F2FE] rounded-xl p-5 border border-[#005F8A]/20">
              <h3 className="font-bold text-[#003F5C] mb-2">Ionenwisselaar (zout)</h3>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                Verwijdert calcium- en magnesiumionen uit het water door ze te vervangen door natriumionen. Het resultaat is chemisch zacht water: de hardheidsionen zijn echt weg. Effectief voor zachte huid, minder zeepgebruik, geen kalkring in het bad, zacht waswater.
              </p>
              <ul className="space-y-1 text-sm">
                <li className="text-green-700 text-xs">✓ Echte ontharding — water is chemisch zacht</li>
                <li className="text-green-700 text-xs">✓ Beschermt alle apparaten en leidingen</li>
                <li className="text-green-700 text-xs">✓ Zacht douche- en waswater</li>
                <li className="text-gray-500 text-xs">− Zout- en waterverbruik</li>
                <li className="text-gray-500 text-xs">− Natrium in drinkwater</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">Zoutloos (TAC)</h3>
              <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                Template Assisted Crystallization (TAC) converteert calciumkristallen naar een vorm die minder aan leidingwanden hecht. De calcium en magnesium zijn nog steeds aanwezig — het water is chemisch nog steeds hard. TAC is leidingbescherming, geen echte ontharding.
              </p>
              <ul className="space-y-1 text-sm">
                <li className="text-green-700 text-xs">✓ Geen zout- of waterverbruik</li>
                <li className="text-green-700 text-xs">✓ Leidingbescherming (minder kalkafzetting)</li>
                <li className="text-gray-500 text-xs">− Water blijft chemisch hard</li>
                <li className="text-gray-500 text-xs">− Geen zachte huid of minder zeepgebruik</li>
                <li className="text-gray-500 text-xs">− Wetenschappelijk bewijs gemengd</li>
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Conclusie:</strong> Als je echt zacht water wilt — voor je huid, haar, was en keukenapparaten — is een ionenwisselaar de enige effectieve keuze. TAC-systemen bieden enige bescherming voor leidingen en de cv-ketel, maar leveren geen zacht water. Meer over de drie zoutloze technologieën lees je op onze{' '}
            <Link href="/waterontharder/zoutloos" className="text-[#005F8A] underline hover:no-underline">
              pagina over zoutloze waterontharders
            </Link>.
          </div>
        </section>

        {/* Wie heeft wat nodig */}
        <section id="wie-wat">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wie heeft welke waterontharder nodig?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            De juiste keuze hangt sterk af van je woon- en gebruikssituatie. Hieronder een praktisch overzicht per profiel.
          </p>
          <div className="space-y-4">
            {wieWatNodig.map(w => (
              <div key={w.profiel} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{w.profiel}</p>
                <p className="text-xs text-[#005F8A] font-medium mb-2">Aanbeveling: {w.aanbeveling}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{w.reden}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5-jaar TCO */}
        <section id="tco">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5-jaar totale kostenvergelijking
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De aanschafprijs is slechts een deel van de totale kosten. Een goedkoop model met hoog zoutverbruik kan over 5 jaar duurder zijn dan een premium ontharder. In de tabel hieronder zijn de kosten gebaseerd op een gemiddeld gezin van 4 personen in een harde waterzone (18 °dH).
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Model/type</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Aanschaf + installatie</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Zout + stroom/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">TCO 5 jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">TCO 10 jaar</th>
                </tr>
              </thead>
              <tbody>
                {tcoTabel.map((r, i) => (
                  <tr
                    key={r.model}
                    className={`border-b border-gray-100 ${i === 3 ? 'bg-[#E0F2FE]/50 font-medium' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-2.5 px-3">{r.model}</td>
                    <td className="py-2.5 px-3 text-right">{r.aanschafInstallatie}</td>
                    <td className="py-2.5 px-3 text-right">{r.zoutElektraJaar}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.tco5jr}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.tco10jr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">
            Indicatieve cijfers voor een gezin van 4 personen, waterhardheid 18 °dH, verbruik 500 L/dag. Osmose als alternatief voor drinkwater — onthardt geen douche- of waswater.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Conclusie:</strong> Een premium twin-tank ontharder is over 10 jaar vergelijkbaar in prijs met een budget model, maar biedt aanzienlijk meer comfort, betrouwbaarheid en lager zoutverbruik. Meer over de kostenstructuur lees je op onze{' '}
            <Link href="/waterontharder/kosten" className="text-[#005F8A] underline hover:no-underline">
              pagina over waterontharder kosten
            </Link>.
          </div>
        </section>

        {/* Wanneer osmose beter is */}
        <section id="wanneer-osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is een osmosefilter een beter alternatief?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Als je naast waterhardheid ook chloor, nitraten, PFAS, microplastics of smaakverbetering als prioriteit hebt, biedt een omgekeerde osmose systeem een bredere aanpak. Een osmosefilter verwijdert 95–99% van alle opgeloste stoffen inclusief kalk, chloor en andere verontreinigingen — maar filtert alleen het drinkwater aan de keukenkraan, niet het douche- of waswater.
          </p>
          <div className="space-y-3 mb-6">
            {[
              'Je woont in een appartement of huurwoning zonder toestemming voor leidingwerk',
              'Je wilt naast kalk ook chloor, nitraten of PFAS verwijderen uit drinkwater',
              'Je volgt een natriumarm dieet (ionenwisselaar voegt natrium toe aan water)',
              'Je hebt een klein huishouden (1–2 personen) waarbij waterontharder-kosten niet opwegen',
            ].map(reden => (
              <div key={reden} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3 bg-white">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <p className="text-sm text-gray-600 leading-relaxed">{reden}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#E0F2FE] to-white border border-[#005F8A]/20 rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">De complete drinkwateroplossing</p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Als smaak, filtratie én hardheid allemaal een rol spelen, overweeg dan een 4-in-1 osmosekraan.
              Deze combineert omgekeerde osmose filtratie met kokend, koud, warm en bruisend water — alles
              uit één kraan. Ideaal voor appartementen en kleine huishoudens.
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
              { href: '/waterontharder/kopen', label: 'Waterontharder kopen: complete gids 2026' },
              { href: '/waterontharder/zoutloos', label: 'Zoutloze waterontharder: werkt het echt?' },
              { href: '/waterontharder/zout', label: 'Waterontharder zout: soorten en verbruik' },
              { href: '/waterontharder/kosten', label: 'Waterontharder kosten: aanschaf en TCO' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen: complete vergelijking' },
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
            Veelgestelde vragen over waterontharder vergelijken
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
