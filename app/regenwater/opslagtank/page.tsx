import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Regenwater opslagtank: 1000-10000L, beton of HDPE, kiezen',
  description:
    'Een regenwatertank kiezen: 1000 tot 10000 liter, ondergronds (beton, HDPE) of bovengronds. Bereken benodigde inhoud, vergelijk materialen en kies de juiste filters.',
  alternates: { canonical: 'https://waterfilterplatform.nl/regenwater/opslagtank' },
};

const faqItems = [
  {
    q: 'Hoe groot moet mijn regenwatertank zijn?',
    a: 'De tankgrootte hangt af van dakoppervlak, jaarlijkse neerslag en watergebruik. Vuistregel: 1 vierkante meter dakoppervlak levert circa 600 liter regenwater per jaar in Nederland (gemiddeld 800 mm neerslag minus 25% verdamping en overloop). Voor een gemiddeld gezin van 4 personen met dakoppervlak 80 vierkante meter en gebruik voor WC, wasmachine en tuin volstaat een tank van 5000 tot 6000 liter. Voor enkel tuingebruik 1000 tot 2000 liter, voor WC plus wasmachine 3000 tot 5000 liter.',
  },
  {
    q: 'Beton of HDPE: welk materiaal is beter voor mijn tank?',
    a: 'Betonnen tanks gaan 50 tot 80 jaar mee en hebben als voordeel dat de calcium uit het beton het zure regenwater neutraliseert (pH stijgt van 5 naar circa 7). Nadeel: zwaar (kraan nodig voor plaatsing) en duurder (2500 tot 4500 euro voor 5000 liter inclusief plaatsing). HDPE-tanks (polyethyleen) gaan 30 tot 50 jaar mee, zijn licht (handmatig plaatsbaar) en goedkoper (1500 tot 3000 euro voor 5000 liter). HDPE is UV-bestendig en chemisch stabiel maar neutraliseert geen zuur.',
  },
  {
    q: 'Ondergronds of bovengronds plaatsen?',
    a: 'Ondergrondse tanks (beton of HDPE) zijn de standaard voor permanent gebruik. Voordelen: vorstvrij, geen lichtinval (geen algengroei), constante watertemperatuur (8 tot 12 graden Celsius), onzichtbaar in de tuin. Nadelen: graafwerk nodig (500 tot 1500 euro extra), niet verplaatsbaar. Bovengrondse tanks (HDPE-tonnen of grote IBC-containers van 1000 liter) zijn goedkoper (200 tot 600 euro) en geschikt voor tuin- en seizoensgebruik, maar bevriezen in de winter en moeten dan geleegd worden.',
  },
  {
    q: 'Hoe bereken ik mijn dakoppervlak voor regenwateropvang?',
    a: 'Meet de horizontale projectie (oppervlakte gezien van boven), niet de schuine hellingoppervlakte. Voor een rechthoekige bungalow met afmetingen 10 bij 8 meter is dat 80 vierkante meter ongeacht de dakhelling. Vermenigvuldig met 600 liter per vierkante meter per jaar (Nederland): 80 x 600 = 48000 liter per jaar potentiele opvang. Houd rekening met overloopverlies bij hevige buien en verdamping: effectief beschikbaar circa 35000 tot 40000 liter. Pannendaken vangen circa 90% op, platte daken (EPDM, bitumen) tot 95%, grindkdaken 80%.',
  },
  {
    q: 'Welke filters heb ik nodig voor mijn regenwatertank?',
    a: 'Standaardopstelling: een voorfilter (zelfreinigend, 200 tot 280 micron) in de toevoer van de tank, een rustige instromer onderin de tank om sediment niet op te wervelen, een drijvende aanzuig met fijnfilter (100 micron) en een nafilter (50 micron) voor het huis. Voor wasmachine en WC volstaat deze opstelling. Voor douchen of wassen van handen: voeg een actief-koolfilter en UV-sterilisator toe. Voor drinken: voeg ook omgekeerde osmose toe (zelden aanbevolen voor regenwater vanwege gezondheidsrisicos).',
  },
  {
    q: 'Wat is een zelfreinigend voorfilter en hoe werkt het?',
    a: 'Een zelfreinigend voorfilter (zoals 3P Technik Volksfilter of WISY Vortex) gebruikt het verval van het regenwater om bladeren en grof vuil naar het overloopriool af te voeren terwijl het schone water in de tank stroomt. Geen pomp nodig, geen filterelement vervangen, alleen 1 tot 2 keer per jaar het zeefje afspoelen. Filterefficiency: 90 tot 95% voor deeltjes groter dan 280 micron. Kosten 250 tot 600 euro afhankelijk van capaciteit. Plaatsing in de regenwatertoevoer voor de tank, met een aparte overloop-aansluiting naar het hemelwaterriool.',
  },
  {
    q: 'Hoe sluit ik de overloop van mijn regenwatertank aan?',
    a: 'De overloop wordt aangesloten op het hemelwaterriool of een infiltratiekrat in de tuin. De overloopleiding (110 mm PVC) moet minimaal even groot zijn als de toevoerleiding om bij hevige buien geen verstopping te veroorzaken. Belangrijk: monteer een terugslagklep (anti-rat-klep) om te voorkomen dat ratten of muizen via het riool de tank in kruipen. Bij infiltratie in de tuin: 0,3 vierkante meter krat per vierkante meter dakoppervlak en minimaal 1 meter boven grondwaterstand. Controleer gemeentelijke regels voor overloopaansluiting.',
  },
  {
    q: 'Wat kost een complete regenwatertank-installatie?',
    a: 'Een complete installatie kost 2500 tot 7000 euro afhankelijk van tankgrootte, materiaal en toepassingen. Voorbeeld: 5000 liter HDPE ondergronds met pomp, voorfilter en aansluiting op WC plus wasmachine: 3500 tot 5000 euro inclusief plaatsing en loodgieterswerk. Subsidies van 250 tot 1000 euro per huishouden zijn beschikbaar in steeds meer gemeenten zoals Amsterdam, Utrecht, Eindhoven, Tilburg en Den Haag. Terugverdientijd 10 tot 18 jaar afhankelijk van lokale waterprijs en gebruik.',
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
  headline: 'Regenwater opslagtank kiezen: grootte, materiaal en filters',
  description:
    'Compleet overzicht regenwatertanks: 1000 tot 10000 liter, ondergronds beton of HDPE versus bovengronds, dakoppervlak-berekening en filteropstelling.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/regenwater/opslagtank',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function RegenwaterOpslagtankPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Regenwater', item: 'https://waterfilterplatform.nl/regenwater' },
              { '@type': 'ListItem', position: 3, name: 'Regenwater opslagtank', item: 'https://waterfilterplatform.nl/regenwater/opslagtank' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/regenwater" className="hover:underline">Regenwater</Link> &rsaquo;{' '}
          <span>Regenwater opslagtank</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Regenwater opslagtank: grootte, materiaal en filters kiezen
          </h1>
          <p className="text-gray-700 text-lg">
            Kies tussen 1000 en 10000 liter, ondergronds beton of HDPE versus bovengronds. Bereken benodigde inhoud op basis van dakoppervlak en gewenste toepassing.
          </p>
        </div>

        <QuickAnswer answer="Een regenwatertank van 5000&ndash;6000 liter volstaat voor een gemiddeld gezin met dakoppervlak 80 vierkante meter (1 vierkante meter = 600 liter per jaar). Beton (50&ndash;80 jaar levensduur, neutraliseert zuur) is duurzamer dan HDPE (30&ndash;50 jaar, lichter en goedkoper). Ondergronds is standaard: vorstvrij, donker (geen algen), onzichtbaar. Voorfilter (280 micron, zelfreinigend) en nafilter (50 micron) zijn noodzakelijk. Totaalprijs 2500&ndash;7000 euro inclusief plaatsing." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke tankgrootte heeft u nodig?
        </h2>
        <p className="text-gray-700 mb-4">
          De juiste tankgrootte bepaalt u op basis van drie factoren: dakoppervlak (potentiele opvang), gewenst gebruik (WC, wasmachine, tuin, douche) en neerslagpatroon. In Nederland valt gemiddeld 800 mm neerslag per jaar, waarvan na verdamping en overloopverlies circa 600 liter per vierkante meter dakoppervlak daadwerkelijk in de tank belandt.
        </p>
        <p className="text-gray-700 mb-4">
          Reken voor een gezin van 4 personen met dakoppervlak 80 vierkante meter en gebruik voor WC, wasmachine en tuin: jaarlijkse opvang 80 x 600 = 48000 liter, jaarlijks verbruik circa 30000 tot 40000 liter (75 liter WC + 60 liter wasmachine + tuin per persoon per dag). De buffercapaciteit moet circa 3 tot 4 weken droogte overbruggen: voor dit gezin volstaat een tank van 5000 tot 6000 liter. Voor enkel tuingebruik 1000 tot 2000 liter, voor WC plus wasmachine 3000 tot 5000 liter.
        </p>
        <p className="text-gray-700 mb-6">
          Onderdimensioneren is ongunstig (frequente overloop, te weinig buffer in droge periode), overdimensioneren ook (langere stilstaand water, hogere kosten). Zie ook <Link href="/regenwater" className="text-[#005F8A] underline">het regenwater-overzicht</Link> voor alle gebruikstoepassingen.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Beton versus HDPE: welk materiaal kiest u?
        </h2>
        <p className="text-gray-700 mb-4">
          Betonnen tanks hebben een levensduur van 50 tot 80 jaar en bieden een belangrijk chemisch voordeel: de calcium uit het beton neutraliseert het zure regenwater (pH stijgt van circa 5 naar 7). Dit voorkomt corrosie van pompen en leidingen. Nadeel: zwaar (kraan nodig voor plaatsing), duurder (2500 tot 4500 euro voor 5000 liter inclusief plaatsing) en zelden uit voorraad leverbaar.
        </p>
        <p className="text-gray-700 mb-6">
          HDPE-tanks (hoge-dichtheid polyethyleen) gaan 30 tot 50 jaar mee, zijn licht (handmatig plaatsbaar met 3 tot 4 personen), goedkoper (1500 tot 3000 euro voor 5000 liter) en UV-bestendig. HDPE neutraliseert echter geen zuur, dus bij langer leidingnetwerk overweegt u een pH-correctiefilter (kalksteen-cartridge, 100 tot 200 euro). HDPE is chemisch stabiel en geeft geen smaak of stoffen af aan het water.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vergelijking: tankopties op een rij
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Inhoud</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Prijs (incl. plaatsing)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Levensduur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">IBC bovengronds</td>
                <td className="border border-gray-300 px-3 py-2">1000 L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;200&ndash;400</td>
                <td className="border border-gray-300 px-3 py-2">15&ndash;25 jaar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">HDPE ondergronds</td>
                <td className="border border-gray-300 px-3 py-2">3000 L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1200&ndash;2000</td>
                <td className="border border-gray-300 px-3 py-2">30&ndash;50 jaar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">HDPE ondergronds</td>
                <td className="border border-gray-300 px-3 py-2">5000 L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;1500&ndash;3000</td>
                <td className="border border-gray-300 px-3 py-2">30&ndash;50 jaar</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Beton ondergronds</td>
                <td className="border border-gray-300 px-3 py-2">5000 L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;2500&ndash;4500</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;80 jaar</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Beton ondergronds</td>
                <td className="border border-gray-300 px-3 py-2">10000 L</td>
                <td className="border border-gray-300 px-3 py-2">&euro;4500&ndash;7000</td>
                <td className="border border-gray-300 px-3 py-2">50&ndash;80 jaar</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filteropstelling: van regenpijp tot kraan
        </h2>
        <p className="text-gray-700 mb-4">
          Een correcte filteropstelling bestaat uit vier elementen: een zelfreinigend voorfilter (200 tot 280 micron) in de toevoer, een rustige instromer onderin de tank om sediment niet op te wervelen, een drijvende aanzuig met fijnfilter (100 micron) zodat het zuiverste water uit de middenlaag van de tank wordt aangezogen, en een nafilter (50 micron) na de pomp voor het huishouden.
        </p>
        <p className="text-gray-700 mb-6">
          Zelfreinigende voorfilters (3P Volksfilter, WISY Vortex) hebben geen pomp of energie nodig: het verval van het water voert bladeren en grof vuil naar het overloopriool, terwijl schoon water in de tank stroomt. Onderhoud: 1 tot 2 keer per jaar zeefje afspoelen. Voor toepassingen zoals wasmachine en WC volstaat deze opstelling. Voor douchen of wassen voegt u een actief-koolfilter en UV-sterilisator toe. Meer details over filtertechnieken vindt u op <Link href="/regenwater/filteren" className="text-[#005F8A] underline">regenwater filteren</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Overloop aansluiten: regelgeving en uitvoering
        </h2>
        <p className="text-gray-700 mb-6">
          De overloop van de regenwatertank moet worden aangesloten op het hemelwaterriool (gescheiden riolering) of een infiltratiekrat in de tuin. Gebruik PVC 110 mm voor de overloopleiding, minimaal even groot als de toevoerleiding om bij hevige buien geen verstopping te veroorzaken. Plaats een terugslagklep (anti-rat-klep) om knaagdieren uit het riool buiten de tank te houden. Voor infiltratie in eigen tuin: bereken 0,3 vierkante meter krat per vierkante meter dakoppervlak en houd minimaal 1 meter boven de grondwaterstand. Veel gemeenten subsidieren afkoppeling van het gemengde riool, zie uw lokale verordening.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Veelgebruikte toepassingen voor uw tank
        </h2>
        <p className="text-gray-700 mb-6">
          De meest voorkomende toepassingen voor opgevangen regenwater zijn <Link href="/regenwater/tuin" className="text-[#005F8A] underline">tuinbesproeiing</Link> (planten geven de voorkeur aan zacht regenwater boven hard kraanwater), <Link href="/regenwater/wc-doorspoelen" className="text-[#005F8A] underline">WC-doorspoelen</Link> (gemiddeld 30% van het huishoudelijke waterverbruik) en wasmachine-gebruik. Combineer voor maximale besparing: een tank van 5000 liter dekt bij gemiddeld gezin circa 60% van het totale waterverbruik en verkort daarmee de terugverdientijd tot 10 tot 15 jaar.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/regenwater/filteren" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater filteren</h3>
              <p className="text-sm text-gray-600">Volledig overzicht van filtertechnieken: sediment, actief kool, UV en omgekeerde osmose.</p>
            </Link>
            <Link href="/regenwater/tuin" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater voor de tuin</h3>
              <p className="text-sm text-gray-600">Waarom planten en groenten beter groeien op zacht regenwater dan op hard kraanwater.</p>
            </Link>
            <Link href="/regenwater/wc-doorspoelen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater voor WC-doorspoelen</h3>
              <p className="text-sm text-gray-600">Aansluiting, regelgeving en besparing bij gebruik van regenwater voor het toilet.</p>
            </Link>
            <Link href="/regenwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Regenwater overzicht</h3>
              <p className="text-sm text-gray-600">Alle toepassingen, kosten, regelgeving en filtertechnieken in een overzicht.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over regenwater opslagtanks
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">{faq.q}</summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.a}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/regenwater" className="text-[#005F8A] underline">regenwater overzicht</Link>,{' '}
          <Link href="/regenwater/filteren" className="text-[#005F8A] underline">regenwater filteren</Link>,{' '}
          <Link href="/regenwater/tuin" className="text-[#005F8A] underline">regenwater tuin</Link> en{' '}
          <Link href="/regenwater/wc-doorspoelen" className="text-[#005F8A] underline">WC-doorspoelen</Link>.
        </p>
      </main>
    </>
  );
}
