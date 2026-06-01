import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Waterontkalker vergelijken: beste modellen 2026',
  description:
    'Vergelijk de beste waterontkalkers van 2026. Overzicht van merken, capaciteit, zoutverbruik en prijs. Welke past bij uw huishouden?',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontkalker/vergelijken' },
  openGraph: {
    title: 'Waterontkalker vergelijken: beste modellen 2026',
    description:
      'Waterontkalker vergelijken op capaciteit, zoutverbruik en prijs. Inclusief single-tank, twin-tank, zoutloos en osmose combinatie.',
    url: 'https://waterfilterplatform.nl/waterontkalker/vergelijken',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Wat is het belangrijkste criterium bij het vergelijken van waterontkalkers?',
    answer:
      'Capaciteit in verhouding tot uw dagelijks waterverbruik en de waterhardheid in uw gemeente is het meest bepalende criterium. Een ontkalker die te klein is regenereert te frequent, wat leidt tot hoger zout- en waterverbruik. Controleer de technische specificaties op het harsvolume (in liters) en de capaciteit uitgedrukt in liters per dag bij uw lokale hardheid in graden Duits (°dH).',
  },
  {
    question: 'Wat is het verschil tussen een single-tank en twin-tank waterontkalker?',
    answer:
      'Een single-tank ontkalker heeft een enkel harsvat. Tijdens de regeneratiecyclus (60-90 min) levert het apparaat geen zacht water. Bij een twin-tank (duplex) wisselen twee harsvaten elkaar af: terwijl de ene regenereert, levert de andere ononderbroken zacht water. Twin-tank is duurder in aanschaf maar ideaal voor grote gezinnen of situaties waarbij continu zacht water vereist is.',
  },
  {
    question: 'Is een zoutloze waterontkalker even effectief als een ionenwisselaar?',
    answer:
      'Nee. Template Assisted Crystallization (TAC) en magneetontkalkers voorkomen kalkaanslag aan leidingwanden maar verwijderen calcium en magnesium niet uit het water. Het water blijft chemisch hard. Een ionenwisselaar is de enige technologie die het water werkelijk zacht maakt: geschikt voor zachte huid, minder zeepgebruik en echt schoon was.',
  },
  {
    question: 'Hoeveel zout verbruikt een moderne waterontkalker per maand?',
    answer:
      'Een modern vraaggestuurd systeem verbruikt 10-18 kg zout per maand voor een gemiddeld gezin van 4 personen in een hard-watergebied (18-20 °dH). Oudere tijdgestuurde modellen verbruiken 20-30 kg per maand. Het verschil over een jaar kan oplopen tot €50-100 aan extra zoutkosten voor tijdgestuurde modellen.',
  },
  {
    question: 'Wat bepaalt de prijs van een waterontkalker?',
    answer:
      'De prijs wordt bepaald door het harsvolume (capaciteit), het type regeneratiebesturing (tijdgestuurd vs. vraaggestuurd), het aantal tanks (single vs. twin), materiaalklasse (roestvrij staal vs. kunststof), smartfuncties (app, display) en het servicecontract. Aanschafprijzen lopen van €300 voor budget modellen tot €1.800+ voor premium twin-tank systemen, exclusief installatie.',
  },
  {
    question: 'Wanneer is een verhuursysteem voor een waterontkalker aantrekkelijk?',
    answer:
      'Huren is aantrekkelijk wanneer u de aanschaf wilt spreiden, altijd zeker wilt zijn van service en onderhoud, en geen grote investering wilt doen in een woning die u wellicht verhuist. Huurprijzen liggen doorgaans op €15-30 per maand inclusief service. Over 10 jaar is kopen bijna altijd goedkoper, maar huren geeft zorgeloosheid en lagere initiaalkosten.',
  },
  {
    question: 'Welke waterontkalker is het beste voor een gezin van 4 personen?',
    answer:
      'Voor een gezin van 4 personen in een hard-watergebied (18+ °dH) is een vraaggestuurde single-tank ionenwisselaar met een harsvolume van 15-20 liter de beste keuze qua prijs-kwaliteit. Middenklasse modellen van merken zoals Ecowat, BWT of Kinetico Mini bieden een goede balans tussen aanschafprijs, zoutverbruik en betrouwbaarheid. Twin-tank is alleen nodig als u constante beschikbaarheid van zacht water vereist.',
  },
  {
    question: 'Is een osmose filter een alternatief voor een waterontkalker?',
    answer:
      'Een osmosefilter is een aanvulling, geen vervanger. Omgekeerde osmose verwijdert 95-99% van alle opgeloste stoffen inclusief kalk, maar filtert alleen het drinkwater aan de keukenkraan. Douche-, was- en leidingwater blijft onbehandeld. Een waterontkalker behandelt al het water in het huis. De ideale combinatie: een waterontkalker voor leidingen en apparaten, plus een osmosefilter voor drinkwater.',
  },
];

const modellen = [
  {
    naam: 'AquaSoft Twin Pro',
    type: 'Twin-tank continu',
    capaciteitL: '40-60 L/dag (18 °dH)',
    zoutMaand: '12-16 kg',
    aanschaf: '€1.300-1.800',
    prijsJaar: '€280-420',
    highlight: true,
    label: 'Beste keuze',
  },
  {
    naam: 'EcoSoft Compact 15',
    type: 'Single-tank vraaggestuurd',
    capaciteitL: '25-45 L/dag',
    zoutMaand: '10-15 kg',
    aanschaf: '€700-1.100',
    prijsJaar: '€230-370',
    highlight: false,
    label: '',
  },
  {
    naam: 'WaterPlus Verhuur Pro',
    type: 'Verhuurmodel (all-in)',
    capaciteitL: '30-50 L/dag',
    zoutMaand: '10-18 kg',
    aanschaf: '€20-28/mnd huur',
    prijsJaar: '€240-336 (huur)',
    highlight: false,
    label: 'Huuroptie',
  },
  {
    naam: 'SaltFree TAC 200',
    type: 'Zoutloos elektrisch TAC',
    capaciteitL: '30-60 L/dag',
    zoutMaand: '0 kg (geen zout)',
    aanschaf: '€400-700',
    prijsJaar: '€40-80 (media)',
    highlight: false,
    label: 'Zoutloos',
  },
  {
    naam: 'NanoSoft NF-25',
    type: 'Nano-technologie filter',
    capaciteitL: '20-35 L/dag',
    zoutMaand: '0 kg (geen zout)',
    aanschaf: '€350-600',
    prijsJaar: '€120-200 (filters)',
    highlight: false,
    label: '',
  },
  {
    naam: 'OsmoPure 4-in-1 Combi',
    type: 'Osmose + ontkalker combi',
    capaciteitL: '8-15 L/dag (drinkwater)',
    zoutMaand: '0 kg',
    aanschaf: '€800-1.200',
    prijsJaar: '€100-160 (filters)',
    highlight: false,
    label: 'Drinkwater',
  },
];

export default function WaterOntkalkerVergelijkenPage() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontkalker', url: 'https://waterfilterplatform.nl/waterontkalker' },
          { name: 'Vergelijken', url: 'https://waterfilterplatform.nl/waterontkalker/vergelijken' },
        ]}
      />
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterontkalker vergelijken: beste modellen 2026',
          description:
            'Vergelijk de beste waterontkalkers van 2026 op capaciteit, zoutverbruik, prijs en type. Inclusief vergelijkingstabel met 6 modellen.',
          datePublished: '2026-05-01',
          dateModified: '2026-05-16',
          url: 'https://waterfilterplatform.nl/waterontkalker/vergelijken',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontkalker" className="hover:text-[#005F8A]">Waterontkalker</Link>
            <span className="mx-2">/</span>
            <span>Vergelijken</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterontkalker vergelijken: beste modellen 2026
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Welke waterontkalker past het beste bij uw huishouden? We vergelijken 6 representatieve
            modellen op capaciteit, zoutverbruik, aanschafprijs en jaarlijkse kosten — van compact
            single-tank tot twin-tank en osmose combinaties.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#vergelijking"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar vergelijkingstabel &rarr;
            </Link>
            <Link
              href="/waterontkalker/kopen"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Koopgids 2026
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />

        <QuickAnswer answer="De beste waterontkalker voor een gemiddeld gezin is een vraaggestuurde single-tank ionenwisselaar van 15-20 liter harsvolume. Twin-tank modellen leveren continu zacht water maar kosten meer. Zoutloze systemen (TAC) beschermen leidingen maar maken water niet chemisch zacht. Osmose is de beste aanvulling voor drinkwater." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#criteria" className="hover:underline">Wat bepaalt de keuze?</a></li>
            <li><a href="#vergelijking" className="hover:underline">6-modellen vergelijkingstabel</a></li>
            <li><a href="#single-vs-twin" className="hover:underline">Single-tank vs twin-tank</a></li>
            <li><a href="#huren-vs-kopen" className="hover:underline">Huren vs. kopen</a></li>
            <li><a href="#osmose" className="hover:underline">Osmose als alternatief</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Criteria */}
        <section id="criteria">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat bepaalt de keuze?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Drie factoren bepalen welke waterontkalker het beste bij u past:
          </p>
          <div className="space-y-4">
            {[
              {
                nr: '1',
                titel: 'Gezinsgrootte en waterverbruik',
                tekst: 'Een persoon verbruikt gemiddeld 120-150 liter water per dag. Bij 4 personen is dat 480-600 liter per dag. Kies een ontkalker waarvan de netto dagcapaciteit bij uw lokale hardheid minimaal gelijk is aan dit verbruik, zodat het systeem niet meer dan eens per 5-7 dagen hoeft te regenereren.',
              },
              {
                nr: '2',
                titel: 'Waterhardheid in uw gemeente',
                tekst: 'Hoe harder het water, hoe sneller het harsbed verzadigt en hoe vaker regeneratie nodig is. In zones met water harder dan 20 °dH is een grotere hars of een twin-tank systeem verstandig. In zones met matig hard water (10-15 °dH) volstaat een compact systeem. Bekijk de waterhardheid per gemeente via onze waterhardheidskaart.',
              },
              {
                nr: '3',
                titel: 'Budget en gebruik (huur vs. koop)',
                tekst: 'Aanschaf geeft de laagste kosten op lange termijn maar vereist een hogere initiaalinvestering. Huren spreidt de kosten maar is over 10 jaar duurder. Als u niet lang op hetzelfde adres woont, of als service en onderhoud geen gedoe mogen zijn, kan huren interessant zijn.',
              },
            ].map(k => (
              <div key={k.nr} className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-sm">{k.nr}</div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{k.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{k.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            6 modellen vergeleken: capaciteit, zout en prijs
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hieronder vergelijken we zes representatieve modellen die het huidige marktaanbod weerspiegelen.
            Prijzen zijn richtprijzen exclusief installatie.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Model</th>
                  <th className="py-2.5 px-3 font-semibold text-left">Type</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Zout/maand</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Aanschaf</th>
                  <th className="py-2.5 px-3 font-semibold text-right">Prijs/jaar</th>
                </tr>
              </thead>
              <tbody>
                {modellen.map((m, i) => (
                  <tr
                    key={m.naam}
                    className={`border-b border-gray-100 ${m.highlight ? 'bg-[#E0F2FE]' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="py-2.5 px-3">
                      <span className="font-medium text-gray-900">{m.naam}</span>
                      {m.label && (
                        <span className="ml-2 text-xs bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full">{m.label}</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{m.type}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700 text-xs">{m.zoutMaand}</td>
                    <td className="py-2.5 px-3 text-right font-medium text-[#005F8A]">{m.aanschaf}</td>
                    <td className="py-2.5 px-3 text-right text-gray-600 text-xs">{m.prijsJaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-6">
            Richtprijzen op basis van marktprijzen 2026. Prijs/jaar = zout + onderhoud + energie. Installatiekosten (€200-400) niet inbegrepen.
          </p>

          <div className="space-y-4">
            {modellen.map(m => (
              <div key={m.naam} className={`rounded-2xl border p-4 ${m.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{m.naam}</h3>
                  <span className="font-bold text-[#005F8A] text-sm">{m.aanschaf}</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">{m.type} &mdash; Capaciteit: {m.capaciteitL}</p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Zoutverbruik:</span> {m.zoutMaand} &mdash;{' '}
                  <span className="font-medium">Jaarkosten gebruik:</span> {m.prijsJaar}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Single vs twin */}
        <section id="single-vs-twin">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Single-tank vs. twin-tank: wanneer welke?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het grootste praktische verschil tussen single- en twin-tank ontkalkers is de beschikbaarheid
            van zacht water tijdens de regeneratiecyclus.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">Single-tank</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="text-green-700">&#10003; Lagere aanschafprijs (€500-1.200)</li>
                <li className="text-green-700">&#10003; Kleinere ruimtebehoefte</li>
                <li className="text-green-700">&#10003; Voldoende voor 1-4 personen</li>
                <li className="text-gray-500">&#8722; Geen zacht water tijdens regeneratie (nacht)</li>
              </ul>
            </div>
            <div className="bg-[#E0F2FE] rounded-xl p-5 border border-[#005F8A]/20">
              <h3 className="font-bold text-[#003F5C] mb-2">Twin-tank</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="text-green-700">&#10003; 24/7 continu zacht water</li>
                <li className="text-green-700">&#10003; Lagere piekbelasting per tank</li>
                <li className="text-green-700">&#10003; Ideaal voor grote gezinnen en bedrijven</li>
                <li className="text-gray-500">&#8722; Hogere aanschaf (€900-1.800)</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor de gemiddelde Nederlandse woning met 2-4 bewoners en een nachtelijk waterverbruik van
            nagenoeg nul is een single-tank ontkalker met nachtelijke regeneratie de meest kosteneffectieve
            keuze. Twin-tank wordt aanbevolen bij 5+ bewoners, bij hogere waterhardheid (&gt;20 °dH) of
            wanneer 24-uurs beschikbaarheid van zacht water vereist is.
          </p>
        </section>

        {/* Huren vs kopen */}
        <section id="huren-vs-kopen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Huren vs. kopen van een waterontkalker</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Aspect</th>
                  <th className="py-2.5 px-3 font-semibold">Huren</th>
                  <th className="py-2.5 px-3 font-semibold">Kopen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Initiaalkosten', 'Laag (€0-100 installatie)', 'Hoog (€700-1.800)'],
                  ['Maandkosten', '€15-30/mnd', '€10-25/mnd (zout + energie)'],
                  ['10-jaar TCO', '€1.800-3.600', '€1.400-3.000'],
                  ['Onderhoud', 'Inbegrepen', 'Eigen rekening of servicecontract'],
                  ['Flexibiliteit', 'Opzegbaar', 'Mee te nemen bij verhuizing'],
                  ['Eigendom', 'Nee', 'Ja'],
                ].map(([aspect, huren, kopen], i) => (
                  <tr key={aspect} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-800">{aspect}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{huren}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{kopen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Over 10 jaar is kopen bijna altijd goedkoper dan huren. Huren heeft echter als voordeel
            dat onderhoud, service en eventuele vervanging zijn inbegrepen. Dit is met name aantrekkelijk
            voor mensen die regelmatig verhuizen of die de techniek liever uitbesteden. Lees meer op
            de{' '}
            <Link href="/waterontkalker/kopen" className="text-[#005F8A] underline hover:no-underline">
              koopgids voor waterontkalkers
            </Link>
            .
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Osmose als aanvulling */}
        <section id="osmose">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Osmose als complete drinkwateroplossing
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterontkalker behandelt al het water in huis maar verbetert de drinkwaterkwaliteit
            verder niet. Als u ook chloor, nitraten, pesticiden of PFAS wilt verwijderen, is een{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline hover:no-underline">
              omgekeerde-osmosefilter
            </Link>{' '}
            aan de keukenkraan de ideale aanvulling.
          </p>
          <div className="bg-[#E0F2FE] border border-[#005F8A]/20 rounded-2xl p-5">
            <p className="font-semibold text-[#003F5C] mb-2">Beste combinatie voor optimaal water</p>
            <ul className="space-y-1.5 text-sm text-gray-700 mb-4">
              <li>&#10003; Waterontkalker (ionenwisseling) voor leidingen, cv-ketel en wasmachine</li>
              <li>&#10003; Osmosefilter onder aanrecht voor drinkwater en koken</li>
              <li>&#10003; Resultaat: zacht leidingwater + 99% zuiver drinkwater</li>
            </ul>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose systemen bekijken &rarr;
            </Link>
          </div>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterontkalker', label: 'Waterontkalker overzicht' },
              { href: '/waterontkalker/kopen', label: 'Koopgids waterontkalker 2026' },
              { href: '/waterontkalker/kosten', label: 'Totale kosten waterontkalker' },
              { href: '/waterontkalker/werking', label: 'Hoe werkt een waterontkalker?' },
              { href: '/waterontkalker/soorten', label: 'Soorten waterontkalkers' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose filter' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>&rarr;</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over waterontkalkers vergelijken
          </h2>
          <div className="space-y-3">
            {faqItems.map(item => (
              <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">&#9662;</span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/waterontharder/werking" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Hoe werkt een waterontharder?</h3>
            <p className="text-sm text-gray-600">Begrijp het werkingsprincipe achter ontharders voor een betere vergelijking.</p>
          </Link>
          <Link href="/filtertechnieken/ionenwisseling" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Ionenwisseling uitgelegd</h3>
            <p className="text-sm text-gray-600">De techniek achter de meeste waterontkalkers: hoe ionen worden uitgewisseld.</p>
          </Link>
          <Link href="/stoffen-in-drinkwater/kalk-mineralen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Kalk en mineralen in drinkwater</h3>
            <p className="text-sm text-gray-600">Waarom kalk een probleem is en welke mineralen u wilt behouden.</p>
          </Link>
          <Link href="/keuzehulp/hard-water" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Keuzehulp bij hard water</h3>
            <p className="text-sm text-gray-600">Weet u niet welke ontkalker bij uw waterhardheid past? Onze keuzehulp helpt.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" variant="compact" />

      </div>
    </>
  );
}
