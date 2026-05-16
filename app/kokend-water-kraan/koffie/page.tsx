import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Optimaal water voor koffie: TDS, pH, hardheid en de beste waterfilter',
  description:
    'De Specialty Coffee Association adviseert water met TDS 75-150 mg/L, pH 6,5-7,5 en hardheid 50-175 mg/L CaCO3 voor perfecte espresso en filterkoffie. Leer hoe u uw kraanwater optimaliseert.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/koffie' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is de ideale TDS voor koffiezetten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De Specialty Coffee Association (SCA) adviseert een TDS (Total Dissolved Solids) van 75-150 mg/L voor koffiewater, met een optimum rond 150 mg/L. Bij een te lage TDS (onder 50 mg/L) is het water te zacht en treedt onderextractie op: het koffiezet-resultaat is flauw en wrang. Bij een te hoge TDS (boven 300 mg/L) kan overextractie optreden en smaakt koffie bitter of hard. Osmosewater (TDS &lt;20 mg/L) is zonder remineralisatie dus niet geschikt voor specialty coffee.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik osmosewater gebruiken voor mijn espressomachine?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puur osmosewater (TDS &lt;20 mg/L) is te zacht voor een espressomachine en kan corrosief zijn voor de boilercomponenten. Bovendien geeft het slechte smaakresultaten door onderextractie. De aanbevolen aanpak is osmose gecombineerd met een remineralisatiefilter (calciet/magnesiet cartridge). Dit brengt de TDS op 80-130 mg/L en de hardheid op 3-8 dH, ideaal voor specialty espresso. Vermijd onthard water (waterontharder) in de espressomachine vanwege het hoge natriumgehalte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een waterontharder goed voor koffie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, water van een ionenwisseling waterontharder is niet ideaal voor specialty coffee. Een waterontharder vervangt calcium en magnesium door natrium (117 mg Na per 20 dH verwijderd). De SCA-norm stelt het maximale natriumgehalte op 10 mg/L; onthard water overschrijdt dit ruimschoots. Bovendien missen espresso en filterkoffie zo de extractie-bevorderende werking van magnesium. Osmose plus remineralisatie is de betere oplossing voor koffiespecialisten in harde waterzones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke rol speelt magnesium in koffie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Magnesium speelt een bewezen rol bij de extractie van koffiearoma&apos;s. Wetenschappelijk onderzoek (Hendon et al., 2014, Journal of Agricultural and Food Chemistry) toont aan dat magnesiumionen de oplosbaarheid van koffiearomaverbindingen versterken meer dan calciumionen. Water met een relatief hoog magnesiumgehalte (optimaal 5-30 mg/L Mg) geeft koffie een levendiger aroma en meer fruitigheid. Dit is waarom bepaalde specialty water-recepten (zoals "Third Wave Water") een hogere Mg/Ca-verhouding hanteren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de beste brouwtemperatuur voor espresso en pour-over?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De SCA adviseert voor espresso een watertemperatuur van 90-96 graden Celsius (optimum 92-94 graden). Voor pour-over en filterkoffie is de aanbevolen range 85-92 graden. Een kokend water kraan levert water op een instelbare temperatuur en vermijdt het probleem van herhaald opkoken, waarbij het zuurstofgehalte daalt en de koffie vlakker smaakt. Consistente watertemperatuur zorgt voor reproduceerbare extractie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe verwijder ik chloor uit kraanwater voor koffie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chloor vernietigt koffiearoma&apos;s significant. De meest effectieve methode is een actief koolfilter (kraanfilter of filterkan): dit verwijdert 99%+ van het vrije chloor. Een kraanfilter zoals de TAPP 2 is NSF/ANSI-gecertificeerd voor chloorverwijdering. Alternatieven: water 30 minuten laten staan verwijdert chloor gedeeltelijk (50-70% bij koud water, nagenoeg volledig bij warm water). Koken verwijdert chloor volledig maar vermindert ook het zuurstofgehalte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Amsterdams of Rotterdams kraanwater goed voor koffie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Amsterdam (7 dH, TDS circa 200 mg/L) en Rotterdam (8 dH, 142 mg/L CaCO3) hebben kraanwater dat na chloorfiltratie acceptabel is voor specialty koffie. De hardheid zit aan de onderkant van de SCA-range, maar de TDS is iets hoog. Een eenvoudig actief koolfilter om chloor te verwijderen volstaat voor Amsterdam en Rotterdam. Voor de meest verfijnde smaakresultaten is alsnog osmose + remineralisatie te verkiezen, maar in de praktijk is Amsterdams kraanwater prima koffiewater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Mag ik water van buiten de SCA-norm gebruiken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absoluut. De SCA-norm is een richtlijn voor specialty coffee en niet een absolute grens. Veel koffiedrinkers prefereren water met iets hogere hardheid dan de SCA adviseert; dit geeft koffie meer body en een vollere smaak. Omgekeerd prefereren sommige specialisten zacht water (lage TDS) voor delicate lichte branding. Experimenteer met uw eigen water: de "juiste" koffie is uiteindelijk de koffie die u zelf het lekkerst vindt. De SCA-norm geeft een goed startpunt voor consistente specialty resultaten.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Optimaal water voor koffie: TDS, pH, hardheid en de beste waterfilter',
  description:
    'De Specialty Coffee Association adviseert water met TDS 75-150 mg/L, pH 6,5-7,5 en hardheid 50-175 mg/L CaCO3 voor perfecte espresso en filterkoffie.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/kokend-water-kraan/koffie',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function KoffieWaterPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Kokend water kraan', item: 'https://waterfilterplatform.nl/kokend-water-kraan' },
              { '@type': 'ListItem', position: 3, name: 'Water voor koffie', item: 'https://waterfilterplatform.nl/kokend-water-kraan/koffie' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/kokend-water-kraan" className="hover:underline">Kokend water kraan</Link> &rsaquo;{' '}
          <span>Water voor koffie</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Optimaal water voor koffie: TDS, pH, hardheid en de beste waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Koffie bestaat voor 98% uit water. De waterkwaliteit bepaalt grotendeels de smaak,
            het aroma en de extractie. De Specialty Coffee Association (SCA) heeft wetenschappelijk
            onderbouwde waterkwaliteitsnormen vastgesteld. Ontdek hoe uw kraanwater scoort en
            welk filter u het beste resultaat geeft.
          </p>
        </section>

        <QuickAnswer answer="De SCA adviseert koffiewater met TDS 75-150 mg/L, hardheid 50-175 mg/L CaCO3, pH 6,5-7,5 en 0 mg/L chloor. Nederlands kraanwater in Amsterdam en Rotterdam is na chloorfiltratie acceptabel. In Eindhoven en Limburg is het water te hard: osmose plus remineralisatie geeft het beste resultaat." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De SCA-waterkwaliteitsnorm voor koffie
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>Specialty Coffee Association (SCA)</strong> heeft op basis van sensorisch
          onderzoek en extractiemetingen een gedetailleerde waterkwaliteitsnorm voor koffiezetten
          opgesteld. Deze norm is de wereldwijde referentie voor barista&apos;s en
          koffie-specialisten:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Doel (optimum)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Acceptabele range</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">TDS (opgeloste stoffen)</td>
                <td className="border border-gray-300 px-3 py-2">150 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">75&ndash;250 mg/L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Hardheid (CaCO3)</td>
                <td className="border border-gray-300 px-3 py-2">68 mg/L (4 dH)</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;175 mg/L (3&ndash;10 dH)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Vrij chloor</td>
                <td className="border border-gray-300 px-3 py-2">0 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">0 mg/L (geen chloor)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Natrium (Na)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">&lt;30 mg/L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">pH</td>
                <td className="border border-gray-300 px-3 py-2">7,0</td>
                <td className="border border-gray-300 px-3 py-2">6,5&ndash;7,5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Bicarbonaat (buffer)</td>
                <td className="border border-gray-300 px-3 py-2">40&ndash;75 mg/L als CaCO3</td>
                <td className="border border-gray-300 px-3 py-2">40&ndash;75 mg/L als CaCO3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Geur / smaak</td>
                <td className="border border-gray-300 px-3 py-2">Vrij van afwijkingen</td>
                <td className="border border-gray-300 px-3 py-2">Vrij van afwijkingen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom water zo belangrijk is voor koffie
        </h2>
        <p className="text-gray-700 mb-4">
          Een espresso bestaat voor <strong>98-99% uit water</strong>; filterkoffie zelfs voor
          98,5%. Dat maakt water tot verreweg het dominante ingredient in elk kopje koffie.
          De mineralen in water beinvloeden de extractie op moleculair niveau:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Magnesium (Mg2+):</strong> bevordert de oplosbaarheid van koffiearomaverbindingen
            meer dan calcium. Wetenschappelijk onderzoek gepubliceerd in het Journal of Agricultural
            and Food Chemistry (Hendon et al.) toont aan dat magnesiumreich water de extractie van
            fruitige en bloemige aroma&apos;s versterkt. Het optimum ligt bij 5-30 mg/L magnesium.
          </li>
          <li>
            <strong>Calcium (Ca2+):</strong> versterkt de bitterheid en body van koffie. Te veel
            calcium (boven 175 mg/L CaCO3) leidt tot overextractie en een harde, bittere smaak.
            Calcium slaat ook neer als kalk bij verhitting, wat espressomachines beschadigt.
          </li>
          <li>
            <strong>Bicarbonaat (HCO3-):</strong> fungeert als buffer en neutraliseert de zuren
            in koffie. Bij te laag bicarbonaat (onder 40 mg/L) is de koffie te zuur en wrang.
            Bij te hoog bicarbonaat (boven 150 mg/L) worden koffiezuren geneutraliseerd en mist
            de koffie levendigheid en complexiteit.
          </li>
          <li>
            <strong>Chloor:</strong> vernietig koffie-aroma&apos;s direct door oxidatie van vluchtige
            aromaverbindingen. Zelfs 0,1 mg/L vrij chloor is aantoonbaar in de geur. De SCA stelt
            de chlooreis op 0 mg/L: verwijder chloor altijd voor u koffiezet.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nederlands kraanwater vs. SCA-standaard: per stad
        </h2>
        <p className="text-gray-700 mb-4">
          Hoe scoort Nederlands kraanwater ten opzichte van de SCA-norm? De hardheid en TDS
          varieren sterk per regio:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Stad</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Hardheid</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">CaCO3 mg/L</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">SCA-oordeel</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Advies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Amsterdam</td>
                <td className="border border-gray-300 px-3 py-2">7 dH</td>
                <td className="border border-gray-300 px-3 py-2">124 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Acceptabel</td>
                <td className="border border-gray-300 px-3 py-2">Chloor verwijderen volstaat</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Rotterdam</td>
                <td className="border border-gray-300 px-3 py-2">8 dH</td>
                <td className="border border-gray-300 px-3 py-2">142 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700">Prima</td>
                <td className="border border-gray-300 px-3 py-2">Chloor verwijderen volstaat</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Den Haag</td>
                <td className="border border-gray-300 px-3 py-2">9 dH</td>
                <td className="border border-gray-300 px-3 py-2">160 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Grenswaarde</td>
                <td className="border border-gray-300 px-3 py-2">Chloor en TDS verminderen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Utrecht</td>
                <td className="border border-gray-300 px-3 py-2">12 dH</td>
                <td className="border border-gray-300 px-3 py-2">214 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700">Grens hoog</td>
                <td className="border border-gray-300 px-3 py-2">Filterkan of kraanfilter</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Eindhoven</td>
                <td className="border border-gray-300 px-3 py-2">18 dH</td>
                <td className="border border-gray-300 px-3 py-2">320 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Te hard</td>
                <td className="border border-gray-300 px-3 py-2">Osmose + remineralisatie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Limburg</td>
                <td className="border border-gray-300 px-3 py-2">25 dH</td>
                <td className="border border-gray-300 px-3 py-2">445 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700">Definitief te hard</td>
                <td className="border border-gray-300 px-3 py-2">Osmose + remineralisatie vereist</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosewater + remineralisatie: de beste oplossing voor koffie
        </h2>
        <p className="text-gray-700 mb-4">
          Voor bewoners in harde watergebieden (Eindhoven, Limburg, Noord-Brabant) is puur kraanwater
          niet geschikt voor specialty koffie. De beste oplossing is een combinatie van osmosefilter
          en remineralisatiefilter:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Osmosestap:</strong> het osmosemembraan verwijdert 95-99% van alle opgeloste
            stoffen, waaronder calcium, magnesium, chloor, PFAS en zware metalen. Het geproduceerde
            water heeft een TDS van minder dan 20 mg/L &mdash; te laag voor goede koffie.
          </li>
          <li>
            <strong>Remineralisatiestap:</strong> een calciet/magnesiet-cartridge (of een specifieke
            koffiewater-remineralisatiefilter) voegt gecontroleerd calcium en magnesium toe. De
            doelwaarden zijn TDS 80-130 mg/L, hardheid 4-8 dH (70-142 mg/L CaCO3), met een hogere
            Mg/Ca-verhouding dan standaard kraanwater. Dit geeft optimale aroma-extractie.
          </li>
        </ol>
        <p className="text-gray-700 mb-6">
          Meer over dit thema op onze pagina&apos;s over{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>{' '}
          en osmosewater remineraliseren. Een{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan</Link>{' '}
          met geintegreerd filter levert direct gefilterd water op koffietemperatuur zonder
          herhaalbaar opkoken.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kokend water kraan: voordeel voor consistente koffie
        </h2>
        <p className="text-gray-700 mb-4">
          Een kokend water kraan (zoals een Quooker of PureAqua-systeem) heeft specifieke
          voordelen voor koffiezetten:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Exacte temperatuurcontrole:</strong> u kunt water instellen op 92-96 graden
            (espresso) of 85-92 graden (pour-over/filterkoffie) zonder te raden of opnieuw te meten.
          </li>
          <li>
            <strong>Geen herhaalbaar opkoken:</strong> water dat herhaaldelijk wordt gekookt verliest
            zuurstof en CO2, wat koffie vlakker en minder levendig maakt. Een kokend water kraan
            levert vers, eenmalig verhit water.
          </li>
          <li>
            <strong>Consistentie:</strong> dezelfde watertemperatuur bij elk kopje zorgt voor
            reproduceerbare extractie, essentieel voor barista&apos;s en koffieliefhebbers die
            hun receptuur verfijnen.
          </li>
          <li>
            <strong>Geintegreerd filter:</strong> veel kokend water kranen hebben een ingebouwd
            actief koolfilter dat chloor en geur verwijdert, of zijn aan te sluiten op een
            osmosesysteem voor volledige waterkwaliteitscontrole.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloor verwijderen voor betere koffie
        </h2>
        <p className="text-gray-700 mb-4">
          Nederlands leidingwater bevat 0,1-0,3 mg/L vrij chloor als desinfectans. Dit is voor
          de drinkwaterveiligheid essentieel, maar voor koffie rampzalig: chloor oxideert
          vluchtige aromaverbindingen in de koffie en geeft een zwembad-achtige bijsmaak.
          Drie methoden om chloor te verwijderen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Actief koolfilter (aanbevolen):</strong> een kraanfilter (TAPP 2, BWT, Aqua
            Optima) of filterkan (BRITA, PearlCo) verwijdert 99%+ van het vrije chloor via
            adsorptie aan actief kool. Dit is de snelste en meest effectieve methode.
          </li>
          <li>
            <strong>Water laten staan:</strong> 30 minuten op kamertemperatuur vermindert het
            chloor met 50-70%. Bij warm water of roeren gaat het sneller. Deze methode is gratis
            maar onpraktisch voor dagelijks gebruik.
          </li>
          <li>
            <strong>Koken:</strong> koken verwijdert chloor volledig (verdamping), maar vermindert
            ook het zuurstofgehalte. Herhaalbaar opkoken is om meerdere redenen af te raden.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterontharder en koffie: waarom dat niet werkt
        </h2>
        <p className="text-gray-700 mb-6">
          Een ionenwisseling waterontharder is een veelgebruikte oplossing voor harde waterproblemen,
          maar is niet geschikt als basis voor specialty koffiewater. De reden: bij ionenwisseling
          worden calcium- en magnesiumionen vervangen door natriumionen. Per 20 dH verwijderd komt
          er circa 117 mg/L natrium in het water. De SCA-norm stelt het maximum op 10 mg/L natrium.
          Onthard water in hard-watergebieden bevat dus 5-15 keer meer natrium dan de SCA-norm
          toestaat. Naast het natriumprobleem mist onthard water de extractie-bevorderende werking
          van magnesium. De juiste oplossing voor harde waterzones is osmose + remineralisatie,
          niet een waterontharder voor het koffiewater. Meer informatie vindt u op onze pagina over{' '}
          <Link href="/leidingwater/hard-water" className="text-[#005F8A] underline">hard water behandeling</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over water voor koffie
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
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan vergelijken</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose voor drinkwater</Link>,{' '}
          <Link href="/leidingwater/hard-water" className="text-[#005F8A] underline">hard water behandeling</Link> en{' '}
          <Link href="/waterfilter/tds" className="text-[#005F8A] underline">TDS meten in kraanwater</Link>.
        </p>
      </main>
    </>
  );
}
