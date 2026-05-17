import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Chloor bijproducten in drinkwater -- THM en HAA',
  description:
    'Trihalomethanen (THM) en haloazijnzuren (HAA) als chloor bijproducten in drinkwater: EU-norm 100 ug/L, IARC Groep 2B kankerrisico. Actief kool en osmose als.',
  alternates: { canonical: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/chloor-bijproducten' },
};

export default function ChloorBijproducktenPage() {
  return (
    <>
      <SchemaOrg type="Article" article={{
        title: 'Chloor bijproducten in drinkwater -- THM en HAA',
        description: 'Trihalomethanen (THM) en haloazijnzuren (HAA) als chloor bijproducten in drinkwater: EU-norm 100 ug/L, IARC Groep 2B kankerrisico. Actief kool en osmose als.',
        datePublished: '2026-01-01',
        url: 'https://waterfilterplatform.nl/stoffen-in-drinkwater/chloor-bijproducten',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/stoffen-in-drinkwater">Stoffen in drinkwater</Link> &rsaquo; Chloor bijproducten
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Chloor bijproducten in drinkwater -- THM en HAA
          </h1>
          <QuickAnswer answer="Chloor is essentieel voor veilig drinkwater, maar reageert met organische stoffen tot desinfectiebijproducten: trihalomethanen (THM, norm 100 ug/L EU) en haloazijnzuren (HAA). Langdurige blootstelling aan hoge concentraties is geassocieerd met een verhoogd kankerrisico (IARC Groep 2B). Actief koolfilters en osmose verwijderen deze bijproducten effectief." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Hoe ontstaan desinfectiebijproducten?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Chloor (Cl2) of chlooramine wordt door drinkwaterbedrijven toegevoegd om bacterien en virussen te doden tijdens het transport door het leidingnet. Dit is een bewezen effectieve en noodzakelijke stap voor volksgezondheid. Echter, chloor reageert ook met van nature aanwezige organische stoffen in water -- humuszuren, fulvozuren en andere organische verbindingen -- tot zogenoemde desinfectiebijproducten (DBPs).
          </p>
          <p className="text-gray-700 leading-relaxed">
            De twee meest relevante klassen zijn trihalomethanen (THM) en haloazijnzuren (HAA). De hoeveelheid bijproducten hangt af van de concentratie organisch materiaal in het bronwater, de chloorhoeveelheid, de contacttijd en de temperatuur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Trihalomethanen (THM)</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            De meest bekende trihalomethanen zijn chloroform (CHCl3), bromodichloormethaan (BDCM), dibromochloormethaan (DBCM) en bromoform. De EU-norm voor de som van THM in drinkwater is 100 microgram per liter (ug/L).
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            In Nederlandse drinkwaterrapportages zijn THM-concentraties doorgaans ver onder de norm. Toch zijn sommige individuele THM -- met name BDCM -- door het Internationaal Agentschap voor Kankeronderzoek (IARC) geclassificeerd als mogelijk kankerverwekkend voor de mens (Groep 2B) bij chronische blootstelling aan hogere concentraties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Haloazijnzuren (HAA)</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Haloazijnzuren, zoals dichloorazijnzuur en trichloorazijnzuur, zijn een tweede belangrijke klasse van desinfectiebijproducten. Ze worden minder gemeten dan THM maar zijn in sommige studies sterker geassocieerd met negatieve gezondheidseffecten. De EU-norm voor de som van vijf HAA is 60 ug/L.
          </p>
          <p className="text-gray-700 leading-relaxed">
            HAA zijn minder vluchtig dan THM: ze ontwijken niet bij koken of staan. Een waterfilter is de aangewezen methode om HAA te reduceren.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Gezondheidsrisico bij chronische blootstelling</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Epidemiologische studies suggereren een verband tussen langdurige blootstelling aan hoge THM-concentraties en een licht verhoogd risico op blaaskanker. IARC heeft meerdere individuele THM in Groep 2B geplaatst (mogelijk kankerverwekkend voor de mens, op basis van voldoende dierlijk bewijs maar beperkt humaan bewijs).
          </p>
          <p className="text-gray-700 leading-relaxed">
            Het risico bij Nederlandse drinkwaterconcentraties is bij de huidige normniveaus laag. Drinkwaterbedrijven streven naar zo laag mogelijke DBP-niveaus door optimalisatie van zuivering en beperking van organisch materiaal in het bronwater.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Actief kool en osmose als oplossingen</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Actief koolfilters (NSF/ANSI 42 en 53 gecertificeerd) zijn zeer effectief voor de verwijdering van THM en andere vluchtige organische verbindingen. De koolstofmatrix adsorbeert deze moleculen. Een goed onderhouden actief koolfilter kan THM-concentraties met 70-90% reduceren.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Omgekeerde osmose biedt een bredere bescherming en is ook effectief tegen HAA en andere desinfectiebijproducten. Gecombineerde systemen met actief kool als voorfilter en RO-membraan geven de meest volledige verwijdering.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Zie ook: <Link href="/leidingwater/chloor" className="text-[#005F8A] hover:underline">chloor in leidingwater</Link>.
          </p>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
