import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Hoe controleer je of een waterfilter echt gecertificeerd is?',
  description: 'Stap-voor-stap: NSF productdatabase checken, Kiwa publiek register, rode vlaggen herkennen en nep-keurmerken onderscheiden van echte certificeringen voor.',
  alternates: { canonical: 'https://waterfilterplatform.nl/keurmerken/verificatie' },
};

export default function VerificatiePage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Keurmerken', url: 'https://waterfilterplatform.nl/keurmerken' },
        { name: 'Hoe controleer je of een waterfilter echt gecertificeerd is?', url: 'https://waterfilterplatform.nl/keurmerken/verificatie' },
      ]} />
      <SchemaOrg type="FAQPage" faqItems={[
        { question: "Hoe controleer ik of een waterfilter echt NSF gecertificeerd is?", answer: "Ga naar nsf.org/certified-products-systems en zoek op het exacte modelnummer van het filter. Controleer of het specifieke model (niet alleen het merk) geregistreerd staat, welke normen van toepassing zijn, welke contaminanten zijn gecertificeerd en of de certificering actief is." },
        { question: "Wat is het verschil tussen 'NSF-getest' en 'NSF-gecertificeerd'?", answer: "'NSF-getest' kan betrekking hebben op een interne test door de fabrikant zelf. 'NSF-gecertificeerd' impliceert een onafhankelijke beoordeling door NSF International met periodieke hercontroles. Dit onderscheid wordt soms bewust vaag gehouden door fabrikanten." },
        { question: "Hoe herken ik een nep waterfilter keurmerk?", answer: "Rode vlaggen zijn: een keurmerk-logo zonder verifieerbaar certificaatnummer, een certificering die niet vindbaar is in de officiële database, onbekende 'certificeringsinstanties' met fantasienamen, of claims als '99,9% reductie' zonder vermelding van de norm die de test heeft uitgevoerd." },
      ]} />
      <SchemaOrg type="Article" article={{
        title: 'Hoe controleer je of een waterfilter echt gecertificeerd is?',
        description: 'Stap-voor-stap: NSF productdatabase checken, Kiwa publiek register, rode vlaggen herkennen en nep-keurmerken onderscheiden van echte certificeringen voor.',
        datePublished: '2026-05-17',
        url: 'https://waterfilterplatform.nl/keurmerken/verificatie',
      }} />
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-[#005F8A] font-medium mb-2">
            <Link href="/">Home</Link> &rsaquo; <Link href="/keurmerken">Keurmerken</Link> &rsaquo; Verificatie
          </p>
          <h1 className="text-3xl font-bold text-[#003F5C] mb-3">
            Hoe controleer je of een waterfilter echt gecertificeerd is?
          </h1>
          <QuickAnswer answer="Verificeer altijd via officiele registers: de NSF-productdatabase op nsf.org voor NSF-certificeringen, het Kiwa-productregister op kiwa.com voor Kiwa 113. Een keurmerk-logo op de verpakking zonder vindbaar certificaatnummer in een publiek register is onvoldoende bewijs van echte certificering." />
        </div>
      </section>
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Waarom verificatie essentieel is</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De waterfiltermarkt heeft een serieus probleem met valse en misleidende certificeringsclaims. Fabrikanten plaatsen NSF-logo's, Kiwa-badges en andere keurmerkiconen op verpakkingen zonder dat er sprake is van een geldige, geregistreerde certificering. Dit is wettelijk gezien misleidende reclame, maar handhaving is inconsistent en het probleem is wijdverspreid op online verkoopplatforms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Verificatie via de officiele databases van certificeringsinstanties is de enige betrouwbare manier om te bevestigen dat een product daadwerkelijk gecertificeerd is. Dit kost slechts enkele minuten en kan de aankoopbeslissing aanzienlijk verbeteren.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Stap 1: NSF productdatabase controleren</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF International publiceert zijn volledige certificeringsdatabase publiek en gratis toegankelijk. Ga naar <strong>nsf.org/certified-products-systems</strong> en voer de merknaam of het modelnummer in van het filter dat u wilt controleren.
          </p>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4 mb-4">
            <p className="font-semibold text-[#003F5C] text-sm mb-2">Wat u in de NSF-database controleert:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Is het exacte model (niet alleen het merk) geregistreerd?</li>
              <li>Welke specifieke normen zijn van toepassing: NSF 42, 53, 58, 401?</li>
              <li>Welke contaminanten zijn exact gecertificeerd en wat zijn de reductiepercentages?</li>
              <li>Is de certificering actief of verlopen?</li>
              <li>Welke configuratie van het systeem is gecertificeerd?</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Let op: een certificering voor het merk zegt niet alles. NSF certificeert specifieke productconfiguraties. Controleer dat het model dat u overweegt en niet een ander model van hetzelfde merk gecertificeerd is.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            NSF publiceert ook de volledige testresultaten per product. Dit is bijzonder nuttig: u kunt zien welk reductiepercentage voor lood of arseen gemeten is onder de testomstandigheden, niet alleen of het product "gecertificeerd" is.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Stap 2: Kiwa publiek productregister</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor Kiwa 113-certificeringen is het Kiwa-productregister beschikbaar via <strong>kiwa.com</strong>. U kunt zoeken op fabrikant, productnaam of certificaatnummer.
          </p>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-xl p-4 mb-4">
            <p className="font-semibold text-[#003F5C] text-sm mb-2">Wat u in het Kiwa-register controleert:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Is het specifieke product geregistreerd?</li>
              <li>Welke BRL-richtlijn is van toepassing (voor waterfilters: BRL-K 113)?</li>
              <li>Wat is de geldigheidsperiode van de certificering?</li>
              <li>Welke materialen en onderdelen zijn beoordeeld?</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Als een fabrikant beweert Kiwa 113 te hebben, maar het product is niet vindbaar in het Kiwa-register, neem dan contact op met de fabrikant en vraag naar het certificaatnummer. Kunnen zij dat niet leveren, behandel de claim dan als niet-geverifieerd.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Stap 3: ACS en WRAS verificatie</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor ACS-certificeringen kunt u navraag doen bij het CSTB (Centre scientifique et technique du batiment) via hun website cstb.fr. ACS heeft geen eenvoudig publiek zoekregister zoals NSF, maar het CSTB kan via e-mail of telefoon certificaatnummers bevestigen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor WRAS-certificeringen is een productzoekfunctie beschikbaar via <strong>wras.co.uk/approved-products</strong>. U kunt zoeken op productnaam, fabrikant of goedkeuringsnummer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Stap 4: Rode vlaggen herkennen</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De volgende signalen wijzen op twijfelachtige of valse certificeringsclaims:
          </p>
          <div className="space-y-3">
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-semibold text-gray-800 text-sm">Logo zonder certificaatnummer</p>
              <p className="text-gray-600 text-sm">Een NSF- of Kiwa-logo op de verpakking of website zonder een verifieerbaar certificaatnummer is onvoldoende. Echte certificeringen hebben altijd een uniek nummer.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-semibold text-gray-800 text-sm">"NSF-getest" in plaats van "NSF-gecertificeerd"</p>
              <p className="text-gray-600 text-sm">Getest kan betrekking hebben op een interne test door de fabrikant. Gecertificeerd impliceert een beoordeling door NSF zelf. Dit onderscheid is bewust vaag gehouden door sommige fabrikanten.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-semibold text-gray-800 text-sm">Meerdere logo's zonder specificatie</p>
              <p className="text-gray-600 text-sm">Als een product zowel NSF 42, 53, 58 als 401 claimt zonder dat een van deze in de database vindbaar is, is sprake van misleiding.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-semibold text-gray-800 text-sm">Onbekende "certificeringsinstanties"</p>
              <p className="text-gray-600 text-sm">Logo's als "WaterPure Certified", "H2O Quality Assured" of vergelijkbare fantastische keurmerken zijn geen erkende certificeringen. Zoek altijd naar de bekende geaccrediteerde instanties: NSF, Kiwa, ACS, WRAS.</p>
            </div>
            <div className="border-l-4 border-red-400 pl-4">
              <p className="font-semibold text-gray-800 text-sm">Verlopen certificeringen</p>
              <p className="text-gray-600 text-sm">Certificeringen hebben een geldigheidsduur. Een verlopen certificering biedt geen actuele garantie. Controleer de datum in de database.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Stap 5: Samenvatting verificatieprotocol</h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                <strong>Identificeer het model:</strong> Noteer het exacte modelnummer van het filter (niet alleen de merknaam).
              </li>
              <li>
                <strong>NSF-database:</strong> Zoek op nsf.org/certified-products-systems op het modelnummer. Controleer de scope en geldigheid.
              </li>
              <li>
                <strong>Kiwa-register:</strong> Controleer op kiwa.com of de behuizing of het systeem geregistreerd is als Kiwa 113-gecertificeerd product.
              </li>
              <li>
                <strong>Vraag het certificaatnummer:</strong> Neem bij twijfel contact op met de fabrikant of importeur en vraag expliciet om het certificaatnummer.
              </li>
              <li>
                <strong>Vergelijk de scope:</strong> Controleer of de stoffen waarvoor u het filter koopt (lood, PFAS, medicijnen) daadwerkelijk in de certificeringsscope zijn opgenomen.
              </li>
              <li>
                <strong>Controleer de datum:</strong> Bevestig dat de certificering actief is en niet verlopen.
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Valse certificeringen melden</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Als u ontdekt dat een product ten onrechte NSF-logo's gebruikt, kunt u dit melden bij NSF International via hun website. NSF onderneemt juridische stappen tegen ongeoorloofd gebruik van hun merk. In Nederland kunt u misleidende claims melden bij de Autoriteit Consument en Markt (ACM) of de NVWA.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wanneer u twijfelt over een specifiek product, is het raadzaam te kiezen voor een product waarvan de certificering onomstotelijk verificeerbaar is via een publiek register. De extra minuten die verificatie kost zijn een kleine investering vergeleken met de aanschafprijs van een filtersysteem.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-2xl font-bold text-[#005F8A] mb-4">Alle keurmerken verdiept</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/nsf-ansi-58" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 58</h3>
              <p className="text-sm text-gray-600">Osmosefilter norm: prestaties, membraan en verificatie.</p>
            </Link>
            <Link href="/keurmerken/nsf-ansi-42-53" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">NSF/ANSI 42 en 53</h3>
              <p className="text-sm text-gray-600">Koolfilter normen: smaak en gezondheidsrelevante stoffen.</p>
            </Link>
            <Link href="/keurmerken/kiwa-113" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kiwa 113</h3>
              <p className="text-sm text-gray-600">Nederlands keurmerk voor materiaalveiligheid.</p>
            </Link>
            <Link href="/keurmerken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keurmerken overzicht</h3>
              <p className="text-sm text-gray-600">Terug naar het complete keurmerken overzicht.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="algemeen" />
      </div>
    </>
  );
}
