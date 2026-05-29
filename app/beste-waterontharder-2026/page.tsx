import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export function generateMetadata(): Metadata {
  return {
    title: 'Beste waterontharder 2026: koopgids en shortlist per situatie',
    description:
      'Beste waterontharder 2026: shortlist per situatie, bekende merken, zout vs zoutloos en kosten over 5 jaar. Welke waterontharder past bij jouw waterhardheid?',
    alternates: { canonical: 'https://waterfilterplatform.nl/beste-waterontharder-2026' },
    openGraph: {
      title: 'Beste waterontharder 2026 - koopgids per situatie',
      description:
        'Welke waterontharder past in 2026 bij jouw huishouden en waterhardheid? Shortlist per profiel, selectiecriteria en 5-jaars kosten.',
      url: 'https://waterfilterplatform.nl/beste-waterontharder-2026',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is de beste waterontharder in 2026?',
    answer:
      'Er is geen enkele beste waterontharder voor iedereen - het hangt af van je waterhardheid, huishoudgrootte en ruimte. Voor de meeste Nederlandse gezinnen in een hard-watergebied is een ionenwisselaar met zout het meest effectief. Kleine huishoudens of huurders kiezen vaker een compact of zoutloos systeem. Wil je vooral schoon drinkwater in plaats van zachter leidingwater, dan is een osmosefilter op het aanrecht een gerichtere keuze.',
  },
  {
    question: 'Waterontharder met zout of zoutloos: wat is beter?',
    answer:
      'Een ionenwisselaar met zout verlaagt de waterhardheid daadwerkelijk en is het effectiefst tegen kalkaanslag. Zoutloze systemen (template-assisted crystallization of elektromagnetisch) verwijderen geen kalk, maar veranderen de kristalvorm zodat kalk minder hecht. Ze zijn onderhoudsarm en zoutvrij, maar minder effectief bij zeer hard water. Bij hardheid boven 15 dH presteert een zoutsysteem doorgaans beter.',
  },
  {
    question: 'Welke capaciteit waterontharder heb ik nodig?',
    answer:
      'De benodigde capaciteit hangt af van je waterhardheid en dagelijks verbruik. Vuistregel: een gezin van vier in een gebied met 12-18 dH zit goed met een systeem van 20-30 liter harsinhoud. Te klein gekozen, dan regenereert het toestel te vaak en verbruikt het meer zout en water. Controleer eerst je lokale waterhardheid.',
  },
  {
    question: 'Wat kost een goede waterontharder?',
    answer:
      'Reken voor een degelijke ionenwisselaar op 600 tot 1.500 euro inclusief installatie, plus 40 tot 90 euro per jaar aan zout. Zoutloze systemen kosten vaak 200 tot 700 euro met weinig jaarlijkse kosten. Bekijk altijd de totale kosten over vijf jaar in plaats van alleen de aanschafprijs.',
  },
  {
    question: 'Maakt een waterontharder het water ook veilig om te drinken?',
    answer:
      'Nee. Een waterontharder verlaagt de hardheid maar verwijdert geen lood, nitraat, PFAS of microplastics, en voegt bij zoutsystemen juist natrium toe. Wil je puur drinkwater, combineer dan met een osmosefilter op het aanrecht of kies osmose als gerichte drinkwateroplossing.',
  },
  {
    question: 'Welk merk waterontharder is het beste?',
    answer:
      'Geen enkel merk is voor iedereen het beste. Bekende waterontharder-merken in Nederland zijn onder andere BWT, Grunbeck, EcoWater, Harvey en Viteau. Vergelijk ze niet op naam maar op de juiste capaciteit voor jouw waterhardheid, de certificering (zoals DVGW of Kiwa), het zout- en waterverbruik bij regeneratie en de service en garantie. Een goed afgestemd middensegment-toestel presteert vaak beter dan een te groot of te klein duur merktoestel.',
  },
  {
    question: 'Wat is de beste waterontharder zonder zout?',
    answer:
      'Wil je geen zout gebruiken, dan is een zoutloos systeem op basis van template-assisted crystallization (TAC) doorgaans de beste keuze. Het verlaagt de waterhardheid niet, maar zet kalk om in een vorm die minder aanhecht aan leidingen en apparaten. Zoutloze systemen zijn onderhoudsarm en verbruiken geen zout of regeneratiewater, maar zijn bij zeer hard water (boven 15 dH) minder effectief dan een ionenwisselaar met zout.',
  },
  {
    question: 'Is een waterontharder de moeite waard?',
    answer:
      'Bij een waterhardheid boven 15 dH is een waterontharder meestal de moeite waard: minder kalkaanslag, een langere levensduur van boiler, waterkoker en vaatwasser, en minder schoonmaakmiddel en ontkalker. Onder 8 dH (zacht water) is het zelden nodig. Reken de besparing op apparaten en middelen af tegen de aanschaf-, zout- en onderhoudskosten over vijf jaar.',
  },
];

const ranking = [
  {
    naam: 'Ionenwisselaar met zout',
    notitie: 'Beste algemene keuze voor gezinnen in een hard-watergebied (boven 15 dH). Verlaagt de hardheid het effectiefst tegen kalkaanslag. Beste prijs-prestatie.',
  },
  {
    naam: 'Twin-tank ionenwisselaar',
    notitie: 'Beste voor grote huishoudens en continu verbruik: levert ook zacht water tijdens de regeneratie.',
  },
  {
    naam: 'Zoutloos systeem (TAC)',
    notitie: 'Beste zoutvrije en onderhoudsarme keuze; vermindert kalkaanhechting zonder zout, ideaal voor huurders en matig hard water.',
  },
  {
    naam: 'Osmosefilter op aanrecht',
    notitie: 'Beste keuze als je vooral schoon drinkwater wilt in plaats van huisbrede ontharding.',
  },
];

const merken = [
  ['BWT', 'Oostenrijks merk met een breed assortiment ionenwisselaars, bekend van de AQA Perla-lijn met magnesiumtechnologie.', '/bwt-waterontharder'],
  ['Grunbeck', 'Duits premium-merk; de softliQ-serie biedt zuinige regeneratie en app-besturing.', '/grunbeck-waterontharder'],
  ['EcoWater', 'Internationaal merk met ionenwisselaars en uitgebreide monitoring van zout- en waterverbruik.', '/ecowater-waterontharder'],
  ['Harvey', 'Bekend van compacte, non-electric twin-tank systemen op blokzout, geschikt voor kleine ruimtes.', '/harvey-waterontharder'],
  ['Kinetico', 'Non-electric twin-tank dat op waterdruk werkt en regenereert op werkelijk verbruik; premium, via dealer.', '/kinetico-waterontharder'],
  ['Culligan', 'Groot internationaal merk met sterk service- en dealernetwerk en huur/onderhoudsopties.', '/culligan-waterontharder'],
  ['Erie', 'In de Benelux veelgebruikt merk (onderdeel van Pentair) voor ionenwisselaars en besturingskleppen.', '/erie-waterontharder'],
  ['Viteau', 'Nederlandse aanbieder en installateur van waterontharders met landelijke service.', '/viteau-waterontharder'],
  ['Aquacell', 'Betaalbare ionenwisselaars uit het instap- en middensegment, veel online verkocht in Nederland.', '/aquacell-waterontharder'],
  ['Maxima', 'Op de Nederlandse markt veel verkocht waarde-/middensegment merk van ionenwisselaars.', '/maxima-waterontharder'],
];

const picks = [
  {
    profiel: 'Klein huishouden / appartement',
    type: 'Compacte ionenwisselaar of zoutloos',
    prijs: 'EUR 250-700',
    capaciteit: 'Laag (1-2 personen)',
    notitie: 'Compacte footprint, lage jaarlijkse kosten. Zoutloos bij matig hard water.',
    highlight: false,
  },
  {
    profiel: 'Gezin in hard-watergebied',
    type: 'Ionenwisselaar met zout',
    prijs: 'EUR 600-1.200',
    capaciteit: 'Midden-hoog (3-5 personen)',
    notitie: 'Meest effectief tegen kalkaanslag bij hardheid boven 15 dH. Beste prijs-prestatie voor gezinnen.',
    highlight: true,
  },
  {
    profiel: 'Groot huishouden / continu verbruik',
    type: 'Twin-tank ionenwisselaar',
    prijs: 'EUR 1.000-1.800',
    capaciteit: 'Hoog (5+ personen)',
    notitie: 'Levert ook tijdens regeneratie zacht water. Voor grote gezinnen of constante vraag.',
    highlight: false,
  },
  {
    profiel: 'Vooral schoon drinkwater gewenst',
    type: 'Osmosefilter op aanrecht',
    prijs: 'EUR 200-899',
    capaciteit: 'Drinkwater (keukenkraan)',
    notitie: 'Geen huisbrede ontharding, maar verwijdert kalk en verontreinigingen aan het tappunt.',
    highlight: false,
  },
];

const tco5jaar = [
  { set: 'Ionenwisselaar (zout)', aanschaf: 'EUR 900', installatie: 'EUR 200', jaarlijks: 'EUR 70 (zout)', totaal5jaar: 'circa EUR 1.450' },
  { set: 'Zoutloos systeem', aanschaf: 'EUR 450', installatie: 'EUR 100', jaarlijks: 'EUR 15', totaal5jaar: 'circa EUR 625' },
  { set: 'Twin-tank', aanschaf: 'EUR 1.400', installatie: 'EUR 250', jaarlijks: 'EUR 80', totaal5jaar: 'circa EUR 2.050' },
  { set: 'Osmose op aanrecht', aanschaf: 'EUR 799', installatie: 'EUR 0 (zelf)', jaarlijks: 'EUR 90 (filters)', totaal5jaar: 'circa EUR 1.249' },
];

export default function BesteWaterontharder2026Page() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Beste waterontharder 2026', url: 'https://waterfilterplatform.nl/beste-waterontharder-2026' },
        ]}
      />
      <SchemaOrg
        schema={[
          {
            '@type': 'ItemList',
            name: 'Beste waterontharders 2026 per situatie',
            description:
              'Aanbevolen waterontharders per huishouden en waterhardheid, gerangschikt van beste algemene keuze tot specifieke situaties.',
            itemListOrder: 'https://schema.org/ItemListOrderDescending',
            numberOfItems: ranking.length,
            url: 'https://waterfilterplatform.nl/beste-waterontharder-2026',
            itemListElement: ranking.map((r, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: r.naam,
              description: r.notitie,
              url: 'https://waterfilterplatform.nl/beste-waterontharder-2026',
            })),
          },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Beste waterontharder 2026</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Beste waterontharder 2026: koopgids per situatie
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Welke <strong>waterontharder</strong> past in 2026 het beste bij jouw huishouden? Dat hangt
            af van je waterhardheid, het aantal personen en je ruimte. We geven een{' '}
            <strong>shortlist per profiel</strong>, de belangrijkste selectiecriteria en de kosten over
            vijf jaar - zonder merkvoorkeur.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/waterontharder/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Waterontharder kopen
            </Link>
            <Link
              href="/waterhardheid"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Check je waterhardheid
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer
          question="Wat is de beste waterontharder in 2026?"
          answer="De beste waterontharder hangt af van je situatie. Voor een gezin in een hard-watergebied (boven 15 dH) is een ionenwisselaar met zout het effectiefst tegen kalk. Kleine huishoudens of huurders kiezen vaker een compact of zoutloos systeem. Wil je vooral schoon drinkwater in plaats van zachter leidingwater, dan is een osmosefilter op het aanrecht een gerichtere keuze. Check eerst je lokale waterhardheid en het aantal personen."
        />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Shortlist per profiel</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            In plaats van een enkele winnaar kiezen we het beste systeemtype per situatie. Zo vind je
            sneller wat bij jouw huishouden past.
          </p>
          <div className="space-y-3">
            {picks.map(p => (
              <div key={p.profiel} className={`rounded-xl border p-4 ${p.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-gray-900">
                    {p.profiel}
                    {p.highlight && (
                      <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Beste prijs-prestatie</span>
                    )}
                  </p>
                  <span className="font-semibold text-[#005F8A] shrink-0 text-sm">{p.prijs}</span>
                </div>
                <p className="text-sm text-gray-700"><strong>{p.type}</strong> - {p.capaciteit}</p>
                <p className="text-sm text-gray-600 mt-1">{p.notitie}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026. WaterfilterPlatform
            is onafhankelijk; lees onze{' '}
            <Link href="/methodologie" className="underline">methodologie</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar let je op bij de keuze?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['Waterhardheid', 'Check je lokale dH-waarde. Boven 15 dH presteert een zoutsysteem doorgaans beter dan zoutloos.'],
              ['Capaciteit', 'Stem de harsinhoud af op personen en verbruik, zodat het toestel niet te vaak regenereert.'],
              ['Zout vs zoutloos', 'Zout ontharder verlaagt hardheid; zoutloos remt aanhechting maar verlaagt de hardheid niet.'],
              ['Ruimte en installatie', 'Twin-tank en grote toestellen vragen meer ruimte; huurders kiezen vaak compact of zoutvrij.'],
              ['Natrium en drinkwater', 'Zoutsystemen voegen natrium toe; voor drinkwater is een osmosetappunt gezonder.'],
              ['Totale kosten', 'Beoordeel aanschaf plus zout, water en onderhoud over vijf jaar, niet alleen de prijs.'],
            ].map(([t, d]) => (
              <div key={t} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{t}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Twijfel je tussen ontharden en filteren? Lees onze vergelijking{' '}
            <Link href="/vergelijken/waterfilter-vs-waterontharder" className="text-[#005F8A] underline">waterfilter vs waterontharder</Link>{' '}
            of{' '}
            <Link href="/waterontharder/vs-osmose" className="text-[#005F8A] underline">waterontharder versus osmose</Link>.
          </p>
        </section>

        <CTABanner context="waterhardheid" />

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kosten over 5 jaar (TCO)</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Systeem</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aanschaf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Per jaar</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">5 jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                {tco5jaar.map(r => (
                  <tr key={r.set} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-800">{r.set}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.installatie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.jaarlijks}</td>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A]">{r.totaal5jaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve cijfers, gemiddeld gebruik (4 personen) en regionale waterhardheid. Werkelijke
            kosten varieren per merk en hardheid.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Bekende waterontharder-merken in Nederland</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De juiste keuze draait om het systeemtype en de capaciteit, niet om het merk. Toch helpt
            het om de bekendste waterontharder-merken op de Nederlandse markt te kennen. Beoordeel ze
            op capaciteit, certificering, zout- en waterverbruik en service - niet op naam alleen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {merken.map(([naam, beschrijving, href]) => (
              <div key={naam} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">
                  <Link href={href} className="hover:text-[#005F8A]">{naam} waterontharder</Link>
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{beschrijving}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Wij verkopen deze merken niet en ontvangen er geen vergoeding voor. Controleer actuele
            specificaties en certificering altijd bij de leverancier. Bijgewerkt mei 2026.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-2">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ['/waterontharder', 'Waterontharder', 'Werking, kosten en wanneer zinvol'],
              ['/waterontharder/kopen', 'Waterontharder kopen', 'Waar let je op bij aanschaf'],
              ['/vergelijken/waterontharder-vergelijken', 'Waterontharders vergelijken', 'Systemen naast elkaar'],
              ['/waterhardheid', 'Waterhardheid', 'Check je hardheid per gemeente'],
            ].map(([href, t, d]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
                <p className="font-semibold text-gray-800 hover:text-[#005F8A]">{t}</p>
                <p className="text-sm text-gray-500">{d}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
