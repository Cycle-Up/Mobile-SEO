import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: "Pesticiden in drinkwater: risico's, normen en waterfilter",
  description:
    'Pesticiden in drinkwater komen van landbouw en tuingebruik. EU-norm per stof: 0,1 microgram per liter. In NL regelmatig overschreden in grondwater. Osmosefilter verwijdert 85-99% van pesticiden.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/pesticiden' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor pesticiden in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU Drinkwaterrichtlijn (2020/2184) stelt een maximum van 0,1 microgram per liter (µg/L) per individueel pesticide en 0,5 µg/L voor de som van alle pesticiden. Dit is een voorzorgsnorm gebaseerd op het voorzorgsbeginsel, niet op een toxicologisch vastgesteld veilig niveau. Het is een van de strengste pesticidenormen ter wereld.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke pesticiden worden het meest gevonden in Nederlands drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uit RIVM-monitoringsrapporten komen regelmatig terug: chloridazon en zijn metaboliet desphenyl-chloridazon (suikerbietenteelt), AMPA (afbraakproduct van glyfosaat), bentazon (peulvruchten), metazachloor en diuron. Atrazine is al decennia verboden maar wordt nog steeds aangetroffen in diep grondwater vanwege de hoge persistentie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter pesticiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Een osmosefilter verwijdert 85-99% van de meeste pesticiden via membraanfiltratie op 0,0001 micron. RO-membranen gecertificeerd volgens NSF 58 zijn getest op specifieke pesticiden. Het percentage hangt af van de molecuulgrootte en polariteit van het pesticide: grotere, minder polaire moleculen worden beter tegengehouden dan kleine, polaire stoffen zoals glyfosaat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een actief koolfilter tegen pesticiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een actief koolblokfilter (NSF 42/53) verwijdert 70-95% van de meeste pesticiden via adsorptie. Grotere, minder polaire pesticiden zoals atrazine en metolachloor worden goed geadsorbeerd. Kleine, polaire moleculen zoals glyfosaat en AMPA worden minder effectief tegengehouden door actief kool. Granulair actief kool (GAC) presteert doorgaans minder dan koolblokfilters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Zijn pesticiden in Nederlands drinkwater gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij niveaus in leidingwater die voldoen aan de EU-norm is het directe risico beperkt. Drinkwaterbedrijven mogen niet leveren boven de norm en zijn verplicht extra zuivering toe te passen of alternatieve bronnen te gebruiken. Bij langdurige blootstelling aan bepaalde pesticiden zijn er risicos op hormoonverstoring, carcinogeniteit (IARC groep 2A/2B) en neurotoxiciteit. EFSA en WHO beoordelen elke stof individueel.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welke Nederlandse regioos zijn pesticiden in grondwater een probleem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intensieve landbouwgebieden hebben het hoogste risico: Noord-Brabant (suikerbieten, aardappelen), Limburg (fruitteelt, groenten), Friesland en Groningen (akkerbouw), Zeeland (aardappelen, uien). Volgens het RIVM-rapport uit 2024 werden in 15% van de grondwaterpompen in Nederland pesticidennormen overschreden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een filterkan (Brita) tegen pesticiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Filterkannen zijn niet gecertificeerd voor pesticidenreductie en bieden onvoldoende zekerheid. De beperkte hoeveelheid koolstof, de korte contacttijd en het ontbreken van NSF-certificering voor pesticiden maken ze ongeschikt als primaire oplossing voor pesticidenverwijdering. Filterkannen zijn meer geschikt voor smaak- en geurverbetering.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert UV-water pesticiden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee. UV-behandeling vernietigt micro-organismen via ultraviolet licht maar heeft geen effect op chemische verontreinigingen zoals pesticiden. Pesticiden zijn geen biologische organismen en worden niet afgebroken door UV-straling bij de doseringen die in thuisfilters worden gebruikt. UV is alleen effectief gecombineerd met osmose of actief kool voor een compleet filter.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: "Pesticiden in drinkwater: risico's, normen en waterfilter",
  description:
    'Pesticiden in drinkwater komen van landbouw en tuingebruik. EU-norm per stof: 0,1 microgram per liter. In NL regelmatig overschreden in grondwater. Osmosefilter verwijdert 85-99% van pesticiden.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/pesticiden',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterPesticidenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Pesticiden in drinkwater', item: 'https://waterfilterplatform.nl/waterfilter/pesticiden' },
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
          <span>Pesticiden in drinkwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Pesticiden in drinkwater: risico&apos;s, normen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Pesticiden bereiken drinkwaterbronnen via uitspoeling uit landbouw- en tuingronden.
            De EU-norm is 0,1 µg/L per stof &mdash; een van de strengste ter wereld. In Nederland
            worden deze normen in 15% van de grondwaterpompen overschreden. Een osmosefilter
            verwijdert 85-99% van pesticiden en biedt de beste bescherming thuis.
          </p>
        </section>

        <QuickAnswer answer="Pesticiden in drinkwater komen van landbouw en tuingebruik. EU-norm is 0,1 µg/L per stof en 0,5 µg/L totaal. In NL worden normen in 15% van grondwaterpompen overschreden, met name in Brabant, Limburg en Groningen. Een osmosefilter (NSF 58) verwijdert 85-99% van pesticiden, afhankelijk van molecuulgrootte." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zijn pesticiden?
        </h2>
        <p className="text-gray-700 mb-4">
          Pesticiden zijn synthetische of biologische chemicalieen die worden gebruikt om ongewenste
          organismen te bestrijden in de landbouw, tuinbouw en openbaar groen. Ze vallen uiteen
          in drie hoofdcategorieen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Herbiciden (onkruidverdelgers):</strong> de grootste categorie. Voorbeelden zijn
            glyfosaat (Roundup), bentazon, chloridazon en metazachloor. Worden grootschalig
            ingezet in akkerbouw en openbaar groenonderhoud.
          </li>
          <li>
            <strong>Insecticiden:</strong> bestrijden insecten. Neonicotinoiden zoals imidacloprid
            staan onder grote druk vanwege bijsterfte en persistentie in het milieu.
          </li>
          <li>
            <strong>Fungiciden:</strong> schimmelbestrijders. Veel gebruikt in de fruitteelt en
            glastuinbouw. Sommige fungiciden zijn hormoonverstorend (endocriene disruptors).
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Via neerslag en irrigatie spoelen pesticiden uit de bodem naar grond- en oppervlaktewater.
          Drinkwaterbedrijven gebruiken dat grondwater als bron. Bodempassage filtert veel stoffen,
          maar persistente pesticiden en hun afbraakproducten (metabolieten) bereiken uiteindelijk
          de waterwinpunten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-drinkwaternorm: 0,1 µg/L per stof
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU Drinkwaterrichtlijn 2020/2184</strong> stelt voor pesticiden een van de
          strengste normen ter wereld:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>0,1 µg/L</strong> (microgram per liter) per individueel pesticide of metaboliet
          </li>
          <li>
            <strong>0,5 µg/L</strong> voor de som van alle pesticiden samen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Deze norm is gebaseerd op het <em>voorzorgsbeginsel</em>, niet op een toxicologisch
          afgeleid veilig niveau. Toxicologen wijzen er op dat voor hormoonverstorende stoffen
          de norm mogelijk onvoldoende bescherming biedt, omdat sommige endocriene disruptors
          al bij extreem lage concentraties biologisch actief zijn.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nederlandse situatie: RIVM 2024
        </h2>
        <p className="text-gray-700 mb-4">
          Het RIVM publiceerde in 2024 dat in <strong>15% van de grondwaterpompen</strong> in
          Nederland pesticidenormen worden overschreden. Drinkwaterbedrijven zijn wettelijk
          verplicht om bij overschrijding een alternatieve bron te gebruiken of extra
          zuiveringsstappen toe te passen. De meest getroffen provincies zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Noord-Brabant:</strong> chloridazon-metabolieten (suikerbietenteelt), AMPA</li>
          <li><strong>Limburg:</strong> fungiciden uit fruitteelt, bentazon</li>
          <li><strong>Friesland en Groningen:</strong> herbiciden uit akkerbouw</li>
          <li><strong>Zeeland:</strong> aardappel- en uienteelt, metazachloor</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Meest gevonden pesticiden en metabolieten in NL grondwater: <strong>chloridazon</strong> en
          zijn persistente metaboliet <strong>desphenyl-chloridazon</strong> (suikerbietenteelt),
          <strong> AMPA</strong> (afbraakproduct van glyfosaat), <strong>bentazon</strong>
          (peulvruchten), <strong>metazachloor</strong> en <strong>diuron</strong>. Sommige van
          deze stoffen zijn al jaren verboden maar blijven persistent in grondwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisicos van pesticiden
        </h2>
        <p className="text-gray-700 mb-4">
          De gezondheidseffecten van pesticiden in drinkwater bij chronische blootstelling worden
          door EFSA en WHO per stof beoordeeld. Vastgestelde risicoprofielen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Hormoonverstoring (endocriene disruptie):</strong> diverse fungiciden en
            herbiciden interfereren met het hormoonstelsel. Bijzondere zorg bestaat over
            effecten bij zwangere vrouwen en jonge kinderen.
          </li>
          <li>
            <strong>Carcinogeniteit:</strong> glyfosaat is door IARC geclassificeerd als groep 2A
            (waarschijnlijk kankerverwekkend). Diuron valt onder IARC groep 2B. Lindaan
            (historisch) is groep 1 (bewezen kankerverwekkend).
          </li>
          <li>
            <strong>Neurotoxiciteit:</strong> organofospaatpesticiden zijn neurotoxisch en
            geassocieerd met ontwikkelingsproblemen bij kinderen bij prenatale blootstelling.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Zuivering door drinkwaterbedrijven
        </h2>
        <p className="text-gray-700 mb-4">
          Nederlandse drinkwaterbedrijven passen meerdere zuiveringsstappen toe om pesticiden
          te verwijderen voordat water als leidingwater wordt geleverd:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Actief kool (GAC):</strong> verwijdert &gt;90% van de meeste pesticiden.
            Brabant Water heeft extra koolfiltratie geinstalleerd specifiek voor
            desphenyl-chloridazon.
          </li>
          <li>
            <strong>Ozonbehandeling:</strong> breekt sommige pesticiden af, met name grote
            organische moleculen. Werkt synergetisch met actief kool.
          </li>
          <li>
            <strong>Membraanfiltratie (nanofiltratie/ultrafiltratie):</strong> professionele
            versie van osmosefiltratie op industriele schaal. Verwijdert 99%+ van pesticiden.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Thuisfilteroplossingen vergeleken
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtertype</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering pesticiden</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Certificering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmosefilter (RO)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-medium">85&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">NSF 58</td>
                <td className="border border-gray-300 px-3 py-2">Meest betrouwbaar, ook voor kleine moleculen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolblokfilter</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-medium">70&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">NSF 42/53</td>
                <td className="border border-gray-300 px-3 py-2">Minder effectief voor polaire stoffen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan (Brita)</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">Beperkt</td>
                <td className="border border-gray-300 px-3 py-2">Niet gecertificeerd</td>
                <td className="border border-gray-300 px-3 py-2">Onvoldoende voor pesticiden</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">UV-filter</td>
                <td className="border border-gray-300 px-3 py-2 text-red-700 font-medium">0%</td>
                <td className="border border-gray-300 px-3 py-2">Niet van toepassing</td>
                <td className="border border-gray-300 px-3 py-2">Werkt alleen op micro-organismen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Osmosefilter: beste bescherming thuis
        </h2>
        <p className="text-gray-700 mb-4">
          Een <Link href="/waterfilter" className="text-[#005F8A] underline">osmosefilter</Link> perst
          water onder druk door een semi-permeabel membraan met porieen van 0,0001 micron. Pesticidemoleculen
          zijn te groot om door dit membraan te passeren en worden met het afvoerwater (concentraat)
          afgevoerd. De verwijderingsgraad varieert per pesticide:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li>
            <strong>Grote, apolaire pesticiden</strong> (atrazine, metolachloor, diuron):
            97-99% verwijdering via membraanuitsluitsel
          </li>
          <li>
            <strong>Kleine, polaire pesticiden</strong> (glyfosaat, AMPA, bentazon):
            85-95% verwijdering &mdash; iets lager vanwege kleinere molecuulgrootte
          </li>
          <li>
            <strong>NSF 58-gecertificeerde membranen</strong> zijn getest op specifieke pesticiden
            en bieden de meest betrouwbare garantie voor verwijdering
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Tip: controleer of uw gemeente in een risicogbied ligt via de RIVM-pesticidenkaart.
          Zie ook onze pagina over{' '}
          <Link href="/waterfilter/pfas" className="text-[#005F8A] underline">PFAS-waterfilter</Link>{' '}
          &mdash; PFAS en pesticiden worden vaak in dezelfde gebieden aangetroffen en een
          osmosefilter pakt beide aan.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Actief koolfilter: goede brede aanpak
        </h2>
        <p className="text-gray-700 mb-4">
          Een actief koolblokfilter (CTO, NSF 42/53 gecertificeerd) adsorbeert de meeste pesticiden
          via het grote inwendige koolstofoppervlak. Voor de meeste grote pesticiden bereikt het
          70-95% verwijdering. Beperkingen zijn er voor kleine, polaire moleculen als glyfosaat en AMPA
          die minder goed adsorberen aan koolstofoppervlakken.
        </p>
        <p className="text-gray-700 mb-6">
          Granulair actief kool (GAC) &mdash; zoals in sommige waterfiltersystemen en filterkranen
          gebruikt &mdash; presteert doorgaans minder dan koolblokfilters vanwege kortere contacttijd
          en minder uniform koolstofoppervlak. Vervang koolfilters altijd op schema (doorgaans elke
          6-12 maanden) om verzadiging en terugloging te voorkomen.
        </p>

        <p className="text-gray-700 mb-6">
          Wilt u meer weten over de algehele waterkwaliteit in uw regio? Lees onze gids over
          {' '}<Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>{' '}
          of bekijk hoe u uw{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteit kunt testen</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over pesticiden in drinkwater
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters vergelijken</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>,{' '}
          <Link href="/waterfilter/pfas" className="text-[#005F8A] underline">PFAS waterfilter</Link> en{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link>.
        </p>
      </main>
    </>
  );
}
