import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Heet water kraan kopen: waar op letten in 2026?',
  description:
    'Heet water kraan kopen? Vergelijk modellen, temperaturen, installatie en kosten. Ontdek waarom een 4-in-1 kokend water kraan met osmose meer biedt.',
  alternates: { canonical: 'https://waterfilterplatform.nl/heet-water-kraan/kopen' },
  openGraph: {
    title: 'Heet water kraan kopen: waar op letten in 2026?',
    description:
      'Heet water kraan kopen? Vergelijk modellen, temperaturen, installatie en kosten. Ontdek waarom een 4-in-1 kokend water kraan met osmose meer biedt.',
    url: 'https://waterfilterplatform.nl/heet-water-kraan/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is een heet water kraan precies?',
    answer:
      'Een heet water kraan levert instant warm water van 60-98 graden Celsius rechtstreeks uit de kraan, zonder dat u een waterkoker hoeft te gebruiken. Het systeem bestaat uit een verwarmingselement of kleine boiler onder het aanrecht die water op temperatuur houdt of direct verwarmt via het doorstroomprincipe.',
  },
  {
    question: 'Wat is het verschil tussen een heet water kraan en een kokend water kraan?',
    answer:
      'Een heet water kraan levert water tot maximaal 98 graden Celsius. Een kokend water kraan levert echt 100 graden Celsius, wat nodig is voor het daadwerkelijk koken van pasta, steriliseren en toepassingen die exact kookpunt vereisen. Voor thee, soep en babyvoeding volstaat een heet water kraan. Voor wie ook 100 graden wil, is een 4-in-1 kraan met osmose de complete keuze.',
  },
  {
    question: 'Welke temperatuur is instelbaar bij een heet water kraan?',
    answer:
      'De meeste modellen zijn instelbaar tussen 40 en 98 graden Celsius. Goedkopere modellen leveren een vaste temperatuur van 60-80 graden. Duurdere modellen met digitaal display laten u per stap van 5 graden instellen. Voor groene thee is 65-70 graden ideaal, voor zwarte thee 90-95 graden.',
  },
  {
    question: 'Hoeveel kost een heet water kraan aanschaffen?',
    answer:
      'Budget modellen (eenvoudige instant water heater) beginnen bij circa 150 euro. Middenklasse kranen met instelbare temperatuur kosten 250-450 euro. Premium modellen met digitale bediening en grotere tankinhoud kosten 450-600 euro. Een 4-in-1 kraan met osmosefilter kost 699-900 euro maar biedt kokend, heet, koud en gefilterd water in één systeem.',
  },
  {
    question: 'Wat zijn de installatiekosten van een heet water kraan?',
    answer:
      'De installatie door een erkend installateur kost 100-200 euro voor een eenvoudige heet water kraan. Bij een gecombineerde installatie met osmosefilter of bij het plaatsen van een extra wandcontactdoos rekent u op 150-300 euro. Handige doe-het-zelvers kunnen eenvoudige modellen zelf aansluiten in 30-60 minuten.',
  },
  {
    question: 'Welke certificeringen zijn belangrijk bij een heet water kraan?',
    answer:
      'Let op WRAS-certificering (Water Regulations Advisory Scheme, VK) en NSF/ANSI 61-certificering voor voedselveiligheid bij watercontact. Voor Europa is CE-markering verplicht. Bij modellen met waterfilter is aanvullend NSF/ANSI 42 of 58 relevant voor filterprestaties. KIWA-keur is de Nederlandse equivalent voor waterveiligheid.',
  },
  {
    question: 'Hoeveel liter warm water per uur levert een heet water kraan?',
    answer:
      'Een doorstroom instant water heater levert 4-8 liter per minuut, maar de opwarmcapaciteit begrenst de effectieve heetwater-output op 2-4 liter per minuut bij 80 graden. Mini-boiler systemen van 3-5 liter zijn direct volledig beschikbaar maar moeten daarna opwarmen. Voor een gezin van 4 personen volstaat een boiler van 3 liter normaal gezien ruim.',
  },
  {
    question: 'Waarom is een 4-in-1 kraan beter dan een losse heet water kraan?',
    answer:
      'Een 4-in-1 kraan met osmose levert kokend water (100 graden), heet water, koud gefilterd water en bruisend water uit één kraan. U hebt geen aparte waterkoker, geen losse filterkan en geen sodastream-fles meer nodig. Het osmosefilter verwijdert PFAS, nitraten, kalk en medicijnresten. De totale prijs over 5 jaar is lager dan een losse heet water kraan plus waterkoker plus filterkan.',
  },
];

const aankoopCriteria = [
  {
    criterium: 'Temperatuurinstelling',
    uitleg:
      'Instelbare temperatuur (40-98 graden) is comfortabeler dan een vaste instelling. Digitale displays zijn preciezer. Controleer of de gewenste temperatuur voor groene thee (65 graden) en zwarte thee (95 graden) bereikbaar is.',
    belang: 'Hoog',
  },
  {
    criterium: 'Tankinhoud (liter)',
    uitleg:
      'Een tank van 2-3 liter is voldoende voor 1-2 personen. Voor gezinnen van 3-4 personen is 3-5 liter wenselijk. Bij doorstroom (tankless) systemen is de flowsnelheid bepalender dan tankinhoud.',
    belang: 'Hoog',
  },
  {
    criterium: 'Energielabel / standby verbruik',
    uitleg:
      'Standby verbruik varieert van 5W (doorstroom) tot 50W (mini-boiler). Op jaarbasis scheelt dat 30-40 euro. Kies voor A-label of minimale standby waar mogelijk.',
    belang: 'Middel',
  },
  {
    criterium: 'WRAS / NSF certificering',
    uitleg:
      'Certificering garandeert dat materialen in contact met drinkwater veilig zijn. Zonder certificering riskeert u metaaluitspoeling in het verhitte water. Verplicht niet in NL maar sterk aanbevolen.',
    belang: 'Hoog',
  },
  {
    criterium: 'Filteroptie',
    uitleg:
      'Modellen zonder filter verwarmen ongefilterd leidingwater inclusief kalk, chloor en eventuele verontreinigingen. Kalk tast het verwarmingselement aan. Een geintegreerd kalkfilter of osmosefilter verlengt de levensduur aanzienlijk.',
    belang: 'Middel',
  },
  {
    criterium: 'Kraangat vereiste',
    uitleg:
      'Losse heet water kranen vereisen een extra gat van 35-38 mm in het aanrecht. Een 4-in-1 kraan vervangt de bestaande mengkraan en gebruikt hetzelfde gat. Boren in graniet of composiet is kostbaar en riskant.',
    belang: 'Praktisch',
  },
];

export default function HeetWaterKraanKopenPage() {
  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Heet water kraan', url: 'https://waterfilterplatform.nl/heet-water-kraan' },
          { name: 'Kopen', url: 'https://waterfilterplatform.nl/heet-water-kraan/kopen' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Heet water kraan kopen: waar op letten in 2026?',
          description:
            'Heet water kraan kopen? Vergelijk modellen, temperaturen, installatie en kosten. Ontdek waarom een 4-in-1 kokend water kraan met osmose meer biedt.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/heet-water-kraan/kopen',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/heet-water-kraan" className="hover:text-[#005F8A]">Heet water kraan</Link>
            <span className="mx-2">/</span>
            <span>Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Heet water kraan kopen: waar op letten in 2026?
          </h1>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Een <strong>heet water kraan</strong> levert direct warm water van 60-98&deg;C zonder
            waterkoker. Maar niet elk model is hetzelfde: temperatuurbereik, tankinhoud,
            certificering en filteropties bepalen of u een systeem koopt dat jaren meegaat of snel
            teleurstelt. En als u toch investeert, overweeg dan of een{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline hover:no-underline">
              4-in-1 kokend water kraan met osmose
            </Link>{' '}
            niet de betere keuze is.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Op deze pagina vindt u de volledige koopgids: wat is een heet waterkraan, op welke
            criteria selecteert u, wat kost het (aanschaf, installatie, onderhoud), en wanneer kiest
            u voor de complete 4-in-1 oplossing met osmosefiltratie.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk 4-in-1 met osmose &rarr;
            </Link>
            <Link
              href="/heet-water-kraan/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Modellen vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-is" className="hover:underline">Wat is een heet water kraan?</a></li>
            <li><a href="#criteria" className="hover:underline">Criteria bij aankoop</a></li>
            <li><a href="#kosten" className="hover:underline">Kosten: aanschaf, installatie, onderhoud</a></li>
            <li><a href="#heet-vs-kokend" className="hover:underline">Heet vs kokend (100&deg;C)</a></li>
            <li><a href="#4-in-1" className="hover:underline">Waarom 4-in-1 met osmose beter is</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wat is een heet water kraan */}
        <section id="wat-is">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat is een heet water kraan?
          </h2>
          <QuickAnswer answer="Een heet water kraan levert direct warm water van 60-98 graden Celsius uit de kraan, zonder wachten op een waterkoker. Het systeem verwarmt water via een doorstroomboiler of kleine reservoir-tank onder het aanrecht en is geschikt voor thee, soep, pasta voorweken en babyvoeding." />
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een <strong>heet waterkraan</strong> (ook wel <em>instant heet water kraan</em> of
            instant water heater) is een systeem dat u installeert naast of als vervanging van uw
            bestaande keukenkraan. In tegenstelling tot de gewone mengkraan, die warm water levert
            via de cv-ketel op maximaal 55-60&deg;C, verwarmt een heet water kraan water direct tot
            de gewenste temperatuur van 60-98&deg;C.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2 text-sm">Doorstroom systeem (tankless)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Water wordt direct verwarmd bij gebruik via een krachtig verwarmingselement
                (1.500-3.000W). Geen stand-by verlies, maar beperkte flow op hoge temperaturen.
                Prijs: 150-350 euro.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="font-semibold text-[#003F5C] mb-2 text-sm">Mini-boiler systeem</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Een kleine tank van 2-5 liter houdt water continu op ingestelde temperatuur.
                Direct beschikbaar bij gebruik, maar heeft stand-by energieverbruik van 20-50W.
                Prijs: 250-600 euro.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Beide typen elimineren de noodzaak van een waterkoker voor 80-90% van dagelijks gebruik.
            Ze leveren <strong>instant heet water</strong> zonder wachten — een komkomertijd van nul
            seconden versus 2-3 minuten bij een waterkoker. Het resultaat: minder energieverspilling,
            meer gemak en een opgeruimder aanrecht.
          </p>
        </section>

        {/* Criteria bij aankoop */}
        <section id="criteria">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Criteria bij aankoop: waar op letten?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Niet elk model voldoet aan dezelfde normen. De zes belangrijkste criteria bij de keuze
            van een <strong>heet water kraan kopen</strong> zijn:
          </p>
          <div className="space-y-3">
            {aankoopCriteria.map(c => (
              <div key={c.criterium} className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900">{c.criterium}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                    c.belang === 'Hoog'
                      ? 'bg-red-100 text-red-700'
                      : c.belang === 'Middel'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {c.belang}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{c.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Kosten */}
        <section id="kosten">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Kosten: aanschaf, installatie en jaarlijks onderhoud
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De totale eigendomskosten van een heet water kraan bestaan uit drie componenten. Hieronder
            een volledig overzicht zodat u niet voor verrassingen staat.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] mb-3">Aanschafkosten</p>
              <div className="space-y-2">
                {[
                  { segment: 'Budget (doorstroom, vaste temp.)', prijs: '150 - 250 euro', desc: 'Eenvoudige instant water heater, 1 temperatuurstand, geen display' },
                  { segment: 'Midden (instelbaar, digitaal)', prijs: '250 - 450 euro', desc: 'Instelbare temperatuur 40-98 graden, LED display, 3-5 liter tank' },
                  { segment: 'Premium (merk, certificering)', prijs: '450 - 600 euro', desc: 'WRAS/NSF gecertificeerd, hoogwaardig materiaal, langere garantie' },
                  { segment: '4-in-1 met osmose (aanbevolen)', prijs: '699 - 900 euro', desc: 'Kokend + heet + koud + gefilterd, osmosefilter ingebouwd, alles-in-een' },
                ].map(r => (
                  <div key={r.segment} className="flex gap-3 items-start text-sm">
                    <span className="font-semibold text-[#005F8A] shrink-0 w-36">{r.prijs}</span>
                    <div>
                      <span className="font-medium text-gray-800">{r.segment}</span>
                      <span className="text-gray-500"> &mdash; {r.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] mb-3">Installatiekosten</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="font-semibold text-[#005F8A] shrink-0 w-36">DIY (zelf)</span>
                  <span>0 euro &mdash; eenvoudige doorstroom heater, 30-60 minuten werk, vereist bestaand stopcontact</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-[#005F8A] shrink-0 w-36">100 - 200 euro</span>
                  <span>Installateur voor standaard mini-boiler met bestaand kraangat en stopcontact</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-[#005F8A] shrink-0 w-36">150 - 300 euro</span>
                  <span>Inclusief boorgat in aanrecht, nieuwe wandcontactdoos of koppeling aan osmosefilter</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <p className="font-bold text-[#003F5C] mb-3">Jaarlijks onderhoud</p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="font-semibold text-[#005F8A] shrink-0 w-36">15 - 45 euro/jr</span>
                  <span>Energiekosten standby verbruik (5-15W doorstroom, 20-50W mini-boiler bij 0,30 euro/kWh)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-[#005F8A] shrink-0 w-36">0 - 50 euro/jr</span>
                  <span>Ontkalkingsbeurt (bij hard water aanbevolen, 1x per jaar voor modellen zonder filter)</span>
                </div>
                <div className="flex gap-3">
                  <span className="font-semibold text-[#005F8A] shrink-0 w-36">50 - 100 euro/jr</span>
                  <span>Filtervervanging bij modellen met geintegreerd kalkfilter of koolstoffilter</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heet vs kokend */}
        <section id="heet-vs-kokend">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Heet water (60-98&deg;C) vs kokend water (100&deg;C): wanneer maakt het verschil?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Voor de meeste dagelijkse toepassingen volstaat een heet water kraan volledig. Maar er
            zijn situaties waarbij die laatste graden tot 100&deg;C wel degelijk uitmaken:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[480px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Toepassing</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Heet (98&deg;C max)</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Kokend (100&deg;C)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { gebruik: 'Thee zetten (zwart, kruiden)', heet: 'Ideaal', kokend: 'Goed' },
                  { gebruik: 'Groene thee (65-70 graden)', heet: 'Ideaal', kokend: 'Te heet' },
                  { gebruik: 'Soep en bouillon', heet: 'Ideaal', kokend: 'Goed' },
                  { gebruik: 'Babyvoeding bereiden', heet: 'Voldoende', kokend: 'Goed' },
                  { gebruik: 'Pasta echt koken', heet: 'Onvoldoende', kokend: 'Vereist' },
                  { gebruik: 'Steriliseren (babyflessen)', heet: 'Onvoldoende', kokend: 'Vereist' },
                  { gebruik: 'Koffie (Aeropress, French press)', heet: 'Ideaal (88-94 graden)', kokend: 'Te heet zonder koelen' },
                ].map(r => (
                  <tr key={r.gebruik} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-medium text-gray-800">{r.gebruik}</td>
                    <td className={`py-2.5 px-3 text-center text-xs font-medium ${
                      r.heet === 'Ideaal' ? 'text-green-700' :
                      r.heet === 'Voldoende' ? 'text-amber-600' :
                      r.heet === 'Onvoldoende' ? 'text-red-600' : 'text-gray-600'
                    }`}>{r.heet}</td>
                    <td className={`py-2.5 px-3 text-center text-xs font-medium ${
                      r.kokend === 'Goed' ? 'text-green-700' :
                      r.kokend === 'Vereist' ? 'text-[#005F8A]' :
                      r.kokend === 'Ideaal' ? 'text-green-700' :
                      r.kokend === 'Te heet' || r.kokend === 'Te heet zonder koelen' ? 'text-amber-600' : 'text-gray-600'
                    }`}>{r.kokend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed">
            De conclusie: een heet water kraan van 98&deg;C dekt het overgrote deel van dagelijks
            gebruik uitstekend. Wie echter ook pasta wil koken of steriliseren, heeft echt 100&deg;C
            nodig en kan dan beter direct kiezen voor een{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline hover:no-underline">
              kokend water kraan
            </Link>.
          </p>
        </section>

        {/* 4-in-1 met osmose */}
        <section id="4-in-1">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Waarom een 4-in-1 kraan met osmose meer biedt dan een losse heet water kraan
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Als u toch gaat investeren in een heet water systeem, is het de moeite waard om de
            totaaloplossing te overwegen. Een <strong>4-in-1 kokend water kraan met omgekeerde
            osmose</strong> levert vier functies uit e&eacute;n kraan die uw bestaande mengkraan
            volledig vervangt:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {[
              { functie: 'Kokend', temp: '100&deg;C', kleur: 'bg-red-50 border-red-200' },
              { functie: 'Heet', temp: '60-98&deg;C', kleur: 'bg-amber-50 border-amber-200' },
              { functie: 'Koud gefilterd', temp: 'Osmose', kleur: 'bg-[#E0F2FE] border-[#005F8A]/30' },
              { functie: 'Bruisend', temp: 'Gefilterd', kleur: 'bg-green-50 border-green-200' },
            ].map(f => (
              <div key={f.functie} className={`rounded-xl border p-3 text-center ${f.kleur}`}>
                <p className="font-bold text-[#003F5C] text-sm">{f.functie}</p>
                <p className="text-xs text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: f.temp }} />
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 mb-5">
            <p className="font-semibold text-[#003F5C] mb-3">De voordelen ten opzichte van een losse heet water kraan:</p>
            <ul className="space-y-2">
              {[
                'Geen aparte waterkoker meer nodig (ruimte besparing op aanrecht)',
                'Osmosefilter verwijdert PFAS, nitraten, kalk, medicijnresten en zware metalen (95-99%)',
                'Gefiltreerd koud water direct uit de kraan, geen filterkan meer nodig',
                'Bruisend water zonder CO2-flessen of sodastream-apparaat',
                'Eenmalige installatie voor alle functies tegelijk',
                'TCO over 5 jaar lager dan losse heet water kraan + waterkoker + filterkan',
              ].map(v => (
                <li key={v} className="flex gap-2 items-start text-sm text-gray-700">
                  <span className="text-[#005F8A] font-bold shrink-0">+</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De PureAqua 4-in-1 is het enige systeem dat echte omgekeerde osmose-filtratie combineert
            met 100&deg;C kokend water, heet water en bruisend water in e&eacute;n compacte kraan.
            Lees de volledige vergelijking op onze{' '}
            <Link href="/heet-water-kraan/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              heet water kraan vergelijken pagina
            </Link>.
          </p>
        </section>

        {/* CTA 1 */}
        <CTABanner context="osmose" />

        {/* Verder lezen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                href: '/heet-water-kraan',
                title: 'Heet water kraan: complete gids',
                desc: 'Alles over heet water kranen: types, temperaturen, installatie en gebruik.',
              },
              {
                href: '/heet-water-kraan/vergelijken',
                title: 'Heet water kraan merken vergelijken',
                desc: 'Vergelijkingstabel van 6 modellen op prijs, temperatuur en capaciteit.',
              },
              {
                href: '/heet-water-kraan/prijs',
                title: 'Heet water kraan prijs overzicht',
                desc: 'Volledige kostenanalyse inclusief 5-jaars TCO-berekening.',
              },
              {
                href: '/kokend-water-kraan',
                title: 'Kokend water kraan (100&deg;C)',
                desc: 'Wanneer heeft u echt 100 graden nodig? Complete gids met merken.',
              },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
              >
                <p
                  className="font-semibold text-gray-800 group-hover:text-[#005F8A] transition-colors mb-1"
                  dangerouslySetInnerHTML={{ __html: l.title }}
                />
                <p className="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: l.desc }} />
              </Link>
            ))}
          </div>
        </section>

        {/* Gerelateerde onderwerpen */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/kokend-water-kraan/vergelijken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Kokend water kraan vergelijken</h3>
              <p className="text-sm text-gray-600">Vergelijking van kokend water kranen op prijs, functies en kwaliteit.</p>
            </Link>
            <Link href="/heet-water-kraan/vergelijken" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Heet water kraan vergelijken</h3>
              <p className="text-sm text-gray-600">Vergelijking van alle heet water kraan modellen en merken.</p>
            </Link>
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp budget</h3>
              <p className="text-sm text-gray-600">Welke heet water kraan past bij uw budget? Overzicht per prijsklasse.</p>
            </Link>
            <Link href="/heet-water-kraan" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Heet water kraan</h3>
              <p className="text-sm text-gray-600">Alles over heet water kranen: types, installatie en gebruik.</p>
            </Link>
          </div>
        </section>

        {/* CTA 2 */}
        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over heet water kraan kopen
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">
                    &#9662;
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
