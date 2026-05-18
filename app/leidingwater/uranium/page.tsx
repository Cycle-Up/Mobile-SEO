import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Uranium in drinkwater: WHO-norm, NL hotspots en waterfilter',
  description:
    'Uranium in grondwater komt voor in delen van Brabant en de Achterhoek door geologische bodemlagen. WHO-richtwaarde 30 ug/L. Osmosefilter verwijdert 95-99%.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/uranium' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Zit er uranium in Nederlands leidingwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In leidingwater van Nederlandse drinkwaterbedrijven wordt zelden meer dan 5 ug/L uranium gemeten, ruim onder de WHO-richtwaarde van 30 ug/L. Drinkwaterbedrijven zuiveren grondwater en mengen verschillende bronnen, waardoor uraniumconcentraties laag blijven. Het risico ligt bij eigenaren van particuliere bronnen en putten in geologisch kwetsbare gebieden zoals delen van Brabant (de Kempen), de Achterhoek en de oostelijke Veluwe waar diepe grondwaterlagen uraniumhoudend zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat is de EU-norm voor uranium in drinkwater per 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De EU-drinkwaterrichtlijn 2020/2184 introduceert per 2026 voor het eerst een Europese norm voor uranium van 30 microgram per liter. Voorheen was er geen bindende EU-grens; alleen de WHO-richtwaarde van 30 ug/L (sinds 2017) en de USEPA-norm van 30 ug/L. Lidstaten moeten vanaf 2026 actief monitoren en bij overschrijding maatregelen treffen. Voor Nederlandse drinkwaterbedrijven betekent dit weinig verandering omdat de concentraties al laag zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welk gezondheidsrisico geeft uranium in drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Uranium in drinkwater heeft twee soorten risicos. Chemische toxiciteit is de belangrijkste: uranium concentreert zich in de nieren en langdurige blootstelling boven 30 ug/L kan tubulaire nierschade veroorzaken (verstoorde reabsorptie van eiwitten en glucose). Radiologische toxiciteit van de alpha-straling is bij drinkwaterconcentraties klein in vergelijking met natuurlijke achtergrondstraling. Risicogroepen zijn kinderen, mensen met nierproblemen en zwangeren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Verwijdert een osmosefilter uranium uit drinkwater?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, omgekeerde osmose is zeer effectief tegen uranium: 95-99% verwijdering. Uranium komt in water voor als opgeloste uranylionen (UO2 2+) of als anionische uranyl-carbonaat-complexen (UO2(CO3)2 2-), beide te groot om door het RO-membraan te passeren. Nanofiltratie haalt 90-95%; ionenwisseling met anion-uitwisselharsen haalt 95% of meer. Actief kool werkt niet voor uranium en is geen geschikte oplossing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe laat ik mijn eigen put testen op uranium?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neem een watermonster en stuur het naar een geaccrediteerd laboratorium zoals Kiwa, Eurofins of SGS Intron. Uranium-analyse gebeurt met ICP-MS (massaspectrometrie met inductief gekoppeld plasma). Kosten: 80-150 euro voor een uraniumtest alleen, 200-350 euro als onderdeel van een uitgebreid zwaarmetalenpakket. Voor particuliere putten in geologisch kwetsbare gebieden (Brabant, Achterhoek, Veluwe) is testen sterk aanbevolen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is uranium in drinkwater radioactief gevaarlijk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de praktijk is de radiologische component van uranium in drinkwater klein. Natuurlijk uranium bestaat voor 99,3% uit U-238 met een halveringstijd van 4,5 miljard jaar; de stralingsintensiteit per gram is dus zeer laag. De alpha-straling reikt niet door huid, maar bij ingestie wordt een klein deel opgenomen. De chemische nier-toxiciteit treedt op bij lagere concentraties dan een meetbaar radiologisch effect; daarom is de WHO-richtwaarde van 30 ug/L primair op chemische toxiciteit gebaseerd.',
      },
    },
    {
      '@type': 'Question',
      name: 'Meten Nederlandse watermaatschappijen uranium standaard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Op dit moment is uranium nog geen verplichte standaardparameter; wel meten de meeste drinkwaterbedrijven het periodiek, vooral in gebieden met uraniumhoudende geologie. Per 2026 wordt monitoring verplicht onder de EU-richtlijn 2020/2184. Bij eigen putten ligt de verantwoordelijkheid bij de eigenaar zelf. De waterkwaliteitsrapporten van uw drinkwaterbedrijf (online beschikbaar bij Brabant Water, Vitens, Evides en anderen) vermelden vaak al uraniumconcentraties.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Uranium in drinkwater: WHO-norm, NL hotspots en waterfilter',
  description:
    'Uranium in grondwater komt voor in delen van Brabant en de Achterhoek door geologische bodemlagen. Osmosefilter verwijdert 95-99% uranium.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/uranium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LeidingwaterUraniumPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Uranium in drinkwater', item: 'https://waterfilterplatform.nl/leidingwater/uranium' },
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
          <span>Uranium in drinkwater</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Uranium in drinkwater: WHO-norm, NL hotspots en waterfilter
          </h1>
          <p className="text-[#005F8A] text-lg">
            Uranium in grondwater is in Nederland een lokaal fenomeen: in de meeste regio&apos;s
            speelt het niet, maar in delen van Brabant en de Achterhoek leidt uraniumhoudende
            ondergrond tot incidentele waarden boven de WHO-richtwaarde. Vanaf 2026 hanteert ook de
            EU een wettelijke norm van 30 ug/L. Voor eigen putten is testen aanbevolen.
          </p>
        </section>

        <QuickAnswer answer="Uranium komt natuurlijk voor in diep grondwater in delen van Brabant, Achterhoek en oostelijke Veluwe. WHO-richtwaarde 30 ug/L, EU-norm vanaf 2026 ook 30 ug/L. Nederlands leidingwater zit doorgaans onder 5 ug/L. In particuliere putten incidenteel 30-100 ug/L. Omgekeerde osmose verwijdert 95-99% en is de beste thuisoplossing." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat is uranium in drinkwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Uranium (U) is een natuurlijk radioactief element dat in zeer kleine hoeveelheden in vrijwel
          alle aardkorstgesteenten voorkomt. Het bestaat hoofdzakelijk uit twee isotopen: U-238 (99,3%
          van natuurlijk uranium) en U-235 (0,7%). In water lost uranium op als <strong>uranylionen
          (UO2 2+)</strong> of in carbonaat-rijke wateren als <strong>uranyl-carbonaat-complexen
          (UO2(CO3)2 2-)</strong>. Beide vormen zijn chemisch reactief en kunnen door osmose, ionen-
          uitwisseling of speciale adsorbers worden verwijderd.
        </p>
        <p className="text-gray-700 mb-6">
          De uraniumconcentratie in grondwater hangt af van uitloging uit uraniumhoudende
          geologische lagen. Granieten, fosfaatgesteenten en sommige sedimentaire formaties zijn
          uraniumrijk. Wanneer regenwater of grondwater met deze lagen in contact komt, lost
          uranium langzaam op. De concentratie varieert sterk lokaal, soms zelfs binnen enkele honderden
          meters.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Voorkomen in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland zijn er enkele regio&apos;s met uraniumhoudende ondergrond:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>De Kempen (Noord-Brabant):</strong> diepe grondwaterlagen bevatten lokaal verhoogd uranium</li>
          <li><strong>De Achterhoek (Gelderland):</strong> oostelijke kalkrijke formaties met sporen uranium</li>
          <li><strong>Oostelijke Veluwe:</strong> sedimentlagen met uraniumhoudende mineralen</li>
        </ul>
        <p className="text-gray-700 mb-6">
          In leidingwater van Nederlandse drinkwaterbedrijven wordt zelden meer dan 5 ug/L uranium
          gemeten. Drinkwaterbedrijven gebruiken coagulatie met ijzer- of aluminiumzouten, die uranium
          mee neerslaan, en mengen bronwaters om concentraties laag te houden. In particuliere
          putten in de bovengenoemde gebieden zijn incidenteel waarden tussen 30 en 100 ug/L
          gerapporteerd. Eigenaren van eigen bronnen doen er verstandig aan hun water te laten testen.
          Zie ook <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">verontreinigingen in leidingwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Normen: WHO, EU en USEPA
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>WHO-richtwaarde (sinds 2017):</strong> 30 ug/L, vooral op chemische toxiciteit (nieren) gebaseerd</li>
          <li><strong>EU-drinkwaterrichtlijn 2020/2184:</strong> 30 ug/L, bindend vanaf 2026 in alle lidstaten</li>
          <li><strong>USEPA (Verenigde Staten):</strong> 30 ug/L sinds 2003</li>
          <li><strong>Duitsland (TrinkwV):</strong> 10 ug/L &mdash; strenger dan EU-norm</li>
          <li><strong>Nederland (huidig):</strong> nog geen specifieke wettelijke grens; volgt vanaf 2026 de EU-norm</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidseffecten
        </h2>
        <p className="text-gray-700 mb-4">
          Uranium heeft twee onafhankelijke toxiciteitsmechanismen:
        </p>
        <p className="text-gray-700 mb-4">
          <strong>1. Chemische toxiciteit:</strong> uranium concentreert zich na opname in de
          niertubuli en kan bij langdurige blootstelling boven 30 ug/L tubulaire nierschade
          veroorzaken. Symptomen zijn een verhoogde uitscheiding van bicarbonaat, calcium, glucose en
          eiwitten in de urine. Dit effect is in epidemiologische studies in Finland, Canada en de VS
          aangetoond bij chronische consumptie van uraniumhoudend putwater.
        </p>
        <p className="text-gray-700 mb-6">
          <strong>2. Radiologische toxiciteit:</strong> uranium-238 zendt alpha-straling uit die bij
          inwendige blootstelling celschade kan veroorzaken. Bij drinkwaterconcentraties is dit
          effect echter zeer beperkt in vergelijking met natuurlijke achtergrondstraling. De
          chemische toxiciteit treedt op bij lagere concentraties dan een meetbaar
          stralingsgerelateerd effect, daarom is de WHO-richtwaarde primair op nieren-toxiciteit
          gebaseerd.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risicogroepen
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Kinderen:</strong> per kg lichaamsgewicht een hogere wateropname; ontwikkelende nieren zijn gevoeliger</li>
          <li><strong>Mensen met bestaande nierproblemen:</strong> verminderde reserve om extra toxische belasting te verwerken</li>
          <li><strong>Zwangeren:</strong> uranium kan via de placenta de foetus bereiken; voorzichtigheid geboden</li>
          <li><strong>Eigen-putgebruikers in risicogebieden:</strong> langdurige consumptie van ongezuiverd putwater is zonder testen ongewenst</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Verwijdering van uranium
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Methode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Toepassing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose (RO)</td>
                <td className="border border-gray-300 px-3 py-2">95-99%</td>
                <td className="border border-gray-300 px-3 py-2">Beste thuisoplossing, onder aanrecht</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Nanofiltratie</td>
                <td className="border border-gray-300 px-3 py-2">90-95%</td>
                <td className="border border-gray-300 px-3 py-2">Centrale waterzuivering</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Anion-uitwisseling</td>
                <td className="border border-gray-300 px-3 py-2">95%+</td>
                <td className="border border-gray-300 px-3 py-2">Werkt op carbonaat-complexen, professioneel</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">IJzer/aluminium coagulatie</td>
                <td className="border border-gray-300 px-3 py-2">80-95%</td>
                <td className="border border-gray-300 px-3 py-2">Drinkwaterbedrijven, industrieel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief koolfilter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;20%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt voor uranium</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-6">
          Voor huishoudens met verhoogd uranium in eigen bronwater is een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde-osmose-installatie</Link> de
          meest praktische en effectieve oplossing. Een onder-aanrecht-systeem van 300-800 euro
          inclusief installatie verwijdert 95-99% uranium en tegelijk ook arseen, nitraat, PFAS en
          andere zware metalen. Een <Link href="/waterfilter/actief-kool" className="text-[#005F8A] underline">actief koolfilter</Link> alleen
          is voor uranium niet voldoende.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Testen op uranium
        </h2>
        <p className="text-gray-700 mb-4">
          Uranium-analyse vereist gevoelige laboratoriumapparatuur, meestal ICP-MS (Inductively
          Coupled Plasma Mass Spectrometry) met een detectiegrens van 0,1 ug/L. Geaccrediteerde labs
          in Nederland:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Kiwa Water Research:</strong> marktleider; uranium 80-150 euro</li>
          <li><strong>Eurofins Environment Testing:</strong> snel; uitgebreid zwaarmetalen-pakket inclusief uranium voor 200-350 euro</li>
          <li><strong>SGS Intron:</strong> uitgebreide rapportage met advies</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor eigen putten in geologisch kwetsbare gebieden (de Kempen, Achterhoek, oostelijke
          Veluwe) is een uraniumtest sterk aanbevolen, bij voorkeur als onderdeel van een breder
          waterkwaliteitsonderzoek dat ook arseen, nitraat, lood en bacteriologie omvat. Lees meer
          over <Link href="/leidingwater/kwaliteit" className="text-[#005F8A] underline">drinkwaterkwaliteit</Link> en
          de overzichtspagina <Link href="/waterfilter/zwaar-metalen" className="text-[#005F8A] underline">zware metalen in drinkwater</Link>.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over uranium in drinkwater
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
          <Link href="/waterfilter/arseen" className="text-[#005F8A] underline">arseen in drinkwater</Link>,{' '}
          <Link href="/leidingwater/nitraat" className="text-[#005F8A] underline">nitraat in leidingwater</Link>,{' '}
          <Link href="/waterfilter/zwaar-metalen" className="text-[#005F8A] underline">zware metalen filter</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose</Link>.
        </p>
        <p className="text-gray-700 mt-4">
          Verdiep uw kennis: <Link href="/stoffen-in-drinkwater/radioactieve-stoffen" className="text-[#005F8A] hover:underline font-medium">Radioactieve stoffen in drinkwater: radon, uranium en radium</Link>.
        </p>
      </main>
    </>
  );
}
