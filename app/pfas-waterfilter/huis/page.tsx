import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'PFAS waterfilter thuis: welke situaties en woningtypes',
  description:
    'PFAS filteren thuis: wanneer is het nodig, welk filter past bij uw woning? Dordrecht, Schiphol, Eindhoven, Westerschelde. RO minder dan 0,10 euro per dag.',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-waterfilter/huis' },
};

const faqItems = [
  {
    q: 'Wanneer is een PFAS waterfilter thuis nodig?',
    a: 'Een PFAS-filter thuis is zinvol als u in een bekende PFAS-hotspot woont: de omgeving van Dordrecht/Papendrecht (Chemours), de Schiphol-regio, omgeving Eindhoven Airport, de Westerschelde-zone of nabij militaire vliegbases. Ook voor gebruikers van eigen putwater is een filter sterk aanbevolen, omdat particuliere putten niet worden gemonitord door drinkwaterbedrijven. Buiten deze zones voldoet Nederlands leidingwater doorgaans aan de EU-norm van 0,10 µg/L.',
  },
  {
    q: 'Welk PFAS-filter is geschikt voor een appartement?',
    a: 'Voor een appartement is een aanrecht-osmosefilter (tafelmodel countertop RO) of een compacte onderbouw-RO-unit de beste keuze. Een tafelmodel heeft geen installatie nodig en werkt op de kraan. Een onderbouw-RO past in de keukenkast en vereist een klein boorgat voor de speciale kraan. Beide verwijderen PFAS voor meer dan 95%. Controleer bij huren altijd of u leidingwijzigingen mag aanbrengen.',
  },
  {
    q: 'Mag ik als huurder een waterfilter installeren voor PFAS?',
    a: 'Een tafelmodel osmosefilter of een filterkraan op de kraan is altijd toegestaan: er worden geen wijzigingen aangebracht aan het leidingwerk. Een onderbouw-RO vereist een kraangat (22 mm) en een afvoerverbinding. Dit valt technisch gezien onder kleine aanpassingen die in de meeste huurcontracten zijn toegestaan, maar vraag altijd schriftelijke toestemming aan uw verhuurder. Bij vertrek kunt u het systeem eenvoudig meenemen.',
  },
  {
    q: 'Wat kost een PFAS osmosefilter per dag?',
    a: 'Een onderbouw-osmosefilter (aanschaf 200-600 euro) kost per dag minder dan 0,10 euro aan water en filteronderhoud. Bij 3 liter gefilterd water per dag bedragen de lopende kosten circa 2-5 euro per maand. Na gemiddeld 2-3 jaar heeft het filter zichzelf terugverdiend ten opzichte van flessenwater. In een PFAS-hotspot-gebied is dit een uiterst kosteneffectieve bescherming.',
  },
  {
    q: 'Hoe controleer ik of mijn regio op de ILT-PFAS-kaart staat?',
    a: 'De Inspectie Leefomgeving en Transport (ILT) publiceert kaarten en rapporten over PFAS-verontreiniging per regio. Via de ILT-website kunt u uw gemeente of postcode opzoeken. Uw drinkwaterbedrijf is verplicht jaarlijks een kwaliteitsrapportage te publiceren met PFAS-meetwaarden. U kunt ook het RIVM-drinkwaterrapport raadplegen dat jaarlijks alle metingen per waterwingebied bundelt.',
  },
  {
    q: 'Verwijdert een pitcher (filterkraan) PFAS bij thuisgebruik?',
    a: 'Nee. Filterkannen zoals Brita of BWT zijn niet geschikt voor PFAS-verwijdering. De korte contacttijd en het type actief kool zijn onvoldoende voor betrouwbare PFAS-reductie. Voor thuisgebruik in een PFAS-risicogebied is omgekeerde osmose de aanbevolen methode, met 95-99% verwijderingspercentage voor zowel langketenige als kortketenige PFAS.',
  },
  {
    q: 'Heeft een eengezinswoning andere PFAS-filterkeuzes dan een appartement?',
    a: 'In een eengezinswoning heeft u meer ruimte onder het aanrecht voor een volwaardig 5-traps onderbouw-osmosesysteem met opslagtank. Dit geeft een hogere productiecapaciteit (150-300 liter per dag) en hogere doorstroomsnelheid. In een appartement met beperkte ruimte is een compacte 3-traps onderbouw-RO of een tafelmodel beter passend. De PFAS-verwijdering is bij beide typen gelijkwaardig.',
  },
  {
    q: 'Wat adviseert de ILT voor bewoners in PFAS-hotspotgebieden?',
    a: 'De ILT adviseert bewoners in gebieden met bekende PFAS-verontreiniging om voorzorgsmaatregelen te nemen, met name voor kwetsbare groepen (zwangere vrouwen, jonge kinderen, mensen met verminderde weerstand). Het advies omvat het vermijden van putwater voor drinkwater en het overwegen van aanvullende filtratie via omgekeerde osmose of een gecertificeerd koolstofblokfilter voor drinkwater en koken. Volg altijd de meest recente lokale adviezen van gemeente en GGD.',
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
  headline: 'PFAS waterfilter thuis: welke situaties en woningtypes',
  description:
    'PFAS filteren thuis: wanneer is het nodig, welk filter past bij uw woning? Dordrecht, Schiphol, Eindhoven en Westerschelde uitgelegd.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-20',
  url: 'https://waterfilterplatform.nl/pfas-waterfilter/huis',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function PfasWaterfilterHuisPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'PFAS waterfilter', item: 'https://waterfilterplatform.nl/pfas-waterfilter' },
              { '@type': 'ListItem', position: 3, name: 'Thuis PFAS filteren', item: 'https://waterfilterplatform.nl/pfas-waterfilter/huis' },
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
            <span className="text-gray-700">Thuis PFAS filteren</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS waterfilter thuis: wanneer heeft u het nodig en welk filter past bij uw woning?
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            De meeste Nederlanders krijgen leidingwater dat voldoet aan de EU-PFAS-norm van 0,10 µg/L. Maar in bekende hotspots &mdash; Dordrecht, de Schiphol-regio, Eindhoven en de Westerschelde-zone &mdash; is een PFAS-filter thuis een verstandige keuze. Welk filter past bij uw woningtype en situatie?
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-10">

        <QuickAnswer answer="In PFAS-hotspots (Dordrecht, Schiphol-regio, Eindhoven, Westerschelde) is omgekeerde osmose (RO) de aanbevolen thuisoplossing: &gt;95% PFAS-verwijdering voor minder dan 0,10 euro per dag. Appartement: tafelmodel of compacte onderbouw-RO. Eengezinswoning: 5-traps onderbouw-RO met tank. Huurder: tafelmodel RO zonder installatie. Controleer uw situatie via de ILT-kaart." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Welke situaties rechtvaardigen een PFAS-filter thuis?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Een PFAS-filter thuis is niet voor iedereen even urgent. De overgrote meerderheid van het Nederlandse leidingwater voldoet aan de EU-drinkwaterrichtlijn van 0,10 µg/L voor de som van 20 PFAS-verbindingen. Drinkwaterbedrijven zijn wettelijk verplicht te zuiveren en te meten. Maar er zijn specifieke situaties waarbij aanvullende thuisfiltratie wel zinvol is.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          PFAS-hotspot gebieden in Nederland
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Vier regio's zijn in Nederland bekend als gebieden met verhoogde PFAS-belasting in bodem en grondwater:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-3 leading-relaxed">
          <li>
            <strong>Dordrecht en Papendrecht:</strong> De Chemours-fabriek (voorheen DuPont) heeft decennialang GenX en andere PFAS uitgestoten. Drinkwaterbedrijf Oasen past actieve zuivering toe, maar voor particuliere putten en regentonnen in de directe omgeving is extra voorzichtigheid geboden.
          </li>
          <li>
            <strong>Schiphol-regio:</strong> Jarenlang gebruik van PFAS-houdend AFFF-blusschuim bij brandoefeningen heeft het grondwater in de omgeving van de luchthaven beinvloed. Waternet monitort de situatie, maar bewoners met een eigen put in de regio lopen risico.
          </li>
          <li>
            <strong>Eindhoven en omgeving:</strong> Eindhoven Airport en historische industriele activiteiten hebben bijgedragen aan PFAS-verontreiniging in het grondwater in delen van de Brabantse Peel en de directe luchthavenomgeving.
          </li>
          <li>
            <strong>Westerschelde-zone:</strong> Via de Schelde komen PFAS vanuit Belgie Nederland binnen. In Zeeland, met name Terneuzen en de directe omgeving, zijn verhoogde concentraties gemeten in oppervlaktewater dat wordt gebruikt voor bereiding van drinkwater.
          </li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Bekijk de precieze situatie per regio op onze pagina{' '}
          <Link href="/pfas-waterfilter/gebieden-nederland" className="text-[#005F8A] underline">PFAS risicogebieden in Nederland</Link>{' '}
          of controleer uw adres via de ILT-kaart op de website van de Inspectie Leefomgeving en Transport.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Particuliere putten en bronwater
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Gebruikers van eigen putwater of bronwater lopen het grootste risico. Particuliere putten worden niet gemonitord door drinkwaterbedrijven en worden niet behandeld. In landbouwgebieden waar AFFF-blusschuim is gebruikt of waar industriele PFAS-lozing plaatsvond, kunnen putten verhoogde concentraties bevatten. Voor putgebruikers is een gecertificeerd osmosefilter geen luxe maar een basisveiligheid.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          ILT-advies voor bewoners
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">
          De Inspectie Leefomgeving en Transport (ILT) adviseert bewoners in gebieden met bekende PFAS-verontreiniging om bij twijfel aanvullende maatregelen te nemen, in het bijzonder voor kwetsbare groepen: zwangere vrouwen, zuigelingen en jonge kinderen, mensen met een verlaagde weerstand. Het ILT-advies sluit aan op de bevindingen van het{' '}
          <Link href="/pfas-waterfilter/osmose" className="text-[#005F8A] underline">omgekeerde osmosefilter</Link>{' '}
          als meest effectieve consumentenoplossing. Raadpleeg ook de GGD en gemeente voor de meest actuele lokale adviezen.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          PFAS-filter per woningtype: wat past het best?
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          De juiste filteroplossing hangt niet alleen af van uw woonregio, maar ook van uw woningtype. Appartement, eengezinswoning of huurwoning vragen elk een andere aanpak.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Appartement: aanrecht-RO of compacte onderbouw-RO
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Appartementen hebben doorgaans minder ruimte onder het aanrecht en soms beperkingen vanuit de VvE of de verhuurder over aanpassingen aan het leidingwerk. Er zijn twee uitstekende opties:
        </p>
        <div className="space-y-4 mb-6">
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Aanrecht-osmosefilter (countertop RO)</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Staat op het aanrecht, wordt aangesloten op de kraan via een adapter &mdash; geen boren, geen loodgieter. Productiecapaciteit 2-5 liter per uur, voldoende voor drinkwater en koken. PFAS-verwijdering: &gt;95%. Nadeel: neemt ruimte in op het aanrecht. Prijs: 150-350 euro.
            </p>
          </div>
          <div className="border-l-4 border-[#005F8A] pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Compacte onderbouw-RO (slimline)</h4>
            <p className="text-gray-700 text-sm leading-relaxed">
              Past in een kleinere keukenkast (20-25 cm breed). Vereist een kraangat (22 mm) en aansluiting op de afvoer. Geeft een aparte gefilterde kraan op het aanrecht. Productiecapaciteit 100-200 liter per dag. Prijs: 200-450 euro inclusief kraan.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Eengezinswoning: onderbouw-RO met opslagtank
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          In een eengezinswoning is ruimte onder het aanrecht geen probleem en kunt u kiezen voor een volwaardig 5-traps onderbouw-osmosesysteem met opslagtank van 10-15 liter. Dit biedt:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2 text-sm leading-relaxed">
          <li>Productiecapaciteit 150-300 liter per dag &mdash; voldoende voor een gezin van 4</li>
          <li>Onmiddellijk gefilterd water op druk via de aparte kraan</li>
          <li>5-traps filtratie: sediment, koolstof pre-filter, RO-membraan, koolstof post-filter, mineralenfilter (optioneel)</li>
          <li>Mogelijkheid om aan te sluiten op een kokend-waterboiler voor 4-in-1 kraan</li>
          <li>Prijs: 300-800 euro inclusief installatie</li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Wilt u weten welke modellen het best scoren op PFAS-verwijdering? Bekijk onze vergelijking op{' '}
          <Link href="/pfas-waterfilter/vergelijken" className="text-[#005F8A] underline">PFAS waterfilter vergelijken</Link>.
        </p>

        <h3 className="text-xl font-semibold text-[#005F8A] mt-6 mb-3">
          Huurwoning: pitcher, tafelmodel of onderbouw-RO
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Als huurder heeft u drie opties, afhankelijk van wat uw verhuurder toestaat:
        </p>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Oplossing</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Installatie nodig</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">PFAS-verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterpitcher</td>
                <td className="border border-gray-300 px-3 py-2">Nee</td>
                <td className="border border-gray-300 px-3 py-2 text-red-600">Niet geschikt</td>
                <td className="border border-gray-300 px-3 py-2">20-80 euro</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Tafelmodel RO</td>
                <td className="border border-gray-300 px-3 py-2">Nee (kraanadapter)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&gt;95%</td>
                <td className="border border-gray-300 px-3 py-2">150-350 euro</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Onderbouw-RO</td>
                <td className="border border-gray-300 px-3 py-2">Ja (kraangat, afvoer)</td>
                <td className="border border-gray-300 px-3 py-2 text-green-700 font-semibold">&gt;95%</td>
                <td className="border border-gray-300 px-3 py-2">200-600 euro</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Voor huurders in PFAS-hotspot-gebieden is een tafelmodel osmosefilter de eenvoudigste oplossing: geen toestemming nodig, meeneembaar bij verhuizing, en volwaardige PFAS-bescherming. Meer advies voor huurders leest u op{' '}
          <Link href="/keuzehulp/huurwoning" className="text-[#005F8A] underline">waterfilter voor huurwoning</Link>.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Kosten van PFAS-filtratie thuis: minder dan 0,10 euro per dag
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Een van de meest gehoorde bezwaren tegen een osmosefilter is de aanschafprijs. Maar als u de kosten omrekent naar dagelijks gebruik, is het beeld heel anders. Een onderbouw-osmosefilter bij gemiddeld gebruik van 3 liter gefilterd water per dag:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2 text-sm leading-relaxed">
          <li>Aanschafkosten (afgeschreven over 5 jaar): 0,11-0,33 euro per dag</li>
          <li>Waterkosten (leidingwater): &lt;0,01 euro per dag</li>
          <li>Filteronderhoud (jaarlijks 60-120 euro): 0,16-0,33 euro per dag</li>
          <li><strong>Totaal lopende kosten na afschrijving: &lt;0,10 euro per dag</strong></li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Ter vergelijking: flessenwater kost gemiddeld 0,40-0,80 euro per liter. Bij 3 liter per dag is dat 1,20-2,40 euro per dag &mdash; tien tot vijfentwintig keer meer dan osmosewater. Bovendien garandeert flessenwater geen PFAS-vrij water, terwijl een osmosefilter &gt;95% verwijdering levert. Meer informatie over{' '}
          <Link href="/waterfilter/appartement" className="text-[#005F8A] underline">waterfilters voor appartementen</Link>{' '}
          en specifieke modellen vindt u in onze vergelijkinsgids.
        </p>

        <h2 className="text-2xl font-bold text-[#003F5C] mt-10 mb-4">
          Hoe controleert u uw eigen situatie?
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Voordat u een PFAS-filter aanschaft, loont het om uw eigen situatie te beoordelen. Volg deze stappen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-3 text-sm leading-relaxed">
          <li>
            <strong>Controleer de ILT-kaart:</strong> De Inspectie Leefomgeving en Transport publiceert kaarten met bekende PFAS-verontreinigingslocaties. Zoek uw gemeente of postcode op.
          </li>
          <li>
            <strong>Lees het jaarrapport van uw drinkwaterbedrijf:</strong> Elk drinkwaterbedrijf in Nederland is verplicht jaarlijks te rapporteren over gemeten PFAS-concentraties per waterwingebied. Dit rapport is vrij beschikbaar.
          </li>
          <li>
            <strong>Controleer of u putwater gebruikt:</strong> Putwater is niet beschermd. Laat putwater testen als u in een landbouw- of industriegebied woont. Informatie over testen vindt u op{' '}
            <Link href="/pfas-waterfilter/testen" className="text-[#005F8A] underline">PFAS testen in uw water</Link>.
          </li>
          <li>
            <strong>Overweeg uw kwetsbaarheid:</strong> Zwangere vrouwen, jonge kinderen en mensen met een verminderd immuunsysteem lopen meer risico bij PFAS-blootstelling. Voor deze groepen is een filter ook buiten hotspot-zones te overwegen.
          </li>
        </ol>

        <CTABanner context="osmose" />

        <section className="mt-10 mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Gerelateerde onderwerpen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter/osmose" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">Osmose voor PFAS</h3>
              <p className="text-sm text-gray-600">Hoe werkt omgekeerde osmose tegen PFAS? Percentages en membraankeuze uitgelegd.</p>
            </Link>
            <Link href="/pfas-waterfilter/gebieden-nederland" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS risicogebieden Nederland</h3>
              <p className="text-sm text-gray-600">Dordrecht, Schiphol, Eindhoven en Westerschelde: per regio de actuele situatie.</p>
            </Link>
            <Link href="/keuzehulp/huurwoning" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">Waterfilter voor huurwoning</h3>
              <p className="text-sm text-gray-600">Welke filters mag u als huurder installeren? Rechten, opties en advies.</p>
            </Link>
            <Link href="/waterfilter/appartement" className="block p-4 bg-[#E0F2FE] rounded-xl hover:bg-blue-100 transition-colors border border-[#c7e6f5]">
              <h3 className="font-semibold text-[#003F5C] mb-1">Waterfilter voor appartement</h3>
              <p className="text-sm text-gray-600">Compact tafelmodel of onderbouw-RO: de beste opties voor kleine keukens.</p>
            </Link>
          </div>
        </section>

        <section id="faq" className="mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over PFAS-filter thuis
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
          <Link href="/pfas-waterfilter/testen" className="text-[#005F8A] underline">PFAS testen</Link> en{' '}
          <Link href="/pfas-waterfilter/normen-2026" className="text-[#005F8A] underline">EU-normen 2026</Link>.
        </p>

      </main>
    </>
  );
}
