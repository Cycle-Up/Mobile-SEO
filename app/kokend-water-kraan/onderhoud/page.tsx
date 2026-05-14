import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kokend water kraan onderhoud: schoonmaken en ontkalken | 2026',
  description:
    'Stap-voor-stap gids voor onderhoud van je kokend water kraan: uitloop schoonmaken, interne boiler ontkalken, filter en membraan vervangen en onderhoudsfrequentie per hardheidszone.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/onderhoud' },
  openGraph: {
    title: 'Kokend water kraan onderhoud: schoonmaken en ontkalken',
    description:
      'Alles over het onderhouden van je kokend water kraan: reinigen, ontkalken, filters wisselen en onderhoudsschema per regio.',
    url: 'https://waterfilterplatform.nl/kokend-water-kraan/onderhoud',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe vaak moet ik mijn kokend water kraan ontkalken?',
    answer:
      'In harde watergebieden (boven 15 °dH, zoals Zuid-Holland en Limburg) is ontkalken elke 3 maanden aan te raden. In zachte watergebieden (onder 8 °dH, zoals Drenthe en Groningen) volstaat twee keer per jaar. Raadpleeg onze waterhardheid-kaart voor jouw regio.',
  },
  {
    question: 'Wat is de beste manier om de uitloop te reinigen?',
    answer:
      'Dompel de uitloop 20–30 minuten onder in een mengsel van gelijke delen witte azijn en water. Gebruik daarna een zachte borstel om eventuele kalkafzetting los te maken. Spoel grondig na met schoon water. Vervang azijn nooit door agressieve reinigingsmiddelen — die kunnen kunststofonderdelen beschadigen.',
  },
  {
    question: 'Hoe weet ik wanneer het filter aan vervanging toe is?',
    answer:
      'De meeste kokend water kranen hebben een filterindicator of sturen een melding via de app. Zonder indicator: vervang koolstoffilters elke 6 maanden, RO-membranen elke 2 jaar. Merkbare smaakverandering of langzamere doorstroom zijn ook signalen dat het filter vervangen moet worden.',
  },
  {
    question: 'Kan ik de boiler van een kokend water kraan zelf schoonmaken?',
    answer:
      'Voor de externe reiniging: ja. De interne boiler ontkalken doe je via de onderhoudsmodus (raadpleeg de handleiding). Voor het demonteren van de boiler — bijvoorbeeld bij ernstige kalkaanslag — is een erkende installateur aanbevolen, want verkeerde herinstallatie kan leiden tot lekkage of brandgevaar.',
  },
  {
    question: 'Welke filters heeft een kokend water kraan en hoe vaak worden die gewisseld?',
    answer:
      'Een typische kokend water kraan met filterfunctie heeft een sedimentfilter (6 maanden), een koolstoffilter (6–12 maanden) en optioneel een RO-membraan (2–3 jaar). Sommige 4-in-1 systemen combineren alles in één jaarlijkse filterwissel.',
  },
  {
    question: 'Wat kost jaarlijks onderhoud van een kokend water kraan?',
    answer:
      'Reken op €40–€120 per jaar voor filtervervanging, afhankelijk van het systeem en je waterhardheidsniveau. Een professionele jaarlijkse servicebeurt kost €50–€100 extra maar is doorgaans niet verplicht bij regelmatig eigenaaronderhoud.',
  },
  {
    question: 'Mag ik een kokend water kraan ook ontkalken met citroenzuur?',
    answer:
      'Ja, citroenzuuroplossing (10–15 gram per liter water) werkt uitstekend en is minder agressief dan industriële ontkalkers. Volg altijd de instructies van de fabrikant voor de juiste dosering en spoelprocedure om schade aan rubbers en afdichtingen te voorkomen.',
  },
];

const hardheidszones = [
  {
    zone: 'Zeer zacht (< 5 °dH)',
    regio: 'Drenthe, Groningen, delen van Friesland',
    ontkalken: '2× per jaar',
    filter: '12 maanden',
    membraan: '3 jaar',
  },
  {
    zone: 'Zacht (5–10 °dH)',
    regio: 'Utrecht, Gelderland (oost), Noord-Brabant (west)',
    ontkalken: '3× per jaar',
    filter: '9 maanden',
    membraan: '2–3 jaar',
  },
  {
    zone: 'Matig hard (10–15 °dH)',
    regio: 'Noord-Holland, Overijssel, Zeeland',
    ontkalken: '4× per jaar',
    filter: '6 maanden',
    membraan: '2 jaar',
  },
  {
    zone: 'Hard (15–20 °dH)',
    regio: 'Zuid-Holland, Noord-Brabant (oost)',
    ontkalken: 'Elke 2 maanden',
    filter: '4–6 maanden',
    membraan: '18 maanden',
  },
  {
    zone: 'Zeer hard (> 20 °dH)',
    regio: 'Limburg, delen van Zeeland',
    ontkalken: 'Maandelijks',
    filter: '3–4 maanden',
    membraan: '12 maanden',
  },
];

const onderhoudsStappen = [
  {
    stap: '1',
    titel: 'Uitloop schoonmaken',
    beschrijving:
      'Verwijder de uitloop of schroefdop. Dompel onder in 50% witte azijn, 50% water gedurende 30 minuten. Borstel los met een zachte rager. Spoel af onder de kraan.',
    frequentie: 'Maandelijks',
  },
  {
    stap: '2',
    titel: 'Boiler extern afspoelen',
    beschrijving:
      'Veeg de buitenkant van de boiler af met een vochtige doek. Controleer visueel op kalkafzetting rond aansluitingen en buis. Droog goed na.',
    frequentie: 'Kwartaal',
  },
  {
    stap: '3',
    titel: 'Interne boiler ontkalken',
    beschrijving:
      'Activeer de onderhoudsmodus via het bedieningspaneel of app. Voer de ontkalkingscyclus uit met de meegeleverde ontkalkingstabletten of goedgekeurde oplossing. Spoelen duurt 15–30 minuten.',
    frequentie: 'Zie hardheidstabel',
  },
  {
    stap: '4',
    titel: 'Sediment- en koolstoffilter wisselen',
    beschrijving:
      'Sluit de watertoevoer af. Draai de filterbehuizing open (sleutel meegeleverd). Verwijder oud patroon, spoel de behuizing, installeer nieuw patroon. Draai dicht en open watertoevoer voorzichtig.',
    frequentie: '6–12 maanden',
  },
  {
    stap: '5',
    titel: 'RO-membraan vervangen (indien aanwezig)',
    beschrijving:
      'Sluit water- en stoomtoevoer af. Laat het systeem drukvrij worden. Verwijder de membraanbehuizing, trek oud membraan eruit, schuif nieuw membraan voorzichtig in. Sluit alles, maak systeem natte start.',
    frequentie: '2–3 jaar',
  },
  {
    stap: '6',
    titel: 'Systeem spoelen na filterwissel',
    beschrijving:
      'Na elke filterwissel: laat 3–5 liter water doorlopen voor gebruik. Bij RO-membraanwissel minimaal 10 liter flushen. Dit verwijdert kool- en filterresten uit het nieuwe patroon.',
    frequentie: 'Na elke wissel',
  },
];

export default function KokendWaterKraanOnderhoudPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kokend water kraan onderhoud: schoonmaken en ontkalken',
          description:
            'Stap-voor-stap gids voor het onderhoud van je kokend water kraan: uitloop reinigen, boiler ontkalken, filter en membraan vervangen en onderhoudsfrequentie per waterhardheidszone.',
          datePublished: '2025-09-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/kokend-water-kraan/onderhoud',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          {
            name: 'Onderhoud',
            url: 'https://waterfilterplatform.nl/kokend-water-kraan/onderhoud',
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
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">
              Kokend water kraan
            </Link>
            <span className="mx-2">/</span>
            <span>Onderhoud</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan onderhoud: schoonmaken en ontkalken
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een kokend water kraan presteert jaren lang optimaal — mits je hem regelmatig
            onderhoudt. Kalk is de grootste vijand: het tast de boiler aan, verstopt de uitloop en
            verlengt de opwarmtijd. In deze gids lees je precies hoe je de uitloop schoonmaakt, de
            interne boiler ontkalkt, filters en membranen op tijd vervangt en welk schema past bij
            jouw waterhardheidszone.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Filter systeem kopen →
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Mijn waterhardheid checken
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
              <a href="#stap-voor-stap" className="hover:underline">
                Stap-voor-stap onderhoud
              </a>
            </li>
            <li>
              <a href="#uitloop" className="hover:underline">
                Uitloop schoonmaken
              </a>
            </li>
            <li>
              <a href="#boiler" className="hover:underline">
                Boiler ontkalken
              </a>
            </li>
            <li>
              <a href="#filters" className="hover:underline">
                Filter &amp; membraan vervangen
              </a>
            </li>
            <li>
              <a href="#hardheidszone" className="hover:underline">
                Schema per hardheidszone
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                Veelgestelde vragen
              </a>
            </li>
          </ol>
        </section>

        {/* Waarom onderhoud belangrijk is */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom regelmatig onderhoud onmisbaar is
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Leidingwater in Nederland bevat opgeloste kalkzouten (calcium en magnesium). Elke keer
            dat water wordt verhit, slaan deze zouten neer als kalkafzetting. In een kokend water
            kraan heeft de interne boiler — die water op 100°C houdt — continu te maken met dit
            proces. Zonder onderhoud bouwt kalk zich op in de boiler, op het verwarmingselement en
            in de uitloop.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {[
              {
                gevolg: 'Verminderde efficiëntie',
                uitleg:
                  '1 mm kalk op een verwarmingselement verhoogt het energieverbruik met 5–15%.',
              },
              {
                gevolg: 'Kortere levensduur',
                uitleg:
                  'Kalk versnelt corrosie van metalen onderdelen en kan de boiler na 2–3 jaar beschadigen.',
              },
              {
                gevolg: 'Slechtere smaak',
                uitleg:
                  'Kalkresten en verouderde filters geven een bittere of metaalachtige nasmaak aan het water.',
              },
            ].map(item => (
              <div key={item.gevolg} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="font-semibold text-amber-900 text-sm mb-1">{item.gevolg}</p>
                <p className="text-sm text-gray-700">{item.uitleg}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            De oplossing is simpel: een regelmatig, preventief onderhoudsschema — afgestemd op de
            waterhardheid in jouw gemeente.
          </p>
        </section>

        {/* Stap-voor-stap onderhoud */}
        <section id="stap-voor-stap">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap-voor-stap onderhoud overzicht
          </h2>
          <div className="space-y-4">
            {onderhoudsStappen.map(s => (
              <div key={s.stap} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
                  {s.stap}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline gap-2 mb-1">
                    <p className="font-semibold text-gray-900">{s.titel}</p>
                    <span className="text-xs text-[#005F8A] font-medium shrink-0 bg-[#E0F2FE] px-2 py-0.5 rounded-full">
                      {s.frequentie}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Uitloop schoonmaken */}
        <section id="uitloop">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Uitloop schoonmaken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De uitloop is het meest zichtbare onderdeel en ook het meest vatbaar voor
            kalkafzetting. Witachtige of grijze vlekjes op en rondom de uitloop zijn kalkresten.
            Witte vlekken bínnen de uitloopopening wijzen op een verstopt gaatjesrooster.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mb-4">
            <p className="font-semibold text-[#003F5C] mb-3">Wat je nodig hebt</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Witte azijn of citroenzuuroplossing (10 g/liter)</li>
              <li>✓ Klein kommetje of schroefkop-azijnzakje</li>
              <li>✓ Zachte rager of oud tandenborstel</li>
              <li>✓ Schone microvezeldoek</li>
            </ul>
          </div>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="font-bold text-[#005F8A] shrink-0">1.</span>
              <span>
                Schakel de kokend water kraan uit via het bedieningspaneel en laat het resterende
                heet water in de uitloop afkoelen (minimaal 10 minuten).
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#005F8A] shrink-0">2.</span>
              <span>
                Verwijder de uitloop of het uitloopgaatjesrooster als die losneembaar zijn (zie
                handleiding van je merk). Sommige modellen hebben een eenvoudig kliksysteem.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#005F8A] shrink-0">3.</span>
              <span>
                Dompel het onderdeel 20–30 minuten onder in een mengsel van gelijke delen witte
                azijn en water. Voor hardnekkige kalk: gebruik onverdunde azijn.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#005F8A] shrink-0">4.</span>
              <span>
                Borstel voorzichtig los met de rager. Let op de kleine gaatjes in het rooster —
                een tandenstoker helpt om verstopte gaatjes vrij te maken.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#005F8A] shrink-0">5.</span>
              <span>
                Spoel grondig af onder de kraan en droog na met een microvezeldoek. Monteer de
                uitloop terug.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[#005F8A] shrink-0">6.</span>
              <span>
                Schakel de kraan in en laat 0,5 liter water doorlopen om eventuele azijnresten te
                verwijderen.
              </span>
            </li>
          </ol>
          <div className="mt-4 bg-red-50 border border-red-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-red-900">Let op:</strong> gebruik geen schuurmiddelen, staalwol
            of agressieve reinigingssprays op de uitloop. Deze kunnen de coating beschadigen en
            roestvorming versnellen.
          </div>
        </section>

        {/* Boiler ontkalken */}
        <section id="boiler">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Interne boiler ontkalken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De interne boiler is het hart van je kokend water kraan en de plek waar kalk zich het
            snelst opstapelt. De meeste merken (Quooker, Grohe Red, InSinkErator, etc.) hebben een
            ingebouwde ontkalkingsprocedure in het menu of via een app. Hieronder de algemene
            werkwijze; raadpleeg altijd ook de handleiding van jouw model.
          </p>
          <div className="space-y-3">
            {[
              {
                fase: 'Voorbereiding',
                tekst:
                  'Zet een geschikte opvangbak (minimaal 2 liter) onder de kraan. Haal de watertoevoer naar het systeem niet dicht tenzij de handleiding dit expliciet vraagt.',
              },
              {
                fase: 'Ontkalkingsmiddel toevoegen',
                tekst:
                  'Gebruik de ontkalkingstablet of vloeistof die de fabrikant aanbeveelt. Generieke citroenzuuroplossing (10–15 g/liter) werkt voor de meeste systemen; controleer de garantievoorwaarden.',
              },
              {
                fase: 'Ontkalkingscyclus starten',
                tekst:
                  'Activeer de onderhoudsmodus via het display of de bijbehorende app. De cyclus duurt doorgaans 15–30 minuten. Het systeem voert automatisch ontkalkingsoplossing door de boiler.',
              },
              {
                fase: 'Spoelen',
                tekst:
                  'Na de ontkalkingscyclus volgt een automatische of handmatige spoelcyclus van 2–3 minuten. Laat daarna nog 1–2 liter water doorlopen voordat je de kraan weer normaal gebruikt.',
              },
              {
                fase: 'Controle',
                tekst:
                  'Bij ernstige kalkvorming kan de cyclus herhaald worden. Verbeterde doorstroom en snellere opwarmtijd zijn tekenen dat de ontkalking succesvol was.',
              },
            ].map(f => (
              <div key={f.fase} className="flex gap-3 items-start">
                <span className="text-[#005F8A] font-bold text-lg mt-0.5 shrink-0">⚙</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{f.fase}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Filter & membraan vervangen */}
        <section id="filters">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filter en membraan vervangen
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een kokend water kraan met ingebouwd filtersysteem (koolstoffilter, RO of beide)
            vereist periodieke filtervervanging. Vervang je filters te laat, dan neemt de
            filterkwaliteit af en kun je zelfs bacteriëgroei riskeren in een verouderd koolstoffilter.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Component</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-center">
                    Vervangingsinterval
                  </th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Signalen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    comp: 'Sedimentfilter (5 µm)',
                    interval: '3–6 maanden',
                    signaal: 'Bruinkleuring, verminderde doorstroom',
                  },
                  {
                    comp: 'Koolstoffilter (pre)',
                    interval: '6 maanden',
                    signaal: 'Chloorlucht, andere smaak',
                  },
                  {
                    comp: 'Koolstoffilter (post)',
                    interval: '12 maanden',
                    signaal: 'Bittere of vlakke nasmaak',
                  },
                  {
                    comp: 'RO-membraan',
                    interval: '2–3 jaar',
                    signaal: 'Hogere TDS-waarde, langzamere productie',
                  },
                  {
                    comp: '4-in-1 combinatiepatroon',
                    interval: '12 maanden',
                    signaal: 'App-melding, indicatorlampje',
                  },
                ].map(r => (
                  <tr key={r.comp} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.comp}</td>
                    <td className="py-2.5 px-3 text-center text-[#005F8A] font-semibold">
                      {r.interval}
                    </td>
                    <td className="py-2.5 px-3 text-gray-600">{r.signaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Tip:</strong> noteer de datum van de laatste
            filterwissel op een plakker aan de binnenzijde van de kast. Of stel een herinnering in
            je telefoon in — het duurt anders voor je het weet 18 maanden.
          </div>
        </section>

        {/* Schema per hardheidszone */}
        <section id="hardheidszone">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Onderhoudsfrequentie per waterhardheidszone in Nederland
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nederland heeft een grote spreiding in waterhardheid — van minder dan 5 °dH in Drenthe
            tot meer dan 25 °dH in Limburg. Harder water betekent meer kalkafzetting en een strikter
            onderhoudsschema. Gebruik onderstaande tabel als leidraad.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Hardheidszone</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Regio (voorbeelden)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Ontkalken</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Filter</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Membraan</th>
                </tr>
              </thead>
              <tbody>
                {hardheidszones.map((z, i) => (
                  <tr key={z.zone} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{z.zone}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{z.regio}</td>
                    <td className="py-2.5 px-3 text-center text-[#005F8A] font-semibold">
                      {z.ontkalken}
                    </td>
                    <td className="py-2.5 px-3 text-center">{z.filter}</td>
                    <td className="py-2.5 px-3 text-center">{z.membraan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            Weet je jouw waterhardheid niet? Gebruik de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid-database per gemeente
            </Link>{' '}
            om jouw exacte waarde op te zoeken.
          </p>
          <div className="mt-4 bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Tip voor harde watergebieden:</strong> overweeg een
            osmose filter te combineren met je kokend water kraan. Zo leverje al bijna kalkvrij water
            aan de kraan, waardoor de boiler nauwelijks meer kalkaanslag opbouwt en het
            onderhoudsinterval drastisch verkort. Bekijk de mogelijkheden op de pagina{' '}
            <Link
              href="/kokend-water-kraan/met-filter"
              className="text-[#005F8A] underline hover:no-underline"
            >
              kokend water kraan met filter
            </Link>
            .
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
                desc: 'Voorkom kalkaanslag aan de bron: de beste RO-filters voor thuis.',
              },
              {
                href: '/kokend-water-kraan/met-filter',
                title: 'Kokend water kraan met filter',
                desc: 'Geïntegreerde oplossing: gefilterd én kokend water uit één kraan.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Zoek de exacte waterhardheid op voor jouw regio.',
              },
              {
                href: '/waterfilter/keuken-installatie',
                title: 'Waterfilter keuken installeren',
                desc: 'Complete gids voor het installeren van een under-sink waterfilter.',
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
            Veelgestelde vragen over kokend water kraan onderhoud
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
