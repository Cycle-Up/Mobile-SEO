import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter keuken installeren: onder aanrecht gids | 2026',
  description:
    'Stap-voor-stap gids voor het installeren van een under-sink waterfilter in de keuken: benodigde ruimte (min 30 cm hoogte), boorwerk voor kraangat, T-stuk.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/keuken-installatie' },
  openGraph: {
    title: 'Waterfilter keuken installeren: onder aanrecht gids',
    description:
      'Complete installatiegids voor een under-sink waterfilter: ruimte, gereedschap, boren, aansluiten op water en afvoer — met stap-voor-stap uitleg.',
    url: 'https://waterfilterplatform.nl/waterfilter/keuken-installatie',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoeveel ruimte heb ik nodig onder het aanrecht voor een waterfilter?',
    answer:
      'Een under-sink waterfilter systeem heeft minimaal 30 cm hoogte nodig om de filterbehuizingen te plaatsen en te kunnen verwisselen. De meeste systemen zijn 35–50 cm hoog inclusief slangen. In de breedte is 20–30 cm nodig. Meet je kast altijd op voor aankoop — leg ook rekening met de watertoevoer, afvoerbuis en het drukvat (indien aanwezig).',
  },
  {
    question: 'Moet ik een gat boren in het aanrecht?',
    answer:
      'Ja, voor een dedicated filterkraan moet je één gat boren van 35–38 mm in het aanrecht of het aanrechtblad. Heeft je aanrecht al een ongebruikt kraangat (bijv. voor een zeepdispenser), dan kun je dat gebruiken. Boor altijd met een geschikte gatenzaag — graniet of composiet vereist een speciaal diamantboor en vakkundig werk.',
  },
  {
    question: 'Kan ik een waterfilter zelf installeren of heb ik een loodgieter nodig?',
    answer:
      'De meeste under-sink koolstof- en osmosefilters zijn ontworpen voor doe-het-zelf installatie. Je hebt geen soldeerwerk of speciale gereedschappen nodig — de aansluitingen zijn push-fit of met schroefkoppelingen. Reken op 30–90 minuten. Voor een kokend water kraan (met elektrische aansluiting) of bij twijfel over leidingwerk is een loodgieter of installateur aan te raden.',
  },
  {
    question: 'Hoe sluit ik het filter aan op de watertoevoer?',
    answer:
      'Je gebruikt een T-stuk koppeling op de bestaande koudwaterleiding. Sluit de watertoevoer af via de stopkraan onder het aanrecht. Verwijder kort het aansluitslangje van de koude kraan, monteer het T-stuk, sluit het filterslangje aan op de T-zijtak en herbevestig het aansluitslangje aan de kraan. Sla de stopkraan voorzichtig open en controleer op lekkage.',
  },
  {
    question: 'Wat is een aanboorkraan en wanneer gebruik ik die?',
    answer:
      'Een aanboorkraan (saddle valve) is een klem die je op de bestaande waterleiding plaatst en voorzichtig doorboort. Dit is een alternatief voor het T-stuk. Het voordeel: je hoeft de waterleiding niet los te koppelen. Het nadeel: aanboorkranen hebben een kleine binnendiameter die de doorstroom kan beperken, en zijn gevoeliger voor lekkage op de lange termijn. T-stukken verdienen de voorkeur.',
  },
  {
    question: 'Hoe sluit ik het filter aan op de afvoer?',
    answer:
      'Bij osmose systemen moet het concentraat (spoelwater) naar de afvoer. Dit doe je met een aanboorklem op de afvoerbuis van de gootsteen (de plastic sifon). Boor een gat van 6–8 mm, monteer de klem en sluit de afvoerslang aan. Zorg dat de afvoerslang een lusboog (high-loop) maakt boven de aansluiting om terugzuigen te voorkomen.',
  },
  {
    question: 'Hoeveel water moet ik flushen na installatie?',
    answer:
      'Na installatie van een koolstoffilter: laat 5–10 minuten water doorlopen om koolstofgruis te spoelen. Na een osmose membraanwisseling: spoel minimaal 10–15 liter voordat je het water drinkt. Bij een nieuw drukvat: laat het eerste vulling doorlopen zonder te drinken.',
  },
];

const gereedschapLijst = [
  { item: 'Verstelbare moersleutel', reden: 'T-stuk aansluiting vastdraaien' },
  { item: 'Gatenzaag 35–38 mm', reden: 'Gat boren in aanrecht voor filterkraan' },
  { item: 'Accuboor of schroefmachine', reden: 'Boren en schroeven' },
  { item: 'Emmer en handdoek', reden: 'Restwater opvangen bij loskoppelen leidingen' },
  { item: 'PTFE-tape (teflon)', reden: 'Afdichten schroefdraadverbindingen' },
  { item: 'Push-fit slangcutter', reden: 'Slangen recht afknippen (voor goede afdichting)' },
  { item: 'Markeerstift', reden: 'Positie filterkraan markeren op aanrecht' },
  { item: 'Waterpas', reden: 'Filterhuizingen recht monteren' },
];

const installatieStappen = [
  {
    stap: '1',
    titel: 'Voorbereiding: meten en plannen',
    beschrijving:
      'Meet de beschikbare ruimte onder het aanrecht: hoogte, breedte en diepte. Controleer waar de koudwaterleiding loopt en waar de afvoerbuis zit. Plan de positie van de filterbehuizingen, het drukvat (indien aanwezig) en de slangen. Schets een eenvoudige opstelling voordat je begint.',
    afbeeldingHint:
      'Bovenaanzicht van onderkast met aangemeten ruimte, koudwaterleiding gemarkeerd in blauw, afvoer in grijs.',
  },
  {
    stap: '2',
    titel: 'Watertoevoer afsluiten',
    beschrijving:
      'Draai de stopkraan onder het aanrecht rechtsom dicht. Open de koude kraan boven het aanrecht om de druk te laten aflopen. Leg een handdoek neer voor eventueel restwater.',
    afbeeldingHint: 'Stopkraan onder aanrecht, pijl wijst naar afsluitmethode rechtsom.',
  },
  {
    stap: '3',
    titel: 'T-stuk monteren op koudwatertoevoer',
    beschrijving:
      'Koppel het aansluitslangje van de koude kraan los. Schroef het T-stuk op de waterleiding-uitgang. Sluit de filterzijtak aan met de meegeleverde slang (meestal 6 mm of 1/4"). Bevestig het aansluitslangje van de kraan terug op de T-doorgangszijde. Wikkel alle schroefdraadverbindingen twee keer met PTFE-tape.',
    afbeeldingHint: 'T-stuk gemonteerd op koudwaterleiding, drie aansluitingen gelabeld: kraan, filter, leiding.',
  },
  {
    stap: '4',
    titel: 'Gat boren voor filterkraan',
    beschrijving:
      'Markeer de positie op het aanrecht — minimaal 10 cm van de hoofdkraan en andere obstakels. Gebruik een gatenzaag van 35–38 mm. Boor bij composiet of natuursteen langzaam met water als koelmiddel. Verwijder het uitgeslagen stuk en maak het gat schoon. Monteer de filterkraan met de meegeleverde afdichtring en borgmoer van onderaf.',
    afbeeldingHint: 'Aanrecht van bovenaf: kruisje markeert boorpositie, cirkel van 35 mm, afstand tot hoofdkraan 10 cm+.',
  },
  {
    stap: '5',
    titel: 'Filterbehuizingen monteren',
    beschrijving:
      'Bevestig de filterhouders op de binnenwand van de onderkast met de meegeleverde schroeven. Zorg dat de houders recht hangen (gebruik een waterpas). Minimale hoogte voor de behuizing: 30 cm. Laat 5–8 cm speling onder de behuizing vrij voor het los- en aanschroeven van de filterpot.',
    afbeeldingHint: 'Zijaanzicht onderkast: twee filterbehuizingen gemonteerd, speling onder aan pijl, afstand aanrecht boven.',
  },
  {
    stap: '6',
    titel: 'Afvoerklem monteren (osmose systemen)',
    beschrijving:
      'Boor een gat van 6–8 mm in de afvoerbuis (plastic sifon). Monteer de aanboorklem stevig vast. Sluit de afvoerslang van het osmosesysteem aan. Maak een high-loop: de afvoerslang moet omhoog lopen tot boven de afvoerklem voordat hij omlaag gaat — dit voorkomt terugzuigen.',
    afbeeldingHint: 'Sifon met aanboorklem, slang die omhoog loopt in een boog (high-loop) voor het terugzuigen vermijdt.',
  },
  {
    stap: '7',
    titel: 'Filters installeren en slangen aansluiten',
    beschrijving:
      'Installeer de filterpatronen in de behuizingen. Sluit alle slangen aan: water-in op de T-stuktak, water-uit naar de filterkraan, afvoer naar de afvoerklem. Controleer of alle push-fit verbindingen volledig zijn ingedrukt (hoor een klik). Trek voorzichtig aan elke slang om afdichting te testen.',
    afbeeldingHint: 'Overzichtsschema van het complete systeem: T-stuk → sediment → koolstof → RO → drukvat → kraan, afvoer apart.',
  },
  {
    stap: '8',
    titel: 'Watertoevoer openen en testen',
    beschrijving:
      'Open de stopkraan langzaam. Loop het systeem na op lekkages bij alle verbindingen. Laat de filterkraan open staan en wacht tot het drukvat gevuld is (15–30 minuten bij RO). Spoel 5–15 liter door voordat je het water drinkt.',
    afbeeldingHint: 'Stopkraan linksomdraaien, systeem onder druk, checklist visuele inspectie op alle verbindingspunten.',
  },
];

export default function WaterfilterKeukenInstallatiePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter keuken installeren: onder aanrecht gids',
          description:
            'Stap-voor-stap installatiegids voor een under-sink waterfilter in de keuken: benodigde ruimte, boorwerk, T-stuk aansluiting, afvoerkoppeling en filterpositie.',
          datePublished: '2025-11-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterfilter/keuken-installatie',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          {
            name: 'Keuken installatie',
            url: 'https://waterfilterplatform.nl/waterfilter/keuken-installatie',
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
            <span>Keuken installatie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter keuken installeren: onder aanrecht gids
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een under-sink waterfilter is de meest discrete en effectieve manier om gefilterd
            drinkwater in huis te halen. De meeste systemen zijn doe-het-zelf te installeren in 30
            tot 90 minuten. In deze gids leggen we stap voor stap uit wat je nodig hebt, hoe je het
            aanrecht boort, het filter aansluit en het systeem in gebruik neemt.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Filter systeem kopen →
            </Link>
            <Link
              href="/waterfilter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterfilter vergelijken
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
              <a href="#benodigde-ruimte" className="hover:underline">
                Benodigde ruimte
              </a>
            </li>
            <li>
              <a href="#gereedschap" className="hover:underline">
                Gereedschap &amp; materiaal
              </a>
            </li>
            <li>
              <a href="#installatie" className="hover:underline">
                Stap-voor-stap installatie
              </a>
            </li>
            <li>
              <a href="#boren" className="hover:underline">
                Kraangat boren
              </a>
            </li>
            <li>
              <a href="#aansluiting" className="hover:underline">
                Water- en afvoer aansluiting
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                Veelgestelde vragen
              </a>
            </li>
          </ol>
        </section>

        {/* Benodigde ruimte */}
        <section id="benodigde-ruimte">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Benodigde ruimte onder het aanrecht
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voordat je een under-sink filter koopt, is het essentieel om te meten. Veel mensen
            onderschatten de benodigde ruimte, vooral bij osmose systemen met een drukvat.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[420px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">
                    Systeemtype
                  </th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">
                    Min. hoogte
                  </th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">
                    Min. breedte
                  </th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">
                    Diepte
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    type: 'Enkelvoudig koolstoffilter',
                    hoogte: '30 cm',
                    breedte: '15 cm',
                    diepte: '15 cm',
                  },
                  {
                    type: '2–3 staps koolstof/sediment',
                    hoogte: '35 cm',
                    breedte: '25 cm',
                    diepte: '15 cm',
                  },
                  {
                    type: 'RO-systeem (4 staps, geen vat)',
                    hoogte: '40 cm',
                    breedte: '25 cm',
                    diepte: '15 cm',
                  },
                  {
                    type: 'RO-systeem met drukvat',
                    hoogte: '45 cm',
                    breedte: '35 cm',
                    diepte: '25 cm',
                  },
                  {
                    type: '4-in-1 boiler systeem',
                    hoogte: '50 cm',
                    breedte: '30 cm',
                    diepte: '30 cm',
                  },
                ].map(r => (
                  <tr key={r.type} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.type}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A]">
                      {r.hoogte}
                    </td>
                    <td className="py-2.5 px-3 text-center">{r.breedte}</td>
                    <td className="py-2.5 px-3 text-right">{r.diepte}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Tel bij de hoogte altijd 5 cm extra op voor slangen en bewegingsruimte bij filterwissel.
            Meten is makkelijker dan retourneren.
          </p>
          <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Let op bij kleine onderkastjes:</strong> keukens met
            een onderkast van 45–50 cm hoog kunnen problemen geven met RO-systemen inclusief drukvat.
            Overweeg een slankere tank of een inline drukloos systeem.
          </div>
        </section>

        {/* Gereedschap */}
        <section id="gereedschap">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Gereedschap en materiaal
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste systemen worden geleverd met slangen, koppelingen en een filtersleutel. Dit
            heb je zelf in huis nodig:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {gereedschapLijst.map(g => (
              <div
                key={g.item}
                className="flex gap-3 items-start border border-gray-100 rounded-xl p-3"
              >
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{g.item}</p>
                  <p className="text-xs text-gray-500">{g.reden}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stap-voor-stap installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap-voor-stap installatie
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Volg de stappen in volgorde. Heb je een osmose systeem met drukvat? Dan zijn alle stappen
            van toepassing. Bij een eenvoudig koolstoffilter sla je stap 6 (afvoer) over.
          </p>
          <div className="space-y-6">
            {installatieStappen.map(s => (
              <div key={s.stap} id={s.stap === '4' ? 'boren' : s.stap === '5' ? 'aansluiting' : undefined}>
                <div className="flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-lg">
                    {s.stap}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{s.titel}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{s.beschrijving}</p>
                    <div className="bg-gray-50 border border-dashed border-gray-200 rounded-xl p-3 text-xs text-gray-500 italic">
                      Afbeelding: {s.afbeeldingHint}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Veelgemaakte fouten */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Veelgemaakte installatiefouten (en hoe je ze vermijdt)
          </h2>
          <div className="space-y-3">
            {[
              {
                fout: 'PTFE-tape vergeten op schroefdraadverbindingen',
                oplossing:
                  'Wikkel alle schroefdraad-aansluitingen twee keer met PTFE-tape. Dit voorkomt langzame druppellekkage die pas na weken zichtbaar wordt.',
              },
              {
                fout: 'Push-fit slang niet volledig ingedrukt',
                oplossing:
                  'Snijd de slang recht af met een snijder. Druk de slang in tot je een klik voelt en trek er daarna aan om afdichting te bevestigen.',
              },
              {
                fout: 'Geen high-loop op de afvoerslang',
                oplossing:
                  'Maak een boog met de afvoerslang die hoger uitkomt dan de aanboorklem op de sifon. Bevestig de boog met een klemmetje of spijker.',
              },
              {
                fout: 'Te weinig spoelen na installatie',
                oplossing:
                  'Nieuw koolstof laat zwarte koolstofgruis los. Spoel minimaal 5 minuten (of 5 liter) voor eerste gebruik. Bij RO: 10–15 liter flushen.',
              },
              {
                fout: 'Filterbehuizing te hoog of te laag gemonteerd',
                oplossing:
                  'Laat voldoende ruimte onder de behuizing voor het los- en aandraaien van de filterpot. Minimaal 5 cm tussen pot-onderkant en kastbodem.',
              },
            ].map(f => (
              <div key={f.fout} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="font-semibold text-amber-900 text-sm mb-1">✗ {f.fout}</p>
                <p className="text-sm text-gray-700">
                  <strong>Oplossing:</strong> {f.oplossing}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* Verdere links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer over waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'De beste under-sink osmosesystemen voor thuis — onafhankelijk vergeleken.',
              },
              {
                href: '/waterfilter/abonnement',
                title: 'Waterfilter abonnement',
                desc: 'Liever installatie en filterwissel uitbesteden? Bekijk de abonnementsmogelijkheden.',
              },
              {
                href: '/kokend-water-kraan/onderhoud',
                title: 'Kokend water kraan onderhoud',
                desc: 'Onderhoudsgids voor kokend water kranen — ontkalken en filters wisselen.',
              },
              {
                href: '/omgekeerde-osmose/zonder-afvalwater',
                title: 'RO zonder afvalwater',
                desc: 'Permeaatpomp systemen die tot 75% minder water verspillen.',
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
            Veelgestelde vragen over waterfilter installatie
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
