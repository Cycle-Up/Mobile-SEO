import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Nitraat en nitriet in drinkwater -- norm, risicos en filteren | WaterfilterPlatform',
  description:
    'Nitraat in drinkwater: EU-norm 50 mg/L, speciaal voor babies en zwangeren 25 mg/L. Nitriet max 0,5 mg/L. Osmose verwijdert 85-95%. Actief kool werkt NIET.',
  alternates: { canonical: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/nitraat-nitriet' },
};

export default function NiraatNitrietPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Stoffen in drinkwater', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater' },
        { name: 'Nitraat en nitriet in drinkwater — norm, risicos en filteren', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/nitraat-nitriet' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Wat is de norm voor nitraat in drinkwater?", answer: "De EU-norm voor nitraat in drinkwater is 50 mg/L. Voor babies jonger dan 6 maanden en zwangere vrouwen wordt een strengere grens van 25 mg/L aangehouden vanwege het risico op methemoglobinemie." },
        { question: "Is nitraat in drinkwater gevaarlijk voor babies?", answer: "Ja, voor zuigelingen jonger dan 6 maanden kan nitraat via omzetting in nitriet het zuurstoftransport in het bloed blokkeren, wat 'blue baby syndrome' (methemoglobinemie) veroorzaakt. Gebruik voor babyvoeding water met minder dan 25 mg/L nitraat." },
        { question: "Welk filter verwijdert nitraat uit drinkwater?", answer: "Omgekeerde osmose verwijdert 85-95% van nitraat. Actief koolfilters zoals Brita-kannen werken niet tegen nitraat -- nitraat is een klein anion dat niet adsorbeert aan koolstof." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'Nitraat en nitriet in drinkwater -- norm, risicos en filteren',
        description: 'Nitraat in drinkwater: EU-norm 50 mg/L, speciaal voor babies en zwangeren 25 mg/L. Nitriet max 0,5 mg/L. Osmose verwijdert 85-95%. Actief kool werkt NIET.',
        datePublished: '2026-01-01',
        url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/nitraat-nitriet',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/stoffen-in-drinkwater">Stoffen in drinkwater</Link> &rsaquo; Nitraat en nitriet
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Nitraat en nitriet in drinkwater -- norm, risicos en filteren
          </h1>
          <QuickAnswer answer="De EU-norm voor nitraat in drinkwater is 50 mg/L; voor babies en zwangere vrouwen wordt 25 mg/L aangehouden. Nitriet mag maximaal 0,5 mg/L bedragen. In landbouwgebieden zijn de concentraties soms hoger. Osmose verwijdert 85-95% van nitraat. Belangrijk: actief koolfilters werken NIET tegen nitraat -- een veelgemaakte vergissing." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Normen voor nitraat en nitriet</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Nitraat (NO3-) en nitriet (NO2-) zijn stikstofverbindingen die van nature voorkomen in de bodem, maar sterk worden verhoogd door gebruik van kunstmest en dierlijke mest in de landbouw. De EU stelt de volgende parameternormen voor drinkwater:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">Stof</th>
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">EU-norm (algemeen)</th>
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">Advies babies/zwangeren</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700 font-medium">Nitraat</td>
                  <td className="p-3 text-gray-700">50 mg/L</td>
                  <td className="p-3 text-gray-700">25 mg/L</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 text-gray-700 font-medium">Nitriet (behandeld water)</td>
                  <td className="p-3 text-gray-700">0,5 mg/L</td>
                  <td className="p-3 text-gray-700">0,5 mg/L</td>
                </tr>
                <tr>
                  <td className="p-3 text-gray-700 font-medium">Nitriet (ongezuiverd water)</td>
                  <td className="p-3 text-gray-700">0,1 mg/L</td>
                  <td className="p-3 text-gray-700">0,1 mg/L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Gezondheidsrisicos: babies en methemoglobinemie</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            In het lichaam wordt nitraat omgezet in nitriet. Bij zuigelingen (jonger dan 6 maanden) kan nitriet het hemoglobine in het bloed omzetten in methemoglobine, dat geen zuurstof kan vervoeren. Dit veroorzaakt methemoglobinemie (ook wel "blue baby syndrome" genoemd), een potentieel levensgevaarlijke aandoening.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Bij volwassenen kan nitriet reageren met aminozuren tot nitrosaminen, stoffen die in hoge concentraties carcinogeen zijn. Bij normale drinkwaterconcentraties is dit risico voor gezonde volwassenen minimaal.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-3">
            <p className="font-semibold text-amber-800 mb-1">Advies voor ouders</p>
            <p className="text-amber-700 text-sm">Gebruik voor het aanmaken van babyvoeding water met minder dan 25 mg/L nitraat als u in een landbouwgebied woont of putwater gebruikt. Controleer de kwaliteitsrapportage van uw drinkwaterbedrijf of laat putwater testen.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Landbouwgebieden: verhoogd risico</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            In intensieve landbouwgebieden, met name in Brabant, Gelderland en Limburg, zijn nitraatconcentraties in grondwater soms hoger dan de drinkwaternorm. Drinkwaterbedrijven die grondwater winnen in deze gebieden, moeten extra zuiveren om aan de norm te voldoen.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Particuliere grondwaterputten in landbouwgebieden hebben geen wettelijke zuiveringsplicht en zijn daardoor risicovoller. Regelmatig testen -- minimaal eenmaal per jaar -- is sterk aanbevolen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Osmose werkt -- actief kool niet</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Omgekeerde osmose verwijdert 85-95% van nitraat uit drinkwater. Het semipermeabele membraan houdt nitraationen (geladen deeltjes) effectief tegen. Dit maakt RO de enige consumentenfiltertechniek die nitraat betrouwbaar verwijdert.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
            <p className="font-semibold text-red-800 mb-1">Veelgemaakte fout: actief kool werkt NIET voor nitraat</p>
            <p className="text-red-700 text-sm">Actief koolfilters (inclusief filterkannen zoals Brita) zijn effectief voor chloor, geur en smaak, maar verwijderen geen nitraat. Nitraat is een klein anion dat niet aan het koolstofoppervlak adsorbeert. Wie nitraat wil verwijderen, heeft een osmosefilter nodig.</p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Ionenwisselaars (speciaal geconfigureerd als anionenwisselaar) kunnen ook nitraat verwijderen, maar zijn complexer in onderhoud en worden minder gebruikt in huishoudelijke toepassingen.
          </p>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
