import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterfilter voor koelkast: wanneer vervangen en welk type?',
  description:
    'Alles over koelkast waterfilters: interne filters van Samsung, LG, Beko en Bosch, vervangingsintervallen, wat ze verwijderen, en wanneer je beter kiest voor.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/koelkast' },
  openGraph: {
    title: 'Waterfilter voor koelkast: wanneer vervangen en welk type?',
    description:
      'Alles over koelkast waterfilters: interne filters van Samsung, LG, Beko en Bosch, vervangingsintervallen, wat ze verwijderen, en wanneer je beter kiest voor.',
    url: 'https://waterfilterplatform.nl/waterfilter/koelkast',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Hoe vaak moet ik het waterfilter van mijn koelkast vervangen?',
    answer:
      'De meeste fabrikanten (Samsung, LG, Beko, Bosch) adviseren het interne koelkastfilter elke 6 maanden of na 300 liter te vervangen — afhankelijk van wat eerder bereikt wordt. Bij intensief gebruik (groot gezin, hoge waterproductie) kan vervanging vaker nodig zijn. Gebruik de filterwaarschuwingsindicator van de koelkast als richtlijn, maar wacht niet tot het water zichtbaar verandert.',
  },
  {
    question: 'Wat verwijdert een koelkastfilter en wat niet?',
    answer:
      'Interne koelkastfilters bestaan vrijwel altijd uit geactiveerd kool. Ze verwijderen effectief: chloor (>90%), smaak- en geurafwijkingen, en deels sediment. Ze verwijderen NIET: nitraten (<10%), PFAS (<20%), bacteriën en virussen (0%), zware metalen zoals lood (0–30%), en waterhardheidsmineralen. Een koelkastfilter is primair een smaakfilter, geen zuiveringsinstallatie.',
  },
  {
    question: 'Kan ik een niet-origineel (compatible) koelkastfilter gebruiken?',
    answer:
      'Ja, compatible koelkastfilters zijn vaak 50–70% goedkoper dan OEM-filters en werken functioneel vergelijkbaar voor chloor- en smaakverwijdering. Let op: sommige fabrikanten (Samsung, LG) programmeren hun koelkast om een filterwaarschuwing te tonen bij niet-OEM patronen. Kies een filter met NSF/ANSI 42 of 53 certificering als kwaliteitsgarantie. Merkloze filters zonder certificering bieden geen bewijs van filterprestaties.',
  },
  {
    question: 'Wat zijn de risicos van een niet-vervangen koelkastfilter?',
    answer:
      'Een verlopen koelkastfilter vormt een verhoogd risico op bacteriegroei: geactiveerde kool is een ideaal medium voor biofilmvorming zodra de adsorptiecapaciteit is uitgeput. Daarnaast neemt de filtersnelheid af (langzamere ijsproductie en waterafgifte), verslechtert de smaak, en kunnen opgehoopte verontreinigingen terugstromen in het water. Vervang het filter strikt op schema.',
  },
  {
    question: 'Welke Samsung koelkastfilters zijn er en waar koop ik ze?',
    answer:
      'De meest voorkomende Samsung filters zijn de DA29-00020B (gebruikt in French Door en Side-by-Side modellen), de HAF-CIN (voor nieuwere modellen), en de DA97-17376B. OEM-filters kosten €25–50 bij Samsung en grote elektronicawinkels. Compatible alternatieven zijn beschikbaar via webshops voor €8–20. Controleer altijd het modelnummer van je koelkast voor de juiste filtercode.',
  },
  {
    question: 'Heeft mijn Bosch of Beko koelkast een waterfilter?',
    answer:
      'Niet alle Bosch en Beko koelkasten hebben een intern waterfilter — alleen modellen met ingebouwde waterdispenser of ijsmachine. Bosch-modellen met dispenser gebruiken doorgaans het UltraClarity-filter (intern, actief kool). Beko-modellen gebruiken een vergelijkbaar koolfilter. Koelkasten zonder dispenser hebben geen filterpatroon; overweeg dan een extern inline-filter op de waterleiding.',
  },
  {
    question: 'Is een externe inline filter beter dan een intern koelkastfilter?',
    answer:
      'Een extern inline koolstoffilter op de watertoevoer van de koelkast biedt vergelijkbare prestaties voor chloor en smaak, tegen lagere kosten (€20–40 filter, vervanging elke 6–12 maanden). Voordeel: geen merk-specifiek patroon nodig, lagere jaarkosten. Nadeel: installatie vereist een aansluiting op de waterleiding. Voor maximale waterkwaliteit is een osmosefilter op de toevoer de beste keuze.',
  },
  {
    question: 'Wanneer is het beter om te kiezen voor een osmosefilter in plaats van een koelkastfilter?',
    answer:
      'Kies voor omgekeerde osmose als: je koelkastfilter nitraten, PFAS of zware metalen niet verwijdert en je woont in een risicogebied; je hoge waterhardheid hebt (>15°dH) die intern filter niet aanpakt; je de beste waterkwaliteit wilt voor de hele keuken (drinkwater, koffie, koken). Een osmosefilter op de watertoevoer levert gefilterd water aan de koelkast én aan het keukenblok.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
  { name: 'Koelkast', url: 'https://waterfilterplatform.nl/waterfilter/koelkast' },
];

const kostenVergelijking = [
  {
    type: 'OEM-filter (Samsung/LG)',
    aanschaf: '€25–50 per patroon',
    jaarkosten: '€50–100',
    intervalMaanden: '6 maanden / 300L',
    gecertificeerd: 'NSF/ANSI 42',
  },
  {
    type: 'Compatible filter (merk)',
    aanschaf: '€10–20 per patroon',
    jaarkosten: '€20–40',
    intervalMaanden: '6 maanden / 300L',
    gecertificeerd: 'Wisselend',
  },
  {
    type: 'Inline koolstoffilter (extern)',
    aanschaf: '€25–50 eenmalig',
    jaarkosten: '€15–30 (patroon)',
    intervalMaanden: '6–12 maanden',
    gecertificeerd: 'NSF/ANSI 42/53',
  },
  {
    type: 'Inline sediment + kool',
    aanschaf: '€30–60 eenmalig',
    jaarkosten: '€20–40',
    intervalMaanden: '6 maanden',
    gecertificeerd: 'NSF/ANSI 42',
  },
  {
    type: 'Osmosefilter (RO)',
    aanschaf: '€150–400 eenmalig',
    jaarkosten: '€30–70',
    intervalMaanden: 'Jaarlijks (membraan 2–3 jaar)',
    gecertificeerd: 'NSF/ANSI 58',
  },
];

export default function WaterfilterKoelkastPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter voor koelkast: wanneer vervangen en welk type?',
          description:
            'Alles over koelkast waterfilters: interne filters van Samsung, LG, Beko en Bosch, vervangingsintervallen en wanneer osmose een betere keuze is.',
          datePublished: '2026-03-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterfilter/koelkast',
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
            <span className="text-gray-700 font-medium">Koelkast</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Waterfilter voor koelkast: wanneer vervangen en welk type?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            Koelkasten met waterdispenser of ijsmachine hebben een ingebouwd waterfilter. Maar wat
            filtert zo&apos;n patroon werkelijk, wanneer moet het vervangen worden, en wanneer is een
            extern alternatief verstandiger?
          </p>
          <div className="flex flex-wrap gap-2 mt-4 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">
              Bijgewerkt mei 2026
            </span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">
              ~7 min leestijd
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        <QuickAnswer answer="Koelkastfilters (Samsung, LG, Beko, Bosch) zijn actief-koolfilters die chloor en smaak verbeteren, maar geen nitraten, PFAS of bacteriën verwijderen. Vervangen elke 6 maanden of 300 liter. Bij hard water of specifieke verontreinigingen is een extern osmosefilter op de watertoevoer een betere oplossing." />

        {/* Soorten koelkastfilters */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Soorten waterfilters voor koelkasten
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn twee hoofdtypen waterfiltersystemen voor koelkasten: interne filters die in de
            koelkast zijn geïntegreerd, en externe inline filters die op de watertoevoer worden
            aangesloten.
          </p>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            Intern koelkastfilter
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Het meest voorkomende type. Het filter zit in de koelkast zelf — doorgaans in de
            bovenste hoek van het koelkastgedeelte, achter een klepje, of in de voorkant van de
            deur bij sommige Samsung-modellen. Alle interne koelkastfilters werken op hetzelfde
            principe: <strong>geactiveerde kool</strong> adsorbeert chloor, chloramines en smaak-
            en geurafwijkingen.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
            <li>Eenvoudig te vervangen (geen gereedschap nodig bij de meeste modellen)</li>
            <li>Merk-specifieke patroonvorm — niet universeel uitwisselbaar</li>
            <li>OEM-patronen relatief duur (€25–50 per stuk)</li>
            <li>Compatible alternatieven beschikbaar bij de meeste merken</li>
          </ul>

          <h3 className="text-xl font-semibold text-[#003F5C] mt-5 mb-2">
            Extern inline filter
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een extern filter wordt aangesloten op de waterleiding die naar de koelkast loopt. Dit
            type filtert het water <em>voordat</em> het de koelkast bereikt. Voordelen: universeel
            toepasbaar, lagere jaarkosten, en betere filtermogelijkheden (ook sedimentfilters,
            koolstofblokfilters, of osmose kunnen worden toegepast).
          </p>
        </section>

        {/* Merken */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Koelkastmerken en hun filtersystemen
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-1">Samsung</p>
              <p className="text-sm text-gray-700 mb-2">
                Samsung is marktleider in koelkasten met ingebouwde waterdispenser. Meest gebruikte
                filters: <strong>DA29-00020B</strong> (ouder), <strong>HAF-CIN/EXP</strong> en
                <strong> DA97-17376B</strong>. Alle zijn actief-koolfilters met NSF/ANSI 42
                certificering. Vervanging: elke 6 maanden. Koelkast geeft een rode ledwaarschuwing.
                Compatible alternatieven zijn volop beschikbaar.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-1">LG</p>
              <p className="text-sm text-gray-700 mb-2">
                LG-modellen met waterdispenser gebruiken het <strong>LT1000P</strong>,{' '}
                <strong>LT700P</strong> of <strong>LT800P</strong> filter, afhankelijk van het model.
                NSF/ANSI 42 gecertificeerd voor chloor en sediment. Interval: 6 maanden of 200 gallon
                (ca. 750 liter). Let op: LG-systemen detecteren soms niet-originele filters en tonen
                een foutcode — controleer de handleiding.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-1">Bosch</p>
              <p className="text-sm text-gray-700 mb-2">
                Bosch Side-by-Side en French Door koelkasten met dispenser gebruiken het{' '}
                <strong>UltraClarity-filter</strong> (intern, actief kool). Bosch-koelkasten zonder
                dispenser hebben geen intern filter. Het UltraClarity-patroon is verkrijgbaar via
                Bosch en webshops; compatible versies ook beschikbaar.
              </p>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-[#003F5C] mb-1">Beko</p>
              <p className="text-sm text-gray-700 mb-2">
                Beko-dispenserkoelkasten gebruiken merk-specifieke actief-koolfilters. Interval: 6
                maanden. Beko-modellen geven doorgaans geen filterwaarschuwing — stel zelf een
                herinnering in bij installatie. Compatible filters voor Beko zijn minder breed
                beschikbaar dan voor Samsung of LG.
              </p>
            </div>
          </div>
        </section>

        {/* Wat verwijdert een koelkastfilter */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat verwijdert een koelkastfilter — en wat niet?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het is belangrijk om te begrijpen dat koelkastfilters uitsluitend smaakfilters zijn,
            geen waterontzuiveringsinstallaties. Onderstaande tabel geeft een overzicht:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Stof</th>
                  <th className="text-center px-4 py-3 font-semibold">Verwijdering</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stof: 'Chloor', reductie: '>90%', kleur: 'green', toelichting: 'Actief kool adsorbeert effectief restchloor' },
                  { stof: 'Geur en smaak', reductie: 'Goed', kleur: 'green', toelichting: 'Primaire functie van het koolfilter' },
                  { stof: 'Sediment (grof)', reductie: 'Ja', kleur: 'green', toelichting: 'Filtert deeltjes >5 micron' },
                  { stof: 'Bacteriën & virussen', reductie: '0%', kleur: 'red', toelichting: 'Koolfilter heeft geen microbiologische werking' },
                  { stof: 'Nitraat', reductie: '<10%', kleur: 'red', toelichting: 'Standaard kool adsorbeert geen nitraat' },
                  { stof: 'PFAS / PFOA', reductie: '<20%', kleur: 'red', toelichting: 'Standaard kool onvoldoende voor PFAS' },
                  { stof: 'Lood', reductie: '0–30%', kleur: 'red', toelichting: 'Wisselend; niet gecertificeerd bij de meeste OEM-filters' },
                  { stof: 'Waterhardheid (kalk)', reductie: '0%', kleur: 'red', toelichting: 'Koolfilter onthardet niet' },
                ].map((row, i) => (
                  <tr key={row.stof} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.stof}</td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-block font-semibold text-xs px-2.5 py-1 rounded-full ${
                          row.kleur === 'green'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {row.reductie}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm hidden sm:table-cell">{row.toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Vervangingsintervallen en risico's */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vervangingsinterval: 6 maanden of 300 liter
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vrijwel alle fabrikanten hanteren een vervangingsinterval van <strong>6 maanden of 300 liter
            (ca. 80 gallon)</strong>, afhankelijk van wat eerder bereikt wordt. Bij een gezin dat dagelijks
            2–3 liter water tappt via de dispenser, is 300 liter in 3–4 maanden bereikt.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
            <p className="font-bold text-amber-900 mb-2">Risico&apos;s van een verlopen koelkastfilter</p>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Geactiveerde kool is na verzadiging een ideale voedingsbodem voor biofilm en bacteriegroei</li>
              <li>Smaak en geur nemen merkbaar af — chloor en andere stoffen passeren het filter volledig</li>
              <li>Opgehoopte verontreinigingen kunnen terugstromen wanneer de waterdruk varieert</li>
              <li>De filtersnelheid daalt: tragere ijsproductie en waterafgifte</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Wacht niet tot de smaak verslechtert of de indicator rood wordt. Noteer de installatiedatum
            bij elke vervanging en vervang proactief op schema.
          </p>
        </section>

        {/* Kostenvergelijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Kostenvergelijking: OEM, compatible en externe alternatieven
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-3 font-semibold">Type filter</th>
                  <th className="text-center px-4 py-3 font-semibold">Aanschaf</th>
                  <th className="text-center px-4 py-3 font-semibold">Jaarkosten</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Interval</th>
                  <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Certificering</th>
                </tr>
              </thead>
              <tbody>
                {kostenVergelijking.map((row, i) => (
                  <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-900">{row.type}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.aanschaf}</td>
                    <td className="px-4 py-3 text-center font-semibold text-[#003F5C]">{row.jaarkosten}</td>
                    <td className="px-4 py-3 text-gray-600 hidden sm:table-cell">{row.intervalMaanden}</td>
                    <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{row.gecertificeerd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            Jaarkosten zijn indicatief op basis van vervangingsfrequentie en gemiddelde filterprijs.
          </p>
        </section>

        {/* Wanneer overstappen naar osmose */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer overstappen naar omgekeerde osmose?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een intern koelkastfilter is voldoende als je primair de smaak en chloor wilt verbeteren.
            Maar er zijn situaties waarbij een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde-osmosefilter
            </Link>{' '}
            op de watertoevoer van de koelkast een betere keuze is:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>
              <strong>Hard water (&gt;15°dH):</strong> Koolfilters ontharден niet. Kalk tast de
              waterleiding en dispenser aan. Controleer{' '}
              <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
                de waterhardheid in jouw gemeente
              </Link>
              .
            </li>
            <li>
              <strong>Nitraat of PFAS in het leidingwater:</strong> Koolfilters verwijderen deze
              stoffen niet. Een osmosefilter verwijdert nitraat voor 90–96% en PFAS voor 90–98%.
            </li>
            <li>
              <strong>Loden leidingen (woningen vóór 1970):</strong> Koelkastfilters bieden
              onvoldoende bescherming tegen loodoplossing uit leidingen.
            </li>
            <li>
              <strong>Je wilt ook gefilterd water aan het keukenblok:</strong> Een osmosefilter op de
              watertoevoer levert gefilterd water aan zowel de koelkast als de keukenkraan.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Lees meer over de{' '}
            <Link href="/waterfilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              verschillende waterfiltersoorten
            </Link>{' '}
            en wanneer welk type past bij jouw situatie.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over koelkast waterfilters
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

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: '/waterfilter/soorten', title: 'Waterfiltersoorten vergelijken', desc: 'Overzicht van alle filtertypes: koolstof, UF, osmose en meer.' },
              { href: '/omgekeerde-osmose', title: 'Omgekeerde osmose uitleg', desc: 'Hoe RO werkt en wat het verwijdert uit leidingwater.' },
              { href: '/waterhardheid', title: 'Waterhardheid per gemeente', desc: 'Controleer of je hard of zacht leidingwater hebt.' },
              { href: '/waterfilter', title: 'Waterfilter kiezen', desc: 'Praktische gids voor het kiezen van het juiste waterfilter.' },
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

      </div>
    </>
  );
}
