import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Bromaat in water: wat is het en hoe verwijder je het?',
  description:
    'Bromaat ontstaat als bijproduct van ozonisatie in drinkwater. EU-norm: 10 ug/L. Osmosefilter verwijdert 85-95% bromaat uit leidingwater.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/bromaat' },
  openGraph: {
    title: 'Bromaat in water: wat is het en hoe verwijder je het?',
    description:
      'Bromaat ontstaat als bijproduct van ozonisatie in drinkwater. EU-norm: 10 ug/L. Osmosefilter verwijdert 85-95% bromaat.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Wat is bromaat precies?',
    answer:
      'Bromaat (BrO3-) is een anorganisch ion dat als bijproduct ontstaat wanneer drinkwaterbedrijven ozon gebruiken om water te desinfecteren terwijl het bronwater van nature bromide bevat. Bromide (Br-) reageert met ozon tot bromaat. Het is een kleurloze, geurloze en smakeloze stof die niet detecteerbaar is zonder laboratoriumanalyse.',
  },
  {
    question: 'Wat is de EU-norm voor bromaat in drinkwater?',
    answer:
      'De EU-norm voor bromaat in drinkwater is 10 microgram per liter (ug/L), vastgelegd in de Drinkwaterrichtlijn 2020/2184. De WHO-richtlijn is eveneens 10 ug/L. In Nederland hanteert het RIVM monitoring van bromaat bij drinkwaterbedrijven die ozon gebruiken. De meeste Nederlandse waterbedrijven zitten ruim onder deze norm.',
  },
  {
    question: 'Is bromaat in leidingwater gevaarlijk?',
    answer:
      'Het IARC (International Agency for Research on Cancer) heeft bromaat geclassificeerd als groep 2B: mogelijk kankerverwekkend voor mensen. Dierproeven tonen niertumoren bij hoge doses. Bij de concentraties die voorkomen in regulier Nederlands leidingwater (doorgaans ver onder 10 ug/L) is het gezondheidsrisico verwaarloosbaar. Langdurige blootstelling aan hogere concentraties is wel reden tot zorg.',
  },
  {
    question: 'Welke watermaatschappijen gebruiken ozon?',
    answer:
      'Ozonisatie wordt in Nederland gebruikt door diverse waterbedrijven die oppervlaktewater of oevergrondwater zuiveren. Denk aan Waternet (Amsterdam), Dunea (Den Haag/Delft) en Vitens (oostelijk Nederland). Bedrijven die uitsluitend diep grondwater winnen en chloor gebruiken als desinfectant produceren doorgaans geen bromaat. Kijk op het kwaliteitsrapport van uw lokale waterbedrijf voor details.',
  },
  {
    question: 'Verwijdert een osmosefilter bromaat?',
    answer:
      'Ja, omgekeerde osmose verwijdert 85-95% van bromaat uit leidingwater. Het RO-membraan houdt het bromaat-ion (BrO3-) tegen vanwege de lading en grootte. De exacte verwijderingsefficiëntie hangt af van de membraankwaliteit, de waterdruk en de bromaat-concentratie in het bronwater. Kwalitatief hoogwaardige membranen behalen verwijderingspercentages boven 90%.',
  },
  {
    question: 'Helpt een actief koolfilter tegen bromaat?',
    answer:
      'Een gewoon actief koolfilter heeft weinig effect op bromaat. GAC (granulaire actieve kool) verwijdert nauwelijks bromaat onder normale werkomstandigheden. Echter, als de actieve kool in een gereduceerde toestand verkeert (zoals gecatalyseerde actieve kool), kan enige reductie van bromaat naar bromide plaatsvinden, maar dit is onbetrouwbaar en afhankelijk van de specifieke productspecificaties.',
  },
  {
    question: 'Kan ionenwisseling bromaat verwijderen?',
    answer:
      'Sterk basische anionenwisselaars kunnen bromaat verwijderen omdat bromaat een negatief geladen ion is. De verwijdering bedraagt typisch 60-80%. Dit is minder effectief dan omgekeerde osmose en vereist regelmatige regeneratie van het harsbed. In combinatie met actief kool kan de verwijdering verbeteren, maar omgekeerde osmose blijft de meest praktische en effectieve thuisoplossing.',
  },
  {
    question: 'Hoe weet ik of mijn leidingwater bromaat bevat?',
    answer:
      'Bromaat is niet te detecteren op smaak, geur of kleur. U kunt het kwaliteitsrapport van uw drinkwaterbedrijf raadplegen; als uw bedrijf ozon gebruikt en bromide-houdend bronwater heeft, worden bromaatniveaus vermeld. Daarnaast kunt u een professionele wateranalyse aanvragen bij geaccrediteerde laboratoria. Thuis-teststrips voor bromaat zijn niet betrouwbaar voor lage concentraties.',
  },
];

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Bromaat in water: wat is het en hoe verwijder je het?',
  description:
    'Bromaat ontstaat als bijproduct van ozonisatie in drinkwater. EU-norm: 10 ug/L. Osmosefilter verwijdert 85-95% bromaat uit leidingwater.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/bromaat',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterBromaatPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Bromaat in leidingwater', item: 'https://waterfilterplatform.nl/waterfilter/bromaat' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:underline">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Bromaat in leidingwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Bromaat in leidingwater: ozonisatie-bijproduct en EU-norm
          </h1>
          <QuickAnswer answer="Bromaat (BrO3-) is een bijproduct dat ontstaat wanneer drinkwaterbedrijven ozon gebruiken om water te desinfecteren en tegelijk bromide aanwezig is. De EU-norm is 10 microgram per liter. Een osmosefilter verwijdert 85-95% van bromaat." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Wat is bromaat?
        </h2>
        <p className="text-gray-700 mb-4">
          Bromaat (BrO3-) is een anorganisch oxyanion van broom. In de natuur komt het nauwelijks voor, maar het ontstaat als ongewenst bijproduct bij de behandeling van drinkwater met ozon. Het ion is kleurloos, geurloos en smaakloos — volledig ondetecteerbaar zonder laboratoriumapparatuur.
        </p>
        <p className="text-gray-700 mb-6">
          De chemische reactie is eenvoudig: wanneer ozon (O3) in contact komt met bromide (Br-) dat van nature in het bronwater aanwezig is, oxideert het bromide tot bromaat. Hoe meer ozon wordt gebruikt en hoe hoger de bromide-concentratie in het ruwe water, des te meer bromaat kan ontstaan.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe ontstaat bromaat in drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Ozonisatie is een bewezen en effectieve desinfectiemethode die door tientallen drinkwaterbedrijven wereldwijd wordt toegepast. Ozon vernietigt ziekteverwekkers, breekt hormoonverstorende stoffen af en verbetert smaak en geur van drinkwater. Het nadeel: als het ruwe water bromide bevat, ontstaat bromaat als nevenproduct.
        </p>
        <p className="text-gray-700 mb-4">
          Bromide komt van nature voor in oppervlaktewater en oevergrondwater, met name in kustgebieden en in water dat via rivieren wordt aangevuld met zeewater of industrieel afvalwater. In Nederland bevatten de Rijn en de Maas meetbare hoeveelheden bromide, waardoor waterbedrijven die deze rivieren als bron gebruiken en ozon toepassen, extra aandacht moeten besteden aan bromaatvorming.
        </p>
        <p className="text-gray-700 mb-6">
          Drinkwaterbedrijven beheersen bromaatvorming door de ozonconcentratie en de contacttijd te optimaliseren, de pH voor ozonisatie te verlagen (bij lagere pH vormt zich minder bromaat), of door ammoniak toe te voegen dat als beschermend middel fungeert. Desondanks kan bromaat in kleine hoeveelheden aanwezig blijven in het geleverde drinkwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm en WHO-richtlijn: 10 microgram per liter
        </h2>
        <p className="text-gray-700 mb-4">
          De grenswaarde voor bromaat in drinkwater is vastgelegd in de Europese Drinkwaterrichtlijn (2020/2184) op <strong>10 microgram per liter (ug/L)</strong>. Dit is tevens de richtlijn van de Wereldgezondheidsorganisatie (WHO). In Nederland is deze norm opgenomen in het Drinkwaterbesluit.
        </p>
        <p className="text-gray-700 mb-4">
          Drinkwaterbedrijven die ozon gebruiken zijn wettelijk verplicht bromaat te meten en te rapporteren. Uit de jaarlijkse kwaliteitsrapporten van het RIVM blijkt dat de gemeten waarden in Nederland in de regel ver onder de 10 ug/L liggen, doorgaans tussen 1 en 5 ug/L bij bedrijven die ozon toepassen. Bedrijven die uitsluitend chloor of UV-licht gebruiken als desinfectant rapporteren doorgaans geen meetbaar bromaat.
        </p>
        <p className="text-gray-700 mb-6">
          De norm van 10 ug/L is gebaseerd op een risicoafweging: het te verwachten levenslange carcinogene risico bij levenslange consumptie van water met precies 10 ug/L bromaat wordt geschat op 1 op de 100.000 personen. Bij de werkelijke concentraties in Nederlands drinkwater is dit risico aanzienlijk lager.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsrisico van bromaat
        </h2>
        <p className="text-gray-700 mb-4">
          Het IARC (International Agency for Research on Cancer) heeft kaliumbromate geclassificeerd als <strong>groep 2B: mogelijk kankerverwekkend</strong> voor mensen. Dit oordeel is gebaseerd op dierproeven waarbij hoge doses niertumoren veroorzaakten bij ratten. Epidemiologisch bewijs bij mensen is beperkt, omdat het moeilijk is langdurige, lage blootstelling te koppelen aan specifieke kankerrisicos.
        </p>
        <p className="text-gray-700 mb-4">
          Naast carcinogeniteit is bromaat bij hoge acute doses nierscadelijk en kan het oxidatieve stress veroorzaken. Bij de concentraties in regulier Nederlands drinkwater zijn acute gezondheidseffecten echter niet te verwachten.
        </p>
        <p className="text-gray-700 mb-6">
          Risicogroepen die extra voorzichtig willen zijn, zijn mensen met een verminderde nierfunctie en zwangere vrouwen. Zij kunnen overwegen extra filtratie toe te passen, zoals beschreven op onze pagina over{' '}
          <Link href="/leidingwater/uranium" className="text-[#005F8A] underline">
            uranium en zware metalen in leidingwater
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke watermaatschappijen gebruiken ozon?
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland passen meerdere drinkwaterbedrijven ozon toe als onderdeel van hun zuiveringsproces, met name bij oppervlaktewater en oevergrondwater:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Waternet</strong> (Amsterdam en omgeving): gebruikt ozon bij de zuivering van Rijnwater. Bromaat wordt gemeten en gecontroleerd onder de norm.</li>
          <li><strong>Dunea</strong> (Haaglanden en Zuid-Holland): Duinwater wordt met ozon behandeld. Lage bromide-niveaus in duinwater betekenen doorgaans lage bromaat-concentraties.</li>
          <li><strong>Vitens</strong> (Oost- en Noord-Nederland): past ozon toe bij diverse installaties die oevergrondwater behandelen.</li>
          <li><strong>Brabant Water</strong>: gebruikt ozon bij de verwerking van Maaswater. Maaswater bevat meer bromide, wat extra aandacht voor bromaatvorming vereist.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bedrijven die uitsluitend diep grondwater winnen en UV-licht of chloor gebruiken als desinfectant produceren doorgaans geen meetbaar bromaat. Raadpleeg het jaarlijkse kwaliteitsrapport van uw waterbedrijf voor de specifieke bromaatwaarden in uw gebied.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bromaat verwijderen: filtermethoden vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          Niet alle filtermethoden zijn even effectief tegen bromaat. Het bromaat-ion is negatief geladen en relatief klein, wat de verwijdering uitdagend maakt:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering bromaat</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt voor thuis?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2">85&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">Ja, beste optie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Sterk basisch anionenwisseling</td>
                <td className="border border-gray-300 px-3 py-2">60&ndash;80%</td>
                <td className="border border-gray-300 px-3 py-2">Beperkt, vereist regeneratie</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter (GAC)</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2">Onvoldoende</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterzuiveringsfilter (sediment)</td>
                <td className="border border-gray-300 px-3 py-2">0%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">UV-desinfectie</td>
                <td className="border border-gray-300 px-3 py-2">0% (geen filter)</td>
                <td className="border border-gray-300 px-3 py-2">Alleen bacterien</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> is voor huishoudelijk gebruik de meest effectieve en praktische methode om bromaat te verwijderen. Het semi-permeabele RO-membraan houdt geladen ionen zoals BrO3- tegen door een combinatie van ladingsafstoting en grootte-uitsluiting. Kwalitatieve membranen (TFC, Thin Film Composite) behalen verwijderingspercentages van 90% en hoger.
        </p>
        <p className="text-gray-700 mb-6">
          Wilt u een osmosefilter aanschaffen? Bekijk ons overzicht van{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            de beste osmosefilters om te kopen
          </Link>{' '}
          met vergelijking van membraankwaliteit, verwijderingspercentages en prijsklassen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bromaat vs. andere verontreinigingen: perspectief
        </h2>
        <p className="text-gray-700 mb-4">
          Bromaat is een van de vele stoffen die worden gemonitord in drinkwater. In vergelijking met andere potentieel schadelijke stoffen is het risico van bromaat in Nederlands leidingwater relatief gering. Het RIVM concludeert in jaarrapportages consistent dat drinkwater in Nederland veilig is en dat bromaat-niveaus de Europese norm niet overschrijden.
        </p>
        <p className="text-gray-700 mb-6">
          Mensen die extra zekerheid willen voor drinkwater op tafel of voor het koken, kunnen het beste kiezen voor een osmosefilter onder het aanrecht. Dit verwijdert niet alleen bromaat maar ook andere ongewenste stoffen zoals nitraat, PFAS, lood en pesticiden in een keer. Zie ook de{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">
            complete gids over waterfilters
          </Link>{' '}
          voor een overzicht van alle filtertypen en hun toepassingen.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over bromaat in leidingwater
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        <CTABanner context="osmose" />

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">Waterfilter soorten</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">Omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">Osmosefilter kopen</Link> en{' '}
          <Link href="/leidingwater/uranium" className="text-[#005F8A] underline">Uranium in leidingwater</Link>.
        </p>
      </div>
    </>
  );
}
