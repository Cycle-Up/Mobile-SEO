import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Koolstoffilter voor leidingwater: zinvol of niet? (2026)',
  description:
    'Wanneer is een koolstoffilter zinvol voor leidingwater? Chloor, smaak, regio in Nederland. Wanneer niet voldoende: PFAS, nitraat, zware metalen. Combinatie',
  alternates: { canonical: 'https://waterfilterplatform.nl/koolstoffilter/leidingwater' },
};

const faqItems = [
  {
    q: 'Is een koolstoffilter zinvol voor Nederlands leidingwater?',
    a: 'Voor de meeste Nederlanders is een koolstoffilter zinvol als men gevoelig is voor de smaak of geur van chloor in leidingwater. Nederlands leidingwater is van hoge kwaliteit en veilig te drinken zonder filter. Een koolstoffilter verbetert de smaak merkbaar (chloorverwijdering 95-99%) en verwijdert ook trihalomethanen, pesticideresten en organische microverontreinigingen. In gebieden met hoge waterhardheid of incidentele kwaliteitsproblemen is een filter extra waardevol.',
  },
  {
    q: 'Verwijdert een koolstoffilter PFAS uit leidingwater?',
    a: 'Niet effectief. Een standaard koolstoffilter verwijdert kortketenige PFAS (zoals GenX, PFBS) voor minder dan 20%. Langketenige PFAS (PFOS, PFOA) worden iets beter geadsorbeerd, maar de verwijdering is onbetrouwbaar en sterk afhankelijk van de contacttijd. Voor PFAS-verwijdering is omgekeerde osmose (RO) de aangewezen technologie met een verwijderingspercentage van 90-98%. In PFAS-risicogebieden (omgeving Dordrecht, Schiphol-zone) is een RO-systeem sterk aanbevolen.',
  },
  {
    q: 'Verwijdert een koolstoffilter nitraat uit leidingwater?',
    a: 'Nee. Een koolstoffilter verwijdert nitraat nauwelijks (minder dan 10%). Nitraat is een klein, hydrofiel anion met vrijwel geen affiniteit voor het koolstofoppervlak. In regio\'s met hoge nitraatniveaus (agrarische gebieden in Drenthe, Gelderland, Noord-Brabant) is een ionenwisselaar of omgekeerde osmose noodzakelijk voor effectieve nitraatverwijdering. Controleer de jaarcijfers van uw waterleidingbedrijf voor de actuele nitraatconcentratie.',
  },
  {
    q: 'Is een koolstoffilter zinvol in een harde waterregio?',
    a: 'Een koolstoffilter verwijdert kalk (hardheid) niet - dit zijn anorganische ionen (calcium en magnesium) die niet door actieve kool worden geadsorbeerd. In harde waterregio\'s (provincie Zeeland, Noord-Holland, ZH, >20 dH) hebt u voor kalkverwijdering een waterontharder of RO-systeem nodig. Een koolstoffilter kan wel zinvol zijn in combinatie met een ontharder: de ontharder verwijdert kalk, de koolstoffilter verwijdert chloor en smaakstoffen.',
  },
  {
    q: 'In welke Nederlandse regio\'s is een koolstoffilter het meest nuttig?',
    a: 'Regio\'s met hogere chloorconcentraties in leidingwater zijn stedelijke gebieden met lang distributienet (bepaalde wijken in Rotterdam, Den Haag, Utrecht). In gebieden met oppervlaktewater als drinkwaterbron (grote delen van West-Nederland) kunnen seizoensgebonden geosminegeur- en smaakproblemen optreden. In het Noorden en Oosten (grondwaterbron) is het water doorgaans van nature smakelijker en zijn chloorconcentraties lager - een koolstoffilter is hier minder noodzakelijk maar nog steeds zinvol.',
  },
  {
    q: 'Wat doet een sedimentfilter als voorfilter voor een koolstoffilter?',
    a: 'Een sedimentfilter (5 of 10 micron polypropyleen patroon) als voorfilter beschermt het koolstofpatroon tegen roest, zand en andere vaste deeltjes. Dit verlengt de levensduur van het koolstoffilter aanzienlijk, omdat het koolstofpatroon niet verstopt raakt met mechanische verontreinigingen. In oudere woningen met verouderde leidingen is een sedimentvoorfilter sterk aanbevolen. Kosten sedimentpatroon: EUR 2-5 per 6 maanden - een kleine investering die de levensduur van het duurste koolstofpatroon verdubbelt.',
  },
  {
    q: 'Kan een koolstoffilter zware metalen verwijderen uit leidingwater?',
    a: 'Deels. Een koolstofblokfilter met NSF/ANSI 53 certificering voor lood verwijdert lood voor 25-40% via beperkte ioneninteractie. Dit is onvoldoende bij hoge loodconcentraties (ouder dan 1970 panden met loden leidingen). Voor betrouwbare verwijdering van lood, koper en andere zware metalen is een gespecialiseerd loodreductiefilter (ionenwisselaar) of omgekeerde osmose noodzakelijk. Koolstof is hier een aanvulling, niet de hoofdoplossing.',
  },
  {
    q: 'Moet ik een koolstoffilter combineren met andere filtertypen?',
    a: 'Dat hangt af van uw waterkwaliteitsprofiel. Voor puur smaak- en geurverbetering is een enkelvoudig koolstoffilter voldoende. Voor een completere behandeling zijn combinaties zinvol: sedimentfilter + koolstofblok (standaard onderbouwcombo), sedimentfilter + koolstofblok + RO-membraan (voor PFAS, nitraat, zware metalen), of koolstoffilter + UV (voor microbiologische zekerheid bij twijfel). Een drievoudig onderbouwsysteem (sediment + koolstof + RO) biedt de meest volledige bescherming.',
  },
  {
    q: 'Hoe lang gaat een koolstoffilter mee bij dagelijks leidingwatergebruik?',
    a: 'Bij gemiddeld gezinsverbruik (4 personen, 3 liter/dag gefilterd water = circa 1100 liter/jaar): een GAC filterkan gaat 4-6 weken per patroon (7-10 patronen per jaar). Een koolstofblokfilter voor onderbouw gaat 6-12 maanden (1-2 patronen per jaar). Een inline blokfilter gaat 6-12 maanden of 2000-4000 liter. In gebieden met hoge chloor- of organische stofconcentraties kan de levensduur korter zijn. Vervang altijd op of voor de aangegeven datum.',
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
  headline: 'Koolstoffilter voor leidingwater: zinvol of niet? (2026)',
  description:
    'Wanneer is een koolstoffilter zinvol voor leidingwater? Chloor, smaak, regionale variatie in Nederland en wanneer een koolstoffilter niet voldoende is.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-20',
  url: 'https://waterfilterplatform.nl/koolstoffilter/leidingwater',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KoolstoffilterLeidingwaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Koolstoffilter', item: 'https://waterfilterplatform.nl/koolstoffilter' },
              { '@type': 'ListItem', position: 3, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/koolstoffilter/leidingwater' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <Link href="/koolstoffilter" className="hover:text-[#005F8A]">Koolstoffilter</Link>
            <span>›</span>
            <span className="text-gray-700 font-medium">Leidingwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-3">
            Koolstoffilter voor leidingwater: wanneer zinvol en wanneer niet voldoende?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Nederlands leidingwater is veilig te drinken, maar een koolstoffilter kan de smaak en
            kwaliteit merkbaar verbeteren. Tegelijk zijn er situaties waarbij een koolstoffilter
            niet voldoende is: PFAS, nitraat en zware metalen vereisen een andere aanpak. Op deze
            pagina leest u wanneer een koolstoffilter zinvol is voor uw leidingwater, hoe de
            waterkwaliteit per regio varieert en hoe u het beste combineert met een sedimentfilter.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="bg-white border border-[#005F8A]/20 text-[#005F8A] rounded-full px-3 py-1">Bijgewerkt mei 2026</span>
            <span className="bg-white border border-gray-200 text-gray-500 rounded-full px-3 py-1">~8 min leestijd</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-8 space-y-10">

        <QuickAnswer answer="Een koolstoffilter voor leidingwater is zinvol voor: chloorverwijdering (95-99%), smaak- en geurverbetering, reductie van THM en organische stoffen. Niet voldoende voor: PFAS (RO nodig), nitraat (RO of ionenwisselaar), zware metalen (gespecialiseerd filter), kalk (ontharder). In West-Nederland met oppervlaktewater is een filter nuttig; in het Noorden en Oosten met grondwater minder noodzakelijk." />

        <CTABanner context="osmose" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is een koolstoffilter zinvol voor leidingwater?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een koolstoffilter voegt waarde toe aan uw leidingwater in de volgende situaties:
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3 border border-green-200 bg-green-50 rounded-xl p-4">
              <span className="text-green-600 font-bold text-lg shrink-0">+</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Chloorlucht of -smaak</p>
                <p className="text-sm text-gray-600">De meest voorkomende reden. Als uw kraanwater naar zwembad ruikt of smaakt, verwijdert een koolstofblokfilter 95-99% van het chloor. Merkbaar verschil vanaf de eerste liter.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border border-green-200 bg-green-50 rounded-xl p-4">
              <span className="text-green-600 font-bold text-lg shrink-0">+</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Seizoensgebonden smaakproblemen</p>
                <p className="text-sm text-gray-600">In regio&apos;s die oppervlaktewater gebruiken (grote delen van West-Nederland) kunnen in zomer en herfst geosmine- en MIB-niveaus stijgen door blauwalgengroei. Een koolstoffilter elimineert deze aardachtige geuren voor 90-99%.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border border-green-200 bg-green-50 rounded-xl p-4">
              <span className="text-green-600 font-bold text-lg shrink-0">+</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Reductie van organische microverontreinigingen</p>
                <p className="text-sm text-gray-600">Pesticiden, herbiciden en organische verbindingen die in lage concentraties voorkomen in oppervlaktewater worden voor 70-90% geadsorbeerd door actieve kool.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border border-amber-200 bg-amber-50 rounded-xl p-4">
              <span className="text-amber-600 font-bold text-lg shrink-0">~</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Lichte verbetering bij THM en chloorderivaten</p>
                <p className="text-sm text-gray-600">Trihalomethanen (THM) worden voor 90-99% verwijderd door een gecertificeerd blokfilter. Nuttig in stedelijke gebieden met lang distributienet.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer over het werkingsprincipe leest u op de pagina{' '}
            <Link href="/koolstoffilter/werking" className="text-[#005F8A] underline hover:no-underline">
              hoe werkt een koolstoffilter
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is een koolstoffilter NIET voldoende?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Er zijn situaties waarbij een koolstoffilter onvoldoende bescherming biedt en een andere of
            aanvullende filtertechnologie noodzakelijk is:
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Stof / probleem</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Koolstoffilter</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Betere oplossing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stof: 'PFAS (kort- en langketenig)', koolstof: '<20%', oplossing: 'Omgekeerde osmose (90-98%)' },
                  { stof: 'Nitraat', koolstof: '<10%', oplossing: 'RO of ionenwisselaar (85-95%)' },
                  { stof: 'Lood / zware metalen', koolstof: '25-40%', oplossing: 'Gespecialiseerde loodfilter of RO' },
                  { stof: 'Kalk (waterhardheid)', koolstof: '<5%', oplossing: 'Waterontharder of RO' },
                  { stof: 'Bacterien / virussen', koolstof: '<5%', oplossing: 'UV-desinfectie of RO' },
                  { stof: 'Fluoride', koolstof: '<10%', oplossing: 'Activeerdaluminium of RO' },
                ].map((r, i) => (
                  <tr key={r.stof} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.stof}</td>
                    <td className="py-2.5 px-3 text-center">
                      <span className="inline-block text-xs font-semibold bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        {r.koolstof}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-gray-700 text-xs">{r.oplossing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Wilt u weten welk waterfilter het best bij uw situatie past? Bekijk het overzicht op de
            pagina{' '}
            <Link href="/waterfilter/soorten" className="text-[#005F8A] underline hover:no-underline">
              waterfilter soorten vergelijken
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waterkwaliteit per regio in Nederland</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nederland gebruikt twee hoofdbronnen voor drinkwater: oppervlaktewater (rivieren, meren) en
            grondwater. De bron heeft grote invloed op de samenstelling en daarmee op de toegevoegde
            waarde van een koolstoffilter.
          </p>
          <div className="space-y-4 mb-6">
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">West-Nederland (Rotterdam, Amsterdam, Den Haag)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Voornamelijk oppervlaktewater (Rijn, Maas, IJsselmeer) als grondstof. Hogere
                chloorconcentraties noodzakelijk voor desinfectie van lang distributienet.
                Seizoensgebonden geosminegeur bij warm weer. <strong>Een koolstoffilter heeft hier de
                meeste toegevoegde waarde.</strong> Waterhardheid varieert van matig (Amsterdam ~8 dH)
                tot hard (Rotterdam ~12 dH).
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-green-100 text-green-800 rounded-full px-2 py-1">Chloorfilter: sterk aanbevolen</span>
                <span className="bg-amber-100 text-amber-800 rounded-full px-2 py-1">Ontharder: overweeg bij &gt;15 dH</span>
              </div>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Noord- en Oost-Nederland (Groningen, Drenthe, Gelderland)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Voornamelijk grondwater. Van nature laag in chloor en organische stoffen. Water wordt
                minder gechloorineerd en heeft een aangenamere smaak van nature. Waterhardheid is
                doorgaans lager (5&ndash;12 dH). <strong>Een koolstoffilter is hier minder noodzakelijk</strong>,
                maar verwijdert wel resterende chloor- en pesticideresten. Let op: in agrarische regio&apos;s
                kunnen nitraatniveaus verhoogd zijn &mdash; koolstoffilter helpt hier niet.
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-blue-100 text-blue-800 rounded-full px-2 py-1">Chloorfilter: optioneel</span>
                <span className="bg-red-100 text-red-800 rounded-full px-2 py-1">Nitraat: controleer jaarcijfers</span>
              </div>
            </div>
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-bold text-[#003F5C] mb-2">Zuid-Nederland (Zeeland, Noord-Brabant, Limburg)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Gemengd grond- en oppervlaktewater. Zeeland heeft het hardste leidingwater van Nederland
                (18&ndash;25 dH). Noord-Brabant heeft in agrarische gebieden verhoogde pesticide- en
                nitraatniveaus. <strong>Combinatie van koolstoffilter (smaak, pesticides) met ontharder
                (Zeeland) of RO (nitraatrisicogebieden) meest effectief.</strong>
              </p>
              <div className="flex gap-2 text-xs">
                <span className="bg-green-100 text-green-800 rounded-full px-2 py-1">Koolstoffilter: aanbevolen</span>
                <span className="bg-amber-100 text-amber-800 rounded-full px-2 py-1">Zeeland: ontharder noodzakelijk</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer over de samenstelling van kraanwater en regionale kwaliteitsverschillen leest u op de
            pagina{' '}
            <Link href="/kraanwater" className="text-[#005F8A] underline hover:no-underline">
              kraanwater kwaliteit in Nederland
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Sedimentfilter als voorfilter: waarom en wanneer?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            In een meertraps filtratiesysteem wordt een sedimentfilter als eerste trap geplaatst, voor
            het koolstoffilter. Een sedimentfilter (ook wel polypropyleenpatroon of PP-patroon)
            filtert mechanisch: het houdt vaste deeltjes groter dan 1&ndash;25 micron tegen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Waarom is een sedimentfilter als voorfilter nuttig:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>Langere levensduur koolstoffilter:</strong> Roest, zand en slib verstoppen de poriën van een koolstofblokfilter. Een sedimentfilter vangt deze deeltjes op en verlengt de levensduur van het koolstofpatroon aanzienlijk (soms factor 2&ndash;3).</li>
            <li><strong>Betere filtratieprestaties:</strong> Een schoon koolstoffilter zonder verstopping heeft langere effectieve contacttijd en hogere verwijderingspercentages.</li>
            <li><strong>Bescherming van RO-membraan:</strong> In een drie-traps systeem (sediment + koolstof + RO) beschermen beide voorfilters het dure RO-membraan tegen slijtage en chlooraantasting.</li>
            <li><strong>Lage kosten:</strong> Sedimentpatronen kosten EUR 2&ndash;5 per stuk en gaan 3&ndash;6 maanden mee. Een kleine investering die de duurdere patronen beschermt.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            In oudere woningen met verouderde leidingen (voor 1980) of in gebieden met hoge ijzerconcentraties
            in leidingwater is een sedimentfilter als voorfilter sterk aanbevolen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer over filtertechnologieen en combinaties leest u op de pagina{' '}
            <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] underline hover:no-underline">
              actief kool als filtertechniek
            </Link>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/koolstoffilter/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een koolstoffilter?</h3>
              <p className="text-sm text-gray-600">Adsorptiewetenschap achter actief kool: GAC vs blokfilter, poriestructuur en verwijderingspercentages.</p>
            </Link>
            <Link href="/kraanwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kraanwater in Nederland</h3>
              <p className="text-sm text-gray-600">Regionale waterkwaliteit, hardheid, chloorgebruik en hoe u uw eigen leidingwater kunt laten testen.</p>
            </Link>
            <Link href="/waterfilter/soorten" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Waterfilter soorten</h3>
              <p className="text-sm text-gray-600">Alle waterfiltertechnologieen vergeleken: koolstof, RO, UV, ionenwisselaar en ontharder.</p>
            </Link>
            <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool als filtertechniek</h3>
              <p className="text-sm text-gray-600">Diepgaande uitleg over actief kool: soorten, toepassingen en combinaties met andere technieken.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over koolstoffilter en leidingwater
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="border border-gray-100 rounded-xl p-4 group"
              >
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
