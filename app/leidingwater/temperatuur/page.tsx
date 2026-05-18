import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Temperatuur leidingwater: Legionella-risicozone en veilige instelling',
  description:
    'Legionella groeit het snelst bij 20-45 graden Celsius in leidingwater. Warm water boiler instellen op minimaal 60 graden. Koude leiding altijd onder 25.',
  alternates: { canonical: 'https://waterfilterplatform.nl/leidingwater/temperatuur' },
};

const faqItems = [
  {
    question: 'Op welke temperatuur moet ik mijn boiler instellen?',
    answer:
      'Stel uw warmwaterboiler in op minimaal 60 graden Celsius. Bij deze temperatuur sterft Legionella pneumophila binnen enkele minuten af. De wettelijke eis in Nederland voor collectieve tapwaterinstallaties is 60 graden bij de boiler en minimaal 55 graden uit de verste tap. Voor thuissituaties geldt geen wettelijke verplichting, maar de richtlijn van 60 tot 65 graden is de standaard aanbeveling van GGD en RIVM. Een instelling van 50 graden valt in de gevarenzone en wordt sterk afgeraden.',
  },
  {
    question: 'Bij welke temperatuur groeit Legionella in leidingwater?',
    answer:
      'Legionella pneumophila groeit optimaal tussen 20 en 45 graden Celsius. De ideale voortplantingstemperatuur is circa 35 tot 40 graden. Onder 20 graden is de groei nagenoeg nul. Tussen 50 en 55 graden sterven de bacterien langzaam af (minuten tot uren). Boven 60 graden zijn ze binnen enkele minuten dood. De zone van 20 tot 45 graden staat bekend als de Legionella-risicozone.',
  },
  {
    question: 'Hoe koud moet de koude waterleiding blijven?',
    answer:
      'De koude waterleiding moet het gehele jaar door onder 25 graden Celsius blijven. In de zomer kan dit een uitdaging zijn, met name bij leidingen die lopen langs verwarmingsinstallaties, in ongeventileerde kruipruimtes of op zolders. De norm in collectieve systemen (scholen, kantoren, zorginstellingen) is dat de koudwatertemperatuur op het verste tappunt na 30 seconden doorstromen niet hoger dan 25 graden mag zijn. Goede isolatie van de koude leiding, weg van warmtebronnen, is essentieel.',
  },
  {
    question: 'Wat moet ik doen met stilstaand water in een vakantiewoning?',
    answer:
      'Na een periode van stilstand, zoals na een vakantie of wanneer een tweede woning langdurig leeg heeft gestaan, dient u alle kranen minimaal 2 tot 3 minuten door te spoelen voordat u het water gebruikt. Spoel alle tappunten en de douche afzonderlijk door. Bij langdurige leegstand van meer dan twee weken wordt aanbevolen de boiler eerst op te warmen naar 70 graden voor een thermische desinfectie. Overweeg in vakantiewoningen een temperatuurbewakingssysteem dat de boiler periodiek opwarmt.',
  },
  {
    question: 'Hoe warm wordt leidingwater in de zomer in Nederland?',
    answer:
      'De temperatuur van drinkwater bij aanvoer door drinkwaterbedrijven stijgt in de zomer tot 18 tot 22 graden in het leidingnet. In uw woning kan de koudwatertemperatuur op hete zomerdagen oplopen tot 20 tot 25 graden, afhankelijk van de isolatie van de leidingen en de omgevingstemperatuur. Bij leidingen door verwarmde ruimtes of naast cv-leidingen kan dit nog hoger zijn. Dit valt al in de ondergrens van de Legionella-groeizone.',
  },
  {
    question: 'Heeft een waterfilter invloed op de Legionella-temperatuur?',
    answer:
      'Een osmosefilter produceert water op de omgevingstemperatuur (koudwatertemperatuur). Het gefilterde water in de opslagtank heeft dezelfde temperatuur als het inkomende water. Bewaar osmosewater niet langdurig boven 20 graden: zet de tank in een koele ruimte of in de koelkast als u het water langer dan een dag wilt bewaren. Een kokend-water-kraan werkt met een kleine boiler op 100 tot 105 graden, waarbij Legionella geen kans heeft. Dit systeem vormt geen Legionella-risico.',
  },
  {
    question: 'Wanneer moet ik een Legionella-test laten uitvoeren?',
    answer:
      'Voor particuliere woningen is een Legionella-test niet wettelijk verplicht, maar wel aanbevolen bij: een waterboiler ouder dan 10 jaar, aanhoudende klachten van griepachtige symptomen bij bewoners, een woning die meer dan een maand leeg heeft gestaan, een eigen bron of put als drinkwaterbron, of renovaties waarbij leidingen zijn verplaatst. Geaccrediteerde laboratoria zoals Kiwa of Eurofins voeren Legionella-wateronderzoek uit voor circa 80 tot 150 euro per bemonstering.',
  },
];

const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
    { '@type': 'ListItem', position: 2, name: 'Leidingwater', item: 'https://waterfilterplatform.nl/leidingwater' },
    { '@type': 'ListItem', position: 3, name: 'Temperatuur en Legionella', item: 'https://waterfilterplatform.nl/leidingwater/temperatuur' },
  ],
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Temperatuur leidingwater: Legionella-risicozone en veilige instelling',
  description:
    'Legionella groeit het snelst bij 20-45 graden Celsius. Boiler instellen op minimaal 60 graden. Koude leiding altijd onder 25 graden houden.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/leidingwater/temperatuur',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function LeidingwaterTemperatuurPage() {
  return (
    <>
      <SchemaOrg schema={[breadcrumbSchema, faqSchema, articleSchema]} />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/leidingwater" className="hover:underline">Leidingwater</Link> &rsaquo;{' '}
          <span>Temperatuur en Legionella</span>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
            Temperatuur leidingwater: Legionella-risicozone en veilige instelling
          </h1>
          <p className="text-[#005F8A] text-lg">
            De temperatuur van leidingwater bepaalt in grote mate het risico op Legionella-groei.
            Door de boiler op de juiste temperatuur in te stellen en de koude leiding koel te
            houden, minimaliseert u het gevaar van legionellose. In dit artikel leest u de
            exacte risicozone, de wettelijke normen en praktisch advies voor uw woning.
          </p>
        </section>

        <QuickAnswer answer="Legionella groeit het snelst bij 20-45 graden Celsius en sterft af boven 60 graden. Stel uw boiler in op minimaal 60 graden (wettelijke eis voor collectieve systemen: 60 graden bij boiler, 55 graden uit de tap). Koude leiding onder 25 graden houden. Na stilstand minimaal 2-3 minuten doorspuelen. Circa 500-1000 Nederlanders per jaar krijgen legionellose." />

        <CTABanner context="osmose" />

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Legionella en temperatuur: de wetenschap
        </h2>
        <p className="text-gray-700 mb-4">
          Legionella pneumophila is een watergedragen bacterie die longontsteking (legionellose,
          ook bekend als de veteranenziekte) kan veroorzaken. De bacterie gedijt in zoet water
          en heeft warmte, stilstaand water en voedingsstoffen (biofilm, sediment, corrosie)
          nodig om zich te vermenigvuldigen. De temperatuur is de meest kritische factor:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Onder 20 graden Celsius:</strong> Legionella overleeft maar vermenigvuldigt
            zich nauwelijks. De bacterie kan echter in slapende toestand maanden in koud water
            aanwezig blijven
          </li>
          <li>
            <strong>20 tot 45 graden Celsius:</strong> de risicozone. Legionella vermenigvuldigt
            zich actief, met optimale groei rond 35 tot 40 graden. Dit is precies de
            temperatuur van douche- en badwater dat niet warm genoeg is gehouden
          </li>
          <li>
            <strong>45 tot 50 graden Celsius:</strong> de groei vertraagt; langdurige blootstelling
            begint de bacterie te inactiveren, maar het proces verloopt traag (uren)
          </li>
          <li>
            <strong>50 tot 55 graden Celsius:</strong> actieve afsterving, maar duurt minuten
            tot uren; onvoldoende als enige maatregel bij grote leidingsystemen
          </li>
          <li>
            <strong>Boven 60 graden Celsius:</strong> snelle afsterving binnen enkele minuten;
            dit is de veilige drempel voor warmwaterinstallaties
          </li>
          <li>
            <strong>Boven 70 graden Celsius:</strong> vrijwel onmiddellijke afsterving;
            wordt gebruikt voor thermische desinfectie van leidingsystemen
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Warmwaterboiler: de juiste temperatuurinstelling
        </h2>
        <p className="text-gray-700 mb-4">
          De instelling van uw warmwaterboiler is de eerste en belangrijkste verdedigingslinie
          tegen Legionella. In Nederland geldt voor <strong>collectieve tapwaterinstallaties</strong>
          (scholen, kantoren, zorginstellingen, appartementsgebouwen) de wettelijke eis dat:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>De boiler water opwarmt tot minimaal <strong>60 graden Celsius</strong></li>
          <li>Het warme water uit de verste tap minimaal <strong>55 graden Celsius</strong> heeft
          na maximaal 60 seconden doorstromen</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Voor particuliere woningen bestaat geen wettelijke temperatuurverplichting, maar de
          aanbeveling van GGD Nederland, RIVM en drinkwaterbedrijven is consistent: stel de
          boiler in op <strong>60 tot 65 graden Celsius</strong>. Dit is voldoende om Legionella
          effectief te doden en levert in de meeste boilers comfortabel warm douchewater
          (gemengd met koud water tot circa 38 graden).
        </p>
        <p className="text-gray-700 mb-6">
          De misvatting dat een lagere boilertemperatuur energiezuiniger is wegen op tegen de
          gezondheidsrisicos. Een instelling van 50 graden valt in de Legionella-groeizone en
          wordt uitdrukkelijk afgeraden. De extra energiekosten bij 60 versus 50 graden zijn
          beperkt: bij een modern boilervat van 100 liter met goede isolatie bedraagt het
          verschil circa 5 tot 10 euro per jaar.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Risicogroepen voor legionellose
        </h2>
        <p className="text-gray-700 mb-4">
          Niet iedereen loopt evenveel risico bij blootstelling aan Legionella. De bacterie
          wordt vrijwel uitsluitend overgedragen via inademing van besmet fijn waterdruppeltjesaerosol
          (douche, whirlpool, koeltoren, autowasinstallatie). Drinken van besmet water is geen
          significante infectieroute. Risicogroepen met een sterk verhoogde kans op
          ernstige legionellose zijn:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>Ouderen boven 65 jaar:</strong> verminderde weerstand maakt de long kwetsbaarder voor infectie</li>
          <li><strong>Rokers en ex-rokers:</strong> beschadigde trilhaartjes in de luchtwegen verminderen de afdrijving van bacterien</li>
          <li><strong>Immuungecompromitteerden:</strong> patienten die immunosuppressiva gebruiken, chemotherapie ondergaan of een orgaantransplantatie hebben gehad</li>
          <li><strong>Patienten met chronische longziekte:</strong> COPD, cystische fibrose en vergelijkbare aandoeningen verhogen de gevoeligheid</li>
          <li><strong>Mannen van middelbare leeftijd:</strong> epidemiologisch gezien vaker getroffen dan vrouwen, vermoedelijk door hogere rookprevalentie en beroepsblootstelling</li>
        </ul>
        <p className="text-gray-700 mb-6">
          In Nederland worden jaarlijks circa <strong>500 tot 1000 gevallen</strong> van legionellose
          gemeld. De mortaliteit bedraagt 5 tot 15 procent van de ziekenhuisopnames. Daarmee is
          legionellose de meest ernstige watergedragen infectieziekte in Nederland.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Koude waterleiding: hoe voorkomt u temperatuurstijging?
        </h2>
        <p className="text-gray-700 mb-4">
          De koude waterleiding moet het gehele jaar onder 25 graden blijven om te voorkomen
          dat Legionella zich vestigt en groeit. In de praktijk is dit in Nederlandse woningen
          niet altijd vanzelfsprekend, zeker niet in de zomer:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Isolatie van koude leidingen:</strong> leidingen die lopen langs een
            verwarmingsketel, centrale verwarming of in ongeventileerde kruipruimtes of zolders
            kunnen sterk opwarmen. Isoleer de koude leiding met koudewaterleidingsisolatie
            (andere specificatie dan warmwaterleidingisolatie)
          </li>
          <li>
            <strong>Scheiding warm en koud:</strong> houd warmwater- en koudwaterleidingen
            gescheiden en niet parallel in hetzelfde leidingbundel. Een minimale afstand van
            15 cm of afzonderlijke isolatie is aanbevolen
          </li>
          <li>
            <strong>Vermijd doodlopende leidingstukken (dood-einden):</strong> water in
            leidingen die zelden of nooit worden gebruikt, stijgt in temperatuur en vormt
            een ideale broedplaats voor Legionella
          </li>
          <li>
            <strong>Ventilatie van kruipruimte en zolder:</strong> een goed geventileerde
            kruipruimte houdt de luchttemperatuur lager, wat de opwarming van koudwaterleidingen
            beperkt
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Stilstaand water: de belangrijkste risicofactor
        </h2>
        <p className="text-gray-700 mb-4">
          Stilstaand warm water is de voornaamste risicofactor voor Legionella-groei. In water
          dat langere tijd stilstaat accumuleert biofilm, neemt de zuurstofconcentratie af en
          stijgt de bacterieconcentratie. Dit geldt in het bijzonder voor:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Vakantiewoningen en tweede huizen:</strong> na weken of maanden leegstand
            kan de Legionella-concentratie in het leidingsysteem sterk zijn opgelopen.
            Spoel bij terugkomst alle kranen en douche minimaal 2 tot 3 minuten door voordat
            u het water gebruikt
          </li>
          <li>
            <strong>Ziekenhuizen en zorginstellingen:</strong> kamers die tijdelijk niet in
            gebruik zijn, vormen een structureel risico; professionele spoelprotocollen zijn
            hier wettelijk verplicht
          </li>
          <li>
            <strong>Hotels:</strong> ongebruikte kamers worden dagelijks gespueld als onderdeel
            van het wettelijk verplichte legionellabeheersingsplan
          </li>
          <li>
            <strong>Eigen woning na vakantie:</strong> ook bij een reguliere vakantie van twee
            weken is doorspuelen aanbevolen, met name van weinig gebruikte tappunten zoals
            een buitenkraan of gastentoilet
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Kruisverbindingen tussen warm en koud water vermijden
        </h2>
        <p className="text-gray-700 mb-4">
          Een minder bekende risicofactor is de kruisverbinding tussen de warmwater- en
          koudwaterkring. Dit kan optreden bij:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Mengkranen zonder terugslagklep:</strong> bij gelijke of hogere druk aan
            de warme kant kan warm water terugstromen in de koude leiding. Een gecertificeerde
            thermostatische mengkraan met ingebouwde terugslagkleppen voorkomt dit
          </li>
          <li>
            <strong>Vaatwassers en wasmachines:</strong> sluit deze apparaten altijd aan via
            een terugslagklep om te voorkomen dat opgewarmd water terugstroomt
          </li>
          <li>
            <strong>Zonneboilers en warmtepompen:</strong> let bij installatie van zonneboilers
            op correcte terugslagkleppen en buffervat-installatie om temperatuuroverdracht te
            voorkomen
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Waterfilter en temperatuur: speciale aandachtspunten
        </h2>
        <p className="text-gray-700 mb-4">
          Waterfilters interageren op specifieke manieren met watertemperatuur en Legionella-risico:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Osmosefilter:</strong> een <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">osmosefilter</Link> produceert
            water op de omgevingstemperatuur van het koudwater. De opslagtank staat doorgaans
            onder de gootsteen waar de temperatuur vrij stabiel is. Bij bewaring van osmosewater
            in een warm vertrek boven 20 graden, bewaar het dan in de koelkast. Osmosewater
            bevat weinig voedingsstoffen voor bacterien, wat het relatief veilig maakt, maar
            een vervuild membraan of carbon-filter kan zelf een bacteriebron worden
          </li>
          <li>
            <strong>Kokend-water-kraan:</strong> systemen als een Quooker of InSinkErator werken
            met een kleine boiler op 100 tot 105 graden en produceren kokend water op aanvraag.
            Bij deze temperatuur is er geen enkel Legionella-risico. De kleine tankinhoud (3 tot
            6 liter) en hoge temperatuur maken dit type systeem juist bijzonder veilig
          </li>
          <li>
            <strong>Gefilterd water bij hoge kamertemperatuur:</strong> als u gefilterd water
            buiten de koelkast bewaart in een kruik of kan, gebruik het dan binnen 24 uur op
            om bacteriegroei te voorkomen. Dit geldt voor alle filterkan-types
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          Lees ook onze informatie over{' '}
          <Link href="/leidingwater/bacterien" className="text-[#005F8A] underline">bacterien in leidingwater</Link>{' '}
          voor een breder overzicht van microbiologische waterveiligheid.
        </p>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">
            Veelgestelde vragen over leidingwatertemperatuur en Legionella
          </h2>
          {faqItems.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/leidingwater/bacterien" className="text-[#005F8A] underline">bacterien in leidingwater</Link>,{' '}
          <Link href="/leidingwater/kwaliteit" className="text-[#005F8A] underline">leidingwaterkwaliteit in Nederland</Link>,{' '}
          <Link href="/waterfilter/legionella" className="text-[#005F8A] underline">waterfilter voor Legionella</Link> en{' '}
          <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose uitleg</Link>.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen in Nederland</h3>
              <p className="text-sm text-gray-600">Wettelijke normen voor drinkwaterkwaliteit en temperatuur, inclusief Legionella-richtlijnen.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/microbiologisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Microbiologische verontreinigingen in drinkwater</h3>
              <p className="text-sm text-gray-600">Bacterien, virussen en parasieten in drinkwater: welke risicos brengen ze mee en hoe worden ze verwijderd?</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
