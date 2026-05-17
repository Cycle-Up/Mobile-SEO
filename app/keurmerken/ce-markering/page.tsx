import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'CE-markering waterfilters — wat garandeert het wel en niet? | WaterfilterPlatform',
  description: 'CE-markering betekent dat een waterfilter veilig op de EU-markt mag worden gebracht, maar garandeert geen filterprestaties. Verschil met NSF en Kiwa uitgelegd voor consumenten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keurmerken/ce-markering' },
};

export default function CeMarkPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{
        title: 'CE-markering waterfilters — wat garandeert het wel en niet?',
        description: 'CE-markering betekent dat een waterfilter veilig op de EU-markt mag worden gebracht, maar garandeert geen filterprestaties. Verschil met NSF en Kiwa uitgelegd voor consumenten.',
        datePublished: '2026-05-17',
        url: 'https://waterfilterplatform.nl/keurmerken/ce-markering',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keurmerken">Keurmerken</Link> &rsaquo; CE-markering
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            CE-markering waterfilters &mdash; wat garandeert het wel en niet?
          </h1>
          <QuickAnswer answer="CE betekent dat een product aan Europese veiligheidseisen voldoet en legaal in de EU mag worden verkocht. Voor waterfilters zegt CE niets over filtereffectiviteit of drinkwaterprestaties. Een CE-markering is geen kwaliteitskeurmerk maar een wettelijk conformiteitsteken." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat betekent CE-markering?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CE staat voor Conformite Europeenne (Europese conformiteit). Het is een verklaring van de fabrikant dat het product voldoet aan de toepasselijke Europese richtlijnen en verordeningen. De fabrikant brengt de CE-markering zelf aan; er is geen verplichte derde-partijbeoordeling vereist voor de meeste productcategorieen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            CE is verplicht voor vrijwel alle producten die op de Europese markt worden gebracht, van speelgoed tot medische hulpmiddelen en elektrische apparatuur. Zonder CE mag een product in de EU niet worden verkocht. Het is daarmee een toelatingsvereiste, geen kwaliteitslabel.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor waterfilters zijn de meest relevante Europese richtlijnen de Drinkwaterrichtlijn (2020/2184) voor drinkwaterkwaliteit en de Laagspanningsrichtlijn voor elektrische componenten (bij systemen met pompjes of UV-lampen). Een fabrikant die CE claimt, beweert dat zijn product aan de relevante richtlijnen voldoet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat garandeert CE niet voor waterfilters?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dit is het meest kritische punt voor consumenten die een waterfilter aanschaffen: CE-markering garandeert niet dat een waterfilter effectief filtert. De CE-markering voor een waterfilter betekent:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Het product mag legaal in de EU worden verkocht</li>
            <li>De fabrikant beweert aan bepaalde veiligheidseisen te voldoen</li>
            <li>Er is een technisch dossier aangelegd (maar niet door een onafhankelijke partij beoordeeld)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            CE garandeert expliciet niet:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Dat het filter lood, nitraten, PFAS of andere contaminanten verwijdert</li>
            <li>Dat de opgegeven reductiepercentages zijn geverifieerd door een onafhankelijk laboratorium</li>
            <li>Dat de materialen geen schadelijke stoffen afgeven (daarvoor zijn Kiwa 113 of ACS nodig)</li>
            <li>Dat het filter doet wat de fabrikant in de marketing beweert</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Zelf verklaren versus onafhankelijke certificering</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het fundamentele verschil tussen CE en keurmerken als NSF of Kiwa zit in wie de beoordeling uitvoert:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-gray-700 mb-4">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">Kenmerk</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">CE-markering</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">NSF / Kiwa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Wie beoordeelt?</td>
                  <td className="border border-gray-200 px-4 py-2">Fabrikant zelf</td>
                  <td className="border border-gray-200 px-4 py-2">Onafhankelijk laboratorium</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Verplicht?</td>
                  <td className="border border-gray-200 px-4 py-2">Ja, voor verkoop in EU</td>
                  <td className="border border-gray-200 px-4 py-2">Nee, vrijwillig</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Filterprestaties getest?</td>
                  <td className="border border-gray-200 px-4 py-2">Nee</td>
                  <td className="border border-gray-200 px-4 py-2">Ja (NSF)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Materiaalveiligheid?</td>
                  <td className="border border-gray-200 px-4 py-2">Indirect (via richtlijnen)</td>
                  <td className="border border-gray-200 px-4 py-2">Ja (Kiwa, ACS)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Periodieke hercontrole?</td>
                  <td className="border border-gray-200 px-4 py-2">Nee (bij zelfverklaring)</td>
                  <td className="border border-gray-200 px-4 py-2">Ja, jaarlijks</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Resultaten publiek?</td>
                  <td className="border border-gray-200 px-4 py-2">Nee</td>
                  <td className="border border-gray-200 px-4 py-2">Ja, via database</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Consumentenwaarschuwing: CE alleen is onvoldoende</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Op platforms als Amazon, Bol.com en AliExpress zijn honderden waterfilters te vinden die uitsluitend CE vermelden als keurmerk. Fabrikanten presenteren CE soms als bewijs van kwaliteit of zelfs als gelijkwaardige vervanging voor NSF-certificering. Dat is onjuist.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een waterfilter met alleen CE kan een uitstekend product zijn, maar u heeft geen objectief bewijs van de prestaties. U vertrouwt volledig op de claims van de fabrikant. Voor consumenten die daadwerkelijk contaminanten willen verwijderen &mdash; lood, PFAS, medicijnresten &mdash; is CE-markering als enige keurmerk onvoldoende.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Let op de volgende situaties als rode vlag:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Verpakking toont CE-logo maar geen NSF-certificaatnummer</li>
            <li>Fabrikant schrijft "CE-gecertificeerd" in plaats van "NSF-gecertificeerd"</li>
            <li>Claims zoals "99,9% reductie" zonder vermelding van welke norm de test heeft uitgevoerd</li>
            <li>Geen certificaatnummer of verwijzing naar een publiek register</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat moet u zoeken naast CE?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor een betrouwbare aankoopbeslissing heeft u naast CE aanvullende certificeringen nodig:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Filterprestaties:</strong> <Link href="/keurmerken/nsf-ansi-58" className="text-[#005F8A] hover:underline font-medium">NSF/ANSI 58</Link> (osmose) of <Link href="/keurmerken/nsf-ansi-42-53" className="text-[#005F8A] hover:underline font-medium">NSF/ANSI 42/53</Link> (koolfilters)</li>
            <li><strong>Materiaalveiligheid:</strong> <Link href="/keurmerken/kiwa-113" className="text-[#005F8A] hover:underline font-medium">Kiwa 113</Link> of <Link href="/keurmerken/acs" className="text-[#005F8A] hover:underline font-medium">ACS</Link></li>
            <li><strong>Opkomende stoffen:</strong> <Link href="/keurmerken/nsf-ansi-401" className="text-[#005F8A] hover:underline font-medium">NSF/ANSI 401</Link> voor medicijnresten</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            CE is een noodzakelijke maar niet voldoende voorwaarde. Beschouw het als de minimale drempeleis voor legale verkoop, niet als bewijs van kwaliteit of effectiviteit.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Gerelateerde keurmerken</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58</h3>
              <p className="text-sm text-gray-600">De enige onafhankelijk geverifieerde norm voor osmoseprestaties.</p>
            </Link>
            <Link href="/keurmerken/kiwa-113" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kiwa 113</h3>
              <p className="text-sm text-gray-600">Nederlands keurmerk voor aantoonbare materiaalveiligheid.</p>
            </Link>
            <Link href="/keurmerken/verificatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Certificering controleren</h3>
              <p className="text-sm text-gray-600">Hoe onderscheidt u echte certificeringen van marketingclaims?</p>
            </Link>
            <Link href="/keurmerken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Alle keurmerken</h3>
              <p className="text-sm text-gray-600">Terug naar het volledige keurmerken overzicht.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
