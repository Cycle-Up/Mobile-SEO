import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Aluminium in leidingwater: EU-norm 200 ug/L en gezondheid',
  description:
    'Aluminium in leidingwater: EU-indicatornorm 200 ug/L. Gebruik als flocculant bij waterzuivering. Osmosefilter verwijdert 95-99% aluminium.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/aluminium' },
  openGraph: {
    title: 'Aluminium in leidingwater: EU-norm 200 ug/L en gezondheid',
    description:
      'Aluminium in leidingwater: EU-indicatornorm 200 ug/L. Gebruik als flocculant bij waterzuivering. Osmosefilter verwijdert 95-99% aluminium.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Wat is de EU-norm voor aluminium in drinkwater?',
    answer:
      'De EU-indicatornorm voor aluminium in drinkwater is 200 microgram per liter (ug/L), vastgelegd in de Drinkwaterrichtlijn 2020/2184. Het is een indicatorwaarde, geen gezondheidskundige grenswaarde. Dit betekent dat overschrijding niet automatisch een gezondheidsrisico vormt, maar wel aanleiding geeft tot nader onderzoek naar de waterzuivering of leidingen.',
  },
  {
    question: 'Hoe komt aluminium in leidingwater terecht?',
    answer:
      'De belangrijkste bron van aluminium in drinkwater is het gebruik van aluminiumsulfaat (Al2(SO4)3) als flocculant bij de waterzuivering. Dit stof laat vuile deeltjes samenklonteren zodat ze kunnen bezinken. Een klein restant aluminium blijft in het drinkwater aanwezig. Secundaire bronnen zijn aluminium leidingen in oude gebouwen (zeldzaam in Nederland) en zure grond in bepaalde regioos die meer aluminium uit de bodem uitloogt.',
  },
  {
    question: 'Hoeveel aluminium zit er in Nederlands leidingwater?',
    answer:
      'In Nederland blijft aluminium in geleverd drinkwater in de regel ruim onder de indicatornorm van 200 ug/L. Typische waarden variëren van 10 tot 80 ug/L afhankelijk van het waterbedrijf en de zuiveringsmethode. Drinkwaterbedrijven die aluminiumsulfaat als flocculant gebruiken rapporteren hogere waarden dan bedrijven die alternatieve flocculanten (zoals ijzerchloride) toepassen.',
  },
  {
    question: 'Is aluminium in drinkwater gevaarlijk voor de gezondheid?',
    answer:
      'Het RIVM stelt dat aluminium in Nederlands drinkwater bij de gemeten concentraties geen aantoonbaar gezondheidsrisico vormt voor de algemene bevolking. De lang geopperde link tussen aluminiumblootstelling en de ziekte van Alzheimer is door het RIVM en de WHO niet onderbouwd voor de hoeveelheden in drinkwater. Wel geldt extra voorzichtigheid voor dialysepatienten en mensen met ernstige nierproblemen, voor wie zelfs lage aluminiumniveaus relevant kunnen zijn.',
  },
  {
    question: 'Verwijdert een osmosefilter aluminium uit leidingwater?',
    answer:
      'Ja, omgekeerde osmose verwijdert 95-99% van aluminium uit leidingwater. Het RO-membraan houdt Al3+-ionen effectief tegen vanwege hun drievoudige positieve lading en de grootte van de gehydrateerde ionen. Dit maakt omgekeerde osmose de meest effectieve huishoudelijke methode voor aluminiumverwijdering. Na osmosefiltratie zit typisch minder dan 5 ug/L aluminium in het gefilterde water.',
  },
  {
    question: 'Hebben aluminiumkeukengerei en aluminiumfolie invloed op mijn aluminiuminname?',
    answer:
      'Ja, koken in aluminium pannen en gebruik van aluminiumfolie dragen meer bij aan de totale aluminiuminname dan drinkwater. Met name zure voedingsmiddelen (tomaten, citrusfruit, azijn) lossen meer aluminium op uit aluminiumkeukengerei. De EFSA (Europese voedselagentschap) schat dat de gemiddelde Europeaan 1 tot 10 mg aluminium per dag binnenkrijgt via voeding, terwijl drinkwater typisch minder dan 0,2 mg per dag bijdraagt.',
  },
  {
    question: 'Zijn er groepen die extra gevoelig zijn voor aluminium in drinkwater?',
    answer:
      'Dialysepatienten zijn de meest kwetsbare groep. Bij hemodialyse worden grote hoeveelheden water direct met het bloed in contact gebracht; zelfs lage aluminiumniveaus kunnen dan accumuleren. Dialysewater heeft een strenge norm van maximaal 30 ug/L (WHO) of zelfs 10 ug/L (sommige richtlijnen). Andere potentieel kwetsbare groepen zijn mensen met chronische nierproblemen en zuigelingen die met leidingwater bereide flesvoeding krijgen.',
  },
  {
    question: 'Wat is het verschil tussen aluminium als indicatornorm en als gezondheidskundige grenswaarde?',
    answer:
      'Een gezondheidskundige grenswaarde (zoals die voor nitraat of lood) is gebaseerd op directe toxicologische gegevens en mag niet worden overschreden. Een indicatornorm (zoals voor aluminium) is meer een waterkwaliteits- en zuiveringsindicator: overschrijding wijst op een mogelijk probleem in de zuivering of leidingen maar impliceert niet automatisch een gezondheidsrisico. Aluminium heeft een indicatornorm omdat de gezondheidsrisico-data bij normale drinkwaterconcentraties onvoldoende zijn om een harde grenswaarde te rechtvaardigen.',
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
  headline: 'Aluminium in leidingwater: EU-norm 200 ug/L en gezondheid',
  description:
    'Aluminium in leidingwater: EU-indicatornorm 200 ug/L. Gebruik als flocculant bij waterzuivering. Osmosefilter verwijdert 95-99% aluminium.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/aluminium',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LeidingwaterAluminiumPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
              { '@type': 'ListItem', position: 3, name: 'Aluminium in leidingwater', item: 'https://waterfilterplatform.nl/leidingwater/aluminium' },
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
            <Link href="/leidingwater" className="hover:underline">Leidingwater</Link>
            <span className="mx-2">/</span>
            <span>Aluminium in leidingwater</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Aluminium in leidingwater: normen, bronnen en gezondheid
          </h1>
          <QuickAnswer answer="Aluminium komt in leidingwater voor als restant van de waterzuivering (aluminiumsulfaat als flocculant). De EU-indicatornorm is 200 microgram per liter. In Nederland blijft aluminium in geleverd drinkwater ruim onder deze norm. Een osmosefilter verwijdert 95-99%." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-10 mb-4">
          Wat is aluminium in leidingwater?
        </h2>
        <p className="text-gray-700 mb-4">
          Aluminium (Al) is het meest voorkomende metaal in de aardkorst en het derde meest voorkomende element na zuurstof en silicium. In leidingwater is aluminium aanwezig als het Al3+-ion, ook wel het aluminiumkation genoemd. Bij hogere pH (zoals in drinkwater, pH 7 tot 8,5) precipiteert aluminium gedeeltelijk als aluminiumhydroxide, maar een deel blijft in oplossing.
        </p>
        <p className="text-gray-700 mb-6">
          Aluminium in drinkwater is voor de meeste mensen onzichtbaar, geurloos en smaakloos bij de concentraties die voorkomen in Nederlands leidingwater. Pas bij zeer hoge concentraties (ver boven 1000 ug/L) kan water troebel worden of een wrang smaakje krijgen — situaties die in regulier drinkwater in Nederland niet voorkomen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hoe komt aluminium in drinkwater terecht?
        </h2>
        <p className="text-gray-700 mb-4">
          De voornaamste bron van aluminium in Nederlands drinkwater is het gebruik van <strong>aluminiumsulfaat (Al2(SO4)3)</strong> als flocculant bij de oppervlaktewaterzuivering. Dit proces werkt als volgt:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-4 space-y-2">
          <li>Ruw oppervlaktewater (Rijn, Maas) bevat gesuspendeerde deeltjes: klei, organisch materiaal, algen en andere zwevende stoffen.</li>
          <li>Aluminiumsulfaat wordt toegevoegd en hydrolyseert tot aluminiumhydroxide-vlokken (flocculatie).</li>
          <li>De positief geladen aluminiumhydroxide-vlokken trekken de negatief geladen vuile deeltjes aan en laten ze samenklonteren (coagulatie).</li>
          <li>De grotere vlokken bezinken in bezinkingsbassins of worden eruit gefilterd.</li>
          <li>Een klein restant aluminium (niet alle vlokken worden verwijderd) blijft in het behandelde water achter.</li>
        </ol>
        <p className="text-gray-700 mb-4">
          Als alternatief voor aluminiumsulfaat gebruiken sommige drinkwaterbedrijven <strong>ijzerchloride (FeCl3)</strong> of <strong>polyaluminiumchloride (PAC)</strong> als flocculant. IJzerchloride leidt tot lagere aluminiumniveaus in het eindproduct. PAC is een meer gecontroleerde aluminiumverbinding die doorgaans lagere aluminiumresten in het water achterlaat dan traditioneel aluminiumsulfaat.
        </p>
        <p className="text-gray-700 mb-6">
          Secundaire bronnen zijn aluminium leidingen (zeldzaam in moderne Nederlandse woningen, maar soms aanwezig in woningen gebouwd voor 1970), zure grond in heidegebieden die aluminium uitloogt naar grondwater, en zure regen die aluminium mobiliseert uit bodemdeeltjes.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          EU-indicatornorm: 200 microgram per liter
        </h2>
        <p className="text-gray-700 mb-4">
          De <strong>EU-indicatornorm voor aluminium is 200 ug/L</strong>, vastgelegd in Bijlage I, Deel C van de Drinkwaterrichtlijn 2020/2184. Het is nadrukkelijk een <em>indicatornorm</em>, geen gezondheidskundige grenswaarde (zoals die voor nitraat of lood). Dit onderscheid is belangrijk:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
          <li><strong>Gezondheidskundige grenswaarden</strong> (zoals nitraat 50 mg/L, lood 5 ug/L) zijn gebaseerd op toxicologische risicobeoordelingen en mogen nooit worden overschreden zonder risico voor de volksgezondheid.</li>
          <li><strong>Indicatornormen</strong> dienen als signaleringswaarden voor de waterkwaliteitsmonitoring en de doeltreffendheid van de zuivering. Overschrijding is een aanleiding voor nader onderzoek, niet automatisch een gezondheidscrisis.</li>
        </ul>
        <p className="text-gray-700 mb-6">
          In Nederland worden alle drinkwaterbedrijven verplicht aluminium te meten en te rapporteren. Uit de jaarlijkse monitoringsgegevens van het RIVM blijkt dat de gemeten waarden in geleverd drinkwater in de regel ruim onder 200 ug/L liggen, typisch tussen 10 en 80 ug/L afhankelijk van de gebruikte zuiveringsmethode en het bronwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Nederlandse situatie: lage niveaus in geleverd drinkwater
        </h2>
        <p className="text-gray-700 mb-4">
          Het RIVM publiceert jaarlijks een overzicht van de drinkwaterkwaliteit in Nederland. Wat betreft aluminium concludeert het RIVM consistent dat de geleverde waterkwaliteit voldoet aan de indicatornorm en dat de gemeten concentraties geen aanleiding geven tot volksgezondheidsmaatregelen.
        </p>
        <p className="text-gray-700 mb-4">
          Regionale variatie bestaat wel: waterbedrijven die Rijn- of Maaswater zuiveren met aluminiumsulfaat meten doorgaans hogere aluminiumrestanten dan bedrijven die diep grondwater winnen zonder flocculantengebruik. Waterbedrijven die overstappen op ijzerchloride als flocculant rapporteren lagere aluminiumniveaus.
        </p>
        <p className="text-gray-700 mb-6">
          Als u nieuwsgierig bent naar de specifieke aluminium-concentratie in uw regio, raadpleeg dan het jaarlijkse kwaliteitsrapport van uw waterbedrijf. Dit rapport is gratis beschikbaar op de website van uw waterleverancier en bevat meetwaarden per parameter, inclusief aluminium.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Gezondheidsaspecten: aluminium en Alzheimer
        </h2>
        <p className="text-gray-700 mb-4">
          De mogelijke link tussen aluminiumblootstelling en de ziekte van Alzheimer is al decennia onderwerp van wetenschappelijk debat. In de hersenen van Alzheimerpatienten zijn verhoogde aluminium-concentraties gevonden, maar of dit een oorzaak of een gevolg is van de ziekte, is tot op heden niet vastgesteld.
        </p>
        <p className="text-gray-700 mb-4">
          Het RIVM en de WHO concluderen dat er <strong>geen overtuigend wetenschappelijk bewijs</strong> is voor een causaal verband tussen de hoeveelheid aluminium in drinkwater bij Nederlandse concentraties en het risico op de ziekte van Alzheimer. De Europese voedselagentschap EFSA heeft een toelaatbare wekelijkse inname (TWI) voor aluminium vastgesteld van 1 mg per kg lichaamsgewicht per week. Bij gemiddeld drinkwaterverbruik en de geldende concentraties in Nederland wordt deze waarde niet benaderd via drinkwater.
        </p>
        <p className="text-gray-700 mb-6">
          Voor mensen met een <strong>verminderde nierfunctie</strong> is voorzichtigheid geboden. Gezonde nieren scheiden aluminium effectief uit via de urine, maar bij nierinsufficiëntie kan aluminium accumuleren in organen en botten. Dialysepatienten vormen een specifieke risicogroep; dialysewater wordt aan strengere normen onderworpen dan regulier drinkwater.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aluminium verwijderen: filtermethoden vergeleken
        </h2>
        <p className="text-gray-700 mb-4">
          Voor mensen die extra zekerheid willen over het aluminiumgehalte in hun drinkwater, zijn er effectieve filtermethoden:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Filtermethode</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Verwijdering aluminium</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Geschikt voor thuis?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Omgekeerde osmose</td>
                <td className="border border-gray-300 px-3 py-2">95&ndash;99%</td>
                <td className="border border-gray-300 px-3 py-2">Ja, beste optie</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Ultrafiltatie (UF)</td>
                <td className="border border-gray-300 px-3 py-2">80&ndash;95%</td>
                <td className="border border-gray-300 px-3 py-2">Ja, goed alternatief</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Actief kool (GAC)</td>
                <td className="border border-gray-300 px-3 py-2">20&ndash;40%</td>
                <td className="border border-gray-300 px-3 py-2">Beperkt effectief</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Filterkan (Brita e.d.)</td>
                <td className="border border-gray-300 px-3 py-2">30&ndash;60%</td>
                <td className="border border-gray-300 px-3 py-2">Matig effectief</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Sedimentfilter</td>
                <td className="border border-gray-300 px-3 py-2">&lt;10%</td>
                <td className="border border-gray-300 px-3 py-2">Niet geschikt</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 mb-4">
          Een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> is voor thuisgebruik de meest effectieve methode om aluminium te verwijderen. Het RO-membraan houdt het Al3+-ion tegen vanwege de drievoudige positieve lading en de relatief grote gehydrateerde ionstraal. Na osmosefiltratie bevat het water typisch minder dan 5 ug/L aluminium, ver onder de indicatornorm.
        </p>
        <p className="text-gray-700 mb-6">
          Wilt u een osmosefilter aanschaffen? Bekijk ons overzicht van{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">
            de beste osmosefilters om te kopen
          </Link>{' '}
          met eerlijke vergelijking van merken, verwijderingspercentages en kosten. Voor een breder overzicht van stoffen die kunnen voorkomen in leidingwater, lees onze pagina over{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">
            verontreinigingen in leidingwater
          </Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Lood versus aluminium leidingen: risicoverschil
        </h2>
        <p className="text-gray-700 mb-4">
          In Nederland zijn loden leidingen het grotere punt van zorg vergeleken met aluminium leidingen. Lood heeft een gezondheidskundige grenswaarde van 5 ug/L (nieuw per 2036, nu nog 10 ug/L) en heeft aantoonbaar schadelijke effecten op de neurologische ontwikkeling van kinderen. Er is geen veilige ondergrens voor loodblootstelling.
        </p>
        <p className="text-gray-700 mb-4">
          Aluminium leidingen komen zelden voor in Nederland en geven doorgaans weinig aluminium af aan het drinkwater bij neutrale pH. Bij lage pH (zachter, zuurder water) kan meer aluminium oplossen uit aluminium leidingen, maar dit is in de meeste Nederlandse gemeenten geen praktisch probleem.
        </p>
        <p className="text-gray-700 mb-6">
          Als uw woning voor 1960 is gebouwd en u nog nooit de binnenleidingen heeft gecontroleerd, laat dan een wateranalyse uitvoeren om zowel lood als aluminium te meten. Een gecertificeerd laboratorium kan een volledig wateranalyse uitvoeren voor circa 80 tot 150 euro.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over aluminium in leidingwater
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
          <Link href="/leidingwater" className="text-[#005F8A] underline">Leidingwater kwaliteit</Link>,{' '}
          <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">Osmosefilter kopen</Link>,{' '}
          <Link href="/leidingwater/verontreinigingen" className="text-[#005F8A] underline">Verontreinigingen in leidingwater</Link> en{' '}
          <Link href="/waterfilter" className="text-[#005F8A] underline">Waterfilter soorten</Link>.
        </p>
      </div>
    </>
  );
}
