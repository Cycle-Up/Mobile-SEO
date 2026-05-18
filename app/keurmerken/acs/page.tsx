import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'ACS keurmerk — Franse norm voor drinkwatercontact',
  description: 'ACS (Attestation de Conformite Sanitaire) is de Franse drinkwaternorm erkend door de EU. Wat het test, verschil met NSF en Kiwa, en wanneer het relevant is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keurmerken/acs' },
};

export default function AcsPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Keurmerken', url: 'https://waterfilterplatform.nl/keurmerken' },
        { name: 'ACS keurmerk — Franse norm voor drinkwatercontact', url: 'https://waterfilterplatform.nl/keurmerken/acs' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Wat is het ACS keurmerk voor waterfilters?", answer: "ACS (Attestation de Conformité Sanitaire) is de Franse norm die garandeert dat materialen in contact met drinkwater geen schadelijke stoffen afgeven. Het is de Europees erkende tegenhanger van het Nederlandse Kiwa 113 en wordt breed aanvaard voor waterfiltercomponenten op de Europese markt." },
        { question: "Wat is het verschil tussen ACS en Kiwa 113?", answer: "Zowel ACS als Kiwa 113 testen of materialen schadelijke stoffen afgeven aan drinkwater, maar ze gebruiken een ander nationaal normatief kader. ACS komt uit Frankrijk en is formeel erkend door de Europese Commissie voor de gehele EU. Kiwa 113 is de Nederlandse standaard en is nationaal erkend." },
        { question: "Garandeert een ACS keurmerk dat een waterfilter goed filtert?", answer: "Nee, ACS beoordeelt uitsluitend of een materiaal veilig is voor drinkwatercontact. ACS zegt niets over de filterprestaties. Voor een bewijs dat een filter daadwerkelijk contaminanten verwijdert zijn NSF-normen zoals NSF/ANSI 58 of NSF/ANSI 53 vereist." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'ACS keurmerk — Franse norm voor drinkwatercontact',
        description: 'ACS (Attestation de Conformite Sanitaire) is de Franse drinkwaternorm erkend door de EU. Wat het test, verschil met NSF en Kiwa, en wanneer het relevant is.',
        datePublished: '2026-05-17',
        url: 'https://waterfilterplatform.nl/keurmerken/acs',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keurmerken">Keurmerken</Link> &rsaquo; ACS keurmerk
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            ACS keurmerk &mdash; Franse norm voor drinkwatercontact
          </h1>
          <QuickAnswer answer="ACS (Attestation de Conformite Sanitaire) is de Franse norm die garandeert dat materialen in contact met drinkwater geen schadelijke stoffen afgeven. Het is de Europees erkende tegenhanger van het Nederlandse Kiwa 113 en wordt breed aanvaard voor waterfiltercomponenten op de Europese markt." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat is de ACS-certificering?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ACS staat voor Attestation de Conformite Sanitaire, vrij vertaald: hygieneconformiteitsverklaring. De norm is ontwikkeld in Frankrijk door het Centre scientifique et technique du batiment (CSTB) in samenwerking met het Ministere de la Sante. Ze is specifiek ontworpen voor materialen die permanent in contact komen met drinkwater voor menselijke consumptie.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De ACS-certificering is wettelijk verankerd in de Franse regelgeving (arrete van 29 mei 1997 en opvolgende besluiten) en is door de Europese Commissie erkend als een geldige conformiteitsroute voor de EU-drinkwaterrichtlijn. Dit maakt ACS breder toepasbaar dan sommige nationale normen: een product met ACS kan in principe in alle EU-lidstaten worden verkocht voor gebruik in drinkwaterinstallaties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat test ACS?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Net als Kiwa 113 richt ACS zich uitsluitend op materiaalveiligheid. De tests meten de migratie van potentieel schadelijke stoffen vanuit het materiaal naar het drinkwater:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
            <li>
              <strong>Metaalmigratie:</strong> Lood, cadmium, antimoon, broom en andere zware metalen mogen de grenswaarden van de Europese drinkwaterrichtlijn niet overschrijden.
            </li>
            <li>
              <strong>Organische migratie:</strong> Weekmakers, monomeren, additieven en degradatieproducten van polymeren worden gemeten in gesimuleerd drinkwater na langdurig contact.
            </li>
            <li>
              <strong>Oxideerbare organische stoffen:</strong> De totale hoeveelheid organisch materiaal die uitloogt wordt gemeten als TOC (Total Organic Carbon).
            </li>
            <li>
              <strong>Smaak en geur:</strong> Panelproeven testen of materialen de organoleptische eigenschappen van water beinvloeden.
            </li>
            <li>
              <strong>Microbiologische ondersteuning:</strong> Materialen worden beoordeeld op de mate waarin ze microbiologische groei kunnen bevorderen.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">ACS versus Kiwa 113: overeenkomsten en verschillen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Zowel ACS als Kiwa 113 testen dezelfde fundamentele vraag: geeft dit materiaal schadelijke stoffen af aan drinkwater? De aanpak is echter niet identiek:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-gray-700 mb-4">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">Aspect</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">ACS</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-[#003F5C]">Kiwa 113</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Oorsprong</td>
                  <td className="border border-gray-200 px-4 py-2">Frankrijk (CSTB)</td>
                  <td className="border border-gray-200 px-4 py-2">Nederland (Kiwa)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">EU-erkenning</td>
                  <td className="border border-gray-200 px-4 py-2">Ja, formeel erkend</td>
                  <td className="border border-gray-200 px-4 py-2">Ja, nationaal erkend</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Testmethode</td>
                  <td className="border border-gray-200 px-4 py-2">Frans normatief kader</td>
                  <td className="border border-gray-200 px-4 py-2">Nederlands BRL-kader</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Scope</td>
                  <td className="border border-gray-200 px-4 py-2">Materiaalveiligheid</td>
                  <td className="border border-gray-200 px-4 py-2">Materiaalveiligheid</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">Filterprestaties</td>
                  <td className="border border-gray-200 px-4 py-2">Niet getest</td>
                  <td className="border border-gray-200 px-4 py-2">Niet getest</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">Verificatie</td>
                  <td className="border border-gray-200 px-4 py-2">Via CSTB</td>
                  <td className="border border-gray-200 px-4 py-2">Via Kiwa productregister</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In de praktijk zijn ACS en Kiwa 113 grotendeels equivalent voor het doel van materiaalbeoordeling. Fabrikanten die voor de Franse of Belgische markt produceren hebben veelal ACS; fabrikanten die primair voor de Nederlandse of Engelse markt produceren kiezen eerder voor Kiwa of WRAS.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">ACS versus NSF: een fundamenteel verschil in scope</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ACS en NSF zijn geen equivalenten. ACS beoordeelt uitsluitend of een materiaal veilig is voor drinkwatercontact. NSF-normen (42, 53, 58, 401) meten of een filter daadwerkelijk contaminanten verwijdert.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een filter met ACS-certificering en geen NSF-certificering heeft bewezen dat het geen schade toebrengt, maar niet dat het filtert. Een filter met uitsluitend NSF 58 heeft bewezen dat het filtert, maar de materiaalveiligheid van de specifieke behuizing is niet door een Europees erkende instantie beoordeeld.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Het ideale scenario voor een Europees verkocht osmosesysteem: ACS of Kiwa 113 voor de behuizing en slangen, en NSF/ANSI 58 voor de filterprestaties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wanneer is ACS relevant voor Nederlandse consumenten?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ACS is relevant als u een waterfilter overweegt van een Europese fabrikant, met name uit Frankrijk, Belgie of Italie. Veel Europese fabrikanten van osmosesystemen en koolstoffilters gebruiken ACS als certificeringsbasis omdat het breed geaccepteerd wordt op de continentale markt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Controleer bij Europese producten altijd of de ACS-certificering geldig is via het CSTB en voeg hieraan NSF-verificatie toe voor de prestaties. De combinatie van beide geeft u de zekerheid die een goede aankoopbeslissing verdient.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Gerelateerde keurmerken</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/kiwa-113" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kiwa 113</h3>
              <p className="text-sm text-gray-600">Nederlands equivalent: materiaalveiligheid voor drinkwaterinstallaties.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58</h3>
              <p className="text-sm text-gray-600">Prestatie-certificering voor osmosefilters: membraan en reductie.</p>
            </Link>
            <Link href="/keurmerken/wras" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">WRAS</h3>
              <p className="text-sm text-gray-600">Brits equivalent van Kiwa, relevant bij importeurs uit het VK.</p>
            </Link>
            <Link href="/keurmerken/verificatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Certificering controleren</h3>
              <p className="text-sm text-gray-600">Hoe controleert u ACS via het CSTB-register?</p>
            </Link>
          </div>
        </section>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
