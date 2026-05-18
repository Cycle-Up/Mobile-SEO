import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'WRAS — Brits keurmerk voor drinkwaterinstallaties',
  description: 'WRAS (Water Regulations Advisory Scheme) is het Britse equivalent van Kiwa voor drinkwaterinstallaties. Na Brexit nog relevant bij Britse importeurs.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keurmerken/wras' },
};

export default function WrasPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Keurmerken', url: 'https://waterfilterplatform.nl/keurmerken' },
        { name: 'WRAS — Brits keurmerk voor drinkwaterinstallaties', url: 'https://waterfilterplatform.nl/keurmerken/wras' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Wat is het WRAS keurmerk?", answer: "WRAS (Water Regulations Advisory Scheme) is het Britse equivalent van Kiwa 113: het certificeert dat materialen in contact met drinkwater veilig zijn en geen schadelijke stoffen afgeven. Het wordt erkend door alle Britse waterbedrijven en de Britse toezichthouder op drinkwaterkwaliteit." },
        { question: "Is WRAS nog geldig in Nederland na Brexit?", answer: "Na Brexit is WRAS niet meer automatisch erkend als equivalent van Kiwa 113 of ACS voor de Nederlandse en EU-markt. Voor particuliere consumenten heeft dit minder directe gevolgen: WRAS blijft een onafhankelijk keurmerk voor materiaalveiligheid, maar waterbedrijven en installateurs in Nederland zullen Kiwa 113 of ACS verkiezen." },
        { question: "Wat is het verschil tussen WRAS, Kiwa 113 en ACS?", answer: "WRAS (VK), Kiwa 113 (Nederland) en ACS (Frankrijk) testen allemaal hetzelfde: of materialen geen schadelijke stoffen afgeven aan drinkwater. Het onderscheid zit in de juridische erkenning. Voor Nederlandse consumenten zijn Kiwa 113 en ACS de meest relevante keuze; WRAS is een aanvullend vertrouwenssignaal bij Brits geproduceerde producten." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'WRAS — Brits keurmerk voor drinkwaterinstallaties',
        description: 'WRAS (Water Regulations Advisory Scheme) is het Britse equivalent van Kiwa voor drinkwaterinstallaties. Na Brexit nog relevant bij Britse importeurs.',
        datePublished: '2026-05-17',
        url: 'https://waterfilterplatform.nl/keurmerken/wras',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keurmerken">Keurmerken</Link> &rsaquo; WRAS
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            WRAS &mdash; Brits keurmerk voor drinkwaterinstallaties
          </h1>
          <QuickAnswer answer="WRAS (Water Regulations Advisory Scheme) is het Britse equivalent van Kiwa 113: het certificeert dat materialen in contact met drinkwater veilig zijn en geen schadelijke stoffen afgeven. Na Brexit is WRAS niet meer automatisch erkend in de EU, maar het keurmerk duikt nog op bij waterfilters van Britse fabrikanten of via Britse importeurs." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat is WRAS?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            WRAS staat voor Water Regulations Advisory Scheme. Het is een onafhankelijke Britse organisatie die producten en materialen beoordeelt op conformiteit met de Britse Water Supply (Water Fittings) Regulations 1999. Deze wetgeving verplicht dat alle materialen en producten die in contact komen met drinkwater in de Britse waterinfrastructuur goedgekeurd zijn.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            WRAS heeft een productgoedkeuringsschema (WRAS Product Approval) dat erkend wordt door alle Britse waterbedrijven en door de Drinking Water Inspectorate (DWI), de Britse toezichthouder op drinkwaterkwaliteit. Een WRAS-goedkeuring is voor de Britse markt vergelijkbaar met wat Kiwa 113 is voor de Nederlandse markt.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat test WRAS?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De WRAS-beoordeling richt zich op materiaalveiligheid en mechanische geschiktheid:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
            <li>
              <strong>Chemische migratie:</strong> Materialen worden getest op uitloging van metalen (lood, nikkel, chroom), organische stoffen (weekmakers, oplosmiddelen) en andere chemische verbindingen die de drinkwaterkwaliteit kunnen beinvloeden.
            </li>
            <li>
              <strong>Organoleptische eigenschappen:</strong> Materialen mogen de smaak of geur van drinkwater niet nadelig beinvloeden. Panelproeven worden uitgevoerd conform BS EN 1420.
            </li>
            <li>
              <strong>Microbiologische geschiktheid:</strong> Oppervlakken mogen geen overmatige microbiologische groei bevorderen die tot secundaire verontreiniging kan leiden.
            </li>
            <li>
              <strong>Drukvastheid en duurzaamheid:</strong> Mechanische componenten worden getest op betrouwbaarheid onder de opgegeven gebruiksomstandigheden.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Net als Kiwa 113 en ACS test WRAS niet op filterprestaties. Een WRAS-goedkeuring bewijst dat het materiaal veilig is voor drinkwatercontact, niet dat het filter contaminanten effectief verwijdert.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">WRAS na Brexit: wat veranderde er?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor Brexit (31 januari 2020) was het Verenigd Koninkrijk lid van de EU en werden Britse normen automatisch erkend binnen de Europese markt. Na Brexit verloor het VK zijn EU-lidmaatschap, wat consequenties had voor de wederzijdse erkenning van certificeringen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De praktische gevolgen voor WRAS in Nederland:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>WRAS is niet meer automatisch erkend als equivalent van Kiwa 113 of ACS voor de Nederlandse of EU-markt</li>
            <li>Britse fabrikanten die naar de EU exporteren moeten aanvullende EU-conformiteitsdocumentatie aanleveren</li>
            <li>WRAS blijft wel geldig als bewijs van kwaliteit voor consumenten die het product beoordelen</li>
            <li>Waterbedrijven en installateurs in Nederland zullen Kiwa 113 of ACS verkiezen boven WRAS</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor particuliere consumenten heeft de post-Brexit situatie minder directe gevolgen: als u een waterfilter koopt van een Britse importeur met alleen WRAS-certificering, is het materiaalveiligheidsaspect gedekt door een erkend onafhankelijk keurmerk, ook al is dit niet het EU-standaard Kiwa of ACS.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wanneer is WRAS relevant voor Nederlandse consumenten?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            WRAS komt u tegen in de volgende situaties:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
            <li>
              <strong>Britse merken:</strong> Fabrikanten als Doulton, Berkey (ook verkrijgbaar via Britse distributeurs) en bepaalde BWT-producten vermelden soms WRAS.
            </li>
            <li>
              <strong>Parallelle import:</strong> Filters gekocht via Britse webshops of importeurs die niet specifiek voor de Nederlandse markt gecertificeerd zijn.
            </li>
            <li>
              <strong>Industriele systemen:</strong> Voor zakelijke installaties bij bedrijven met Britse eigenaars of leveranciers.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als u WRAS tegenkomt op een product, biedt het u vertrouwen over de materiaalveiligheid op basis van een onafhankelijke beoordeling. Voor een volledig beeld wilt u echter ook de filterprestaties gecertificeerd zien via NSF-normen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">WRAS versus Kiwa 113 en ACS</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-gray-700 mb-4">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">Kenmerk</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">WRAS</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">Kiwa 113</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">ACS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Oorsprong</td>
                  <td className="border border-gray-200 px-4 py-2">VK</td>
                  <td className="border border-gray-200 px-4 py-2">Nederland</td>
                  <td className="border border-gray-200 px-4 py-2">Frankrijk</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">EU-erkenning (2026)</td>
                  <td className="border border-gray-200 px-4 py-2">Niet automatisch</td>
                  <td className="border border-gray-200 px-4 py-2">Ja</td>
                  <td className="border border-gray-200 px-4 py-2">Ja</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Focus</td>
                  <td className="border border-gray-200 px-4 py-2">Materiaalveiligheid</td>
                  <td className="border border-gray-200 px-4 py-2">Materiaalveiligheid</td>
                  <td className="border border-gray-200 px-4 py-2">Materiaalveiligheid</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Filterprestaties</td>
                  <td className="border border-gray-200 px-4 py-2">Nee</td>
                  <td className="border border-gray-200 px-4 py-2">Nee</td>
                  <td className="border border-gray-200 px-4 py-2">Nee</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Alle drie zijn vergelijkbare normen voor hetzelfde doel: materiaalveiligheid bij drinkwatercontact. Het onderscheid zit in de juridische erkenning binnen de EU. Voor Nederlandse consumenten is Kiwa 113 of ACS de meest relevante keuze; WRAS is een aanvullend vertrouwenssignaal bij Brits geproduceerde of gedistribueerde producten.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Gerelateerde keurmerken</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/kiwa-113" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kiwa 113</h3>
              <p className="text-sm text-gray-600">Nederlands keurmerk: het EU-alternatief voor WRAS.</p>
            </Link>
            <Link href="/keurmerken/acs" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">ACS keurmerk</h3>
              <p className="text-sm text-gray-600">Frans equivalent, breed erkend in continentaal Europa.</p>
            </Link>
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering</h3>
              <p className="text-sm text-gray-600">EU-conformiteitsmarkering: wat het wel en niet garandeert.</p>
            </Link>
            <Link href="/keurmerken/verificatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Certificering controleren</h3>
              <p className="text-sm text-gray-600">Stap-voor-stap: echte van nep-keurmerken onderscheiden.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
