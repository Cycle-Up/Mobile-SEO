import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter voor hard water: wat werkt echt? | 2026',
  description:
    'Hard water en kalk? Vergelijk anti-kalk magneten, ionenwisselaars en omgekeerde osmose. Uitleg over waterhardheid in °dH, Nederlandse normen en welke.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/voor-hard-water' },
  openGraph: {
    title: 'Waterfilter voor hard water: wat werkt echt?',
    description:
      'Vergelijk anti-kalk magneten, ionenwisselaars en omgekeerde osmose voor hard water in Nederland. Met hardheidskaart en keuzehulp.',
    url: 'https://waterfilterplatform.nl/waterfilter/voor-hard-water',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe weet ik of ik hard water heb?',
    answer:
      'Je kunt de waterhardheid van jouw gemeente opzoeken via het waterbedrijf of via onze waterhardheid-database. Hard water geeft ook zichtbare aanwijzingen: witte kalkranden in de waterkoker, vlekken op glaswerk, stug aanvoelend haar na het douchen en extra zeepverbruik.',
  },
  {
    question: 'Wat is het verschil tussen een waterontharder en omgekeerde osmose?',
    answer:
      'Een waterontharder (ionenwisselaar) verwijdert alleen calcium en magnesium — de mineralen die verantwoordelijk zijn voor kalk. Omgekeerde osmose verwijdert 95–99% van álle opgeloste stoffen, inclusief nitraten, pesticiden, PFAS en zware metalen. RO biedt breder filterspectrum; een ontharder werkt voor het hele huishoudwater inclusief douche en wasmachine.',
  },
  {
    question: 'Werken anti-kalk magneten echt?',
    answer:
      'De wetenschappelijke consensus is verdeeld. Sommige studies tonen een licht effect op de kristalvorming van calciumcarbonaat, waardoor kalk minder goed hecht. Onafhankelijk laboratoriumonderzoek toont echter geen consistente verwijdering van calcium of magnesium. Anti-kalk magneten zijn goedkoop en schaden niet, maar zijn geen vervanging voor een echte ontharder of RO-systeem.',
  },
  {
    question: 'Is zacht water gezonder dan hard water?',
    answer:
      'Hard water bevat calcium en magnesium, mineralen die voor de gezondheid nuttig zijn. Wacht water bevat minder mineralen maar is niet ongezond. Bij omgekeerde osmose kun je optioneel remineraliseren om de mineraalbalans te herstellen. Zachter water is echter beter voor apparaten, leidingwerk en huid.',
  },
  {
    question: 'Welke waterhardheid is normaal in Nederland?',
    answer:
      'Nederland kent grote regionale verschillen. Zachte gebieden zijn Groningen en Friesland (2–6 °dH), middelhard is Utrecht en Noord-Holland (8–12 °dH), en hard tot zeer hard zijn Brabant, Limburg en Zeeland (15–25 °dH). De Nederlandse drinkwaternorm staat een maximum van 22 °dH toe.',
  },
];

const methodenTabel = [
  {
    methode: 'Anti-kalk magneet',
    verwijderingKalk: 'Marginaal (0–30%)',
    andereStorffen: 'Nee',
    kosten: '€ 10–80',
    onderhoud: 'Geen',
    geschiktVoor: 'Preventief aanslag verminderen',
  },
  {
    methode: 'Polyfosfoaat doseerder',
    verwijderingKalk: 'Beschermt leidingen (korst)',
    andereStorffen: 'Nee',
    kosten: '€ 40–150',
    onderhoud: 'Patroon wisselen',
    geschiktVoor: 'Leidingbescherming',
  },
  {
    methode: 'Waterontharder (ionenwisselaar)',
    verwijderingKalk: '95–99%',
    andereStorffen: 'Nee (alleen Ca/Mg)',
    kosten: '€ 300–2.000',
    onderhoud: 'Zout bijvullen',
    geschiktVoor: 'Heel huis (douche + apparaten)',
  },
  {
    methode: 'Omgekeerde osmose (RO)',
    verwijderingKalk: '95–99%',
    andereStorffen: 'Ja (95–99% breed)',
    kosten: '€ 150–800',
    onderhoud: 'Filters 1x/jaar',
    geschiktVoor: 'Drinkwater (keuken)',
  },
  {
    methode: 'Koolstoffilter',
    verwijderingKalk: 'Beperkt (20–40%)',
    andereStorffen: 'Chloor, smaak',
    kosten: '€ 30–200',
    onderhoud: 'Patroon wisselen',
    geschiktVoor: 'Smaakverbetering',
  },
];

const hardheidTabel = [
  { graad: '0–4 °dH', kwalificatie: 'Zeer zacht', regio: 'Groningen (deels)', advies: 'Geen actie nodig' },
  { graad: '4–8 °dH', kwalificatie: 'Zacht', regio: 'Friesland, Drenthe', advies: 'Geen actie nodig' },
  { graad: '8–12 °dH', kwalificatie: 'Middelhard', regio: 'Utrecht, Noord-Holland', advies: 'Optioneel filter' },
  { graad: '12–18 °dH', kwalificatie: 'Hard', regio: 'Zuid-Holland, Gelderland', advies: 'Ontharder of RO' },
  { graad: '>18 °dH', kwalificatie: 'Zeer hard', regio: 'Brabant, Limburg, Zeeland', advies: 'Dringend aangeraden' },
];

export default function WaterfilterVoorHardWaterPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter voor hard water: wat werkt echt?',
          description:
            'Vergelijk anti-kalk magneten, ionenwisselaars en omgekeerde osmose voor hard water. Met uitleg over waterhardheid in °dH en Nederlandse normen.',
          datePublished: '2026-01-10',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterfilter/voor-hard-water',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Waterfilter voor hard water', url: 'https://waterfilterplatform.nl/waterfilter/voor-hard-water' },
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
            <span>Hard water</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter voor hard water: wat werkt echt?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Witte aanslag in je waterkoker, vlekken op kraanwaterglazen en een verkorte levensduur van
            je apparaten — dit zijn de klassieke symptomen van <strong>hard water</strong>. Maar welke
            oplossing werkt écht? We vergelijken anti-kalk magneten, ionenwisselaars en omgekeerde
            osmose op basis van aantoonbare filterprestaties, kosten en gebruiksgemak.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              RO-filter kopen →
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterhardheid per gemeente
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#waterhardheid" className="hover:underline">Wat is waterhardheid?</a></li>
            <li><a href="#normen" className="hover:underline">Nederlandse normen (°dH)</a></li>
            <li><a href="#methoden" className="hover:underline">Oplossingen vergeleken</a></li>
            <li><a href="#ro" className="hover:underline">Omgekeerde osmose voor hard water</a></li>
            <li><a href="#ontharder" className="hover:underline">Waterontharder (ionenwisselaar)</a></li>
            <li><a href="#magneten" className="hover:underline">Anti-kalk magneten</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Waterhardheid */}
        <section id="waterhardheid">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat is waterhardheid?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Waterhardheid is de concentratie van opgeloste calcium- en magnesiumzouten in leidingwater.
            Het water neemt deze mineralen op als het door kalkrijke bodemlagen stroomt — een
            geologisch proces dat in de meeste Nederlande provincies plaatsvindt. Hardheid wordt
            uitgedrukt in <strong>graden Duitse hardheid (°dH)</strong>, maar ook in mmol/L of
            meq/L op waternota&apos;s.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De belangrijkste gevolgen van hard water voor het huishouden:
          </p>
          <ul className="space-y-2 text-gray-700 list-disc list-inside mb-4">
            <li>Kalkaanslag in waterkoker, koffiemachine, stoomoven en boiler</li>
            <li>Witte vlekken op glaswerk, sanitair en kranen</li>
            <li>Verhoogd zeep- en wasmiddelverbruik (meer schuim nodig)</li>
            <li>Verhoogde energierekening: 1 mm kalkaanslag = 7% meer energieverbruik</li>
            <li>Kortere levensduur van huishoudelijke apparaten</li>
          </ul>
          <div className="bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Goed om te weten:</strong> hard water is niet
            schadelijk voor je gezondheid. Calcium en magnesium zijn essentiële mineralen. Het
            probleem is puur praktisch en economisch.
          </div>
        </section>

        {/* Normen */}
        <section id="normen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterhardheid in °dH: Nederlandse normen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het Drinkwaterbesluit staat een maximale hardheid van <strong>22 °dH</strong> toe voor
            Nederlands leidingwater. De meeste waterbedrijven streven naar 7–12 °dH als ideaal bereik
            voor apparaten en leidingen. In de praktijk liggen zuidelijke en oostelijke provincies
            hier fors boven.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Hardheid</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Kwalificatie</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Typische regio (NL)</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Advies</th>
                </tr>
              </thead>
              <tbody>
                {hardheidTabel.map(r => (
                  <tr key={r.graad} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.graad}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.kwalificatie}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.regio}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.advies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Exacte waarden per gemeente: raadpleeg je waterbedrijf of onze{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline">waterhardheid-database</Link>.
          </p>
        </section>

        {/* Methoden vergelijking */}
        <section id="methoden">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Oplossingen voor hard water vergeleken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Er zijn vijf gangbare technieken om hard water aan te pakken. Ze verschillen sterk in
            effectiviteit, kosten en toepassingsgebied.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Methode</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kalk verwijdering</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kosten</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Onderhoud</th>
                </tr>
              </thead>
              <tbody>
                {methodenTabel.map((r, i) => (
                  <tr
                    key={r.methode}
                    className={i === 3 ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3">{r.methode}</td>
                    <td className="py-2.5 px-3 text-right">{r.verwijderingKalk}</td>
                    <td className="py-2.5 px-3 text-right">{r.kosten}</td>
                    <td className="py-2.5 px-3 text-right">{r.onderhoud}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Gemarkeerde rij = aanbevolen voor drinkwaterkwaliteit én kalkbestrijding.
          </p>
        </section>

        {/* RO */}
        <section id="ro">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Omgekeerde osmose: beste keuze voor drinkwater</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor <strong>drinkwater</strong> is omgekeerde osmose de meest effectieve oplossing bij
            hard water. Het RO-membraan houdt 95–99% van calcium en magnesium tegen, waardoor kalk in
            je waterkoker en koffiemachine tot het verleden behoort. Tegelijk verwijdert het systeem
            ook nitraten, PFAS, microplastics en zware metalen — iets wat een pure waterontharder
            niet doet.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Ideaal voor keukenapparaten',
                tekst: 'Espressomachine, stoomoven en waterkoker blijven kalkvrij. De levensduur verlengt aanzienlijk.',
              },
              {
                titel: 'Brede bescherming',
                tekst: 'Naast kalk verwijdert RO ook chloor, pesticiden, PFAS en zware metalen — breed beschermend.',
              },
              {
                titel: 'Compact onder aanrecht',
                tekst: 'Een RO-systeem past in elke keukenkast en vereist geen zoutopslag.',
              },
              {
                titel: 'Optionele remineralisatie',
                tekst: 'Met een remineralisatiepatroon voeg je calcium en magnesium terug toe na de filterstap.',
              },
            ].map(v => (
              <div key={v.titel} className="flex gap-3 items-start">
                <span className="text-green-600 font-bold text-lg mt-0.5 shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">{v.titel}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{v.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Nadeel:</strong> RO filtert alleen het water op de
            keukenkraan — niet het douchewater of de wasmachine. Voor heel-huisbescherming heb je
            aanvullend een waterontharder nodig.
          </div>
        </section>

        {/* Waterontharder */}
        <section id="ontharder">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterontharder (ionenwisselaar): voor het hele huis</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een ionenwisselaar vervangt calcium- en magnesiumionen door natriumionen via een
            harskolom. Het resultaat: zachter water door het hele huis — inclusief douche, wasmachine
            en vaatwasser. Dit vermindert kalk in leidingen en op tegels drastisch.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nadelen zijn de hogere aanschafprijs (€300–€2.000), de noodzaak voor zoutopslag en het
            regelmatig bijvullen van tabletzout of blokzout. Bovendien verhoogt een ontharder het
            natriumgehalte van het water licht — voor de meeste mensen verwaarloosbaar, maar
            relevant voor mensen met een natriumbeperkt dieet.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer over waterontharders:&nbsp;
            <Link href="/waterontharder" className="text-[#005F8A] underline hover:no-underline">
              complete gids waterontharders
            </Link>{' '}
            en het kostenonderdeel&nbsp;
            <Link href="/waterontharder/zout" className="text-[#005F8A] underline hover:no-underline">
              waterontharder zout kopen
            </Link>.
          </p>
        </section>

        {/* Anti-kalk magneten */}
        <section id="magneten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Anti-kalk magneten: werken ze echt?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Anti-kalk magneten of <em>magnetische waterbehandelaars</em> zijn goedkope apparaten
            (€10–€80) die worden geclipst of gewikkeld om de waterleiding. Het idee is dat een
            magnetisch veld de kristalstructuur van calciumcarbonaat verandert, waardoor kalk
            minder goed hecht aan oppervlakken.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 text-sm text-gray-700">
            <p className="font-semibold text-amber-900 mb-2">Eerlijke beoordeling</p>
            <p className="mb-2">
              Onafhankelijk gepubliceerd onderzoek (o.a. van de Water Quality Association) toont
              <strong> geen consistente vermindering</strong> van calcium- of magnesiumconcentraties.
              Wat soms wordt waargenomen is een verandering in de manier waarop kalk neerslaat
              (minder harde korst), maar de mineralen zijn er nog.
            </p>
            <p>
              <strong>Conclusie:</strong> Anti-kalk magneten zijn geen vervanging voor een echte
              oplossing. Ze schaden niet, maar u betaalt voor een onzeker effect. Kies voor RO
              of een ontharder als u een meetbaar resultaat wilt.
            </p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</h3>
              <p className="text-sm text-gray-600">Vind de juiste aanpak voor jouw hardwaterprobleem met onze stap-voor-stap keuzehulp.</p>
            </Link>
            <Link href="/waterhardheid/behandelingsadvies" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Behandelingsadvies waterhardheid</h3>
              <p className="text-sm text-gray-600">Persoonlijk advies over de beste behandeling op basis van jouw waterhardheid in graden dH.</p>
            </Link>
            <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
              <p className="text-sm text-gray-600">Uitleg over ionenwisseling en hoe een waterontharder calcium en magnesium verwijdert.</p>
            </Link>
            <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling als filtertechniek</h3>
              <p className="text-sm text-gray-600">Diepgaande uitleg over de ionenwisselaartechniek en toepassingen in waterbehandeling.</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="waterhardheid" />

        {/* Verwante pagina&apos;s */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/omgekeerde-osmose/kopen', title: 'Osmose filter kopen', desc: 'Onafhankelijke vergelijking van de beste RO-systemen voor thuis.' },
              { href: '/waterontharder', title: 'Waterontharder gids', desc: 'Alles over ionenwisselaars, zoutverbruik en installatie.' },
              { href: '/waterontharder/zout', title: 'Waterontharder zout kopen', desc: 'Tabletzout, blokzout of granulaat — wat is het voordeligst?' },
              { href: '/waterhardheid', title: 'Waterhardheid per gemeente', desc: 'Zoek de actuele hardheid op voor jouw woonplaats.' },
              { href: '/osmose-water/remineralisatie', title: 'Remineralisatie na RO', desc: 'Waarom en hoe je mineralen teruggeeft aan osmosewater.' },
              { href: '/waterfilter/gezondheid', title: 'Waterfilter en gezondheid', desc: 'Wat filtert welk systeem: PFAS, nitraat, lood en meer.' },
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
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
