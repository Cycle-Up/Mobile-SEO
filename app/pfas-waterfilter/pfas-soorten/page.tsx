import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'PFAS-soorten uitgelegd: PFOS, PFOA, GenX en de EU-norm',
  description:
    'Overzicht van de PFAS-familie: PFOS, PFOA, PFNA, PFHxS, GenX en korte- vs langketenige PFAS. EU-som-norm 0,1 µg/L uitgelegd. Welke soorten verwijdert RO?',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-waterfilter/pfas-soorten' },
};

const faqItems = [
  {
    q: 'Wat is het verschil tussen PFOS en PFOA?',
    a: 'PFOS (perfluoroctaansulfonzuur) en PFOA (perfluoroctaanzuur) zijn beide langketenige PFAS met 8 koolstofatomen, maar met een andere functionele groep: PFOS heeft een sulfonzuurgroep, PFOA een carbonzuurgroep. PFOS werd in 2009 wereldwijd verboden via het Stockholm Verdrag, PFOA in 2020. Beide stapelen sterk op in het menselijk lichaam: de halfwaardetijd van PFOS is circa 5 jaar, van PFOA circa 4 jaar. Ze worden geassocieerd met schildklierproblematiek, verhoogd cholesterol en een hoger risico op nier- en testiskanker.',
  },
  {
    q: 'Wat zijn kortketenige PFAS en waarom zijn ze een probleem?',
    a: 'Kortketenige PFAS hebben 4 tot 7 koolstofatomen (C4-C7) en zijn ontwikkeld als vervangers voor langketenige PFAS na de verboden op PFOS en PFOA. Voorbeelden zijn PFBA (C4), PFPeA (C5), PFHxA (C6) en GenX (C6O4). Het probleem: kortketenige PFAS zijn mobieler in het milieu (lossen beter op in water), worden minder goed geadsorbeerd door actief kool, en zijn minder goed onderzocht op gezondheidseffecten. Ze worden steeds vaker aangetroffen in drinkwater.',
  },
  {
    q: 'Wat is GenX en is het gevaarlijk?',
    a: 'GenX (technische naam C6O4, of HFPO-DA) is een kortketenige PFAS die door Chemours in Dordrecht is gebruikt als vervanging voor PFOA. GenX bevat 6 koolstofatomen met een ethergroep. Het RIVM heeft GenX aangemerkt als een potentieel schadelijke stof op basis van dierproeven die effecten op lever, nieren en het immuunsysteem laten zien. GenX is moeilijker te verwijderen dan PFOS of PFOA: actief kool heeft een lagere adsorptiecapaciteit voor GenX, maar omgekeerde osmose verwijdert GenX wel effectief (meer dan 95%).',
  },
  {
    q: 'Wat zijn de 20 PFAS in de EU-som-norm?',
    a: 'De EU-drinkwaterrichtlijn (2020/2184) schrijft voor dat de som van 20 specifieke PFAS-verbindingen (de "PFAS-20" parameter) niet meer dan 0,10 µg/L mag bedragen. De 20 stoffen omvatten: PFOS, PFOA, PFNA, PFHxS, PFDA, PFUnDA, PFDoDA, PFTeDA, PFHxA, PFHpA, PFBA, PFPeA, PFHxS, PFBS, PFPeS, PFHxS, en andere. Voor de vier meest toxische stoffen samen (PFOS, PFOA, PFNA en PFHxS) geldt een strengere aparte grenswaarde van 0,05 µg/L.',
  },
  {
    q: 'Hoe lang blijven PFAS in het menselijk lichaam?',
    a: 'De halfwaardetijd van PFAS varieert sterk per verbinding. PFOS heeft de langste halfwaardetijd in het menselijk lichaam: circa 5 jaar. PFOA heeft een halfwaardetijd van circa 4 jaar. Kortketenige PFAS worden iets sneller uitgescheiden: PFBA heeft een halfwaardetijd van slechts enkele dagen, PFHxA enkele weken. Langketenige PFAS stapelen zich met name op in bloed, lever en nieren. Bioaccumulatie betekent dat jarenlange blootstelling aan lage concentraties kan leiden tot hoge lichaamsbelasting.',
  },
  {
    q: 'Verwijdert actief kool kortketenige PFAS zoals GenX?',
    a: 'Actief kool (zowel GAC-granulaat als koolstofblokfilter) verwijdert kortketenige PFAS zoals GenX significant minder goed dan langketenige PFAS. De reden is dat kortketenige PFAS minder sterk adsorberen aan het koolstofoppervlak. Studies laten voor GenX verwijderingspercentages van 30-60% zien bij GAC-filters, versus 90%+ voor PFOS en PFOA. Omgekeerde osmose verwijdert alle PFAS-soorten, inclusief GenX, voor meer dan 95% via fysieke membraanfiltratie.',
  },
  {
    q: 'Wat is bioaccumulatie en hoe werkt dat bij PFAS?',
    a: 'Bioaccumulatie betekent dat een stof zich ophoopt in levende organismen sneller dan het wordt uitgescheiden. PFAS binden aan eiwitten in het bloed (met name albumine) en stapelen zich op in lever, nieren, longen en moedermelk. Via de voedselketen concentreren PFAS zich van water naar waterplanten, vissen en uiteindelijk mensen. Langketenige PFAS bioaccumuleren sterker dan kortketenige. Dit is waarom zelfs lage concentraties in drinkwater na jarenlange blootstelling tot een significante lichaamsbelasting kunnen leiden.',
  },
  {
    q: 'Welke PFAS-soorten verwijdert omgekeerde osmose?',
    a: 'Omgekeerde osmose verwijdert alle bekende PFAS-soorten voor meer dan 95%, inclusief langketenige PFAS (PFOS, PFOA, PFNA, PFHxS), kortketenige PFAS (PFBA, PFPeA, PFHxA) en GenX. Het RO-membraan werkt via fysieke uitsluiting: de porieen van 0,0001 µm zijn kleiner dan de moleculen van alle PFAS-verbindingen. Dit maakt osmose de enige filtermethode die betrouwbaar effectief is voor het volledige PFAS-spectrum, inclusief de kortketenige verbindingen die actief kool minder goed adsorbeert.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'PFAS-soorten uitgelegd: PFOS, PFOA, GenX en de EU-norm',
  description:
    'Overzicht van de PFAS-familie: PFOS, PFOA, PFNA, PFHxS, GenX en korte- vs langketenige PFAS. EU-som-norm 0,1 µg/L uitgelegd.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-20',
  url: 'https://waterfilterplatform.nl/pfas-waterfilter/pfas-soorten',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function PfasSoortenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'PFAS waterfilter', item: 'https://waterfilterplatform.nl/pfas-waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'PFAS-soorten', item: 'https://waterfilterplatform.nl/pfas-waterfilter/pfas-soorten' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">PFAS-soorten</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS-soorten: PFOS, PFOA, GenX en de volledige PFAS-familie uitgelegd
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            PFAS is geen enkelvoudige stof maar een familie van meer dan 4.700 verbindingen. PFOS werd verboden in 2009, PFOA in 2020 &mdash; maar tientallen andere soorten zijn nog in omloop. Welke soorten zijn er, waarom zijn kortketenige PFAS zoals GenX een groeiend probleem, en welke filter verwijdert ze allemaal?
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-10">

        <QuickAnswer answer="De PFAS-familie omvat PFOS (verboden 2009), PFOA (verboden 2020), PFNA, PFHxS, GenX en honderden andere verbindingen. De EU-som-norm in drinkwater is 0,10 µg/L voor 20 prioritaire stoffen. Langketenige PFAS (PFOS, PFOA) bioaccumuleren sterk: halfwaardetijd 4-5 jaar in het menselijk lichaam. Actief kool verwijdert kortketenige GenX slecht (30-60%). Omgekeerde osmose verwijdert alle PFAS-soorten voor &gt;95%." />

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Wat is de PFAS-familie?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PFAS staat voor per- en polyfluoralkylstoffen (in het Engels: per- and polyfluoroalkyl substances). Het is een verzamelnaam voor meer dan 4.700 synthetische chemische verbindingen die allemaal een gemeenschappelijk kenmerk delen: een keten van koolstofatomen waaraan fluoratomen zijn gebonden. De koolstof-fluorbinding (C-F) is de sterkste binding in de organische chemie, wat de extreme chemische stabiliteit van PFAS verklaart.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PFAS worden ingedeeld op basis van de ketenlengte (het aantal koolstofatomen) en de functionele groep aan het uiteinde van de keten. De ketenlengte bepaalt grotendeels hoe mobiel de stof is in het milieu, hoe goed ze bioaccumuleren in het menselijk lichaam, en hoe gemakkelijk ze door waterfilters worden verwijderd.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Een uitgebreid overzicht van alle PFAS in het Nederlandse drinkwater vindt u op de pagina{' '}
          <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="text-[#005F8A] underline">PFAS in drinkwater: volledig overzicht</Link>.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Langketenige PFAS: PFOS, PFOA, PFNA en PFHxS
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Langketenige PFAS hebben 8 of meer koolstofatomen (C8+). Ze zijn het best onderzocht, het meest gereguleerd en in het menselijk lichaam het sterkst aantoonbaar.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">PFOS: verboden in 2009</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PFOS (perfluoroctaansulfonzuur, C8-sulfonzuur) is jarenlang de bekendste PFAS-verbinding geweest. Het werd gebruikt in Scotchgard (3M), AFFF-blusschuim, antiaanbaklagen en talloze industriele toepassingen. In 2009 werd PFOS opgenomen in Bijlage B van het Stockholm Verdrag als persistente organische verontreinigende stof, wat gebruik in de meeste toepassingen wereldwijd verbood.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          De halfwaardetijd van PFOS in het menselijk lichaam bedraagt circa <strong>5 jaar</strong>. Dit betekent dat iemand die jarenlang blootgesteld is geweest aan PFOS via drinkwater of voedsel, nog decennia na het staken van de blootstelling een verhoogde lichaamsbelasting heeft. PFOS accumuleert met name in bloed, lever en nieren. Het EFSA (Europese Voedselautoriteit) heeft PFOS geassocieerd met verhoogde cholesterolwaarden, verminderde werking van het immuunsysteem, schildklierproblemen en een verhoogd risico op testiskanker.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">PFOA: verboden in 2020</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          PFOA (perfluoroctaanzuur, C8-carbonzuur) was de werkzame stof in Teflon-coatings en werd gebruikt door DuPont (later Chemours). In Dordrecht heeft de Chemours-fabriek decennialang PFOA en later GenX uitgestoten, wat leidde tot een van de bekendste PFAS-schandalen in Nederland. PFOA werd in 2020 opgenomen in Bijlage A van het Stockholm Verdrag (volledig verbod).
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          De halfwaardetijd van PFOA in het menselijk lichaam bedraagt circa <strong>4 jaar</strong>. EFSA heeft PFOA geassocieerd met nierkanker, schildklierproblemen en effecten op het immuunsysteem bij kinderen.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">PFNA en PFHxS: de twee andere prioritaire stoffen</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          PFNA (perfluornonaanzuur, C9) en PFHxS (perfluorhexaansulfonzuur, C6-sulfonzuur) zijn samen met PFOS en PFOA de vier stoffen waarvoor de EU de strengste aparte grenswaarde hanteert: de som van PFOS + PFOA + PFNA + PFHxS mag niet meer dan 0,05 µg/L bedragen. PFHxS is technisch gezien een kortere keten (C6) maar heeft een sulfonzuurgroep die maakt dat het gedraagt als een langketenige stof in termen van bioaccumulatie. De halfwaardetijd van PFHxS in het menselijk lichaam is naar schatting 8 jaar &mdash; langer dan die van PFOS.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Kortketenige PFAS: GenX, PFBA en de opvolgers
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Na de verboden op PFOS en PFOA hebben chemische bedrijven kortketenige PFAS ontwikkeld als alternatieven. Kortketenige PFAS hebben 4 tot 7 koolstofatomen (C4-C7) en werden aanvankelijk gepresenteerd als veiliger. De praktijk bleek anders.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">GenX (C6O4): het Dordrecht-probleem</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          GenX, ook bekend als C6O4 of HFPO-DA (hexafluoropropyleenoxide-dimeerzuur), is een kortketenige PFAS met een ethergroep. Chemours in Dordrecht gebruikte GenX als directe vervanging voor PFOA na het verbod. Jarenlang werd GenX geloosd op de Westerschelde en in de lucht. In 2016 werd ontdekt dat Chemours dit zonder vergunning deed, wat leidde tot een groot schandaal en rechtszaken.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Het probleem met GenX: het is mobieler in water dan langketenige PFAS en minder goed te verwijderen door actief kool. GAC-granulaat verwijdert GenX slechts voor 30-60%, terwijl PFOS voor 90%+ wordt verwijderd. Omgekeerde osmose verwijdert GenX echter wel effectief (meer dan 95%) via fysieke membraanfiltratie.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Korte-keten vs. lange-keten: filtratie-uitdaging
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          De afnemende ketenlengte bij kortketenige PFAS heeft directe gevolgen voor filtereffectiviteit:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Stof</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Keten</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Actief kool (GAC)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Koolstofblok</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Omgekeerde osmose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">PFOS</td>
                <td className="border border-gray-300 px-3 py-2">C8-sulfonaat</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90-97%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">92-99%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&gt;97%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">PFOA</td>
                <td className="border border-gray-300 px-3 py-2">C8-carbonzuur</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85-97%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">90-98%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&gt;96%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">PFHxS</td>
                <td className="border border-gray-300 px-3 py-2">C6-sulfonaat</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">75-90%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">85-95%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&gt;95%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">GenX (C6O4)</td>
                <td className="border border-gray-300 px-3 py-2">C6-ether</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">30-60%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">50-75%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&gt;95%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">PFBA</td>
                <td className="border border-gray-300 px-3 py-2">C4-carbonzuur</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">20-50%</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">40-65%</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&gt;90%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mb-6">
          Indicatieve verwijderingspercentages op basis van gepubliceerde laboratoriumdata (NSF, EPA, RIVM). Bijgewerkt mei 2026.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          De EU-som-norm: 0,10 µg/L voor 20 PFAS
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          De EU-drinkwaterrichtlijn (2020/2184), die in Nederland volledig van kracht is vanaf 2026, introduceert twee PFAS-normen:
        </p>
        <div className="space-y-4 mb-6">
          <div className="bg-[#E0F2FE] rounded-xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">PFAS-20: som van 20 prioritaire stoffen</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              De som van 20 specifieke PFAS-verbindingen in drinkwater mag niet meer dan <strong>0,10 µg/L</strong> bedragen. Dit is de brede norm die alle bekende prioritaire PFAS dekt, inclusief kortketenige verbindingen. De 20 stoffen zijn gekozen op basis van toxiciteit, frequentie van voorkomen in Europees drinkwater en meetbaarheid.
            </p>
          </div>
          <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
            <p className="font-semibold text-[#003F5C] mb-2">Vier meest toxische stoffen: strengere norm van 0,05 µg/L</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Voor PFOS, PFOA, PFNA en PFHxS samen geldt een aparte, strengere grenswaarde van <strong>0,05 µg/L</strong>. Dit erkent de bijzondere toxiciteit en bioaccumulatiepotentie van deze vier verbindingen. Een drinkwaterbedrijf kan voldoen aan de PFAS-20 som-norm maar toch de strengere 4-stof norm overschrijden.
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Meer over de wettelijke kaders leest u op onze pagina{' '}
          <Link href="/drinkwaternormen/pfas" className="text-[#005F8A] underline">drinkwaternormen voor PFAS</Link>.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Bioaccumulatie en halfwaardetijd in het menselijk lichaam
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Bioaccumulatie is de reden waarom PFAS zo gevaarlijk zijn bij chronische blootstelling aan lage concentraties. PFAS binden aan eiwitten in het bloed (met name albumine en levereiwitten) en worden niet omgezet door het lichaam. De enige uitscheidingsroute is via urine, zweet en bij vrouwen ook via moedermelk en de placenta.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          De halfwaardetijden in het menselijk lichaam geven aan hoe lang het duurt voordat de helft van de opgenomen PFAS is uitgescheiden:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-sm leading-relaxed">
          <li><strong>PFHxS:</strong> circa 8 jaar (langste bekende halfwaardetijd)</li>
          <li><strong>PFOS:</strong> circa 5 jaar</li>
          <li><strong>PFOA:</strong> circa 4 jaar</li>
          <li><strong>PFNA:</strong> circa 3 jaar</li>
          <li><strong>PFHxA (C6 carbonzuur):</strong> circa 2-3 weken</li>
          <li><strong>PFBA (C4 carbonzuur):</strong> circa 3-7 dagen</li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Kortketenige PFAS worden aanzienlijk sneller uitgescheiden, wat aanvankelijk als voordeel werd gepresenteerd. Maar de hoge wateroplosbaarheid en mobiliteit van kortketenige PFAS betekent dat ze de grondwatervoorraden en drinkwaterbronnen dieper en sneller doordringen dan langketenige PFAS.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Welke filter verwijdert alle PFAS-soorten?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Niet elke filtermethode is even effectief voor het volledige PFAS-spectrum. De kritieke zwakte van actief kool is de slechte verwijdering van kortketenige PFAS. Omgekeerde osmose werkt fundamenteel anders: het RO-membraan heeft porieen van slechts 0,0001 µm, kleiner dan elk PFAS-molecuul ongeacht de ketenlengte. PFAS worden fysiek tegengehouden, niet geadsorbeerd.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Dit maakt osmose de enige consumentenfilter die betrouwbaar effectief is voor het volledige PFAS-spectrum, inclusief de moeilijk te verwijderen kortketenige verbindingen zoals GenX en PFBA.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Wilt u weten welk osmosefilter het best presteert voor uw situatie? Bekijk onze vergelijking op{' '}
          <Link href="/pfas-waterfilter/vergelijken" className="text-[#005F8A] underline">PFAS waterfilter vergelijken</Link>{' '}
          of lees de volledige gids op{' '}
          <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">PFAS waterfilter overzicht</Link>.
        </p>

        <CTABanner context="osmose" />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Gerelateerde onderwerpen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS in drinkwater: volledig overzicht</h3>
              <p className="text-sm text-gray-600">Alle PFAS-verbindingen die in Nederlands drinkwater zijn aangetroffen, per regio.</p>
            </Link>
            <Link href="/drinkwaternormen/pfas" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">Drinkwaternormen voor PFAS</h3>
              <p className="text-sm text-gray-600">EU-richtlijn 2020/2184, EFSA-advies en de Nederlandse implementatie uitgelegd.</p>
            </Link>
            <Link href="/pfas-waterfilter/vergelijken" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS waterfilter vergelijken</h3>
              <p className="text-sm text-gray-600">Osmose vs. koolstof vs. nanofiltration: welke filter werkt voor welke PFAS-soort?</p>
            </Link>
            <Link href="/pfas-waterfilter" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS waterfilter gids</h3>
              <p className="text-sm text-gray-600">Complete gids: welke filters werken, EU-norm 2026 en de situatie in Nederland.</p>
            </Link>
          </div>
        </section>

        <section id="faq" className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over PFAS-soorten
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details key={i} className="border border-gray-200 rounded-xl p-4 group">
                <summary className="font-semibold text-[#003F5C] cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        <p className="text-gray-500 text-xs mt-6">
          Zie ook:{' '}
          <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">PFAS waterfilter overzicht</Link>,{' '}
          <Link href="/pfas-waterfilter/testen" className="text-[#005F8A] underline">PFAS testen in uw water</Link> en{' '}
          <Link href="/pfas-waterfilter/gebieden-nederland" className="text-[#005F8A] underline">PFAS risicogebieden</Link>.
        </p>

      </main>
    </>
  );
}
