import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'UV watersterilisatie: wanneer nodig en hoe werkt het?',
  description:
    'UV-sterilisatie doodt bacterien, virussen en parasieten in water met ultraviolet licht. Wanneer nodig? Putwater, campingwater, na calamiteiten.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/uv-sterilisatie' },
  openGraph: {
    title: 'UV watersterilisatie: wanneer nodig en hoe werkt het?',
    description:
      'UV-sterilisatie doodt bacterien, virussen en parasieten in water met ultraviolet licht. Wanneer nodig? Putwater, campingwater, na calamiteiten.',
    type: 'website',
  },
};

const faqItems = [
  {
    question: 'Hoe werkt UV-watersterilisatie precies?',
    answer:
      'UV-sterilisatie maakt gebruik van ultraviolet licht met een golflengte van 254 nm (UV-C). Dit licht beschadigt het DNA en RNA van micro-organismen zodanig dat ze niet meer kunnen reproduceren. De micro-organismen zijn niet per se dood, maar wel onschadelijk gemaakt. UV-sterilisatie heeft geen chemische bijproducten en de werking is onmiddellijk.',
  },
  {
    question: 'Welke ziekteverwekkers doodt UV-sterilisatie?',
    answer:
      'UV-C licht is effectief tegen vrijwel alle bekende watergebonden ziekteverwekkers: bacterien (E. coli, Salmonella, Legionella, Campylobacter), virussen (Norovirus, Hepatitis A, Rotavirus), en parasieten zoals Giardia lamblia en Cryptosporidium. Cryptosporidium is berucht omdat het chloorresistent is: UV is een van de weinige methoden die deze parasiet effectief uitschakelt.',
  },
  {
    question: 'Verwijdert UV ook chemische stoffen zoals PFAS of kalk?',
    answer:
      'Nee. UV-sterilisatie doodt micro-organismen maar verwijdert geen opgeloste chemische stoffen, zware metalen, kalk, PFAS, nitraat of pesticides. Voor chemische verontreiniging heb je een osmosefilter of koolstoffilter nodig. Wil je zowel microbiologische als chemische bescherming, combineer dan UV met omgekeerde osmose.',
  },
  {
    question: 'Wanneer is een UV-filter nodig in Nederland?',
    answer:
      'Voor leidingwater van de Nederlandse drinkwaterbedrijven is een UV-filter niet nodig: het water is al microbiologisch veilig. UV is relevant bij putwater of bronwater als drinkwaterbron, water op campingterreinen met eigen winning, na een leidingbreuk of calamiteit die de waterdruk heeft onderbroken, water op boten of woonboten met een eigen tank, en water in landen met minder betrouwbare waterinfrastructuur.',
  },
  {
    question: 'Hoe lang gaat een UV-lamp mee?',
    answer:
      'De meeste UV-lampen in watersterilisatoren hebben een levensduur van 8.000 tot 12.000 branduren. Bij continu gebruik (24/7) betekent dit 11-16 maanden. Fabrikanten adviseren doorgaans jaarlijkse vervanging, ook als de lamp nog brandt, omdat de UV-output na verloop van tijd afneemt terwijl de lamp zichtbaar nog gloeit. Een afgedragen lamp biedt minder bescherming dan de nominale waarde.',
  },
  {
    question: 'Wat is het verschil tussen UV-sterilisatie en chloordesinfectie?',
    answer:
      'Beide methoden doden micro-organismen maar werken anders. UV heeft geen chemische bijproducten (geen trihalomethanen of chloraminen zoals bij chloor) en werkt direct. Chloor heeft echter een zogenaamd residueel effect: het blijft na de behandeling actief in het water en beschermt ook de leidingen. UV heeft geen residueel effect. In de drinkwaterproductie worden beide methoden vaak gecombineerd: UV voor de primaire desinfectie, chloor voor het distributienet.',
  },
  {
    question: 'Moet het water helder zijn voor UV-sterilisatie?',
    answer:
      'Ja. Turbide (troebel) water blokkeert het UV-licht gedeeltelijk of volledig, waardoor de desinfectie onvolledig is. De norm is maximaal 1 NTU (nephelometric turbidity unit). Als je put- of bronwater gebruikt, moet je eerst sediment- en eventueel voorfiltratie toepassen voordat het water door de UV-reactor gaat. Veel UV-systemen worden dan ook geleverd met een sedimentprefilter.',
  },
  {
    question: 'Welke keurmerken zijn er voor UV-watersterilisatoren?',
    answer:
      'De belangrijkste keurmerken zijn NSF/ANSI 55 Class A (meest streng, geschikt voor het steriliseren van microbiologisch onveilig water), NSF/ANSI 55 Class B (voor aanvullende behandeling van al veilig water), DVGW (Duits certificeringskeurmerk, ook in Nederland erkend), en CE-markering (Europese veiligheidseis). Voor putwater of bronwater is NSF/ANSI 55 Class A of DVGW-certificering aanbevolen.',
  },
];

const kostenoverzicht = [
  { type: 'Instapmodel (huishoudelijk)', capaciteit: '50-100 L/u', prijs: '80-150 euro', keurmerk: 'CE, NSF 55-B' },
  { type: 'Middenklasse', capaciteit: '100-300 L/u', prijs: '150-300 euro', keurmerk: 'NSF 55-A, DVGW' },
  { type: 'Professioneel / putwater', capaciteit: '300-1.000 L/u', prijs: '300-600 euro', keurmerk: 'NSF 55-A, DVGW' },
  { type: 'Jaarlijkse lampvervanging', capaciteit: '-', prijs: '20-60 euro', keurmerk: '-' },
];

export default function UvSterilisatiePage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'UV sterilisatie', url: 'https://waterfilterplatform.nl/waterfilter/uv-sterilisatie' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'UV watersterilisatie: wanneer nodig en hoe werkt het?',
          description:
            'UV-sterilisatie doodt bacterien, virussen en parasieten in water met ultraviolet licht. Wanneer nodig? Putwater, campingwater, na calamiteiten.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/waterfilter/uv-sterilisatie',
        }}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:underline">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>UV sterilisatie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            UV watersterilisatie: hoe werkt het en wanneer is het nodig?
          </h1>
          <QuickAnswer answer="UV-watersterilisatie gebruikt ultraviolet licht (golflengten 254 nm) om het DNA van bacterien, virussen en parasieten te beschadigen zodat ze niet meer kunnen reproduceren. UV verwijdert geen chemische stoffen of kalk. UV is met name nodig bij putwater, bronwater, campingwater of na een leidingbreuk." />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <CTABanner context="osmose" />

        {/* Werkingsprincipe */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Werkingsprincipe: hoe werkt UV-C desinfectie?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UV-sterilisatie van water maakt gebruik van ultraviolet licht in het UV-C spectrum, specifiek bij een golflengte van 254 nanometer. Dit is de golflengte waarbij de absorptie van UV-licht door DNA en RNA maximaal is. Wanneer micro-organismen worden blootgesteld aan UV-C licht van voldoende intensiteit, raken de nucleinezuren in hun genetisch materiaal beschadigd.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            De beschadiging bestaat uit het vormen van zogenaamde thyminedimeren: chemische verbindingen binnen het DNA die de normale replicatie blokkeren. Het micro-organisme kan zich daarna niet meer voortplanten en vormt geen infectiegevaar meer. Dit proces heet foto-inactivatie. Let op: de micro-organismen worden niet letterlijk gedood, maar onschadelijk gemaakt door hun reproductievermogen te blokkeren.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {[
              { nr: '1', titel: 'Water stroomt door reactor', tekst: 'Water passeert een glazen kwartsbuisje rond de UV-C lamp met maximale contacttijd' },
              { nr: '2', titel: 'UV-C bestraalt micro-organismen', tekst: 'Licht van 254 nm beschadigt DNA en RNA van alle passerende micro-organismen' },
              { nr: '3', titel: 'Micro-organismen onschadelijk', tekst: 'Bacterien, virussen en parasieten kunnen zich niet meer reproduceren' },
            ].map((stap) => (
              <div key={stap.nr} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                <div className="w-8 h-8 bg-[#005F8A] text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                  {stap.nr}
                </div>
                <p className="font-semibold text-gray-800 mb-1 text-sm">{stap.titel}</p>
                <p className="text-xs text-gray-500">{stap.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Een belangrijk kenmerk van UV-sterilisatie is dat het <strong>geen resistentie opbouwt</strong>. Bacterien kunnen in theorie resistent worden tegen antibiotica of chloor, maar het mechanisme van UV-schade aan DNA is zo fundamenteel dat resistentie niet voorkomt. Dit maakt UV-sterilisatie een toekomstbestendige methode voor waterdesinfectie.
          </p>
        </section>

        {/* Wat doodt UV */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat doodt UV-sterilisatie?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UV-C licht bij 254 nm is effectief tegen vrijwel alle bekende watergebonden ziekteverwekkers. Hieronder een overzicht van de belangrijkste groepen:
          </p>
          <div className="space-y-3">
            {[
              {
                groep: 'Bacterien',
                voorbeelden: 'E. coli, Salmonella, Legionella pneumophila, Campylobacter, Staphylococcus',
                noot: 'Legionella is bijzonder relevant voor warm watersystemen en koeltorens. UV wordt veel gebruikt in preventie van legionellose.',
                kleur: 'bg-red-50 border-red-300',
              },
              {
                groep: 'Virussen',
                voorbeelden: 'Norovirus, Rotavirus, Hepatitis A-virus, Adenovirus, Enterovirussen',
                noot: 'Virussen zijn klein en zouden theoretisch chloor kunnen ontwijken, maar zijn gevoelig voor UV-C bestraling.',
                kleur: 'bg-orange-50 border-orange-300',
              },
              {
                groep: 'Parasieten (protozoa)',
                voorbeelden: 'Giardia lamblia, Cryptosporidium parvum, Toxoplasma',
                noot: 'Cryptosporidium is berucht omdat het chloorresistent is. UV is een van de weinige methoden die Cryptosporidium effectief uitschakelt bij gangbare doses.',
                kleur: 'bg-amber-50 border-amber-300',
              },
            ].map((groep) => (
              <div key={groep.groep} className={`border-l-4 rounded-r-xl p-4 ${groep.kleur}`}>
                <p className="font-semibold text-[#003F5C] mb-1">{groep.groep}</p>
                <p className="text-sm text-gray-700 mb-1">{groep.voorbeelden}</p>
                <p className="text-xs text-gray-500 italic">{groep.noot}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            De effectiviteit van UV wordt uitgedrukt in de UV-dosis: het product van intensiteit (mW/cm2) en belichtingstijd (seconden). De norm voor drinkwater is minimaal 40 mJ/cm2. Bij deze dosis wordt een vermindering van bacterieconcentratie van 99,99% (4-log reductie) bereikt.
          </p>
        </section>

        {/* Wat verwijdert UV NIET */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat verwijdert UV-sterilisatie NIET?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UV-sterilisatie is uitsluitend een microbiologische behandeling. Het licht beschadigt DNA maar heeft geen effect op opgeloste chemische stoffen. De volgende verontreinigingen worden door UV <strong>niet</strong> verwijderd:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Kalk en carbonaathardheid',
              'PFAS (per- en polyfluoralkylstoffen)',
              'Zware metalen (lood, arseen, chroom)',
              'Nitraat en nitriet',
              'Pesticiden en herbiciden',
              'Hormoonverstorende stoffen',
              'Chloor en chloraminen',
              'Microplastics (deeltjes)',
              'Ijzer en mangaan',
              'Geur- en smaakstoffen',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                <span className="text-red-500 font-bold">x</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Voor chemische verontreiniging heb je een ander type filter nodig. Een{' '}
            <Link href="/waterfilter/actief-kool" className="text-[#005F8A] underline hover:no-underline">
              actief-koolfilter
            </Link>{' '}
            verwijdert chloor, geur en smaak. Een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde-osmosefilter
            </Link>{' '}
            verwijdert 95-99% van alle opgeloste stoffen inclusief PFAS en zware metalen. Wil je maximale bescherming, combineer dan UV met een RO-filter: de osmose filtert chemisch, UV zorgt voor microbiologische veiligheid.
          </p>
        </section>

        {/* Wanneer UV nodig */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer is UV-sterilisatie nodig?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Voor de meeste huishoudens in Nederland die zijn aangesloten op het gemeentelijke leidingwaternet is een UV-filter niet nodig. Het Nederlandse drinkwater voldoet aan de wettelijke microbiologische veiligheidsnormen. Toch zijn er situaties waarbij UV-sterilisatie wel degelijk relevant of noodzakelijk is:
          </p>
          <div className="space-y-4">
            {[
              {
                situatie: 'Putwater als drinkwaterbron',
                uitleg: 'Grondwater uit een eigen put is niet behandeld. Bacterien zoals E. coli (veelal afkomstig van meststoffen) en andere ziekteverwekkers kunnen voorkomen. UV-sterilisatie is bij putwater dat gebruikt wordt als drinkwater in de meeste gevallen sterk aanbevolen, bij voorkeur gecombineerd met sedimentfiltratie en een osmose- of koolstoffilter.',
                prioriteit: 'Hoog',
                kleur: 'border-red-400 bg-red-50',
              },
              {
                situatie: 'Bronwater en oppervlaktewater',
                uitleg: 'Bronwater en oppervlaktewater (rivieren, plassen) kunnen Giardia, Cryptosporidium en virussen bevatten. In buitengebieden of voor recreatief gebruik (kamperen, wandelen) is een UV-filter of UV-pen effectief als microbiologische bescherming.',
                prioriteit: 'Hoog',
                kleur: 'border-red-400 bg-red-50',
              },
              {
                situatie: 'Campingwater en recreatiewater',
                uitleg: 'Campings met eigen waterwinning (uit een vijver, kreek of eigen put) zijn wettelijk verplicht het water te desinfecteren. UV-sterilisatie is een gangbare methode. Als bezoeker kun je een draagbare UV-pen meenemen als extra bescherming.',
                prioriteit: 'Middel',
                kleur: 'border-amber-400 bg-amber-50',
              },
              {
                situatie: 'Na een leidingbreuk of calamiteit',
                uitleg: 'Als de waterdruk in het leidingnet is weggevallen door een breuk of calamiteit, kan er grondwater infiltreren in de leiding en bacteriologische besmetting optreden. Bij een formeel kookadvies van het drinkwaterbedrijf is UV tijdelijk een alternatief voor koken, maar volg altijd het officieel advies op.',
                prioriteit: 'Tijdelijk',
                kleur: 'border-amber-400 bg-amber-50',
              },
              {
                situatie: 'Boten, woonboten en campers met watertank',
                uitleg: 'Een watertank aan boord of in een camper kan na een periode van stilstand bacteriologisch besmet raken. UV-sterilisatie bij de uitloop beschermt effectief zonder chemische toevoeging, ideaal voor gebruik op zee of in het buitenland.',
                prioriteit: 'Middel',
                kleur: 'border-[#005F8A]/40 bg-[#E0F2FE]',
              },
              {
                situatie: 'Reizen naar landen met onveilig drinkwater',
                uitleg: 'In landen waar leidingwater microbiologisch onveilig is (tropische gebieden, sommige Oost-Europese landen), is een draagbare UV-sterilisator een lichtgewicht en chemievrije oplossing. Modellen zoals de SteriPen kunnen 1 liter water in 90 seconden desinfecteren.',
                prioriteit: 'Situationeel',
                kleur: 'border-[#005F8A]/40 bg-[#E0F2FE]',
              },
            ].map((item) => (
              <div key={item.situatie} className={`border-l-4 rounded-r-xl p-4 ${item.kleur}`}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-semibold text-[#003F5C]">{item.situatie}</p>
                  <span className="text-xs font-semibold text-gray-500 shrink-0">{item.prioriteit}</span>
                </div>
                <p className="text-sm text-gray-700">{item.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leidingwater NL */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Leidingwater Nederland: UV al standaard toegepast</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De grote drinkwaterbedrijven in Nederland (Vitens, Evides, PWN, Dunea en anderen) passen UV-sterilisatie standaard toe als onderdeel van hun zuiveringsproces, met name bij water dat gewonnen wordt uit oppervlaktewater (rivieren, Maas, Rijn). UV inactiveert dan Cryptosporidium en virussen die mogelijk chloorresistent zijn.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Voor de gemiddelde consument aangesloten op het leidingwaternet in Nederland is een extra UV-sterilisator in huis dus niet nodig vanuit microbiologisch oogpunt. De enige situaties waarbij een extra UV-apparaat thuis zinvol is, zijn beschreven in het vorige gedeelte (putwater, eigen waterwinning, calamiteiten).
          </p>
        </section>

        {/* UV vs chloor */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">UV vs chloor: voor- en nadelen</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-4 font-semibold text-[#003F5C]">Eigenschap</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">UV-sterilisatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Chloordesinfectie</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { eigenschap: 'Werking', uv: 'DNA-beschadiging', chloor: 'Chemische oxidatie' },
                  { eigenschap: 'Bijproducten', uv: 'Geen', chloor: 'THM, chloraminen' },
                  { eigenschap: 'Cryptosporidium', uv: 'Effectief', chloor: 'Niet effectief' },
                  { eigenschap: 'Residueel effect', uv: 'Nee', chloor: 'Ja (beschermt leiding)' },
                  { eigenschap: 'Geur/smaak', uv: 'Geen verandering', chloor: 'Typische chloorlucht' },
                  { eigenschap: 'Resistentie', uv: 'Niet mogelijk', chloor: 'In theorie mogelijk' },
                  { eigenschap: 'Turbide water', uv: 'Niet geschikt', chloor: 'Verminderd effectief' },
                  { eigenschap: 'Kosten systeem', uv: '80-600 euro', chloor: '10-50 euro (dosering)' },
                ].map((rij, i) => (
                  <tr key={rij.eigenschap} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-4 font-medium text-gray-700">{rij.eigenschap}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.uv}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.chloor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            In professionele waterbehandeling worden UV en chloor vaak gecombineerd: UV verwijdert chloorresistente organismen zoals Cryptosporidium, terwijl chloor als residueel middel de waterleidingen beschermt tot aan de tap. Voor huishoudelijk gebruik is UV de schonere optie zonder chemische bijproducten.
          </p>
        </section>

        {/* UV + osmose combinatie */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">UV + osmose combineren: maximale bescherming</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            De meest complete waterbehandeling voor putwater of onbetrouwbare waterbronnen combineert omgekeerde osmose met UV-sterilisatie. De ideale volgorde is:
          </p>
          <div className="flex flex-wrap gap-2 items-center text-sm mb-4">
            {['Sedimentfilter (5 micrometer)', 'Actief-koolfilter', 'RO-membraan (osmose)', 'Opslagtank', 'UV-sterilisator', 'Kraanpunt'].map((stap, i, arr) => (
              <div key={stap} className="flex items-center gap-2">
                <span className="bg-[#005F8A] text-white rounded-lg px-3 py-1.5 text-xs font-semibold">{stap}</span>
                {i < arr.length - 1 && <span className="text-gray-400 font-bold">-&gt;</span>}
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het RO-membraan verwijdert 95-99% van alle opgeloste chemische stoffen en verkleint ook de microbiologische belasting sterk (bacterien en parasieten zijn te groot voor het membraan). De UV-sterilisator erna geeft een finale microbiologische bescherming, inclusief eventuele virussen die door kleine imperfecties in het membraan zijn gepasseerd.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wil je meer weten over een osmosefilter?{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              Lees de complete uitleg over omgekeerde osmose
            </Link>{' '}
            of bekijk de{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline hover:no-underline">
              koopgids voor een osmosefilter
            </Link>
            .
          </p>
        </section>

        {/* Lamp levensduur */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">UV-lamp levensduur en onderhoud</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UV-lampen in watersterilisatoren gaan 8.000 tot 12.000 branduren mee. Bij continu gebruik (24/7) is dat 11 tot 14 maanden. Fabrikanten adviseren jaarlijkse vervanging, ook als de lamp visueel nog gloeit. De reden: de UV-output daalt na verloop van tijd terwijl de lamp zichtbaar nog functioneert. Na 12 maanden kan de effectieve UV-dosis al met 20-30% gedaald zijn.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4 my-4">
            <p className="font-semibold text-gray-800 mb-1">Belangrijk: visuele controle is onvoldoende</p>
            <p className="text-sm text-gray-700">
              Een UV-lamp die nog brandt, geeft geen garantie voor voldoende UV-dosis. Vervang altijd op basis van branduren of kalenderinterval, niet alleen als de lamp uitgaat. Kwalitatieve systemen hebben een UV-intensiteitsmeter die u waarschuwt als de lamp te zwak wordt.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Het kwartsglas (het buisje rond de lamp) moet ook regelmatig worden gereinigd. Kalkafzetting op het kwartsglas vermindert de UV-transmissie. Gebruik een zacht doekje met azijn of een milde ontkalkingsoplossing bij elk lampwissel. Gebruik nooit schuurmiddelen.
          </p>
        </section>

        {/* Turbiditeit */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Turbiditeit: water moet helder zijn</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            UV-sterilisatie werkt alleen goed als het water helder is. Deeltjes en troebelheid absorberen of blokkeren het UV-licht, waardoor micro-organismen die in de schaduw van een deeltje zitten, onvoldoende bestraling krijgen. De norm is een turbiditeit van maximaal 1 NTU (nephelometric turbidity unit).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Putwater, bronwater en oppervlaktewater kunnen turbide zijn, zeker na regenval. Het is daarom vrijwel altijd noodzakelijk om een sedimentfilter (5 micrometer of fijner) te plaatsen v&oacute;&oacute;r de UV-reactor. Veel UV-systemen worden dan ook als complete set geleverd met een sedimentprefilter.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Naast turbiditeit speelt ook kleur een rol: ijzerhoudend water (bruin van kleur) of water met huminezuren (bruin-geel) absorbeert UV-licht sterk. In dat geval zijn aanvullende voorfilterstappen nodig voordat UV-sterilisatie effectief werkt.
          </p>
        </section>

        {/* Keurmerken */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Keurmerken voor UV-watersterilisatoren</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bij de aanschaf van een UV-sterilisator is certificering een betrouwbare kwaliteitsindicator. De meest relevante keurmerken zijn:
          </p>
          <div className="space-y-3">
            {[
              {
                keurmerk: 'NSF/ANSI 55 Class A',
                uitleg: 'Meest strenge klasse. Geschikt voor desinfectie van water dat microbiologisch onveilig kan zijn (putwater, bronwater). Vereist minimaal 40 mJ/cm2 UV-dosis bij maximale doorloopsnelheid. Aanbevolen voor putwater en eigenlijk voor elk systeem waar microbiologische veiligheid kritiek is.',
              },
              {
                keurmerk: 'NSF/ANSI 55 Class B',
                uitleg: 'Minder strenge klasse. Bedoeld als aanvullende behandeling van al veilig drinkwater. Niet geschikt als enige bescherming bij microbiologisch onzeker water. Veel goedkopere systemen vallen in deze klasse.',
              },
              {
                keurmerk: 'DVGW (Deutsches Institut fur Gas und Wasser)',
                uitleg: 'Duits certificeringsinstituut erkend in heel Europa. DVGW-gecertificeerde UV-systemen voldoen aan strenge technische eisen voor waterbehandeling. Veelgebruikt keurmerk voor professionele systemen.',
              },
              {
                keurmerk: 'CE-markering',
                uitleg: 'Verplichte Europese veiligheidsmarkering. Geeft aan dat het product voldoet aan EU-veiligheidsrichtlijnen, maar zegt niets specifiek over de desinfectie-efficientie. CE alleen is niet voldoende als kwaliteitsgarantie voor watersterilisatie.',
              },
            ].map((item) => (
              <div key={item.keurmerk} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold text-[#003F5C] mb-1">{item.keurmerk}</p>
                <p className="text-sm text-gray-700">{item.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kostenoverzicht */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenoverzicht UV-sterilisatoren</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-4 font-semibold text-[#003F5C]">Type</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Capaciteit</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-center">Keurmerk</th>
                </tr>
              </thead>
              <tbody>
                {kostenoverzicht.map((rij, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-4 text-gray-700">{rij.type}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.capaciteit}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.prijs}</td>
                    <td className="py-2.5 px-3 text-center text-gray-700">{rij.keurmerk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            Indicatieve prijzen voor vaste installatie (onder-aanrecht of inline). Draagbare UV-pennen voor reizen: 50-120 euro. Prijzen mei 2026.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Voor putwater als drinkwaterbron is een middenklasse of professioneel systeem met NSF 55-A of DVGW-keurmerk sterk aanbevolen. De hogere aanschafprijs is verantwoord gezien de gezondheidsrisicos bij onvoldoende desinfectie. Instapmodellen met alleen CE-markering zijn niet bedoeld voor situaties waar microbiologische veiligheid niet gegarandeerd is.
          </p>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: UV-watersterilisatie
          </h2>
          {faqItems.map((item, i) => (
            <details key={i} className="mb-4 border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#005F8A] cursor-pointer">{item.question}</summary>
              <p className="mt-2 text-gray-700">{item.answer}</p>
            </details>
          ))}
        </section>

        {/* Interne links */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterfilter', label: 'Alle waterfiltersoorten vergelijken' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmosefilter kopen: koopgids 2026' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: complete uitleg' },
              { href: '/waterfilter/actief-kool', label: 'Actief-koolfilter: werking en toepassing' },
              { href: '/putwater', label: 'Putwater filteren: complete gids' },
              { href: '/waterfilter/soorten', label: 'Alle filtersoorten op een rij' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>-&gt;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/filtertechnieken/uv-sterilisatie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">UV-sterilisatie filtertechniek</h3>
              <p className="text-sm text-gray-600">Technische achtergrond van UV-C desinfectie en toepassingen in waterbehandeling.</p>
            </Link>
            <Link href="/stoffen-in-drinkwater/microbiologisch" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Microbiologische stoffen in drinkwater</h3>
              <p className="text-sm text-gray-600">Welke bacterien, virussen en parasieten kunnen in drinkwater voorkomen?</p>
            </Link>
            <Link href="/waterfilter/reisfilter" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Reisfilter voor veilig water onderweg</h3>
              <p className="text-sm text-gray-600">Draagbare UV-filters en reisfilters voor gebruik in landen met onveilig water.</p>
            </Link>
            <Link href="/filtertechnieken/ultrafiltratie" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Ultrafiltratie techniek</h3>
              <p className="text-sm text-gray-600">Hoe ultrafiltratie bacterien en virussen mechanisch tegenhoudt zonder UV.</p>
            </Link>
          </div>
        </section>

        <CTABanner context="osmose" />
      </div>
    </>
  );
}
