import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter en gezondheid: wat filtert wat? | 2026',
  description:
    'Overzicht van gezondheidsrelevante stoffen in Nederlands kraanwater: PFAS, nitraat, lood, chloor en arseen. Per stof: aanwezig in NL, gezondheidsrisico en.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/gezondheid' },
  openGraph: {
    title: 'Waterfilter en gezondheid: wat filtert wat?',
    description:
      'PFAS, nitraat, lood, chloor en arseen in Nederlands kraanwater. Welk waterfilter verwijdert welke stof? Onze helder overzichtstabel.',
    url: 'https://waterfilterplatform.nl/waterfilter/gezondheid',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is kraanwater in Nederland veilig om te drinken?',
    answer:
      'Ja, Nederlands kraanwater behoort tot de veiligste ter wereld en voldoet aan de strenge EU-drinkwaternormen. Toch kunnen lokale factoren (oude loodleidingen, landbouwgebieden, PFAS-hotspots) de kwaliteit beïnvloeden. Een waterfilter biedt extra zekerheid, met name voor kwetsbare groepen zoals zwangere vrouwen en jonge kinderen.',
  },
  {
    question: 'Verwijdert een Brita-filterkan PFAS?',
    answer:
      'Standaard actieve koolfilters (zoals Brita) verwijderen PFAS beperkt en wisselend — effectiviteit varieert van 20% tot 60% afhankelijk van het specifieke PFAS-type en de filterleeftijd. Omgekeerde osmose verwijdert PFAS consequent voor 95–99%.',
  },
  {
    question: 'Hoe gevaarlijk is lood in kraanwater?',
    answer:
      'Lood is een neurotoxine zonder veilige ondergrens, met name voor jonge kinderen en zwangere vrouwen. De grootste bron is niet de waterlevering zelf, maar oude loodleidingen in woningen gebouwd vóór 1960. Als u twijfelt, laat het water testen of gebruik een RO-filter of gekwalificeerd koolstoffilter.',
  },
  {
    question: 'Is het chloor in kraanwater schadelijk?',
    answer:
      'Chloor in leidingwater zit onder de WHO-limiet van 0,5 mg/L en is bij die concentratie veilig. Chloor kan echter reageren met organisch materiaal en zo trihalomethanen (THM) vormen, die bij langdurige blootstelling aan hoge concentraties in verband worden gebracht met een licht verhoogd kankerrisico. Een actieve koolfilter verwijdert chloor effectief.',
  },
  {
    question: 'Wat zijn PFAS en waarom zitten ze in kraanwater?',
    answer:
      'PFAS (per- en polyfluoralkylstoffen) zijn een groep van duizenden industriële chemicaliën die worden gebruikt in antiaanbaklagen, blusschuim, textielimpregnatie en verpakkingen. Ze breken niet af in het milieu ("eeuwigdurende chemicaliën") en hebben zich via grondwater verspreid naar drinkwaterbronnen. RIVM monitoring (2023–2024) toonde PFAS-sporen aan in drinkwater van meerdere Nederlandse regio\'s.',
  },
];

const contaminantenTabel = [
  {
    stof: 'PFAS',
    aanwezig: 'Ja (sporen, meerdere regio\'s)',
    risico: 'Hormoonverstoring, immuunsysteem, kanker (hoge dosis)',
    filter: 'Omgekeerde osmose (95–99%)',
    brita: 'Beperkt (20–60%)',
    highlight: true,
  },
  {
    stof: 'Nitraat',
    aanwezig: 'Ja (landbouwgebieden)',
    risico: 'Zuurstoftekort bij zuigelingen (blauwe-babyensyndroom)',
    filter: 'Omgekeerde osmose (85–95%)',
    brita: 'Nee',
    highlight: false,
  },
  {
    stof: 'Lood',
    aanwezig: 'Ja (oude loodleidingen)',
    risico: 'Neurotoxisch, bijzonder risico kinderen',
    filter: 'RO of speciaal koolstoffilter (95–99%)',
    brita: 'Deels (60–80%)',
    highlight: false,
  },
  {
    stof: 'Chloor',
    aanwezig: 'Ja (bewust toegevoegd)',
    risico: 'THM-vorming bij hoge concentraties, smaak/geur',
    filter: 'Koolstoffilter of RO (95–99%)',
    brita: 'Ja (goed, 80–95%)',
    highlight: false,
  },
  {
    stof: 'Arseen',
    aanwezig: 'Sporadisch (lokale bronnen)',
    risico: 'Carcinogeen bij langdurige blootstelling',
    filter: 'Omgekeerde osmose (90–95%)',
    brita: 'Nee',
    highlight: false,
  },
  {
    stof: 'Microplastics',
    aanwezig: 'Ja (laag niveau)',
    risico: 'Onbekend op lange termijn; drager van toxines',
    filter: 'RO of ultrafiltratiefilter (99%+)',
    brita: 'Deels (grotere deeltjes)',
    highlight: false,
  },
  {
    stof: 'Medicijnresten',
    aanwezig: 'Sporen (hormonen, antibiotica)',
    risico: 'Hormoonverstoring, antibioticaresistentie (onderzoek loopt)',
    filter: 'Omgekeerde osmose (95–99%)',
    brita: 'Beperkt',
    highlight: false,
  },
  {
    stof: 'Kalk (Ca/Mg)',
    aanwezig: 'Ja (regionaal hoog)',
    risico: 'Geen gezondheidsrisico; schade apparaten',
    filter: 'RO of ontharder (95–99%)',
    brita: 'Deels (ionenwisseling)',
    highlight: false,
  },
];

export default function WaterfilterGezondheidsPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter en gezondheid: wat filtert wat?',
          description:
            'Overzicht van PFAS, nitraat, lood, chloor en arseen in Nederlands kraanwater — met filtertabel per stof.',
          datePublished: '2026-01-15',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/waterfilter/gezondheid',
        }}
      />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Gezondheid', url: 'https://waterfilterplatform.nl/waterfilter/gezondheid' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Gezondheid</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter en gezondheid: wat filtert wat?
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Nederlands kraanwater is van hoge kwaliteit — maar niet perfect. PFAS, nitraat, lood,
            chloor en arseen kunnen in sporen voorkomen, afhankelijk van regio, seizoen en leidingwerk.
            Op deze pagina leggen we per stof uit: zit het in ons kraanwater, wat is het risico,
            en welk waterfilter haalt het eruit?
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/omgekeerde-osmose/kopen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Osmose filter kopen →
            </Link>
            <Link
              href="/drinkwater/kwaliteit"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Drinkwaterkwaliteit Nederland
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#stoffen" className="hover:underline">Stoffen in Nederlands kraanwater</a></li>
            <li><a href="#tabel" className="hover:underline">Vergelijkingstabel per stof</a></li>
            <li><a href="#pfas" className="hover:underline">PFAS in detail</a></li>
            <li><a href="#nitraat" className="hover:underline">Nitraat en kwetsbare groepen</a></li>
            <li><a href="#lood" className="hover:underline">Lood via leidingwerk</a></li>
            <li><a href="#welk-filter" className="hover:underline">Welk filter kies je?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Stoffen overzicht */}
        <section id="stoffen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Stoffen in Nederlands kraanwater</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het RIVM en de waterbedrijven monitoren drinkwater op honderden parameters. De meeste
            stoffen zitten ver onder de wettelijke normen. Toch is de discussie over PFAS,
            medicijnresten en microplastics actueel: de normen worden aangescherpt, en sommige
            stoffen hebben geen &ldquo;veilige drempel&rdquo;.
          </p>
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Disclaimer:</strong> We maken geen medische claims.
            Kraanwater in Nederland is wettelijk veilig. De informatie hieronder is bedoeld als
            feitelijk overzicht voor bewust consumenten en kwetsbare groepen (zwangeren, jonge
            kinderen, immuungecompromitteerden).
          </div>
        </section>

        {/* Tabel */}
        <section id="tabel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Overzicht: stof, risico en filter</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Onderstaande tabel geeft per verontreiniging de aanwezigheid in Nederland, het
            gezondheidsrisico en welk filtertype het effectief verwijdert. De gemarkeerde rij
            (PFAS) verdient speciale aandacht vanwege actuele beleidsontwikkelingen.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[600px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Stof</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Aanwezig in NL?</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Gezondheidsrisico</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Welk filter?</th>
                </tr>
              </thead>
              <tbody>
                {contaminantenTabel.map(r => (
                  <tr
                    key={r.stof}
                    className={r.highlight ? 'bg-[#E0F2FE] font-medium' : 'border-b border-gray-100'}
                  >
                    <td className="py-2.5 px-3 font-semibold text-gray-900">{r.stof}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.aanwezig}</td>
                    <td className="py-2.5 px-3 text-gray-600 text-xs">{r.risico}</td>
                    <td className="py-2.5 px-3 text-gray-700 text-xs font-medium">{r.filter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Bronnen: RIVM drinkwaterrapportages, WHO Guidelines for Drinking-water Quality, EFSA PFAS-evaluatie 2020.
          </p>
        </section>

        {/* PFAS */}
        <section id="pfas">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">PFAS: de eeuwigdurende chemicaliën</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            PFAS is een verzamelnaam voor meer dan 4.700 industriële verbindingen. Ze worden gebruikt
            in antiaanbakpannen, waterafstotende kleding, blusschuim en voedselverpakkingen. Omdat
            ze chemisch extreem stabiel zijn, hopen ze zich op in het milieu en in het menselijk lichaam.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            RIVM-metingen in 2023–2024 tonen aan dat sporen van PFAS aanwezig zijn in drinkwater van
            meerdere regio&apos;s, met name in de buurt van vliegvelden, industrieterreinen en
            gebieden met intensieve brandweeractiviteit. De concentraties liggen doorgaans onder de
            EU-norm (0,1 μg/L voor de som van 20 specifieke PFAS), maar de discussie over veilige
            drempelwaarden is niet afgesloten.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Wat helpt:</strong> Omgekeerde osmose is op dit
            moment de meest effectieve consumentenoptie voor PFAS-verwijdering (95–99%). Actieve
            koolfilters geven wisselende resultaten afhankelijk van de PFAS-variant en filterleeftijd.
          </div>
        </section>

        {/* Nitraat */}
        <section id="nitraat">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Nitraat: risico voor zuigelingen</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nitraat komt uit landbouwmest en sijpelt via grondwater in drinkwaterbronnen. In intensieve
            landbouwgebieden (delen van Noord-Brabant, Limburg, Gelderland) liggen nitraatgehalten
            hoger dan het Nederlands gemiddelde. De EU-norm is 50 mg/L; voor zuigelingenvoeding
            adviseert de WHO maximaal 10 mg/L.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Gewone waterfilters en koolstoffilters verwijderen nitraat <strong>niet</strong>.
            Omgekeerde osmose haalt 85–95% nitraat weg — de enige betaalbare thuisoplossing.
          </p>
        </section>

        {/* Lood */}
        <section id="lood">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Lood: het leidingprobleem</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Nederlandse drinkwaterbedrijven leveren nagenoeg loodvrij water. Het risico zit in
            <strong> oude loodleidingen</strong> in woningen gebouwd vóór 1960 — in Amsterdam,
            Rotterdam en Den Haag zijn nog tienduizenden adressen met loodleidingen. Lood lost op
            uit leidingen, met name als water lang stilstaat.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Praktisch advies voor woningen met mogelijk loodleidingen: laat water 30–60 seconden
            doorlopen voor gebruik, of gebruik een gecertificeerd loodfilter. Omgekeerde osmose
            verwijdert 95–99% van het lood.
          </p>
        </section>

        {/* Welk filter */}
        <section id="welk-filter">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welk filter kies je voor maximale bescherming?</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Als je brede bescherming wilt — inclusief PFAS, nitraat, lood én kalk — is
            <strong> omgekeerde osmose</strong> de meest complete oplossing voor drinkwater.
            Een koolstoffilter volstaat als je alleen chloor en smaak wilt verbeteren.
          </p>
          <div className="space-y-3">
            {[
              { behoefte: 'Alleen chloor + smaak', advies: 'Koolstoffilter of filterkan', href: '/waterfilter' },
              { behoefte: 'Chloor + kalk verwijderen', advies: 'RO-systeem of ontharder + koolstoffilter', href: '/waterfilter/voor-hard-water' },
              { behoefte: 'Brede bescherming (PFAS, nitraat, lood)', advies: 'Omgekeerde osmose (4-staps of 5-staps)', href: '/omgekeerde-osmose/kopen' },
              { behoefte: 'Heel huis zacht water', advies: 'Waterontharder + RO voor keuken', href: '/waterontharder' },
            ].map(r => (
              <div key={r.behoefte} className="border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.behoefte}</p>
                  <p className="text-sm text-[#005F8A]">{r.advies}</p>
                </div>
                <Link
                  href={r.href}
                  className="text-xs font-semibold text-[#005F8A] border border-[#005F8A] px-3 py-1.5 rounded-lg hover:bg-[#E0F2FE] transition-colors shrink-0"
                >
                  Meer info →
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/stoffen-in-drinkwater/pfas-overzicht" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">PFAS in drinkwater overzicht</h3>
              <p className="text-sm text-gray-600">Wat zijn PFAS, waar komen ze voor en hoe filtert u ze weg?</p>
            </Link>
            <Link href="/filtertechnieken/omgekeerde-osmose" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Omgekeerde osmose uitleg</h3>
              <p className="text-sm text-gray-600">Hoe een osmosefilter breed beschermt tegen verontreinigingen.</p>
            </Link>
            <Link href="/drinkwaternormen" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaternormen Nederland</h3>
              <p className="text-sm text-gray-600">Alle wettelijke grenswaarden voor drinkwater op een rij.</p>
            </Link>
            <Link href="/waterfilter/microplastics" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
              <h3 className="font-semibold text-[#005F8A] mb-1">Microplastics in drinkwater</h3>
              <p className="text-sm text-gray-600">Wat zijn microplastics en welke filters houden ze tegen?</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <CTABanner context="osmose" />

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
      </div>
    </>
  );
}
