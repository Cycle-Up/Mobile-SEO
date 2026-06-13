import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Waterontkalker kopen: waar op letten? Complete koopgids 2026',
  description:
    'Waterontkalker kopen in 2026? Leer waar u op moet letten: capaciteit, zoutverbruik, installatie, huren vs. kopen en alternatieven.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontkalker/kopen' },
  openGraph: {
    title: 'Waterontkalker kopen: waar op letten? Complete koopgids 2026',
    description:
      'Complete gids voor het kopen van een waterontkalker: 5 koopkriteria, huren vs. kopen, installatievereisten en wanneer osmose beter is.',
    url: 'https://waterfilterplatform.nl/waterontkalker/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Waar moet ik op letten bij het kopen van een waterontkalker?',
    answer:
      'De vijf belangrijkste criteria zijn: (1) capaciteit in verhouding tot uw waterverbruik en waterhardheid, (2) regeneratietype (vraaggestuurd is veel zuiniger dan tijdgestuurd), (3) zoutverbruik per regeneratiecyclus, (4) garantieduur en beschikbaarheid van onderdelen, en (5) of er een servicecontract beschikbaar is. Koop bij voorkeur bij een erkend installateur die ook onderhoud kan verzorgen.',
  },
  {
    question: 'Hoeveel capaciteit heb ik nodig voor mijn huishouden?',
    answer:
      'Reken op 120-150 liter water per persoon per dag. Bij 4 personen en een waterhardheid van 18 °dH heeft u een ontkalker nodig met een capaciteit van minimaal 15-20 liter hars (circa 30.000-40.000 grain). De ontkalker hoeft dan maximaal eens per 7 dagen te regenereren, wat zout- en watergebruik beperkt houdt. Bij harder water (&gt;20 °dH) kiest u voor een grotere eenheid.',
  },
  {
    question: 'Wat zijn de installatievereisten voor een waterontkalker?',
    answer:
      'Een waterontkalker heeft nodig: (1) aansluiting op de hoofdwaterleiding (inkomende leiding, bij voorkeur voor de aftakking naar de cv-ketel), (2) een afvoer voor het spoelwater van de regeneratie, (3) een stopcontact op maximaal 1-2 meter (behalve bij niet-elektrische systemen), en (4) voldoende ruimte: een standaard compact model vraagt circa 40 x 50 x 100 cm. Installatie door een erkend loodgieter is aanbevolen en vaak vereist voor garantie.',
  },
  {
    question: 'Is huren of kopen van een waterontkalker goedkoper?',
    answer:
      'Kopen is over een periode van 5 jaar of langer bijna altijd goedkoper. Huurprijzen van €15-30 per maand inclusief service leiden over 10 jaar tot €1.800-3.600 totaalkosten. Een gekochte ontkalker kost over dezelfde periode €1.400-2.800 inclusief installatie en verbruikskosten. Huren is interessant als u korter op hetzelfde adres woont, geen groot bedrag wilt uitgeven of service wilt uitbesteden.',
  },
  {
    question: 'Wanneer is osmose beter dan een waterontkalker?',
    answer:
      'Omgekeerde osmose is beter als u (1) in een huurwoning woont zonder toestemming voor leidingwerk, (2) ook chloor, nitraten, PFAS of microplastics wilt verwijderen, (3) een natriumarm dieet volgt (ionenwisselaar verhoogt natriumgehalte), of (4) een klein huishouden heeft waarbij de investering in een ontkalker niet opweegt. Een osmosefilter behandelt alleen het drinkwater aan de keukenkraan, geen douche- of waswater.',
  },
  {
    question: 'Wat zijn de prijsklassen voor waterontkalkers in 2026?',
    answer:
      'Budget (€300-600): eenvoudige tijdgestuurde single-tank modellen, hoger zoutverbruik, kortere garantie. Midden (€600-1.200): vraaggestuurde single-tank met betere zoutefficiëntie, 5-7 jaar garantie. Premium (€1.200-1.800+): twin-tank of non-elektrische vraaggestuurde systemen (Kinetico, Harvey), laagste zoutverbruik, 7-10 jaar garantie. Installatie door een loodgieter komt er altijd bij: reken op €200-400.',
  },
  {
    question: 'Kan ik een waterontkalker zelf installeren?',
    answer:
      'Technisch is het mogelijk als u ervaring heeft met leidingwerk, maar het wordt niet aanbevolen. Foutieve installatie kan lekkage, drukproblemen of garantieverlies veroorzaken. In Nederland vereist aansluiting op de drinkwaterleiding bovendien dat het materiaal en de installatiemethode voldoen aan NEN 1006. Laat de installatie uitvoeren door een erkend installateur of cv-monteur.',
  },
  {
    question: 'Waar kan ik het beste een waterontkalker kopen?',
    answer:
      'U kunt een waterontkalker kopen via een erkend waterbehandelingsbedrijf (inclusief installatie en service), gespecialiseerde webshops (lagere prijs maar installatie apart regelen), of direct bij de fabrikant/importeur. Koop bij voorkeur bij een partij die ook onderhoud, zoutleveringen en storingsdienst aanbiedt. Vraag altijd naar de beschikbaarheid van onderdelen en de duur van het servicecontract.',
  },
];

export default function WaterOntkalkerKopenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontkalker', url: 'https://waterfilterplatform.nl/waterontkalker' },
          { name: 'Kopen', url: 'https://waterfilterplatform.nl/waterontkalker/kopen' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontkalker kopen: waar op letten? Complete koopgids 2026',
          description:
            'Waterontkalker kopen in 2026? Leer waar u op moet letten: capaciteit, zoutverbruik, installatie, huren vs. kopen en alternatieven.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterontkalker/kopen',
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
            <span>Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontkalker kopen: waar op letten? Complete koopgids 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een waterontkalker kopen is een investering voor de lange termijn. Op deze pagina leert u
            welke 5 criteria bepalend zijn, wat huren versus kopen kost, welke installatievereisten gelden
            en wanneer een osmosefilter een slimmer alternatief is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#criteria"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              5 koopkriteria &rarr;
            </Link>
            <Link
              href="/waterontkalker/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Modellen vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer answer="Bij het kopen van een waterontkalker zijn capaciteit (harsvolume vs. waterverbruik en hardheid), regeneratietype (vraaggestuurd &gt; tijdgestuurd), zoutverbruik, garantie en servicecontract de 5 sleutelcriteria. Huren is duurder op lange termijn. Osmose is beter voor drinkwater in huurwoningen. Prijsklassen: budget €300-600, midden €600-1.200, premium €1.200+." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#criteria" className="hover:underline">5 criteria bij aankoop</a></li>
            <li><a href="#huren-vs-kopen" className="hover:underline">Huren vs. kopen</a></li>
            <li><a href="#installatie" className="hover:underline">Installatievereisten</a></li>
            <li><a href="#prijsklassen" className="hover:underline">Prijsklassen 2026</a></li>
            <li><a href="#osmose" className="hover:underline">Wanneer osmose beter is</a></li>
            <li><a href="#waar-kopen" className="hover:underline">Waar kopen?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* 5 criteria */}
        <section id="criteria">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">5 criteria bij de aankoop van een waterontkalker</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Niet elk model past bij elk huishouden. Gebruik deze vijf criteria om de juiste keuze te maken.
          </p>
          <div className="space-y-5">
            {[
              {
                nr: '1',
                titel: 'Capaciteit: harsvolume versus verbruik en hardheid',
                tekst: 'De capaciteit van een ontkalker wordt bepaald door het harsvolume (liters) en de lokale waterhardheid (°dH). Reken: capaciteit (liters) = harsvolume (L) x 50 / hardheid (°dH). Bij 20 liter hars en 18 °dH kunt u circa 55.000 liter ontharden per regeneratie. Met een dagverbruik van 600 liter (4 personen) regenereert u eens per 91 dagen — dit is te weinig. Kies een model dat eens per 7-10 dagen regenereert voor optimale efficiëntie.',
              },
              {
                nr: '2',
                titel: 'Regeneratietype: vraaggestuurd of tijdgestuurd?',
                tekst: 'Tijdgestuurde ontkalkers regenereren op een vast tijdstip (bijv. elke nacht om 02:00), ongeacht het werkelijke verbruik. Dit leidt tot 30-50% meer zout- en waterverbruik dan nodig. Vraaggestuurde (demand-initiated) systemen meten het werkelijke verbruik via een flowmeter en regenereren alleen wanneer de hars daadwerkelijk verzadigd raakt. Kies altijd voor vraaggestuurd als de budgetruimte het toelaat.',
              },
              {
                nr: '3',
                titel: 'Zoutverbruik per regeneratiecyclus',
                tekst: 'Het zoutverbruik per cyclus varieert van 0,5 kg (efficiënte kleine modellen) tot 3+ kg (grote tijdgestuurde modellen). Bij 1 kg per cyclus en 52 cycli per jaar verbruikt u 52 kg zout. Bij €0,15 per kg is dat €7,80 per jaar aan zout. Bij 3 kg per cyclus en wekelijkse regeneratie is dat 156 kg = €23,40 per jaar. Over 10 jaar is dit verschil €156. Controleer altijd de technische specificaties op zoutverbruik per cyclus.',
              },
              {
                nr: '4',
                titel: 'Garantieduur en onderdelen beschikbaarheid',
                tekst: 'Een waterontkalker is een apparaat voor 10-15 jaar. Kies een merk dat minstens 5 jaar garantie biedt op het harsvat en 2 jaar op de besturingselektronica. Controleer of onderdelen (harshars, kleppen, besturingsprint) ook na 10 jaar nog beschikbaar zijn. Europese merken als Kinetico, BWT en Harvey hebben een sterk serviceNetwerk in Nederland en Belgie.',
              },
              {
                nr: '5',
                titel: 'Servicecontract: inclusief of apart?',
                tekst: 'Een servicecontract dekt jaarlijks onderhoud, reiniging van het harsvat, controle van de zouttank en eventuele kleine reparaties. Kosten: €80-150 per jaar. Zonder servicecontract betaalt u storingen per incident (€100-250 voor een technicus). Voor gezinnen die niet technisch zijn ingesteld of weinig tijd hebben voor onderhoud is een servicecontract aan te raden.',
              },
            ].map(k => (
              <div key={k.nr} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">{k.nr}</div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{k.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{k.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Huren vs kopen */}
        <section id="huren-vs-kopen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Huren vs. kopen: vergelijking over 10 jaar</h2>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Kostenpost</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Huren (10 jr)</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Kopen (10 jr)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Aanschaf / installatie', '&euro;0-100', '&euro;900-2.000'],
                  ['Maandelijkse huur', '&euro;2.400-3.600', '&euro;0'],
                  ['Zout en water', 'Deels inbegrepen', '&euro;1.500-3.000'],
                  ['Service en onderhoud', 'Inbegrepen', '&euro;800-1.500'],
                  ['Totaal 10 jaar', '&euro;2.400-3.700', '&euro;1.400-3.000'],
                ].map(([post, huren, kopen], i) => (
                  <tr key={post} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800" dangerouslySetInnerHTML={{ __html: post }} />
                    <td className="py-2.5 px-3 text-right text-gray-600" dangerouslySetInnerHTML={{ __html: huren }} />
                    <td className="py-2.5 px-3 text-right text-gray-600" dangerouslySetInnerHTML={{ __html: kopen }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Kopen is over 10 jaar doorgaans €500-1.500 goedkoper. Huren is aantrekkelijk als u
            korter op hetzelfde adres woont (minder dan 3-4 jaar), als u geen kapitaal wilt vastleggen,
            of als u volledig ontzorgd wilt worden. Meer over de totale kostenstructuur leest u op de
            pagina{' '}
            <Link href="/waterontkalker/kosten" className="text-[#005F8A] underline hover:no-underline">
              waterontkalker kosten
            </Link>
            .
          </p>
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatievereisten</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een goede installatie is cruciaal voor optimale werking en garantiebehoud. Hieronder de
            vereisten voor een standaard huishoudelijke waterontkalker.
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                icon: '&#128197;',
                titel: 'Aansluitpunt op de hoofdleiding',
                tekst: 'De ontkalker wordt geplaatst op de inkomende hoofdleiding, bij voorkeur na de watermeter en voor de aftakking naar de cv-ketel. Zo wordt al het water in huis onthard. Koud drinkwater voor koken kan via een bypass of aparte kraan onbehandeld worden gehouden.',
              },
              {
                icon: '&#128694;',
                titel: 'Afvoer voor regeneratiewater',
                tekst: 'Tijdens regeneratie wordt 40-80 liter spoelwater geloosd. De ontkalker heeft een vrije afvoer nodig naar het riool, zonder terugstuwing. Een afvoer op de grond in de meterkast of technische ruimte is ideaal.',
              },
              {
                icon: '&#9889;',
                titel: 'Stopcontact (elektrische modellen)',
                tekst: 'Elektrische ontkalkers hebben een geaard stopcontact nodig op maximaal 1-2 meter. Het verbruik is laag (5-15 W). Niet-elektrische systemen zoals Kinetico hebben geen stroom nodig.',
              },
              {
                icon: '&#128208;',
                titel: 'Ruimte voor het apparaat en zouttank',
                tekst: 'Een compact model neemt circa 40 x 50 x 100 cm in beslag. De zouttank (voor regeneratiezout) staat naast of onder de ontkalker en vraagt extra ruimte van circa 40 x 40 cm. Zorg dat er voldoende ruimte is om de zouttank bij te vullen.',
              },
            ].map(v => (
              <div key={v.titel} className="flex gap-3 items-start border border-gray-100 rounded-xl p-4">
                <span className="text-2xl shrink-0" dangerouslySetInnerHTML={{ __html: v.icon }} />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">{v.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
            <p className="font-semibold text-amber-900 mb-1">Laat installeren door een erkend installateur</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Aansluiting op de drinkwaterleiding valt onder NEN 1006 in Nederland. Onjuiste installatie
              kan drukproblemen, lekkage of garantieverlies veroorzaken. Kosten voor een erkend
              loodgieter of waterbehandelingsbedrijf: €200-400 inclusief materiaala voor afvoer en bypass.
            </p>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Prijsklassen */}
        <section id="prijsklassen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Prijsklassen 2026</h2>
          <div className="space-y-4">
            {[
              {
                klasse: 'Budget',
                prijs: '€300-600',
                kleur: 'bg-gray-50 border-gray-200',
                kenmerken: ['Tijdgestuurde regeneratie', 'Single-tank', 'Harsvolume 10-15 liter', 'Garantie 1-2 jaar', 'Geen smart-functies'],
                advies: 'Geschikt voor tijdelijk gebruik of als u zout- en waterverbruik minder zwaar laat wegen dan aanschafprijs.',
              },
              {
                klasse: 'Middenklasse',
                prijs: '€600-1.200',
                kleur: 'bg-[#E0F2FE] border-[#005F8A]/20',
                kenmerken: ['Vraaggestuurde regeneratie', 'Single-tank met grotere hars', 'Harsvolume 15-25 liter', 'Garantie 5-7 jaar', 'Optioneel servicecontract'],
                advies: 'De beste prijs-kwaliteit voor de meeste gezinnen. Significant lager zoutverbruik dan budget modellen.',
              },
              {
                klasse: 'Premium',
                prijs: '€1.200-1.800+',
                kleur: 'bg-gray-50 border-gray-200',
                kenmerken: ['Twin-tank of non-elektrisch', 'Continu zacht water', 'Laagste zoutverbruik', 'Garantie 7-10 jaar', 'Professionele service'],
                advies: 'Voor grote gezinnen, bedrijven of wie het laagste zoutverbruik en maximale betrouwbaarheid wil.',
              },
            ].map(p => (
              <div key={p.klasse} className={`rounded-xl border p-5 ${p.kleur}`}>
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="font-bold text-gray-900">{p.klasse}</h3>
                  <span className="font-bold text-[#005F8A]">{p.prijs}</span>
                </div>
                <ul className="space-y-1 mb-3">
                  {p.kenmerken.map(k => (
                    <li key={k} className="text-sm text-gray-700">&#10003; {k}</li>
                  ))}
                </ul>
                <p className="text-xs text-gray-500 italic">{p.advies}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">Exclusief installatiekosten (€200-400). Exclusief BTW.</p>
        </section>

        {/* Wanneer osmose beter */}
        <section id="osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer werkt osmose beter dan een ontkalker?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterontkalker is de beste keuze voor het ontharden van al het water in huis. Maar er
            zijn situaties waarbij een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde-osmosefilter
            </Link>{' '}
            een slimmere of aanvullende keuze is:
          </p>
          <div className="space-y-3 mb-5">
            {[
              'U woont in een huurwoning en hebt geen toestemming om de hoofdleiding aan te passen.',
              'U volgt een natriumbeperkt dieet (ontkalker via ionenwisseling voegt natrium toe aan water).',
              'U wilt naast kalk ook chloor, nitraten, PFAS en pesticiden verwijderen uit uw drinkwater.',
              'U heeft een klein huishouden van 1-2 personen waarbij de kosten van een ontkalker niet opwegen.',
              'U wilt een 4-in-1 kraan met kokend, koud, koel en gefilterd water direct aan tafel.',
            ].map(r => (
              <div key={r} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">&rarr;</span>
                <p className="text-sm text-gray-600 leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">PureAqua 4-in-1: de complete drinkwateroplossing</p>
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              De PureAqua 4-in-1 osmosekraan combineert omgekeerde osmose filtratie met kokend, koud en
              warm water. Geen ontkalker nodig voor drinkwater — het osmosemembraan verwijdert 99% van
              alle kalk, chloor en verontreinigingen. Ideaal voor appartementen en kleine huishoudens.
            </p>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk PureAqua 4-in-1 &rarr;
            </Link>
          </div>
        </section>

        {/* Waar kopen */}
        <section id="waar-kopen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar koopt u een waterontkalker?</h2>
          <div className="space-y-3">
            {[
              {
                kanaal: 'Erkend waterbehandelingsbedrijf',
                voordeel: 'Inclusief installatie, advies op maat, servicecontract en garantiebeheer.',
                nadeel: 'Hogere prijs dan online. Beperkt aanbod aan merken.',
              },
              {
                kanaal: 'Gespecialiseerde online webshop',
                voordeel: 'Brede keuze, scherpe prijzen, goede productinformatie. Installatie via eigen loodgieter.',
                nadeel: 'Service en onderhoud moet u zelf regelen. Garantie kan minder uitgebreid zijn.',
              },
              {
                kanaal: 'Direct bij fabrikant of importeur',
                voordeel: 'Fabrieksgarantie, dedicated service netwerk, soms financieringsopties.',
                nadeel: 'Prijsvoordeel is niet altijd aanwezig. Keuze beperkt tot eigen merken.',
              },
            ].map(k => (
              <div key={k.kanaal} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">{k.kanaal}</p>
                <p className="text-xs text-green-700 mb-0.5">&#10003; {k.voordeel}</p>
                <p className="text-xs text-gray-400">&#8722; {k.nadeel}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterontkalker', label: 'Waterontkalker overzicht' },
              { href: '/waterontkalker/vergelijken', label: 'Modellen vergelijken 2026' },
              { href: '/waterontkalker/kosten', label: 'Totale kosten waterontkalker' },
              { href: '/waterontkalker/werking', label: 'Hoe werkt een waterontkalker?' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose uitgelegd' },
              { href: '/waterhardheid', label: 'Waterhardheid in mijn gemeente' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>&rarr;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen bij het kopen van een waterontkalker
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

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
            <p className="text-sm text-gray-600">Ontdek het principe achter ionenwisseling en waarom ontharders effectiever zijn dan ontkalkers.</p>
          </Link>
          <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling uitgelegd</h3>
            <p className="text-sm text-gray-600">Hoe hars kalk- en magnesiumionen verwijdert uit kraanwater voor duurzaam resultaat.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in water</h3>
            <p className="text-sm text-gray-600">Wat zit er precies in hard water en wat doet dat met apparaten en leidingen?</p>
          </Link>
          <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp hard water</h3>
            <p className="text-sm text-gray-600">Welke oplossing past bij jouw situatie? Ontkalker, ontharder of waterfilter?</p>
          </Link>
        </div>
      </section>

        <AffiliateCTA
          destination="waterontharders"
          campaign="waterontharder"
          content="waterontkalker-kopen-cta"
          label="Bekijk het aanbod waterontharders"
          title="Een waterontharder uitkiezen?"
          sub="Bekijk het aanbod waterontharders bij onze partner PureAqua."
        />

        <CTABanner context="osmose" variant="compact" />

      </div>
    </>
  );
}
