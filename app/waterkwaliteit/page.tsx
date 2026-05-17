import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterkwaliteit in Nederland: wat zit er in ons drinkwater?',
  description:
    'Nederland heeft uitstekende drinkwaterkwaliteit, maar regionale verschillen en opkomende verontreinigingen (PFAS, medicijnen) blijven aandachtspunten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterkwaliteit' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Nederlands drinkwater veilig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, Nederlands drinkwater behoort tot de veiligste ter wereld. Meer dan 99,9% van de tijd voldoet het aan alle wettelijke normen. De 10 Nederlandse drinkwaterbedrijven zijn verplicht het water continu te monitoren en jaarlijks te rapporteren aan de Inspectie Leefomgeving en Transport (ILT). Nederland staat in de top 3 van Europa wat betreft drinkwaterkwaliteit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterbedrijven leveren het schoonste drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederland zijn alle 10 drinkwaterbedrijven streng gereguleerd en leveren drinkwater dat voldoet aan de wettelijke normen. Op basis van de jaarlijkse ILT-rapporten scoren bedrijven die grondwater als bron gebruiken (zoals Vitens, Brabant Water, WML) doorgaans iets stabieler dan bedrijven die oppervlaktewater zuiveren. Oppervlaktewater vereist intensievere behandeling vanwege seizoensgebonden variaties in kwaliteit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Waar kan ik mijn waterkwaliteitsrapport vinden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Elk Nederlands drinkwaterbedrijf publiceert jaarlijks een waterkwaliteitsrapport. U kunt dit vinden op de website van uw waterbedrijf: Vitens.nl/waterkwaliteit, Evides.nl/waterkwaliteit, PWN.nl, Waternet.nl enzovoort. Zoek uw waterbedrijf op via uw postcode. De rapporten bevatten meetwaarden per waterwingebied voor alle gereguleerde parameters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn opkomende verontreinigingen in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Opkomende verontreinigingen zijn stoffen die (nog) niet zijn opgenomen in de wettelijke normen maar wel worden aangetroffen in water. In Nederland zijn dit voornamelijk: microplastics (deeltjes kleiner dan 5 mm), medicijnresten (hormonen, antibiotica, pijnstillers), PFAS-verbindingen buiten de 20 genormeerde stoffen, en nieuwe pesticiden. Het RIVM en RIWA monitoren deze stoffen in het kader van de EU Drinkwaterrichtlijn 2020.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe veilig is PFAS in Nederlands drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-norm voor de som van 4 PFAS-verbindingen (PFOA, PFOS, PFNA, PFHxS) in drinkwater is 0,05 microgram per liter. In de meeste gebieden in Nederland ligt de gemeten waarde ruim onder deze norm. In het gebied rond Dordrecht (nabij Chemours, voorheen DuPont) zijn waarden tot 0,04 microgram per liter gemeten, net onder de grens. In de Schiphol-zone en bij voormalige militaire bases worden verhoogde PFAS-waarden in grondwater gemonitord.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verschilt drinkwaterkwaliteit per gemeente?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, er zijn regionale verschillen. De belangrijkste variaties betreffen waterhardheid (van 3 graden Duitse hardheid in Zeeland tot 28 graden in Limburg), loodgehalte (afhankelijk van de leeftijd van huisinstallaties), en lokale verontreinigingen zoals PFAS in bepaalde gebieden. De basisveiligheid is overal gewaarborgd, maar aanvullende filtratie kan regionaal zinvoller zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie controleert de drinkwaterkwaliteit in Nederland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De drinkwaterkwaliteit in Nederland wordt bewaakt door meerdere instanties: de 10 drinkwaterbedrijven zelf (primaire verantwoordelijkheid), het RIVM (Rijksinstituut voor Volksgezondheid en Milieu) voor wetenschappelijk onderzoek en normering, de Inspectie Leefomgeving en Transport (ILT) als toezichthouder namens de overheid, en gemeenten voor de openbare drinkwatervoorziening. De EU Drinkwaterrichtlijn vormt het wettelijke kader.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wanneer is extra filtratie verstandig naast het kraan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Extra filtratie is zinvol in specifieke situaties: (1) bij een huis gebouwd voor 1960 met mogelijke loodleidingen; (2) in PFAS-hotspot gebieden zoals de Dordrecht/Chemours-regio of Schiphol-zone; (3) bij een extreem harde waterzone (boven 25 graden) voor kookwater en koffiezetapparaten; (4) voor zuigelingenvoeding als voorzorgsmaatregel tegen opkomende verontreinigingen; (5) bij persoonlijke gevoeligheid of immunologische aandoeningen. Een osmosefilter is in al deze gevallen de meest complete oplossing.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterkwaliteit in Nederland: wat zit er in ons drinkwater?',
  description:
    'Nederland heeft uitstekende drinkwaterkwaliteit, maar regionale verschillen en opkomende verontreinigingen (PFAS, medicijnen) blijven aandachtspunten.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterkwaliteit',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterkwaliteitPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterkwaliteit', item: 'https://waterfilterplatform.nl/waterkwaliteit' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
            <span>Waterkwaliteit</span>
          </nav>

          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterkwaliteit in Nederland: wat zit er in ons drinkwater?
          </h1>

          <QuickAnswer answer="Nederlands drinkwater behoort tot de top 3 van Europa en voldoet 99,9% van de tijd aan alle wettelijke normen. Tien drinkwaterbedrijven, het RIVM en de ILT bewaken de kwaliteit. Opkomende verontreinigingen zoals PFAS, microplastics en medicijnresten zijn aandachtspunten zonder wettelijke norm." />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-4 py-8">

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nederland in de top 3 van Europa
        </h2>
        <p className="text-gray-700 mb-4">
          Nederland behoort samen met Duitsland en Oostenrijk tot de landen met de hoogste drinkwaterkwaliteit in Europa, volgens WHO- en EEA-ranglijsten. Meer dan 99,9% van de tijd voldoet Nederlands drinkwater aan alle wettelijke parameters. Dit is het resultaat van decennia investering in waterinfrastructuur, geavanceerde zuiveringstechnieken en strenge handhaving.
        </p>
        <p className="text-gray-700 mb-6">
          De wettelijke basis is de Nederlandse Drinkwaterwet, die de EU Drinkwaterrichtlijn implementeert. Sinds 2023 is de herziene EU-richtlijn uit 2020 van kracht, met strengere normen voor PFAS, lood en een uitgebreide monitoringslijst voor opkomende stoffen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wie bewaakt de waterkwaliteit?
        </h2>
        <p className="text-gray-700 mb-4">
          De bewaking van Nederlandse drinkwaterkwaliteit is een gelaagd systeem met meerdere verantwoordelijke partijen:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>10 drinkwaterbedrijven</strong> &mdash; primaire verantwoordelijkheid voor productie, distributie en kwaliteitsbewaking. Zij meten continu en publiceren jaarlijkse kwaliteitsrapporten.</li>
          <li><strong>RIVM</strong> (Rijksinstituut voor Volksgezondheid en Milieu) &mdash; wetenschappelijk onderzoek, normering en advies aan de overheid over waterkwaliteitsbeleid.</li>
          <li><strong>Inspectie Leefomgeving en Transport (ILT)</strong> &mdash; onafhankelijk toezicht op naleving van de Drinkwaterwet door drinkwaterbedrijven.</li>
          <li><strong>Gemeente</strong> &mdash; verantwoordelijk voor openbare drinkwaterinfrastructuur en eerste aanspreekpunt bij lokale verontreinigingen.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gemiddelde kwaliteitsparameters Nederlands drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          De onderstaande tabel toont de gemiddelde meetwaarden voor de belangrijkste kwaliteitsparameters in Nederlands drinkwater, vergeleken met de geldende EU-normen:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Waarde NL</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">EU-norm</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Bacterien E. coli</td>
                <td className="border border-gray-300 px-3 py-2">0 KVE/100mL</td>
                <td className="border border-gray-300 px-3 py-2">0 KVE/100mL</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">Veilig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Nitraat</td>
                <td className="border border-gray-300 px-3 py-2">10-25 mg/L</td>
                <td className="border border-gray-300 px-3 py-2">max 50 mg/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">Veilig</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Lood</td>
                <td className="border border-gray-300 px-3 py-2">&lt;2 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">max 10 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">Goed</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">PFAS sum-4</td>
                <td className="border border-gray-300 px-3 py-2">0,01-0,04 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">max 0,05 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2 text-yellow-700 font-semibold">Grensgebied</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Pesticides</td>
                <td className="border border-gray-300 px-3 py-2">&lt;0,05 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">max 0,1 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">Veilig</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Trihalomethanen</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2">max 100 &micro;g/L</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">Veilig</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regionale aandachtspunten
        </h2>
        <p className="text-gray-700 mb-4">
          Hoewel de landelijke gemiddelden uitstekend zijn, zijn er geografische hotspots die extra aandacht vereisen:
        </p>

        <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-[#003F5C] mb-3">PFAS-hotspots in Nederland</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm">
            <li><strong>Dordrecht/Chemours-regio:</strong> De voormalige DuPont-fabriek (nu Chemours) heeft decennialang GenX en andere PFAS-verbindingen uitgestoten. Gemeten waarden in drinkwater liggen tot 0,04 &micro;g/L, net onder de EU-norm van 0,05 &micro;g/L.</li>
            <li><strong>Schiphol-zone:</strong> Blusschuim met PFAS is in het verleden intensief gebruikt op en rond Schiphol. De grondwaterkwaliteit wordt intensief gemonitord. Drinkwaterbronnen in de directe omgeving staan niet op de lijst van Schiphol-gerelateerde PFAS-bronnen.</li>
            <li><strong>Voormalige militaire bases:</strong> Op en rond voormalige NAVO-bases in onder andere Brabant en Gelderland zijn verhoogde PFAS-concentraties gevonden in grondwater. Drinkwaterwinning in deze gebieden wordt extra gemonitord.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterhardheid: grote regionale verschillen
        </h2>
        <p className="text-gray-700 mb-4">
          Een van de opvallendste regionale verschillen is waterhardheid. Dit meet de hoeveelheid opgeloste calcium- en magnesiumzouten. Zeeland heeft met circa 3 graden Duitse hardheid (°dH) het zachtste water van Nederland, terwijl Limburg met circa 28 °dH het hardste water heeft. Hardheid is geen veiligheidsprobleem, maar bepaalt wel de prestaties van waterkokers, koffiezetapparaten en vaatwassers.
        </p>
        <p className="text-gray-700 mb-6">
          Mensen in harde watergebieden investeren vaker in waterontharders of osmosefilters voor huishoudelijk gebruik. Een omgekeerde-osmosefilter verwijdert kalk volledig en produceert zacht, mineraalarm water.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Opkomende verontreinigingen: buiten het wettelijke kader
        </h2>
        <p className="text-gray-700 mb-4">
          De wettelijke normen dekken niet alle stoffen die in water worden aangetroffen. Drie categorieen opkomende verontreinigingen verdienen bijzondere aandacht:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3">
          <li>
            <strong>Microplastics:</strong> Deeltjes kleiner dan 5 mm worden aangetroffen in oppervlaktewater en in beperkte mate in drinkwater. Er is nog geen EU-norm, maar microplastics staan op de monitoringslijst van de EU Drinkwaterrichtlijn 2020. Effecten op gezondheid bij langdurige blootstelling zijn nog niet volledig onderzocht.
          </li>
          <li>
            <strong>Medicijnresten:</strong> Hormonen (ethinylestradiol uit de anticonceptiepil), pijnstillers (ibuprofen, diclofenac) en diabetesmedicijnen (metformine) worden aangetroffen in oppervlaktewater en in sporen in drinkwater. Er zijn geen specifieke drinkwaternormen voor deze stoffen. De EU werkt aan een actieplan voor farmaceutische stoffen in water.
          </li>
          <li>
            <strong>PFAS buiten de 20 genormeerde verbindingen:</strong> De EU-norm betreft de som van 4 specifieke PFAS-verbindingen. Er zijn echter honderden PFAS-verbindingen, waarvan een groot deel niet wordt getest of genormeerd. Nieuwe analysemethoden laten zien dat de totale PFAS-belasting groter kan zijn dan de sum-4 meting suggereert.
          </li>
        </ol>

        <p className="text-gray-700 mb-6">
          Meer lezen over specifieke verontreinigingen? Bekijk onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>{' '}
          of lees meer over{' '}
          <Link href="/pfas-waterfilter" className="text-[#005F8A] underline">PFAS waterfilters</Link>.
          Voor de meest complete bescherming tegen opkomende verontreinigingen is een{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmosefilter</Link>{' '}
          de meest effectieve optie.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Meer over waterkwaliteit
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Link href="/waterkwaliteit/nederland" className="block border border-[#E0F2FE] rounded-xl p-4 hover:bg-[#E0F2FE] transition-colors">
            <div className="font-semibold text-[#003F5C] mb-1">Drinkwaterkwaliteit Nederland</div>
            <div className="text-sm text-gray-600">Normen, waterbedrijven en PFAS-hotspots per regio</div>
          </Link>
          <Link href="/waterkwaliteit/europa" className="block border border-[#E0F2FE] rounded-xl p-4 hover:bg-[#E0F2FE] transition-colors">
            <div className="font-semibold text-[#003F5C] mb-1">Drinkwaterkwaliteit Europa</div>
            <div className="text-sm text-gray-600">Vergelijking van alle EU-landen</div>
          </Link>
          <Link href="/waterkwaliteit/test" className="block border border-[#E0F2FE] rounded-xl p-4 hover:bg-[#E0F2FE] transition-colors">
            <div className="font-semibold text-[#003F5C] mb-1">Waterkwaliteit testen</div>
            <div className="text-sm text-gray-600">TDS-meter, teststrips of labanalyse</div>
          </Link>
        </div>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over waterkwaliteit</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </main>
    </>
  );
}
