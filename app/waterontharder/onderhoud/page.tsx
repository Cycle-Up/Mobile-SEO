import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterontharder onderhoud: complete handleiding | 2026',
  description:
    'Alles over waterontharder onderhoud: zout bijvullen, harsbed reinigen, pekelreservoir schoonmaken, zoutbruggen oplossen, regeneratiecyclus controleren en wanneer een monteur bellen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/onderhoud' },
  openGraph: {
    title: 'Waterontharder onderhoud: complete handleiding',
    description:
      'Complete gids voor het onderhoud van je waterontharder: van zout bijvullen tot harsbedreiniging en het oplossen van zoutbruggen.',
    url: 'https://waterfilterplatform.nl/waterontharder/onderhoud',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe vaak moet ik zout bijvullen in mijn waterontharder?',
    answer:
      'De bijvulfrequentie hangt af van het watergebruik en de waterhardheid. Bij een gemiddeld huishouden (4 personen, hard water boven 15 °dH) vul je doorgaans elke 4–8 weken zout bij. Controleer het zoutniveau maandelijks en vul bij als het reservoir minder dan half vol is. Nooit helemaal leeg laten lopen.',
  },
  {
    question: 'Welk zout moet ik gebruiken in mijn waterontharder?',
    answer:
      'Gebruik uitsluitend regeneratiezout dat specifiek is gemaakt voor waterontharders: tabletwout (zoutblokken) of granulaat. Nooit keukenzout, strooizout of industrieel zout — die bevatten onzuiverheden die het harsbed beschadigen. Pellets van het merk eigen aan je ontharder geven de meest consistente prestaties.',
  },
  {
    question: 'Wat is een zoutbrug en hoe los ik het op?',
    answer:
      'Een zoutbrug is een harde koek van samengekit zout die boven in het pekelreservoir hangt, terwijl er onderaan geen zout meer is. De ontharder lijkt vol maar regenereert niet effectief. Je herkent het als het zoutniveau schijnbaar constant blijft. Los het op door voorzichtig met een bezem of stok in het reservoir te prikken om de brug te breken.',
  },
  {
    question: 'Hoe reinig ik het pekelreservoir?',
    answer:
      'Reinig het pekelreservoir (brine tank) eens per jaar. Maak de tank leeg, verwijder resterende zout en slib, spoel schoon met lauw water en een milde zeep, en spoel goed na. Laat drogen voor je de tank weer vult. Gebruik geen agressieve schoonmaakmiddelen die het plastic kunnen aantasten.',
  },
  {
    question: 'Hoe lang gaat het harsbed mee?',
    answer:
      'Een kationenuitwisselingshars gaat bij normaal gebruik en goed onderhoud 10–20 jaar mee. Regelmatig regenereren met zout houdt het harsbed gezond. Bij vervuiling door ijzer, mangaan of biologische aangroei kan een harsbedreiniging (met speciale reiniger) de levensduur verlengen.',
  },
  {
    question: 'Wanneer moet ik een monteur bellen voor mijn waterontharder?',
    answer:
      'Bel een monteur bij: hardneidsrestanten in het water ondanks correct zoutgebruik, lekkages bij aansluitingen of bypass-kraan, foutcodes op het display die niet te verhelpen zijn door resetten, niet-stoppende regeneratiecycli, of wanneer je twijfelt of het harsbed aan vervanging toe is.',
  },
];

const onderhoudsSchema = [
  {
    periode: 'Maandelijks',
    taken: [
      'Controleer zoutniveau — bijvullen als minder dan half vol',
      'Controleer op zoutbruggen (prik door het zout)',
      'Noteer het zoutverbruik om anomalieën te signaleren',
    ],
  },
  {
    periode: 'Elke 3 maanden',
    taken: [
      'Controleer de regeneratiefrequentie via het display',
      'Controleer waterdruk na de ontharder',
      'Inspecteer aansluitingen op kleine lekkages',
    ],
  },
  {
    periode: 'Jaarlijks',
    taken: [
      'Reinig het pekelreservoir grondig',
      'Spoel het harsbed na met een harsbedreiniging (bij twijfel over prestaties)',
      'Controleer de tijdinstelling van de regeneratiecyclus',
      'Kalibreer hardheidsinstelling indien nodig',
      'Controleer de bypass-kraan op correcte werking',
    ],
  },
  {
    periode: 'Elke 5 jaar of bij problemen',
    taken: [
      'Professionele inspectie harsbed (meting capaciteit)',
      'Overweeg vervanging harsbed als capaciteit sterk afneemt',
      'Controleer injector en venturi op verstopping',
      'Controleer membraan van drukvat (indien aanwezig)',
    ],
  },
];

const veelvoorkendeProblemen = [
  {
    probleem: 'Zoutbrug in het reservoir',
    oorzaak: 'Vochtige lucht, fijn granulaat, te selten bijvullen',
    oplossing: 'Prik met stok door de korst om de brug te breken; schakel over op grotere zoutblokken',
  },
  {
    probleem: 'Zout slib op de bodem',
    oorzaak: 'Onzuiverheden in zout, oud slib',
    oplossing: 'Leeg en reinig het reservoir; gebruik hoogwaardig regeneratiezout',
  },
  {
    probleem: 'Hard water ondanks voldoende zout',
    oorzaak: 'Uitgeput harsbed, verkeerde tijdinstelling, zoutbrug',
    oplossing: 'Controleer zoutbrug eerst; reset regeneratietijden; laat harsbed meten',
  },
  {
    probleem: 'Continu regenereren',
    oorzaak: 'Defecte tijdklok of sensor, waterlek in bypass',
    oplossing: 'Reset apparaat; controleer bypass-kraan; monteur inschakelen',
  },
  {
    probleem: 'Ijzer- of zwavelsmaak in water',
    oorzaak: 'IJzervervuiling van harsbed',
    oplossing: 'Harsbedreiniging met ijzerverwijderaar; bij ernstige vervuiling harsbedvervanging',
  },
];

export default function WaterontharderOnderhoudPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontharder onderhoud: complete handleiding',
          description:
            'Complete gids voor waterontharder onderhoud: zout bijvullen, pekelreservoir reinigen, zoutbruggen, regeneratiecyclus en wanneer een monteur bellen.',
          datePublished: '2026-02-10',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterontharder/onderhoud',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Onderhoud', url: 'https://waterfilterplatform.nl/waterontharder/onderhoud' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Onderhoud</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontharder onderhoud: complete handleiding
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een waterontharder werkt op ionenwisseling: calcium en magnesium worden uitgewisseld
            tegen natrium via een harsbed, dat periodiek met zout wordt geregenereerd. Goed
            onderhoud is cruciaal voor optimale prestaties. In deze gids behandelen we alles van
            zout bijvullen tot harsbedreiniging.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#schema"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk onderhoudsschema →
            </a>
            <a
              href="#problemen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Veelvoorkomende problemen
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#zout" className="hover:underline">Zout bijvullen</a></li>
            <li><a href="#harsbed" className="hover:underline">Harsbed reinigen</a></li>
            <li><a href="#pekel" className="hover:underline">Pekelreservoir schoonmaken</a></li>
            <li><a href="#schema" className="hover:underline">Onderhoudsschema</a></li>
            <li><a href="#problemen" className="hover:underline">Veelvoorkomende problemen</a></li>
            <li><a href="#monteur" className="hover:underline">Wanneer monteur bellen?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Zout bijvullen */}
        <section id="zout">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Zout bijvullen: frequentie en type</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Regeneratiezout is de &ldquo;brandstof&rdquo; van je waterontharder. Zonder
            voldoende zout kan het harsbed zich niet regenereren en stopt de ontharding.
          </p>
          <div className="space-y-4">
            <div className="bg-[#E0F2FE] rounded-2xl p-5">
              <p className="font-semibold text-[#003F5C] mb-2">Vuistregel bijvullen:</p>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc list-inside">
                <li>Controleer het zoutniveau <strong>maandelijks</strong></li>
                <li>Vul bij als het reservoir voor <strong>minder dan de helft</strong> gevuld is</li>
                <li>Laat het reservoir <strong>nooit leeg</strong> lopen — dit kan het harsbed beschadigen</li>
                <li>Gemiddeld gebruik: <strong>3–8 kg zout per maand</strong> voor een huishouden van 4 personen bij hard water</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-semibold text-gray-900 mb-2">Welk zouttype kiezen?</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span><strong>Tabletten (zoutblokken):</strong> minste kans op zoutbruggen, meest gebruikt</span></div>
                <div className="flex gap-2"><span className="text-green-600 font-bold">✓</span><span><strong>Granulaat:</strong> lost snel op, ideaal bij laag verbruik</span></div>
                <div className="flex gap-2"><span className="text-amber-500 font-bold">!</span><span><strong>Pellets:</strong> geschikt, maar controleer of fabrikant dit aanraadt</span></div>
                <div className="flex gap-2"><span className="text-red-500 font-bold">✗</span><span><strong>Nooit:</strong> keukenzout, strooizout, onzuiver industriezout</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Harsbed */}
        <section id="harsbed">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Harsbed reinigen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het kationenuitwisselend harsbed is het hart van de ontharder. Met regelmatige
            regeneratie gaat het 10–20 jaar mee. Bij vervuiling door ijzer, mangaan of biologische
            aangroei is een speciale harsbedreiniging noodzakelijk.
          </p>
          <div className="space-y-3">
            {[
              {
                stap: '1',
                titel: 'Harsbedreiniging (jaarlijks of bij klachten)',
                desc: 'Voeg een harsbedreiniging (bijv. Iron Out of vergelijkbaar product) toe aan het zoutreservoir. Dit lost zich op tijdens de eerstvolgende regeneratiecyclus en verwijdert ijzer- en mangaanafzettingen van het harsbed.',
              },
              {
                stap: '2',
                titel: 'Handmatige regeneratie triggeren',
                desc: 'Na het toevoegen van de harsbedreiniging: start een handmatige regeneratiecyclus via het bedieningspaneel. Raadpleeg de handleiding van jouw model voor de exacte stappen.',
              },
              {
                stap: '3',
                titel: 'Naspoeling controleren',
                desc: 'Laat na de reinigingscyclus extra water doorstromen. Meet de waterhardheid na de behandeling om te bevestigen dat de capaciteit is hersteld.',
              },
            ].map(s => (
              <div key={s.stap} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">
                  {s.stap}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Signalen dat harsbedreiniging nodig is:</strong>{' '}
            ijzer- of zwavelsmaak in water, lagere drukval over het systeem, hogere restopping
            (water is weer harder dan normaal), slijmerige afzetting in sanitair.
          </div>
        </section>

        {/* Pekelreservoir */}
        <section id="pekel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Pekelreservoir schoonmaken</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het pekelreservoir (brine tank) bevat zout en het zoutwateroplossing (pekel) die
            het harsbed regenereert. Jaarlijkse reiniging voorkomt ophoping van slib, onzuiverheden
            en mogelijke bacteriegroei.
          </p>
          <ol className="space-y-3 text-gray-700">
            {[
              'Zet de bypass-kraan van de ontharder open zodat leidingwater direct doorstroomt.',
              'Verwijder alle zout uit de brine tank. Gebruik het resterende zout niet opnieuw als het sterk verkleurd of klonterig is.',
              'Verwijder eventueel aanwezig slib (bruine of zwarte laag op de bodem) met een schepje of spatel.',
              'Spoel de tank om met lauw water. Gebruik een milde zeepoplossing als de binnenwand vuil is.',
              'Spoel grondig na met schoon water. Laat de tank droogdrogen of dep droog.',
              'Vul opnieuw met vers regeneratiezout en zet de bypass terug in normale stand.',
              'Start een handmatige regeneratiecyclus om het systeem te herinitialiseren.',
            ].map((stap, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-[#E0F2FE] text-[#003F5C] rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed">{stap}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Schema */}
        <section id="schema">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderhoudsschema per periode</h2>
          <div className="space-y-5">
            {onderhoudsSchema.map(periode => (
              <div key={periode.periode} className="border border-gray-100 rounded-2xl overflow-hidden">
                <div className="bg-[#E0F2FE] px-5 py-3">
                  <p className="font-bold text-[#003F5C]">{periode.periode}</p>
                </div>
                <ul className="p-5 space-y-2">
                  {periode.taken.map(taak => (
                    <li key={taak} className="flex items-start gap-3">
                      <span className="w-5 h-5 border-2 border-[#005F8A] rounded flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{taak}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Veelvoorkomende problemen */}
        <section id="problemen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Veelvoorkomende problemen en oplossingen</h2>
          <div className="space-y-4">
            {veelvoorkendeProblemen.map(p => (
              <div key={p.probleem} className="border border-gray-100 rounded-xl p-4">
                <p className="font-semibold text-gray-900 mb-1">{p.probleem}</p>
                <p className="text-xs text-gray-500 mb-2"><strong>Oorzaak:</strong> {p.oorzaak}</p>
                <p className="text-sm text-gray-700"><strong className="text-[#005F8A]">Oplossing:</strong> {p.oplossing}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Monteur */}
        <section id="monteur">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer een monteur bellen?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Veel onderhoudstaken zijn door de eigenaar zelf uit te voeren. Er zijn echter situaties
            waarbij professionele hulp noodzakelijk is:
          </p>
          <div className="space-y-3">
            {[
              { titel: 'Aanhoudend hard water', desc: 'Ondanks correct zoutgebruik en geen zoutbruggen blijft het water hard. Kan wijzen op een verouderd harsbed, defecte injector of kapot controleventiel.' },
              { titel: 'Niet-stoppende regeneratiecyclus', desc: 'De ontharder regenereert continu of schakelt niet terug naar normale modus. Dit kost veel zout en water — direct monteur bellen.' },
              { titel: 'Waterlekkage', desc: 'Lekkage bij de aansluitingen, de bypass-kraan of het systeem zelf. Zet de bypass open en bel direct een monteur.' },
              { titel: 'Foutcodes op het display', desc: 'Foutcodes die niet opgelost worden door resetten of in de handleiding staan beschreven vereisen technische diagnose.' },
              { titel: 'Systeemleeftijd boven 15 jaar', desc: 'Overweeg bij een ontharder ouder dan 15 jaar een professionele keuring om de staat van het harsbed en de ventielen te beoordelen.' },
            ].map(s => (
              <div key={s.titel} className="flex gap-3 items-start bg-red-50 border border-red-100 rounded-xl p-4">
                <span className="text-red-500 font-bold text-lg shrink-0">!</span>
                <div>
                  <p className="font-semibold text-red-900">{s.titel}</p>
                  <p className="text-sm text-gray-700 mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mt-4 text-sm leading-relaxed">
            Overweeg je een waterontharder te vervangen door een osmose systeem dat geen zout of
            regeneratie nodig heeft?{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              Bekijk het osmosefilter overzicht
            </Link>.
          </p>
        </section>

        {/* CTA */}
        <CTABanner context="waterhardheid" />

        {/* Gerelateerde pagina's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/waterontharder', title: 'Waterontharder overzicht', desc: 'Alles over waterontharders: typen, werking en kosten.' },
              { href: '/waterontharder/zout', title: 'Waterontharder zout', desc: 'Welk zout, hoeveel en hoe vaak bijvullen?' },
              { href: '/waterhardheid/testen', title: 'Waterhardheid testen', desc: 'Meet de hardheid van je water thuis.' },
              { href: '/omgekeerde-osmose/kopen', title: 'Osmose filter kopen', desc: 'Alternatief zonder zout of regeneratie.' },
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

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over waterontharder onderhoud</h2>
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
