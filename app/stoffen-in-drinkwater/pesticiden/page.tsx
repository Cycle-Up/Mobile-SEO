import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Pesticiden in drinkwater -- glyfosaat, atrazine en MCPA',
  description:
    'Pesticiden in drinkwater: EU-norm 0,1 ug/L per stof. Meest gevonden stoffen in Nederland: glyfosaat, bentazon en MCPA. Oplossingen met actief kool en osmose.',
  alternates: { canonical: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/pesticiden' },
};

export default function PesticidentPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Stoffen in drinkwater', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater' },
        { name: 'Pesticiden in drinkwater — glyfosaat, atrazine en MCPA', url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/pesticiden' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Wat is de norm voor pesticiden in drinkwater?", answer: "De EU-norm voor pesticiden in drinkwater is 0,1 microgram per liter per afzonderlijke stof en maximaal 0,5 ug/L totaal. Deze normen zijn gebaseerd op het voorzorgsbeginsel." },
        { question: "Welke pesticiden worden het meest aangetroffen in Nederlands drinkwater?", answer: "In Nederland worden glyfosaat, bentazon, MCPA en atrazine het vaakst gemeten in oppervlaktewater en drinkwater, voornamelijk afkomstig uit de landbouw. Atrazine is verboden in de EU maar is nog steeds aanwezig in de bodem." },
        { question: "Hoe verwijder je pesticiden uit drinkwater?", answer: "Actief koolfilters (NSF/ANSI 53 gecertificeerd) zijn effectief tegen een breed spectrum aan pesticiden. Omgekeerde osmose biedt bredere bescherming, ook voor moeilijk adsorbeerbare polaire verbindingen zoals glyfosaat. Een combinatie van beide geeft de hoogste verwijderingspercentages." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'Pesticiden in drinkwater -- glyfosaat, atrazine en MCPA',
        description: 'Pesticiden in drinkwater: EU-norm 0,1 ug/L per stof. Meest gevonden stoffen in Nederland: glyfosaat, bentazon en MCPA. Oplossingen met actief kool en osmose.',
        datePublished: '2026-01-01',
        url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/pesticiden',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/stoffen-in-drinkwater">Stoffen in drinkwater</Link> &rsaquo; Pesticiden
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Pesticiden in drinkwater -- glyfosaat, atrazine en MCPA
          </h1>
          <QuickAnswer answer="De EU-norm voor pesticiden in drinkwater is 0,1 microgram per liter per afzonderlijke stof en maximaal 0,5 ug/L totaal. In Nederland worden glyfosaat, bentazon en MCPA het meest aangetroffen -- voornamelijk uit landbouw. Actief koolfilters en omgekeerde osmose verwijderen pesticiden effectief." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">EU-parameternormen voor pesticiden</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            De Europese Drinkwaterrichtlijn stelt strenge normen voor pesticiden. Per individuele pesticide geldt een maximumconcentratie van 0,1 microgram per liter (ug/L). Voor de som van alle pesticiden geldt een totaalnorm van 0,5 ug/L. Deze normen zijn gebaseerd op het voorzorgsbeginsel -- niet op aangetoonde gezondheidsschade bij deze concentraties.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Drinkwaterbedrijven zijn verplicht te handhaven op deze normen. Bij overschrijding worden maatregelen getroffen, zoals aanpassing van de inname, extra zuivering of omschakeling naar een andere bron.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Meest gevonden stoffen in Nederland</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Uit RIVM-monitoringdata blijkt dat de volgende pesticiden het vaakst worden aangetroffen in Nederlands oppervlaktewater en (in mindere mate) drinkwater:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">Stof</th>
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">Gebruik</th>
                  <th className="text-left p-3 text-[#003F5C] font-semibold border-b border-gray-200">EU-norm</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700 font-medium">Glyfosaat</td>
                  <td className="p-3 text-gray-700">Onkruidbestrijder (Roundup e.a.)</td>
                  <td className="p-3 text-gray-700">0,1 ug/L</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-3 text-gray-700 font-medium">Bentazon</td>
                  <td className="p-3 text-gray-700">Selectief herbicide akkerbouw</td>
                  <td className="p-3 text-gray-700">0,1 ug/L</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-3 text-gray-700 font-medium">MCPA</td>
                  <td className="p-3 text-gray-700">Breedblad-onkruidbestrijder</td>
                  <td className="p-3 text-gray-700">0,1 ug/L</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 text-gray-700 font-medium">Atrazine</td>
                  <td className="p-3 text-gray-700">Verboden in EU, nog aanwezig in bodem</td>
                  <td className="p-3 text-gray-700">0,1 ug/L</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Seizoenspieken in lente en najaar</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Pesticidenconcentraties in oppervlaktewater pieken typisch in de lente (maart-mei) en het najaar (september-oktober). Dit zijn de periodes van intensief agrarisch gebruik. Na hevige regenbuien spoelen residuen sneller uit naar sloten, kanalen en uiteindelijk grondwater.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Drinkwaterbedrijven die oppervlaktewater gebruiken als bron, passen hun zuivering hierop aan. Bij grondwaterwinning treedt een vertraging op -- pesticiden die nu worden toegepast, kunnen pas over jaren in het grondwater verschijnen.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Actief kool en osmose als oplossingen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            <Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] hover:underline">Actief koolfilters</Link> (gecertificeerd NSF/ANSI 53 of NSF/ANSI 58) zijn effectief tegen een breed spectrum aan pesticiden. Ze binden organische moleculen aan het koolstofoppervlak. De effectiviteit varieert per stof: voor polaire verbindingen zoals glyfosaat is de adsorptie beperkter dan voor apolaire pesticiden.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            <Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Omgekeerde osmose</Link> biedt bredere bescherming: het membraan filtert moleculen op grootte en lading, waardoor ook moeilijk te adsorberen pesticiden worden tegengehouden. Gecombineerde systemen (actief kool + RO-membraan) geven de hoogste verwijderingspercentages.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer informatie: <Link href="/leidingwater/pesticiden" className="text-[#005F8A] hover:underline">pesticiden in leidingwater</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Welk filter filtert dit?</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><Link href="/filtertechnieken/omgekeerde-osmose" className="text-[#005F8A] hover:underline">Osmose verwijdert pesticiden 90%+</Link></li>
            <li><Link href="/filtertechnieken/actief-kool" className="text-[#005F8A] hover:underline">Actief kool voor organische pesticiden</Link></li>
          </ul>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
