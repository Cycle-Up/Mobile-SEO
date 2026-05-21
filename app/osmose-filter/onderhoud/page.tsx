import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmosefilter onderhoud: vervangingsschema en kosten',
  description:
    'Compleet onderhoudsschema voor osmosefilters: sedimentfilter (3-6 mnd), koolstoffilter (6-12 mnd), RO-membraan (2-3 jaar), UV-lamp (12 mnd).',
  alternates: { canonical: 'https://waterfilterplatform.nl/osmose-filter/onderhoud' },
  openGraph: {
    title: 'Osmosefilter onderhoud: vervangingsschema en kosten',
    description:
      'Wanneer vervang je welk osmosefilter? Volledig schema, stap-voor-stap handleiding, kostenvergelijking DIY vs servicecontract, veelgemaakte fouten en.',
    url: 'https://waterfilterplatform.nl/osmose-filter/onderhoud',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe vaak moet een osmosefilter worden onderhouden?',
    answer:
      'Een osmosefilter heeft meerdere componenten met elk hun eigen interval: de sedimentfilter elke 3–6 maanden, de koolstof pre-filter elke 6–12 maanden, het RO-membraan elke 2–3 jaar, de post-koolstoffilter jaarlijks en een UV-lamp jaarlijks. De druktank verdient elke 3–5 jaar aandacht. Gebruik een TDS-meter om het membraan tussentijds te controleren.',
  },
  {
    question: 'Wat gebeurt er als ik mijn osmosefilter niet op tijd vervang?',
    answer:
      'Een verstopte sedimentfilter verhoogt de druk op het membraan, waardoor de levensduur van het membraan drastisch verkort. Een verzadigde koolstoffilter laat chloor door die het membraanmateriaal aantast en permanent beschadigt. Een verlopen membraan heeft een lagere rejectie van verontreinigingen — het water lijkt gefilterd maar de effectiviteit daalt sterk. TDS-metingen onthullen dit, maar visueel zie je het niet.',
  },
  {
    question: 'Hoe weet ik wanneer het RO-membraan aan vervanging toe is?',
    answer:
      'Meet de TDS van het ongefilterde leidingwater en van het gefilterde osmosewater. Een gezond membraan haalt 95–99% reductie. Als de reductie daalt onder de 85% is vervanging nodig. Andere signalen: sterk verminderde waterflow, smaakverandering, of zichtbaar verhoogde TDS van het gefilterde water boven de 50 ppm bij normaal Nederlands leidingwater.',
  },
  {
    question: 'Kan ik een osmosefilter zelf vervangen?',
    answer:
      'Ja, voor de meeste moderne systemen met quick-connect aansluitingen is filtervervanging een doe-het-zelf klus van 10–30 minuten. Stap 1: sluit watertoevoer af. Stap 2: ontlucht het systeem via de kraan. Stap 3: verwijder de filterbehuizing. Stap 4: wissel het cartridge. Stap 5: open de toevoer en spoel het systeem 30 minuten. Geen gereedschap nodig voor de meeste moderne systemen.',
  },
  {
    question: 'Is een servicecontract voor een osmosefilter de moeite waard?',
    answer:
      'Voor de meeste thuisgebruikers is een servicecontract niet nodig. Filtervervanging is een eenvoudige doe-het-zelf taak. Een servicecontract kost €80–150 per jaar bij professionele partijen. Voor hetzelfde bedrag koop je alle benodigde filters zelf en houdt het onderhoud de baas. Servicecontracten zijn nuttig voor zakelijk gebruik of voor systemen met boostpomp en UV die meer technische aandacht vragen.',
  },
  {
    question: 'Welk gereedschap heb ik nodig voor osmosefilter onderhoud?',
    answer:
      'Voor de meeste moderne quick-connect systemen: geen gereedschap. Voor traditionele systemen met schroefhuizingen: een filtersleutel (doorgaans meegeleverd bij het systeem of te koop voor €5–10). Aanvullend nuttig: een TDS-meter (€10–20) voor kwaliteitscontrole, een emmer om lekkend water op te vangen, en schone handdoeken. Een digitale herinnering instellen voor het volgende onderhoud is eveneens aan te raden.',
  },
  {
    question: 'Wat is de meest gemaakte fout bij osmosefilter onderhoud?',
    answer:
      'De meest gemaakte fout is filters vervangen in de verkeerde volgorde, of het systeem niet goed naspoelen na vervanging. De juiste volgorde is altijd: sediment → pre-koolstof → membraan → post-koolstof. Een tweede veelgemaakte fout: nieuwe filters niet 30–60 minuten naspoelen. Nieuwe koolstoffilters bevatten activeringsresten die de smaak beïnvloeden; naspoelen is essentieel.',
  },
  {
    question: 'Hoe lang gaat een osmose RO-membraan mee?',
    answer:
      'Een RO-membraan gaat gemiddeld 2–3 jaar mee bij thuisgebruik (3–4 personen, normaal leidingwater). De levensduur is sterk afhankelijk van de waterkwaliteit, het gebruik van de pre-filters en de hoeveelheid water die het membraan verwerkt. In harde watergebieden (boven 20 °dH) kan de levensduur dalen naar 18 maanden. In zachte watergebieden kan een membraan 4 jaar of langer meegaan.',
  },
];

const vervangingsSchema = [
  {
    component: 'Sedimentfilter (5 micron)',
    interval: '3–6 maanden',
    kosten: '€ 5–15',
    waarom: 'Houdt zand, roest, sediment en grotere deeltjes tegen. Beschermt het membraan. Verstopt raken verhoogt druk op membraan en verkort de levensduur.',
    signaal: 'Zichtbare vervuiling, flow-reductie, stijgende TDS',
  },
  {
    component: 'Koolstof pre-filter (GAC of CTO)',
    interval: '6–12 maanden',
    kosten: '€ 10–25',
    waarom: 'Verwijdert chloor, chloraminen en organische stoffen. Een uitgeputte koolstoffilter laat chloor door, dat het RO-membraanmateriaal aantast en de levensduur met maanden verkort.',
    signaal: 'Chloorlucht in drinkwater, smaakverandering',
  },
  {
    component: 'RO-membraan',
    interval: '2–3 jaar',
    kosten: '€ 25–70',
    waarom: 'Hart van het systeem: filtert 95–99% van alle opgeloste stoffen. Veroudert door kalkafzetting, biologische aangroei en chlooraanval als pre-filters uitgeput waren.',
    signaal: 'TDS-reductie &lt; 85%, verminderde flow, smaakverandering',
  },
  {
    component: 'Post-koolstoffilter (polishing)',
    interval: '12 maanden',
    kosten: '€ 10–20',
    waarom: 'Laatste filterstap: verwijdert eventuele restgeur of -smaak die uit het drukvat komt voor consumptie. Beschermt ook de smaak bij systemen zonder drukvat.',
    signaal: 'Aardse of muffe nasmaak in gefilterd water',
  },
  {
    component: 'UV-lamp',
    interval: '12 maanden',
    kosten: '€ 20–50',
    waarom: 'UV-lamp output daalt 15–20% per jaar. Na 12 maanden kan de UV-intensiteit onder het minimale niveau voor effectieve desinfectie zakken, zelfs als de lamp nog brandt.',
    signaal: 'Lamp brandt nog maar effectiviteit is niet meer gegarandeerd',
  },
  {
    component: 'Druktank (pressure vessel)',
    interval: '3–5 jaar (inspectie)',
    kosten: '€ 30–80',
    waarom: 'De luchtbel in de tank degradeert. Een lege of te volle luchtbel verlaagt de waterdruk en de flow. Interne bladder kan scheuren of bacterieel groeien bij langdurig stilstand.',
    signaal: 'Slechte flow, water komt in kleine beetjes, tank voelt zwaar',
  },
];

const kostenTabel = [
  {
    aanpak: 'DIY — losse filters kopen',
    jaarkosten: '€ 40–90',
    tijdsinvestering: '30–60 min/jaar',
    voordelen: 'Goedkoopst, volledige controle over filterkwaliteit',
    nadelen: 'Zelf bijhouden wanneer elk filter aan vervanging toe is',
    aanbevolen: true,
  },
  {
    aanpak: 'Servicecontract fabrikant',
    jaarkosten: '€ 80–150',
    tijdsinvestering: 'Minimaal — afspraken plannen',
    voordelen: 'Ontzorging, professionele controle en kwaliteitscheck',
    nadelen: 'Duurder, afhankelijk van beschikbaarheid servicemonteur',
    aanbevolen: false,
  },
  {
    aanpak: 'Jaarlijkse filterset bestellen',
    jaarkosten: '€ 60–120',
    tijdsinvestering: '15–30 min/jaar',
    voordelen: 'Eenvoudig: één bestelling, alles zit erin, één moment per jaar',
    nadelen: 'Iets duurder dan losse filters; niet altijd voor elk systeem beschikbaar',
    aanbevolen: false,
  },
];

const stappenPlan = [
  {
    stap: 1,
    titel: 'Watertoevoer afsluiten',
    uitleg:
      'Draai het afsluitventiel op de koudwaterinvoer van het osmosefilter dicht. Dit is doorgaans een kwartslag-kogelkraan op de koudwaterleiding onder het aanrecht. Controleer dat de watertoevoer echt afgesloten is door de filterkraan te openen: als er geen water uitkomt is de toevoer dicht.',
  },
  {
    stap: 2,
    titel: 'Druk ontluchten',
    uitleg:
      'Open de filterkraan en laat alle waterdruk uit het systeem weglopen. Wacht tot er geen water meer uitkomt. Dit voorkomt dat water in het gezicht spuit bij het openen van filterbehuizingen en maakt het systeem makkelijker te demonteren.',
  },
  {
    stap: 3,
    titel: 'Filterbehuizing openen en cartridge verwisselen',
    uitleg:
      'Draai de filterbehuizing linksom los met de meegeleverde filtersleutel (of met de hand bij quick-connect systemen). Verwijder het oude cartridge. Controleer de O-ring: is die ingedroogd, beschadigd of vervormd, vervang hem dan ook. Schuif het nieuwe cartridge in de juiste richting in de behuizing en sluit de behuizing aan.',
  },
  {
    stap: 4,
    titel: 'Filtercomponenten in de juiste volgorde plaatsen',
    uitleg:
      'De volgorde is altijd: sedimentfilter → koolstof pre-filter → RO-membraan → post-koolstoffilter (→ UV-lamp indien aanwezig). Verkeerde volgorde betekent dat het membraan niet beschermd wordt door de pre-filters. Label filters en behuizingen bij installatie zodat je nooit in de war raakt.',
  },
  {
    stap: 5,
    titel: 'Naspoelen en kwaliteit controleren',
    uitleg:
      'Open de watertoevoer langzaam en laat het systeem 30–60 minuten naspoelen via de filterkraan. Gooi dit spoelwater weg. Nieuwe filters bevatten activeringsresten die de smaak beïnvloeden. Meet na het naspoelen de TDS van het gefilterde water. Verwacht 5–30 ppm bij normaal Nederlands leidingwater (TDS 150–300 ppm). Bij hogere waarden: laat nog 30 minuten doorlopen.',
  },
];

const veeloGemaakteForuten = [
  {
    fout: 'Filters in de verkeerde volgorde vervangen',
    gevolg: 'Membraan wordt niet beschermd door sediment- en koolstoffilter. Vervuiling bereikt het membraan direct.',
    oplossing: 'Onthoud de volgorde: sediment → koolstof → membraan → post-koolstof. Label de behuizingen.',
  },
  {
    fout: 'Niet naspoelen na filterwissel',
    gevolg: 'Activeringsresten van nieuwe koolstoffilters beïnvloeden de smaak. Conserveringsmiddelen van een nieuw membraan blijven in het water.',
    oplossing: 'Altijd 30–60 minuten naspoelen via de filterkraan. Het eerste water weggooien.',
  },
  {
    fout: 'Membraan te vroeg of te laat vervangen',
    gevolg: 'Te vroeg: onnodige kosten. Te laat: dalende filterkwaliteit terwijl je denkt veilig water te drinken.',
    oplossing: 'Gebruik een TDS-meter en meet de reductie-efficiency. Vervang wanneer de reductie daalt onder de 85%.',
  },
  {
    fout: 'UV-lamp pas vervangen als hij opbrandt',
    gevolg: 'UV-output daalt 15–20% per jaar. Na 12–18 maanden desinfecteert de lamp onvoldoende ook als hij nog brandt.',
    oplossing: 'Vervang de UV-lamp jaarlijks ongeacht of hij nog werkt. Stel een jaarlijkse herinnering in.',
  },
];

export default function OsmoseFilterOnderhoudPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Osmose filter', url: 'https://waterfilterplatform.nl/osmose-filter' },
          { name: 'Onderhoud', url: 'https://waterfilterplatform.nl/osmose-filter/onderhoud' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Osmosefilter onderhoud: vervangingsschema en kosten',
          description:
            'Volledig onderhoudsschema voor osmosefilters: wanneer elke component vervangen, DIY stap-voor-stap handleiding en kosten.',
          datePublished: '2026-04-22',
          url: 'https://waterfilterplatform.nl/osmose-filter/onderhoud',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/osmose-filter" className="hover:text-[#005F8A]">Osmose filter</Link>
            <span className="mx-2">/</span>
            <span>Onderhoud</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmosefilter onderhoud: vervangingsschema en kosten
          </h1>

          {/* QuickAnswer */}
          <div className="bg-white border border-[#005F8A]/30 rounded-xl p-4 mb-6">
            <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-1">Snel antwoord</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Een osmosefilter vereist regelmatig maar eenvoudig onderhoud: sedimentfilter elke 3–6 maanden, koolstoffilter elke 6–12 maanden, RO-membraan elke 2–3 jaar, post-koolstof en UV-lamp jaarlijks. DIY-kosten: €40–90 per jaar. Gebruik een TDS-meter om de filterkwaliteit te monitoren.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#schema"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Vervangingsschema bekijken →
            </Link>
            <Link
              href="/omgekeerde-osmose/onderhoud"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Omgekeerde osmose handleiding
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#waarom" className="hover:underline">Waarom onderhoud zo belangrijk is</a></li>
            <li><a href="#schema" className="hover:underline">Volledig vervangingsschema</a></li>
            <li><a href="#wanneer" className="hover:underline">Signalen voor vervanging</a></li>
            <li><a href="#stappen" className="hover:underline">Stap-voor-stap handleiding</a></li>
            <li><a href="#kosten" className="hover:underline">DIY vs servicecontract kosten</a></li>
            <li><a href="#fouten" className="hover:underline">Veelgemaakte fouten</a></li>
            <li><a href="#gereedschap" className="hover:underline">Benodigde gereedschappen</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Waarom onderhoud */}
        <section id="waarom">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom onderhoud bij een osmosefilter zo belangrijk is
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een osmosefilter is een van de meest effectieve filtermethoden voor drinkwater, maar de prestaties zijn direct afhankelijk van de conditie van alle filtercomponenten. Elk onderdeel heeft een specifieke functie en een specifieke levensduur. Het niet opvolgen van het vervangingsschema heeft twee ernstige gevolgen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titel: 'Verminderde filterkwaliteit',
                inhoud:
                  'Een uitgeput RO-membraan heeft een lagere rejectie. TDS-reductie daalt van 97% naar 70% of minder — je drinkt water dat minder goed gefilterd is, maar dat je visueel en aan de smaak niet altijd merkt. Alleen een TDS-meter onthult dit.',
                icon: '⚠',
              },
              {
                titel: 'Verkorte levensduur membraan',
                inhoud:
                  'Een verstopte sedimentfilter verhoogt de druk op het membraan. Een uitgeputte koolstoffilter laat chloor door die het membraanmateriaal chemisch aantast. Dit kan de levensduur van het membraan verkorten van 3 jaar naar 12–18 maanden.',
                icon: '⚠',
              },
              {
                titel: 'UV-lamp output daalt met tijd',
                inhoud:
                  'Een UV-lamp verliest jaarlijks 15–20% van zijn UV-output. Na 12 maanden brandt de lamp nog, maar de UV-intensiteit is mogelijk onvoldoende voor effectieve desinfectie. Vervanging is noodzakelijk na 12 maanden gebruik, niet wanneer de lamp opbrandt.',
                icon: '💡',
              },
              {
                titel: 'Druktank degradeert geleidelijk',
                inhoud:
                  'De interne luchtbel in een druktank verliest druk over tijd. Een tank met te weinig luchtdruk vult zich traag en levert water in kleine, trage stroomstoten. Regelmatige inspectie en bijpompen van de luchtdruk voorkomt dit.',
                icon: '🔧',
              },
            ].map(r => (
              <div key={r.titel} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="text-2xl mb-2">{r.icon}</p>
                <p className="font-semibold text-gray-900 mb-1 text-sm">{r.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{r.inhoud}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vervangingsschema */}
        <section id="schema">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Volledig vervangingsschema
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Gebruik onderstaand schema als leidraad. De intervallen zijn gebaseerd op gemiddeld thuisgebruik (3–4 personen, normaal Nederlands leidingwater). Woon je in een harde waterzone of gebruik je aanzienlijk meer water, vervang dan eerder.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Component</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Interval</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-left hidden sm:table-cell">Signaal</th>
                </tr>
              </thead>
              <tbody>
                {vervangingsSchema.map((r, i) => (
                  <tr key={r.component} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-900 text-xs">{r.component}</td>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A] whitespace-nowrap text-xs">{r.interval}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700 text-xs whitespace-nowrap">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs hidden sm:table-cell">{r.signaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {vervangingsSchema.map(r => (
              <div key={r.component} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{r.component}</p>
                  <div className="flex gap-2 items-center">
                    <span className="text-xs bg-[#E0F2FE] text-[#005F8A] font-semibold px-2 py-0.5 rounded-full">{r.interval}</span>
                    <span className="text-xs font-medium text-gray-600">{r.kosten}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.waarom}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wanneer signalen */}
        <section id="wanneer">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe herken je wanneer vervanging nodig is?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Naast het vaste vervangingsschema zijn er signalen die eerder optreden. Gebruik een TDS-meter voor de meest betrouwbare kwaliteitscontrole.
          </p>
          <div className="space-y-3">
            {[
              {
                signaal: 'Drukdaling en verminderde waterflow',
                uitleg: 'De filterkraan geeft significant minder water dan normaal, of het duurt langer om een glas te vullen. Dit kan wijzen op een verstopte sedimentfilter, een verouderd membraan, of een druktank met te weinig luchtdruk.',
              },
              {
                signaal: 'Stijgende TDS-uitvoer (TDS-meter meting)',
                uitleg: 'Meet het ongefilterde leidingwater (bijv. 250 ppm) en het gefilterde osmosewater (bijv. 8 ppm). Bereken de reductie: (250-8)/250 = 97%. Daalt dit onder de 85%, dan is het membraan aan vervanging toe. Meet maandelijks en noteer de waarden.',
              },
              {
                signaal: 'Smaak- of geurverandering',
                uitleg: 'Een muffe, aardse of scheikundige smaak in het gefilterde water kan wijzen op een uitgeputte post-koolstoffilter, een beschadigd membraan, of bacteriebiofilm in de druktank. Vervang de post-filter als eerste; als de smaak niet verbetert, controleer het membraan.',
              },
              {
                signaal: 'UV-lamp brandt maar geeft te weinig output',
                uitleg: 'Dit is alleen te controleren met een UV-meter of via het onderhoudslogboek. Na 12 maanden is de UV-intensiteit onvoldoende ongeacht of de lamp nog brandt. Vervang elk jaar, punt.',
              },
            ].map(s => (
              <div key={s.signaal} className="flex gap-3 items-start border border-gray-100 rounded-xl p-4 bg-white">
                <span className="text-amber-500 shrink-0 mt-0.5 text-lg">⚠</span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-sm">{s.signaal}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.uitleg}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#E0F2FE] rounded-xl p-4 text-sm text-[#003F5C]">
            <strong>Tip:</strong> Een TDS-meter is het onmisbare gereedschap voor osmosefilter onderhoud. Een goede TDS-meter kost €10–20 en geeft direct inzicht in de filterkwaliteit. Meet het ongefilterde leidingwater en het gefilterde water eens per maand en noteer de waarden. Zie je de TDS van het gefilterde water structureel stijgen? Dan nadert het membraan het einde van zijn levensduur.
          </div>
        </section>

        {/* Stap-voor-stap */}
        <section id="stappen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap-voor-stap filterwissel handleiding
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor de meeste moderne osmosefilters met quick-connect aansluitingen is een filterwissel een doe-het-zelf klus van 15–30 minuten. Je hebt doorgaans geen gereedschap nodig.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-sm text-red-800">
            <strong>Veiligheidsnoot:</strong> Sluit altijd eerst de watertoevoer af vóór je begint. Bij systemen met boostpomp of UV-lamp: schakel ook de elektriciteit uit voordat je de behuizing opent.
          </div>
          <ol className="space-y-4">
            {stappenPlan.map(s => (
              <li key={s.stap} className="flex items-start gap-4">
                <span className="bg-[#005F8A] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {s.stap}
                </span>
                <div>
                  <p className="font-semibold text-gray-900 mb-1 text-sm">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.uitleg}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Kosten DIY vs service */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            DIY vs servicecontract: kostenvergelijking
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor de meeste thuisgebruikers is DIY de meest kosteneffectieve aanpak. Hieronder een overzicht.
          </p>
          <div className="space-y-4 mb-4">
            {kostenTabel.map(k => (
              <div
                key={k.aanpak}
                className={`rounded-2xl border p-5 ${k.aanbevolen ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{k.aanpak}</h3>
                    {k.aanbevolen && (
                      <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Aanbevolen</span>
                    )}
                  </div>
                  <span className="font-bold text-[#005F8A]">{k.jaarkosten}/jaar</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">Tijdsinvestering: {k.tijdsinvestering}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-green-700 text-xs font-medium">+ </span>
                    <span className="text-gray-600 text-xs">{k.voordelen}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs font-medium">− </span>
                    <span className="text-gray-600 text-xs">{k.nadelen}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Conclusie:</strong> Voor thuisgebruik is DIY de verstandigste keuze. Filtervervanging is een eenvoudige taak van 15–30 minuten. Meer over aanschafopties en systeemvergelijking lees je op onze{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              osmose filter kopen pagina
            </Link>.
          </div>
        </section>

        {/* Veelgemaakte fouten */}
        <section id="fouten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Veelgemaakte fouten bij osmosefilter onderhoud
          </h2>
          <div className="space-y-4">
            {veeloGemaakteForuten.map(f => (
              <div key={f.fout} className="border border-amber-100 rounded-xl p-4 bg-amber-50">
                <p className="font-semibold text-amber-900 mb-1 text-sm">Fout: {f.fout}</p>
                <p className="text-sm text-amber-800 mb-2">Gevolg: {f.gevolg}</p>
                <p className="text-sm text-green-800">Oplossing: {f.oplossing}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gereedschappen */}
        <section id="gereedschap">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Benodigde gereedschappen en hulpmiddelen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { naam: 'TDS-meter', prijs: '€ 10–20', waarvoor: 'Controleer filterkwaliteit en membraanprestaties. Onmisbaar voor tijdige vervanging van het membraan.' },
              { naam: 'Filtersleutel', prijs: '€ 5–10 (of meegeleverd)', waarvoor: 'Voor het los draaien van filterbehuizingen bij oudere systemen met schroefdraad. Quick-connect systemen hebben dit niet nodig.' },
              { naam: 'Emmer of handdoeken', prijs: 'Al in huis', waarvoor: 'Opvangen van het water dat vrijkomt bij het openen van filterbehuizingen. Altijd handig onder het aanrecht.' },
              { naam: 'Vervangingsfilters', prijs: 'Zie schema', waarvoor: 'Koop filters van de juiste maat en specificaties voor jouw systeem. Bewaar altijd een reserveset in huis.' },
              { naam: 'Onderhoudslogboek (of app)', prijs: 'Gratis', waarvoor: 'Noteer de datum van elke filterwissel en de TDS-meting. Zo mis je nooit een vervanging en zie je de kwaliteit over tijd.' },
            ].map(g => (
              <div key={g.naam} className="border border-gray-100 rounded-xl p-4 bg-white">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{g.naam}</p>
                  <span className="text-xs text-[#005F8A] font-medium shrink-0">{g.prijs}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{g.waarvoor}</p>
              </div>
            ))}
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitgelegd</h3>
            <p className="text-sm text-gray-600">Begrijp waarom regelmatig onderhoud zo belangrijk is voor de prestaties van uw osmosefilter.</p>
          </Link>
          <Link href="/omgekeerde-osmose/kopen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter kopen</h3>
            <p className="text-sm text-gray-600">Op zoek naar een onderhoudsvriendelijk osmosefilter? Vergelijk de beste modellen.</p>
          </Link>
          <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58 keurmerk</h3>
            <p className="text-sm text-gray-600">Gecertificeerde osmosefilters presteren beter en zijn makkelijker te onderhouden.</p>
          </Link>
          <Link href="/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmosefilter gids</h3>
            <p className="text-sm text-gray-600">Van installatie tot onderhoud: alles over osmosefilters op een plek.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/omgekeerde-osmose/onderhoud', label: 'Omgekeerde osmose onderhoud: complete handleiding' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen: systeemvergelijking 2026' },
              { href: '/kennisbank/osmose-membraan-vervangen', label: 'RO-membraan vervangen: stap-voor-stap' },
              { href: '/kennisbank/osmose-membraan-levensduur', label: 'Levensduur van een osmosemembraan' },
              { href: '/waterontharder/vergelijken', label: 'Waterontharder vergelijken: alternatief voor kalk' },
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
            Veelgestelde vragen over osmosefilter onderhoud
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
