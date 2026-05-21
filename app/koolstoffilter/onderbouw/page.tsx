import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Onderbouw koolstoffilter: beste keuze voor betere kraanwatersmaak',
  description:
    'Onderbouw koolstoffilter onder het aanrecht: vergelijking van enkelvoudige en meervoudige systemen, top 5 modellen met prijs en specs, installatieoverzicht.',
  alternates: { canonical: 'https://waterfilterplatform.nl/koolstoffilter/onderbouw' },
  openGraph: {
    title: 'Onderbouw koolstoffilter: beste keuze voor betere kraanwatersmaak',
    description:
      'Alles over onderbouw koolstoffilters: single vs multi-stage, top 5 modellen, installatiekosten en wanneer u beter voor osmose kiest.',
    url: 'https://waterfilterplatform.nl/koolstoffilter/onderbouw',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is een onderbouw koolstoffilter precies?',
    answer:
      'Een onderbouw koolstoffilter is een waterfiltersysteem dat onder het keukenanrecht wordt geïnstalleerd en de waterleiding filtert voordat het water de kraan verlaat. Het bestaat uit één of meer filterpatronen (cartridges) met geactiveerde koolstof, bevestigd in een behuizing met snelkoppelingen op de waterleiding. Gefilterd water komt uit dezelfde kraan of een aparte filterkraan. Het systeem werkt op leidingwaterdruk, zonder batterijen of stroom.',
  },
  {
    question: 'Wat verwijdert een onderbouw koolstoffilter?',
    answer:
      'Een onderbouw koolstofblokfilter verwijdert effectief chloor (95–99%), trihalomethanen/THM (90–99%), pesticiden en herbiciden (70–90%), geur- en smaakstoffen (95%) en organische verbindingen (60–90%). Een meerfasig systeem met sediment voorfilter verwijdert ook zand, roest en zwevende deeltjes. Het verwijdert geen nitraten (<10%), PFAS (<20% voor meeste varianten), bacteriën (<5%) of kalk (<5%). Voor deze stoffen is omgekeerde osmose nodig.',
  },
  {
    question: 'Wat is het verschil tussen een enkelvoudig en meerfasig onderbouw systeem?',
    answer:
      'Een enkelvoudig systeem (single stage) bevat één filterpatroon — doorgaans een koolstofblok of combinatiefilter. Het is goedkoper en eenvoudiger te installeren, maar minder gespecialiseerd. Een meerfasig systeem (dual of triple stage) combineert meerdere filtertypen: typisch een sediment pre-filter (5–20 µm), een koolstofblok en eventueel een nafilter of post-carbon. Dit geeft betere bescherming van het hoofdfilter, langere levensduur en betere smaakverfijning. Voor dagelijks gebruik is een 2-staps systeem het minimum.',
  },
  {
    question: 'Hoe moeilijk is de installatie van een onderbouw koolstoffilter?',
    answer:
      'Installatie van een onderbouw koolstoffilter is een doe-het-zelf klus die de meeste mensen in 20–45 minuten kunnen uitvoeren. U heeft nodig: een verstelmoerensleutel, plakband (voor draadafdichting) en eventueel een kleine boor voor de bevestiging aan de kastwand. De stappen zijn: waterafsluiter sluiten, T-koppeling op de koude waterleiding plaatsen, filterbehuizing bevestigen, snelkoppelingen aansluiten, en systeem doorspoelen. Voor een aparte filterkraan is een extra gat in het aanrecht of het aanrechtzijstuk nodig.',
  },
  {
    question: 'Voor wie is een onderbouw koolstoffilter geschikt?',
    answer:
      'Een onderbouw koolstoffilter is ideaal voor: huiseigenaren die een permanente, onzichtbare filteroplossing willen zonder waterkoker of filterkan; mensen die zich storen aan chloorsmaak en -geur in kraanwater; gezinnen met hoog waterverbruik waarvoor een filterkan te omslachtig is; gebruikers die een voorfilter willen voor een omgekeerde osmose systeem. Het is minder geschikt voor huurders (installatie vereist aanpassing waterleiding) en voor mensen die ook nitraat, PFAS of kalk willen verwijderen (dan is osmose beter).',
  },
  {
    question: 'Hoe vaak moet ik het filter van een onderbouw systeem vervangen?',
    answer:
      'Het vervangingsinterval hangt af van het type filter en waterverbruik. Een koolstofblokfilter in een onderbouw systeem gaat doorgaans 6–12 maanden mee of 2000–4000 liter. Bij hard water of hoge chloorconcentraties in de regio kan dit korter zijn. Een sediment pre-filter gaat 3–6 maanden mee afhankelijk van de troebelheid van het water. Stel een herinnering in bij installatie en controleer ook de doorstroomsnelheid — verminderde druk is een signaal dat het filter aan vervanging toe is.',
  },
  {
    question: 'Wat zijn de jaarlijkse kosten van een onderbouw koolstoffilter?',
    answer:
      'De totale jaarkosten bestaan uit filtervervanging (€30–80 per jaar voor één of twee cartridges) plus eenmalige aanschafkosten (€80–250 voor het systeem). Installatie door een loodgieter kost €50–120 extra, doe-het-zelf installatie is gratis. Op jaarbasis bedragen de terugkerende kosten €30–80 — vergelijkbaar met een filterkan maar met significant betere filterkwaliteit en groter gemak. Een meerfasig systeem kost iets meer: €50–120 per jaar aan filterpatronen.',
  },
  {
    question: 'Wanneer kies ik voor omgekeerde osmose in plaats van een onderbouw koolstoffilter?',
    answer:
      'Kies voor omgekeerde osmose als u meer wilt dan smaakverbetering: bij verhoogde nitraatwaarden in uw regio (>25 mg/L), als u PFAS wilt verwijderen, als u hard water volledig wilt ontharden, of als u bacteriologische zekerheid wilt. Een osmose systeem kost aanvankelijk meer (€150–400) maar verwijdert 95–99% van vrijwel alle opgeloste stoffen. Een onderbouw koolstoffilter is ook de aanbevolen pre-filter voor osmose: het koolstoffilter beschermt het RO-membraan tegen chloor, wat de levensduur aanzienlijk verlengt.',
  },
  {
    question: 'Kan ik als huurder een onderbouw koolstoffilter installeren?',
    answer:
      'Een standaard onderbouw koolstoffilter vereist een T-koppeling op de waterleiding, wat technisch gezien een permanente aanpassing is. In de meeste huurwoningen is dit toegestaan als de oorspronkelijke staat bij vertrek wordt hersteld. Overleg dit altijd met de verhuurder. Als alternatief zijn er ook waterfilters die op de kraan worden geschroefd (kraanfilters) en volledig verwijderbaar zijn zonder gereedschap. Huurders met goedkeuring van de verhuurder kunnen een onderbouw systeem doorgaans zelf installeren in 30–45 minuten.',
  },
];

const topModellen = [
  {
    model: 'Ecosoft FMV3ECO (3-staps)',
    stages: 3,
    prijs: '€120–150',
    doorstroom: '2,5 L/min',
    filterLeven: '6–12 mnd',
    verwijdering: 'Sediment + GAC + CTO blok',
    geschikt: 'Gezinnen, allround gebruik',
  },
  {
    model: 'Pentair Everpure H-300 (2-staps)',
    stages: 2,
    prijs: '€180–220',
    doorstroom: '1,9 L/min',
    filterLeven: '12 maanden',
    verwijdering: 'Sediment + koolstofblok NSF/ANSI 53',
    geschikt: 'Hoogwaardige koolstoffiltratie',
  },
  {
    model: 'Doulton Ultracarb (1-staps)',
    stages: 1,
    prijs: '€80–110',
    doorstroom: '1,5 L/min',
    filterLeven: '12 maanden',
    verwijdering: 'Keramisch + koolstofblok + zilver',
    geschikt: 'Antimicrobiële toevoeging (zilver)',
  },
  {
    model: 'Ecosoft RV3MCO (2-staps)',
    stages: 2,
    prijs: '€90–120',
    doorstroom: '2,0 L/min',
    filterLeven: '6–12 mnd',
    verwijdering: 'Sediment 5 µm + koolstofblok',
    geschikt: 'Budget 2-staps, goede prijs-kwaliteit',
  },
  {
    model: 'Aquafilter FCCBKDF (3-staps)',
    stages: 3,
    prijs: '€100–130',
    doorstroom: '2,0 L/min',
    filterLeven: '6–12 mnd',
    verwijdering: 'PP sediment + GAC + KDF koolstofblok',
    geschikt: 'KDF-technologie voor zware metalen',
  },
];

const kostenTabel = [
  { post: 'Aanschaf systeem (enkelvoudig)', eenmalig: '€80–130', jaarbedrag: '—' },
  { post: 'Aanschaf systeem (2–3 staps)', eenmalig: '€100–250', jaarbedrag: '—' },
  { post: 'Installatie (doe-het-zelf)', eenmalig: '€0', jaarbedrag: '—' },
  { post: 'Installatie (loodgieter)', eenmalig: '€50–120', jaarbedrag: '—' },
  { post: 'Filtervervanging (enkelvoudig)', eenmalig: '—', jaarbedrag: '€30–60' },
  { post: 'Filtervervanging (2–3 staps)', eenmalig: '—', jaarbedrag: '€50–120' },
  { post: 'Aparte filterkraan (optioneel)', eenmalig: '€30–80', jaarbedrag: '—' },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Koolstoffilter', url: 'https://waterfilterplatform.nl/koolstoffilter' },
  { name: 'Onderbouw', url: 'https://waterfilterplatform.nl/koolstoffilter/onderbouw' },
];

export default function OnderbouwKoolstoffilterPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Onderbouw koolstoffilter: beste keuze voor betere kraanwatersmaak',
          description:
            'Alles over onderbouw koolstoffilters: single vs multi-stage, top 5 modellen, installatiekosten en wanneer u beter voor osmose kiest.',
          datePublished: '2026-02-25',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/koolstoffilter/onderbouw',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/koolstoffilter" className="hover:text-[#005F8A]">Koolstoffilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Onderbouw</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Onderbouw koolstoffilter: beste keuze voor betere kraanwatersmaak
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een onderbouw koolstoffilter geeft u gefilterd water rechtstreeks uit de kraan, zonder
            filterkan of kraanopzetstuk. Het systeem wordt onzichtbaar onder het aanrecht geplaatst
            en filtert alle chloor, geur en organische verbindingen op het moment dat u water
            gebruikt. Op deze pagina vergelijken we de beste modellen, uitgelegd wat het kost
            en voor wie het de juiste keuze is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/koolstoffilter/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Koolstoffilter kopen →
            </Link>
            <Link
              href="/omgekeerde-osmose"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Omgekeerde osmose vergelijken
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~8 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Een onderbouw koolstoffilter wordt onder het aanrecht geplaatst en filtert kraanwater via één of meer actieve koolpatronen. Het verwijdert chloor (95–99%), geur, THM en pesticiden. Kosten: €80–250 aanschaf + €30–120 per jaar. Ideaal als u chloorsmaak wilt aanpakken. Niet geschikt voor nitraat, PFAS of kalk — dan is omgekeerde osmose nodig." />

        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#wat-is', 'Wat is een onderbouw koolstoffilter?'],
              ['#single-multi', 'Enkelvoudig vs meerfasig systeem'],
              ['#modellen', 'Top 5 modellen vergelijking'],
              ['#installatie', 'Installatie in 3 stappen'],
              ['#kosten', 'Kosten overzicht'],
              ['#voor-wie', 'Voor wie is het geschikt?'],
              ['#vs-osmose', 'Wanneer heeft u osmose nodig?'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Wat is een onderbouw filter */}
        <section id="wat-is">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is een onderbouw koolstoffilter?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een <strong>onderbouw koolstoffilter</strong> (ook wel "onder aanrecht waterfilter" of
            "under-sink carbon filter" genaamd) is een waterfiltersysteem dat permanent in de
            waterleiding wordt geplaatst, onzichtbaar opgeborgen in de kast onder uw aanrecht.
            In tegenstelling tot een filterkan of kraanopzetstuk filtert het automatisch elk
            liter water dat u uit de kraan trekt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het systeem bestaat uit: een T-koppeling op de koude waterleiding, een of meerdere
            filterbehuizingen met patronen (cartridges), snelkoppelingen en optioneel een
            aparte filterkraan naast de hoofdkraan. Alles werkt op de normale leidingwaterdruk
            van 2–5 bar — er is geen elektriciteit of waterreservoir nodig.
          </p>
          <p className="text-gray-700 leading-relaxed">
            De kern van het systeem is de koolstofpatroon. De meeste kwalitatieve onderbouw
            systemen gebruiken een <strong>koolstofblokfilter (CTO)</strong> — samengeperste
            actieve kool met een vaste, uniforme structuur die betere adsorptie geeft dan losse
            GAC-korrels. Meer over de werking van deze technologie leest u op de pagina{' '}
            <Link href="/koolstoffilter/werking" className="text-[#005F8A] underline hover:no-underline">
              koolstoffilter werking
            </Link>.
          </p>
        </section>

        {/* Enkelvoudig vs meerfasig */}
        <section id="single-multi">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Enkelvoudig vs meerfasig systeem: wat is beter?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Onderbouw koolstoffilters zijn beschikbaar als enkelvoudige (single stage) en
            meerfasige (dual/triple stage) systemen. Het aantal filterstappen heeft directe
            invloed op de filterkwaliteit en de levensduur van de patronen.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2 text-center">1-staps</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Één combinatiefilterpatroon (sediment + koolstofblok). Goedkoopst, kleinste
                installatie. Minder gespecialiseerd — de koolstof raakt sneller verzadigd
                door sediment.
              </p>
              <p className="text-xs text-[#005F8A] font-medium text-center">€80–130</p>
            </div>
            <div className="border border-[#005F8A]/30 rounded-xl p-5 bg-[#E0F2FE]/40">
              <p className="font-bold text-[#003F5C] mb-2 text-center">2-staps (aanbevolen)</p>
              <p className="text-xs text-gray-700 leading-relaxed mb-3">
                Sediment voorfilter (5–20 µm) + koolstofblok. De voorfilter houdt deeltjes
                tegen en beschermt de koolstofpatroon, wat de levensduur verlengt.
              </p>
              <p className="text-xs text-[#005F8A] font-medium text-center">€90–180</p>
            </div>
            <div className="border border-gray-200 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-2 text-center">3-staps</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Sediment + GAC/koolstofblok + nafilter (post-carbon). Beste filterkwaliteit,
                langste levensduur per patroon. Basis voor veel osmose systemen.
              </p>
              <p className="text-xs text-[#005F8A] font-medium text-center">€120–250</p>
            </div>
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Advies:</strong> kies minimaal een 2-staps systeem.
            De sediment voorfilter verlengt de levensduur van de dure koolstofpatroon aanzienlijk
            en verbetert de algehele filterkwaliteit. Bij Nederlands leidingwater (weinig sediment)
            is een 2-staps systeem in de meeste gevallen volledig voldoende.
          </div>
        </section>

        {/* Top 5 modellen */}
        <section id="modellen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Top 5 onderbouw koolstoffilters — vergelijking 2026</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Onderstaande tabel vergelijkt vijf kwalitatieve onderbouw koolstoffilters die beschikbaar
            zijn op de Nederlandse markt. De specificaties zijn gebaseerd op fabrikantgegevens en
            onafhankelijke productreviews.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Model</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Staps</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Prijs</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">Doorstroom</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">Filterlooptijd</th>
                  <th className="py-2.5 px-3 font-semibold text-left hidden md:table-cell">Geschikt voor</th>
                </tr>
              </thead>
              <tbody>
                {topModellen.map((r, i) => (
                  <tr key={r.model} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-[#003F5C]">{r.model}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{r.stages}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-gray-900">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 hidden sm:table-cell">{r.doorstroom}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 hidden sm:table-cell">{r.filterLeven}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs hidden md:table-cell">{r.geschikt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prijzen zijn indicatief (april 2026). Filterlooptijden bij normaal Nederlands huishoudelijk verbruik.
            Controleer altijd de NSF/ANSI-certificering van het model dat u overweegt.
          </p>
          <div className="mt-5 space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-1 text-sm">Aanbeveling: Ecosoft FMV3ECO</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                De Ecosoft FMV3ECO is de beste all-round keuze voor de meeste Nederlandse huishoudens.
                Het 3-staps systeem geeft uitstekende filterkwaliteit voor een scherpe prijs, en
                vervangingspatronen zijn breed beschikbaar. Ideaal voor gezinnen van 2–4 personen.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-1 text-sm">Premium keuze: Pentair Everpure H-300</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                De Pentair Everpure H-300 is NSF/ANSI 53 gecertificeerd voor zware metalen en
                pesticiden. De hogere aanschafprijs wordt gerechtvaardigd door de superior
                filterkwaliteit en 12 maanden filterlevensduur zonder sediment voorfilter.
              </p>
            </div>
          </div>
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Installatie van een onderbouw koolstoffilter (3 stappen)</h2>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Watertoevoer afsluiten en T-koppeling plaatsen',
                desc: 'Sluit de waterafsluiter onder het aanrecht (of de hoofdkraan). Verwijder de flexibele slang van de koude waterinlaat van de mengkraan. Plaats een T-koppeling (meegeleverd of apart verkrijgbaar in ½" of ¾"). De ene uitgang gaat naar de mengkraan (ongefilterrd), de andere naar de filter. Gebruik PTFE-tape op alle verbindingen voor een goede afdichting.',
              },
              {
                nr: '2',
                titel: 'Filterbehuizing monteren en patronen plaatsen',
                desc: 'Bevestig de filterbehuizing(en) aan de binnenwand van de kast met de meegeleverde schroeven. Zorg voor voldoende ruimte onder de behuizing om de patronen te kunnen wisselen (ca. 20 cm vrij). Schroefdop de patroonhouder los, plaats de cartridges en sluit af. Verbind de in- en uitlaatpoorten met de snelkoppelingen. Bij een meerfasig systeem let u op de stroomrichting (pijl op de behuizing).',
              },
              {
                nr: '3',
                titel: 'Systeem doorspoelen en op lekken controleren',
                desc: 'Open de waterafsluiter langzaam. Spoel het systeem minimaal 5 minuten door door de filterkraan te laten lopen — dit verwijdert koolstofstof en losse deeltjes uit de nieuwe patronen. Controleer alle verbindingen op lekken. Gooi de eerste 10 liter gefilterd water weg voordat u het consumeert. Het systeem is nu klaar voor gebruik.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 border border-gray-100 rounded-xl p-5 hover:border-[#005F8A]/30 transition-colors">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#005F8A] text-white flex items-center justify-center font-bold text-lg">
                  {s.nr}
                </div>
                <div>
                  <p className="font-bold text-[#003F5C] mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Tip:</strong> heeft u een osmose systeem in gedachten voor de
            toekomst? Kies een onderbouw koolstoffilter dat ook als pre-filter voor een osmose systeem
            kan dienen. De T-koppeling en slangen hoeft u dan niet opnieuw te installeren.
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten overzicht: aanschaf, installatie en jaarlijks</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Kostenpost</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Eenmalig</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Per jaar</th>
                </tr>
              </thead>
              <tbody>
                {kostenTabel.map((r, i) => (
                  <tr key={r.post} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 text-gray-800">{r.post}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.eenmalig}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.jaarbedrag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Ter vergelijking: een filterkan kost €40–90 per jaar aan patronen maar geeft minder
            filterkwaliteit en minder gemak. Een omgekeerde osmose systeem kost meer in aanschaf
            (€150–400) maar filtert aanzienlijk grondiger. Lees de vergelijking op de{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              osmose pagina
            </Link>.
          </p>
        </section>

        {/* Voor wie */}
        <section id="voor-wie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Voor wie is een onderbouw koolstoffilter de juiste keuze?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="font-bold text-green-800 mb-3">Goed geschikt voor...</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Huiseigenaren die een permanente filteroplossing willen',
                  'Gezinnen die dagelijks gefilterd kraanwater willen',
                  'Mensen die chloorsmaak en -geur wilt verwijderen',
                  'Gebruikers die een filterkan te omslachtig vinden',
                  'Als pre-filter voor een toekomstig osmose systeem',
                  'Bij gebruik van espressomachine (chloor geeft bittersmaak)',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-green-600 shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-bold text-red-800 mb-3">Minder geschikt voor...</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Huurders zonder toestemming voor leidingaanpassingen',
                  'Als u nitraten of PFAS wilt verwijderen',
                  'Bij hard water en kalkproblemen (>14°dH)',
                  'Als u bacteriologische zekerheid wilt',
                  'Bij een privéwaterput met onbekende kwaliteit',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-red-500 shrink-0 mt-0.5">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Twijfelt u tussen een onderbouw koolstoffilter en een volledig osmose systeem? Bekijk
            de vergelijking van alle{' '}
            <Link href="/waterfilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              waterfiltersoorten
            </Link>{' '}
            voor een compleet overzicht.
          </p>
        </section>

        {/* Wanneer osmose */}
        <section id="vs-osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer heeft u omgekeerde osmose nodig in plaats van een koolstoffilter?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een onderbouw koolstoffilter is een uitstekende keuze voor smaakverbetering en chloorverwijdering.
            Maar er zijn situaties waarbij actieve kool fundamenteel tekortschiet:
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                titel: 'Hoog nitraatgehalte',
                desc: 'In agrarische gebieden kan nitraat boven de drempelwaarde van 50 mg/L liggen. Koolstoffilters verwijderen nitraat nauwelijks (<10%). Omgekeerde osmose verwijdert 85–95% van nitraat.',
                kleur: 'red',
              },
              {
                titel: 'PFAS-belasting',
                desc: 'Bewoners nabij industriële PFAS-bronnen hebben behoefte aan een systeem dat PFAS echt verwijdert. Osmose verwijdert 90–98% van PFAS-verbindingen, ook de kortketenige varianten zoals GenX.',
                kleur: 'red',
              },
              {
                titel: 'Hard water (>14°dH)',
                desc: 'Koolstoffilters verwijderen vrijwel geen kalk. Als u kalkaanslag op apparaten wilt voorkomen, heeft u een waterontharder of osmose nodig.',
                kleur: 'amber',
              },
              {
                titel: 'Microbiologische zekerheid',
                desc: 'Bij gebruik van privéwaterputten of als u medisch kwetsbaar bent, biedt een koolstoffilter geen bescherming tegen bacteriën. UV + koolstof of osmose is dan de juiste keuze.',
                kleur: 'amber',
              },
            ].map(item => (
              <div
                key={item.titel}
                className={`border-l-4 rounded-r-xl p-4 ${
                  item.kleur === 'red'
                    ? 'border-red-400 bg-red-50'
                    : 'border-amber-400 bg-amber-50'
                }`}
              >
                <p className={`font-bold mb-1 ${item.kleur === 'red' ? 'text-red-800' : 'text-amber-800'}`}>
                  {item.titel}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Slim combineren:</strong> een onderbouw koolstoffilter
            en omgekeerde osmose sluiten elkaar niet uit — ze vullen elkaar aan. Een koolstoffilter
            als pre-filter voor osmose verwijdert chloor dat het RO-membraan beschadigt en verlengt
            daarmee de levensduur van het membraan aanzienlijk. Lees meer op de pagina{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose
            </Link>.
          </div>
        </section>

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter overzicht',
                desc: 'Complete gids over koolstoffilters: werking, types en kosten.',
              },
              {
                href: '/koolstoffilter/werking',
                title: 'Hoe werkt een koolstoffilter?',
                desc: 'Adsorptie, van der Waals-krachten, GAC vs blokfilter — de wetenschap uitgelegd.',
              },
              {
                href: '/koolstoffilter/vervangen',
                title: 'Koolstoffilter vervangen',
                desc: 'Wanneer en hoe vervangt u de patronen van uw onderbouw systeem?',
              },
              {
                href: '/koolstoffilter/soorten',
                title: 'Soorten koolstoffilters',
                desc: 'Overzicht van alle types: GAC, blokfilter, inline, keramisch+kool.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Wanneer is osmose een betere keuze dan een koolstoffilter?',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Alle waterfiltersoorten',
                desc: 'Vergelijking van alle filtertechnologieën voor thuisgebruik.',
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

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/koolstoffilter" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">Koolstoffilter overzicht</p>
              <p className="text-sm text-gray-500">Koolstoffilter overzicht</p>
            </Link>
            <Link href="/koolstoffilter/kopen" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">Koolstoffilter kopen: prijsvergelijking</p>
              <p className="text-sm text-gray-500">Koolstoffilter kopen: prijsvergelijking</p>
            </Link>
            <Link href="/filtertechnieken/actief-kool" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">Actief kool filtertechniek uitgelegd</p>
              <p className="text-sm text-gray-500">Actief kool filtertechniek uitgelegd</p>
            </Link>
            <Link href="/waterfilter/soorten" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">Alle waterfiltersoorten vergeleken</p>
              <p className="text-sm text-gray-500">Alle waterfiltersoorten vergeleken</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over onderbouw koolstoffilters
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
