import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Koolstoffilter kopen: welk type past bij jou? Vergelijking 2026',
  description:
    'Koopgids voor koolstoffilters: vergelijk filterkan, kraanfilter en inline blokfilter op prijs, filtercapaciteit en NSF-certificering. Onafhankelijk advies.',
  alternates: { canonical: 'https://waterfilterplatform.nl/koolstoffilter/kopen' },
  openGraph: {
    title: 'Koolstoffilter kopen — vergelijking en koopgids 2026',
    description:
      'Welk koolstoffilter past bij jou? Vergelijking van alle types op prijs, kwaliteit, NSF-certificering en filtercapaciteit.',
    url: 'https://waterfilterplatform.nl/koolstoffilter/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het belangrijkste keuzecriterium bij een koolstoffilter kopen?',
    answer:
      'Het belangrijkste criterium is de NSF/ANSI certificering. NSF/ANSI 42 garandeert dat het filter chloor, geur en smaak effectief verwijdert. NSF/ANSI 53 dekt ook gezondheidsschadelijke stoffen zoals lood. Een filter zonder certificering geeft geen onafhankelijke garantie op de geclaimde prestaties. Kies daarna op capaciteit (liter per patroon) passend bij uw verbruik.',
  },
  {
    question: 'Wat is het verschil tussen NSF/ANSI 42 en NSF/ANSI 53?',
    answer:
      'NSF/ANSI 42 is de norm voor esthetische verbetering: chloor, geur en smaak. Vrijwel alle koolstoffilters zijn hierop gecertificeerd. NSF/ANSI 53 is de strengere norm voor gezondheidsschadelijke stoffen: lood, bepaalde pesticiden, cryptosporidium en andere verontreinigingen. Als u een koolstoffilter koopt vanwege gezondheidsoverwegingen (niet alleen smaak), controleer dan of het filter NSF/ANSI 53 heeft.',
  },
  {
    question: 'Wat is beter: een blokfilter of een granulair koolstoffilter?',
    answer:
      'Een koolstofblokfilter is altijd beter dan een granulair filter (GAC) voor thuisgebruik. Blokfilters hebben een vaste structuur waardoor al het water door de actieve kool passeert — geen kortsluitstromen. De contacttijd is langer, de filtratie is consistenter en de mechanische deeltjesfiltratier (tot 0,5 micron) is een bonus. Granulaire filters zijn goedkoper maar presteren 10–20% minder op chloor en organische stoffen.',
  },
  {
    question: 'Hoe weet ik wanneer mijn koolstoffilter vervangen moet worden?',
    answer:
      'Er zijn drie signalen: (1) de fabrikant geeft een interval op in maanden en liters — houd dit bij; (2) de waterdruk daalt merkbaar (bij blokfilters); (3) de chloor- of aardse geur keert terug in het water. Wacht niet op dit laatste signaal: een verzadigd filter kan verontreinigingen teruggeven. Stel een herinnering in op uw telefoon bij aanschaf.',
  },
  {
    question: 'Kan ik een koolstoffilter kopen bij een gewone bouwmarkt?',
    answer:
      'Ja, basismodellen van filterkannen en kraanfilters zijn verkrijgbaar bij Gamma, Hornbach en Praxis. Kwalitatieve inline blokfilters en onderbouwsystemen vindt u beter bij gespecialiseerde webshops of waterzuiveringsbedrijven. Controleer altijd of een product een NSF-certificaat heeft voordat u koopt — dit staat niet altijd prominent vermeld bij bouwmarkten.',
  },
  {
    question: 'Moet ik een koolstoffilter kopen of direct een osmose systeem?',
    answer:
      'Als uw doel puur smaakverbetering en chloorverwijdering is, is een koolstoffilter een kosteneffectieve keuze. Als u ook nitraten, PFAS, medicijnresten, kalk of microplastics wilt aanpakken, is omgekeerde osmose de betere investering. Het prijsverschil in jaarlijkse filterkosten is kleiner dan veel mensen denken: €40–90 per jaar voor een filterkan versus €70–150 voor een osmose systeem.',
  },
  {
    question: 'Wat is de filtercapaciteit die ik nodig heb?',
    answer:
      'Reken op 2–3 liter gefilterd drinkwater per persoon per dag (inclusief koken en thee/koffie). Een gezin van vier personen verbruikt 8–12 liter per dag, ofwel 3000–4400 liter per jaar. Een filterkan van 150 liter per patroon heeft dan 20–30 patronen per jaar nodig. Een inline blokfilter van 4000 liter capaciteit volstaat voor zo&apos;n gezin met één wissel per jaar.',
  },
  {
    question: 'Zijn goedkope no-name koolstoffilters net zo goed als dure merken?',
    answer:
      'Niet altijd. Het absolute minimumvereiste is een NSF/ANSI 42 certificaat — dat bewijst onafhankelijke kwaliteitscontrole. Zonder dat certificaat zijn prestaties niet gegarandeerd, ongeacht wat de verpakking claimt. Binnen gecertificeerde producten zijn er wel kwaliteitsverschillen: de koolstofkwaliteit, het koolstofgewicht per patroon en de constructie van de behuizing variëren sterk. Lees gebruikerservaringen voor aankoop.',
  },
];

const vergelijkingTabel = [
  {
    type: 'Filterkan',
    prijs: '€ 20–60',
    filterwissel: '4–6 weken',
    capaciteit: '150–300 L/patroon',
    geschikt: 'Huurders, kleine huishoudens',
    nsf: 'NSF 42',
    highlight: false,
  },
  {
    type: 'Kraanfilter',
    prijs: '€ 30–80',
    filterwissel: '3–6 maanden',
    capaciteit: '1000–2000 L/patroon',
    geschikt: 'Eenvoudige installatie',
    nsf: 'NSF 42',
    highlight: false,
  },
  {
    type: 'Inline blokfilter',
    prijs: '€ 60–150',
    filterwissel: '6 maanden',
    capaciteit: '2000–4000 L/patroon',
    geschikt: 'Beste koolstof kwaliteit',
    nsf: 'NSF 42 + 53',
    highlight: true,
  },
  {
    type: 'Onderbouw inline systeem',
    prijs: '€ 100–250',
    filterwissel: '6–12 maanden',
    capaciteit: '3000–6000 L/patroon',
    geschikt: 'Hoog verbruik, schone keuken',
    nsf: 'NSF 42 + 53',
    highlight: false,
  },
];

export default function KoolstoffilterKopenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Koolstoffilter', url: 'https://waterfilterplatform.nl/koolstoffilter' },
          { name: 'Kopen', url: 'https://waterfilterplatform.nl/koolstoffilter/kopen' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/koolstoffilter" className="hover:text-[#005F8A]">Koolstoffilter</Link>
            <span className="mx-2">/</span>
            <span>Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Koolstoffilter kopen: welk type past bij jou? Vergelijking 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            U wilt een koolstoffilter kopen, maar welk type past het beste bij uw situatie? Op
            deze pagina vergelijken we alle types op prijs, filtercapaciteit, kwaliteit en
            certificering. We leggen uit waarop u moet letten bij de aanschaf, wanneer een
            koolstofblokfilter beter is dan een granulair filter en wanneer u beter direct overstapt
            naar omgekeerde osmose.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/koolstoffilter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              ← Terug naar koolstoffilter uitleg
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose filter kopen →
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <QuickAnswer answer="Een koolstoffilter kopen begint met het kiezen van het juiste type: filterkan (geen installatie, €20–60), kraanfilter (op de kraan, €30–80) of inline blokfilter (onder aanrecht, €60–150). Controleer altijd NSF/ANSI 42 certificering. Een blokfilter filtert altijd beter dan een granulair filter. Vervang het patroon op tijd — bij filterkannen elke 4–6 weken, bij inline elke 6–12 maanden." />

        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">
            Op deze pagina
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#vergelijking" className="hover:underline">Vergelijkingstabel alle types</a></li>
            <li><a href="#certificering" className="hover:underline">NSF/ANSI certificering uitgelegd</a></li>
            <li><a href="#blok-vs-granulair" className="hover:underline">Blokfilter vs granulair</a></li>
            <li><a href="#wordenop" className="hover:underline">Waarop letten bij aankoop?</a></li>
            <li><a href="#filterwissel" className="hover:underline">Vervangingsinterval per type</a></li>
            <li><a href="#upgrade-osmose" className="hover:underline">Wanneer upgraden naar osmose?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Vergelijking: welk type koolstoffilter past bij jou?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De vier hoofdtypen koolstoffilters verschillen aanzienlijk in aanschafprijs,
            filtercapaciteit, installatievereisten en geschiktheid. Onderstaande tabel geeft een
            compleet overzicht om uw keuze te vergemakkelijken.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Filterwissel</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Capaciteit</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Certificering</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingTabel.map(r => (
                  <tr
                    key={r.type}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">
                      {r.type}
                      {r.highlight && (
                        <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-right">{r.prijs}</td>
                    <td className="py-2.5 px-3 text-right">{r.filterwissel}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.capaciteit}</td>
                    <td className="py-2.5 px-3 text-right text-xs text-[#005F8A] font-medium">{r.nsf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prijzen zijn richtprijzen voor de Nederlandse markt in 2026. Capaciteiten zijn typische
            waarden; werkelijke capaciteit hangt af van waterkwaliteit en verbruik.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            De inline blokfilter scoort het best op de combinatie van filterkwaliteit, capaciteit
            en jaarlijkse kosten voor gezinsgebruik. De filterkan wint op toegankelijkheid en
            nul-installatievereisten. Voor een huishouden van vier personen is een inline systeem
            vrijwel altijd de slimste langetermijnkeuze.
          </p>
        </section>

        <section id="certificering">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat betekent NSF/ANSI-certificering en waarom is het belangrijk?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            NSF International is een onafhankelijke Amerikaanse organisatie die waterfilterproducten
            test en certificeert. De ANSI-normen (American National Standards Institute) zijn de
            officieel erkende standaarden waaraan producten worden getoetst. In de Nederlandse en
            Europese markt gelden NSF-certificaten als de betrouwbaarste onafhankelijke
            kwaliteitsgarantie voor waterfilters.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-900">NSF/ANSI 42</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">Basis, altijd controleren</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Dekt esthetische verbetering van drinkwater: verwijdering van chloor, geur en
                smaakstoffen. Elk serieus koolstoffilter voor thuisgebruik moet minimaal NSF/ANSI
                42 hebben. Dit certificaat bewijst dat het filter daadwerkelijk doet wat het
                belooft op het gebied van smaak- en geurverbetering, getest bij onafhankelijk
                laboratorium.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-900">NSF/ANSI 53</h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold">Voor gezondheidsoverwegingen</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Dekt verwijdering van gezondheidsschadelijke stoffen: lood, kwik, chlooramine,
                turbiditeit (troebelheid), cryptosporidium, giardia en bepaalde pesticiden. Als u
                een koolstoffilter koopt vanwege zorgen over zware metalen of specifieke
                verontreinigingen, is NSF/ANSI 53 essentieel. Niet alle koolstoffilters hebben
                dit certificaat — controleer dit voorafgaand aan aankoop.
              </p>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-900">NSF/ANSI 401</h3>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">Opkomende verontreinigingen</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                De meest recente norm, gericht op opkomende verontreinigingen: medicijnresten,
                hormonen, bepaalde pesticiden en PFAS-verbindingen. Slechts een beperkt aantal
                koolstofblokfilters heeft deze certificering. Als PFAS of medicijnresten uw
                voornaamste zorg zijn, controleer dan expliciet op NSF 401 of overweeg omgekeerde
                osmose als grondigere oplossing.
              </p>
            </div>
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Let op:</strong> fabrikanten kunnen claimen dat hun
            filter &ldquo;tot NSF/ANSI 42 standaard&rdquo; filtert zonder daadwerkelijk gecertificeerd
            te zijn. Zoek naar het officiële NSF-keurmerk of verifieer op nsf.org of het product
            in de gecertificeerde productendatabase staat.
          </div>
        </section>

        <section id="blok-vs-granulair">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Blokfilter vs granulair koolstoffilter: wat is het verschil?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De twee hoofdvormen van actieve kool in waterfilters — blokfilter (block carbon) en
            granulair filter (GAC, granular activated carbon) — verschillen significant in
            prestaties, ook al bevatten ze beide actieve kool. Het verschil zit in de structuur
            en de contacttijd.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-3">Koolstofblokfilter</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Samengeperste vaste koolstructuur',
                  'Al het water passeert door de kool',
                  'Langere contacttijd = betere adsorptie',
                  'Werkt ook als mechanisch filter (~0,5 µm)',
                  'Consistent filtratieresultaat',
                  'Hogere weerstand, lagere doorstroomsnelheid',
                  'Beter voor lood, cysten en kleine organische stoffen',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-green-600 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-3">Granulair koolstoffilter (GAC)</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {[
                  'Losse koolkorrels in behuizing',
                  'Water kan langs korrels stromen (kanaalvorming)',
                  'Kortere contacttijd = minder adsorptie',
                  'Geen mechanische deeltjesfiltratier',
                  'Variabeler filtratieresultaat',
                  'Lagere weerstand, hogere doorstroomsnelheid',
                  'Goedkoper maar minder effectief',
                ].map(item => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-amber-500 font-bold shrink-0">~</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Conclusie:</strong> voor serieus thuisgebruik kiest u altijd een blokfilter.
            Granulaire koolstoffilters worden voornamelijk gebruikt als voorfase in grote
            industriële systemen of als goedkoop instapmodel voor filterkannen. Als u een inline
            filter of onderbouw systeem aanschaft, controleer dan of het filterpatroon van actief
            koolstof blok is — niet van losse granulaten.
          </p>
        </section>

        <section id="wordenop">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarop letten bij het kopen van een koolstoffilter?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Met zoveel keuzes op de markt is het lastig om een goede beslissing te nemen.
            Hieronder de vijf belangrijkste aandachtspunten die u door het aanbod helpen.
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'NSF/ANSI-certificaat',
                tekst:
                  'Het absolute minimumvereiste. NSF/ANSI 42 voor smaak en geur, NSF/ANSI 53 als u ook gezondheidsschadelijke stoffen wilt aanpakken. Producten zonder certificering bieden geen onafhankelijke garantie op hun claims. Controleer het certificaat op nsf.org of vraag de fabrikant om het certificaatnummer.',
              },
              {
                nr: '2',
                titel: 'Filtercapaciteit in liters',
                tekst:
                  'Een filterpatroon heeft een maximale capaciteit. Bij overschrijding raakt de actieve kool verzadigd en kan het filter verontreinigingen vrijgeven. Bereken uw dagelijks verbruik en kies een filter waarvan de capaciteit overeenkomt met uw vervangingsritme. 150 liter (filterkan) is voor een gezin van vier snel bereikt; 4000 liter (inline) gaat een jaar mee.',
              },
              {
                nr: '3',
                titel: 'Blokfilter vs granulair',
                tekst:
                  'Zoals hierboven uitgelegd: kies altijd een blokfilter voor de beste resultaten. Controleer bij twijfel de productomschrijving. De term "carbon block" of "koolstofblok" wijst op een blokfilter; "GAC" of "granulated activated carbon" op een granulair filter.',
              },
              {
                nr: '4',
                titel: 'Contacttijd en doorstroomsnelheid',
                tekst:
                  'Een langzamere doorstroomsnelheid betekent meer contacttijd tussen water en kool, en daarmee betere filtratie. Bij filterkannen die op zwaartekracht werken is de contacttijd automatisch hoog. Bij inline filters onder leidingdruk is de filterdichtheid (micron-rating) een indicatie voor de contacttijd.',
              },
              {
                nr: '5',
                titel: 'Beschikbaarheid van vervangingspatronen',
                tekst:
                  'Controleer voordat u koopt of vervangingspatronen gemakkelijk en betaalbaar verkrijgbaar zijn. Sommige goedkope systemen gebruiken merkspecifieke patronen die duur of moeilijk te vinden zijn. Kies bij voorkeur een systeem dat standaard 10-inch of 20-inch patronen gebruikt die bij meerdere leveranciers beschikbaar zijn.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start border border-gray-100 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="filterwissel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe lang gaat een koolstoffilterpatroon mee?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het vervangingsinterval van een koolstoffilter is een van de meest onderschatte
            aspecten bij de aanschaf. Te lang wachten met vervangen is niet alleen ineffectief —
            een verzadigd filterpatroon kan verontreinigingen die eerder zijn gebonden weer
            vrijgeven in het water, een fenomeen dat wordt aangeduid als &ldquo;column release&rdquo;.
          </p>
          <div className="space-y-3">
            {[
              {
                type: 'Filterkan (Brita e.d.)',
                interval: '4–6 weken',
                liter: '150–300 liter',
                signaal: 'Langzamere doorstroomsnelheid, terugkerende chloorlucht',
              },
              {
                type: 'Kraanfilter',
                interval: '3–6 maanden',
                liter: '1000–2000 liter',
                signaal: 'Verminderde waterdruk, terugkerende chloorlucht',
              },
              {
                type: 'Inline blokfilter',
                interval: '6–12 maanden',
                liter: '2000–4000 liter',
                signaal: 'Drukdaling, indicatorlampje (bij sommige systemen)',
              },
              {
                type: 'Onderbouw inline systeem',
                interval: '6–12 maanden',
                liter: '3000–6000 liter',
                signaal: 'Drukdaling, patroonkeuringslabel (datum)',
              },
            ].map(r => (
              <div key={r.type} className="border border-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-baseline gap-2 mb-1">
                  <p className="font-semibold text-gray-900 text-sm">{r.type}</p>
                  <p className="text-xs text-[#005F8A] font-medium shrink-0">{r.interval} / {r.liter}</p>
                </div>
                <p className="text-xs text-gray-500">Vervangingssignaal: {r.signaal}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#E0F2FE] rounded-2xl p-5 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Praktisch advies:</strong> stel bij aanschaf
            direct een herinnering in uw telefoonkalender in op het aanbevolen vervangingsmoment.
            Schrijf de installatiedatum op het filterpatroon. Bij hard water of hoog gebruik
            vervangt u aan de korte kant van het aanbevolen interval; bij zacht water en laag
            gebruik kunt u de lange kant aanhouden.
          </div>
        </section>

        <section id="upgrade-osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is het beter om direct te upgraden naar omgekeerde osmose?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een koolstoffilter is een uitstekende oplossing voor smaakverbetering en
            chloorverwijdering, maar heeft duidelijke grenzen. Er zijn situaties waarbij het
            verstandiger is om direct te investeren in een omgekeerde osmose systeem in plaats van
            eerst een koolstoffilter te kopen en later toch te upgraden.
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                trigger: 'U wilt ook kalk verwijderen',
                uitleg:
                  'Koolstoffilters verwijderen geen kalk. Als u last heeft van kalkaanslag in uw waterkoker, koffiemachine of douche, helpt een koolstoffilter niet. U heeft een waterontharder of omgekeerde osmose nodig.',
              },
              {
                trigger: 'U wilt PFAS volledig verwijderen',
                uitleg:
                  'Koolstofblokfilters verwijderen sommige PFAS-verbindingen gedeeltelijk. Omgekeerde osmose verwijdert 95–99% van alle PFAS-verbindingen via het membraan. Als dit uw prioriteit is, ga direct voor RO.',
              },
              {
                trigger: 'Uw water heeft hoge nitraatwaarden',
                uitleg:
                  'Nitraten binden niet aan actieve kool. Als uw waterbedrijf hoge nitraatconcentraties meldt (relevant voor baby&apos;s en jonge kinderen), biedt een koolstoffilter geen bescherming. RO verwijdert 85–95% van nitraten.',
              },
              {
                trigger: 'U wilt de absolute best mogelijke waterkwaliteit',
                uitleg:
                  'Als u maximale filtratie wilt — ook van microplastics, medicijnresten, virussen en bacteriën — dan is omgekeerde osmose de enige thuisoplossing die breed genoeg werkt. Koolstoffilters zijn selectief.',
              },
              {
                trigger: 'U overweegt flessenwater te vervangen',
                uitleg:
                  'Als uw doel is om volledig te stoppen met flessenwater en u de kwaliteit wilt evenaren of overtreffen, is RO de logischere keuze. De jaarlijkse meerkosten ten opzichte van een koolstoffilter zijn bescheiden.',
              },
            ].map(r => (
              <div key={r.trigger} className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 text-sm mb-1">{r.trigger}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{r.uitleg}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Twijfelt u? Lees onze uitgebreide vergelijking op de{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde osmose pagina
            </Link>{' '}
            of bekijk de{' '}
            <Link href="/waterfilter/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              complete waterfilter vergelijking
            </Link>.
            Als u al zeker bent dat osmose de juiste keuze is, ga dan direct naar onze{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              osmose filter koopgids
            </Link>.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter uitleg',
                desc: 'Hoe werkt actieve kool, wat verwijdert het en wanneer is het genoeg?',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Osmose filter kopen',
                desc: 'Koopgids voor omgekeerde osmose systemen: types, prijzen en aanbevelingen.',
              },
              {
                href: '/waterfilter/vergelijken',
                title: 'Waterfilters vergelijken',
                desc: 'Alle filtertechnologieën naast elkaar: koolstof, osmose, ionenwisseling.',
              },
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose',
                desc: 'De complete gids over RO-filters: werking, kosten en gezondheid.',
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

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over een koolstoffilter kopen</h2>
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
