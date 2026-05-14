import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter abonnement: voor- en nadelen in Nederland | 2026',
  description:
    'Is een waterfilter abonnement in Nederland de moeite waard? Wat zit er in (filterlevering, onderhoud, monitoring), vergelijking met zelf kopen en wanneer een abonnement loont.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/abonnement' },
  openGraph: {
    title: 'Waterfilter abonnement: voor- en nadelen in Nederland',
    description:
      'Complete analyse van waterfilter abonnementen in NL: wat is inbegrepen, kosten, contracten en vergelijking met zelf filters kopen.',
    url: 'https://waterfilterplatform.nl/waterfilter/abonnement',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is een waterfilter abonnement precies?',
    answer:
      'Een waterfilter abonnement is een servicecontract waarbij je maandelijks of jaarlijks een bedrag betaalt voor het gebruik van een watersysteem. Doorgaans zijn filterlevering, periodieke vervanging en soms ook onderhoud en monitoring inbegrepen. Je huurt feitelijk het filtersysteem in plaats van het te kopen.',
  },
  {
    question: 'Wat is inbegrepen bij een typisch waterfilter abonnement?',
    answer:
      'Afhankelijk van de aanbieder kan een abonnement bevatten: (1) automatische filterlevering op schema, (2) installatie en filterwissel door een monteur, (3) online monitoring van filterlevensduur en waterkwaliteit, (4) onderhoud en storingsdienst, en (5) soms de hardware zelf (filter, kraan, systeem). Lees altijd de kleine lettertjes voor wat er wél en niet is inbegrepen.',
  },
  {
    question: 'Is een waterfilter abonnement goedkoper dan zelf filters kopen?',
    answer:
      'Dat hangt af van het systeem en je gebruik. Voor eenvoudige koolstoffilters is zelf kopen bijna altijd goedkoper. Voor complexere systemen (RO, 4-in-1 kranen) kan een abonnement voordeliger uitvallen als je de hardware meefinanciert. Vergelijk altijd de totale kosten over 5 jaar, inclusief aanschaf, filters en servicekosten.',
  },
  {
    question: 'Welke contracttermijnen zijn gebruikelijk?',
    answer:
      'De meeste aanbieders hanteren contracten van 12 tot 36 maanden. Sommige premium aanbieders werken met maandelijks opzegbaar abonnement, maar rekenen dan een hogere maandprijs. Let op de opzegtermijn en automatische verlengingsclausules.',
  },
  {
    question: 'Wat zijn de nadelen van een waterfilter abonnement?',
    answer:
      'De voornaamste nadelen zijn: (1) je bent gebonden aan één leverancier voor filters en service, (2) bij een langdurig contract betaal je ook als je verhuist of het systeem wilt wisselen, (3) de totaalkosten over 5+ jaar zijn vaak hoger dan zelf kopen, (4) de leverancier bepaalt welke filters je krijgt — niet altijd de beste marktoptie.',
  },
  {
    question: 'Voor wie is een waterfilter abonnement het meest geschikt?',
    answer:
      'Abonnementen zijn ideaal voor mensen die geen zorgen willen over filterplanning, technisch onderhoud of aankopen. Denk aan drukke gezinnen, kleine ondernemers met een koffiecorner, en mensen die huren en geen grotere investering willen doen. Wie handig is en tijd heeft om zelf te onderhouden, kiest beter voor aankoop.',
  },
  {
    question: 'Kan ik een bestaand systeem omzetten naar een abonnement?',
    answer:
      'Sommige aanbieders bieden een serviceabonnement voor bestaande systemen aan — los van hardware. Dat dekt filterlevering en/of onderhoud. Dit is financieel interessant als het systeem al is afbetaald en je de gemakvoordelen wil behouden.',
  },
];

const vergelijkingData = [
  {
    aspect: 'Maandelijkse kosten',
    abonnement: '€ 12–35/maand',
    selfService: '€ 4–12/maand',
    winnaar: 'self',
  },
  {
    aspect: 'Opstartkosten',
    abonnement: '€ 0–99 (installatie)',
    selfService: '€ 150–800 (systeem)',
    winnaar: 'abo',
  },
  {
    aspect: 'Filterplanning',
    abonnement: 'Automatisch',
    selfService: 'Zelf bijhouden',
    winnaar: 'abo',
  },
  {
    aspect: 'Onderhoud',
    abonnement: 'Inbegrepen (vaak)',
    selfService: 'Zelf doen of betalen',
    winnaar: 'abo',
  },
  {
    aspect: 'Flexibiliteit',
    abonnement: 'Beperkt (contract)',
    selfService: 'Volledig vrij',
    winnaar: 'self',
  },
  {
    aspect: 'Totaalkosten 5 jaar',
    abonnement: '€ 720–2.100',
    selfService: '€ 450–1.200',
    winnaar: 'self',
  },
  {
    aspect: 'Filterkeuze',
    abonnement: 'Voorgeschreven',
    selfService: 'Vrij kiezen',
    winnaar: 'self',
  },
  {
    aspect: 'Bij verhuizing',
    abonnement: 'Contract loopt door',
    selfService: 'Systeem mee of verkopen',
    winnaar: 'self',
  },
];

const inclusief = [
  {
    item: 'Automatische filterlevering',
    uitleg:
      'Filters worden op schema thuisbezorgd — geen gedoe met nabestellen of in de winkel zoeken.',
    typisch: true,
  },
  {
    item: 'Filterwissel door monteur',
    uitleg:
      'Een gecertificeerde monteur wisselt de filters. Handig maar niet altijd inbegrepen in basisplannen.',
    typisch: false,
  },
  {
    item: 'Kwaliteitsmonitoring',
    uitleg:
      'Sensoren of periodieke tests meten de waterkwaliteit en filterlevensduur. Meldingen per app.',
    typisch: false,
  },
  {
    item: 'Storingsdienst',
    uitleg:
      'Bij lekkage of storing neemt een monteur contact op. Responstijd varieert per aanbieder.',
    typisch: false,
  },
  {
    item: 'Hardware (systeem)',
    uitleg:
      'Bij all-in-abonnementen is ook het filtersysteem of de kraan inbegrepen in de maandprijs.',
    typisch: false,
  },
  {
    item: 'Advies en waterkwaliteitsrapport',
    uitleg:
      'Sommige premium aanbieders sturen jaarlijks een rapport over jouw waterkwaliteit en verbruik.',
    typisch: false,
  },
];

export default function WaterfilterAbonnementPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter abonnement: voor- en nadelen in Nederland',
          description:
            'Analyse van waterfilter abonnementen in Nederland: wat is inbegrepen, kostenvergelijking, contracttermijnen en voor wie een abonnement de beste keuze is.',
          datePublished: '2025-10-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterfilter/abonnement',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          {
            name: 'Abonnement',
            url: 'https://waterfilterplatform.nl/waterfilter/abonnement',
          },
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
            <Link href="/waterfilter" className="hover:text-[#005F8A]">
              Waterfilter
            </Link>
            <span className="mx-2">/</span>
            <span>Abonnement</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter abonnement: voor- en nadelen
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Steeds meer aanbieders in Nederland bieden waterfilter abonnementen aan: je betaalt
            maandelijks en ontvangt filters automatisch aan de deur. Maar is dit echt voordeliger
            dan zelf filters kopen? En wat zit er precies in? Op deze pagina zetten we de voor- en
            nadelen eerlijk naast elkaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Filter zelf kopen →
            </Link>
            <Link
              href="/waterfilter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle waterfilters vergelijken
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
              <a href="#wat-is-inbegrepen" className="hover:underline">
                Wat is inbegrepen?
              </a>
            </li>
            <li>
              <a href="#kostenvergelijking" className="hover:underline">
                Kosten: abo vs zelf kopen
              </a>
            </li>
            <li>
              <a href="#wanneer-loont" className="hover:underline">
                Wanneer loont een abonnement?
              </a>
            </li>
            <li>
              <a href="#contracten" className="hover:underline">
                Contracttermijnen
              </a>
            </li>
            <li>
              <a href="#voor-wie" className="hover:underline">
                Voor wie is het geschikt?
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                Veelgestelde vragen
              </a>
            </li>
          </ol>
        </section>

        {/* Wat is een waterfilter abonnement */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat is een waterfilter abonnement?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterfilter abonnement is een servicemodel waarbij je maandelijks of jaarlijks een
            vaste vergoeding betaalt voor het gebruik van een watersysteem. In de meest uitgebreide
            vorm levert de aanbieder de hardware, installeert alles, wisselt periodiek de filters en
            houdt de waterkwaliteit in de gaten — alles inclusief.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Abonnementen zijn in Nederland populairder geworden door de opkomst van
            kokend-water-kraan-aanbieders die dit model hanteren, en door specialisten op het gebied
            van kantoorwatercoolers die het model nu ook aanbieden voor particulieren.
          </p>
        </section>

        {/* Wat is inbegrepen */}
        <section id="wat-is-inbegrepen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat is inbegrepen? (en wat niet)
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet elk abonnement bevat hetzelfde. Hieronder een overzicht van wat je kunt
            verwachten, met een indicatie of het typisch inbegrepen is in basisplannen.
          </p>
          <div className="space-y-3">
            {inclusief.map(item => (
              <div
                key={item.item}
                className="flex gap-3 items-start border border-gray-100 rounded-xl p-4"
              >
                <span
                  className={`font-bold text-lg shrink-0 mt-0.5 ${item.typisch ? 'text-green-600' : 'text-gray-300'}`}
                >
                  {item.typisch ? '✓' : '○'}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-gray-900 text-sm">{item.item}</p>
                    {item.typisch ? (
                      <span className="text-xs bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full">
                        Standaard
                      </span>
                    ) : (
                      <span className="text-xs bg-gray-50 text-gray-500 border border-gray-100 px-2 py-0.5 rounded-full">
                        Premium
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.uitleg}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kostenvergelijking */}
        <section id="kostenvergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Kosten: abonnement vs zelf kopen
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De grote vraag: is een abonnement goedkoper? Het antwoord hangt af van welk systeem je
            gebruikt en hoelang je het bijhoudt. Onderstaande tabel vergelijkt de twee modellen op
            de meest relevante aspecten.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Aspect</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Abonnement</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Zelf kopen</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingData.map((r, i) => (
                  <tr key={r.aspect} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.aspect}</td>
                    <td
                      className={`py-2.5 px-3 text-center text-sm ${r.winnaar === 'abo' ? 'font-semibold text-green-700' : 'text-gray-600'}`}
                    >
                      {r.abonnement}
                    </td>
                    <td
                      className={`py-2.5 px-3 text-center text-sm ${r.winnaar === 'self' ? 'font-semibold text-green-700' : 'text-gray-600'}`}
                    >
                      {r.selfService}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Kosten zijn richtlijnen voor een gemiddeld under-sink koolstof- of osmosesysteem voor
            een gezin van 2–4 personen. Werkelijke kosten variëren per aanbieder en systeem.
          </p>
        </section>

        {/* Wanneer loont */}
        <section id="wanneer-loont">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer loont een waterfilter abonnement?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een abonnement is financieel interessanter in specifieke situaties:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Je wilt geen grote investering vooraf',
                tekst:
                  'Bij een all-in-abonnement is de hardware doorgaans inbegrepen of meegefinancierd. Ideaal als je €400+ aanschaf liever spreidt.',
              },
              {
                titel: 'Je vergeet al snel filters te vervangen',
                tekst:
                  'Automatische levering voorkomt dat je maanden te laat bent met filterwissels — wat de waterkwaliteit en de levensduur van het systeem schaadt.',
              },
              {
                titel: 'Je huurt en wil niks kopen',
                tekst:
                  'In een huurwoning is een abonnement praktischer: bij verhuizing sluit je het abonnement (na contracttermijn) en neem je niets mee.',
              },
              {
                titel: 'Je hebt technisch weinig zin of tijd',
                tekst:
                  'Als filterwissel of onderhoud inbegrepen is, hoef je nooit zelf te sleutelen. Sommige premium diensten sturen proactief een monteur.',
              },
            ].map(s => (
              <div key={s.titel} className="flex gap-3 items-start">
                <span className="text-green-600 font-bold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{s.titel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Aan de andere kant zijn er situaties waarbij zelf kopen duidelijk voordeliger is:
          </p>
          <div className="space-y-3 mt-3">
            {[
              {
                titel: 'Je bent handig en doet onderhoud zelf',
                tekst:
                  'Als je bereid bent jaarlijks filters te wisselen, bespaar je op de lange termijn honderden euro\'s.',
              },
              {
                titel: 'Je wil vrijheid in filtermerken',
                tekst:
                  'Met een eigen systeem kies je de beste of goedkoopste vervangingsfilters op de markt — niet wat de aanbieder dicteert.',
              },
              {
                titel: 'Je woont al jaren op hetzelfde adres',
                tekst:
                  'Over 5–7 jaar is zelf kopen doorgaans €500–€900 goedkoper dan een doorlopend abonnement.',
              },
            ].map(s => (
              <div key={s.titel} className="flex gap-3 items-start">
                <span className="text-amber-500 font-bold text-lg mt-0.5 shrink-0">!</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{s.titel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contracttermijnen */}
        <section id="contracten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Contracttermijnen: waar je op moet letten
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Lees contracten zorgvuldig. Dit zijn de meest voorkomende valkuilen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                punt: 'Automatische verlenging',
                uitleg:
                  'Veel contracten verlengen stilzwijgend met 12 maanden. Zet een herinnering 2–3 maanden voor het einde.',
              },
              {
                punt: 'Opzegtermijn',
                uitleg:
                  'Veelgebruikte opzegtermijn is 1–3 maanden. Te laat opzeggen kost je dus al snel een extra jaar.',
              },
              {
                punt: 'Tussentijds opzeggen',
                uitleg:
                  'Bij verhuizing of financiële redenen is tussentijds opzeggen vaak niet mogelijk of kost boete.',
              },
              {
                punt: 'Eigendomsrecht hardware',
                uitleg:
                  'Bij sommige all-in contracten blijft het systeem eigendom van de aanbieder. Bij opzegging moet je het teruggeven.',
              },
              {
                punt: 'Prijsindexering',
                uitleg:
                  'Let op clausules die de maandprijs jaarlijks laten stijgen met inflatie (CBS-indexatie).',
              },
              {
                punt: 'Minimale looptijd',
                uitleg:
                  'De meeste contracten hebben een minimale looptijd van 12–36 maanden. Maandelijks opzegbaar is zeldzamer en duurder.',
              },
            ].map(p => (
              <div key={p.punt} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="font-semibold text-amber-900 text-sm mb-1">{p.punt}</p>
                <p className="text-sm text-gray-700">{p.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Voor wie */}
        <section id="voor-wie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Voor wie is een waterfilter abonnement geschikt?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                profiel: 'Drukke gezinnen',
                beschrijving:
                  'Geen tijd voor bijhouden van filterschema\'s. Automatische levering neemt die zorg weg.',
              },
              {
                profiel: 'Huurders',
                beschrijving:
                  'Geen grote investering, geen meeneemprobleem bij verhuizing na afloop contract.',
              },
              {
                profiel: 'Kleine ondernemers',
                beschrijving:
                  'Waterfilters voor kantoor of koffiecorner op één factuur — makkelijk te verwerken als zakelijke kostenpost.',
              },
              {
                profiel: 'Technisch minder handige gebruikers',
                beschrijving:
                  'Wie liever een monteur laat komen dan zelf sleutelt, profiteert van de servicedienst.',
              },
            ].map(p => (
              <div key={p.profiel} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{p.profiel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{p.beschrijving}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Alternatief:</strong> wil je de gemakken van
            automatische filterlevering zonder langdurig contract? Sommige webshops bieden een
            filterabonnementsservice aan waarbij je filters op schema ontvangt maar geen contract
            hebt voor de hardware. Bekijk ook onze pagina{' '}
            <Link
              href="/omgekeerde-osmose/kopen"
              className="text-[#005F8A] underline hover:no-underline"
            >
              osmose filter kopen
            </Link>{' '}
            voor de beste standalone systemen.
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
                desc: 'De beste RO-systemen om zelf te kopen — onafhankelijke vergelijking.',
              },
              {
                href: '/waterfilter/keuken-installatie',
                title: 'Waterfilter keuken installeren',
                desc: 'Stap-voor-stap installatiegids voor under-sink waterfilters.',
              },
              {
                href: '/waterfilter',
                title: 'Alle waterfilters',
                desc: 'Vergelijkingsoverzicht van alle filtertypes voor thuisgebruik.',
              },
              {
                href: '/kokend-water-kraan/onderhoud',
                title: 'Kokend water kraan onderhoud',
                desc: 'Hoe je je kraan optimaal onderhoudt zonder duur servicecontract.',
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
            Veelgestelde vragen over waterfilter abonnementen
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
