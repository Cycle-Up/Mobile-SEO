import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { gemeenten, getGemeente, getHardheidLabel, type Hardheid } from '@/data/gemeenten';
import { WaterhardheidCard } from '@/components/WaterhardheidCard';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { GemeenteLinks } from '@/components/GemeenteLinks';

interface PageProps {
  params: Promise<{ gemeente: string }>;
}

export async function generateStaticParams() {
  return gemeenten.map(g => ({ gemeente: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) return {};

  return {
    title: `Waterhardheid ${gemeente.naam} — ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie)})`,
    description: `De waterhardheid in ${gemeente.naam} is ${gemeente.hardheid}°dH — ${getHardheidLabel(gemeente.categorie).toLowerCase()}. Lees wat dit betekent voor kalk, je apparaten en de keuze voor een waterfilter.`,
    alternates: { canonical: `https://waterfilterplatform.nl/waterhardheid/${gemeente.slug}` },
    openGraph: {
      title: `Waterhardheid ${gemeente.naam}: ${gemeente.hardheid}°dH`,
      description: `Is het water in ${gemeente.naam} hard of zacht? Lees de waterhardheid, gevolgen voor apparaten en de beste filteroplossing.`,
    },
  };
}

interface HardheidContent {
  intro: (naam: string, dH: number) => string;
  apparatenTekst: (naam: string, dH: number) => string;
  waterkoker: string;
  koffiemachine: string;
  vaatwasser: string;
  koken: string;
  filterAdvies: (naam: string, dH: number) => string;
  tips: string[];
  extraFaq: { question: (naam: string) => string; answer: (naam: string, dH: number, waterbedrijf: string) => string }[];
}

const hardheidContent: Record<Hardheid, HardheidContent> = {
  'zeer hard': {
    intro: (naam, dH) =>
      `Het leidingwater in ${naam} behoort tot de hardste van Nederland met ${dH}°dH. Dit is ruim boven de grens voor "hard water" en zorgt voor snelle, zichtbare kalkaanslag in vrijwel alle watervoerende apparaten. Een waterfilter is hier geen luxe maar een praktische noodzaak.`,
    apparatenTekst: (naam) =>
      `In ${naam} met zeer hard water zie je binnen enkele weken al kalkafzetting in je waterkoker. Verwarmingselementen raken sneller bedekt, wat het energieverbruik verhoogt en de levensduur van apparaten verkort. Regelmatig ontkalken vertraagt dit proces, maar lost het niet op.`,
    waterkoker: 'Ontkalken verplicht elke 4–6 weken. Verwarmingselement slijt sneller.',
    koffiemachine: 'Intensief ontkalkprogramma elke 4–8 weken. Smaak van koffie beïnvloed door kalk.',
    vaatwasser: 'Zoutstand op maximum instellen. Zout bijvullen elke 2–4 weken.',
    koken: 'Duidelijke kalkfilm op kookgerei. Witte aanslag zichtbaar in pan na koken.',
    filterAdvies: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is een omgekeerde osmose filter sterk aan te raden. Het verwijdert 99% van het calcium en magnesium, beschermt al je apparaten en geeft puur, lekker drinkwater.`,
    tips: [
      'Gebruik citroenzuuroplossing voor wekelijks ontkalken van kranen en douchekoppen',
      'Voeg antikalk-tabletten toe bij elke vaatwasbeur',
      'Overweeg een waterontharder voor de hele huisinstallatie naast een osmosefilter voor drinkwater',
      'Controleer de cv-ketel jaarlijks op kalkaanslag bij de installateur',
    ],
    extraFaq: [
      {
        question: (naam) => `Hoe snel zie ik kalkaanslag in ${naam}?`,
        answer: (naam, dH) =>
          `Bij ${dH}°dH in ${naam} zie je binnen 1–2 weken al een witte aanslag op kranen en in de waterkoker. Verwarmingselementen raken binnen 1–3 maanden merkbaar aangetast als je niet regelmatig ontkalkt.`,
      },
      {
        question: (naam) => `Wat kost hard water me per jaar in ${naam}?`,
        answer: (_naam, dH) =>
          `Bij ${dH}°dH schat je de extra kosten op €300–600 per jaar: meer energieverbruik door aangetaste verwarmingselementen, meer wasmiddel en zeep (30–50% extra gebruik), ontkalkers, en snellere slijtage van apparaten.`,
      },
    ],
  },
  'hard': {
    intro: (naam, dH) =>
      `Het leidingwater in ${naam} is hard met ${dH}°dH. Dit is merkbaar in de keuken en badkamer: kalkaanslag op kranen, aanslag in de waterkoker en meer wasmiddel nodig. Met de juiste aanpak beperk je de gevolgen aanzienlijk.`,
    apparatenTekst: (naam) =>
      `In ${naam} raken watervoerende apparaten bij hard water gemiddeld 20–30% sneller versleten. De verwarmingselementen in je waterkoker en koffiemachine raken bedekt met kalk, wat het energieverbruik verhoogt. Ontkalken is noodzakelijk onderhoud.`,
    waterkoker: 'Ontkalken elke 6–8 weken aanbevolen voor optimale werking.',
    koffiemachine: 'Ontkalkprogramma elke 2–3 maanden draaien. Merkbaar effect op smaak.',
    vaatwasser: 'Zout regelmatig bijvullen. Hoge zoutstand instellen in het apparaat.',
    koken: 'Kalkfilm op kookgerei bij regelmatig gebruik. Witte randen zichtbaar in pan.',
    filterAdvies: (naam, dH) =>
      `Met ${dH}°dH in ${naam} is een osmosefilter een slimme investering. Het beschermt je apparaten en geeft de waterkoker "pensioen" — kokend gefilterd water direct uit de kraan.`,
    tips: [
      'Ontkalken met citroenzuur of azijn is goedkoper dan commerciële middelen',
      'Stel de vaatwasser in op hoge zoutstand',
      'Een waterfilter bij de koffiemachine verlengt de levensduur significant',
      'Douche-ontkalker maandelijks gebruiken voorkomt hardnekkige aanslag',
    ],
    extraFaq: [
      {
        question: (naam) => `Moet ik in ${naam} een waterontharder kopen?`,
        answer: (naam, dH) =>
          `Een waterontharder voor de hele woning is een optie bij ${dH}°dH in ${naam}, maar niet verplicht. Een osmosefilter voor drinkwater is goedkoper en effectiever voor het water dat je echt gebruikt. Een waterontharder beschermt bovendien ook de cv-ketel en wasmachine.`,
      },
    ],
  },
  'matig hard': {
    intro: (naam, dH) =>
      `Het leidingwater in ${naam} is matig hard met ${dH}°dH. Je kunt wat kalkaanslag verwachten bij warmwaterapparaten, maar het is minder uitgesproken dan in het zuiden of oosten van Nederland. Een waterfilter verbetert hier met name de smaak en zuiverheid van drinkwater.`,
    apparatenTekst: (naam) =>
      `In ${naam} is kalkaanslag aanwezig maar beheersbaar. Met regelmatig onderhoud — elk kwartaal ontkalken — blijven je apparaten in goede staat. Een osmosefilter is geen absolute noodzaak maar verhoogt het watercomfort merkbaar.`,
    waterkoker: 'Ontkalken elk kwartaal voldoende voor normale gebruiker.',
    koffiemachine: 'Ontkalkprogramma 3–4x per jaar. Beperkt effect op smaak.',
    vaatwasser: 'Normale zoutstand volstaat. Maandelijks bijvullen.',
    koken: 'Lichte kalkfilm mogelijk. Nauwelijks zichtbaar bij normaal gebruik.',
    filterAdvies: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is een waterfilter vooral interessant voor de smaak en zuiverheid van drinkwater, niet zozeer voor kalkbestrijding. Een osmosefilter verwijdert chloor, nitraten en eventuele verontreinigingen voor puur, neutraal drinkwater.`,
    tips: [
      'Kwartaalse ontkalking volstaat voor de meeste apparaten',
      'Een waterfilterkan is een goedkope eerste stap voor betere smaak',
      'Osmosefilter is zinvol voor zuiverheid, minder urgent voor kalkbescherming',
    ],
    extraFaq: [
      {
        question: (naam) => `Is een waterfilter zinvol in ${naam}?`,
        answer: (naam, dH) =>
          `Bij ${dH}°dH in ${naam} is een waterfilter niet strikt noodzakelijk voor kalkbescherming. Wel is het zinvol als je waarde hecht aan de smaak van je drinkwater of micro-verontreinigingen wilt vermijden. Een osmosefilter verwijdert ook chloor en nitraten.`,
      },
    ],
  },
  'matig': {
    intro: (naam, dH) =>
      `Het leidingwater in ${naam} is matig van hardheid met ${dH}°dH. Kalk is weinig een probleem, maar het water bevat wel chloor en andere stoffen die de smaak beïnvloeden. Voor pure drinkwaterkwaliteit is een osmosefilter een goede keuze.`,
    apparatenTekst: (naam) =>
      `In ${naam} is kalkaanslag minimaal. Je waterkoker en koffiemachine hebben nauwelijks last van kalk. Wel bevat leidingwater chloor als desinfectiemiddel, wat sommige mensen als smaak ervaren — een koolstoffilter of osmosefilter pakt dit op.`,
    waterkoker: 'Ontkalken 1–2x per jaar voldoende. Weinig kalkvorming.',
    koffiemachine: 'Ontkalkprogramma 1–2x per jaar. Minimaal effect op smaak door kalk.',
    vaatwasser: 'Lage zoutstand. Weinig zoutverbruik nodig.',
    koken: 'Nauwelijks kalkafzetting. Water kookt helder.',
    filterAdvies: (naam, dH) =>
      `Met ${dH}°dH in ${naam} is kalk nauwelijks een issue. Een osmosefilter is hier met name interessant voor de zuiverheid: het verwijdert chloor, nitraten en microplastics voor schoon, neutraal smakend drinkwater.`,
    tips: [
      'Chloor is de belangrijkste reden voor een filter bij zacht water',
      'Een inline koolstoffilter is een goedkope oplossing voor betere smaak',
      'Osmosefilter voor maximale zuiverheid inclusief nitraten en pesticiden',
    ],
    extraFaq: [
      {
        question: (naam) => `Is het water in ${naam} veilig om te drinken zonder filter?`,
        answer: (naam, _dH, waterbedrijf) =>
          `Ja, het leidingwater in ${naam} van ${waterbedrijf} voldoet aan alle wettelijke normen en is veilig. Een filter is geen verplichting maar verbetert smaak en verwijdert restchloor en eventuele micro-verontreinigingen.`,
      },
    ],
  },
  'zacht': {
    intro: (naam, dH) =>
      `Het leidingwater in ${naam} is zacht met ${dH}°dH — een van de laagste waardes in Nederland. Kalk is vrijwel geen probleem. Het water bevat weinig mineralen, wat goed is voor apparaten maar betekent dat eventuele verontreinigingen minder gebonden worden.`,
    apparatenTekst: (naam) =>
      `In ${naam} hoef je je nauwelijks zorgen te maken over kalk in je apparaten. Waterkokers en koffiemachines blijven lang schoon. Het zachte water is bovendien beter voor je wasmachine — minder wasmiddel nodig.`,
    waterkoker: 'Ontkalken 1x per jaar of minder. Vrijwel geen kalkvorming.',
    koffiemachine: 'Ontkalkprogramma 1x per jaar preventief. Geen merkbare kalksmaak.',
    vaatwasser: 'Minimale zoutinstellingen. Glazen blijven helder.',
    koken: 'Helder water zonder kalkfilm. Ideaal voor koken en thee zetten.',
    filterAdvies: (naam, dH) =>
      `Bij ${dH}°dH in ${naam} is kalk geen reden voor een filter. Een osmosefilter is hier zinvol voor de zuiverheid: het verwijdert restchloor, nitraten en microplastics — niet voor kalk, maar voor de maximale drinkwaterkwaliteit.`,
    tips: [
      'Zacht water betekent minder wasmiddel nodig — bespaar tot 30%',
      'Chloor is de voornaamste reden om een filter te overwegen',
      'Zachte water is ideaal voor specialty coffee en thee-bereiding',
    ],
    extraFaq: [
      {
        question: (naam) => `Heeft zacht water in ${naam} nadelen?`,
        answer: (naam, dH) =>
          `Zacht water in ${naam} (${dH}°dH) heeft weinig nadelen. Het is goed voor apparaten en zuiniger met zeep. Sommige mensen vinden zacht water iets "minder vol" van smaak. Een remineralisatiefilter voegt wat mineralen terug toe als je dat prefereert.`,
      },
    ],
  },
};

export default async function GemeentePage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const content = hardheidContent[gemeente.categorie];

  const faqItems = [
    {
      question: `Hoe hard is het water in ${gemeente.naam}?`,
      answer: `Het water in ${gemeente.naam} heeft een hardheid van ${gemeente.hardheid}°dH. Dit wordt geclassificeerd als "${getHardheidLabel(gemeente.categorie).toLowerCase()}". Het water wordt geleverd door ${gemeente.waterbedrijf}.`,
    },
    {
      question: `Heb ik in ${gemeente.naam} een waterfilter nodig?`,
      answer: content.filterAdvies(gemeente.naam, gemeente.hardheid),
    },
    ...content.extraFaq.map(f => ({
      question: f.question(gemeente.naam),
      answer: f.answer(gemeente.naam, gemeente.hardheid, gemeente.waterbedrijf),
    })),
    {
      question: `Welk waterbedrijf levert drinkwater in ${gemeente.naam}?`,
      answer: `${gemeente.waterbedrijf} is verantwoordelijk voor de drinkwaterlevering in ${gemeente.naam}. Dit bedrijf zorgt voor de zuivering en distributie van leidingwater dat voldoet aan de Nederlandse drinkwaternormen.`,
    },
  ];

  const naburigeGemeenten = gemeenten
    .filter(g => g.provincie === gemeente.provincie && g.slug !== gemeente.slug)
    .slice(0, 8);

  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterhardheid', url: 'https://waterfilterplatform.nl/waterhardheid' },
          { name: gemeente.naam, url: `https://waterfilterplatform.nl/waterhardheid/${gemeente.slug}` },
        ]}
      />
      <SchemaOrg
        schema={[{
          '@type': 'Place',
          name: gemeente.naam,
          address: {
            '@type': 'PostalAddress',
            addressLocality: gemeente.naam,
            addressRegion: gemeente.provincie,
            addressCountry: 'NL',
          },
          description: `${gemeente.naam} heeft leidingwater met een hardheid van ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}), geleverd door ${gemeente.waterbedrijf}.`,
        }]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterhardheid" className="hover:text-[#005F8A]">Waterhardheid</Link>
            <span className="mx-2">/</span>
            <span>{gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterhardheid {gemeente.naam}
          </h1>
          <p className="text-gray-600 text-lg">
            {content.intro(gemeente.naam, gemeente.hardheid)}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        <WaterhardheidCard gemeente={gemeente} />

        {/* Apparaten sectie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Effect op keukenapparaten in {gemeente.naam}</h2>
          <p className="text-gray-600 mb-4 text-sm">{content.apparatenTekst(gemeente.naam, gemeente.hardheid)}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: 'Waterkoker', tekst: content.waterkoker, icon: '🫖' },
              { label: 'Koffiemachine', tekst: content.koffiemachine, icon: '☕' },
              { label: 'Vaatwasser', tekst: content.vaatwasser, icon: '🍽️' },
              { label: 'Koken & thee', tekst: content.koken, icon: '🍵' },
            ].map(item => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips sectie */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Praktische tips voor {gemeente.naam}</h2>
          <ul className="space-y-2">
            {content.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 items-start text-sm text-gray-700">
                <span className="text-[#005F8A] font-bold mt-0.5 shrink-0">→</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA afhankelijk van hardheid */}
        {gemeente.hardheid >= 12 ? (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
            <p className="font-bold text-orange-800 mb-2">
              ⚠️ Hard water in {gemeente.naam} — overweeg een osmosefilter
            </p>
            <p className="text-orange-700 text-sm mb-4">
              {content.filterAdvies(gemeente.naam, gemeente.hardheid)}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="inline-block bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-800 transition-colors text-sm"
              >
                Osmosefilters vergelijken →
              </Link>
              <Link href="/kennisbank/waterhardheid-verlagen" className="inline-block border border-orange-300 text-orange-800 font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-100 transition-colors text-sm">
                Lees: waterhardheid verlagen
              </Link>
            </div>
          </div>
        ) : (
          <CTABanner context="waterhardheid" variant="compact" />
        )}

        {/* Interne links kennisbank */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Meer lezen over waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kennisbank/waterhardheid-verlagen', label: 'Waterhardheid verlagen', desc: 'Oorzaken, gevolgen en oplossingen' },
              { href: '/kennisbank/kalk-in-huis', label: 'Kalk in huis', desc: 'Wat kalk kost en hoe je het aanpakt' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen', desc: 'Vergelijk de beste systemen' },
              { href: '/kennisbank/waterfilter-vergelijken', label: 'Waterfilter vergelijken', desc: 'Welk systeem past bij jou?' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="group border border-gray-100 rounded-xl p-3 hover:border-[#005F8A] transition-all">
                <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">{l.label}</p>
                <p className="text-xs text-gray-500">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Naburige gemeenten */}
        {naburigeGemeenten.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">Andere gemeenten in {gemeente.provincie}</h2>
            <div className="flex flex-wrap gap-2">
              {naburigeGemeenten.map(g => {
                const kleur =
                  g.categorie === 'zacht' ? 'border-green-200 text-green-800' :
                  g.categorie === 'matig' ? 'border-lime-200 text-lime-800' :
                  g.categorie === 'matig hard' ? 'border-amber-200 text-amber-800' :
                  g.categorie === 'hard' ? 'border-orange-200 text-orange-800' :
                  'border-red-200 text-red-800';
                return (
                  <Link
                    key={g.slug}
                    href={`/waterhardheid/${g.slug}`}
                    className={`text-sm border rounded-full px-3 py-1.5 hover:shadow-sm transition-shadow ${kleur}`}
                  >
                    {g.naam} ({g.hardheid}°)
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <GemeenteLinks gemeente={gemeente} currentPath="waterhardheid" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over water in {gemeente.naam}</h2>
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
