import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Koolstoffilter vervangen: wanneer en hoe? (Handleiding 2026)',
  description:
    'Wanneer en hoe vervangt u een koolstoffilter? Vervangingsintervallen per type (GAC, blokfilter, onderbouw), signalen dat het filter op is en risicos.',
  alternates: { canonical: 'https://waterfilterplatform.nl/koolstoffilter/vervangen' },
  openGraph: {
    title: 'Koolstoffilter vervangen: wanneer en hoe? (Handleiding 2026)',
    description:
      'Vervangingsintervallen per filtertype, signalencheck, DIY vervangingsgids en kostentabel. Risico\'s van een te oud koolstoffilter uitgelegd.',
    url: 'https://waterfilterplatform.nl/koolstoffilter/vervangen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Waarom moet een koolstoffilter vervangen worden?',
    answer:
      'Een koolstoffilter raakt verzadigd naarmate de adsorptieplekken op het koolstofoppervlak bezet raken door chloor, THM en andere organische stoffen. Na verzadiging stopt de adsorptie — nieuwe verontreinigingen passeren het filter ongehinderd. Bij granulaire filters kan ook "kanalvorming" optreden: het water zoekt de weg van de minste weerstand langs de koolkorrels. In een vochtige, verzadigde koolstofmassa kan bovendien bacteriegroei optreden, waardoor een te oud filter de waterkwaliteit juist verslechtert in plaats van verbetert.',
  },
  {
    question: 'Hoe lang gaat een GAC koolstoffilter mee?',
    answer:
      'Een GAC-filter (granulair) in een filterkan zoals Brita of PearlCo gaat 4–6 weken of ongeveer 150 liter mee. Bij hard water (>14°dH) of hoge chloorconcentraties (>0,5 mg/L) kan dit korter zijn — de kool raakt sneller verzadigd. Een GAC kraanfilter (op de kraan gemonteerd) gaat 2–3 maanden mee bij normaal gebruik van 2–3 liter per dag. Vervang altijd op basis van het eerste criterium dat bereikt wordt: tijd of volume.',
  },
  {
    question: 'Hoe lang gaat een koolstofblokfilter mee?',
    answer:
      'Een koolstofblokfilter (CTO) gaat langer mee dan GAC door de compactere structuur en betere benutting van het filteeroppervlak. Een inline blokfilter voor kraanfiltergebruik gaat 3–6 maanden of 500–1500 liter. Een onderbouw blokfilterpatroon gaat 6–12 maanden of 2000–4000 liter bij normaal huishoudelijk gebruik. De sediment voorfilter in een meerfasig systeem moet vaker worden vervangen: elke 3–6 maanden, afhankelijk van de troebelheid van het water.',
  },
  {
    question: 'Wat zijn de signalen dat een koolstoffilter moet worden vervangen?',
    answer:
      'Vijf belangrijke signalen: (1) Terugkerende chloorgeur of -smaak in het gefilterde water — adsorptieplekken zijn vol. (2) Onaangename of vreemde geur die niet naar chloor ruikt — mogelijke bacteriegroei in het filter. (3) Merkbaar verminderde doorstroomsnelheid — het filter is mechanisch verstopt. (4) Meer kalk dan normaal — de ionenwisselhars is uitgeput (bij combinatiefilters). (5) De aanbevolen vervangingsdatum is verstreken. Vertrouw bij twijfel altijd op de datum, ook als het water nog goed smaakt — verzadiging voor THM en pesticiden is niet direct merkbaar.',
  },
  {
    question: 'Kan ik een koolstoffilterpatroon zelf spoelen en hergebruiken?',
    answer:
      'Nee. Een verzadigde koolstofpatroon kan niet worden gespoeld of geregenereerd voor thuisgebruik. De geadsorbeerde stoffen zitten chemisch gebonden aan het koolstofoppervlak en lossen niet op in spoelwater. Industriële regeneratie (verhitting tot 800–900°C in stoomovet) is wel mogelijk maar niet praktisch voor consumentencartridges. Gebruik nooit een verlopen filterpatroon opnieuw — de geadsorbeerde stoffen kunnen desorpteren en in het water terechtkomen bij veranderde temperatuur of pH.',
  },
  {
    question: 'Hoe vervang ik het filter van een onderbouw systeem?',
    answer:
      'Zet de waterafsluiter dicht. Houd een kleine emmer of handdoek klaar. Gebruik de meegeleverde filterwrench (of uw hand) om de patroonhouder linksom te draaien. Trek de houder los en verwijder de oude patroon. Spoel de houder uit met schoon water. Plaats de nieuwe patroon (let op de stroomrichting bij sommige typen). Draai de houder handdicht rechtsom — overtighten niet met gereedschap tenzij er een lek is. Open de waterafsluiter en spoel minimaal 5 minuten voor verwijdering van koolstofstof.',
  },
  {
    question: 'Wat kost het vervangen van een koolstoffilter?',
    answer:
      'Doe-het-zelf vervanging kost alleen de patroonprijs: €5–15 per patroon voor een filterkan of kraanfilter; €15–40 per patroon voor een onderbouw koolstofblokfilter; €8–25 per sediment voorfilterpatroon. Vervanging door een loodgieter of servicetechnicus kost extra: €50–100 voor een servicebeurt. Bij een jaarcontract of abonnement (sommige fabrikanten bieden dit aan) kunt u de patronenkosten spreiden. DIY is voor de meeste systemen goed te doen en levert aanzienlijke besparingen op.',
  },
  {
    question: 'Waarom raakt een filter in hard watergebieden sneller verzadigd?',
    answer:
      'In hardwatergebieden (>14°dH) bevat leidingwater hoge concentraties calcium en magnesium. Hoewel koolstoffilters kalk niet effectief verwijderen, verstopt kalk de poriën van de koolstofstructuur mechanisch over tijd. Dit vermindert de beschikbare adsorptiecapaciteit en doorstroom, waardoor het filter sneller zijn effectiviteit verliest. Daarnaast behandelen waterbedrijven in hardwatergebieden soms met hogere chloorconcentraties, wat snellere verzadiging van de koolstof veroorzaakt. In regio\'s met water boven 20°dH kan het vervangingsinterval 20–40% korter zijn dan de fabrikantaanbeveling.',
  },
];

const intervalTabel = [
  {
    type: 'GAC filterkan (Brita, PearlCo, Laica)',
    interval: '4–6 weken',
    liter: '~150 L',
    hardwaterNote: '3–4 weken bij >14°dH',
  },
  {
    type: 'GAC kraanfilter (op de kraan)',
    interval: '2–3 maanden',
    liter: '400–600 L',
    hardwaterNote: '6–8 weken bij >14°dH',
  },
  {
    type: 'Koolstofblok kraanfilter',
    interval: '3–6 maanden',
    liter: '500–1500 L',
    hardwaterNote: '2–4 maanden bij >14°dH',
  },
  {
    type: 'Inline blokfilter (onderbouw)',
    interval: '6–12 maanden',
    liter: '2000–4000 L',
    hardwaterNote: '4–8 maanden bij >14°dH',
  },
  {
    type: 'Sediment voorfilter (5–20 µm)',
    interval: '3–6 maanden',
    liter: '3000–5000 L',
    hardwaterNote: '2–4 maanden bij troebel water',
  },
  {
    type: 'Pre-filter voor osmose systeem',
    interval: '6 maanden',
    liter: '~5000 L',
    hardwaterNote: '3–4 maanden bij hoog chloor',
  },
];

const kostenTabel = [
  {
    type: 'Filterkan (GAC patroon)',
    diy: '€5–12 per patroon',
    professional: 'N.v.t. (zelf wisselen)',
    jaarDiy: '€30–80',
  },
  {
    type: 'Kraanfilter (GAC/blok)',
    diy: '€8–20 per patroon',
    professional: '€50–80 servicebeurt',
    jaarDiy: '€20–60',
  },
  {
    type: 'Inline blokfilter (onderbouw)',
    diy: '€15–40 per patroon',
    professional: '€60–100 servicebeurt',
    jaarDiy: '€30–80',
  },
  {
    type: 'Sediment voorfilter',
    diy: '€8–20 per patroon',
    professional: 'Combineren met hoofdfilter',
    jaarDiy: '€15–40',
  },
];

const vervangingsStappen = [
  {
    nr: '1',
    titel: 'Waterafsluiter dichtdraaien',
    desc: 'Sluit de afsluiter op de waterleiding onder het aanrecht (bij onderbouw systeem) of de hoofdkraan (bij kraanfilter). Open de kraan om de restdruk uit het systeem te laten lopen. Leg een handdoek of emmer neer — er zal water vrijkomen bij het losmaken van de patroonhouder.',
  },
  {
    nr: '2',
    titel: 'Patroonhouder losdraaien en oud patroon verwijderen',
    desc: 'Gebruik de meegeleverde filterwrench (grote plastic sleutel) om de doorzichtige of witte patroonhouder linksom te draaien. Bij een filterkan: trek simpelweg de cartridge eruit. Gooi de oude patroon weg — deze is niet herbruikbaar of regenereerbaar. Inspecteer de houder op slijm, verkleuring of kalkaanslag.',
  },
  {
    nr: '3',
    titel: 'Patroonhouder reinigen',
    desc: 'Spoel de lege patroonhouder uit met schoon water. Bij zichtbaar slijm of biofilm: was de houder uit met een milde zeeplossing en spoel goed na. Inspecteer de O-ring (afdichtingsring) voor beschadiging of uitdroging — smeer licht in met siliconenolie als het systeem dit toelaat. Een beschadigde O-ring veroorzaakt lekkage.',
  },
  {
    nr: '4',
    titel: 'Nieuwe patroon plaatsen',
    desc: 'Verwijder de verpakking van de nieuwe patroon. Let op de correcte oriëntatie: sommige blokfilters hebben een "in"- en "out"-kant aangegeven met een pijl. Plaats de patroon in de houder. Schroef de houder rechtsom vast — handdicht is voldoende voor de meeste systemen. Gebruik de filterwrench alleen als er nadien een lek optreedt.',
  },
  {
    nr: '5',
    titel: 'Systeem doorspoelen en op lekken controleren',
    desc: 'Open de waterafsluiter langzaam. Laat het systeem 3–10 minuten doorstromen om koolstofstof en productie-residuen te verwijderen. Gooi dit inloopwater weg — het kan donker of troebel zijn. Controleer alle verbindingen op lekken. Het systeem is klaar voor gebruik wanneer het water helder is en er geen lekken zichtbaar zijn.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Koolstoffilter', url: 'https://waterfilterplatform.nl/koolstoffilter' },
  { name: 'Vervangen', url: 'https://waterfilterplatform.nl/koolstoffilter/vervangen' },
];

export default function KoolstoffilterVervangenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Koolstoffilter vervangen: wanneer en hoe? (Handleiding 2026)',
          description:
            'Vervangingsintervallen per filtertype, signalencheck, DIY vervangingsgids en kostentabel. Risico\'s van een te oud koolstoffilter uitgelegd.',
          datePublished: '2026-02-25',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/koolstoffilter/vervangen',
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
            <span className="text-gray-700 font-medium">Vervangen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Koolstoffilter vervangen: wanneer en hoe? (Handleiding 2026)
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een koolstoffilter moet op tijd worden vervangen — anders filtert het niet alleen minder
            effectief, maar kan het ook schadelijke stoffen teruggeven aan het water. Op deze pagina
            vindt u de exacte vervangingsintervallen per filtertype, de vijf signalen dat uw filter op
            is, en een stap-voor-stap handleiding voor vervanging.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~7 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Vervang een GAC filterkan patroon elke 4–6 weken (150 L), een koolstofblok kraanfilter na 3–6 maanden, en een onderbouw blokfilter na 6–12 maanden of 2000–4000 liter. Signalen: chloorgeur terug, onaangename smaak, verminderde doorstroom. Vervanging is een eenvoudige doe-het-zelf klus van 5–15 minuten." />

        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#waarom', 'Waarom een koolstoffilter vervangen?'],
              ['#intervallen', 'Intervallen per filtertype'],
              ['#signalen', 'Signalen dat het filter op is'],
              ['#handleiding', 'Stap-voor-stap vervangingsgids'],
              ['#kosten', 'Kosten: DIY vs professional'],
              ['#risicos', "Risico's van niet vervangen"],
              ['#hardwater', 'Tip voor hardwatergebieden'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Waarom vervangen */}
        <section id="waarom">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom moet een koolstoffilter worden vervangen?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Geactiveerde kool filtert via adsorptie: verontreinigingen binden zich aan de
            miljoenen bindingsplaatsen op het interne oppervlak van de koolstofmatrix. Dit
            oppervlak is eindig — doorgaans 500–1500 m² per gram kool. Zodra alle bindingsplaatsen
            bezet zijn door chloor, THM, pesticiden en andere organische stoffen, treedt
            <strong> verzadiging</strong> op.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij verzadiging gebeuren er drie dingen die de waterkwaliteit verslechteren:
          </p>
          <div className="space-y-3 mb-5">
            <div className="flex gap-3 items-start bg-red-50 border border-red-100 rounded-xl p-4">
              <span className="text-red-500 font-bold text-lg shrink-0">1</span>
              <div>
                <p className="font-semibold text-red-800 mb-1">Adsorptie stopt</p>
                <p className="text-sm text-gray-700">Nieuwe chloor, THM en pesticiden passeren het filter ongehinderd. Het gefilterde water is nu even vervuild als ongefilterrd leidingwater.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-red-50 border border-red-100 rounded-xl p-4">
              <span className="text-red-500 font-bold text-lg shrink-0">2</span>
              <div>
                <p className="font-semibold text-red-800 mb-1">Bacteriegroei in het filter</p>
                <p className="text-sm text-gray-700">De vochtige, organische omgeving van een oud koolstoffilter is een ideale broedplaats voor bacteriën. Bacteriën kunnen biofilms vormen die de waterkwaliteit verslechteren en zelfs gezondheidsrisico's opleveren.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start bg-amber-50 border border-amber-100 rounded-xl p-4">
              <span className="text-amber-600 font-bold text-lg shrink-0">3</span>
              <div>
                <p className="font-semibold text-amber-800 mb-1">Desorptie (terugstromen van opgeslagen stoffen)</p>
                <p className="text-sm text-gray-700">Bij veranderde omstandigheden (temperatuur, pH) kunnen eerder gebonden stoffen loskomen en het water in stromen — een effect dat "desorptie" heet. Een zeer oud filter kan daardoor meer verontreinigingen afgeven dan het absorbeert.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Om te begrijpen waarom dit fundamenteel werkt zoals het werkt, lees de pagina{' '}
            <Link href="/koolstoffilter/werking" className="text-[#005F8A] underline hover:no-underline">
              hoe werkt een koolstoffilter
            </Link>.
          </p>
        </section>

        {/* Intervallen */}
        <section id="intervallen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vervangingsintervallen per filtertype</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het vervangingsinterval verschilt sterk per filtertype. Vervang altijd op basis van het
            eerste criterium dat bereikt wordt: tijd of volume.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[520px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Filtertype</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Interval</th>
                  <th className="py-2.5 px-3 font-semibold text-center hidden sm:table-cell">Of na (liter)</th>
                  <th className="py-2.5 px-3 font-semibold text-left hidden md:table-cell">Hard water</th>
                </tr>
              </thead>
              <tbody>
                {intervalTabel.map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 text-gray-800 font-medium">{r.type}</td>
                    <td className="py-2.5 px-3 text-center font-semibold text-[#005F8A]">{r.interval}</td>
                    <td className="py-2.5 px-3 text-center text-gray-600 hidden sm:table-cell">{r.liter}</td>
                    <td className="py-2.5 px-3 text-xs text-amber-700 hidden md:table-cell">{r.hardwaterNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Intervallen zijn gebaseerd op fabrieksaanbevelingen en typisch Nederlands huishoudelijk gebruik (2–4 personen,
            3–6 liter gefilterd water per dag). Bij hoog verbruik of slechte waterkwaliteit kan het interval
            korter zijn.
          </p>
        </section>

        {/* Signalen */}
        <section id="signalen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">5 signalen dat uw koolstoffilter aan vervanging toe is</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Niet alle verzadigingsproblemen zijn direct merkbaar — chloor is reukvol, maar THM
            en pesticiden zijn smaak- en geurloos. Vertrouw daarom altijd op de datum als
            anker. Aanvullend zijn dit de vijf signalen om op te letten:
          </p>
          <div className="space-y-3">
            {[
              {
                nr: '1',
                titel: 'Chloorgeur of -smaak is terug',
                desc: 'Als gefilterd water weer naar zwembadwater ruikt, zijn de adsorptieplekken voor chloor vol. Dit is het meest directe en betrouwbare signaal van verzadiging.',
              },
              {
                nr: '2',
                titel: 'Vreemde of onaangename geur die niet naar chloor ruikt',
                desc: 'Een muf, aards of schimmelachtige geur uit het filter wijst mogelijk op bacteriegroei in het filtermateriaal. Vervang onmiddellijk en reinig ook de patroonhouder.',
              },
              {
                nr: '3',
                titel: 'Merkbaar verminderde doorstroomsnelheid',
                desc: 'Als het water langzamer stroomt dan normaal, is het filter mechanisch verstopt door sediment of kalk. Dit geldt vooral voor blokfilters in hardwatergebieden.',
              },
              {
                nr: '4',
                titel: 'Meer kalk dan gebruikelijk',
                desc: 'Bij filterkansen met ionenwisselaar: als u meer kalkaanslag in uw waterkoker of espressomachine ziet, is de ionenwisselhars uitgeput. Dit is een indirect signaal voor totale filteruitputting.',
              },
              {
                nr: '5',
                titel: 'De vervangingsdatum is verstreken',
                desc: 'Het meest betrouwbare en makkelijkste signaal. Stel een herinnering in bij installatie van een nieuw filter. Vele filterkansen hebben een ingebouwde timer die u hierop attendeert.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-3 items-start border border-gray-100 rounded-xl p-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[#E0F2FE] text-[#005F8A] flex items-center justify-center font-bold text-sm">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Handleiding */}
        <section id="handleiding">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Stap-voor-stap handleiding: koolstoffilter vervangen</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Vervanging van een koolstoffilterpatroon is een eenvoudige klus die de meeste mensen
            zelf kunnen uitvoeren in 5–15 minuten. De onderstaande handleiding geldt voor
            onderbouw- en inline filterpatronen; bij filterkannen volgt u gewoon de bijsluiter
            van het merk.
          </p>
          <div className="space-y-4">
            {vervangingsStappen.map(s => (
              <div
                key={s.nr}
                className="flex gap-4 border border-gray-100 rounded-xl p-5 hover:border-[#005F8A]/30 transition-colors"
              >
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
          <div className="mt-5 bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Stel direct een herinnering in:</strong> schrijf de
            vervangingsdatum op de patroon zelf met een permanente stift, of stel een agenda-herinnering
            in. Bij meerfasige systemen hoeven de patronen niet gelijktijdig te worden vervangen —
            volg de specifieke intervalletabel per type patroon.
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten: doe-het-zelf vs professionele vervanging</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Filtertype</th>
                  <th className="py-2.5 px-3 font-semibold text-right">DIY (patroon)</th>
                  <th className="py-2.5 px-3 font-semibold text-right hidden sm:table-cell">Professioneel</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Jaarkosten DIY</th>
                </tr>
              </thead>
              <tbody>
                {kostenTabel.map((r, i) => (
                  <tr key={r.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 text-gray-800">{r.type}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A]">{r.diy}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600 hidden sm:table-cell">{r.professional}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{r.jaarDiy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Professionele vervanging is alleen aan te bevelen bij systemen met een complexe installatie
            of als u een jaarlijks onderhoudscontract heeft dat dit omvat. Voor de meeste
            consumentensystemen is doe-het-zelf vervanging eenvoudig en bespaart het €50–100 per beurt.
          </p>
        </section>

        {/* Risico's van niet vervangen */}
        <section id="risicos">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Risico&apos;s van een te oud koolstoffilter</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een koolstoffilter dat te lang in gebruik is geeft een vals gevoel van veiligheid.
            Het water lijkt gefilterd, maar de filterprestaties zijn sterk verminderd of zelfs
            omgekeerd. Concrete risico&apos;s:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                titel: 'Geen chloor- of THM-verwijdering meer',
                desc: 'Bij volledig verzadigde kool passeert alle chloor het filter ongehinderd. U drinkt dan feitelijk ongefilterrd leidingwater, maar betaalt voor een filter.',
              },
              {
                titel: 'Bacteriële besmetting',
                desc: 'In een verlopen, vochtig filter kunnen bacteriën als Pseudomonas en E. coli groeien. Dit risico is groter in warm weer (>20°C) en bij langere gebruiksonderbrekingen.',
              },
              {
                titel: 'Desorptie van geabsorbeerde stoffen',
                desc: 'Chloor, THM en pesticiden die eerder zijn geabsorbeerd kunnen bij temperatuurverandering of pH-schommeling terugstromen in het water — soms in hogere concentraties dan het invoerwater.',
              },
              {
                titel: 'Valse zekerheid bij kwetsbare gebruikers',
                desc: 'Ouderen, baby\'s en mensen met een verzwakt immuunsysteem zijn gevoeliger voor de gevolgen. Een verlopen filter is voor deze groep geen filter — het is een risicofactor.',
              },
            ].map(item => (
              <div key={item.titel} className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="font-semibold text-red-800 mb-2 text-sm">{item.titel}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hardwater tip */}
        <section id="hardwater">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Tip voor hardwatergebieden: korter vervangen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In regio&apos;s met hard water (meer dan 14°dH — dit geldt voor grote delen van
            Noord-Brabant, Gelderland, Limburg en Zuid-Holland) raken koolstoffilters sneller
            vervuild om twee redenen:
          </p>
          <div className="space-y-3 mb-5">
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="font-semibold text-amber-800 mb-1">1. Kalkaanslag verstopt poriën</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Calcium en magnesium uit het water bezetten de mesoporiën en macroporiën van de
                koolstofstructuur mechanisch. Dit vermindert de beschikbare adsorptiecapaciteit
                en de doorstroomsnelheid, ook al zijn de adsorptieplekken zelf nog niet volledig
                vol.
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="font-semibold text-amber-800 mb-1">2. Hogere chloorconcentraties</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Waterbedrijven doseren in hardwatergebieden soms hogere chloorconcentraties om
                kalkneerslag in het leidingnet tegen te gaan. Hoe meer chloor, hoe sneller de
                koolstof verzadigt. Check het waterrapport van uw waterbedrijf voor de chloorwaarden
                in uw gemeente.
              </p>
            </div>
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Praktisch advies:</strong> woon u in een hardwatergebied?
            Verminder het aanbevolen vervangingsinterval met 25–40%. Gebruik voor een onderbouw systeem
            altijd een sediment voorfilter — die vangt de meeste kalkneerslag op en beschermt de
            dure koolstofpatroon. En overweeg een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose systeem
            </Link>{' '}
            dat kalk volledig verwijdert en daarmee de belasting op koolstoffilters elimineert.
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
                desc: 'Complete gids: types, kosten en wanneer een koolstoffilter genoeg is.',
              },
              {
                href: '/koolstoffilter/werking',
                title: 'Hoe werkt een koolstoffilter?',
                desc: 'Adsorptie, poriestructuur en de wetenschap achter actieve kool.',
              },
              {
                href: '/koolstoffilter/onderbouw',
                title: 'Onderbouw koolstoffilter',
                desc: 'Top 5 modellen, installatie en kosten voor een onderbouw systeem.',
              },
              {
                href: '/koolstoffilter/soorten',
                title: 'Soorten koolstoffilters',
                desc: 'GAC, blokfilter, inline, keramisch+kool — welk type past bij u?',
              },
              {
                href: '/koolstoffilter/kopen',
                title: 'Koolstoffilter kopen',
                desc: 'Koopgids met vergelijkingstabel en aanbevelingen per situatie.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'Wanneer is osmose een betere keuze dan een koolstoffilter?',
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

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over koolstoffilter vervangen
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
