import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Kokend water kraan kopen: complete gids 2026',
  description:
    'Alles wat je moet weten voor je een kokend water kraan koopt: types (kokend, heet, koud, bruisend), capaciteit, boilervolume, installatie-eisen, prijsrange.',
  alternates: { canonical: 'https://waterfilterplatform.nl/kokend-water-kraan/kopen' },
  openGraph: {
    title: 'Kokend water kraan kopen: complete gids 2026',
    description:
      'De complete koopgids voor kokend water kranen: types, capaciteit, boilervolume, installatie en prijzen van €200 tot €1500.',
    url: 'https://waterfilterplatform.nl/kokend-water-kraan/kopen',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat kost een kokend water kraan inclusief installatie?',
    answer:
      'De kraan zelf kost €200–€1.500 afhankelijk van type en merk. Installatiekosten door een loodgieter liggen op €80–€200 (1–3 uur werk). Reken voor een complete installatie van een kwalitatief systeem op €400–€900 totaal. Een 4-in-1 systeem met ingebouwde filter vraagt iets meer vanwege de elektrische aansluiting voor de boiler.',
  },
  {
    question: 'Hoeveel liter kokend water heeft een gemiddeld gezin per dag nodig?',
    answer:
      'Een gemiddeld gezin van 4 personen verbruikt 3–6 liter kokend water per dag voor koffie, thee, instant maaltijden en koken. Kies een boiler van minimaal 2,4 liter (standaard) voor normaal gebruik, of 4 liter voor intensiever gebruik.',
  },
  {
    question: 'Is een 3-in-1 of 4-in-1 kraan het beste?',
    answer:
      'Een 3-in-1 kraan (kokend, koud, warm) is ideaal als je simpelweg de standaard mengkraan wilt vervangen. Een 4-in-1 kraan voegt bruisend water toe — ideaal als je de sodastream-fles wilt vervangen. Een 5-in-1 voegt RO-gefilterd koud water toe als aparte functie. De 4-in-1 met ingebouwde RO is het meest complete systeem voor wie kwaliteit én gemak wil.',
  },
  {
    question: 'Hoe veilig zijn kokend water kranen voor kinderen?',
    answer:
      'Alle serieuze merken hebben een dubbel activeringsmechanisme — je moet tegelijk draaien én indrukken om kokend water te activeren. Dit is ontworpen om ongewenste activering door kinderen te voorkomen. Instructeer kinderen altijd over de gevaren, vergelijkbaar met gewone hete waterkokers.',
  },
  {
    question: 'Hoeveel elektriciteit verbruikt een kokend water kraan?',
    answer:
      'Een standaard boiler van 2,4 liter op standby verbruikt 10–30 watt continu. Op jaarbasis is dat 90–260 kWh, oftewel €25–€75 per jaar bij een tarief van €0,30/kWh. In vergelijking met dagelijks een waterkoker opzetten is dit vergelijkbaar of iets hoger — maar de tijdsbesparing en het comfort zijn aanzienlijk.',
  },
  {
    question: 'Kan ik een kokend water kraan zelf installeren?',
    answer:
      'Basis installatie (wateraansluiting, boilermontage) is voor een handige doe-het-zelver haalbaar. De elektrische aansluiting vereist echter een geaard stopcontact onder het aanrecht — dit laten de meeste mensen door een loodgieter of elektricien doen. Bij een gecombineerd systeem met osmosefilter is professionele installatie sterk aan te bevelen.',
  },
];

const typesTabel = [
  {
    type: '2-in-1 (alleen kokend + koud)',
    functies: 'Kokend, koud gefilterd',
    prijsRange: '€ 200–500',
    boiler: '2–4 liter',
    filter: 'Optioneel koolstof',
    geschiktVoor: 'Eenvoudige aanvulling naast bestaande mengkraan',
  },
  {
    type: '3-in-1 (kokend + warm + koud)',
    functies: 'Kokend (100°C), heet, koud gefilterd',
    prijsRange: '€ 350–800',
    boiler: '2,4–4 liter',
    filter: 'Koolstof of RO optioneel',
    geschiktVoor: 'Vervanging standaard mengkraan',
  },
  {
    type: '4-in-1 (+ bruisend)',
    functies: 'Kokend, heet, koud, bruisend',
    prijsRange: '€ 500–1.200',
    boiler: '2,4–4 liter',
    filter: 'Koolstof of RO',
    geschiktVoor: 'Degenen die bruisend water willen zonder flessen',
  },
  {
    type: '4-in-1 met RO-filter',
    functies: 'Kokend, heet, osmosewater koud, bruisend',
    prijsRange: '€ 600–1.500',
    boiler: '2,4 liter',
    filter: 'Omgekeerde osmose ingebouwd',
    geschiktVoor: 'Maximale waterkwaliteit én comfort',
    highlight: true,
  },
];

const merkOverzicht = [
  { merk: 'Quooker', type: '3-in-1 / 4-in-1', prijsRange: '€ 750–1.500', sterk: 'Marktleider NL, sterke garantie, groot dealernetwerk', minpunt: 'Premium prijs' },
  { merk: 'Grohe Red', type: '3-in-1', prijsRange: '€ 500–900', sterk: 'Uitstekende bouw, Europees merk', minpunt: 'Geen 4-in-1 met bruisend' },
  { merk: 'InSinkErator', type: '3-in-1', prijsRange: '€ 350–700', sterk: 'Betaalbaar, breed leverbaar', minpunt: 'Beperkt filteropties' },
  { merk: '4-in-1 kraan met osmose', type: '4-in-1 met RO', prijsRange: '€ 600–900', sterk: 'RO-filter ingebouwd, complete oplossing', minpunt: 'Hogere aanschafprijs' },
  { merk: 'Billi', type: '3-in-1 / 4-in-1', prijsRange: '€ 800–1.400', sterk: 'Australisch premium, stille boiler', minpunt: 'Beperkte NL service' },
];

export default function KokendWaterKraanKopenPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Kokend water kraan kopen: complete gids 2026',
          description:
            'Complete koopgids voor kokend water kranen: types, capaciteit, installatie-eisen, prijsrange en merkadvies.',
          datePublished: '2026-01-05',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/kokend-water-kraan/kopen',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Kokend water kraan', url: 'https://waterfilterplatform.nl/kokend-water-kraan' },
          { name: 'Kopen', url: 'https://waterfilterplatform.nl/kokend-water-kraan/kopen' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/kokend-water-kraan" className="hover:text-[#005F8A]">Kokend water kraan</Link>
            <span className="mx-2">/</span>
            <span>Kopen</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Kokend water kraan kopen: complete gids 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Een kokendwaterkraan levert direct kokend, heet, koud en bruisend water uit één elegante
            kraan — zonder waterkoker, zonder wachten. Maar hoe kies je het juiste systeem? We
            leggen alle keuzes uit: van een eenvoudige 2-in-1 tot een complete 4-in-1 met ingebouwde
            osmosefilter. Met prijsoverzicht van <strong>€200 tot €1.500</strong> en concrete
            koopadvies.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Bekijk de 4-in-1 met RO-filter →
            </Link>
            <Link
              href="/kokend-water-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Alle kokend water kranen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#types" className="hover:underline">Types kokend water kranen</a></li>
            <li><a href="#capaciteit" className="hover:underline">Capaciteit en boilervolume</a></li>
            <li><a href="#installatie" className="hover:underline">Installatie-eisen</a></li>
            <li><a href="#merken" className="hover:underline">Merken vergelijken</a></li>
            <li><a href="#prijs" className="hover:underline">Prijsoverzicht €200–€1.500</a></li>
            <li><a href="#waar-kopen" className="hover:underline">Waar kopen?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Types */}
        <section id="types">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Types kokend water kranen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Niet alle kokendwaterkranen zijn hetzelfde. Het aantal &ldquo;functies&rdquo; (in-1) bepaalt
            welke watersoorten de kraan kan leveren. Hoe meer functies, hoe meer comfort — en hoe
            hoger de prijs.
          </p>
          <div className="space-y-4">
            {typesTabel.map((t, i) => (
              <div
                key={t.type}
                className={`border rounded-2xl p-5 ${t.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100'}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900">{t.type}</p>
                  {t.highlight && (
                    <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full shrink-0">
                      Meest compleet
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div><span className="font-medium text-gray-800">Functies:</span> {t.functies}</div>
                  <div><span className="font-medium text-gray-800">Prijs:</span> {t.prijsRange}</div>
                  <div><span className="font-medium text-gray-800">Boiler:</span> {t.boiler}</div>
                  <div><span className="font-medium text-gray-800">Filter:</span> {t.filter}</div>
                  <div className="col-span-2"><span className="font-medium text-gray-800">Geschikt voor:</span> {t.geschiktVoor}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capaciteit */}
        <section id="capaciteit">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Capaciteit en boilervolume kiezen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De boiler slaat het kokende water op. Een te kleine boiler levert niet genoeg water voor
            een druk gezin; een te grote verspilt energie. De meeste systemen bieden 2,4 of 4 liter.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[400px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Boilervolume</th>
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Geschikt voor</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Opwarmtijd</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { vol: '1,5–2 liter', voor: '1–2 personen, licht gebruik', tijd: '4–6 min' },
                  { vol: '2,4 liter', voor: '2–4 personen, normaal gebruik', tijd: '5–8 min', highlight: true },
                  { vol: '4 liter', voor: '4+ personen of intensief gebruik', tijd: '8–12 min' },
                  { vol: '7 liter', voor: 'Zakelijk, kantoor, horeca', tijd: '15–20 min' },
                ].map(r => (
                  <tr
                    key={r.vol}
                    className={(r as { highlight?: boolean }).highlight ? 'bg-[#E0F2FE] font-semibold' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 text-gray-800">{r.vol}</td>
                    <td className="py-2.5 px-3 text-gray-600">{r.voor}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600">{r.tijd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Bij een 4-in-1 systeem met bruisend water heb je ook een CO₂-cilinder nodig (60–400 liter
            bruisend per cilinder, €10–€30 navulling).
          </p>
        </section>

        {/* Installatie */}
        <section id="installatie">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Installatie-eisen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voordat je koopt, controleer je of de keuken aan de minimale vereisten voldoet:
          </p>
          <div className="space-y-3">
            {[
              { titel: 'Ruimte onder het aanrecht', desc: 'Minimaal 40 cm hoogte en 30 cm breedte voor de boiler + eventueel het RO-systeem. Meten is weten — doe dit vóór aanschaf.' },
              { titel: 'Geaard stopcontact', desc: 'Alle boilers hebben een geaard stopcontact (230V, 16A) nodig. Zit er geen stopcontact onder het aanrecht? Dan moet een elektricien dit plaatsen (€80–€150).' },
              { titel: 'Koudwaterleiding', desc: 'Aansluitpunt op de koudwatertoevoer. Wordt geleverd met een T-stuk of aanboorkoppeling.' },
              { titel: 'Afvoer', desc: 'Bij RO-systemen is een afvoerpunt voor spoelwater nodig (aanboorkoppeling op afvoerleiding).' },
              { titel: 'Kraangat in aanrecht', desc: 'Heeft je aanrecht al een extra gat (35–38 mm)? Zo niet, dan moet het worden geboord — dit kan schade geven aan bepaalde aanrechtmaterialen (komposiet, graniet). Altijd door een professional laten doen.' },
            ].map(r => (
              <div key={r.titel} className="flex gap-3 items-start border border-gray-100 rounded-xl p-3">
                <div className="text-[#005F8A] text-lg shrink-0 mt-0.5">⚙</div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.titel}</p>
                  <p className="text-sm text-gray-600 mt-0.5">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Merken */}
        <section id="merken">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Merken vergelijken</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[560px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Merk</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Sterk punt</th>
                </tr>
              </thead>
              <tbody>
                {merkOverzicht.map(m => (
                  <tr key={m.merk} className="border-b border-gray-100">
                    <td className="py-2.5 px-3 font-semibold text-gray-900">{m.merk}</td>
                    <td className="py-2.5 px-3 text-gray-600">{m.type}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700">{m.prijsRange}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{m.sterk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 leading-relaxed text-sm">
            Voor gedetailleerde alternatieven en vergelijkingen:&nbsp;
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline hover:no-underline">Quooker alternatieven</Link>,{' '}
            <Link href="/grohe-red-alternatief" className="text-[#005F8A] underline hover:no-underline">Grohe Red alternatieven</Link>,{' '}
            <Link href="/insinkerator-alternatief" className="text-[#005F8A] underline hover:no-underline">InSinkErator alternatieven</Link>.
          </p>
        </section>

        {/* Prijs */}
        <section id="prijs">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Prijsoverzicht €200–€1.500</h2>
          <div className="space-y-3">
            {[
              { bereik: '€ 200–400', segment: 'Budget', voor: 'Eenvoudige 2-in-1 kranen, voldoende voor kleine huishoudens of als aanvulling op bestaande mengkraan.' },
              { bereik: '€ 400–700', segment: 'Middenklasse', voor: '3-in-1 systemen van bekende merken (InSinkErator, instapmodellen Quooker). Goede kwaliteit, gangbare functionaliteit.' },
              { bereik: '€ 700–1.000', segment: 'Premium', voor: '4-in-1 systemen met bruisend water of ingebouwde koolstoffilter. Een 4-in-1 systeem met RO valt hier.' },
              { bereik: '€ 1.000–1.500', segment: 'Topsegment', voor: 'Quooker PRO series, Billi, Grohe Red II Duo. Maximale bouwkwaliteit, uitgebreide garantie.' },
            ].map(r => (
              <div key={r.bereik} className="flex gap-4 items-start border border-gray-100 rounded-xl p-4">
                <div className="text-center shrink-0">
                  <p className="font-bold text-[#005F8A] text-sm">{r.bereik}</p>
                  <p className="text-xs text-gray-500">{r.segment}</p>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{r.voor}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Waar kopen */}
        <section id="waar-kopen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Waar koop je een kokend water kraan?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Je kunt terecht bij keukenspeciaalzaken (Keuken&amp;Bad, Brugman), grote bouwmarkten
            (Gamma, Karwei, Praxis), online retailers (bol.com, Amazon.nl) en direct bij fabrikanten
            of gespecialiseerde waterfilterwebshops.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-[#003F5C] mb-2">Kooptip voor 4-in-1 met RO-filter</p>
            <p>
              <strong>Een 4-in-1 kraan met osmose</strong> combineert kokend, koud, heet en bruisend water
              met een ingebouwde omgekeerde osmose filtratie. Dit type systeem is zelf te installeren en
              inclusief installatiemateriaal leverbaar.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="kokend" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">▾</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/keurmerken/ce-markering" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">CE-markering bij aankoop controleren</h3>
              <p className="text-sm text-gray-600">Waarom CE-markering verplicht is voor kokend water kranen in de EU en hoe u het conformiteitsattest opvraagt.</p>
            </Link>
            <Link href="/keuzehulp/budget" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Budget keuzehulp waterfilter</h3>
              <p className="text-sm text-gray-600">Stap-voor-stap vergelijking van totaalkosten bij aanschaf van kokend water kraan, osmosefilter of waterontharder.</p>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
