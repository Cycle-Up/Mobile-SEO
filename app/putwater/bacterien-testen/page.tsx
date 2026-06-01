import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Putwater testen op bacterien: E. coli, coliformen, kosten',
  description:
    'Test putwater op E. coli, coliformen en enterokokken via RIVM-procedure. Labkosten 80-150 euro, jaarlijks testen, sneltest vs labtest vergeleken.',
  alternates: { canonical: 'https://waterfilterplatform.nl/putwater/bacterien-testen' },
};

const faqItems = [
  {
    q: 'Hoe vaak moet ik mijn putwater testen op bacterien?',
    a: 'Het RIVM en de WHO bevelen minimaal jaarlijks testen aan voor particuliere waterwinning, en bij voorkeur tweemaal per jaar (voorjaar en najaar). Test extra na hevige regenval, na werkzaamheden aan de put, bij smaak- of geurveranderingen, en na een vakantieperiode waarin de put niet is gebruikt. Voor huishoudens met baby\'s, ouderen of mensen met verminderde weerstand is halfjaarlijks testen sterk aanbevolen.',
  },
  {
    q: 'Welke bacterien moet ik laten testen in putwater?',
    a: 'De standaard microbiologische analyse omvat drie indicatorparameters: E. coli (Escherichia coli, indicator voor fecale verontreiniging), totale coliforme bacterien (indicator voor algemene microbiologische besmetting) en enterokokken (indicator voor persistente fecale verontreiniging). Alle drie moeten 0 KVE per 100 ml bedragen volgens het Drinkwaterbesluit. Bij hoog risico (landbouwgebieden, ondiepe putten) kan aanvullend op Pseudomonas aeruginosa en Clostridium perfringens worden getest.',
  },
  {
    q: 'Wat kost een laboratoriumtest voor putwater bacterien?',
    a: 'Een microbiologisch basispakket (E. coli, coliformen, enterokokken) kost tussen de 80 en 150 euro bij gecertificeerde laboratoria zoals Aqualab, Eurofins of Vitens Laboratoriumdiensten. Een uitgebreid pakket inclusief chemische parameters (nitraat, ijzer, hardheid, pH) kost 150 tot 250 euro. Voor een complete eerste-keer analyse inclusief PFAS, zware metalen en pesticiden moet u rekenen op 250 tot 500 euro.',
  },
  {
    q: 'Hoe neem ik een watermonster voor bacterieonderzoek?',
    a: 'Gebruik altijd een steriel monsterflesje van het laboratorium (vaak gratis verstrekt). Desinfecteer de kraan met een vlam of alcoholdoekje, laat het water 2 tot 5 minuten stromen tot constante temperatuur, vul het flesje zonder de binnenkant aan te raken, sluit direct af en bewaar koel (2-8 graden Celsius). Lever het monster binnen 24 uur in bij het laboratorium. Bij verzending: gebruik een gekoelde verpakking.',
  },
  {
    q: 'Sneltest of laboratoriumtest: wat is het verschil?',
    a: 'Sneltesten (zoals strips of bioluminescentietests) kosten 10 tot 30 euro en geven binnen 24-48 uur een indicatie, maar zijn minder gevoelig en niet wettelijk erkend. Laboratoriumtesten volgens NEN-EN-ISO 9308 zijn de gouden standaard: kwantitatief, gecertificeerd en juridisch bruikbaar. Voor eerste screening kan een sneltest dienen, maar voor een betrouwbaar resultaat is een laboratoriumanalyse onmisbaar.',
  },
  {
    q: 'Wat doe ik bij positieve uitslag op E. coli?',
    a: 'Stop direct met het drinken van het putwater en gebruik flessenwater. Kook het water minimaal 3 minuten als drinkwater niet anders beschikbaar is. Schakel de put kort uit en chloreer de put (shock-chlorering met 50-100 mg/L vrije chloor gedurende 12-24 uur, daarna doorspoelen). Installeer een UV-sterilisator als permanente oplossing. Hertest na 1-2 weken om effectiviteit te bevestigen.',
  },
  {
    q: 'Welk filter beschermt tegen bacterien in putwater?',
    a: 'Een UV-sterilisator op 254 nm is de meest effectieve permanente oplossing en doodt bacterien, virussen en parasieten voor 99,9% zonder chemicalien. Ultrafiltratie (UF, 0,01 micron) houdt bacterien fysiek tegen. Omgekeerde osmose verwijdert eveneens bacterien dankzij het zeer fijne membraan. Combineer altijd met een sediment-prefilter (5 micron) om het UV-licht of membraan niet te blokkeren met slibdeeltjes.',
  },
  {
    q: 'Waar laat ik mijn putwater testen in Nederland?',
    a: 'Erkende laboratoria voor drinkwateranalyse zijn onder andere Aqualab Zuid (Werkendam), Eurofins Agro (Wageningen), Vitens Laboratoriumdiensten (Leeuwarden), AL-West (Deventer) en Het Waterlaboratorium (Haarlem). Zij sturen op verzoek een monsterkit toe, met instructies en een retourenvelop. Resultaten zijn doorgaans binnen 5 tot 10 werkdagen beschikbaar via een digitaal rapport.',
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
  headline: 'Putwater testen op bacterien: E. coli, coliformen, kosten',
  description:
    'Test putwater op E. coli, coliformen en enterokokken via RIVM-procedure. Labkosten 80-150 euro, jaarlijks testen, sneltest vs labtest vergeleken.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/putwater/bacterien-testen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function PutwaterBacterienTestenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Putwater', item: 'https://waterfilterplatform.nl/putwater' },
              { '@type': 'ListItem', position: 3, name: 'Bacterien testen', item: 'https://waterfilterplatform.nl/putwater/bacterien-testen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/putwater" className="hover:underline">Putwater</Link> &rsaquo;{' '}
          <span>Bacterien testen</span>
        </nav>

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Putwater testen op bacterien: E. coli, coliformen en enterokokken
          </h1>
          <p className="text-gray-700 text-lg">
            Een microbiologische analyse van uw putwater kost 80 tot 150 euro en is minimaal jaarlijks aanbevolen. Test op E. coli, coliformen en enterokokken volgens de RIVM-procedure.
          </p>
        </div>

        <QuickAnswer answer="Putwater moet minimaal jaarlijks worden getest op E. coli, coliforme bacterien en enterokokken volgens de RIVM-procedure. Een microbiologisch basispakket bij een erkend laboratorium (Aqualab, Eurofins, Vitens) kost 80 tot 150 euro. Sneltesten (10-30 euro) zijn een eerste indicatie maar niet wettelijk erkend. Bij positieve uitslag: stop met drinken, chloreer de put en installeer een UV-sterilisator." />

        <HealthDisclaimer />
        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waarom putwater testen op bacterien essentieel is
        </h2>
        <p className="text-gray-700 mb-4">
          In tegenstelling tot kraanwater valt putwater buiten het Drinkwaterbesluit en wordt het niet automatisch gecontroleerd door drinkwaterbedrijven. Volgens het RIVM en het Drinkwaterbesluit moet drinkwater 0 KVE (Kolonie Vormende Eenheden) per 100 ml bevatten van E. coli, coliforme bacterien en enterokokken. Een ondiepe of niet goed afgewerkte put kan via insijpeling van oppervlaktewater, mest of riolering gemakkelijk besmet raken &mdash; vaak zonder dat smaak of kleur dit verraadt.
        </p>
        <p className="text-gray-700 mb-6">
          Ziekteverwekkers in besmet putwater veroorzaken jaarlijks gastro-enteritis, met name na hevige regenval. Risicogroepen (baby&apos;s, ouderen, mensen met verminderde weerstand) zijn extra kwetsbaar. Jaarlijks laboratoriumonderzoek is de enige manier om besmetting tijdig te detecteren.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Welke bacterien worden getest en wat betekenen ze?
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Parameter</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Norm (KVE/100 ml)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Betekenis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">E. coli</td>
                <td className="border border-gray-300 px-3 py-2">0</td>
                <td className="border border-gray-300 px-3 py-2">Verse fecale verontreiniging (mens/dier)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Coliforme bacterien</td>
                <td className="border border-gray-300 px-3 py-2">0</td>
                <td className="border border-gray-300 px-3 py-2">Algemene microbiologische besmetting</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Enterokokken</td>
                <td className="border border-gray-300 px-3 py-2">0</td>
                <td className="border border-gray-300 px-3 py-2">Persistente fecale verontreiniging</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">Pseudomonas aeruginosa</td>
                <td className="border border-gray-300 px-3 py-2">0</td>
                <td className="border border-gray-300 px-3 py-2">Biofilm in leidingen, opportunistisch pathogeen</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">Clostridium perfringens</td>
                <td className="border border-gray-300 px-3 py-2">0</td>
                <td className="border border-gray-300 px-3 py-2">Oude fecale verontreiniging, sporevormer</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Monstername: stap-voor-stap volgens RIVM-procedure
        </h2>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Bestel een monsterkit:</strong> Vraag bij een erkend laboratorium een steriele monsterfles aan (vaak gratis verzonden).</li>
          <li><strong>Desinfecteer de kraan:</strong> Verwijder filters of zeefjes, brand de kraanopening kort af met een aansteker of veeg deze schoon met een alcoholdoekje (70% ethanol).</li>
          <li><strong>Spoel door:</strong> Laat het water 2 tot 5 minuten stromen tot een constante temperatuur, zodat stilstaand water uit de leiding is verwijderd.</li>
          <li><strong>Vul het flesje:</strong> Open het steriele flesje pas op het moment van vullen. Raak de binnenkant en de dop niet aan. Vul tot de aangegeven streep (meestal 250 ml).</li>
          <li><strong>Bewaar koel:</strong> Direct na monstername bij 2 tot 8 graden Celsius bewaren (koelkast of koeltas).</li>
          <li><strong>Lever in:</strong> Binnen 24 uur leveren bij het laboratorium of versturen met gekoelde verzendverpakking. Resultaten volgen na 5 tot 10 werkdagen.</li>
        </ol>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Sneltest vs laboratoriumtest: kosten en betrouwbaarheid
        </h2>
        <p className="text-gray-700 mb-4">
          Sneltesten zoals teststrips, Coliscan-platen of bioluminescentie-meters kosten tussen de 10 en 30 euro per test en geven binnen 24 tot 48 uur een ja/nee-indicatie. Ze zijn nuttig voor een eerste screening of bij vermoeden van acute besmetting, maar de detectiegrens is hoger en de resultaten zijn niet wettelijk erkend.
        </p>
        <p className="text-gray-700 mb-6">
          Een laboratoriumtest volgens NEN-EN-ISO 9308-1 (membraanfiltratiemethode) is de gouden standaard. Het resultaat is kwantitatief (aantal KVE per 100 ml), gecertificeerd en juridisch bruikbaar bij geschillen met een gemeente of installateur. Voor jaarlijks onderhoud en voor situaties waarin baby&apos;s of risicogroepen meedrinken is alleen een laboratoriumtest verantwoord. Lees meer over <Link href="/stoffen-in-drinkwater/microbiologisch" className="text-[#005F8A] underline">microbiologische verontreiniging in drinkwater</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wat te doen bij een positieve uitslag?
        </h2>
        <p className="text-gray-700 mb-4">
          Bij detectie van E. coli, coliformen of enterokokken is direct ingrijpen vereist. Stop onmiddellijk met het drinken van het putwater en schakel over op flessenwater. Kook het putwater minimaal 3 minuten op rollende kook als er geen alternatief is. Voer een shock-chlorering uit (50 tot 100 mg/L vrije chloor in de put, 12 tot 24 uur laten inwerken, daarna grondig doorspoelen tot de chloorgeur verdwijnt).
        </p>
        <p className="text-gray-700 mb-6">
          Voor permanente bescherming is een <Link href="/filtertechnieken/uv-sterilisatie" className="text-[#005F8A] underline">UV-sterilisator</Link> de meest effectieve oplossing. UV-licht op 254 nm doodt bacterien, virussen en parasieten voor 99,9% zonder chemicalien en zonder de smaak te beinvloeden. Hertest het water 1 tot 2 weken na de chlorering en installatie om de effectiviteit te bevestigen. Voor algemene normen en grenswaarden, zie onze pagina over <Link href="/drinkwaternormen" className="text-[#005F8A] underline">drinkwaternormen</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Erkende laboratoria in Nederland
        </h2>
        <p className="text-gray-700 mb-4">
          Kies een laboratorium dat is geaccrediteerd door de Raad voor Accreditatie (RvA) onder de norm NEN-EN-ISO/IEC 17025. Bekende aanbieders voor particuliere putwateranalyse zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li><strong>Aqualab Zuid</strong> (Werkendam) &mdash; basis- en uitgebreide pakketten, landelijke dekking</li>
          <li><strong>Eurofins Agro</strong> (Wageningen) &mdash; ook PFAS- en pesticidenanalyses</li>
          <li><strong>Vitens Laboratoriumdiensten</strong> (Leeuwarden) &mdash; gespecialiseerd in grondwater</li>
          <li><strong>AL-West</strong> (Deventer) &mdash; uitgebreide chemische analyses</li>
          <li><strong>Het Waterlaboratorium</strong> (Haarlem) &mdash; servicegerichte particuliere klanten</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Voor een totaaloverzicht van risico&apos;s en aanbevolen filters, zie de <Link href="/putwater" className="text-[#005F8A] underline">putwater hoofdpagina</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/microbiologisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Microbiologische verontreiniging</h3>
              <p className="text-sm text-gray-600">Achtergrond bij bacterien, virussen en parasieten in drinkwater.</p>
            </Link>
            <Link href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie</h3>
              <p className="text-sm text-gray-600">Hoe een UV-lamp bacterien doodt zonder chemicalien.</p>
            </Link>
            <Link href="/putwater" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Putwater overzicht</h3>
              <p className="text-sm text-gray-600">Alle risico&apos;s en filteropties voor eigen waterwinning.</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen</h3>
              <p className="text-sm text-gray-600">EU- en Nederlandse grenswaarden voor drinkwaterkwaliteit.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A] mb-4">
            Veelgestelde vragen over putwater testen op bacterien
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
          <Link href="/putwater" className="text-[#005F8A] underline">putwater overzicht</Link>,{' '}
          <Link href="/filtertechnieken/uv-sterilisatie" className="text-[#005F8A] underline">UV-sterilisatie</Link>,{' '}
          <Link href="/stoffen-in-drinkwater/microbiologisch" className="text-[#005F8A] underline">microbiologische stoffen</Link> en{' '}
          <Link href="/drinkwaternormen" className="text-[#005F8A] underline">drinkwaternormen</Link>.
        </p>
      </main>
    </>
  );
}
