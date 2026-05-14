import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterontharder Huren: Voordelen, Kosten & Risico\'s',
  description: 'Is waterontharder huren slimmer dan kopen? Vergelijk huurcontract vs. aanschaf op TCO, service-inclusief voordeel, lange termijn kostenverschil en wanneer huren loont.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/huren' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat kost een waterontharder huren per maand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Waterontharder huren kost doorgaans €15–35 per maand, afhankelijk van het merk en de servicediensten die zijn inbegrepen. Bij de meeste aanbieders zijn installatie, onderhoud, reparaties en vervanging van de harspatroon inclusief. Op 5 jaar betaal je €900–2.100 aan huur.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is kopen of huren van een waterontharder goedkoper?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kopen is op de lange termijn goedkoper. Een kwalitatieve waterontharder kost €500–1.500 bij aanschaf, met jaarlijks €50–100 aan zout en €80–150 onderhoud. Na 3–5 jaar heb je de investering terugverdiend. Huren loont alleen als je korter dan 2 jaar op het adres woont of geen installatierisico wilt nemen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een huurwaterontharder meenemen bij verhuizing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meeste huurcontracten voorzien in verplaatsing bij verhuizing binnen Nederland. Controleer of demontage, transport en herinstallatie zijn inbegrepen of extra kosten met zich meebrengen. Sommige aanbieders vragen €100–200 verhuiskosten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke waterontharder merken bieden huurcontracten aan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kinetico, BWT, Culligan en Harvey Water Softeners bieden huurcontracten aan in Nederland. Vergelijk de contractvoorwaarden: minimale looptijd, opzegtermijn, wat er bij onderhoudskosten is inbegrepen en of de apparatuur up-to-date blijft gedurende de looptijd.',
      },
    },
  ],
};

export default function WaterOntharderHurenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          faqSchema,
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Waterontharder', item: 'https://waterfilterplatform.nl/waterontharder' },
              { '@type': 'ListItem', position: 3, name: 'Huren', item: 'https://waterfilterplatform.nl/waterontharder/huren' },
            ],
          },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:underline">Home</a> &rsaquo;{' '}
          <a href="/waterontharder" className="hover:underline">Waterontharder</a> &rsaquo;{' '}
          <span>Huren</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Waterontharder Huren: Is het de moeite Waard?
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Huren heeft lage instapkosten en service is inbegrepen — maar op de lange termijn betaal je significant meer. We leggen uit wanneer huren wél de slimme keuze is en wat je op moet letten bij huurcontracten.
        </p>

        <CTABanner />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kosten vergelijking: huren vs. kopen
        </h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Kostenpost</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Huren</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Kopen (mid-range)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Startkosten</td>
                <td className="border border-gray-300 px-3 py-2">€0–100</td>
                <td className="border border-gray-300 px-3 py-2">€700–1.200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Maandelijks (huur/onderhoud)</td>
                <td className="border border-gray-300 px-3 py-2">€20–35</td>
                <td className="border border-gray-300 px-3 py-2">€10–20</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Zoutkosten/jaar</td>
                <td className="border border-gray-300 px-3 py-2">€60–120</td>
                <td className="border border-gray-300 px-3 py-2">€60–120</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Totaal 5 jaar</td>
                <td className="border border-gray-300 px-3 py-2">€1.500–2.500</td>
                <td className="border border-gray-300 px-3 py-2">€1.300–2.000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">Totaal 10 jaar</td>
                <td className="border border-gray-300 px-3 py-2">€2.800–4.700</td>
                <td className="border border-gray-300 px-3 py-2">€1.900–3.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 text-sm mb-6">
          *Inclusief installatie, periodiek onderhoud, reparaties en zoutkosten. Exclusief eventuele verhuiskosten.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Wanneer loont huren wél?
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Korter dan 2 jaar op adres:</strong> Bij huurwoningen of tijdelijke huisvesting is investeren in een waterontharder zelden zinvol. Een huurcontract met korte opzegtermijn is dan flexibeler.</li>
          <li><strong>Geen installatiemogelijkheid:</strong> Als de verhuurder geen toestemming geeft voor permanente installatie, bieden sommige huurcontracten demontabele systemen.</li>
          <li><strong>Geen technische affiniteit:</strong> Service, onderhoud en reparaties zijn inbegrepen. Je hoeft niets te weten van waterhardheid, regeneratietijden of harsbedonderhoud.</li>
          <li><strong>Cashflow-overweging:</strong> De lage startkosten zijn aantrekkelijk als je de aanschafsom elders nodig hebt.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Aandachtspunten bij huurcontracten
        </h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Minimale looptijd:</strong> Veel contracten hebben een minimale looptijd van 2–3 jaar. Controleer de opzegtermijn en eventuele boetes bij voortijdige beëindiging.</li>
          <li><strong>Wat is inclusief:</strong> Is jaarlijks onderhoud inbegrepen? Zijn vervangingsonderdelen (harspatroon, membraan, keukraan) gedekt? Regelt de aanbieder storingen binnen 24–48 uur?</li>
          <li><strong>Eigendomssituatie:</strong> Bij huur ben je afhankelijk van de leverancier voor upgrades. Als er betere technologie beschikbaar komt, zit je vast aan je contract.</li>
          <li><strong>Verhuizing:</strong> Bespreek de verhuisclausule expliciet. Sommige aanbieders rekenen €150–300 voor demontage en herinstallatie op een nieuw adres.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Alternatief: osmosefilter ipv waterontharder
        </h2>
        <p className="text-gray-700 mb-4">
          Voor huishoudens die voornamelijk drinkwaterkwaliteit willen verbeteren (niet alle leidingen) is een <a href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">osmosefilter</a> vaak een slimmere investering dan een waterontharder. Een osmosefilter:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Verwijdert kalk, chloor, metalen én microverontreinigingen</li>
          <li>Kost €300–600 éénmalig (geen zout, geen maandelijkse huur)</li>
          <li>Past onder elk aanrecht, geen installateur nodig</li>
          <li>Produceert water voor 1–3 cent per liter</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Bekijk ons vergelijk <a href="/waterontharder" className="text-[#005F8A] underline">waterontharder vs. osmosefilter</a> om de beste keuze voor jouw situatie te maken.
        </p>

        <div className="space-y-4 mb-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <CTABanner />
      </main>
    </>
  );
}
