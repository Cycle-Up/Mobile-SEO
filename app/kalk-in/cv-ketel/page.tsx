import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Kalk in CV-ketel: gevolgen en hoe kalk voorkomen?',
  description:
    'Kalk in uw CV-ketel verhoogt het gasverbruik met 15-20%. Oorzaak, gevolgen en hoe u kalkaanslag in de CV-installatie voorkomt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kalk-in/cv-ketel' },
  openGraph: {
    title: 'Kalk in CV-ketel: gevolgen voor gasverbruik en levensduur',
    description:
      '1 mm ketelsteen verhoogt gasverbruik met 7%. Leer hoe kalk de CV-ketel beschadigt, hoe u ontkalkt en hoe u kalkaanslag structureel voorkomt.',
  },
};

const faqItems = [
  {
    question: 'Hoe komt kalk in de CV-ketel terecht?',
    answer:
      'Kalk komt in de CV-ketel via het vulwater en via het circulatiewater in het verwarmingssysteem. Bij verhitting slaat calciumbicarbonat neer als calciumcarbonaat (CaCO3) op de warmtewisselaar en in de leidingen. Dit proces versnelt bij hogere temperaturen, typisch voor vloerverwarming boven 55 graden Celsius en HR-ketels die terugstroomwater opwarmen.',
  },
  {
    question: 'Hoeveel stijgt mijn gasverbruik door kalk in de CV-ketel?',
    answer:
      'Wetenschappelijk onderzoek toont aan dat 1 mm ketelsteen op de warmtewisselaar het energieverbruik met circa 7% verhoogt. Bij 3 mm aanslag is dat al 20% extra gasverbruik. Een volledig verkalkte ketel (5 mm) kan 35% meer gas verbruiken. Voor een gemiddeld huishouden met 1.500 m3 gasverbruik per jaar betekent 20% extra ongeveer 300 euro per jaar aan onnodige stookkosten.',
  },
  {
    question: 'Hoe lang gaat een CV-ketel mee met kalk?',
    answer:
      'Een CV-ketel gaat normaal 15-20 jaar mee bij goed onderhoud. In gebieden met hard water (boven 14 dH) zonder kalkaanpak verkort de levensduur tot 10-12 jaar. De warmtewisselaar is de zwakste schakel: ketelsteen veroorzaakt thermische stress die tot scheurtjes en lekkage leidt. Vervanging kost 2.000-4.000 euro.',
  },
  {
    question: 'Hoe ontkalk ik een CV-ketel zelf?',
    answer:
      'Ontkalken van een CV-ketel kan met citroenzuuroplossing (200 gram per liter water). Leeg het systeem, vul met citroenzuuroplossing, laat 2-4 uur circuleren op lage temperatuur, leeg opnieuw en spoel grondig met schoon water. Let op: sommige moderne condensatieketels hebben aluminium warmtewisselaars die gevoelig zijn voor zuren. Raadpleeg altijd de handleiding of een erkend installateur.',
  },
  {
    question: 'Welke waterontharder is goed voor de CV-ketel?',
    answer:
      'Voor CV-systemen wordt aanbevolen het vulwater te ontharden tot minder dan 5 dH. Een centrale waterontharder (ionenwisseling) in de meterkast behandelt al het water voor de hele installatie. Voor vloerverwarmingssystemen en grotere CV-installaties is vulwater op basis van omgekeerde osmose (bijna gedestilleerd) de optimale keuze, mits een kleine hoeveelheid beschermende inhibitor wordt toegevoegd.',
  },
  {
    question: 'Is osmosewater goed als vulwater voor de CV?',
    answer:
      'Ja, omgekeerd osmosewater is uitstekend als vulwater voor CV-systemen en vloerverwarming. Het water bevat vrijwel geen mineralen en slaat dus geen ketelsteen neer. Voeg wel een corrosiebeschermende inhibitor toe (bijv. op basis van molybdaat of nitrieten), omdat extreem zacht water licht corrosief kan zijn voor metalen leidingen. Dit is standaard praktijk bij professionele installaties.',
  },
  {
    question: 'Hoe vaak moet een CV-ketel worden ontkalkt in een hard-watergebied?',
    answer:
      'In gebieden met hard water (boven 14 dH) wordt aangeraden de CV-installatie jaarlijks te laten inspecteren en elke 2-3 jaar professioneel te ontkalken. Zelf ontkalken met citroenzuur kan jaarlijks als preventieve maatregel. Een jaarlijkse servicebeurt door een erkend installateur omvat ook controle op kalkaanslag in de warmtewisselaar.',
  },
];

const energieData = [
  { mm: '1 mm', gasExtra: '+7%', kostenExtra: 'ca. +105 euro/jaar' },
  { mm: '2 mm', gasExtra: '+13%', kostenExtra: 'ca. +195 euro/jaar' },
  { mm: '3 mm', gasExtra: '+20%', kostenExtra: 'ca. +300 euro/jaar' },
  { mm: '5 mm', gasExtra: '+35%', kostenExtra: 'ca. +525 euro/jaar' },
];

export default function KalkCVKetelPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kalk in leidingwater', url: 'https://waterfilterplatform.nl/kalk-in' },
          { name: 'Kalk in CV-ketel', url: 'https://waterfilterplatform.nl/kalk-in/cv-ketel' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kalk in CV-ketel: gevolgen en hoe kalk voorkomen?',
          description:
            'Kalk in uw CV-ketel verhoogt het gasverbruik met 15-20%. Oorzaak, gevolgen en hoe u kalkaanslag in de CV-installatie voorkomt.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/kalk-in/cv-ketel',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kalk-in" className="hover:text-[#005F8A]">Kalk in leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Kalk in CV-ketel</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kalk in CV-ketel: gevolgen en hoe kalk voorkomen?
          </h1>
          <p className="text-gray-600 text-lg">
            Ketelsteen in de CV-ketel is een van de duurste gevolgen van hard water. Het verhoogt het gasverbruik,
            verkort de levensduur van de ketel en kan leiden tot dure reparaties. Lees wat u kunt doen.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">
        <QuickAnswer answer="Kalk in de CV-ketel verhoogt het gasverbruik met 7% per millimeter ketelsteen. Bij 3 mm aanslag betaalt u al 20% meer stookkosten (circa 300 euro per jaar extra). De levensduur van de ketel daalt van 15-20 jaar naar 10-12 jaar. Preventie via waterontharder of osmose vulwater is de beste aanpak." />

        {/* Hoe kalk in CV terecht komt */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Hoe komt kalk in de CV-ketel?</h2>
          <p className="text-gray-600 text-sm mb-4">
            De CV-ketel verhit water tot 60-80 graden Celsius. Bij die temperatuur slaat calciumbicarbonat (opgelost in leidingwater) neer als calciumcarbonaat (CaCO&sub3;). Dit harde, witte poeder hecht zich aan de warmtewisselaar: het hart van de ketel.
          </p>
          <p className="text-gray-600 text-sm mb-4">
            De warmtewisselaar heeft als taak warmte van het verbrandingsgas over te dragen op het verwarmingswater. Een laag ketelsteen tussen het metaal en het water werkt als thermische isolator. Hoe dikker de laag, hoe minder efficient de warmteoverdracht en hoe meer gas de brander nodig heeft om de gewenste temperatuur te bereiken.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-amber-800 mb-1">Bijzonder risico: condensatieketels</p>
            <p className="text-amber-700 text-xs">
              Moderne HR-ketels (hoog rendement) zijn extra gevoelig voor kalk omdat zij ook warmte terugwinnen uit rookgassen. Het condensaatwater is zuur en lost kalk op, maar kalk slaat opnieuw neer in het primaire circuit. Combineer dit altijd met waterontharder of geconditioneerd vulwater.
            </p>
          </div>
        </section>

        {/* Energietabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Energieverbruik door ketelsteen</h2>
          <p className="text-gray-600 text-sm mb-4">
            Berekening gebaseerd op gemiddeld Nederlands gasverbruik van 1.500 m&sup3; per jaar tegen 0,10 euro/m&sup3; nettariefequivalent.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE] text-[#003F5C]">
                  <th className="text-left p-3 rounded-tl-xl">Kalklaag</th>
                  <th className="text-left p-3">Extra gasverbruik</th>
                  <th className="text-left p-3 rounded-tr-xl">Extra kosten per jaar</th>
                </tr>
              </thead>
              <tbody>
                {energieData.map((r, i) => (
                  <tr key={r.mm} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-gray-800">{r.mm}</td>
                    <td className="p-3 text-orange-700 font-semibold">{r.gasExtra}</td>
                    <td className="p-3 text-red-700 font-semibold">{r.kostenExtra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Levensduur */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Impact op levensduur CV-ketel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-xl p-4">
              <p className="font-semibold text-green-800 text-sm mb-1">Met kalkaanpak</p>
              <p className="text-2xl font-bold text-green-700 mb-1">15-20 jaar</p>
              <p className="text-xs text-green-700">Normale levensduur bij zachter water of regelmatig ontkalken en jaarlijkse servicebeurt</p>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-xl p-4">
              <p className="font-semibold text-red-800 text-sm mb-1">Zonder kalkaanpak (hard water)</p>
              <p className="text-2xl font-bold text-red-700 mb-1">10-12 jaar</p>
              <p className="text-xs text-red-700">Verkorte levensduur door thermische stress op warmtewisselaar. Vroege vervanging kost 2.000-4.000 euro</p>
            </div>
          </div>
        </section>

        <CTABanner context="osmose" variant="compact" />

        {/* Ontkalken */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">CV-ketel ontkalken: stap voor stap</h2>
          <p className="text-gray-600 text-sm mb-4">
            Ontkalken van een CV-installatie kan zelf of door een installateur. Voor HR-ketels met aluminium warmtewisselaar raden wij een erkend installateur aan, omdat sterke zuren schade kunnen veroorzaken.
          </p>
          <ol className="space-y-3">
            {[
              { stap: '1', tekst: 'Schakel de CV-ketel uit en laat het systeem afkoelen tot kamertemperatuur.' },
              { stap: '2', tekst: 'Sluit de toevoer- en retourkranen af. Verbind een circulatiepomp met citroenzuuroplossing (200 g/L) aan het systeem.' },
              { stap: '3', tekst: 'Laat de oplossing 2-4 uur circuleren. Controleer regelmatig de kleur: bruingeel water betekent dat kalk oplost.' },
              { stap: '4', tekst: 'Leeg het systeem volledig. Spoel driemaal door met schoon leidingwater.' },
              { stap: '5', tekst: 'Vul opnieuw met geconditioneerd water (zacht of osmose). Voeg een CV-beschermer (inhibitor) toe voor corrosiebescherming.' },
              { stap: '6', tekst: 'Ontlucht alle radiatoren en laat de ketel opnieuw opstarten. Controleer de druk.' },
            ].map(s => (
              <li key={s.stap} className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-[#005F8A] text-white text-xs font-bold flex items-center justify-center">
                  {s.stap}
                </span>
                <p className="text-sm text-gray-600 pt-0.5">{s.tekst}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Preventie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kalk in CV-ketel voorkomen</h2>
          <p className="text-gray-600 text-sm mb-4">
            Preventie is goedkoper dan curatief ontkalken. De beste maatregelen:
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Waterontharder voor de CV-installatie',
                beschrijving: 'Een centrale waterontharder behandelt al het water inclusief de CV. Het vulwater wordt zacht (minder dan 5 dH) zodat geen ketelsteen kan neerslaan.',
                href: '/waterontharder',
              },
              {
                titel: 'Osmosewater als vulwater',
                beschrijving: 'Voor vloerverwarming en grotere systemen is omgekeerd osmosewater de ideale vulwaterkeuze: vrijwel mineraalvrij, geen ketelsteen mogelijk. Combineer altijd met een corrosieinhibitor.',
                href: '/omgekeerde-osmose/voor-thuis',
              },
              {
                titel: 'Magnetietfilter + ontluchtingsventiel',
                beschrijving: 'Beschermt pompen en verwarmingslichamen tegen slib en magnetietdeeltjes. Geen kalkfilter, maar vergroot de algehele levensduur van de installatie.',
                href: '/kalk-in',
              },
              {
                titel: 'Jaarlijkse servicebeurt',
                beschrijving: 'Laat de ketel jaarlijks inspecteren door een erkend installateur. Vroege detectie van kalkaanslag voorkomt dure reparaties.',
                href: '/kalk-in',
              },
            ].map(m => (
              <Link
                key={m.titel}
                href={m.href}
                className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all group"
              >
                <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A] mb-1">{m.titel}</p>
                <p className="text-xs text-gray-600">{m.beschrijving}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Werking waterontharder</h3>
              <p className="text-sm text-gray-600">Hoe een waterontharder kalk verwijdert en uw CV-ketel beschermt.</p>
            </Link>
            <Link href="/waterhardheid/behandelingsadvies" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Behandelingsadvies waterhardheid</h3>
              <p className="text-sm text-gray-600">Welke behandeling past bij uw waterhardheidsniveau?</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
              <p className="text-sm text-gray-600">Wat zijn de gevolgen van kalk en mineralen in drinkwater voor apparaten?</p>
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over kalk in de CV-ketel</h2>
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
              { href: '/waterontharder', label: 'Waterontharder voor CV-bescherming' },
              { href: '/omgekeerde-osmose/voor-thuis', label: 'Osmose water als vulwater' },
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
