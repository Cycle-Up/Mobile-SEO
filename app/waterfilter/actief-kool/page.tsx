import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Actief koolfilter: GAC vs CTO vs blokfilter, werking en levensduur',
  description:
    'Een actief koolfilter verwijdert chloor, geur en organische verontreinigingen via adsorptie. Granular (GAC) vs blokfilter (CTO) vs catalytic carbon.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/actief-kool' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een GAC- en een CTO-blokfilter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GAC (Granular Activated Carbon) bestaat uit losse koolkorrels in een cartridge. Het haalt een hoog debiet (8-15 L/min) maar heeft een kortere contacttijd en daardoor een lagere adsorptiecapaciteit per liter water. Een CTO-blokfilter is gecompacteerd kool met bindmiddel; het debiet is lager (2-4 L/min) maar de contacttijd is langer, waardoor chloor en organische stoffen veel beter worden verwijderd. CTO werkt bovendien mechanisch tot 1-5 micron.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt actief kool tegen chlooramine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard actief kool werkt slecht tegen chlooramine omdat de binding sterker is dan bij vrij chloor. Catalytic carbon, een variant met katalytische oppervlaktesites, is wel effectief en haalt 60-95% verwijdering afhankelijk van contacttijd en concentratie. Als uw watermaatschappij chlooramine gebruikt voor desinfectie, kies dan expliciet een catalytic-carbon-cartridge in plaats van een standaard GAC- of CTO-filter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een actief koolfilter mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De levensduur hangt af van het type en het waterverbruik. Een GAC-voorfilter gaat doorgaans 3-6 maanden mee bij een gemiddeld huishouden. Een CTO-blokfilter haalt 6-12 maanden of 6.000-10.000 liter. Een catalytic-carbon-cartridge gaat 6-12 maanden mee. Vervang altijd op basis van het eerste signaal: chloorgeur of -smaak die terugkomt in het water, een sterk verminderd debiet, of de door de fabrikant opgegeven literage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat verwijdert een actief koolfilter wel en niet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actief kool verwijdert chloor (meer dan 99% in CTO-blokken), trihalomethanen, pesticiden, herbiciden, organische oplosmiddelen, geosmien en MIB (aardse geuren), en gedeeltelijk PFAS. Het verwijdert NIET: opgeloste mineralen zoals calcium en magnesium, hardheid, nitraat, nitriet, fluoride, opgeloste zware metalen (slechts deels), bacterien en virussen. Voor die verontreinigingen zijn osmose, ionenwisseling of UV-desinfectie nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe effectief is actief kool tegen PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actief kool verwijdert 30-70% van PFAS, afhankelijk van het type kool en de specifieke PFAS-verbinding. Lange-keten PFAS (zoals PFOA en PFOS) worden beter geadsorbeerd dan korte-keten varianten. Voor effectieve PFAS-verwijdering boven 95% is omgekeerde osmose of ionenwisseling met speciale anion-uitwisselharsen nodig. Combineer een CTO-blok als voorfilter met een osmosemembraan voor maximale PFAS-reductie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Heb ik een actief koolfilter nodig voor mijn osmosesysteem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een actief koolvoorfilter is essentieel in een osmosesysteem. Chloor uit leidingwater tast het RO-membraan aan; een voorfilter beschermt het membraan en verlengt de levensduur van 2-3 jaar naar 3-5 jaar. Daarnaast wordt een post-actief-kool-cartridge gebruikt na het membraan om de smaak van het permeaat te verbeteren. Beide cartridges samen kosten 20-40 euro en gaan ongeveer 6-12 maanden mee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een eigen merk koolfilter even goed als een A-merk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Niet altijd. A-merken zoals Pentair, Aquaphor en 3M gebruiken kwalitatief hoogwaardige kokoskool met gecontroleerde poriestructuur en behalen consequent hogere adsorptiecapaciteit. Goedkope huismerken gebruiken soms minder zuivere kool of overdrijven de literage. Let bij vergelijking op NSF/ANSI 42- en 53-certificering en de opgegeven literage. Een gecertificeerd huismerk is meestal prima; een ongetest budgetfilter kan al na 1.000 liter verzadigd zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waar wordt actief kool van gemaakt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Actief kool wordt geproduceerd uit organisch materiaal met een hoog koolstofgehalte. De meest voorkomende grondstoffen zijn kokosnootschillen (geeft de hoogste microporeuze structuur, beste smaak), steenkool of bruinkool (goedkoop, brede toepassing), hout (matige kwaliteit) en in sommige professionele toepassingen runderbot. Kokoskool wordt algemeen beschouwd als de beste keuze voor drinkwaterfilters vanwege de massieve specifieke oppervlakte van 1.100-1.500 m2 per gram.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Actief koolfilter: GAC vs CTO vs blokfilter, werking en levensduur',
  description:
    'Een actief koolfilter verwijdert chloor, geur en organische verontreinigingen via adsorptie. GAC, CTO en catalytic carbon vergeleken op rendement en.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/actief-kool',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function ActiefKoolPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Actief koolfilter', item: 'https://waterfilterplatform.nl/waterfilter/actief-kool' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterfilter" className="hover:underline">Waterfilter</Link> &rsaquo;{' '}
          <span>Actief koolfilter</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Actief koolfilter: GAC vs CTO vs blokfilter, werking en levensduur
          </h1>
          <p className="text-[#005F8A] text-lg">
            Actief kool is de meest gebruikte filtertechniek voor drinkwater wereldwijd. Het verwijdert
            chloor, smaak- en geurstoffen, pesticiden en gedeeltelijk PFAS via adsorptie aan een
            massief inwendig oppervlak. Maar er bestaan grote verschillen tussen GAC-, CTO- en
            catalytic-carbon-cartridges in rendement, debiet en levensduur.
          </p>
        </section>

        <QuickAnswer answer="Een actief koolfilter verwijdert chloor, geur, organische stoffen en deels PFAS via adsorptie. GAC heeft een hoog debiet maar lager rendement; CTO-blokfilters zijn effectiever en mechanisch fijner (1-5 micron); catalytic carbon werkt ook tegen chlooramine. Levensduur: 3-12 maanden afhankelijk van type en verbruik." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is actief kool?
        </h2>
        <p className="text-gray-700 mb-4">
          Actief kool is koolstof met een enorme specifieke oppervlakte van 500 tot 1.500 vierkante
          meter per gram, gerealiseerd door een fijne poriestructuur. De grondstoffen verschillen per
          toepassing: kokosnootschillen leveren de fijnste microporieen en de beste smaak, steenkool
          en bruinkool zijn goedkoper en breder toepasbaar, hout wordt soms voor industriele filtratie
          gebruikt en in zeer specifieke toepassingen wordt zelfs runderbot tot kool gecarboniseerd.
        </p>
        <p className="text-gray-700 mb-6">
          Actief kool werkt op twee manieren tegelijk. <strong>Fysische adsorptie</strong> hecht
          stoffen aan het kooloppervlak via Van der Waals-krachten &mdash; vooral effectief voor
          organische verbindingen met een lage polariteit. <strong>Chemisorptie</strong> betreft
          chemische reacties op het kooloppervlak; bij catalytic carbon worden zo chloor en
          chlooramine actief afgebroken. Beide mechanismen samen verklaren waarom kool zo veelzijdig is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          GAC: granular activated carbon
        </h2>
        <p className="text-gray-700 mb-4">
          GAC bestaat uit losse koolkorrels van 0,5 tot 2 mm die los in een cartridge zitten. Water
          stroomt langs en door de korrels heen. Het grootste voordeel is het hoge debiet: 8 tot 15
          liter per minuut zonder noemenswaardige drukval. Daardoor wordt GAC vaak gekozen als
          voorfilter in inline-toepassingen, koelkastfilters en woninginstallaties met meerdere tappunten.
        </p>
        <p className="text-gray-700 mb-6">
          De keerzijde is dat de contacttijd tussen water en kool relatief kort is. Daardoor is de
          verwijderingseffectiviteit lager dan bij een blokfilter en is er bovendien een risico op
          kanaalvorming: water vindt een snelweg langs de korrels en passeert grotendeels ongefilterd.
          GAC-cartridges zijn goedkoop (5-15 euro), maar de levensduur is met 3 tot 6 maanden ook korter.
          Toepassing: smaak- en geurverbetering, voorfilter, ruwfiltratie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          CTO: carbon block of blokfilter
        </h2>
        <p className="text-gray-700 mb-4">
          Een CTO-blokfilter (Chlorine, Taste, Odor) bestaat uit gecompacteerde koolkorrels die met
          een polymeer bindmiddel tot een vaste cilinder zijn samengeperst. Het water moet door deze
          massieve kool heen stromen, wat het debiet beperkt tot 2-4 liter per minuut, maar de
          contacttijd vele malen verlengt. Hierdoor stijgt de adsorptiecapaciteit drastisch.
        </p>
        <p className="text-gray-700 mb-6">
          Daarnaast werkt een blokfilter ook mechanisch: typische filterklassen liggen tussen 1 en 5
          micron, vergelijkbaar met een sedimentfilter. Sediment, roest en grovere deeltjes worden
          dus tegelijk afgevangen. Een CTO haalt meer dan 99% chloorverwijdering en is daardoor de
          standaardkeuze voor een serieuze drinkwaterfilter onder het aanrecht, als post-filter na
          een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmose-installatie</Link>,
          en voor toepassingen waarbij smaak en geur cruciaal zijn. Levensduur: 6-12 maanden of
          6.000-10.000 liter, prijs 15-40 euro.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Catalytic carbon: voor chlooramine en sulfide
        </h2>
        <p className="text-gray-700 mb-4">
          Catalytic carbon is actief kool dat door een aanvullende thermische behandeling extra
          katalytische sites op het oppervlak heeft gekregen. Deze sites bevorderen chemische
          oxidatie-reductie-reacties, waardoor stoffen worden afgebroken die met gewone adsorptie
          slecht worden verwijderd: <strong>chlooramine</strong> (NH2Cl), waterstofsulfide (H2S, de
          rotteneierengeur) en in beperkte mate opgelost ijzer.
        </p>
        <p className="text-gray-700 mb-6">
          Standaard actief kool werkt slecht tegen chlooramine: de stikstof-chloorbinding is sterk en
          adsorbeert traag. Catalytic carbon haalt 60-95% verwijdering bij voldoende contacttijd.
          Steeds meer Nederlandse watermaatschappijen overwegen of gebruiken chlooramine omdat het
          stabieler is dan vrij chloor in lange leidingnetten. Controleer bij uw leverancier of er
          chlooramine wordt toegepast &mdash; zo ja, dan is catalytic carbon de juiste keuze in plaats
          van een gewoon CTO-blok. Zie ook <Link href="/leidingwater/chlooramine" className="text-[#005F8A] underline">chlooramine in leidingwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat verwijdert actief kool wel?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Chloor:</strong> meer dan 99% in een CTO-blok, 70-95% in een GAC-filter</li>
          <li><strong>Trihalomethanen (THM):</strong> chloreringsbijproducten zoals chloroform, 80-95%</li>
          <li><strong>Pesticiden en herbiciden:</strong> atrazine, glyfosaat-afbraakproducten, 90%+</li>
          <li><strong>Organische oplosmiddelen:</strong> benzeen, tolueen, TCE, 85-99%</li>
          <li><strong>Geur- en smaakstoffen:</strong> geosmien en MIB (aardse en muffe geuren), bijna volledig</li>
          <li><strong>PFAS:</strong> 30-70% afhankelijk van keten-lengte; lange keten beter</li>
          <li><strong>Medicijnresten:</strong> deels, vooral lipofiele verbindingen</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat verwijdert actief kool NIET?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Opgeloste mineralen:</strong> calcium, magnesium, natrium &mdash; voor hardheid is een <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder</Link> nodig</li>
          <li><strong>Nitraat en nitriet:</strong> voor nitraatverwijdering is osmose of anion-uitwisseling nodig</li>
          <li><strong>Fluoride:</strong> alleen speciale activated alumina of osmose</li>
          <li><strong>Opgeloste zware metalen:</strong> slechts deels; voor lood, arseen en uranium is osmose noodzakelijk</li>
          <li><strong>Bacterien en virussen:</strong> geen desinfectie; gebruik UV of ultrafiltratie</li>
          <li><strong>Hardheid:</strong> wordt niet beinvloed door kool</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Levensduur en vervangsignalen
        </h2>
        <p className="text-gray-700 mb-4">
          De levensduur van een actief koolfilter wordt bepaald door drie factoren: het totaal
          gefilterde volume, de concentratie verontreinigingen en de gemiddelde contacttijd. Op het
          etiket staat doorgaans een totale literage (bijvoorbeeld 6.000 liter) en een tijdslimiet
          (6-12 maanden). De eerste van die twee die wordt bereikt is bepalend.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Chloorgeur of -smaak komt terug in het gefilterde water</li>
          <li>Filterhuis kleurt sterk donker (kan duiden op verzadiging of bacteriegroei)</li>
          <li>Debiet daalt merkbaar door dichtgeslibde mechanische filtratie</li>
          <li>Eindlimiet op cartridge bereikt (bijvoorbeeld 6.000 of 10.000 liter)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Combinatie met omgekeerde osmose
        </h2>
        <p className="text-gray-700 mb-6">
          In een osmosesysteem speelt actief kool een dubbele rol. Als <strong>voorfilter</strong>
          beschermt een GAC- of CTO-cartridge het RO-membraan tegen chloor; het dunne polyamide-laagje
          van het membraan wordt door chloor in enkele weken aangetast en het systeem verliest dan
          zijn rendement. Het voorfilter verlengt de levensduur van het membraan van gemiddeld 2-3
          jaar naar 3-5 jaar. Als <strong>postfilter</strong> verbetert een laatste koolcartridge de
          smaak van het permeaatwater; osmosewater kan een licht-zoetige bijsmaak hebben die door
          een carbon-polish wordt geneutraliseerd. Lees meer over <Link href="/omgekeerde-osmose/smaak" className="text-[#005F8A] underline">osmosewater smaak verbeteren</Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Filtertechnieken: actief kool</h3>
            <p className="text-sm text-gray-600">Hoe werkt actief koolfiltratie en wanneer past het bij jouw situatie?</p>
          </Link>
          <Link href="/waterfilter/chloor-verwijderen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Chloor verwijderen uit leidingwater</h3>
            <p className="text-sm text-gray-600">Welke methoden verwijderen chloor effectief uit kraanwater?</p>
          </Link>
          <Link href="/onderhoud/koolstoffilter-levensduur" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Onderhoud: koolstoffilter levensduur</h3>
            <p className="text-sm text-gray-600">Hoe lang gaat een koolstoffilter mee en wanneer moet je hem vervangen?</p>
          </Link>
          <Link href="/vergelijken/osmose-vs-filterkan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Osmose vs filterkan</h3>
            <p className="text-sm text-gray-600">Wat zijn de voor- en nadelen van een osmosefilter ten opzichte van een filterkan?</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over actief koolfilters
          </h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/waterfilter/chloor-verwijderen" className="text-[#005F8A] underline">chloor verwijderen uit leidingwater</Link>,{' '}
          <Link href="/waterfilter/pfas" className="text-[#005F8A] underline">PFAS waterfilter</Link>,{' '}
          <Link href="/waterfilter/osmose-vs-koolstof" className="text-[#005F8A] underline">osmose vs koolstoffilter</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>
      </main>
    </>
  );
}
