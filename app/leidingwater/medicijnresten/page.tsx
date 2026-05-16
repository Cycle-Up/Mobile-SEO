import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: "Medicijnresten in drinkwater: risico's, normen en waterfilter",
  description:
    'Medicijnresten in drinkwater: ibuprofen, hormoonpillen, antibiotica en antidepressiva zijn meetbaar in Nederlands drinkwater. EU-norm in ontwikkeling. Osmosefilter verwijdert 80-95% van farmaceutische stoffen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/medicijnresten' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zitten er medicijnresten in Nederlands drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het RIVM rapporteerde in 2023 dat 51 farmaceutische stoffen zijn aangetroffen in Nederlandse drinkwaterbronnen. In het uiteindelijke drinkwater zijn de concentraties door zuiveringsprocessen lager, maar sporenconcentraties van diclofenac, metformine en enkele hormoonverstorende stoffen zijn meetbaar. De concentraties liggen in de nanogram-per-liter range en worden beschouwd als geen acuut risico voor de gezondheid bij de huidige niveaus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke medicijnresten komen het meest voor in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Nederlandse rivieren en drinkwaterbronnen worden met name gevonden: diclofenac (pijnstiller, 40-150 ng/L in rivieren), metformine (diabetes), 17-alfa-ethynylestradiol (EE2, hormoonpil), antibiotica zoals ciprofloxacin, antidepressiva zoals sertraline, en joodhoudende rontgencontrastmiddelen. Metformine en de joodstoffen komen het meest voor vanwege hun hoge gebruiksvolume en slechte biologische afbreekbaarheid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is het gevaarlijk om drinkwater met medicijnresten te drinken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Het RIVM en EFSA stellen dat bij de huidige concentraties in Nederlands drinkwater geen acuut gezondheidsrisico bestaat voor de gemiddelde volwassene. De concentraties zijn extreem laag (nanogram per liter). Wel is er wetenschappelijke discussie over langdurige blootstelling aan hormoonverstorende stoffen zoals EE2 voor kwetsbare groepen: zwangere vrouwen, baby\'s en mensen met hormoongeevoeligheid. Voorzorgsprincipe rechtvaardigt verdere monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter medicijnresten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, een omgekeerde-osmose filter verwijdert 80-95% van de meeste farmaceutische stoffen. Het RO-membraan met porieen van 0,0001 micron houdt grotere moleculen zoals hormonen, antibiotica en rontgencontrastmiddelen goed tegen. Kleinere moleculen zoals metformine worden voor 70-85% verwijderd. Dit is de best bewezen filtermethode voor farmaceutische stoffen in huishoudelijk gebruik.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werkt een Brita-filter tegen medicijnresten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, een gewone filterkan zoals Brita is niet effectief voor het verwijderen van farmaceutische stoffen. Standaard ionenwisselaarkorrels en de actieve koollaag in een filterkan verwijderen nauwelijks medicijnresten. Voor effectieve verwijdering van farmaceutische stoffen is omgekeerde osmose of een gecertificeerde UV-plus-actief-kool combinatie (NSF P473) nodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat doet de rioolwaterzuivering met medicijnresten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standaard rioolwaterzuiveringsinstallaties (RWZI) verwijderen 20-80% van farmaceutische stoffen, afhankelijk van de stof. Biologisch goed afbreekbare stoffen worden beter verwijderd; persistente stoffen zoals rontgencontrastmiddelen amper. Nieuwe ozontechnologie bij drinkwaterbedrijven (zoals bij Oasen en Waternet) verwijdert 90-99% aanvullend. Nederland investeert in uitbreiding van ozonbehandeling bij drinkwaterbedrijven.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe komen medicijnresten in het drinkwater terecht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De voornaamste route is via menselijk urine en feces: het lichaam scheidt een deel van ingenomen medicijnen onveranderd uit. Deze stoffen passeren de rioolwaterzuivering gedeeltelijk en komen zo in oppervlaktewater terecht. Een tweede route is het direct wegspoelen van medicijnen door het toilet, wat streng wordt afgeraden. Drinkwaterbedrijven onttrekken water uit rivieren (Maas, Rijn) en meren die deze stoffen bevatten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat kan ik zelf doen om medicijnresten in water te verminderen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lever overtollige of verlopen medicijnen altijd in bij de apotheek — deze worden verbrand op hoge temperatuur (>1100 graden Celsius) zodat ze niet in het milieu terechtkomen. Spoel nooit medicijnen door het toilet of de gootsteen. Voor thuisgebruik biedt een osmosefilter de beste bescherming. Kies voor medicijnen die minder milieubelastend zijn als uw arts daarin keuze geeft.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: "Medicijnresten in drinkwater: risico's, normen en waterfilter",
  description:
    'Medicijnresten in drinkwater: ibuprofen, hormoonpillen, antibiotica en antidepressiva zijn meetbaar in Nederlands drinkwater. EU-norm in ontwikkeling. Osmosefilter verwijdert 80-95% van farmaceutische stoffen.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/medicijnresten',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function MedicijnrestenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Medicijnresten in drinkwater', item: 'https://waterfilterplatform.nl/leidingwater/medicijnresten' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/leidingwater" className="hover:underline">Leidingwater</Link> &rsaquo;{' '}
          <span>Medicijnresten in drinkwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Medicijnresten in drinkwater: risico&apos;s, normen en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Ibuprofen, hormoonpillen, antibiotica en antidepressiva zijn in meetbare hoeveelheden
            aangetroffen in Nederlandse drinkwaterbronnen. De concentraties zijn extreem laag,
            maar de vraag naar langetermijneffecten en effectieve filtratie groeit. Dit artikel
            legt uit waar deze stoffen vandaan komen, wat de risicos zijn en hoe een osmosefilter
            helpt.
          </p>
        </section>

        <QuickAnswer answer="Medicijnresten zoals diclofenac, hormoonpillen en antibiotica zijn in sporenconcentraties (nanogram/liter) aanwezig in Nederlands drinkwater. RIVM stelt: geen acuut risico bij huidige niveaus. Een osmosefilter verwijdert 80-95% van farmaceutische stoffen. Lever medicijnen altijd in bij de apotheek." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat zijn medicijnresten in water?
        </h2>
        <p className="text-gray-700 mb-4">
          Farmaceutische stoffen komen op twee hoofdmanieren in het oppervlaktewater en drinkwater terecht.
          De grootste route is via <strong>menselijk urine en feces</strong>: het menselijk lichaam breekt
          ingenomen medicijnen niet volledig af en scheidt een deel onveranderd uit. Via het riool bereiken
          deze stoffen de rioolwaterzuivering. Omdat standaard zuiveringsinstallaties niet zijn ontworpen
          om farmaceutische moleculen te verwijderen, passeren veel stoffen gedeeltelijk en belanden zij
          in rivieren, meren en uiteindelijk drinkwaterbronnen.
        </p>
        <p className="text-gray-700 mb-4">
          De tweede route is <strong>direct wegspoelen van medicijnen</strong> door het toilet of de
          gootsteen. Hoewel overheidscampagnes dit gedrag al jaren proberen te ontmoedigen, gebeurt het
          nog op grote schaal. Apothekers en huisartsen adviseren nadrukkelijk om niet-gebruikte medicijnen
          in te leveren bij de apotheek.
        </p>
        <p className="text-gray-700 mb-6">
          In het watersysteem worden de stoffen verder verspreid: drinkwaterbedrijven die water onttrekken
          uit de Maas, de Rijn of het IJsselmeer treffen farmaceutische verbindingen aan die al kilometers
          stroomopwaarts zijn geloosd. Zelfs na zuiveringsprocessen blijven sporenconcentraties meetbaar
          in het eindproduct.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke stoffen worden aangetroffen?
        </h2>
        <p className="text-gray-700 mb-4">
          Het RIVM publiceerde in 2023 dat 51 farmaceutische stoffen zijn aangetroffen in Nederlandse
          drinkwaterbronnen. De meest voorkomende en meest besproken stoffen zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Diclofenac</strong> (ontstekingsremmer en pijnstiller): een van de meest aangetroffen
            stoffen in Europese rivieren. In de grote Nederlandse rivieren zijn concentraties van
            40&ndash;150 nanogram per liter (ng/L) gemeten. Diclofenac is schadelijk voor vissen en
            aquatische vogels.
          </li>
          <li>
            <strong>17-alfa-ethynylestradiol (EE2)</strong> (synthetisch oestrogeen, werkzame stof
            in de hormoonpil): al bij zeer lage concentraties hormoonverstorend voor vissen. EE2
            veroorzaakt verwijfving van mannelijke vissen (&ldquo;intersex&rdquo;) in rivieren. Vanwege
            dit ecologische effect staat EE2 op de EU-lijst van prioritaire stoffen.
          </li>
          <li>
            <strong>Metformine</strong> (diabetesmedicijn): door het hoge gebruik van metformine in
            Nederland en de slechte biologische afbreekbaarheid is het een van de meest persistente
            farmaceutische stoffen in oppervlaktewater.
          </li>
          <li>
            <strong>Antibiotica</strong> zoals ciprofloxacin en amoxicilline: aanwezigheid in water
            draagt bij aan de ontwikkeling van antibioticaresistentie bij waterbacterieen &mdash; een
            aandachtspunt voor de volksgezondheid op langere termijn.
          </li>
          <li>
            <strong>Antidepressiva</strong> zoals sertraline en fluoxetine: meetbaar in Nederlandse
            rivieren en drinkwaterbronnen, al zijn de concentraties laag.
          </li>
          <li>
            <strong>Rontgencontrastmiddelen</strong> (joodhoudende stoffen zoals iohexol en iomeprol):
            uiterst persistent in water en nauwelijks te verwijderen door biologische zuiveringsprocessen.
            Ze komen in grote hoeveelheden voor in ziekenhuisafvalwater.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Concentraties: nanogram per liter
        </h2>
        <p className="text-gray-700 mb-4">
          De concentraties van medicijnresten in drinkwater worden uitgedrukt in <strong>nanogram per
          liter (ng/L)</strong>, ook wel aangeduid als sporenconcentraties. Om dit in perspectief te
          plaatsen: 1 ng/L staat gelijk aan 1 gram in 1 miljard liter water &mdash; vergelijkbaar met
          een suikerkorrel opgelost in een olympisch zwembad.
        </p>
        <p className="text-gray-700 mb-4">
          Twaalf van de 51 aangetroffen farmaceutische stoffen zaten in 2023 boven de ecologische
          streefwaarden voor aquatisch leven, aldus het RIVM. Dit betekent dat de concentraties laag
          genoeg zijn om geen acuut risico voor de mens te vormen, maar hoog genoeg om meetbare effecten
          te hebben op waterorganismen zoals vissen, kikkers en waterinsecten.
        </p>
        <p className="text-gray-700 mb-6">
          Voor mensen stelt zowel het RIVM als de Europese Autoriteit voor Voedselveiligheid (EFSA)
          dat bij de huidige concentraties in Nederlands drinkwater geen acuut gezondheidsrisico bestaat.
          Wel is er toenemende wetenschappelijke aandacht voor langdurige blootstelling aan lage dosissen
          hormoonverstorende stoffen, met name voor kwetsbare groepen zoals zwangere vrouwen, foetussen
          en jonge kinderen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-normen en wetgeving
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU-richtlijn Prioritaire Stoffen (2013/39/EU)</strong> stelt milieukwaliteitsnormen
          voor 45 prioritaire stoffen in oppervlaktewater. EE2 (de hormoonpil) en diclofenac zijn
          opgenomen als stoffen waarop gemonitord moet worden, maar de vastgestelde normen zijn nog niet
          volledig bindend als drinkwaternormen.
        </p>
        <p className="text-gray-700 mb-4">
          De <strong>nieuwe EU-drinkwaterrichtlijn (2020/2184)</strong> vereist een risicogebaseerde
          aanpak voor monitoring. Lidstaten moeten identificeren welke stoffen in hun specifieke
          drinkwaterbronnen voorkomen en op basis daarvan monitoringprogrammas opstellen. Dit betekent
          dat medicijnresten steeds prominenter in beeld komen bij de watertoets.
        </p>
        <p className="text-gray-700 mb-6">
          Nederland loopt relatief voorop: Vitens, PWN, Dunea en andere drinkwaterbedrijven monitoren
          actief op tientallen farmaceutische stoffen. Zij publiceren resultaten in hun jaarlijkse
          kwaliteitsrapporten. Ga voor de meest actuele gegevens naar de website van uw drinkwaterbedrijf
          of het{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">
            overzicht van verontreinigingen in leidingwater
          </Link>
          .
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Rioolwaterzuivering: wat wordt verwijderd?
        </h2>
        <p className="text-gray-700 mb-4">
          Standaard rioolwaterzuiveringsinstallaties (RWZI) zijn ontworpen voor het verwijderen van
          organisch materiaal, stikstof en fosfor &mdash; niet voor farmaceutische moleculen. De
          verwijderingsefficiency varieert sterk per stof:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Goed biologisch afbreekbare stoffen (sommige antibiotica): 60&ndash;80% verwijdering</li>
          <li>Diclofenac en ibuprofen: 20&ndash;60% verwijdering in standaard RWZI</li>
          <li>EE2 (hormoonpil): 70&ndash;80% verwijdering, maar resterende concentraties zijn al ecologisch actief</li>
          <li>Rontgencontrastmiddelen (joodstoffen): minder dan 20% verwijdering &mdash; uiterst persistent</li>
          <li>Metformine: 40&ndash;70% verwijdering</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Drinkwaterbedrijven als Oasen (Zuid-Holland) en Waternet (Amsterdam) experimenteren met
          <strong> ozonbehandeling</strong> als aanvullende zuiveringsstap. Ozon breekt farmaceutische
          moleculen af door oxidatie en bereikt een verwijderingsefficiency van 90&ndash;99% voor de
          meeste stoffen. Actief-koolfiltratie na ozonbehandeling vangt de afbraakproducten op. De kosten
          van deze extra zuiveringsstap zijn aanzienlijk, maar de technologie verspreidt zich langzaam
          over de sector.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterfilters voor farmaceutische stoffen
        </h2>
        <p className="text-gray-700 mb-4">
          Voor consumenten die extra bescherming willen, zijn verschillende filteropties beschikbaar.
          De effectiviteit verschilt sterk per methode:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering farmaceutische stoffen</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Opmerking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Osmosefilter (RO)</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">Best bewezen methode voor thuisgebruik</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">UV + actief kool (gecertificeerd)</td>
                <td className="border border-gray-300 px-3 py-2">85&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">NSF/ANSI P473 certificering vereist</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Granulaire actieve kool (GAC)</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;80%</td>
                <td className="border border-gray-300 px-3 py-2">Stofafhankelijk; vereist regelmatige vervanging</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Standaard filterkan</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2">Ongeschikt voor farmaceutische stoffen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link>{' '}
          is de meest effectieve thuisoplossing. Het RO-membraan met porieen van 0,0001 micron houdt
          grotere moleculen zoals hormonen, antibiotica en rontgencontrastmiddelen tegen. Voor kleinere
          moleculen zoals metformine is de verwijdering iets lager (70&ndash;85%), maar nog altijd
          significant.
        </p>
        <p className="text-gray-700 mb-6">
          Actief kool in <strong>granulaatsvorm</strong> (GAC, geen persvorm) adsorbeert een deel
          van de farmaceutische stoffen door zijn enorme inwendige oppervlak, maar de effectiviteit
          is stofafhankelijk en neemt af naarmate het kool verzadigd raakt. Regelmatige filtervervanging
          is essentieel. Blokkoolfilters zijn minder effectief dan granulaire kool voor deze toepassing.
          Normale filterkans verwijderen nauwelijks farmaceutische stoffen.
        </p>

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat kunt u zelf doen?
        </h2>
        <p className="text-gray-700 mb-4">
          De individuele consument heeft beperkte invloed op de kwaliteit van drinkwaterbronnen, maar
          twee acties maken concreet verschil:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Medicijnen inleveren bij de apotheek:</strong> apotheken accepteren al uw niet
            gebruikte, verlopen of overgebleven medicijnen gratis. Ze worden verbrand bij meer dan
            1.100 graden Celsius in gespecialiseerde verbrandingsovens, waardoor ze niet in het milieu
            terechtkomen. Dit geldt voor tabletten, vloeistoffen, zalven en pleisters.
          </li>
          <li>
            <strong>Nooit medicijnen door het toilet:</strong> ook kleine hoeveelheden tellen op en
            passeren de rioolwaterzuivering gedeeltelijk. Een tablet paracetamol door het toilet is
            een kleine bijdrage, maar schaalgrootte maakt dit een relevante bron.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor extra thuisbescherming, met name als u tot een kwetsbare groep behoort (zwanger,
          kleine kinderen, immuungecompromitteerd), kunt u een osmosefilter overwegen. Zie ook
          onze pagina over{' '}
          <Link href="/waterfilter/hormonen-medicijnen" className="text-[#005F8A] underline">
            waterfilters voor hormonen en medicijnen
          </Link>{' '}
          voor een vergelijking van specifieke systemen.
        </p>

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over medicijnresten in drinkwater
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
          <Link href="/waterfilter" className="text-[#005F8A] underline">waterfilter vergelijken</Link>,{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link> en{' '}
          <Link href="/waterfilter/hormonen-medicijnen" className="text-[#005F8A] underline">filter voor hormonen en medicijnen</Link>.
        </p>
      </main>
    </>
  );
}
