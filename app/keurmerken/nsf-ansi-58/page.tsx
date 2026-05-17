import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'NSF/ANSI 58 keurmerk — wat betekent het voor osmosefilters?',
  description: 'NSF/ANSI 58 is de internationale norm voor omgekeerde osmosefilters. Wat test het, wat garandeert het en hoe verifieert u een echte certificering.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keurmerken/nsf-ansi-58' },
};

export default function NsfAnsi58Page() {
  return (
    <>
      <SchemaOrg type="Article" article={{
        title: 'NSF/ANSI 58 keurmerk — wat betekent het voor osmosefilters?',
        description: 'NSF/ANSI 58 is de internationale norm voor omgekeerde osmosefilters. Wat test het, wat garandeert het en hoe verifieert u een echte certificering.',
        datePublished: '2026-05-17',
        url: 'https://waterfilterplatform.nl/keurmerken/nsf-ansi-58',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keurmerken">Keurmerken</Link> &rsaquo; NSF/ANSI 58
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            NSF/ANSI 58 keurmerk &mdash; wat betekent het voor osmosefilters?
          </h1>
          <QuickAnswer answer="NSF/ANSI 58 certificeert dat een osmosefilter voldoet aan strenge prestatie- en materiaaleisen getest door een onafhankelijk laboratorium." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat is NSF/ANSI 58?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 58 is de Amerikaanse nationale norm voor systemen met omgekeerde osmose (RO) die bestemd zijn voor gebruik aan de keukenkraan. De norm wordt beheerd door NSF International, een onafhankelijke organisatie die in 1944 is opgericht en nu wereldwijd als referentiepunt geldt voor drinkwatercertificering.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De standaard vereist dat een gecertificeerd osmosefilter wordt getest op drie gebieden: materiaaleisen, structurele integriteit en prestaties. Dat betekent dat niet alleen de filtercapaciteit wordt gemeten, maar ook dat de gebruikte materialen geen schadelijke stoffen afgeven aan het drinkwater en dat het systeem mechanisch betrouwbaar is onder de opgegeven gebruiksomstandigheden.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat test NSF/ANSI 58 precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De norm omvat vier hoofdcategorieen van tests:
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-4">
            <li>
              <strong>Materiaaleisen:</strong> Alle onderdelen die in contact komen met drinkwater worden getest op uitloging van zware metalen, weekmakers en andere potentieel schadelijke stoffen. De behuizing, slangen, fittingen en het membraan moeten aan strikte grenswaarden voldoen.
            </li>
            <li>
              <strong>Membraanprestaties:</strong> Het RO-membraan wordt getest op reductie van een lijst contaminanten onder gestandaardiseerde omstandigheden: een opgegeven watertemperatuur, inlaatdruk en beginconcentratie van de testoplossing. Voorbeelden van geteste stoffen zijn arseen, barium, cadmium, fluoride, lood, nitraten, selenium, TDS en radium.
            </li>
            <li>
              <strong>Structurele integriteit:</strong> Het systeem wordt blootgesteld aan drukpieken en cyclische stresscondities om te bevestigen dat er geen lekken of scheurvorming optreden.
            </li>
            <li>
              <strong>Systeemconfiguratie:</strong> Het gehele systeem wordt gecertificeerd, inclusief voorfilterstadia. Een certificering geldt voor een specifieke combinatie van onderdelen, niet voor losse componenten apart.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Belangrijk detail: NSF/ANSI 58 test uitsluitend de stoffen die in de norm zijn opgenomen. Stoffen die niet op de testlijst staan, zijn niet gecertificeerd, ook al beweert een fabrikant dit anders. Controleer altijd het exacte certificaatdocument voor de scope.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Wat betekent NSF/ANSI 58 voor de consument?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een osmosefilter met een geldige NSF/ANSI 58-certificering geeft u drie garanties die marketingclaims zonder certificering niet kunnen bieden:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
            <li>
              <strong>Aantoonbare filterprestaties:</strong> De reductiepercentages zijn gemeten door een accrediteerd laboratorium, niet door de fabrikant zelf. De testomstandigheden zijn vastgelegd in de norm, zodat resultaten vergelijkbaar zijn tussen producten.
            </li>
            <li>
              <strong>Materiaalveiligheid:</strong> De onderdelen van het systeem geven geen schadelijke stoffen af aan uw drinkwater. Dit is niet vanzelfsprekend: er zijn goedkope osmosesystemen op de markt waarbij plastic behuizingen weekmakers kunnen afgeven.
            </li>
            <li>
              <strong>Periodieke hercontrole:</strong> NSF-certificeringen zijn niet eenmalig. Producten worden jaarlijks gecontroleerd en de certificering kan worden ingetrokken als een product niet langer voldoet. Dit geeft een extra waarborg voor gelijkblijvende kwaliteit.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">NSF/ANSI 58 versus NSF/ANSI 401</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF/ANSI 58 dekt de klassieke contaminanten: zware metalen, nitraten, bepaalde pesticiden. Voor nieuwere stoffen zoals medicijnresten, hormonen en DEET bestaat een aparte norm: <Link href="/keurmerken/nsf-ansi-401" className="text-[#005F8A] hover:underline font-medium">NSF/ANSI 401</Link>. Als u specifiek bezorgd bent over farmaceutische resten in uw water, controleer dan of het osmosesysteem ook NSF/ANSI 401-certificering heeft naast NSF/ANSI 58.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Hoe verifieert u of een filter echt gecertificeerd is?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het plaatsen van een NSF-logo op een verpakking zonder geldige registratie is helaas gangbaar. Verificatie gaat als volgt:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
            <li>
              Ga naar <strong>nsf.org/certified-products-systems</strong> en zoek op merknaam of modelnummer.
            </li>
            <li>
              Controleer of het specifieke model (niet alleen het merk) in de database staat.
            </li>
            <li>
              Bekijk de scope: welke contaminanten zijn exact gecertificeerd en wat zijn de gemeten reductiepercentages?
            </li>
            <li>
              Controleer de geldigheidsdatum van de certificering. Een verlopen certificering biedt geen actuele garantie.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            Rode vlaggen: een fabrikant die alleen een logo toont zonder certificaatnummer, een certificering die niet vindbaar is in de NSF-database, of claims als "NSF-getest" in plaats van "NSF-gecertificeerd". Getest kan betekenen dat het product een interne test heeft ondergaan; gecertificeerd impliceert een onafhankelijke, geaccrediteerde beoordeling.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Meer over het verificatieproces voor alle keurmerken vindt u op onze pagina <Link href="/keurmerken/verificatie" className="text-[#005F8A] hover:underline font-medium">hoe u een waterfilter certificering controleert</Link>.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Gerelateerde keurmerken</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/nsf-ansi-42-53" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 42 en 53</h3>
              <p className="text-sm text-gray-600">Voor actief koolfilters: esthetische kwaliteit en gezondheidsrelevante stoffen.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-401" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 401</h3>
              <p className="text-sm text-gray-600">Certificering voor opkomende stoffen zoals medicijnresten en hormonen.</p>
            </Link>
            <Link href="/keurmerken/kiwa-113" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kiwa 113</h3>
              <p className="text-sm text-gray-600">Nederlands keurmerk voor materiaalveiligheid van drinkwaterinstallaties.</p>
            </Link>
            <Link href="/keurmerken/verificatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Certificering controleren</h3>
              <p className="text-sm text-gray-600">Stap-voor-stap: echte certificeringen onderscheiden van nep-logo's.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
