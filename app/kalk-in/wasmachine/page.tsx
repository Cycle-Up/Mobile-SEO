import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kalk in wasmachine: schade voorkomen bij hard water',
  description:
    'Hard water beschadigt uw wasmachine en verhoogt waskosten. Oorzaak, effect op verwarmingselement en stoomsysteem, en hoe kalk in de wasmachine te voorkomen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kalk-in/wasmachine' },
  openGraph: {
    title: 'Kalk in wasmachine: hoe hard water uw wasmachine beschadigt',
    description:
      '3 mm ketelsteen in de wasmachine kost 30% meer energie. Oorzaak, levensduurimpact, Calgon-mythe en hoe kalk structureel te voorkomen.',
  },
};

const faqItems = [
  {
    question: 'Hoe beschadigt hard water de wasmachine?',
    answer:
      'In de wasmachine verhit het verwarmingselement het water tot de gewenste wastemperatuur. Bij hard water slaat calciumcarbonaat neer op dit element als een harde kalkkorst. Deze korst isoleert warmte en forceert het element harder te werken, wat het energieverbruik verhoogt en het element versneld slijt. Ook pompcomponenten en toevoerleidingen worden aangetast door kalkafzetting.',
  },
  {
    question: 'Hoeveel energieverbruik kost kalk in de wasmachine extra?',
    answer:
      'Elk millimeter ketelsteen op het verwarmingselement verhoogt het energieverbruik voor verwarming met circa 10%. Bij 3 mm aanslag betaalt u 30% meer voor hetzelfde wasprogramma. Over een wasmachinejaar van 200-300 was-beurten loopt dit op tot 30-60 euro extra energiekosten per jaar.',
  },
  {
    question: 'Hoe lang gaat een wasmachine mee in een hard-watergebied?',
    answer:
      'Een wasmachine heeft een normale levensduur van 8-12 jaar. In hard-watergebieden (boven 14 dH) zonder enige kalkaanpak verkort dit naar 5-8 jaar. Het verwarmingselement is het eerste onderdeel dat bezwijkt, gevolgd door de pomp. Vervanging van alleen het verwarmingselement kost 150-400 euro; een nieuwe machine 400-800 euro.',
  },
  {
    question: 'Heb ik Calgon nodig in mijn wasmachine?',
    answer:
      'Calgon bevat fosfaatzouten (natriumhexametafosfaat) die calcium in oplossing houden en enige bescherming bieden bij hard water. Maar Calgon is niet noodzakelijk als u al een goed wasmiddel gebruikt dat ontkalker bevat, of als u woont in een gebied met matig of zacht water. Bij zeer hard water (boven 18 dH) kan Calgon een bijdrage leveren als aanvulling op goed wasmiddel.',
  },
  {
    question: 'Hoe ontkalk ik mijn wasmachine veilig?',
    answer:
      'Voer een leeg wasprogramma uit op 60-90 graden Celsius met 200 gram citroenzuur in de wastrommel (niet in de zeeplade). Citroenzuur is voedselveilig, effectief en goedkoper dan speciale ontkalkers. Doe dit maandelijks bij hard water. Alternatief: gebruik een citroenzuurontkalktablet of een combinatie van bakpoeder en azijn. Vermijd chloorhoudende middelen; die tasten rubbers aan.',
  },
  {
    question: 'Heeft hard water effect op de kwaliteit van de was?',
    answer:
      'Ja, merkbaar. In hard water heeft u 25-40% meer wasmiddel nodig om hetzelfde schoonmaakresultaat te bereiken, omdat calciumionen de werkzame tensiden deactiveren. Kleding kan stugger voelen en verliest sneller kleur en glans. Witte was kan grijzig worden door kalkafzetting in de vezels.',
  },
  {
    question: 'Welke temperatuur is het slechtst voor kalkaanslag in de wasmachine?',
    answer:
      'Wasprogrammas boven 40 graden Celsius versnellen kalkneerslag sterk. Het verwarmingselement werkt het meest intensief bij 60-90-graden programmas. Wassen op 30-40 graden vermindert kalkaanslag aanzienlijk maar reinigt minder grondig. Voor het element is wassen op lage temperatuur de beste preventie; voor het ontkalken van bestaande aanslag juist hoge temperatuur met citroenzuur.',
  },
  {
    question: 'Is een waterontharder of osmose filter beter voor de wasmachine?',
    answer:
      'Een waterontharder is de beste keuze voor de wasmachine. Een centrale waterontharder in de meterkast behandelt al het inkomende water, inclusief het water voor de wasmachine. Omgekeerde osmose is bedoeld voor drinkwater en is niet zinvol als sole oplossing voor de wasmachine: osmosewater is vrijwel mineraalvrij maar biedt geen extra bescherming voor de machine ten opzichte van onthard water.',
  },
];

const schadeData = [
  {
    onderdeel: 'Verwarmingselement',
    beschrijving: 'Grootste slachtoffer van kalk. 3 mm ketelsteen = 30% meer energieverbruik. Levensduur halveert.',
    risico: 'Zeer hoog',
    kleur: 'text-red-700',
  },
  {
    onderdeel: 'Pomp en leidingen',
    beschrijving: 'Kalkdeeltjes beschadigen pompimpeller. Toevoerleidingen kunnen deels verstoppen.',
    risico: 'Hoog',
    kleur: 'text-orange-700',
  },
  {
    onderdeel: 'Rubber afdichtingen',
    beschrijving: 'Kalk in combinatie met wasmiddel-residuen veroorzaakt vervuiling en geurproblemen in de manchet.',
    risico: 'Matig',
    kleur: 'text-amber-700',
  },
  {
    onderdeel: 'Wasstrommel',
    beschrijving: 'Lichte kalkaanslag op staaloppervlak. Slijt oppervlak licht maar is minder kritisch dan element.',
    risico: 'Laag',
    kleur: 'text-lime-700',
  },
];

const wasMiddelData = [
  { hardheid: 'Zacht (minder dan 8 dH)', dosering: 'Minimale dosering (zie verpakking)', besparing: 'Tot 40% minder wasmiddel' },
  { hardheid: 'Matig hard (8-12 dH)', dosering: 'Normale dosering', besparing: 'Standaard gebruik' },
  { hardheid: 'Hard (12-18 dH)', dosering: '+25% extra wasmiddel', besparing: 'Gebruik harder water dosering' },
  { hardheid: 'Zeer hard (meer dan 18 dH)', dosering: '+40% extra wasmiddel', besparing: 'Overweeg waterontharder voor besparing' },
];

export default function KalkWasmachinePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kalk in leidingwater', url: 'https://waterfilterplatform.nl/kalk-in' },
          { name: 'Kalk in wasmachine', url: 'https://waterfilterplatform.nl/kalk-in/wasmachine' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kalk in wasmachine: schade voorkomen bij hard water',
          description:
            'Hard water beschadigt uw wasmachine en verhoogt waskosten. Oorzaak, effect op verwarmingselement en stoomsysteem, en hoe kalk in de wasmachine te voorkomen.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/kalk-in/wasmachine',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kalk-in" className="hover:text-[#005F8A]">Kalk in leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Kalk in wasmachine</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kalk in wasmachine: schade voorkomen bij hard water
          </h1>
          <p className="text-gray-600 text-lg">
            Hard water is de nummer een sluipende vijand van uw wasmachine. Het verwarmingselement raakt bedekt met ketelsteen,
            het energieverbruik stijgt en de levensduur daalt. Leer hoe u kalk in de wasmachine aanpakt en voorkomt.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <QuickAnswer answer="3 mm ketelsteen in de wasmachine verhoogt het energieverbruik met 30%. In hard-watergebieden daalt de levensduur van de wasmachine van 8-12 jaar naar 5-8 jaar. Maandelijks ontkalken met 200 gram citroenzuur op 60-90 graden (leeg programma) is de beste preventie. Een centrale waterontharder biedt structurele bescherming." />

        {/* Hoe hard water beschadigt */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe hard water de wasmachine beschadigt</h2>
          <p className="text-gray-600 text-sm mb-4">
            De wasmachine mengt koud leidingwater met warmte om de gewenste wastemperatuur te bereiken. Het verwarmingselement werkt hierbij het hardst. Bij hard water (boven 12 dH) slaat calciumcarbonaat neer op het element, zeker bij programmas boven 40 graden Celsius.
          </p>
          <p className="text-gray-600 text-sm mb-4">
            Kalk is een slechte warmtegeleider. Hoe dikker de kalkkorst op het element, hoe meer energie er nodig is om het water op temperatuur te brengen. Tegelijkertijd zorgt de extra warmtebelasting voor versnelde slijtage van het element zelf.
          </p>
          <div className="space-y-2">
            {schadeData.map(s => (
              <div key={s.onderdeel} className="border border-gray-100 rounded-xl p-3 flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-sm text-gray-800">{s.onderdeel}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{s.beschrijving}</p>
                </div>
                <span className={`text-xs font-semibold shrink-0 ${s.kleur}`}>{s.risico}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Levensduur vergelijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Levensduur wasmachine met en zonder kalkaanpak</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-green-800 text-sm mb-1">Met kalkaanpak / zacht water</p>
              <p className="text-3xl font-bold text-green-700 mb-1">8-12 jaar</p>
              <p className="text-xs text-green-700">Normale levensduur. Regelmatig ontkalken en zachter water of ontharder</p>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-4">
              <p className="font-semibold text-red-800 text-sm mb-1">Zonder kalkaanpak, hard water</p>
              <p className="text-3xl font-bold text-red-700 mb-1">5-8 jaar</p>
              <p className="text-xs text-red-700">Verkorte levensduur. Verwarmingselement kan al na 4-6 jaar defect raken. Reparatie 150-400 euro</p>
            </div>
          </div>
          <p className="text-gray-600 text-sm">
            Een wasmachine van 600 euro gaat bij slecht onderhoud in hard water mogelijk 4 jaar minder mee.
            Dat is een extra jaarlijkse afschrijvingskost van circa 100 euro, bovenop het hogere energieverbruik.
          </p>
        </section>

        {/* Wasmiddel dosering */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer wasmiddel nodig bij hard water</h2>
          <p className="text-gray-600 text-sm mb-4">
            Calciumionen in hard water reageren met tensiden (de werkzame stoffen in wasmiddel) en neutraliseren ze. Daardoor heeft u bij hard water 25-40% meer wasmiddel nodig voor hetzelfde schoonmaakresultaat.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE] text-[#003F5C]">
                  <th className="text-left p-3 rounded-tl-xl">Waterhardheidsniveau</th>
                  <th className="text-left p-3">Dosering</th>
                  <th className="text-left p-3 rounded-tr-xl">Effect</th>
                </tr>
              </thead>
              <tbody>
                {wasMiddelData.map((r, i) => (
                  <tr key={r.hardheid} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 text-gray-800 text-xs">{r.hardheid}</td>
                    <td className="p-3 text-gray-700 text-xs">{r.dosering}</td>
                    <td className="p-3 text-gray-500 text-xs">{r.besparing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <CTABanner context="osmose" variant="compact" />

        {/* Ontkalken wasmachine */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wasmachine ontkalken: zo doet u het veilig</h2>
          <p className="text-gray-600 text-sm mb-4">
            Citroenzuur is de veiligste en meest effectieve methode om een wasmachine te ontkalken:
          </p>
          <ol className="space-y-3 mb-4">
            {[
              { stap: '1', tekst: 'Zorg dat de wasmachine leeg is. Doe geen kleding in de trommel.' },
              { stap: '2', tekst: 'Voeg 200 gram citroenzuurpoeder direct in de wastrommel (niet in de zeeplade).' },
              { stap: '3', tekst: 'Kies een wasprogramma op 60 of 90 graden Celsius. Een intensief programma werkt beter.' },
              { stap: '4', tekst: 'Laat het programma volledig uitdraaien. Het citroenzuur lost kalk op van het element en de trommelwand.' },
              { stap: '5', tekst: 'Draai daarna een kort programma op 30 graden zonder citroenzuur om de machine door te spoelen.' },
            ].map(s => (
              <li key={s.stap} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#005F8A] text-white text-xs font-bold flex items-center justify-center">
                  {s.stap}
                </span>
                <p className="text-sm text-gray-600 pt-0.5">{s.tekst}</p>
              </li>
            ))}
          </ol>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-amber-800 mb-1">Frequentie aanbeveling</p>
            <p className="text-xs text-amber-700">
              Maandelijks bij hard water (boven 14 dH). Elk kwartaal bij matig hard water (8-12 dH). Halfjaarlijks bij zacht water (onder 8 dH).
            </p>
          </div>
        </section>

        {/* Calgon mythe */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">De Calgon-mythe: heeft u Calgon nodig?</h2>
          <p className="text-gray-600 text-sm mb-4">
            Calgon claimt wasmachines te beschermen tegen kalk. De werkzame stof is natriumhexametafosfaat, een fosfaatzout dat calcium in oplossing houdt zodat het minder snel neerslaat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-green-800 text-sm mb-1">Wanneer Calgon zinvol is</p>
              <ul className="text-xs text-green-700 space-y-1">
                <li>&bull; Zeer hard water boven 18 dH</li>
                <li>&bull; Als aanvulling op een goed wasmiddel</li>
                <li>&bull; Als tijdelijke maatregel</li>
              </ul>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-4">
              <p className="font-semibold text-red-800 text-sm mb-1">Wanneer Calgon overbodig is</p>
              <ul className="text-xs text-red-700 space-y-1">
                <li>&bull; Bij matig hard water (minder dan 14 dH)</li>
                <li>&bull; Als uw wasmiddel al ontkalker bevat</li>
                <li>&bull; Als u al een waterontharder heeft</li>
                <li>&bull; Als u regelmatig ontkalkt met citroenzuur</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            Conclusie: Calgon is niet de noodzakelijke bescherming die advertenties claimen. Regelmatig ontkalken met citroenzuur is goedkoper en even effectief.
          </p>
        </section>

        {/* Structurele oplossing */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Structurele bescherming: waterontharder</h2>
          <p className="text-gray-600 text-sm mb-4">
            De meest effectieve bescherming voor de wasmachine is een centrale waterontharder op de ingang van de huisinstallatie. Zacht water (minder dan 5 dH) slaat nauwelijks kalk neer, zelfs niet bij wassen op 90 graden. De machine gaat langer mee en u verbruikt minder wasmiddel en energie.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-[#003F5C] mb-4">
            <p className="font-semibold mb-2">Waarom osmose niet zinvol is voor de wasmachine</p>
            <p className="text-xs text-gray-600">
              Een omgekeerde osmose filter maakt mineraalarm drinkwater. Maar een wasmachine verbruikt 40-80 liter per wasbeurt. Een osmosesysteem produceert 5-20 liter per uur. Het is praktisch en economisch niet mogelijk om een wasmachine op osmosewater te laten draaien. Een waterontharder behandelt de gehele watertoevoer inclusief de wasmachine.
            </p>
          </div>
          <Link href="/waterontharder" className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm">
            Bekijk waterontharders &rarr;
          </Link>
        </section>

        {/* Hardheidszone lookup */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Hoe hard is het water in uw gemeente?</h2>
          <p className="text-gray-600 text-sm mb-3">
            De waterhardheid bepaalt hoe urgent kalkaanpak voor uw wasmachine is. In Limburg en Noord-Brabant is de schade groter dan in Zeeland of Groningen.
          </p>
          <Link
            href="/waterhardheid"
            className="inline-block border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
          >
            Zoek waterhardheid van uw gemeente &rarr;
          </Link>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterfilter/wasmachine" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter voor wasmachine</h3>
              <p className="text-sm text-gray-600">Hoe een waterfilter uw wasmachine beschermt tegen kalkaanslag.</p>
            </Link>
            <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Werking waterontharder</h3>
              <p className="text-sm text-gray-600">Hoe een waterontharder uw wasmachine en andere apparaten beschermt.</p>
            </Link>
            <Link href="/waterhardheid/behandelingsadvies" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Behandelingsadvies waterhardheid</h3>
              <p className="text-sm text-gray-600">Welke behandeling past bij uw waterhardheidsniveau?</p>
            </Link>
            <Link href="/kalk-in" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk in leidingwater</h3>
              <p className="text-sm text-gray-600">Overzicht van alle gevolgen van kalk in leidingwater en oplossingen.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kalk in de wasmachine</h2>
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

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kalk-in', label: 'Kalk in leidingwater: overzicht' },
              { href: '/waterhardheid', label: 'Waterhardheid per gemeente' },
              { href: '/waterontharder', label: 'Waterontharder voor wasmachine' },
              { href: '/kalk-in/cv-ketel', label: 'Kalk in CV-ketel' },
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
      </div>
    </>
  );
}
