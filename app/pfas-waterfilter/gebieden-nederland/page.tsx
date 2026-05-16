import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'PFAS in drinkwater per regio: risicogebieden in Nederland',
  description:
    'Overzicht van PFAS-hotspots in Nederland per regio: Dordrecht/Chemours, Schiphol, militaire bases, Zeeland. Per gebied: bron, gemeten niveaus, drinkwaterbedrijf en status.',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-waterfilter/gebieden-nederland' },
};

const faqItems = [
  {
    question: 'Welke gebieden in Nederland hebben de hoogste PFAS-concentraties in drinkwater?',
    answer:
      'De bekendste PFAS-hotspots zijn: (1) Dordrecht/Papendrecht — jarenlange PFAS-lozingen door Chemours/DuPont; (2) zone rondom Amsterdam Schiphol — gebruik van PFAS-houdend blusschuim; (3) omgeving militaire vliegbases Volkel, Eindhoven, De Peel, Woensdrecht en Leeuwarden. Putwateren in deze gebieden kunnen sterk verhoogde PFAS-waarden hebben.',
  },
  {
    question: 'Is het leidingwater in Dordrecht veilig om te drinken?',
    answer:
      'Drinkwaterbedrijf Oasen heeft aanvullende zuivering geinstalleerd voor het bronwater in de Dordrecht-regio. Het geleverde leidingwater voldoet aan de EU-PFAS-norm (0,10 µg/L sum-20). Particuliere putten in het gebied zijn een ander verhaal: die worden niet gemonitord en kunnen nog altijd verhoogde GenX-waarden hebben.',
  },
  {
    question: 'Wat doet Schiphol met PFAS in het grondwater?',
    answer:
      'Schiphol en haar omgeving hebben decennialang PFAS-houdend blusschuim (AFFF) gebruikt op brandoefenterreinen. Dit heeft het grondwater over een groot gebied vervuild. De drinkwaterbedrijven rondom Schiphol (PWN, Waternet) zuiveren het bronwater extra. Bewoners met ondiepe putten in een straal van 5-10 km rondom Schiphol lopen een verhoogd risico.',
  },
  {
    question: 'Zijn militaire vliegbases in Nederland een risico voor drinkwater?',
    answer:
      'Ja. Militaire vliegbases in Nederland hebben jarenlang PFAS-houdend blusschuim gebruikt. Vliegbases met bekende grondwaterverontreiniging: Volkel (Noord-Brabant), Eindhoven, De Peel, Woensdrecht en Leeuwarden. Bewoners in een straal van enkele kilometers die putwater gebruiken, wordt geadviseerd het water te testen.',
  },
  {
    question: 'Hoe weet ik of mijn gemeente een PFAS-hotspot is?',
    answer:
      'Raadpleeg de interactieve kaart van RIVM (rivm.nl), de PFAS-kaart van het Kennisportaal PFAS van de Rijksoverheid, of de jaarlijkse drinkwaterkwaliteitsrapportage van uw drinkwaterbedrijf. U kunt ook de gemeente bellen — gemeenten in erkende hotspots zijn verplicht bewoners te informeren.',
  },
  {
    question: 'Geldt de PFAS-hotspot ook voor mensen verder weg van de bron?',
    answer:
      'PFAS-verontreiniging verspreidt zich via grondwater en oppervlaktewater. Afhankelijk van grondwaterstroming kan verontreiniging zich over tientallen kilometers verspreiden. Woonachtig zijn in een naburige gemeente van een hotspot is geen garantie voor veilig putwater. Individuele testing is de enige zekerheid.',
  },
  {
    question: 'Kan ik een osmosefilter gebruiken als ik in een PFAS-hotspot woon?',
    answer:
      'Ja, een NSF/ANSI 58-gecertificeerd osmosefilter verwijdert 95-99% van alle PFAS-verbindingen, inclusief GenX. Het is de meest effectieve consumentenoplossing voor zowel hotspot-gebieden als als preventieve maatregel. Na installatie kunt u een laboratoriumtest uitvoeren om de PFAS-verwijdering te bevestigen.',
  },
  {
    question: 'Welke informatiebronnen kan ik raadplegen over PFAS in mijn regio?',
    answer:
      'De betrouwbaarste bronnen zijn: (1) RIVM Wateratlas voor kaarten met PFAS-metingen in grondwater; (2) het jaarverslag drinkwaterkwaliteit van uw drinkwaterbedrijf (Vitens, Evides, Waternet, PWN, Dunea, Brabant Water etc.); (3) de website van uw gemeente voor lokale adviezen; (4) het Kennisportaal PFAS van de Rijksoverheid (pfas.expertisecentrumbodem.nl) voor informatie over bodem- en grondwaterverontreiniging.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
  { name: 'Gebieden Nederland', url: 'https://waterfilterplatform.nl/pfas-waterfilter/gebieden-nederland' },
];

const hotspots = [
  {
    naam: 'Dordrecht / Papendrecht',
    bron: 'Chemours (voorheen DuPont)',
    stof: 'GenX (HFPO-DA), PFOA',
    risico: 'Hoog voor putwater',
    status: 'Leidingwater voldoet aan norm na extra zuivering',
    provincie: 'Zuid-Holland',
  },
  {
    naam: 'Schiphol-regio',
    bron: 'Brandoefenterreinen (AFFF-blusschuim)',
    stof: 'PFOS, PFOA, PFHxS',
    risico: 'Hoog voor ondiepe putten',
    status: 'Drinkwaterbedrijven zuiveren extra',
    provincie: 'Noord-Holland',
  },
  {
    naam: 'Vliegbasis Volkel',
    bron: 'Militaire brandoefeningen',
    stof: 'PFOS, PFOA',
    risico: 'Hoog voor putwater in omgeving',
    status: 'Gemeente Maashorst informeert bewoners',
    provincie: 'Noord-Brabant',
  },
  {
    naam: 'Vliegbasis Eindhoven',
    bron: 'Militaire brandoefeningen',
    stof: 'PFOS, PFOA',
    risico: 'Matig-hoog voor putwater',
    status: 'Monitoring actief, gemeente informeert',
    provincie: 'Noord-Brabant',
  },
  {
    naam: 'Vliegbasis De Peel',
    bron: 'Militaire brandoefeningen',
    stof: 'PFOS, PFOA, PFHxS',
    risico: 'Hoog voor putwater in omgeving',
    status: 'Verhoogde waarden bevestigd door Defensie',
    provincie: 'Noord-Brabant / Limburg',
  },
  {
    naam: 'Vliegbasis Woensdrecht',
    bron: 'Militaire brandoefeningen',
    stof: 'PFOS, PFOA',
    risico: 'Matig voor putwater',
    status: 'Onderzoek lopend',
    provincie: 'Noord-Brabant',
  },
  {
    naam: 'Vliegbasis Leeuwarden',
    bron: 'Militaire brandoefeningen',
    stof: 'PFOS, PFOA',
    risico: 'Matig voor putwater',
    status: 'Gemeente informeert bewoners',
    provincie: 'Friesland',
  },
  {
    naam: 'Landbouwgebieden (algemeen)',
    bron: 'PFAS-houdende gewasbescherming, slib',
    stof: 'Diverse PFAS-verbindingen',
    risico: 'Variabel, afhankelijk van locatie',
    status: 'Diffuse verontreiniging, niet specifiek',
    provincie: 'Landelijk',
  },
];

export default function PfasGebiedenNederlandPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'PFAS in drinkwater per regio: risicogebieden in Nederland',
          description: 'Overzicht van PFAS-hotspots in Nederland per regio: Dordrecht/Chemours, Schiphol, militaire bases. Per gebied: bron, niveaus, bedrijf en status.',
          datePublished: '2026-04-25',
          dateModified: '2026-04-25',
          url: 'https://waterfilterplatform.nl/pfas-waterfilter/gebieden-nederland',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Gebieden Nederland</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS in drinkwater per regio: risicogebieden in Nederland
          </h1>
          <QuickAnswer answer="De grootste PFAS-hotspots in Nederland zijn: de omgeving van Dordrecht/Papendrecht (Chemours-lozingen), de regio rondom Amsterdam Schiphol, en de gebieden nabij militaire vliegbases (Volkel, Eindhoven, De Peel, Woensdrecht, Leeuwarden). Leidingwater voldoet daar na extra zuivering aan de EU-norm; putwater in die gebieden is een ander verhaal." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Bekende PFAS-hotspots in Nederland
          </h2>
          <p className="text-gray-700 mb-6">
            Onderstaande kaart geeft een overzicht van gebieden waar PFAS-verontreiniging van grond- en drinkwater is vastgesteld of wordt onderzocht. Voor putwateren in deze gebieden is individuele testing sterk aanbevolen.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Gebied</th>
                  <th className="p-3 text-left">Provincie</th>
                  <th className="p-3 text-left">Bron</th>
                  <th className="p-3 text-left">Risico putwater</th>
                  <th className="p-3 text-left">Status leidingwater</th>
                </tr>
              </thead>
              <tbody>
                {hotspots.map((h, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{h.naam}</td>
                    <td className="p-3 text-xs">{h.provincie}</td>
                    <td className="p-3 text-xs">{h.bron}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        h.risico.startsWith('Hoog') ? 'bg-red-100 text-red-700' :
                        h.risico.startsWith('Matig') ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>{h.risico}</span>
                    </td>
                    <td className="p-3 text-xs text-gray-600">{h.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Bronnen: RIVM, Defensie-onderzoeken, provinciale rapportages. Status leidingwater geldt voor openbare waterlevering, niet voor particuliere putten.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Dordrecht en de Chemours-verontreiniging
          </h2>
          <p className="text-gray-700 mb-4">
            De meest bekende PFAS-casus in Nederland is de verontreiniging rondom de chemische fabriek Chemours (voorheen DuPont) in Dordrecht. Chemours loost al decennia PFAS in de Maas en de lucht. In de periode 2012-2019 werd het PFAS-type GenX (HFPO-DA) in verhoogde concentraties gevonden in de directe omgeving.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 rounded-xl p-4">
              <h3 className="font-semibold text-red-700 mb-2">Risicogebied putwater</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Straal 10-20 km rondom de fabriek</li>
                <li>Bijzonder: Sliedrecht, Hardinxveld, Giessendam</li>
                <li>Ondiepe putten (&lt;30 m) meest risicovol</li>
                <li>GenX en PFOA vastgesteld in grondwater</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="font-semibold text-green-700 mb-2">Leidingwater na zuivering</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>Drinkwaterbedrijf Oasen: extra actief-kool zuivering</li>
                <li>Geleverd leidingwater voldoet aan EU-norm</li>
                <li>Jaarlijkse controle en publicatie resultaten</li>
                <li>Toch kiezen veel bewoners voor osmosefilter</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Schiphol en PFAS-verontreiniging in grondwater
          </h2>
          <p className="text-gray-700 mb-4">
            Op het terrein van Amsterdam Airport Schiphol en omliggende brandoefenterreinen is decennialang PFAS-houdend blusschuim (Aqueous Film-Forming Foam, AFFF) gebruikt. Dit schuim bevat hoge concentraties PFOS en PFOA en heeft het grondwater over een groot gebied vervuild.
          </p>
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-5 mb-4">
            <p className="font-semibold text-yellow-800 mb-2">Risicozone:</p>
            <p className="text-sm text-gray-700">
              Bewoners in de gemeenten Haarlemmermeer, Aalsmeer, Amstelveen en omliggende kernen die putwater gebruiken of wonen nabij bekende waterwingebieden, worden geadviseerd hun water te testen. Het drinkwaterbedrijf PWN en Waternet zuiveren actief, maar oppervlaktewater en putwater in de regio kunnen nog verhoogde waarden hebben.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Militaire vliegbases: wat u moet weten
          </h2>
          <p className="text-gray-700 mb-4">
            Defensie heeft erkend dat op vrijwel alle Nederlandse militaire vliegvelden PFAS-houdend blusschuim is gebruikt. Het ministerie van Defensie voert systematisch bodemonderzoek uit en informeert omwonenden.
          </p>
          <div className="space-y-3">
            {[
              {
                basis: 'Vliegbasis Volkel (Noord-Brabant)',
                detail: 'Gemeente Maashorst heeft bewoners in een straal van 1,5 km geadviseerd geen putwater te gebruiken voor consumptie. PFOS-concentraties in grondwater vielen boven de norm.',
              },
              {
                basis: 'Vliegbasis De Peel (Noord-Brabant/Limburg)',
                detail: 'PFOS en PFHxS vastgesteld in grondwater. Gemeenten Venray en Horst aan de Maas informeren bewoners met putten in de risicozone.',
              },
              {
                basis: 'Leeuwarden Air Base (Friesland)',
                detail: 'Onderzoek toonde verhoogde PFAS-waarden in nabijgelegen grondwater. Gemeente Leeuwarden heeft bewoners met putten geadviseerd te testen.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#003F5C]">
                <h3 className="font-semibold text-[#005F8A] mb-1">{item.basis}</h3>
                <p className="text-sm text-gray-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Weet u niet of uw gebied een hotspot is?
          </h2>
          <p className="text-gray-700 mb-4">
            Controleer via de volgende stappen of uw regio een verhoogd PFAS-risico heeft:
          </p>
          <div className="space-y-3">
            {[
              {
                stap: '1',
                actie: 'Raadpleeg het jaarverslag van uw drinkwaterbedrijf',
                detail: 'Vitens, Evides, Waternet, PWN, Dunea, Brabant Water — alle bedrijven publiceren PFAS-metingen jaarlijks online.',
              },
              {
                stap: '2',
                actie: 'Bekijk de RIVM-PFAS-kaart',
                detail: 'RIVM publiceert interactieve kaarten met gemeten PFAS-concentraties in grondwater en oppervlaktewater per regio.',
              },
              {
                stap: '3',
                actie: 'Neem contact op met uw gemeente',
                detail: 'Gemeenten in bekende hotspots hebben informatiepunten en kunnen doorverwijzen naar subsidie-aanvragen voor putwatertests.',
              },
              {
                stap: '4',
                actie: 'Laat uw putwater testen',
                detail: 'Bij twijfel of als u putwater gebruikt: een laboratoriumtest (€80-150) geeft zekerheid. Positief resultaat? Installeer direct een osmosefilter.',
              },
            ].map(item => (
              <div key={item.stap} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  {item.stap}
                </div>
                <div>
                  <h3 className="font-semibold text-[#005F8A] mb-1">{item.actie}</h3>
                  <p className="text-gray-700 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over PFAS-gebieden in Nederland
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details key={i} className="border border-gray-200 rounded-lg">
                <summary className="p-4 font-semibold text-[#005F8A] cursor-pointer hover:bg-gray-50">
                  {item.question}
                </summary>
                <p className="px-4 pb-4 text-gray-700 text-sm">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Meer over PFAS en waterfilters</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/pfas-waterfilter" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS waterfilter gids</h3>
              <p className="text-sm text-gray-600">Welke filters werken voor PFAS?</p>
            </Link>
            <Link href="/pfas-waterfilter/kopen" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS filter kopen</h3>
              <p className="text-sm text-gray-600">Beste waterfilters voor PFAS-verwijdering</p>
            </Link>
            <Link href="/pfas-waterfilter/testen" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">Water testen op PFAS</h3>
              <p className="text-sm text-gray-600">Laboratoriumanalyse stap voor stap</p>
            </Link>
            <Link href="/pfas-waterfilter/normen-2026" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS normen 2026</h3>
              <p className="text-sm text-gray-600">EU-limiet en Nederlandse wetgeving</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">Omgekeerde osmose gids</h3>
              <p className="text-sm text-gray-600">Alles over osmosefilters in Nederland</p>
            </Link>
            <Link href="/pfas-water" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS in drinkwater</h3>
              <p className="text-sm text-gray-600">Risico&apos;s, normen en gezondheid</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
