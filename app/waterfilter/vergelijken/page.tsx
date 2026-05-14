import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { TrustBar } from '@/components/TrustBar';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter Vergelijken 2026: Complete Gids',
  description:
    'Waterfilter vergelijken: van koolstofblok en waterfilterkan tot osmosefilter en UV. Ontdek welk type waterfilter het beste bij jouw situatie, budget en waterprobleem past.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/vergelijken' },
  openGraph: {
    title: 'Waterfilter Vergelijken 2026: Complete Gids',
    description:
      'Vergelijk alle waterfiltertypes op prijs, wat ze verwijderen, onderhoud en installatiegemak. Met scenario-aanbevelingen voor huurder, gezin en eigenaar.',
    url: 'https://waterfilterplatform.nl/waterfilter/vergelijken',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk waterfilter verwijdert het meeste?',
    answer:
      'Een omgekeerde osmose (RO) filter verwijdert het meeste: 95–99% van alle opgeloste stoffen inclusief zware metalen, nitraten, pesticiden, farmaceutische residuen en microplastics. Een koolstofblokfilter verwijdert chloor, geur en smaak maar geen opgeloste mineralen of zware metalen. UV-filters doden bacteriën en virussen maar verwijderen geen chemische verontreinigingen. Voor de beste waterkwaliteit is een RO-filter of een 4-in-1 kraan met geïntegreerde RO-filtratie de beste keuze.',
  },
  {
    question: 'Wat is het verschil tussen een waterfilterkan en een onderbouw osmosefilter?',
    answer:
      'Een waterfilterkan (bijv. Brita) filtert via actief koolstof en ionenwisseling: effectief voor chloor, kalk en smaak, maar verwijdert geen bacteriën, zware metalen of organische microverontreinigingen. Een onderbouw RO-filter gaat verder: het semi-permeabele membraan houdt 95–99% van alle opgeloste stoffen tegen. Filterkan: aanschaf €20–50, filterwissel €5–10 per maand. RO-filter: aanschaf €150–500, onderhoud €50–120 per jaar. Op jaarbasis zijn de kosten vergelijkbaar; de RO-filter levert aanzienlijk schoner water.',
  },
  {
    question: 'Kan ik een waterfilter installeren in een huurwoning?',
    answer:
      'Ja. Waterfilterkannen en aanrechtfilters vereisen geen installatie — ideaal voor huurders. Onderbouw RO-filters worden aangesloten via een omkeerbaar T-stuk op de koudwaterkraan, zonder permanente aanpassingen. Een 4-in-1 kraan vereist een boorgat in het aanrechtblad; vraag daarvoor toestemming aan uw verhuurder. UV-filters worden inline geplaatst op de waterleiding, wat ook omkeerbaar is.',
  },
  {
    question: 'Welk waterfilter is het goedkoopst op jaarbasis?',
    answer:
      'De goedkoopste optie qua jaarkosten is een waterfilterkan: circa €60–120 per jaar (filterpatronen €5–10/maand). Een koolstofblokfilter onder het aanrecht kost €30–60 per jaar aan filtervervanging na een aanschaf van €50–150. Een RO-filter kost €50–120 per jaar maar filtert aanzienlijk meer verontreinigingen. Kanttekening: vergelijk altijd totale kosten inclusief aanschafprijs gedeeld door de verwachte gebruiksduur.',
  },
  {
    question: 'Verwijdert een waterfilter ook kalk?',
    answer:
      'Dat hangt af van het filtertype. Een koolstofblokfilter verwijdert geen kalk (calcium en magnesium). Een waterfilterkan met ionenwisselaar verwijdert gedeeltelijk kalk — effectief voor smaak, maar niet volledig. Een omgekeerde osmose filter verwijdert 95–99% van kalk en zorgt voor echt zacht water. Als u kalk wilt aanpakken om keukenapparatuur te beschermen, is een RO-filter of waterontharder de meest effectieve oplossing.',
  },
];

const itemListSchema = {
  '@type': 'ItemList',
  name: 'Waterfilter Vergelijken 2026: Complete Gids',
  description: 'Vergelijking van koolstofblokfilter, waterfilterkan, onderbouw RO, 4-in-1 kokend water kraan en UV-filter op prijs, wat ze verwijderen en installatie.',
  numberOfItems: 5,
  itemListElement: [
    {
      '@type': 'ListItem', position: 1,
      item: { '@type': 'Product', name: 'Koolstofblokfilter (under-sink)', description: 'Verwijdert chloor, geur en organische stoffen. Eenvoudige installatie onder het aanrecht.', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '50', highPrice: '150', offerCount: '1' } },
    },
    {
      '@type': 'ListItem', position: 2,
      item: { '@type': 'Product', name: 'Waterfilterkan', description: 'Filtert via actief koolstof en ionenwisseling. Geen installatie nodig.', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '20', highPrice: '80', offerCount: '1' } },
    },
    {
      '@type': 'ListItem', position: 3,
      item: { '@type': 'Product', name: 'Onderbouw omgekeerde osmose (RO)', description: 'Verwijdert 95–99% van alle opgeloste stoffen inclusief zware metalen, nitraten en microplastics.', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '150', highPrice: '500', offerCount: '1' } },
    },
    {
      '@type': 'ListItem', position: 4,
      item: { '@type': 'Product', name: 'Geïntegreerde 4-in-1 kokend water kraan met RO', description: 'Kokend, koud, warm en bruisend gefilterd water uit één kraanpunt met ingebouwde osmose.', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '699', highPrice: '899', offerCount: '1' } },
    },
    {
      '@type': 'ListItem', position: 5,
      item: { '@type': 'Product', name: 'UV-waterfilter', description: 'Doodt bacteriën en virussen via UV-licht. Verwijdert geen chemische verontreinigingen.', offers: { '@type': 'AggregateOffer', priceCurrency: 'EUR', lowPrice: '80', highPrice: '300', offerCount: '1' } },
    },
  ],
};

const filterTypes = [
  {
    naam: 'Koolstofblokfilter (under-sink)',
    prijs: '€ 50 – 150',
    onderhoud: '€ 30 – 60 / jaar',
    verwijdert: ['Chloor', 'Geur & smaak', 'Organische stoffen', 'Gedeeltelijk pesticiden'],
    verwijdertNiet: ['Zware metalen', 'Nitraten', 'Bacteriën', 'Kalk (TDS)'],
    installatie: 'Eenvoudig (T-stuk op koud water)',
    moeilijkheid: 'Laag',
    voetafdruk: 'Klein (onder aanrecht)',
    highlight: false,
    badge: '',
  },
  {
    naam: 'Waterfilterkan (pitcher/jug)',
    prijs: '€ 20 – 80',
    onderhoud: '€ 60 – 120 / jaar',
    verwijdert: ['Chloor', 'Kalk (gedeeltelijk)', 'Zware metalen (gedeeltelijk)', 'Geur & smaak'],
    verwijdertNiet: ['Bacteriën', 'Nitraten', 'Pesticiden (volledig)', 'Farmaceutische residuen'],
    installatie: 'Geen installatie nodig',
    moeilijkheid: 'Geen',
    voetafdruk: 'Op aanrecht of in koelkast',
    highlight: false,
    badge: 'Makkelijkst te gebruiken',
  },
  {
    naam: 'Onderbouw omgekeerde osmose (RO)',
    prijs: '€ 150 – 500',
    onderhoud: '€ 50 – 120 / jaar',
    verwijdert: ['Zware metalen', 'Nitraten & nitriet', 'Pesticiden', 'Farmaceutische residuen', 'Microplastics', 'Kalk (95–99%)', 'Chloor & geur'],
    verwijdertNiet: ['Vluchtige organische stoffen (gedeeltelijk)', 'Bacteriën (enkel met UV-stap)'],
    installatie: 'Matig (T-stuk + sifon + kraantje)',
    moeilijkheid: 'Gemiddeld',
    voetafdruk: 'Onder aanrecht + apart kraantje',
    highlight: false,
    badge: 'Meest compleet',
  },
  {
    naam: 'Aanrecht omgekeerde osmose (countertop RO)',
    prijs: '€ 100 – 350',
    onderhoud: '€ 40 – 100 / jaar',
    verwijdert: ['Zware metalen', 'Nitraten', 'Pesticiden', 'Kalk', 'Chloor & geur'],
    verwijdertNiet: ['Bacteriën (enkel met UV-stap)', 'Vluchtige organische stoffen (beperkt)'],
    installatie: 'Eenvoudig (adapter op kraan)',
    moeilijkheid: 'Laag',
    voetafdruk: 'Op aanrecht (zichtbaar)',
    highlight: false,
    badge: 'Makkelijkst te installeren',
  },
  {
    naam: 'UV-waterfilter',
    prijs: '€ 80 – 250',
    onderhoud: '€ 30 – 80 / jaar (UV-lamp)',
    verwijdert: ['Bacteriën', 'Virussen', 'Schimmels', 'Protozoa'],
    verwijdertNiet: ['Zware metalen', 'Chemische verontreinigingen', 'Kalk', 'Chloor', 'Pesticiden'],
    installatie: 'Matig (inline op waterleiding)',
    moeilijkheid: 'Gemiddeld',
    voetafdruk: 'Klein (inline plaatsing)',
    highlight: false,
    badge: 'Beste voor microbiologische veiligheid',
  },
  {
    naam: 'Geïntegreerde 4-in-1 kokend water kraan',
    prijs: '€ 700 – 1.000',
    onderhoud: '€ 80 – 150 / jaar',
    verwijdert: ['Zware metalen', 'Nitraten', 'Pesticiden', 'Farmaceutische residuen', 'Microplastics', 'Kalk (95–99%)', 'Chloor & geur', 'Sediment'],
    verwijdertNiet: ['Bacteriën (zonder UV-module)', 'Vluchtige organische stoffen (beperkt)'],
    installatie: 'Matig (boortje in aanrechtblad)',
    moeilijkheid: 'Gemiddeld',
    voetafdruk: 'Onder aanrecht + één elegante kraan',
    highlight: true,
    badge: 'Premium alles-in-één',
  },
];

const vergelijkMatrix = [
  { spec: 'Aanschafprijs', koolstof: '€ 50–150', kan: '€ 20–80', roOnderbouw: '€ 150–500', roAanrecht: '€ 100–350', uv: '€ 80–250', vierin1: '€ 700–1.000' },
  { spec: 'Onderhoud/jaar', koolstof: '€ 30–60', kan: '€ 60–120', roOnderbouw: '€ 50–120', roAanrecht: '€ 40–100', uv: '€ 30–80', vierin1: '€ 80–150' },
  { spec: 'Chloor & geur', koolstof: 'Ja', kan: 'Ja', roOnderbouw: 'Ja', roAanrecht: 'Ja', uv: 'Nee', vierin1: 'Ja' },
  { spec: 'Kalk verwijderd', koolstof: 'Nee', kan: 'Gedeeltelijk', roOnderbouw: '95–99%', roAanrecht: '95–99%', uv: 'Nee', vierin1: '95–99%' },
  { spec: 'Zware metalen', koolstof: 'Nee', kan: 'Gedeeltelijk', roOnderbouw: 'Ja', roAanrecht: 'Ja', uv: 'Nee', vierin1: 'Ja' },
  { spec: 'Nitraten', koolstof: 'Nee', kan: 'Nee', roOnderbouw: 'Ja', roAanrecht: 'Ja', uv: 'Nee', vierin1: 'Ja' },
  { spec: 'Bacteriën', koolstof: 'Nee', kan: 'Nee', roOnderbouw: 'Beperkt', roAanrecht: 'Beperkt', uv: 'Ja', vierin1: 'Beperkt' },
  { spec: 'Pesticiden', koolstof: 'Gedeeltelijk', kan: 'Nee', roOnderbouw: 'Ja', roAanrecht: 'Ja', uv: 'Nee', vierin1: 'Ja' },
  { spec: 'Microplastics', koolstof: 'Gedeeltelijk', kan: 'Nee', roOnderbouw: 'Ja', roAanrecht: 'Ja', uv: 'Nee', vierin1: 'Ja' },
  { spec: 'Kokend water', koolstof: 'Nee', kan: 'Nee', roOnderbouw: 'Nee', roAanrecht: 'Nee', uv: 'Nee', vierin1: 'Ja' },
  { spec: 'Installatiegemak', koolstof: 'Eenvoudig', kan: 'Geen', roOnderbouw: 'Gemiddeld', roAanrecht: 'Eenvoudig', uv: 'Gemiddeld', vierin1: 'Gemiddeld' },
  { spec: 'Geschikt huurwoning', koolstof: 'Ja', kan: 'Ja', roOnderbouw: 'Ja', roAanrecht: 'Ja', uv: 'Ja', vierin1: 'Met toestemming' },
];

const scenarios = [
  {
    situatie: 'Huurder in appartement',
    beste: 'Waterfilterkan of aanrecht RO',
    reden: 'Geen installatie nodig (kan) of alleen een adapteraansluiting op de kraan (aanrecht RO). Volledig verplaatsbaar en geen permanente aanpassingen vereist. Voor beste waterkwaliteit zonder gedoe: aanrecht RO-model.',
    link: null,
  },
  {
    situatie: 'Gezin van 4 met hoog verbruik',
    beste: 'Onderbouw RO of 4-in-1 kraan',
    reden: 'Hoog dagelijks waterverbruik (6–10 liter drinken en koken) vraagt om een systeem met grote capaciteit en snelle doorstroom. Een onderbouw RO met druktank (8–12L) of de 4-in-1 kraan voldoen aan dit profiel. Waterfilterkan is te omslachtig voor dagelijks gebruik bij vier personen.',
    link: null,
  },
  {
    situatie: 'Eigenaar met hard water (>15 °dH)',
    beste: '4-in-1 kokend water kraan',
    reden: 'In hardwatergebieden verwijdert het RO-membraan van de 4-in-1 kraan effectief kalk. Dit beschermt tevens de geïntegreerde boiler. Koolstoffilters verwijderen geen kalk. Een waterontharder pakt de kalk ook aan maar filtert geen andere verontreinigingen.',
    link: '/waterhardheid',
  },
  {
    situatie: 'Bezorgd over bacteriën en virussen',
    beste: 'UV-filter (gecombineerd met koolstoffilter)',
    reden: 'UV-desinfectie is de meest effectieve methode tegen bacteriën, virussen en protozoa in leidingwater. Combineer met een koolstofblokfilter voor chloor en smaak. In Nederland is leidingwater microbiologisch veilig, maar een UV-filter biedt extra zekerheid bij oudere leidingen of eigen waterput.',
    link: null,
  },
  {
    situatie: 'Klein budget, snel resultaat',
    beste: 'Waterfilterkan',
    reden: 'Aanschaf €20–50, geen installatie, direct bruikbaar. Effectief voor chloor, smaak en gedeeltelijk kalk. Filtert geen zware metalen of nitraten volledig. Ideaal als tijdelijke oplossing of voor mensen die alleen de chloor- en kalksmaak willen verbeteren zonder grote investering.',
    link: null,
  },
  {
    situatie: 'Kookwater ook filteren & kokend water direct',
    beste: '4-in-1 kokend water kraan',
    reden: 'De 4-in-1 kraan levert direct kokend water (100°C) én gefilterd koud water via RO. Geen waterkoker meer nodig. Ideaal voor gezinnen die zowel drinkwater als kookwater willen filteren én de luxe willen van direct kokend water voor thee, koffie of pasta.',
    link: '/4-in-1-kraan',
  },
];

const veelgemaakteVergissingen = [
  {
    fout: 'Alleen de aanschafprijs vergelijken',
    uitleg:
      'Een goedkoop filter kan op jaarbasis duurder uitvallen dan een kwalitatief systeem als de filterpatronen frequent vervangen moeten worden. Reken altijd de totale eigendomskosten over minimaal 3–5 jaar: aanschaf + filters × jaren. Een waterfilterkan van €30 kost al snel €120 per jaar aan filterpatronen — meer dan de jaarlijkse filterkosten van een onderbouw RO-systeem.',
  },
  {
    fout: 'Filterkosten negeren',
    uitleg:
      'Proprietary filterpatronen van bepaalde merken zijn aanzienlijk duurder dan universele alternatieven. Controleer vóór aanschaf of er goedkopere vervangingsfilters beschikbaar zijn. Sommige systemen met lage aanschafprijs hanteren een businessmodel waarbij de winst op filterkosten wordt gemaakt.',
  },
  {
    fout: 'Aannemen dat alle filters hetzelfde filteren',
    uitleg:
      'Er is een groot verschil tussen filtertypen: een koolstofblokfilter verbetert de smaak, maar verwijdert geen zware metalen of nitraten. Een RO-filter haalt 95–99% van alle opgeloste stoffen weg. Kijk altijd naar de specifieke testcertificaten (NSF/ANSI 58 voor RO, NSF/ANSI 42 voor koolstof) van het systeem dat u overweegt.',
  },
  {
    fout: 'Waterdruk niet checken',
    uitleg:
      'RO-systemen werken optimaal bij een waterdruk van 3–6 bar. Bij lagere druk (< 2,5 bar) daalt de doorstroomsnelheid sterk en neemt het afvalwater toe. In Nederland is de leidingwaterdruk doorgaans voldoende, maar in hogere verdiepingen van appartementen kan de druk lager zijn. Meet de druk vóór aanschaf of kies een systeem met ingebouwde boostpomp.',
  },
  {
    fout: 'Vergeten welk waterprobleem u wilt oplossen',
    uitleg:
      'Begin altijd met de vraag: wat wil ik verwijderen? Chloor en smaak? Dan volstaat een koolstoffilter. Kalk én alle verontreinigingen? Dan hebt u een RO-filter nodig. Bacteriën? Dan is UV de aangewezen technologie. Koop geen duur RO-systeem als u alleen de chloor-smaak van leidingwater wilt verbeteren.',
  },
];

export default function WaterfilterVergelijkenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/waterfilter/vergelijken' },
        ]}
      />
      <SchemaOrg schema={[itemListSchema]} />

      <TrustBar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter Vergelijken 2026: Complete Gids
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Er zijn veel verschillende waterfilters op de markt: van een eenvoudige waterfilterkan tot
            een complete omgekeerde osmose installatie of geïntegreerde 4-in-1 kokend water kraan.
            In deze gids vergelijken we alle belangrijke filtertypen op wat ze verwijderen, prijs,
            onderhoud, installatiegemak en geschiktheid voor uw situatie.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#vergelijkingsmatrix"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar vergelijkingstabel →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Osmose filter kopen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Waterfilters vergelijken: een osmosefilter verwijdert het meest (99%, inclusief kalk en nitraten, €150–500). Een koolstoffilter verbetert smaak en verwijdert chloor (€50–150). Een waterfilterkan is goedkoopst maar filtert minder (€20–80). Voor hard water of maximale zuiverheid is een osmosefilter de beste keuze." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#filtertypen" className="hover:underline">Overzicht filtertypen</a></li>
            <li><a href="#vergelijkingsmatrix" className="hover:underline">Vergelijkingstabel</a></li>
            <li><a href="#scenario" className="hover:underline">Scenario-aanbevelingen</a></li>
            <li><a href="#vergissingen" className="hover:underline">Veelgemaakte vergissingen</a></li>
            <li><a href="#ro-diepgaand" className="hover:underline">Omgekeerde osmose in detail</a></li>
            <li><a href="#vierin1" className="hover:underline">4-in-1 kraan: premium keuze</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Filtertypen overzicht */}
        <section id="filtertypen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke waterfiltertypen zijn er?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Elke filtertechnologie heeft zijn eigen principe, voordelen en beperkingen. Hieronder
            beschrijven we de zes meest gebruikte waterfiltertypes voor thuis, inclusief aanschafprijs,
            wat ze wel en niet verwijderen en de installatiemoeilijkheid.
          </p>
          <div className="space-y-5">
            {filterTypes.map(f => (
              <div
                key={f.naam}
                className={`rounded-2xl border p-5 ${f.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{f.naam}</h3>
                    <p className="text-sm text-gray-500">Installatie: {f.installatie}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-[#005F8A]">{f.prijs}</p>
                    {f.badge && (
                      <span className={`text-xs px-2 py-0.5 rounded-full ${f.highlight ? 'bg-[#005F8A] text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {f.badge}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1.5 text-xs uppercase tracking-wide">Verwijdert</p>
                    <ul className="space-y-0.5">
                      {f.verwijdert.map(v => (
                        <li key={v} className="text-green-700 text-sm flex gap-1.5">
                          <span className="shrink-0">✓</span>{v}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1.5 text-xs uppercase tracking-wide">Verwijdert niet</p>
                    <ul className="space-y-0.5">
                      {f.verwijdertNiet.map(n => (
                        <li key={n} className="text-gray-500 text-sm flex gap-1.5">
                          <span className="shrink-0">−</span>{n}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-gray-600 border-t border-gray-100 pt-2">
                  <span><strong>Onderhoud:</strong> {f.onderhoud}</span>
                  <span><strong>Moeilijkheid:</strong> {f.moeilijkheid}</span>
                  <span><strong>Voetafdruk:</strong> {f.voetafdruk}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijkingsmatrix">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijkingstabel: hoe staan alle filtertypen naast elkaar?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De onderstaande tabel zet alle zes filtertypen naast elkaar op de meest relevante
            criteria voor de consument. Scroll horizontaal op mobiel voor de volledige tabel.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[700px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Criterium</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Koolstof</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">Kan</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">RO onder</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">RO aanrecht</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs">UV</th>
                  <th className="py-2 px-2 font-semibold text-center text-xs bg-[#005F8A]">4-in-1</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkMatrix.map((r, i) => (
                  <tr key={r.spec} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-700 text-xs">{r.spec}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{r.koolstof}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{r.kan}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{r.roOnderbouw}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{r.roAanrecht}</td>
                    <td className="py-2.5 px-2 text-center text-xs text-gray-600">{r.uv}</td>
                    <td className="py-2.5 px-2 text-center text-xs font-medium text-[#003F5C] bg-[#E0F2FE]">{r.vierin1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Indicatieve waarden. Exacte prestaties variëren per merk en model. Vraag altijd om NSF/ANSI testcertificaten.
          </p>
        </section>

        {/* Scenario-aanbevelingen */}
        <section id="scenario">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welk waterfilter past bij uw situatie?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De beste keuze hangt af van uw woonsituatie, gezinsgrootte, het specifieke waterprobleem dat u
            wilt aanpakken en uw budget. Hieronder vindt u concrete aanbevelingen voor zes veelvoorkomende
            situaties.
          </p>
          <div className="space-y-4">
            {scenarios.map(s => (
              <div key={s.situatie} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900">{s.situatie}</p>
                  <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full shrink-0">
                    {s.beste}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{s.reden}</p>
                {s.link && (
                  <Link href={s.link} className="text-xs text-[#005F8A] underline hover:no-underline mt-1.5 inline-block">
                    Meer informatie →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Veelgemaakte vergissingen */}
        <section id="vergissingen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke vergissingen maakt u bij het vergelijken van waterfilters?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Bij het vergelijken van waterfilters worden bepaalde fouten keer op keer gemaakt. Hieronder
            beschrijven we de vijf meest voorkomende vergissingen en hoe u ze vermijdt.
          </p>
          <div className="space-y-4">
            {veelgemaakteVergissingen.map((v, i) => (
              <div key={v.fout} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{v.fout}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.uitleg}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RO diepgaand */}
        <section id="ro-diepgaand">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom is omgekeerde osmose de meest complete waterfiltertechnologie?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Van alle filtertypen biedt omgekeerde osmose (reverse osmosis) de meest uitgebreide
            zuivering. Het werkingsprincipe: water wordt onder druk door een semi-permeabel membraan
            geperst. Deeltjes groter dan 0,0001 micron — waaronder vrijwel alle opgeloste zouten,
            metalen, nitraten en organische verbindingen — worden tegengehouden. Wat overblijft is
            vrijwel puur water met een TDS-waarde van 5–30 ppm (versus 150–500 ppm voor leidingwater).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-[#E0F2FE] rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-3">Voordelen RO-filtratie</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {[
                  '95–99% verwijdering van opgeloste stoffen',
                  'Effectief tegen zware metalen (lood, arseen)',
                  'Verwijdert nitraten, nitriet en pesticiden',
                  'Microplastics en farmaceutische residuen',
                  'Kalkvrij water — geen kalkaanslag meer',
                  'Aantoonbare kwaliteit via TDS-meter te meten',
                ].map(v => (
                  <li key={v} className="flex gap-2">
                    <span className="text-green-600 font-bold shrink-0">✓</span>{v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-3">Aandachtspunten</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {[
                  'Produceert afvalwater (ratio 1:1 tot 1:5)',
                  'Filtert ook gezonde mineralen weg (remineralisatie-filter als oplossing)',
                  'Vereist minimaal 2–3 bar waterdruk',
                  'Membraan vervanging elke 2–3 jaar nodig',
                  'Hogere aanschafprijs dan koolstoffilter',
                ].map(a => (
                  <li key={a} className="flex gap-2">
                    <span className="text-amber-500 font-bold shrink-0">!</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor wie de waterkwaliteit serieus neemt en een langetermijninvestering wil doen, is een
            RO-filter of 4-in-1 kokend water kraan met geïntegreerde RO-filtratie de meest
            doeltreffende keuze. Wilt u meer weten over osmosefilters specifiek? Lees onze pagina{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>{' '}
            voor een uitgebreide uitleg van de technologie.
          </p>
        </section>

        {/* 4-in-1 uitgelicht */}
        <section id="vierin1">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            4-in-1 kokend water kraan: de premium all-in-one keuze
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De <strong>geïntegreerde 4-in-1 kokend water kraan</strong> is de meest complete oplossing
            in deze vergelijking. Het systeem combineert een volledig osmose filtersysteem met een
            geïntegreerde boiler voor direct kokend water, koud gefilterd water, warm water en bij
            sommige modellen ook bruisend water. Alles uit één elegante kraan, geïnstalleerd naast
            uw bestaande keukenkraan.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mb-5">
            <p className="font-semibold text-[#003F5C] mb-3">Wat de 4-in-1 kraan vervangt</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm text-center">
              {[
                { item: 'Waterkoker', besparing: '€ 30–80' },
                { item: 'Brita-kan', besparing: '€ 20–50' },
                { item: 'Osmosekraantje', besparing: '€ 50–100' },
                { item: 'Losse boiler', besparing: '€ 100–200' },
              ].map(r => (
                <div key={r.item} className="bg-white rounded-lg p-3">
                  <p className="font-semibold text-gray-900 text-xs mb-1">{r.item}</p>
                  <p className="text-[#005F8A] font-bold text-xs">Vervanging: {r.besparing}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De hogere aanschafprijs (€700–1.000) wordt deels gecompenseerd door wat het vervangt.
            Bovendien betaalt u maar één keer voor installatie en hebt u slechts één jaarlijkse
            filterwisseling in plaats van meerdere losse systemen. Een 4-in-1 kraan met omgekeerde osmose is het
            meest complete systeem dat momenteel op de Nederlandse markt beschikbaar is.
          </p>
          <div className="bg-white border border-gray-100 rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-gray-900 mb-2">Wanneer de 4-in-1 de beste keuze is:</p>
            <ul className="space-y-1.5">
              {[
                'U wilt zowel drinkwater als kookwater filteren via osmose',
                'U gebruikt dagelijks een waterkoker voor thee, koffie of koken',
                'U woont in een hardwatergebied (>12 °dH) en hebt last van kalkaanslag',
                'U wilt één elegante oplossing in plaats van meerdere apparaten',
                'U bent eigenaar en wilt een langdurige kwaliteitsinvestering doen',
              ].map(r => (
                <li key={r} className="flex gap-2">
                  <span className="text-[#005F8A] font-bold shrink-0">→</span>{r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Kosten diepgaand */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Totale kosten vergelijken: aanschaf plus onderhoud over 3 jaar
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Om een eerlijke vergelijking te maken, moet u de aanschafprijs en de jaarlijkse
            onderhoudskosten samen bekijken. Hieronder een berekening van de totale eigendomskosten
            over 3 jaar voor elk filtertype, uitgaande van middenklasse producten.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Filtertype</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Onderhoud/jaar</th>
                  <th className="py-2.5 px-3 font-semibold text-center">3 jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Waterfilterkan', aanschaf: '€ 40', onderhoud: '€ 90/jaar', totaal: '€ 310', highlight: false },
                  { type: 'Koolstofblokfilter', aanschaf: '€ 100', onderhoud: '€ 45/jaar', totaal: '€ 235', highlight: false },
                  { type: 'Aanrecht RO', aanschaf: '€ 225', onderhoud: '€ 70/jaar', totaal: '€ 435', highlight: false },
                  { type: 'Onderbouw RO', aanschaf: '€ 325', onderhoud: '€ 85/jaar', totaal: '€ 580', highlight: false },
                  { type: 'UV-filter', aanschaf: '€ 165', onderhoud: '€ 55/jaar', totaal: '€ 330', highlight: false },
                  { type: '4-in-1 kraan', aanschaf: '€ 850', onderhoud: '€ 115/jaar', totaal: '€ 1.195', highlight: true },
                ].map((r, i) => (
                  <tr key={r.type} className={r.highlight ? 'bg-[#E0F2FE] font-semibold text-[#003F5C]' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.onderhoud}</td>
                    <td className="py-2.5 px-3 text-center text-xs font-semibold">{r.totaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Kanttekening bij de 4-in-1 kraan:</strong> De 3-jaar
            totaalkosten van €1.195 zijn inclusief aanschaf maar exclusief de vervanging die de kraan
            biedt voor een waterkoker (€30–80), Brita-kan (€20–50) en losse osmosesystemen. Als u
            deze componenten optelt bij de concurrerende systemen, nadert de totale kostenvergelijking
            veel dichter bij elkaar.
          </div>
        </section>

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterfilter', label: 'Waterfilter: overzicht en soorten' },
              { href: '/waterfilter/soorten', label: 'Waterfilter soorten uitgelegd' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen — welk systeem?' },
              { href: '/kennisbank/waterfilter-vergelijken-2026', label: 'Kennisbank: waterfilter vergelijken 2026' },
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

        {/* CTA naar kopen */}
        <section className="bg-gradient-to-br from-[#005F8A] to-[#003F5C] text-white rounded-2xl p-6 md:p-8 text-center">
          <p className="text-blue-200 text-sm mb-1">Klaar met vergelijken?</p>
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Bekijk alle osmosefilters en kokendwaterkranen
          </h2>
          <p className="text-blue-100 mb-5 max-w-lg mx-auto text-sm leading-relaxed">
            Een 4-in-1 kraan met omgekeerde osmose combineert alle technologieën: RO-filtratie,
            direct kokend water, koud gefilterd water en warm water uit één elegante kraan.
            Één jaarlijkse filterwissel.
          </p>
          <Link
            href="/omgekeerde-osmose/kopen"
            className="inline-block bg-white text-[#005F8A] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm md:text-base"
          >
            Osmosefilters vergelijken →
          </Link>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterfilters vergelijken
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
