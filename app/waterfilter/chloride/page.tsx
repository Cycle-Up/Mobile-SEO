import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Chloride in drinkwater: bron, smaak en waterfilter',
  description:
    'Chloride (Cl-) in drinkwater is niet hetzelfde als chloor. EU-norm 250 mg/L als indicatorparameter. Te hoog chloride geeft zoute smaak en is corrosief voor.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/chloride' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen chloride en chloor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chloride (Cl-) is het negatief geladen ion van chloor en een onschadelijke, smaakgevende component van zout. Chloor (Cl2 of ClO-) is het reactieve desinfectans dat watermaatschappijen soms toevoegen om water te ontsmetten. Hoewel ze chemisch verwant zijn, gedragen ze zich totaal verschillend in water. Verwar deze twee niet: een veelvoorkomende fout maar essentieel om het juiste filter te kiezen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor chloride in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn (2020/2184) stelt 250 mg/L als indicatorparameter voor chloride. Het is geen harde gezondheidsnorm maar een grens die smaak en corrosie van leidingen reguleert. De WHO heeft geen gezondheidsnorm voor chloride omdat het ion zelf niet toxisch is. Bij overschrijding van 250 mg/L is verplichte rapportage en onderzoek naar de oorzaak nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoeveel chloride zit er in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemiddeld bevat Nederlands leidingwater 30 tot 80 mg/L chloride. In kustregio&apos;s zoals Zuid-Holland en Zeeland ligt de waarde hoger, vaak 100 tot 200 mg/L, vanwege de invloed van brak grondwater. In gebieden met sterke infiltratie van zout grondwater of intensief gebruik van waterontharders kan de waarde 200 mg/L overschrijden. Uw waterleverancier publiceert jaarlijks regiogegevens.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter chloride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, omgekeerde osmose verwijdert 95 tot 99 procent van chloride. Het RO-membraan houdt chloride-ionen vrijwel volledig tegen omdat ze hydrateren in water en daardoor een effectief grotere diameter krijgen dan de membraanporieen. Nanofiltratie verwijdert 60 tot 80 procent. Sterke anionwisselharsen halen 95 procent en meer. Actief koolfilters zijn niet effectief voor chloride omdat het een anorganisch ion is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Voegt een waterontharder chloride toe aan drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een correct werkende ionwisselaar-ontharder voegt geen chloride aan drinkwater toe. Bij regeneratie spoelt het systeem met een NaCl-oplossing om calcium- en magnesiumionen te vervangen door natriumionen. Het chloride uit het regeneratiezout gaat naar het afvalwater. Een klein restant natrium komt wel in het drinkwater terecht, maar nauwelijks chloride. Wel kan een verkeerd geregenereerd systeem chloride in het drinkwater laten komen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waarom is het chloridegehalte hoger in kustregio&apos;s?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In kustprovincies zoals Zuid-Holland, Zeeland en delen van Friesland is het grondwater van nature brak of beinvloed door zilt zeewater dat door diepe lagen sijpelt. Drinkwaterbedrijven in deze gebieden moeten het water zorgvuldig behandelen om de chlorideconcentratie binnen de EU-norm te houden. Sommige bronnen liggen dichter bij de zee of in polders waar zoutwaterindringing een groeiend probleem is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Veroorzaakt chloride corrosie aan leidingen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Hoge chlorideconcentraties versnellen corrosie van metalen leidingen, vooral van koper, gegalvaniseerd staal en sommige roestvast staal-soorten. Chloride-ionen breken de beschermende oxidefilm op metaal af en initieren pitting corrosion (putcorrosie). Bij beton met betonijzer kan hoge chloride de wapening aantasten. In CV-installaties en koelsystemen kan dit leiden tot lekkages en versnelde slijtage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een actief koolfilter chloride?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, actief koolfilters zijn niet effectief voor chloride. Actieve kool adsorbeert vooral organische verbindingen en chloor (het molecuul), maar het anorganische chloride-ion bindt niet aan het kooloppervlak. Voor chlorideverwijdering moet u kiezen voor omgekeerde osmose, nanofiltratie of sterke anionwisselaars. Verwar dit niet met chloorverwijdering, waarvoor actief kool juist uitstekend werkt.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Chloride in drinkwater: bron, smaak en waterfilter',
  description:
    'Chloride is niet hetzelfde als chloor. EU-norm 250 mg/L als indicatorparameter. Osmosefilter verwijdert 95-99% chloride.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterfilter/chloride',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterfilterChloridePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterfilter', item: 'https://waterfilterplatform.nl/waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Chloride in drinkwater', item: 'https://waterfilterplatform.nl/waterfilter/chloride' },
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
          <span>Chloride in drinkwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Chloride in drinkwater: bron, smaak en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Chloride (Cl-) is niet hetzelfde als chloor en is op zichzelf onschadelijk voor de
            gezondheid. Toch geldt er een EU-indicatorparameter van 250 mg/L vanwege smaak en
            corrosie. In Nederlandse kustregio&apos;s ligt de waarde van nature hoger en kan een
            waterfilter wenselijk zijn.
          </p>
        </section>

        <QuickAnswer answer="Chloride (Cl-) is het negatief geladen zoution en is niet hetzelfde als chloor. De EU-indicatorparameter is 250 mg/L op basis van smaak en corrosie. Nederlands leidingwater bevat gemiddeld 30 tot 80 mg/L, in kustregio&apos;s tot 200 mg/L. Een osmosefilter verwijdert 95 tot 99 procent chloride; actief koolfilters zijn niet effectief." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloride versus chloor: cruciaal onderscheid
        </h2>
        <p className="text-gray-700 mb-4">
          Een van de meest voorkomende misverstanden in waterbehandeling is het door elkaar halen van
          chloride en chloor. Het zijn chemisch verwante stoffen, maar ze gedragen zich totaal verschillend
          in water en vereisen verschillende filtertechnieken.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Chloride (Cl-):</strong> het negatief geladen ion van chloor. Het is de zoutcomponent
            (natriumchloride NaCl = keukenzout) en op zichzelf onschadelijk voor de gezondheid. Het
            geeft water een zoute smaak bij hoge concentraties
          </li>
          <li>
            <strong>Chloor (Cl2 of ClO-):</strong> het reactieve desinfectans dat watermaatschappijen
            soms toevoegen om bacterien te doden. Het geeft een typische zwembadgeur en kan reageren
            met organische stoffen tot ongewenste bijproducten zoals trihalomethanen
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor wie chloorsmaak wil verwijderen volstaat een eenvoudige actief koolfilter. Voor wie
          chloride wil verwijderen is een osmosefilter of ionwisselaar nodig. Maak deze keuze bewust
          op basis van uw werkelijke probleem.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Bronnen van chloride in drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Chloride komt in drinkwater terecht via zowel natuurlijke als antropogene bronnen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Natuurlijke bronnen:</strong> oplossing van zouthoudende gesteenten zoals halietlagen
            (steenzout), kustzilte grondwaterindringing en mineralisatie uit kleilagen
          </li>
          <li>
            <strong>Waterontharder-regeneratie:</strong> wanneer ionwisselaar-systemen worden
            geregenereerd met NaCl-oplossing kan een klein deel chloride naar het drinkwater lekken
            bij slechte werking. Het meeste gaat normaal naar het afvalwater
          </li>
          <li>
            <strong>Strooizout op wegen:</strong> in de winter strooien gemeenten honderdduizenden
            tonnen NaCl. Dit lost op en sijpelt door naar het grondwater, met seizoenpieken in
            chlorideconcentraties in ondiep grondwater
          </li>
          <li>
            <strong>Brak grondwater in kustregio&apos;s:</strong> in Zeeland, Zuid-Holland en delen
            van Friesland en Noord-Holland is het diepere grondwater van nature brak door
            zeewaterindringing
          </li>
          <li>
            <strong>Industriele lozingen:</strong> sommige chemische industrieen, kalibedrijven en
            zoutfabrieken kunnen lokaal verhoogde chloridegehaltes veroorzaken
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-norm: 250 mg/L als indicatorparameter
        </h2>
        <p className="text-gray-700 mb-4">
          De EU-drinkwaterrichtlijn (2020/2184) stelt voor chloride een grens van{' '}
          <strong>250 mg/L</strong>. Belangrijk om te begrijpen: dit is geen harde gezondheidsnorm
          maar een <strong>indicatorparameter</strong>. Indicatorparameters reguleren eigenschappen
          die geen direct gezondheidsrisico vormen maar wel de bruikbaarheid van water beinvloeden,
          zoals smaak, kleur, geur en agressie op leidingmateriaal.
        </p>
        <p className="text-gray-700 mb-6">
          De smaakdrempel voor chloride ligt rond 200 tot 300 mg/L: bij deze concentraties begint de
          meerderheid van consumenten een licht zoute smaak waar te nemen. De WHO heeft geen
          gezondheidsnorm voor chloride omdat het ion zelf niet toxisch is. Er is wel een
          aandachtspunt: chloride komt vaak samen voor met natrium en kan zo bijdragen aan de
          natriuminname, wat voor mensen met hypertensie of nierproblemen relevant is.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Chloride in Nederlands leidingwater
        </h2>
        <p className="text-gray-700 mb-4">
          De gemiddelde chlorideconcentratie in Nederlands leidingwater is 30 tot 80 mg/L, ruim onder
          de EU-norm. Maar er zijn duidelijke regionale verschillen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Binnenlandse gebieden (Brabant, Gelderland, Overijssel, Drenthe):</strong>
            doorgaans 20 tot 60 mg/L
          </li>
          <li>
            <strong>Randstad en middenwest:</strong> 50 tot 100 mg/L, afhankelijk van bron
          </li>
          <li>
            <strong>Kustregio&apos;s (Zuid-Holland, Zeeland, delen Noord-Holland):</strong>
            100 tot 200 mg/L, soms hoger
          </li>
          <li>
            <strong>Brak gebied of bij zoutwaterintrusie:</strong> kan 200 mg/L overschrijden, vraagt
            om actieve behandeling door de waterleverancier
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Een actuele meting vindt u in het jaarrapport van uw drinkwaterbedrijf. Vraag specifiek
          naar de waarde voor uw postcodegebied, omdat regionale verschillen aanzienlijk kunnen zijn.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gevolgen van te veel chloride
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Zoute smaak:</strong> boven 250 mg/L wordt de smaak duidelijk zilt en onaangenaam
            voor drinkwater, koffie en thee
          </li>
          <li>
            <strong>Corrosie van metaalleidingen:</strong> versnelde aantasting van koper, gegalvaniseerd
            staal en sommige roestvast staal-soorten door pitting corrosion
          </li>
          <li>
            <strong>Schade aan beton-betonijzer:</strong> bij zeer hoge concentraties kan chloride
            de wapening in beton aantasten, relevant voor leidingsystemen en koelsystemen
          </li>
          <li>
            <strong>Verhoogde natriumopname:</strong> chloride wordt vaak samen met natrium gevonden,
            wat dieettechnisch relevant is voor mensen met hoge bloeddruk of nierproblemen
          </li>
          <li>
            <strong>Schade aan planten:</strong> gevoelige tuinplanten en bomen reageren met
            bladrandverbranding bij irrigatie met chloriderijk water
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer is een waterfilter zinvol?
        </h2>
        <p className="text-gray-700 mb-6">
          Een chloride-verwijderend filter is aan te raden bij: duidelijk zoute smaak in leidingwater,
          versnelde corrosie in CV- of koelinstallatie, gevoelige siertuinen of aquaria met zoetwatervissen,
          of voor mensen met natriumbeperkt dieet die water als belangrijke bron willen vermijden.
          Voor de meeste Nederlandse huishoudens met chloride onder 100 mg/L is filtering vooral een
          smaak- en kwaliteitsverbetering. Lees ook over{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteit testen</Link>{' '}
          om eerst uw eigen situatie in kaart te brengen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtermethoden voor chloride: vergelijking
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elke filtermethode is effectief tegen chloride. Het is een klein, anorganisch ion dat
          actief verwijderd moet worden door fysische scheiding (membraan) of chemische uitwisseling:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering chloride</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">95&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">Beste keuze voor huishoudens</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltratie</td>
                <td className="border border-gray-300 px-3 py-2">60&ndash;80%</td>
                <td className="border border-gray-300 px-3 py-2">Tussenoplossing, behoudt meer mineralen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Sterke anionwisselaar</td>
                <td className="border border-gray-300 px-3 py-2">95%+</td>
                <td className="border border-gray-300 px-3 py-2">Industrieel, vereist regeneratie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;5%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Waterontharder (Na-ion)</td>
                <td className="border border-gray-300 px-3 py-2">0%</td>
                <td className="border border-gray-300 px-3 py-2">Werkt alleen op calcium/magnesium</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Omgekeerde osmose: meest praktische thuisoplossing
        </h2>
        <p className="text-gray-700 mb-6">
          Voor huishoudens is{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>{' '}
          verreweg de meest praktische manier om chloride te verwijderen. Een onder-aanrecht
          osmose-installatie verwijdert standaard 95 tot 99 procent van alle chloride-ionen, naast
          natrium, sulfaat, nitraat en de meeste andere opgeloste stoffen. Het systeem heeft een
          eigen kraan voor drinkwater, koffie en thee, en is vooral interessant in kustregio&apos;s
          waar het leidingwater duidelijk zilt smaakt. Bekijk ook de pagina over{' '}
          <Link href="/omgekeerde-osmose/kosten" className="text-[#005F8A] underline">kosten van een osmosesysteem</Link>{' '}
          voor een complete kostenoverzicht.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over chloride in drinkwater
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
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/waterkwaliteit/test" className="text-[#005F8A] underline">waterkwaliteitstest</Link>,{' '}
          <Link href="/omgekeerde-osmose/kosten" className="text-[#005F8A] underline">kosten osmosesysteem</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">alle waterfilters</Link>.
        </p>
      </main>
    </>
  );
}
