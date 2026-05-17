import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Waterontharder capaciteit berekenen: hardheid, gezinsgrootte en harsvolume',
  description:
    'Capaciteit van een waterontharder hangt af van hardheid (dH), waterverbruik per dag en harsvolume. Vuistregel 4 personen bij 20 dH: 15-20 liter harsvolume.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/capaciteit' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel liter hars heb ik nodig voor mijn waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vuistregel naar gezinsgrootte: 1-2 personen 10 liter hars, 3-4 personen 15-20 liter, 5+ personen 25-30 liter hars. Bij zeer hard water (boven 20 dH) verhoogt u dit met een maat. Boven 6 personen of in een bedrijfssituatie kiest u beter voor een industrieel systeem of een dubbele installatie met buffervat. Bij zacht-matig water (onder 10 dH) is een waterontharder vaak overbodig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke capaciteit heeft een waterontharder voor 4 personen nodig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gezin van 4 personen verbruikt gemiddeld 600 liter water per dag (150 liter per persoon). Bij een waterhardheid van 20 dH staat dat gelijk aan ongeveer 12 m3 keer dH per week, dus circa 50 m3 dH per maand. Een waterontharder met 15-20 liter hars en een totaalcapaciteit van 40-50 m3 dH is dan passend. Hij regenereert dan elke 2-3 dagen automatisch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe beinvloedt de waterhardheid de capaciteit van mijn ontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De capaciteit van een waterontharder is een vast getal in m3 dH (kubieke meter water keer hardheid). Bij zachter water gaat een vulling langer mee: 30 m3 dH levert 30 m3 zacht water bij 1 dH, maar slechts 1,5 m3 bij 20 dH. Hoe harder uw water, hoe sneller de hars verzadigd raakt en hoe vaker regeneratie nodig is. Dat betekent ook meer zoutverbruik en hogere kosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat gebeurt er als ik mijn waterontharder te klein heb gekozen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een te kleine ontharder regenereert te vaak, soms meerdere keren per dag. Tijdens regeneratie loopt er hard water door de bypass, dus u krijgt tussendoor steeds hard water. Verder verbruikt u onnodig veel zout en water; de hars slijt sneller (vervanging na 8-10 jaar in plaats van 15-20); en het systeem kan oververhit raken doordat motorisch de regeneratie te frequent draait. Vaak loont het om binnen 2 jaar te upgraden naar een grotere maat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe vaak regenereert een waterontharder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een goed gedimensioneerde waterontharder regenereert 2-3 keer per week bij een gezin van 4 personen en gemiddelde hardheid (15-20 dH). Volumetrisch gestuurde ontharders meten precies wanneer de hars verzadigd is en starten dan; tijdgestuurde ontharders draaien meestal vast op vooraf ingestelde nachten. Volumetrisch is efficienter, vooral als het verbruik wisselt (bijvoorbeeld in vakantieperiodes). Zie ook onze pagina over regeneratie voor details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lees ik de capaciteit van een waterontharder uit de specificaties?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fabrikanten geven de capaciteit op in m3 dH of soms in liters bij een specifieke hardheid. Voorbeeld: 50 m3 dH betekent 50 m3 water bij 1 dH OF 5 m3 bij 10 dH OF 2,5 m3 bij 20 dH. Sommige leveranciers vermelden ook de zoutverbruik-efficientie (gram NaCl per m3 dH); een goed systeem haalt 100-150 g per m3 dH. Hoe lager dat getal, hoe efficienter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is een huishoudelijke of een industriele waterontharder beter voor mijn situatie?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Voor woonhuizen tot 6 personen volstaat een huishoudelijke ontharder van 10-30 liter hars met enkele tank. Boven 6 personen, bij bedrijven, hotels of horeca is een industriele dubbeltank-installatie aanbevolen: terwijl een tank regenereert levert de tweede continu zacht water. Industriele systemen hebben een hogere doorstroom (boven 2.000 L per uur), grotere zoutbakken en een langere levensduur, maar de aanschaf is 3-5 keer hoger.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Waterontharder capaciteit berekenen: hardheid, gezinsgrootte en harsvolume',
  description:
    'Capaciteit van een waterontharder berekenen op basis van waterhardheid, gezinsgrootte en harsvolume. Berekening en aanbevelingen per huishouden.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/waterontharder/capaciteit',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function WaterontharderCapaciteitPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Capaciteit berekenen', item: 'https://waterfilterplatform.nl/waterontharder/capaciteit' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/waterontharder" className="hover:underline">Waterontharder</Link> &rsaquo;{' '}
          <span>Capaciteit berekenen</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Waterontharder capaciteit berekenen: hardheid, gezinsgrootte en harsvolume
          </h1>
          <p className="text-[#005F8A] text-lg">
            De juiste capaciteit van een waterontharder hangt af van drie variabelen: waterhardheid
            in dH, dagelijks waterverbruik en het beschikbare harsvolume. Een te kleine ontharder
            regenereert continu en slijt snel; een te grote is onnodig duur. Met de juiste berekening
            kiest u in een keer goed.
          </p>
        </section>

        <QuickAnswer answer="Capaciteit waterontharder bepalen: harsvolume x zoutdosering = m3 dH per regeneratie. Vuistregel: 1-2 personen 10 L hars (m3*dH 20-30), 3-4 personen 15-20 L (30-50), 5+ personen 25-30 L (50-75). Bij zeer hard water (boven 20 dH) een maat groter kiezen. Volumetrisch geregelde regeneratie is efficienter dan tijdgestuurd." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          De fundamenten van capaciteit
        </h2>
        <p className="text-gray-700 mb-4">
          De capaciteit van een waterontharder wordt uitgedrukt in <strong>liter zacht water per
          regeneratiecyclus</strong> bij een gegeven hardheid, of compacter in <strong>m3 keer
          dH</strong> (kubieke meter water keer Duitse hardheid). In Engelstalige literatuur ziet u
          ook het begrip &quot;grain capacity&quot; (1 grain CaCO3 = 17,1 mg/L). De capaciteit hangt
          af van drie zaken:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Harsvolume:</strong> hoeveel liter ionen-uitwisselhars in de tank zit. Meer hars = meer uitwisselingscapaciteit per regeneratie</li>
          <li><strong>Waterhardheid (dH):</strong> hoe meer calcium en magnesium in het water, hoe sneller de hars verzadigd raakt</li>
          <li><strong>Zoutdosering per regeneratie:</strong> hoeveel NaCl wordt gebruikt om de hars te regenereren; hogere dosering levert meer capaciteit maar minder efficient</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Berekening van de capaciteit
        </h2>
        <p className="text-gray-700 mb-4">
          De theoretische uitwisselingscapaciteit ligt rond <strong>1 gram NaCl per 0,8-1,2 dH per
          liter hars</strong> per regeneratie. In praktijk leveren leveranciers van hars technische
          datasheets die de capaciteit uitdrukken in m3 dH bij een specifieke zoutdosering.
        </p>
        <p className="text-gray-700 mb-4">
          Voorbeeld: een ontharder met 30 m3 dH-capaciteit levert tussen twee regeneraties:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>30 m3 zacht water bij 1 dH (extreem zacht water, bijna theoretisch)</li>
          <li>3 m3 zacht water bij 10 dH (matig hard water)</li>
          <li>1,5 m3 zacht water bij 20 dH (hard water, typisch Brabant)</li>
          <li>1 m3 zacht water bij 30 dH (zeer hard water, zeldzaam in NL)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Vuistregel: capaciteit per gezinsgrootte
        </h2>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Gezinsgrootte</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Harsvolume</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Totaalcapaciteit (m3 dH)</th>
                <th className="border border-gray-300 px-3 py-2 text-left text-[#003F5C]">Dagverbruik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">1-2 personen</td>
                <td className="border border-gray-300 px-3 py-2">10 liter</td>
                <td className="border border-gray-300 px-3 py-2">20-30</td>
                <td className="border border-gray-300 px-3 py-2">200-300 L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">3-4 personen</td>
                <td className="border border-gray-300 px-3 py-2">15-20 liter</td>
                <td className="border border-gray-300 px-3 py-2">30-50</td>
                <td className="border border-gray-300 px-3 py-2">450-600 L</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-medium">5+ personen</td>
                <td className="border border-gray-300 px-3 py-2">25-30 liter</td>
                <td className="border border-gray-300 px-3 py-2">50-75</td>
                <td className="border border-gray-300 px-3 py-2">750-900 L</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2 font-medium">6+ of bedrijf</td>
                <td className="border border-gray-300 px-3 py-2">Industrieel duplex</td>
                <td className="border border-gray-300 px-3 py-2">100+</td>
                <td className="border border-gray-300 px-3 py-2">1.000+ L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Hardheidscorrectie
        </h2>
        <p className="text-gray-700 mb-4">
          De vuistregels gelden voor gemiddelde Nederlandse hardheid (12-18 dH). In gebieden met
          <strong> zeer hard water boven 20 dH</strong> &mdash; grote delen van Noord-Brabant en
          Limburg &mdash; kiest u een maat groter dan de tabel suggereert. Controleer de hardheid in
          uw gemeente via onze <Link href="/leidingwater/hardheid-kaart" className="text-[#005F8A] underline">waterhardheid-kaart</Link>.
        </p>
        <p className="text-gray-700 mb-6">
          Bij zachte regio&apos;s (onder 10 dH) zoals delen van Drenthe en Friesland is een
          waterontharder vaak overbodig. Zacht water veroorzaakt nauwelijks kalkaanslag en de
          investering van 1.000-2.500 euro plus jaarlijks 60-100 euro aan zout is dan moeilijk te
          rechtvaardigen. Zie ook onze pagina <Link href="/leidingwater/hard-water" className="text-[#005F8A] underline">hard water in Nederland</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Regeneratiefrequentie en zoutverbruik
        </h2>
        <p className="text-gray-700 mb-4">
          Een gezin van 4 personen met een dagverbruik van 600 liter en een waterhardheid van 20 dH
          verbruikt per dag 12 m3 dH (0,6 m3 x 20 dH). Bij een ontharder met 15 liter hars en een
          totaalcapaciteit van 40 m3 dH betekent dat regeneratie ongeveer elke 3-3,5 dagen, oftewel
          2-3 keer per week. Per regeneratie verbruikt het systeem 1,5-2,5 kg zout en circa 50-100
          liter water voor het spoelen.
        </p>
        <p className="text-gray-700 mb-6">
          Volumetrisch gestuurde ontharders activeren regeneratie precies op het moment dat de hars
          verzadigd is en zijn 10-20% efficienter dan tijdgestuurde modellen die vast &apos;s nachts
          regenereren. Bij wisselend verbruik (vakanties, telewerken) is volumetrische sturing
          aantoonbaar zuiniger. Zie ook <Link href="/waterontharder/regeneratie" className="text-[#005F8A] underline">waterontharder regeneratie</Link> en <Link href="/waterontharder/zout-gebruik" className="text-[#005F8A] underline">zoutverbruik</Link>.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Praktijkberekening voor uw situatie
        </h2>
        <p className="text-gray-700 mb-4">
          Bereken zelf de benodigde capaciteit in vier stappen:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
          <li>Bepaal het dagverbruik: aantal personen x 150 liter (gemiddelde NL)</li>
          <li>Vermenigvuldig dat met uw waterhardheid in dH</li>
          <li>Vermenigvuldig met 7 voor een weekverbruik in m3 dH</li>
          <li>Kies een ontharder die dat 2-3 keer per week kan leveren (totaalcapaciteit / 2-3)</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Voorbeeld: 4 personen in Eindhoven (22 dH). Dagverbruik 600 L = 0,6 m3. Per dag: 0,6 x 22 =
          13,2 m3 dH. Per week: 92,4 m3 dH. Bij regeneratie 2,5 keer per week: 92,4 / 2,5 = 37 m3 dH
          per cyclus. Kies een ontharder van minimaal 40 m3 dH (typisch 18-20 liter hars).
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Maatcompromissen
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Te groot:</strong> hogere aanschafprijs, grotere zoutbak nodig, water in de tank kan langer stilstaan (theoretisch hygienerisico bij lange afwezigheid)</li>
          <li><strong>Te klein:</strong> frequente regeneratie, hoger zoutverbruik per geleverde m3, hars slijt sneller, tijdelijk hard water tijdens regeneratie</li>
          <li><strong>Goed gekozen:</strong> regeneratie 2-3 keer per week, zoutverbruik 30-50 kg per maand voor gezin van 4, harslevensduur 15-20 jaar</li>
        </ul>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over waterontharder capaciteit
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
          <Link href="/waterontharder" className="text-[#005F8A] underline">waterontharder uitleg</Link>,{' '}
          <Link href="/waterontharder/kosten" className="text-[#005F8A] underline">kosten waterontharder</Link>,{' '}
          <Link href="/waterontharder/vergelijken" className="text-[#005F8A] underline">waterontharders vergelijken</Link> en{' '}
          <Link href="/waterontharder/werking" className="text-[#005F8A] underline">werking waterontharder</Link>.
        </p>
      </main>
    </>
  );
}
