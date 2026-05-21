import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'PFAS in uw water testen: zo weet u wat erin zit',
  description:
    'Hoe test u uw drinkwater op PFAS? Stap-voor-stap gids: RIVM-kaart, drinkwaterbedrijf jaarrapport, labotests (EUR 80-200) en DIY-kits.',
  alternates: { canonical: 'https://waterfilterplatform.nl/pfas-waterfilter/testen' },
};

const faqItems = [
  {
    question: 'Kan ik thuis zelf PFAS in water meten?',
    answer:
      'Eenvoudige indicatieve PFAS-thuistesten (striptest) bestaan, maar zijn onbetrouwbaar voor de lage concentraties die de EU-norm stelt (0,10 µg/L). Voor betrouwbare resultaten is laboratoriumanalyse via LC-MS/MS methode noodzakelijk. Thuistests zijn hooguit geschikt als grove indicatie bij sterk verhoogde waarden.',
  },
  {
    question: 'Hoeveel kost een professionele PFAS watertest?',
    answer:
      'Een gecertificeerd PFAS-wateronderzoek kost €80-250 afhankelijk van het aantal gemeten verbindingen. Basispakketten meten de 20 EU-prioritaire PFAS; uitgebreide analyses omvatten tot 40+ verbindingen. Stuur een watermonster naar een geaccrediteerd laboratorium (NEN-EN-ISO/IEC 17025).',
  },
  {
    question: 'Hoe neem ik een watermonster voor PFAS-analyse?',
    answer:
      'Gebruik uitsluitend het monsterflesje van het laboratorium (speciale PFAS-vrije containers). Spoel de kraan 2 minuten door voor het vullen. Bewaar het monster koel (2-8°C) en verstuur het dezelfde dag. Vermijd contact met plastic anders dan het monsterflesje — gewone flessen kunnen PFAS afgeven.',
  },
  {
    question: 'Controleren drinkwaterbedrijven al op PFAS?',
    answer:
      'Ja, Nederlandse drinkwaterbedrijven meten PFAS verplicht en publiceren de resultaten in het jaarlijkse kwaliteitsverslag. Sinds 2026 toetsen zij aan de EU-norm (0,10 µg/L sum-20 PFAS). U kunt dit rapport opvragen bij uw waterleiding­bedrijf of downloaden van hun website.',
  },
  {
    question: 'Wanneer is een eigen PFAS-test zinvol?',
    answer:
      'Eigen testen zijn zinvol als u (1) putwater of bronwater gebruikt, dat niet gemonitord wordt door drinkwaterbedrijven; (2) woont in een erkende PFAS-hotspot; (3) een bestaand filter wilt valideren na installatie; of (4) recentelijk waterlekkage of bodemverontreiniging hebt gehad.',
  },
  {
    question: 'Wat doe ik als mijn water te veel PFAS bevat?',
    answer:
      'Gebruik het water tijdelijk niet als drinkwater. Installeer direct een osmosefilter (NSF/ANSI 58-gecertificeerd) of gebruik gebotteld water. Meld de waarde aan uw gemeente en drinkwaterbedrijf. Eigenaren van particuliere putten in PFAS-hotspots hebben recht op advies van de gemeente.',
  },
  {
    question: 'Zijn er gratis PFAS-tests beschikbaar in Nederland?',
    answer:
      'Gemeenten in PFAS-hotspot-gebieden bieden soms gratis of gesubsidieerde putwatertests aan. Check de website van uw gemeente of bel de milieudienst. RIVM en provincies organiseren ook periodieke monitoringscampagnes waarbij bewoners kunnen deelnemen.',
  },
  {
    question: 'Wat is het verschil tussen sum-PFAS en individuele PFAS-meting?',
    answer:
      'De EU-norm werkt met de som van 20 specifieke PFAS-verbindingen (sum-20). Een basislaboratoriumtest meet precies die 20 verbindingen. Een uitgebreide test meet ook andere PFAS die niet in de EU-som zitten maar toch aanwezig kunnen zijn, zoals nieuwere GenX-varianten. Voor de meeste huishoudens is een sum-20 test voldoende. Woont u nabij een actieve chemische fabriek, dan is een breder PFAS-panel (40+) aan te raden.',
  },
];

const breadcrumbs = [
  { name: 'Home', url: 'https://waterfilterplatform.nl' },
  { name: 'PFAS waterfilter', url: 'https://waterfilterplatform.nl/pfas-waterfilter' },
  { name: 'Testen', url: 'https://waterfilterplatform.nl/pfas-waterfilter/testen' },
];

const testMethoden = [
  {
    methode: 'Thuistest (striptest)',
    nauwkeurigheid: 'Laag (&lt;0,5 µg/L detectie)',
    kosten: '€15-40',
    tijd: '10-30 minuten',
    geschikt: false,
    noot: 'Niet geschikt voor EU-normcontrole',
  },
  {
    methode: 'Laboratorium (basis)',
    nauwkeurigheid: 'Hoog (20 PFAS, ng/L)',
    kosten: '€80-150',
    tijd: '3-5 werkdagen',
    geschikt: true,
    noot: 'Dekt alle EU-prioritaire verbindingen',
  },
  {
    methode: 'Laboratorium (uitgebreid)',
    nauwkeurigheid: 'Zeer hoog (40+ PFAS)',
    kosten: '€150-250',
    tijd: '5-10 werkdagen',
    geschikt: true,
    noot: 'Aanbevolen voor putwater en hotspots',
  },
  {
    methode: 'Drinkwaterbedrijf',
    nauwkeurigheid: 'Zeer hoog (officieel)',
    kosten: 'Gratis (via jaarverslag)',
    tijd: 'Jaarlijks gepubliceerd',
    geschikt: true,
    noot: 'Alleen voor leidingwater, niet putwater',
  },
];

export default function PfasWaterfilterTestenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'PFAS in uw water testen: zo weet u wat erin zit',
          description:
            'Hoe test u uw drinkwater op PFAS? Stap-voor-stap gids: RIVM-kaart, drinkwaterbedrijf jaarrapport, labotests en DIY-kits. Resultaten interpreteren.',
          datePublished: '2026-04-25',
          dateModified: '2026-04-25',
          url: 'https://waterfilterplatform.nl/pfas-waterfilter/testen',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/pfas-waterfilter" className="hover:underline">PFAS waterfilter</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Testen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            PFAS in uw water testen: zo weet u wat erin zit
          </h1>
          <QuickAnswer answer="Betrouwbare PFAS-meting vereist laboratoriumanalyse (LC-MS/MS methode, €80-250). Thuisstrips zijn onvoldoende nauwkeurig voor de EU-norm van 0,10 µg/L. Leidingwater van drinkwaterbedrijven wordt al jaarlijks gecontroleerd — eigen tests zijn vooral zinvol bij putwater of na een bekende verontreiniging." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijking testmethoden voor PFAS in drinkwater
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Methode</th>
                  <th className="p-3 text-left">Nauwkeurigheid</th>
                  <th className="p-3 text-left">Kosten</th>
                  <th className="p-3 text-left">Levertijd</th>
                  <th className="p-3 text-center">Betrouwbaar</th>
                </tr>
              </thead>
              <tbody>
                {testMethoden.map((t, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{t.methode}</td>
                    <td className="p-3"
                        dangerouslySetInnerHTML={{ __html: t.nauwkeurigheid }}
                    />
                    <td className="p-3">{t.kosten}</td>
                    <td className="p-3">{t.tijd}</td>
                    <td className="p-3 text-center">
                      {t.geschikt ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="text-red-500">✗</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap voor stap: hoe test u uw water op PFAS?
          </h2>
          <div className="space-y-4">
            {[
              {
                stap: '1',
                titel: 'Controleer eerst het jaarverslag van uw drinkwaterbedrijf',
                tekst:
                  'Als u leidingwater gebruikt, publiceer uw drinkwaterbedrijf jaarlijks de PFAS-waarden. Zoek "drinkwaterkwaliteit [naam bedrijf]" online of kijk op de website van Vitens, Evides, Waternet, PWN, Dunea of uw lokale bedrijf. Als de waarden ruim onder 0,05 µg/L liggen is verdere actie meestal niet nodig.',
              },
              {
                stap: '2',
                titel: 'Bestel een gecertificeerd watermonsterpakket',
                tekst:
                  'Kies een laboratorium met NEN-EN-ISO/IEC 17025-accreditatie voor PFAS-analyse in water. Het laboratorium stuurt u een speciaal PFAS-vrij monsterflesje toe. Gebruik nooit uw eigen fles — reguliere plastic flessen bevatten zelf PFAS die het resultaat beinvloeden.',
              },
              {
                stap: '3',
                titel: 'Neem het watermonster correct af',
                tekst:
                  'Laat de kraan 2 minuten vollopen zodat stilstaand water in leidingen wegspoelt. Vul het monsterflesje tot de rand en sluit direct af. Bewaar het monster bij 2-8°C. Verstuur hetzelfde dag via de bijgesloten retourverpakking.',
              },
              {
                stap: '4',
                titel: 'Interpreteer de resultaten',
                tekst:
                  'Het rapport vermeldt de waarden in ng/L of µg/L. De EU-grenswaarde is 0,10 µg/L (= 100 ng/L) voor de som van 20 prioritaire PFAS. Waarden boven deze grens betekenen dat uw water niet voldoet aan de drinkwaternorm. Bij putwater is ook een waarde boven 0,05 µg/L reden tot actie.',
              },
              {
                stap: '5',
                titel: 'Actie bij overschrijding',
                tekst:
                  'Gebruik het water tijdelijk niet als drinkwater. Installeer een osmosefilter (NSF/ANSI 58) of schakel over op gebotteld water. Meld de waarde bij uw gemeente. Eigenaren van putten kunnen aanspraak maken op gemeentelijke ondersteuning.',
              },
            ].map(item => (
              <div key={item.stap} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#003F5C] text-white flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  {item.stap}
                </div>
                <div>
                  <h3 className="font-semibold text-[#005F8A] mb-1">{item.titel}</h3>
                  <p className="text-gray-700 text-sm">{item.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer is een eigen PFAS-watertest noodzakelijk?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                situatie: 'U gebruikt putwater',
                uitleg: 'Particuliere putten worden niet gecontroleerd door drinkwaterbedrijven. Met name ondiepe putten (&lt;30 m) in de buurt van industrieterreinen, vliegbases of intensieve landbouw lopen risico.',
                urgentie: 'Hoog',
              },
              {
                situatie: 'U woont in een PFAS-hotspot',
                uitleg: 'Omgeving Dordrecht, Schiphol-zone, nabij militaire vliegbases (Volkel, Eindhoven, De Peel). Zelfs als uw drinkwaterbedrijf voldoet, kan het grondwater en putwater verhoogd zijn.',
                urgentie: 'Hoog',
              },
              {
                situatie: 'U wilt een geinstalleerd filter valideren',
                uitleg: 'Na installatie van een osmosefilter kunt u met een laboratoriumtest bevestigen dat het membraan functioneert. Meet het gefilterde water en vergelijk met onbehandeld water.',
                urgentie: 'Aanbevolen',
              },
              {
                situatie: 'U heeft bodemverontreiniging gehad',
                uitleg: 'Lekkages van blusschuim op bedrijventerreinen of bij incidenten kunnen de lokale waterwinning beïnvloeden. Na een incident is testen een logische stap.',
                urgentie: 'Situationeel',
              },
            ].map((item, i) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#005F8A]">{item.situatie}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    item.urgentie === 'Hoog' ? 'bg-red-100 text-red-700' :
                    item.urgentie === 'Aanbevolen' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>{item.urgentie}</span>
                </div>
                <p className="text-sm text-gray-700"
                   dangerouslySetInnerHTML={{ __html: item.uitleg }}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Filter installeren zonder te wachten op testresultaten?
          </h2>
          <p className="text-gray-700 mb-4">
            Als u in een risicogebied woont, hoeft u niet te wachten op laboratoriumresultaten om actie te ondernemen. Een osmosefilter (NSF/ANSI 58-gecertificeerd) verwijdert PFAS ongeacht de beginconcentratie. Voor maximale gemoedsrust kunt u de test gebruiken om de filterprestatie te bevestigen: neem een watermonster vóór en ná het filter.
          </p>
          <div className="bg-blue-50 rounded-xl p-5">
            <p className="text-[#003F5C] font-semibold mb-2">Advies voor PFAS-risicogebieden:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
              <li>Installeer direct een gecertificeerd osmosefilter</li>
              <li>Laat uw water testen voor en na installatie</li>
              <li>Documenteer de resultaten voor gemeentelijke procedures</li>
              <li>Vervang voorfilters halfjaarlijks, membraan om de 2 jaar</li>
            </ol>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Stap 1: controleer de RIVM-kaart en het jaarverslag van uw drinkwaterbedrijf
          </h2>
          <p className="text-gray-700 mb-4">
            Voordat u een eigen laboratoriumtest bestelt, zijn er twee gratis bronnen die al veel informatie geven:
          </p>
          <div className="space-y-4 mb-4">
            <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm">
              <p className="font-semibold text-[#003F5C] mb-1">RIVM Wateratlas</p>
              <p className="text-gray-700">Het RIVM publiceert interactieve kaarten met PFAS-metingen in grondwater, oppervlaktewater en drinkwater per regio. Zoek op uw postcode of gemeente om te zien of u in een risicogebied woont. De kaart is gratis toegankelijk via de RIVM-website.</p>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm">
              <p className="font-semibold text-[#003F5C] mb-1">Jaarverslag drinkwaterbedrijf</p>
              <p className="text-gray-700">Elk drinkwaterbedrijf (Vitens, Evides, Waternet, PWN, Dunea, Brabant Water, WMD, etc.) is wettelijk verplicht jaarlijks de drinkwaterkwaliteit te publiceren inclusief PFAS-waarden. Download het jaarverslag via de website van uw drinkwaterbedrijf of vraag het op per e-mail. Zoek naar de tabel &ldquo;PFAS&rdquo; of &ldquo;Perfluorverbindingen&rdquo;.</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            Woont u nabij Chemours/Dordrecht, de Schiphol-zone of een militaire vliegbasis? Dan is ook controle van de lokale gemeente-informatie aan te raden. Gemeenten als Dordrecht, Papendrecht en Sliedrecht publiceren specifieke adviezen voor inwoners.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Gecertificeerde laboratoria in Nederland voor PFAS-analyse
          </h2>
          <p className="text-gray-700 mb-4">
            Voor een professionele PFAS-watertest hebt u een NEN-EN-ISO/IEC 17025-geaccrediteerd laboratorium nodig. De volgende laboratoria bieden PFAS-wateranalyse aan voor particulieren:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="p-3 text-left">Laboratorium</th>
                  <th className="p-3 text-left">Specialisatie</th>
                  <th className="p-3 text-left">Typische kosten</th>
                  <th className="p-3 text-left">Levertijd</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { lab: 'SGS Netherlands', spec: 'PFAS sum-20 + uitgebreid', prijs: 'EUR 120-250', tijd: '5-7 werkdagen' },
                  { lab: 'Eurofins Milieu', spec: 'PFAS sum-20, breed PFAS-panel', prijs: 'EUR 100-220', tijd: '5-10 werkdagen' },
                  { lab: 'Kiwa Technology', spec: 'PFAS drinkwater (officieel)', prijs: 'EUR 150-250', tijd: '7-10 werkdagen' },
                  { lab: 'Analytisch Laboratorium Utrecht (ALU)', spec: 'PFAS particulieren, putwater', prijs: 'EUR 80-180', tijd: '3-5 werkdagen' },
                ].map((r, i) => (
                  <tr key={r.lab} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-[#003F5C]">{r.lab}</td>
                    <td className="p-3 text-gray-700">{r.spec}</td>
                    <td className="p-3 text-gray-700">{r.prijs}</td>
                    <td className="p-3 text-gray-700">{r.tijd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">Indicatieve prijzen en levertijden. Bijgewerkt mei 2026. Vraag altijd een offerte op bij het laboratorium voor uw specifieke situatie.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over PFAS testen
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
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Gerelateerde pagina&apos;s</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/pfas-waterfilter" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS waterfilter gids</h3>
              <p className="text-sm text-gray-600">Welke filters werken werkelijk?</p>
            </Link>
            <Link href="/pfas-waterfilter/normen-2026" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">EU-normen 2026</h3>
              <p className="text-sm text-gray-600">Grenswaarden en wetswijzigingen</p>
            </Link>
            <Link href="/pfas-waterfilter/gebieden-nederland" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS-gebieden Nederland</h3>
              <p className="text-sm text-gray-600">Hotspots en risicokaart</p>
            </Link>
            <Link href="/pfas-waterfilter/kopen" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS waterfilter kopen</h3>
              <p className="text-sm text-gray-600">Beste modellen 2026 vergeleken</p>
            </Link>
            <Link href="/omgekeerde-osmose" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">Omgekeerde osmose gids</h3>
              <p className="text-sm text-gray-600">De goudstandaard voor PFAS-filtratie</p>
            </Link>
            <Link href="/pfas-water" className="block p-4 bg-[#E0F2FE] rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-[#003F5C] mb-1">PFAS in drinkwater</h3>
              <p className="text-sm text-gray-600">Risico&apos;s, normen en achtergrond</p>
            </Link>
          </div>
        </section>

        <section className="mt-8 mb-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pfas-waterfilter" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">PFAS waterfilter overzicht</p>
              <p className="text-sm text-gray-500">PFAS waterfilter overzicht</p>
            </Link>
            <Link href="/pfas-waterfilter/gebieden-nederland" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">Is uw regio een risicogebied?</p>
              <p className="text-sm text-gray-500">Is uw regio een risicogebied?</p>
            </Link>
            <Link href="/drinkwaternormen/pfas" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">PFAS-normen: wanneer is er een probleem?</p>
              <p className="text-sm text-gray-500">PFAS-normen: wanneer is er een probleem?</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <p className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors">Welke PFAS-stoffen zijn er?</p>
              <p className="text-sm text-gray-500">Welke PFAS-stoffen zijn er?</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
