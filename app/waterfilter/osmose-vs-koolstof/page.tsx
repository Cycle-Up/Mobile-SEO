import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Osmose vs koolstoffilter: wat is het verschil? (2026)',
  description:
    'Omgekeerde osmose of koolstoffilter? Vergelijking op 15 criteria: welke stoffen worden verwijderd, kosten, waterverbruik, onderhoud en voor wie welk systeem.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/osmose-vs-koolstof' },
  openGraph: {
    title: 'Osmose vs koolstoffilter: wat is het verschil? (2026)',
    description:
      'Uitgebreide vergelijking van omgekeerde osmose en koolstoffilter op 15 criteria. Wanneer kies je voor osmose en wanneer is koolstof voldoende?',
    url: 'https://waterfilterplatform.nl/waterfilter/osmose-vs-koolstof',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het grootste verschil tussen osmose en koolstoffilter?',
    answer:
      'Het fundamentele verschil zit in het filtratieniveau. Een koolstoffilter werkt via adsorptie: chloor, geur en organische stoffen binden zich aan het koolstofoppervlak. Maar nitraten, PFAS, zware metalen en kalk passeren grotendeels ongehinderd. Een osmosefilter perst water bovendien door een semipermeabel membraan dat werkt op moleculair niveau (0,0001 micron), waardoor 95–99% van alle opgeloste stoffen — inclusief nitraten, PFAS, kalk en zware metalen — wordt tegengehouden.',
  },
  {
    question: 'Verwijdert een koolstoffilter ook nitraat?',
    answer:
      'Nee, een standaard koolstoffilter verwijdert minder dan 10% van nitraten. Nitraat is een klein, negatief geladen ion dat niet adsorbeert aan actief kool en te klein is voor mechanische filtratie. Voor effectieve nitraatverwijdering thuis is omgekeerde osmose de enige betrouwbare optie — osmose verwijdert 85–95% van nitraat via het semipermeabele membraan.',
  },
  {
    question: 'Wanneer is een koolstoffilter voldoende en heb ik geen osmose nodig?',
    answer:
      'Een koolstoffilter is voldoende als je primaire bezorgdheid chloor, smaak en geur is. Als nitraat in je regio onder 25 mg/L blijft, er geen PFAS-verontreiniging is, je geen baby\'s of zwangere vrouwen in huis hebt, je geen hard water hebt (onder 10°dH) en je niet bezorgd bent over zware metalen — dan biedt een koolstoffilter proportionele bescherming voor een lagere investering.',
  },
  {
    question: 'Verwijdert osmose ook PFAS?',
    answer:
      'Ja, omgekeerde osmose is een van de meest effectieve methoden voor PFAS-verwijdering thuis. Een goed osmosemembraan verwijdert 95–99% van PFAS-verbindingen, inclusief de kortketenige varianten zoals GenX die bijzonder lastig te verwijderen zijn. Bewoners in PFAS-gevoelige gebieden (nabij Chemours/DuPont, brandweefoefenterreinen) die zekerheid willen, hebben aan osmose meer dan aan koolstoffiltratie.',
  },
  {
    question: 'Produceert een osmosefilter afvalwater?',
    answer:
      'Ja, dit is een belangrijk verschil met een koolstoffilter. Een traditioneel osmosesysteem produceerde 3–5 liter afvalwater per liter gefilterd water. Moderne systemen met boostpomp en recirculatietechnologie halen een verhouding van 1:1 (één liter gefilterd, één liter afval). Een koolstoffilter produceert geen afvalwater. Het totale waterverbruik is bij osmose hoger, al is dit bij modern gebruik beperkt.',
  },
  {
    question: 'Is osmosewater minder gezond doordat het mineralen verwijdert?',
    answer:
      'Osmose verwijdert naast schadelijke stoffen ook calcium en magnesium. Of dit een nadeel is, is wetenschappelijk omstreden: je dagelijkse mineraalbehoefte haal je grotendeels uit voeding. Wie toch mineralen in het drinkwater wil, voegt een remineralisatiefilter toe (€30–60 extra) die calcium en magnesium terugplaatst. Koolstoffilterwater bevat de mineralen grotendeels nog.',
  },
  {
    question: 'Wat is een hybride aanpak: koolstof als voorfilter voor osmose?',
    answer:
      'Dit is de meest gangbare en aangeraden configuratie voor een osmosesysteem. Een koolstoffilter vóór het osmosemembraan beschermt het membraan: chloor en organische stoffen tasten een polyamide membraan aan en verkorten de levensduur aanzienlijk. De standaard opbouw is: sedimentfilter → koolstofblok voorfilter → osmosemembraan → koolstof nafilter → (optioneel) remineralisatie.',
  },
  {
    question: 'Hoe lang gaat een osmosemembraan mee vergeleken met een koolstoffilter?',
    answer:
      'Een koolstoffilter (cartridge) moet elke 6–12 maanden worden vervangen. Een osmosemembraan gaat bij normaal gebruik 2–3 jaar mee. De pre-filters (sediment en koolstof) worden bij een osmosesysteem jaarlijks vervangen. Een koolstoffilter in standalone gebruik vereist alleen de jaarlijkse cartridgewisseling, wat eenvoudiger en goedkoper is in onderhoud — maar minder filtert.',
  },
];

type VergelijkRij = {
  criterium: string;
  koolstof: string;
  osmose: string;
  voordeel: 'koolstof' | 'osmose' | 'gelijk';
};

const vergelijkingTabel: VergelijkRij[] = [
  { criterium: 'Stoffen verwijderd', koolstof: 'Chloor, geur, organisch', osmose: '95–99% van alle opgeloste stoffen', voordeel: 'osmose' },
  { criterium: 'Bacteriën', koolstof: 'Niet', osmose: 'Ja, via membraan', voordeel: 'osmose' },
  { criterium: 'PFAS', koolstof: '<20% (beperkt)', osmose: '95–99%', voordeel: 'osmose' },
  { criterium: 'Nitraat', koolstof: '<10%', osmose: '85–95%', voordeel: 'osmose' },
  { criterium: 'Kalk (waterhardheid)', koolstof: '0–10%', osmose: '95–99%', voordeel: 'osmose' },
  { criterium: 'Chloor', koolstof: '95%+', osmose: '95–99%', voordeel: 'gelijk' },
  { criterium: 'TDS (totaal opgelost)', koolstof: 'Nauwelijks effect', osmose: 'Verlaagt TDS tot 5–30 ppm', voordeel: 'osmose' },
  { criterium: 'Smaakverbetering', koolstof: 'Uitstekend', osmose: 'Uitstekend', voordeel: 'gelijk' },
  { criterium: 'Installatiekosten (aanschaf)', koolstof: '€50–150', osmose: '€150–400', voordeel: 'koolstof' },
  { criterium: 'Jaarkosten', koolstof: '€30–60', osmose: '€60–110', voordeel: 'koolstof' },
  { criterium: 'Waterverbruik/afvalwater', koolstof: 'Geen afvalwater', osmose: '1:1 (modern systeem)', voordeel: 'koolstof' },
  { criterium: 'Onderhoud', koolstof: 'Filter 1× per jaar', osmose: 'Filters 1×/jr, membraan 2–3 jr', voordeel: 'koolstof' },
  { criterium: 'Installatiemoeilijkheid', koolstof: 'Eenvoudig (T-stuk)', osmose: 'Matig (T-stuk + sifon + kraantje)', voordeel: 'koolstof' },
  { criterium: 'Geschikt voor huurders', koolstof: 'Ja', osmose: 'Ja (aanrecht RO zonder boor)', voordeel: 'gelijk' },
  { criterium: 'Membraanvervanging', koolstof: 'Niet van toepassing', osmose: 'Elke 2–3 jaar', voordeel: 'koolstof' },
];

type KostenRij = {
  systeem: string;
  aanschaf: string;
  jaar1: string;
  jaar2: string;
  jaar3: string;
  jaar5: string;
};

const kostenTabel: KostenRij[] = [
  { systeem: 'Koolstoffilter onderbouw (basis)', aanschaf: '€100', jaar1: '€145', jaar2: '€190', jaar3: '€235', jaar5: '€325' },
  { systeem: 'Koolstoffilter onderbouw (premium)', aanschaf: '€150', jaar1: '€210', jaar2: '€270', jaar3: '€330', jaar5: '€450' },
  { systeem: 'Osmose onderbouw (basis)', aanschaf: '€200', jaar1: '€280', jaar2: '€355', jaar3: '€430', jaar5: '€580' },
  { systeem: 'Osmose onderbouw (premium)', aanschaf: '€350', jaar1: '€460', jaar2: '€560', jaar3: '€660', jaar5: '€860' },
  { systeem: '4-in-1 kokend water kraan', aanschaf: '€850', jaar1: '€970', jaar2: '€1.085', jaar3: '€1.200', jaar5: '€1.430' },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
  { name: 'Osmose vs koolstof', url: 'https://waterfilterplatform.nl/waterfilter/osmose-vs-koolstof' },
];

export default function OsmoseVsKoolstofPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Osmose vs koolstoffilter: wat is het verschil? (2026)',
          description:
            'Omgekeerde osmose of koolstoffilter? Vergelijking op 15 criteria: welke stoffen worden verwijderd, kosten, waterverbruik, onderhoud en voor wie welk systeem.',
          datePublished: '2026-03-05',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterfilter/osmose-vs-koolstof',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Osmose vs koolstof</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Osmose vs koolstoffilter: wat is het verschil? (2026)
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Een koolstoffilter verbetert smaak en verwijdert chloor voor €30–60 per jaar. Een
            osmosefilter doet dat ook, maar haalt bovendien 95–99% van nitraat, PFAS, kalk en
            zware metalen uit het water. Het juiste systeem hangt af van wat je werkelijk wilt
            verwijderen — en hoeveel je daarvoor wilt investeren.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~10 min leestijd</span>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-12">

        <QuickAnswer answer="Koolstoffilter verwijdert chloor, geur en organische stoffen via adsorptie — niet nitraat, PFAS of kalk. Osmose doet dit allemaal: via een semipermeabel membraan verwijdert het 95–99% van alle opgeloste stoffen. Koolstof is goedkoper (€50–150 aanschaf, €30–60/jr) en eenvoudiger. Osmose kost meer maar geeft fundamenteel betere waterkwaliteit." />

        {/* Inhoudsopgave */}
        <nav className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-800 mb-3 text-sm">Op deze pagina</p>
          <ol className="space-y-1.5 text-sm text-[#005F8A]">
            {[
              ['#vergelijking', '15-rijen vergelijkingstabel'],
              ['#osmose-wint', 'Wanneer wint osmose?'],
              ['#koolstof-wint', 'Wanneer is koolstof voldoende?'],
              ['#hybride', 'Hybride aanpak: koolstof als voorfilter'],
              ['#kosten', '5-jaar kostenvergelijking'],
              ['#faq', 'Veelgestelde vragen'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-[#003F5C] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Inleiding */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Koolstoffilter of osmose: hoe verhouden ze zich?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zowel een{' '}
            <Link href="/koolstoffilter" className="text-[#005F8A] underline hover:no-underline">koolstoffilter</Link>{' '}
            als een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">osmosefilter</Link>{' '}
            zuiveren drinkwater, maar via fundamenteel andere mechanismen en met sterk
            uiteenlopende resultaten. Een koolstoffilter werkt via adsorptie: verontreinigende
            moleculen binden zich aan het enorme inwendige oppervlak van geactiveerd koolstof
            (500–1500 m² per gram). Dit werkt uitstekend voor chloor, organische stoffen en
            geurmoleculen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter voegt een beslissende extra stap toe: het RO-membraan. Water wordt
            onder druk (3–6 bar) door een semipermeabel membraan geperst met poriën van circa
            0,0001 micron — kleiner dan de meeste ionen en moleculen. Zo worden nitraten, PFAS,
            zware metalen, kalk en zelfs bacteriën tegengehouden. Wat de koolstoffilter doet,
            doet osmose ook — maar osmose gaat fundamenteel verder.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wil je weten welk filter het beste bij jouw situatie past? Gebruik ook onze{' '}
            <Link href="/waterfilter/welk-filter" className="text-[#005F8A] underline hover:no-underline">
              keuzehulp waterfilter
            </Link>{' '}
            voor een stap-voor-stap beslissingshulp.
          </p>
        </section>

        {/* 15-rijen vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Koolstoffilter vs osmose: vergelijking op 15 criteria
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Onderstaande tabel vergelijkt een standaard onderbouw koolstoffilter met een onderbouw
            osmosesysteem op vijftien praktische criteria. Groen geeft het voordeel aan per rij.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Criterium</th>
                  <th className="text-center px-4 py-3 font-semibold">Koolstoffilter</th>
                  <th className="text-center px-4 py-3 font-semibold">Osmosefilter (RO)</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingTabel.map((row, i) => (
                  <tr key={row.criterium} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.criterium}</td>
                    <td className={`px-4 py-3 text-center text-sm ${
                      row.voordeel === 'koolstof'
                        ? 'text-green-700 font-semibold'
                        : row.voordeel === 'osmose'
                        ? 'text-red-600'
                        : 'text-gray-700'
                    }`}>
                      {row.koolstof}
                    </td>
                    <td className={`px-4 py-3 text-center text-sm ${
                      row.voordeel === 'osmose'
                        ? 'text-green-700 font-semibold'
                        : row.voordeel === 'koolstof'
                        ? 'text-gray-500'
                        : 'text-gray-700'
                    }`}>
                      {row.osmose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Groen = voordeel voor die kolom. Percentages zijn indicatief bij optimale condities
            en representatieve middenklasse systemen. Exacte prestaties variëren per merk en model.
          </p>
        </section>

        {/* Wanneer osmose wint */}
        <section id="osmose-wint">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is omgekeerde osmose de betere keuze?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Osmose levert zijn maximale meerwaarde in de volgende situaties. In elk van deze
            gevallen schieten koolstoffilters tekort en is osmose de enige betrouwbare thuisoplossing.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <ul className="space-y-4 text-sm text-gray-700">
              {[
                {
                  titel: 'Verontreinigd grondwater of verhoogd nitraat',
                  tekst: 'In agrarische regio\'s (Brabant, Limburg, Gelderse Vallei) en bij privéputten kan nitraat de WHO-grenswaarde van 50 mg/L naderen. Osmose verwijdert 85–95% van nitraat; een koolstoffilter verwijdert minder dan 10%. Voor babyvoeding en gezinnen met zwangere vrouwen is osmose hier de enige veilige keuze.',
                },
                {
                  titel: 'PFAS-belasting in de regio',
                  tekst: 'Bewoners in gebieden met PFAS-verontreiniging in grondwater (Dordtse Biesbosch, brandweefoefenterreinen, industrieterreinen) zijn beter af met osmose. Koolstoffilters adsorberen langketenige PFAS redelijk, maar schieten tekort bij kortketenige PFAS zoals GenX. Osmose verwijdert beide soorten voor 95–99%.',
                },
                {
                  titel: 'Bacteriologische veiligheid bij eigen bron',
                  tekst: 'Putwater, bronwater en regenwater zijn niet behandeld door het waterleidingbedrijf. Bacteriële besmetting is een reëel risico. Het osmosemembraan houdt bacteriën mechanisch tegen. Voor volledig veilig water bij een eigen bron combineer je osmose met een UV-filter als sluitstuk.',
                },
                {
                  titel: 'Ernstige kalkaanslag (hard water boven 12°dH)',
                  tekst: 'Bij hard water zijn de gevolgen voor espressomachines, vaatwassers en boilers aanzienlijk. Osmose verwijdert 95–99% van waterhardheid — een complete oplossing. Een koolstoffilter verwijdert vrijwel geen kalk. Voor hardwaterproblemen is osmose (of een waterontharder voor hele-huis-bescherming) de aangewezen keuze.',
                },
              ].map(item => (
                <li key={item.titel} className="flex gap-3 items-start">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">{item.titel}:</span>{' '}
                    <span>{item.tekst}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Wanneer koolstof wint */}
        <section id="koolstof-wint">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is een koolstoffilter een goede keuze?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Een koolstoffilter is een proportionele en kosteneffectieve oplossing in situaties
            waarbij de waterkwaliteitsuitdaging beperkt is tot smaak en chloor.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <ul className="space-y-4 text-sm text-gray-700">
              {[
                {
                  titel: 'Alleen smaak en chloor verbeteren',
                  tekst: 'Als je tevreden bent met de chemische samenstelling van je leidingwater maar de chloorlucht en restsmaken vervelend vindt, is een koolstoffilter (onderbouw of filterkan) de meest proportionele oplossing. Lagere aanschaf, eenvoudige installatie, geen afvalwater.',
                },
                {
                  titel: 'Laag budget, tijdelijke woning of huurder',
                  tekst: 'Een onderbouw koolstoffilter kost €50–150 in aanschaf en €30–60 per jaar. Voor huurders zonder installatieruimte is een filterkan (geen installatie) of een aanrecht koolstoffilter de beste optie. Osmose vereist meer installatie en investering die niet altijd terug te verdienen is bij een tijdelijke woonsituatie.',
                },
                {
                  titel: 'Regio zonder bijzondere waterproblematiek',
                  tekst: 'Als je nitraatwaarden in jouw gemeente op een veilig niveau liggen (controleer via je drinkwaterbedrijf), er geen bekende PFAS-verontreiniging is en het water niet extreem hard is — dan geeft een koolstoffilter voldoende bescherming voor de dagelijkse drinkwaterbehoefte.',
                },
              ].map(item => (
                <li key={item.titel} className="flex gap-3 items-start">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-green-200 text-green-800 flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                  <div>
                    <span className="font-semibold text-gray-800">{item.titel}:</span>{' '}
                    <span>{item.tekst}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Hybride aanpak */}
        <section id="hybride">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hybride aanpak: koolstof als voorfilter voor osmose
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In de praktijk zijn osmose en koolstoffilter geen concurrenten maar partners. De
            standaard en meest aanbevolen configuratie voor een osmosesysteem combineert beide
            technologieën:
          </p>
          <div className="space-y-3 mb-5">
            {[
              {
                nr: '1',
                titel: 'Sedimentfilter (5 micron)',
                desc: 'Vangt zand, roest en grove deeltjes op. Beschermt de navolgende filters tegen snelle verstopping.',
              },
              {
                nr: '2',
                titel: 'Koolstofblok voorfilter',
                desc: 'Verwijdert chloor, chlooramines en organische stoffen vóórdat het water het osmosemembraan bereikt. Chloor is schadelijk voor polyamide membranen en verkort hun levensduur sterk bij onvoldoende voorfiltratie.',
              },
              {
                nr: '3',
                titel: 'RO-membraan (omgekeerde osmose)',
                desc: 'Verwijdert 95–99% van alle opgeloste stoffen die door de koolstoffilter zijn gekomen: nitraat, PFAS, kalk, zware metalen, microplastics.',
              },
              {
                nr: '4',
                titel: 'Koolstof nafilter (polijstfilter)',
                desc: 'Een klein koolstofblok verwijdert eventuele restsmaken en geurtjes uit het gefilterde water vóór consumptie. Optionele stap, maar aanwezig in de meeste systemen.',
              },
            ].map(s => (
              <div key={s.nr} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0">
                  {s.nr}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Conclusie hybride aanpak:</strong> Een koolstoffilter
            in isolatie is een zinvolle, budgetvriendelijke oplossing voor smaakvlakken.
            Als onderdeel van een osmosesysteem is het een onmisbaar beschermmechanisme voor het
            membraan. De twee technologieën vullen elkaar aan — ze sluiten elkaar niet uit.
          </div>
        </section>

        {/* 5-jaar kostenvergelijking */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            5-jaar kostenvergelijking: koolstof vs osmose
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De totale eigendomskosten over vijf jaar geven een eerlijker beeld dan alleen de
            aanschafprijs. Onderstaande tabel vergelijkt vijf systemen inclusief aanschaf en
            jaarlijkse filterwissels. Installatiekosten zijn niet inbegrepen (koolstof: €0–50
            zelf; osmose: €0–80 zelf of installateur).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Systeem</th>
                  <th className="text-center px-3 py-3 font-semibold">Aanschaf</th>
                  <th className="text-center px-3 py-3 font-semibold">Jaar 1</th>
                  <th className="text-center px-3 py-3 font-semibold">Jaar 2</th>
                  <th className="text-center px-3 py-3 font-semibold">Jaar 3</th>
                  <th className="text-center px-3 py-3 font-semibold">Jaar 5</th>
                </tr>
              </thead>
              <tbody>
                {kostenTabel.map((row, i) => (
                  <tr key={row.systeem} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.systeem}</td>
                    <td className="px-3 py-3 text-center text-gray-700">{row.aanschaf}</td>
                    <td className="px-3 py-3 text-center text-gray-700">{row.jaar1}</td>
                    <td className="px-3 py-3 text-center text-gray-700">{row.jaar2}</td>
                    <td className="px-3 py-3 text-center text-gray-700">{row.jaar3}</td>
                    <td className="px-3 py-3 text-center font-semibold text-gray-900">{row.jaar5}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3">
            Aannames: koolstoffilter €45/jaar filters; osmose basis €80/jaar (pre-filters +
            membraan geamortiseerd); osmose premium €110/jaar; 4-in-1 kraan €120/jaar.
            Cumulatieve kosten inclusief aanschaf.
          </p>
          <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Analyse:</strong> Over vijf jaar is het
            kostenverschil tussen een basis koolstoffilter (€325) en een basis osmosesysteem
            (€580) circa €255. Dit is de meerprijs voor fundamenteel betere waterkwaliteit op
            nitraat, PFAS, kalk en zware metalen. Of die meerprijs zinvol is, hangt af van je
            waterprobleem — in regio&apos;s zonder bijzondere verontreiniging is koolstof voldoende.
          </div>
        </section>

        {/* Gerelateerde links */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/omgekeerde-osmose',
                title: 'Omgekeerde osmose uitgelegd',
                desc: 'Werking, voordelen en beperkingen van RO-filtratie in detail uitgelegd.',
              },
              {
                href: '/koolstoffilter',
                title: 'Koolstoffilter uitgelegd',
                desc: 'Hoe actief kool werkt en welke stoffen het effectief verwijdert.',
              },
              {
                href: '/waterfilter/welk-filter',
                title: 'Welk waterfilter heb ik nodig?',
                desc: 'Stap-voor-stap keuzehulp voor het juiste waterfilter voor jouw situatie.',
              },
              {
                href: '/filterkan/vs-osmose',
                title: 'Filterkan vs osmose',
                desc: 'Vergelijking tussen een filterkan (Brita/BWT) en een osmosefilter.',
              },
              {
                href: '/waterfilter/soorten',
                title: 'Waterfilter soorten',
                desc: 'Overzicht van alle filtertechnieken: UV, osmose, koolstof, keramisch en meer.',
              },
              {
                href: '/uv-filter',
                title: 'UV-waterfilter',
                desc: 'Wanneer heb je naast osmose of koolstof ook een UV-filter nodig?',
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

        {/* CTA */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: osmose vs koolstoffilter
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
