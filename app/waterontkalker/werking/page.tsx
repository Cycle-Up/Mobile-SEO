import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hoe werkt een waterontkalker? Werking uitgelegd',
  description:
    'Waterontkalker werking stap voor stap uitgelegd: ionenwisseling, regeneratie, zoutverbruik en verschil met waterontharder.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontkalker/werking' },
  openGraph: {
    title: 'Hoe werkt een waterontkalker? Werking uitgelegd',
    description:
      'Ionenwisseling, harskorrels, regeneratiecyclus en zoutverbruik: de volledige werking van een waterontkalker stap voor stap.',
    url: 'https://waterfilterplatform.nl/waterontkalker/werking',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt ionenwisseling bij een waterontkalker?',
    answer:
      'Bij ionenwisseling stroomt hard water door een bed van harskorrels die zijn geladen met natriumionen (Na+). De calcium- en magnesiumionen (Ca2+ en Mg2+) in het water hebben een sterkere binding met de hars dan natrium. Ze worden vastgehouden op de hars, terwijl natrium wordt losgelaten in het water. Het resultaat: het water verlaat de ontkalker zonder calcium en magnesium — het is zacht geworden.',
  },
  {
    question: 'Wat zijn harskorrels en hoe verzadigen ze?',
    answer:
      'Harskorrels zijn kleine, bolvormige polymeerdeeltjes met een diameter van 0,5–1,0 mm. Ze zijn bezet met sulfaatgroepen die positief geladen ionen kunnen vastgrijpen. Bij een nieuwe lading zijn de harskorrels gesatureerd met natriumionen. Naarmate er meer hard water doorheen stroomt, worden steeds meer Na+-plekken ingenomen door Ca2+ en Mg2+. Wanneer vrijwel alle natriumposities bezet zijn door hardheidsionen, is de hars verzadigd en stopt de ontharding — regeneratie is dan nodig.',
  },
  {
    question: 'Wat is een regeneratiecyclus en hoe lang duurt die?',
    answer:
      "Regeneratie is het herstelproces waarbij de verzadigde hars opnieuw wordt geladen met natriumionen. Een sterke zoutoplossing (pekelwater, circa 10% NaCl) wordt langzaam door de hars gespoeld. Het hoge natriumconcentratie verdringt de calcium- en magnesiumionen van de hars. Vervolgens wordt de hars nagespoeld met schoon water om het zout te verwijderen. Een volledige cyclus duurt doorgaans 60-120 minuten en vindt bij de meeste systemen &apos;s nachts plaats.",
  },
  {
    question: 'Waarom is regeneratiezout (NaCl) nodig?',
    answer:
      'Natriumchloride (keukenzout) is de goedkoopste en meest effectieve bron van natriumionen voor het regenereren van ionenwisselaarhars. Het zout lost op in water in de zouttank, waardoor een geconcentreerde pekeloplossing ontstaat. Die pekel spoelt door de hars en herlaadt de hars met Na+. Zonder zout kan de hars niet worden geregenereerd en verliest de ontkalker zijn werking. Moderne ontkalkers verbruiken 0,5–2 kg zout per regeneratiecyclus.',
  },
  {
    question: 'Wat is het verschil tussen een continumodel en een batchmodel?',
    answer:
      'Een batchmodel (single-tank) heeft een enkele harsvat. Tijdens de regeneratie — doorgaans 60–90 minuten midden in de nacht — levert het systeem geen zacht water. Een continumodel (twin-tank of duplex) heeft twee harsvaten die afwisselen: terwijl het ene regenereert, levert het andere ononderbroken zacht water. Twin-tank systemen zijn duurder maar leveren 24/7 zacht water, ideaal voor grote gezinnen of bedrijven.',
  },
  {
    question: 'Wat gebeurt er met het afvalwater (pekel) na regeneratie?',
    answer:
      'Het afvalwater na regeneratie bevat hoge concentraties natriumchloride, calcium en magnesium. Dit pekelspoelwater wordt via de afvoer geloosd op het riool. In Nederland is dit wettelijk toegestaan voor huishoudelijke systemen. Moderne vraaggestuurde ontkalkers produceren minder afvalwater dan oudere tijdgestuurde modellen — gemiddeld 40–80 liter per regeneratie versus 100–150 liter bij verouderde systemen.',
  },
  {
    question: 'Hoeveel energie verbruikt een waterontkalker?',
    answer:
      'Elektrische waterontkalkers verbruiken 5–15 W in standby voor de besturingselektronica en het display. Tijdens regeneratie is het verbruik nauwelijks hoger, omdat de waterstromen mechanisch worden aangestuurd. Op jaarbasis komt dit neer op 44–130 kWh, ofwel circa €10–30 per jaar aan elektrakosten. Kinetico-systemen zijn volledig watergedreven en verbruiken nul elektriciteit.',
  },
];

export default function WaterOntkalkerWerkingPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontkalker', url: 'https://waterfilterplatform.nl/waterontkalker' },
          { name: 'Werking', url: 'https://waterfilterplatform.nl/waterontkalker/werking' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Hoe werkt een waterontkalker? Werking uitgelegd',
          description:
            'Waterontkalker werking stap voor stap uitgelegd: ionenwisseling, regeneratie, zoutverbruik en verschil met waterontharder.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterontkalker/werking',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontkalker" className="hover:text-[#005F8A]">Waterontkalker</Link>
            <span className="mx-2">/</span>
            <span>Werking</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Hoe werkt een waterontkalker? Werking uitgelegd
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een <strong>waterontkalker</strong> (ook wel waterontharder) werkt via ionenwisseling: calcium- en
            magnesiumionen worden uit het water gehaald en vervangen door natriumionen. Op deze pagina
            leggen we de werking stap voor stap uit — van harskorrels tot regeneratiecyclus.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterontkalker/vergelijken"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Modellen vergelijken &rarr;
            </Link>
            <Link
              href="/waterontkalker"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Terug naar overzicht
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Een waterontkalker werkt via ionenwisseling: harskorrels vervangen calcium (Ca2+) en magnesium (Mg2+) door natriumionen (Na+). Wanneer de hars verzadigd raakt, start een regeneratiecyclus met zoutwater (NaCl). De cyclus duurt 60-120 minuten. Energie: 5-15 W standby. Twin-tank modellen leveren continu zacht water." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#ionenwisseling" className="hover:underline">Principe van ionenwisseling</a></li>
            <li><a href="#harskorrels" className="hover:underline">Harskorrels: verzadiging</a></li>
            <li><a href="#regeneratie" className="hover:underline">Regeneratiecyclus uitgelegd</a></li>
            <li><a href="#zout" className="hover:underline">Waarom regeneratiezout?</a></li>
            <li><a href="#modellen" className="hover:underline">Continu- vs batchmodel</a></li>
            <li><a href="#energie" className="hover:underline">Energieverbruik</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Ionenwisseling principe */}
        <section id="ionenwisseling">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Het principe van ionenwisseling</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hard water bevat opgeloste calcium- (Ca2+) en magnesiumionen (Mg2+). Deze ionen zijn verantwoordelijk
            voor kalkaanslag op leidingen, cv-ketels, wasmachines en keukengerei. Ionenwisseling is de enige
            bewezen methode om deze ionen daadwerkelijk uit het water te verwijderen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het proces werkt als volgt: hard water stroomt door een drukvat gevuld met kleine harskorrels.
            Die korrels zijn vooraf geladen met natriumionen (Na+). Calcium en magnesium hebben een hogere
            affiniteit voor de hars dan natrium, wat betekent dat ze de natrium verdringen en aan de hars binden.
            Tegelijkertijd komen de natriumionen vrij in het water.
          </p>

          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-4">
            <p className="font-semibold text-[#003F5C] mb-3">De ionenwisselingsreactie (vereenvoudigd)</p>
            <div className="space-y-2 text-sm font-mono text-gray-700">
              <p>Ca2+ + 2 Na-Hars &rarr; Ca-Hars2 + 2 Na+</p>
              <p>Mg2+ + 2 Na-Hars &rarr; Mg-Hars2 + 2 Na+</p>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Calcium en magnesium worden vastgehouden op de hars. Natrium komt vrij in het water.
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Het water dat de ontkalker verlaat heeft een verwaarloosbare hoeveelheid calcium en magnesium.
            De waterhardheid daalt van bijvoorbeeld 20 &deg;dH (zeer hard) naar 0-1 &deg;dH (zacht). Dit echt
            zachte water beschermt leidingen, apparaten en geeft een aangenamer gevoel bij douchen.
          </p>
        </section>

        {/* Harskorrels */}
        <section id="harskorrels">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Harskorrels: hoe ze werken en verzadigen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Harskorrels zijn de kern van elke waterontkalker. Ze zijn gemaakt van gesulfoneerd polystyreen
            en hebben een diameter van 0,5 tot 1,0 mm. Op het oppervlak van elke korrel bevinden zich
            miljoenen sulfaatgroepen (SO3-) die als ankerplaatsen dienen voor positief geladen ionen.
          </p>

          <div className="space-y-4 mb-6">
            {[
              {
                fase: 'Fase 1 — Verse hars',
                kleur: 'bg-green-50 border-green-200',
                tekst: 'De hars is volledig geladen met natriumionen (Na+). Elke sulfaatgroep heeft een Na+-ion vastgehouden. De ontkalker is operationeel en kan optimaal zacht water produceren.',
              },
              {
                fase: 'Fase 2 — Gedeeltelijke verzadiging',
                kleur: 'bg-yellow-50 border-yellow-200',
                tekst: 'Na verloop van tijd worden steeds meer Na+-posities ingenomen door Ca2+ en Mg2+ uit het water. De onthardingscapaciteit neemt geleidelijk af. Het systeem werkt nog, maar minder efficiënt.',
              },
              {
                fase: 'Fase 3 — Volledige verzadiging',
                kleur: 'bg-red-50 border-red-200',
                tekst: 'Vrijwel alle sulfaatposities zijn bezet door calcium en magnesium. De hars kan geen ionen meer uitwisselen. Het water stroomt door zonder ontharding. Regeneratie is nu noodzakelijk.',
              },
            ].map(f => (
              <div key={f.fase} className={`rounded-xl border p-4 ${f.kleur}`}>
                <p className="font-semibold text-gray-800 mb-1">{f.fase}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{f.tekst}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">
            De hoeveelheid water die een bed harskorrels kan ontharden voor verzadiging wordt de
            <em> capaciteit</em> van de ontkalker genoemd. Dit wordt uitgedrukt in liters bij een bepaalde
            hardheid (bijv. 3.000 liter bij 20 &deg;dH) of in grain-equivalents (internationaal). Grotere
            harsbedden hebben meer capaciteit en hoeven minder frequent te regenereren.
          </p>
        </section>

        {/* Regeneratiecyclus */}
        <section id="regeneratie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De regeneratiecyclus stap voor stap</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Wanneer de hars verzadigd raakt, start automatisch de regeneratiecyclus. Dit gebeurt bij
            vraaggestuurde systemen op basis van werkelijk waterverbruik; bij tijdgestuurde modellen op
            een vast tijdstip (doorgaans midden in de nacht). Een volledige cyclus bestaat uit vier fasen.
          </p>

          <div className="space-y-4">
            {[
              {
                stap: '1',
                naam: 'Tegenspoeling (backwash)',
                duur: '5-10 min',
                beschrijving: 'Water stroomt omhoog door het harsbed om vuil, sediment en samengekoekte korrels los te maken en af te voeren naar het riool. Dit opent de structuur van het harsbed voor de volgende fase.',
              },
              {
                stap: '2',
                naam: 'Pekelintrek (brining)',
                duur: '30-60 min',
                beschrijving: 'Geconcentreerd zoutwater (10-12% NaCl) stroomt langzaam door het harsbed. De hoge natriumconcentratie verdringt de calcium- en magnesiumionen van de harskorrels. Ca2+ en Mg2+ gaan in oplossing en worden meegevoerd met het afvalwater naar het riool.',
              },
              {
                stap: '3',
                naam: 'Langzaam naspoelen (slow rinse)',
                duur: '10-20 min',
                beschrijving: 'Schoon water spoelt de resterende pekel door het harsbed. De hars is nu volledig geladen met natriumionen en klaar voor gebruik. Dit naspoelwater gaat eveneens naar het riool.',
              },
              {
                stap: '4',
                naam: 'Snel naspoelen + zouttank vullen (fast rinse & refill)',
                duur: '5-10 min',
                beschrijving: 'Een snelle spoeling verwijdert de laatste resten zout. Tegelijkertijd wordt de zouttank bijgevuld met vers water zodat er nieuwe pekel kan worden aangemaakt voor de volgende regeneratie.',
              },
            ].map(s => (
              <div key={s.stap} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.stap}
                </div>
                <div>
                  <div className="flex flex-wrap gap-3 items-baseline mb-1">
                    <p className="font-semibold text-gray-900">{s.naam}</p>
                    <span className="text-xs text-gray-400">{s.duur}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mt-5">
            <p className="font-semibold text-amber-900 mb-1">Waterverbruik tijdens regeneratie</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Elke regeneratiecyclus verbruikt 40-80 liter water bij moderne vraaggestuurde systemen,
              en 100-150 liter bij oudere tijdgestuurde modellen. Dit regeneratiewater komt bovenop het
              normale huishoudelijke waterverbruik. Over een jaar is dat 1.500-8.000 liter extra,
              afhankelijk van model en gezinsgrootte.
            </p>
          </div>
        </section>

        {/* Zout */}
        <section id="zout">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waarom is regeneratiezout nodig?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Natriumchloride (NaCl) is de goedkoopste en meest effectieve bron van natriumionen voor het
            regenereren van ionenwisselaaarhars. Het zout wordt in de zouttank (brine tank) bewaard.
            Wanneer regeneratie begint, wordt water in de zouttank gepompt, zodat een geconcentreerde
            pekeloplossing (circa 10-12% NaCl) ontstaat.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-2 text-sm">Soorten ontkalker-zout</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li><span className="font-medium">Tabletzout:</span> meest gebruikte vorm, perszout, goedkoop</li>
                <li><span className="font-medium">Blokzout:</span> grote blokken voor grote zouttanks</li>
                <li><span className="font-medium">Korrelnzout:</span> hoger zuiverheidsgehalte, minder brugvorming</li>
                <li><span className="font-medium">Oplosbaar zout:</span> &gt;99,5% NaCl, aanbevolen voor beste prestaties</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold text-gray-800 mb-2 text-sm">Typisch zoutverbruik</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li><span className="font-medium">1-2 personen:</span> 5-10 kg/maand</li>
                <li><span className="font-medium">3-4 personen:</span> 10-18 kg/maand</li>
                <li><span className="font-medium">5+ personen:</span> 15-25 kg/maand</li>
                <li><span className="font-medium">Kosten:</span> &euro;0,12-0,20 per kg</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Het natrium dat vrijkomt in het zachte water is een aandachtspunt voor mensen met
            een natriumbeperkt dieet. Bij een waterhardheid van 20 &deg;dH en gebruik van een
            ionenwisselaar bevat het onthardte water circa 46 mg Na+ per liter extra. De Europese
            drinkwaternorm stelt een adviesgrens van 200 mg/l. Voor drinkwater aan tafel wordt
            vaak een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde-osmosefilter
            </Link>{' '}
            aanbevolen als aanvulling.
          </p>
        </section>

        {/* Continu vs batch */}
        <section id="modellen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Continumodel versus batchmodel</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De twee hoofdtypen waterontkalkers verschillen sterk in hoe ze omgaan met de periode
            dat het harsvat wordt geregenereerd.
          </p>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Kenmerk</th>
                  <th className="py-2.5 px-3 font-semibold">Single-tank (batch)</th>
                  <th className="py-2.5 px-3 font-semibold">Twin-tank (continu)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Zacht water tijdens regeneratie', 'Nee (60-90 min onderbreking)', 'Ja, altijd'],
                  ['Aanschafprijs', 'Lager (€500-1.200)', 'Hoger (€900-1.800)'],
                  ['Ruimtebehoefte', 'Kleiner', 'Groter (twee tanks)'],
                  ['Zoutverbruik', 'Vergelijkbaar', 'Vergelijkbaar of lager'],
                  ['Geschikt voor', 'Gezin tot 4 personen', 'Grote gezinnen, bedrijven'],
                  ['Regeneratietijdstip', 'Instelbaar (nacht)', 'Op elk moment mogelijk'],
                ].map(([kenmerk, single, twin], i) => (
                  <tr key={kenmerk} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{kenmerk}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{single}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{twin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Voor de meeste gezinnen van 2-4 personen is een single-tank ontkalker met nachtelijke
            regeneratie voldoende. Twin-tank systemen zijn de keuze wanneer er 24 uur per dag zacht
            water nodig is, of wanneer het waterverbruik hoog is door veel personen of
            bedrijfsmatig gebruik. Zie ook de{' '}
            <Link href="/waterontkalker/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              modellenvergelijking
            </Link>
            .
          </p>
        </section>

        {/* Energie */}
        <section id="energie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Energieverbruik van een waterontkalker</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een moderne elektrische waterontkalker verbruikt weinig energie. De elektronica voor de
            controller, het display en eventuele sensoren trekt 5-15 W in standby. Tijdens regeneratie
            is er nauwelijks extra stroomverbruik, omdat het waterproces zelf mechanisch verloopt.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            {[
              { label: 'Standby verbruik', waarde: '5-15 W' },
              { label: 'Jaarlijks kWh', waarde: '44-130 kWh' },
              { label: 'Kosten per jaar', waarde: '€10-30' },
              { label: 'Non-elektrisch (Kinetico)', waarde: '0 W' },
            ].map(k => (
              <div key={k.label} className="bg-[#E0F2FE] rounded-xl p-3 text-center">
                <p className="text-lg font-bold text-[#003F5C]">{k.waarde}</p>
                <p className="text-xs text-gray-600 mt-1">{k.label}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 leading-relaxed">
            Ter vergelijking: het energieverbruik van een waterontkalker is vergelijkbaar met een
            standby-lampje. De indirecte energiebesparing kan groter zijn: zachter water heeft minder
            wasmiddel nodig, en een kalkvrije cv-ketel werkt tot 15% efficienter dan een verkalkte.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/waterontkalker', title: 'Waterontkalker overzicht', desc: 'Alle types ontkalkers: magnetisch, elektronisch en TAC vergeleken.' },
              { href: '/waterontkalker/vergelijken', title: 'Modellen vergelijken', desc: 'De beste waterontkalkers van 2026 op een rij.' },
              { href: '/waterontkalker/kosten', title: 'Kosten waterontkalker', desc: 'Aanschaf, zout, onderhoud en TCO over 10 jaar.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose', desc: 'De grondigste filtratie voor drinkwater: 95-99% verwijdering.' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1">{l.title}</p>
                <p className="text-sm text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
            <p className="text-sm text-gray-600">Vergelijk de werking van ontharders met die van ontkalkers.</p>
          </Link>
          <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling uitgelegd</h3>
            <p className="text-sm text-gray-600">De wetenschappelijke basis achter het ontkalkinssproces: hoe harskorrels calcium en magnesium vastleggen.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
            <p className="text-sm text-gray-600">Welke mineralen verwijdert een ontkalker en welke blijven er in uw water?</p>
          </Link>
          <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp bij hard water</h3>
            <p className="text-sm text-gray-600">Heeft u echt een ontkalker nodig? Controleer uw waterhardheid en kies de juiste oplossing.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" variant="compact" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over de werking van een waterontkalker
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
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
