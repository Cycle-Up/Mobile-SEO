import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Waterfilter Kopen 2026: Eerlijke Koopgids',
  description:
    'Waterfilter kopen in 2026? Onze eerlijke koopgids helpt je stap voor stap: waterkwaliteit beoordelen, filtertype kiezen, budget bepalen en installeren.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/kopen' },
  openGraph: {
    title: 'Waterfilter Kopen 2026: Eerlijke Koopgids',
    description:
      'Stap-voor-stap koopgids voor waterfilters: waterkwaliteit beoordelen, filtertype vergelijken op prijs en prestatie, installatie en veelgemaakte fouten.',
    url: 'https://waterfilterplatform.nl/waterfilter/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Welk waterfilter moet ik kopen voor thuis?',
    answer:
      'Dat hangt af van je doel. Wil je alleen chloor en smaak verbeteren? Een actieve koolstoffilter (€30–100) is voldoende. Wil je ook nitraten, PFAS, zware metalen en kalk verwijderen? Dan is omgekeerde osmose de enige effectieve optie. Wil je alles in één — filter, kokend en bruisend water? Dan is een 4-in-1 kraan met osmose de meest complete keuze voor €699–899.',
  },
  {
    question: 'Wat is het verschil tussen een waterfilter kopen en een waterontharder kopen?',
    answer:
      'Een waterontharder onthardt het volledige huishoudwater (douche, wasmachine, cv-ketel) door kalk te verwijderen via ionenwisseling. Een waterfilter (koolstof of osmose) filtert alleen het drinkwater op de keukenkraan en verwijdert een veel breder spectrum: naast kalk ook chloor, nitraten, pesticiden, PFAS en microplastics. Ze vullen elkaar aan: een ontharder beschermt apparaten, een filter zorgt voor puur drinkwater.',
  },
  {
    question: 'Hoe weet ik welk waterfilter bij mijn leidingwater past?',
    answer:
      'Begin met het controleren van de waterhardheid in jouw gemeente (beschikbaar via waterbedrijven of de waterhardheid-database op deze website). Heb je hard water (15+ °dH)? Dan is kalkverwijdering een prioriteit — kies voor osmose of een 4-in-1 systeem. Wil je voornamelijk smaak en chloor aanpakken? Dan volstaat een koolstoffilter. Twijfel je? Een osmose-systeem pakt altijd het volledige spectrum aan.',
  },
  {
    question: 'Wat is de meest gemaakte fout bij waterfilter kopen?',
    answer:
      'De meest gemaakte fout is kopen op aanschafprijs zonder de totale jaarkosten mee te nemen. Een filterkan lijkt goedkoop (€20–50) maar vraagt elke 4–8 weken een nieuw patroon (€40–90/jr) en filtert weinig. Een osmose-systeem kost meer in aanschaf maar is per liter goedkoper en filtert veel grondiger. Tweede veelgemaakte fout: een filter kopen dat niet voor jouw specifieke waterprobleem is gemaakt.',
  },
  {
    question: 'Kan ik een waterfilter zelf installeren?',
    answer:
      'Ja, de meeste filtertypen zijn zelf te installeren. Een filterkan is direct te gebruiken. Een koolstoffilter op de kraan schroef je vast in 5 minuten. Een under-sink osmose-systeem installeer je zelf in 30–60 minuten met een aftakventiel op de koudwaterleiding en een kleine extra kraan. Een 4-in-1 kraan vervangt de bestaande mengkraan en is zelf te installeren in 1–2 uur. Alleen een waterontharder op de hoofdleiding vereist doorgaans een loodgieter.',
  },
];

const filtertypes = [
  {
    nr: 1,
    naam: 'Filterkan (Brita, PearlCo)',
    prijs: '€ 20–50',
    jaarkosten: '€ 40–90',
    zuiverheid: 'Laag (chloor, smaak)',
    onderhoud: 'Elke 4–8 weken patroon',
    installatiegemak: 'Geen installatie',
    highlight: false,
    voor: 'Starters, studenten, huurders zonder installatierechten',
    tegen: 'Geen nitraten, PFAS, microplastics; langzaam filtreren',
  },
  {
    nr: 2,
    naam: 'Koolstoffilter op kraan of onder aanrecht',
    prijs: '€ 30–100',
    jaarkosten: '€ 30–80',
    zuiverheid: 'Matig (chloor, geur, organisch)',
    onderhoud: 'Elke 3–6 maanden patroon',
    installatiegemak: 'Zelf, 5–30 min',
    highlight: false,
    voor: 'Chloor- en smaakverbetering; eenvoudig en goedkoop',
    tegen: 'Geen nitraten, zware metalen, PFAS of kalk',
  },
  {
    nr: 3,
    naam: 'Omgekeerde osmose (under-sink)',
    prijs: '€ 150–500',
    jaarkosten: '€ 60–150',
    zuiverheid: 'Zeer hoog (95–99% breed spectrum)',
    onderhoud: 'Jaarlijks filters + membraan 2–3 jr',
    installatiegemak: 'Zelf, 30–60 min',
    highlight: true,
    voor: 'Meest grondige filtratie: kalk, chloor, nitraten, PFAS, microplastics',
    tegen: 'Hogere aanschaf; vereist ruimte onder aanrecht',
  },
  {
    nr: 4,
    naam: 'Waterontharder (ionenwisselaar)',
    prijs: '€ 500–1.500',
    jaarkosten: '€ 85–240',
    zuiverheid: 'Alleen kalk (95–99%)',
    onderhoud: 'Maandelijks zout; jaarlijkse service',
    installatiegemak: 'Installateur vereist',
    highlight: false,
    voor: 'Volledige woningontharding: douche, wasmachine, cv-ketel',
    tegen: 'Filtert geen chloor/nitraten/PFAS; natriumtoevoeging; hoge kosten',
  },
  {
    nr: 5,
    naam: '4-in-1 kraan (kokend + koud + warm + osmose)',
    prijs: '€ 699–900',
    jaarkosten: '€ 50–150',
    zuiverheid: 'Zeer hoog (95–99% via RO)',
    onderhoud: 'Jaarlijks één filterpatroon',
    installatiegemak: 'Zelf, 1–2 uur',
    highlight: true,
    voor: 'Alles-in-één: filter + kokend + koud + warm + bruisend water',
    tegen: 'Hogere aanschaf; vervangt bestaande mengkraan',
  },
];

const veelgemaaktefouten = [
  {
    fout: 'Kopen op aanschafprijs zonder totale kosten te berekenen',
    uitleg:
      'Een filterkan van €25 lijkt goedkoop, maar kost via patronen €40–90 per jaar. Na 3 jaar betaal je €145–295 voor matige filtratie. Een osmose-systeem van €250 kost over dezelfde periode €430–700 maar filtert incomparabel beter. Reken altijd de TCO (total cost of ownership) over 3–5 jaar.',
    tip: 'Bereken de totale kosten inclusief filtervervanging over 3 jaar.',
  },
  {
    fout: 'Een filter kopen dat niet voor jouw waterprobleem is gemaakt',
    uitleg:
      'Een koolstoffilter verwijdert chloor maar geen nitraten. Een waterontharder verwijdert kalk maar geen PFAS. Veel kopers kiezen een filter op marketing ("puur water") zonder te controleren welke stoffen het écht verwijdert. Check altijd de technische specificaties: welke stoffen worden gefilterd, met welke reductiepercentages.',
    tip: 'Zoek het certifcaat (NSF/ANSI 58 voor osmose, 42/53 voor koolstof) op de verpakking.',
  },
  {
    fout: 'Vergeten het onderhoud te plannen',
    uitleg:
      'Een verzadigd filterpatroon filtert niet meer effectief — of erger: een overgebruikte koolstoffilter kan bacteriën loslaten. Veel kopers vergeten de vervangtermijnen bij te houden. Stel een kalenderherinnering in bij aankoop, of kies een systeem met een filterindicator.',
    tip: 'Noteer de installatiedatum en vervaldatum bij het filter. Osmose-systemen met app-koppeling herinneren je automatisch.',
  },
  {
    fout: 'De waterhardheid niet kennen',
    uitleg:
      'In hard-watergebieden (15+ °dH) is kalk een primaire verontreiniger. Een koolstoffilter pakt dit niet aan. Wie in een hard-watergebied een koolstoffilter koopt, lost het smaakprobleem niet op — het leidingwater blijft kalkig. Check eerst de waterhardheid voor jouw gemeente.',
    tip: 'Controleer de waterhardheid via waterbedrijf of onze waterhardheid-database.',
  },
  {
    fout: 'Installatievereisten onderschatten',
    uitleg:
      'Een under-sink osmose-systeem past niet altijd in elke keukenonderkast. Sommige systemen vereisen een extra kraangat (35 mm boring) in het aanrecht. Een 4-in-1 kraan heeft ook een stroomaansluiting nodig. Controleer altijd de afmetingen en vereisten vóór aankoop.',
    tip: 'Meet de beschikbare ruimte onder het aanrecht en check of er een stopcontact aanwezig is.',
  },
];

export default function WaterfilterKopenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Waterfilter kopen', url: 'https://waterfilterplatform.nl/waterfilter/kopen' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter Kopen in 2026: Eerlijke Koopgids
          </h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Wil je een <strong>waterfilter kopen</strong> maar weet je niet waar je moet beginnen?
            Deze koopgids leidt je stap voor stap door het keuzeproces — van het beoordelen van
            je waterkwaliteit tot het kiezen van het juiste filtertype, het plannen van je
            budget en de installatie.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We zijn eerlijk: we bespreken ook de veelgemaakte fouten en wanneer een goedkoper systeem
            beter is dan het duurste model. Met een actuele vergelijkingstabel voor 2026 en concreet
            koopadvies per situatie.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose systemen bekijken →
            </Link>
            <Link
              href="/waterfilter"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterfilter overzicht
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
            <li><a href="#stap1" className="hover:underline">Stap 1: waterkwaliteit beoordelen</a></li>
            <li><a href="#stap2" className="hover:underline">Stap 2: filtertype kiezen</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijkingstabel filtertypes</a></li>
            <li><a href="#stap3" className="hover:underline">Stap 3: budget bepalen</a></li>
            <li><a href="#stap4" className="hover:underline">Stap 4: installatie plannen</a></li>
            <li><a href="#fouten" className="hover:underline">Veelgemaakte fouten</a></li>
            <li><a href="#advies" className="hover:underline">Koopadvies per situatie</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Stap 1: waterkwaliteit */}
        <section id="stap1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-lg">
              1
            </div>
            <h2 className="text-2xl font-bold text-[#003F5C]">Stap 1: Beoordeel je waterkwaliteit</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voordat je een waterfilter koopt, is het essentieel om te weten wat er in jouw leidingwater
            zit. Niet alle waterfilters zijn voor alle problemen geschikt — een filter dat chloor
            verwijdert, pakt geen kalk aan, en een waterontharder verwijdert geen PFAS. Begin
            met de volgende drie vragen:
          </p>
          <div className="space-y-4 mb-5">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2">Vraag 1: Hoe hard is het water bij mij?</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Waterhardheid (calcium en magnesium) is de meest voorkomende reden om een waterfilter
                te kopen in Nederland. In grote delen van het land — met name kustprovincies en
                het zuiden — is het water hard tot zeer hard (15–25 °dH). Kalk veroorzaakt aanslag,
                verslijt apparaten en geeft water een vlakke smaak.
              </p>
              <p className="text-sm text-gray-700">
                Controleer de waterhardheid via je waterbedrijf of bekijk onze{' '}
                <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
                  waterhardheid per gemeente
                </Link>
                .
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2">Vraag 2: Ruik of proef ik chloor?</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Drinkwaterbedrijven voegen chloor toe als desinfectiemiddel. In sommige regio&apos;s is
                dit merkbaar als chloorgeur of -smaak bij kraanwater. Dit is geen gevaar maar een
                kwaliteitsperceptieprobleem. Een eenvoudige actieve koolstoffilter verwijdert chloor
                effectief en verbetert de smaak direct.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-gray-900 mb-2">Vraag 3: Wil je extra zekerheid over PFAS, nitraten en microplastics?</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                RIVM-data tonen aan dat Nederlands leidingwater in beperkte mate PFAS, nitraten en
                sporen van medicijnresten bevat — allemaal binnen wettelijke normen. Wie extra zekerheid
                wil, heeft omgekeerde osmose nodig: de enige consumentenoptie die 95–99% van alle
                opgeloste stoffen verwijdert, inclusief PFAS en microplastics.
              </p>
            </div>
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Snel overzicht: welk probleem, welk filter?</p>
            <div className="space-y-1.5">
              {[
                { probleem: 'Chloor en smaak', oplossing: 'Koolstoffilter op kraan' },
                { probleem: 'Kalk (hard water)', oplossing: 'Omgekeerde osmose of waterontharder' },
                { probleem: 'Nitraten, PFAS, pesticiden', oplossing: 'Omgekeerde osmose (enige effectieve optie)' },
                { probleem: 'Microplastics', oplossing: 'Omgekeerde osmose (0,0001 micron poriën)' },
                { probleem: 'Alles tegelijk', oplossing: 'Osmose systeem of 4-in-1 kraan met osmose' },
              ].map(r => (
                <div key={r.probleem} className="flex justify-between items-center text-sm">
                  <span className="text-gray-700">{r.probleem}</span>
                  <span className="text-[#005F8A] font-medium text-right">{r.oplossing}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stap 2: filtertype kiezen */}
        <section id="stap2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-lg">
              2
            </div>
            <h2 className="text-2xl font-bold text-[#003F5C]">Stap 2: Kies het juiste filtertype</h2>
          </div>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Er zijn vijf hoofdtypen waterfilters voor thuisgebruik. Elk type werkt op een ander
            principe, filtert andere stoffen en heeft een eigen prijs- en onderhoudsprofiel. Hieronder
            een eerlijke beschrijving van elk type, inclusief voor wie het geschikt is.
          </p>
          <div className="space-y-4">
            {filtertypes.map(f => (
              <div
                key={f.naam}
                className={`rounded-2xl border p-5 ${f.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-xs">
                      {f.nr}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{f.naam}</p>
                      {f.highlight && (
                        <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">
                          Aanbevolen
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-semibold text-[#005F8A] text-sm">{f.prijs}</p>
                    <p className="text-xs text-gray-500">{f.jaarkosten}/jr</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-1 text-xs text-gray-600 mb-3">
                  <div><span className="text-gray-400">Zuiverheid:</span> {f.zuiverheid}</div>
                  <div><span className="text-gray-400">Onderhoud:</span> {f.onderhoud}</div>
                  <div><span className="text-gray-400">Installatie:</span> {f.installatiegemak}</div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-700">
                    <span className="text-green-600 font-medium">+ Geschikt voor:</span> {f.voor}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="text-red-500 font-medium">– Let op:</span> {f.tegen}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijkingstabel waterfilters 2026
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een snelle vergelijking op de vijf meest relevante criteria. Uitgebreide uitleg per type
            vind je in ons artikel{' '}
            <Link href="/waterfilter" className="text-[#005F8A] underline hover:no-underline">
              waterfilter overzicht
            </Link>
            .
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[580px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten/jr</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Zuiverheid</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Installatie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Filterkan', aanschaf: '€ 20–50', jaar: '€ 40–90', zuiver: 'Laag', inst: 'Geen', hl: false },
                  { type: 'Koolstoffilter kraan', aanschaf: '€ 30–100', jaar: '€ 30–80', zuiver: 'Matig', inst: 'Zelf, eenvoudig', hl: false },
                  { type: 'Omgekeerde osmose', aanschaf: '€ 150–500', jaar: '€ 60–150', zuiver: '95–99%', inst: 'Zelf, 30–60 min', hl: true },
                  { type: 'Waterontharder', aanschaf: '€ 500–1.500', jaar: '€ 85–240', zuiver: 'Alleen kalk', inst: 'Installateur', hl: false },
                  { type: '4-in-1 kraan + osmose', aanschaf: '€ 699–900', jaar: '€ 50–150', zuiver: '95–99%', inst: 'Zelf, 1–2 uur', hl: true },
                ].map(r => (
                  <tr
                    key={r.type}
                    className={r.hl ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.jaar}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.zuiver}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.inst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Prijzen zijn indicatieve marktgemiddelden voor 2026. Jaarkosten zijn inclusief
            filtervervanging exclusief aanschaf.
          </p>
        </section>

        {/* Stap 3: budget */}
        <section id="stap3">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-lg">
              3
            </div>
            <h2 className="text-2xl font-bold text-[#003F5C]">Stap 3: Bepaal je budget (totale kosten)</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De aanschafprijs is slechts een deel van de werkelijke kosten. Wie slim een waterfilter
            koopt, berekent de <strong>total cost of ownership (TCO)</strong> over minimaal 3 jaar —
            inclusief filterpatronen, membraanvervanging en eventueel onderhoud.
          </p>

          {/* TCO tabel */}
          <div className="overflow-x-auto -mx-4 px-4 mb-5">
            <table className="w-full min-w-[540px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">3-jr kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">TCO 3 jr</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Filterkan', aanschaf: '€ 30', drieJr: '€ 210', tco: '€ 240' },
                  { type: 'Koolstoffilter kraan', aanschaf: '€ 60', drieJr: '€ 165', tco: '€ 225' },
                  { type: 'Osmose (under-sink)', aanschaf: '€ 250', drieJr: '€ 330', tco: '€ 580' },
                  { type: '4-in-1 kraan + osmose', aanschaf: '€ 799', drieJr: '€ 240', tco: '€ 1.039' },
                  { type: 'Flessenwater (gezin 4 pers.)', aanschaf: '€ 0', drieJr: '€ 1.500', tco: '€ 1.500' },
                ].map(r => (
                  <tr key={r.type} className="border-b border-gray-100">
                    <td className="py-2.5 px-3">{r.type}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-xs">{r.drieJr}</td>
                    <td className="py-2.5 px-3 text-right font-semibold">{r.tco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mb-5">
            Flessenwater: 2 liter/dag voor een gezin van 4 @ €0,70/liter. Jaar 3 osmose is hoger door
            membraanvervanging (~€100). TCO 4-in-1 vervangt ook waterkoker en bruisend water.
          </p>

          {/* Budget adviezen */}
          <div className="space-y-3">
            {[
              {
                budget: 'Budget onder €100',
                advies: 'Koolstoffilter op de kraan (€30–100) voor smaak- en chloorverbetering. Geen grote investering, eenvoudig te vervangen bij verhuizing.',
                link: null,
              },
              {
                budget: 'Budget €150–400',
                advies: 'Under-sink osmose-systeem voor grondige filtratie. Beste prijs-kwaliteitverhouding voor drinkwaterfiltratie. Zelf te installeren.',
                link: '/omgekeerde-osmose/kopen',
              },
              {
                budget: 'Budget €700–1.000',
                advies: '4-in-1 kraan met osmose: osmosefilter + kokend + koud + bruisend water. Vervangt waterkoker en bruisend water-abonnement — op termijn kostenefficiënt.',
                link: '/omgekeerde-osmose/kopen',
              },
              {
                budget: 'Budget boven €1.000',
                advies: 'Combineer een waterontharder (voor de hele woning) met een osmose-systeem of 4-in-1 kraan op de keukentap. Beste totaaloplossing voor harde-watergebieden.',
                link: null,
              },
            ].map(b => (
              <div key={b.budget} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] text-sm mb-1">{b.budget}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{b.advies}</p>
                {b.link && (
                  <Link
                    href={b.link}
                    className="inline-block mt-2 text-xs text-[#005F8A] hover:underline font-medium"
                  >
                    Bekijk opties →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stap 4: installatie */}
        <section id="stap4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-lg">
              4
            </div>
            <h2 className="text-2xl font-bold text-[#003F5C]">Stap 4: Plan de installatie</h2>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De meeste waterfilters zijn eenvoudig zelf te installeren. Hieronder een overzicht van
            de installatievereisten per filtertype en wanneer je toch een loodgieter nodig hebt.
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                type: 'Filterkan',
                moeilijkheid: 'Direct',
                vereisten: ['Geen installatie nodig — direct te gebruiken'],
                tijd: '0 min',
              },
              {
                type: 'Koolstoffilter op kraan',
                moeilijkheid: 'Eenvoudig',
                vereisten: [
                  'Schroeft op bestaande kraanuitloop (adapter meestal meegeleverd)',
                  'Controleer de draadmaat van je kraan (M22/M24)',
                ],
                tijd: '5–10 min',
              },
              {
                type: 'Under-sink koolstoffilter',
                moeilijkheid: 'Matig',
                vereisten: [
                  'T-stuk aftakken op de koudwaterleiding',
                  'Kleine extra kraan op het aanrecht (extra gat nodig)',
                  'Afvoerverbinding niet nodig',
                ],
                tijd: '20–40 min',
              },
              {
                type: 'Omgekeerde osmose (under-sink)',
                moeilijkheid: 'Matig',
                vereisten: [
                  'T-stuk aftakken op koudwaterleiding',
                  'Afvoerverbinding op sifon/afvoer',
                  'Extra kraangat (35 mm) in aanrecht of keukenblad',
                  'Optioneel: aansluiting op koelkast waterleiding',
                ],
                tijd: '30–60 min',
              },
              {
                type: '4-in-1 kraan met osmose',
                moeilijkheid: 'Matig',
                vereisten: [
                  'Vervangt bestaande mengkraan (zelfde kraangat)',
                  'Verbinding op koud- en warmwaterleiding',
                  'Afvoerverbinding voor osmose-concentraat',
                  'Geaard stopcontact in de onderkast vereist (230V)',
                ],
                tijd: '1–2 uur',
              },
            ].map(i => (
              <div key={i.type} className="border border-gray-100 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2 flex-wrap gap-1">
                  <p className="font-semibold text-gray-900">{i.type}</p>
                  <div className="flex gap-2 items-center">
                    <span className="text-xs text-gray-500">{i.tijd}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      i.moeilijkheid === 'Direct' ? 'bg-green-100 text-green-800' :
                      i.moeilijkheid === 'Eenvoudig' ? 'bg-blue-100 text-blue-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {i.moeilijkheid}
                    </span>
                  </div>
                </div>
                <ul className="space-y-1">
                  {i.vereisten.map(v => (
                    <li key={v} className="flex gap-2 items-start text-sm text-gray-600">
                      <span className="text-[#005F8A] shrink-0 mt-0.5">•</span>
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
            <p className="font-semibold text-amber-900 mb-2">Wanneer een loodgieter inschakelen?</p>
            <ul className="space-y-1.5">
              {[
                'Waterontharder op de hoofdwaterleiding — altijd een erkende installateur',
                'Als er geen aftakventiel aanwezig is en de watertoevoer volledig afgesloten moet worden',
                'Bij loden leidingen (oudere woningen) — laat de situatie eerst beoordelen',
                'Als de waterdruk in huis minder dan 2 bar is (doorstroommers vereisen minimale druk)',
              ].map(tip => (
                <li key={tip} className="flex gap-2 items-start text-sm text-gray-700">
                  <span className="text-amber-600 font-bold shrink-0">!</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Veelgemaakte fouten */}
        <section id="fouten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5 veelgemaakte fouten bij het kopen van een waterfilter
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Op basis van veelgestelde vragen en koperservaringen zijn dit de vijf fouten die het
            vaakst worden gemaakt bij het kopen van een waterfilter — met hoe je ze vermijdt.
          </p>
          <div className="space-y-4">
            {veelgemaaktefouten.map((f, i) => (
              <div key={f.fout} className="bg-white border border-gray-100 rounded-2xl p-5">
                <div className="flex gap-3 items-start mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <p className="font-semibold text-gray-900">{f.fout}</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3 pl-11">{f.uitleg}</p>
                <div className="ml-11 bg-green-50 border border-green-100 rounded-lg p-3">
                  <p className="text-xs font-semibold text-green-800 mb-0.5">Tip</p>
                  <p className="text-sm text-green-800">{f.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/vergelijken/waterfilter-vs-waterontharder" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter vs. waterontharder</h3>
            <p className="text-sm text-gray-600">Wat is het verschil en welk systeem past bij jouw situatie?</p>
          </Link>
          <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp budget</h3>
            <p className="text-sm text-gray-600">Vind het beste waterfilter voor jouw budget met onze keuzehulp.</p>
          </Link>
          <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
            <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose en wanneer is het de beste keuze?</p>
          </Link>
          <Link href="/beste-waterfilter/appartement" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Beste waterfilter voor een appartement</h3>
            <p className="text-sm text-gray-600">Welk waterfilter past in een appartement zonder grote installatie?</p>
          </Link>
        </div>
      </section>

        {/* CTA */}
        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="waterfilter-kopen-cta"
          label="Bekijk de zuiver-water-kranen bij PureAqua"
          title="Klaar voor zuiver water uit de kraan?"
          sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
        />

        <CTABanner context="osmose" />

        {/* Koopadvies per situatie */}
        <section id="advies">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Koopadvies per situatie</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er is geen universeel &ldquo;beste waterfilter&rdquo;. De beste keuze hangt volledig af
            van jouw situatie. Hieronder ons eerlijke koopadvies voor de meest voorkomende scenario&apos;s.
          </p>
          <div className="space-y-3">
            {[
              {
                profiel: 'Starter / huurder zonder installatierechten',
                advies: 'Filterkan of koolstoffilter op de kraan. Geen permanente installatie nodig, meeneembaar bij verhuizing.',
                prijs: 'Vanaf €20',
              },
              {
                profiel: 'Gezin in zacht-watergebied dat chloor wil verwijderen',
                advies: 'Under-sink koolstoffilter (€60–150). Eenvoudige installatie, goede prestaties voor chloor en smaak.',
                prijs: '€ 60–150',
              },
              {
                profiel: 'Gezin in hard-watergebied (15+ °dH)',
                advies: 'Omgekeerde osmose systeem (€150–500) of 4-in-1 kraan. Osmose verwijdert kalk én alle andere verontreinigingen.',
                prijs: '€ 150–500',
              },
              {
                profiel: 'Wie alles-in-één wil: filter + kokend + bruisend',
                advies: '4-in-1 kraan met osmose (€699–899). Vervangt waterkoker, bruisend water-abonnement en waterfilter in één systeem.',
                prijs: '€ 699–899',
              },
              {
                profiel: 'Eigenaar met kalkoverlast in heel het huis',
                advies: 'Waterontharder op hoofdleiding voor apparatenbescherming, aangevuld met osmose-kraan voor drinkwater.',
                prijs: '€ 800–2.000',
              },
              {
                profiel: 'Maximale PFAS- en microplastics-reductie',
                advies: 'Omgekeerde osmose is de enige consumentenoplossing die PFAS effectief verwijdert (NSF/ANSI 58-gecertificeerd).',
                prijs: '€ 150–500',
              },
            ].map(a => (
              <div key={a.profiel} className="border border-gray-100 rounded-xl p-4 flex gap-3 items-start">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline gap-2 flex-wrap">
                    <p className="font-semibold text-gray-800 text-sm">{a.profiel}</p>
                    <span className="text-xs font-medium text-[#005F8A] shrink-0">{a.prijs}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-0.5 leading-relaxed">{a.advies}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/waterfilter',
                title: 'Waterfilter overzicht',
                desc: 'Complete gids over alle filtertypes met technische vergelijking.',
              },
              {
                href: '/omgekeerde-osmose/kopen',
                title: 'Omgekeerde osmose kopen',
                desc: 'Koopgids specifiek voor osmose-systemen en 4-in-1 kranen.',
              },
              {
                href: '/kennisbank/waterfilter-kopen-gids',
                title: 'Uitgebreide koopgids (kennisbank)',
                desc: 'Diepgaande uitleg over certificeringen, meetdata en installatie.',
              },
              {
                href: '/waterhardheid',
                title: 'Waterhardheid per gemeente',
                desc: 'Check de waterhardheid in jouw woonplaats voordat je koopt.',
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
            Veelgestelde vragen over waterfilter kopen
          </h2>
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
