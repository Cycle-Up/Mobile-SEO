import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export const metadata: Metadata = {
  title: 'Drinkwater kwaliteitsrapport: zo lees je het rapport van uw waterbedrijf',
  description:
    'Wat staat er in het jaarlijkse drinkwater kwaliteitsrapport van uw waterbedrijf? Leer welke parameters tellen, waar u het rapport vindt (Vitens, Evides, PWN) en wanneer onafhankelijk testen zin heeft.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwater/kwaliteitsrapport' },
  openGraph: {
    title: 'Drinkwater kwaliteitsrapport: zo lees je het rapport van uw waterbedrijf',
    description:
      'Overzicht van alle Nederlandse waterbedrijven, welke parameters echt tellen (E.coli, nitraat, lood, PFAS, hardheid), wat "voldoet aan de norm" niet zegt en wanneer u zelf moet testen.',
    url: 'https://waterfilterplatform.nl/drinkwater/kwaliteitsrapport',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Waar vind ik het kwaliteitsrapport van mijn drinkwaterbedrijf?',
    answer:
      'Elk drinkwaterbedrijf is wettelijk verplicht een jaarlijks kwaliteitsrapport te publiceren. U vindt het op de website van uw waterbedrijf: Vitens.nl, Evides.nl, PWN.nl, Dunea.nl, BrabantWater.nl, WML.nl, Oasen.nl, WaterbedrijfGroningen.nl en Waternet.nl. Zoek op de homepage naar "kwaliteitsrapport", "drinkwaterkwaliteit" of "transparantierapport".',
  },
  {
    question: 'Wat betekent "voldoet aan de norm" in een drinkwaterrapport?',
    answer:
      '"Voldoet aan de norm" betekent dat de gemeten waarden onder de wettelijke grenswaarden liggen die zijn vastgesteld in het Drinkwaterbesluit. Het zegt echter niets over: de kwaliteit van uw huisleidingen (niet getest in het rapport), kortetermijnpieken in verontreiniging (het rapport toont jaargemiddelden), stoffen die nog niet gereguleerd zijn (nieuwe PFAS-verbindingen, farmaceutische residuen) en biologische risico\'s na ingang van de huisaansluiting.',
  },
  {
    question: 'Welke parameters in het drinkwaterrapport zijn het meest belangrijk?',
    answer:
      'De meest relevante parameters zijn: E.coli (0 per 100 mL — teken van fecale besmetting), nitraat (max 50 mg/L, risico voor baby\'s), lood aan de tap (max 10 µg/L, risico oude woningen), hardheid (informeel, voor kalk), PFAS (wordt steeds vaker gerapporteerd: richtwaarde 0,1 µg/L totaal PFAS), turbiditeit (troebelheid) en pH. E.coli en lood zijn de twee parameters met de grootste gezondheidsimplicaties.',
  },
  {
    question: 'Wat doet het waterbedrijf als een parameter de norm overschrijdt?',
    answer:
      'Een overschrijding is zeldzaam in Nederland — het systeem wordt streng gemonitord. Als een overschrijding wordt gedetecteerd, informeert het waterbedrijf de gemeente en bewoners via de media, past de zuivering aan of geeft een kookadvies als direct risico aanwezig is. Langdurige overschrijdingen kunnen leiden tot een drinkwaterverbod voor de betreffende levering.',
  },
  {
    question: 'Staan microplastics en farmaceutische residuen in het kwaliteitsrapport?',
    answer:
      'Niet standaard. Microplastics zijn nog niet opgenomen in de wettelijk verplichte metingen van het Drinkwaterbesluit. Sommige waterbedrijven (zoals Vitens en PWN) publiceren vrijwillig onderzoeksresultaten voor microplastics en geneesmiddelenresten, maar dit is geen standaard vereiste. Wil u zekerheid? Laat een onafhankelijke analyse uitvoeren door een gecertificeerd laboratorium (Kiwa, SGS).',
  },
  {
    question: 'Wanneer is onafhankelijk drinkwatertesten zinvol?',
    answer:
      'Onafhankelijk testen is zinvol in de volgende situaties: (1) woning gebouwd vóór 1960 met mogelijk loden leidingen, (2) eigen waterput of regenwater als drinkwaterbron, (3) baby in het huishouden (verhoogde gevoeligheid voor nitraten en lood), (4) immuungecompromitteerd gezinslid, (5) afwijkende geur, kleur of smaak van kraanwater die het waterbedrijf niet kan verklaren, (6) overschrijdingen gemeld in uw postcodegebied.',
  },
  {
    question: 'Hoe kan ik mijn drinkwater zelf testen op hardheid en nitraat?',
    answer:
      'Eenvoudige DIY-testsets voor hardheid (druppeltest of teststrook) zijn beschikbaar voor €5–15 in tuincentra en drogisterijen. Nitrate-teststroken (voor aquaria maar ook bruikbaar voor drinkwater) kosten €10–25 voor een set. Voor lood en PFAS zijn alleen gecertificeerde laboratoriumanalyses betrouwbaar. Stuur een waterstaal naar Kiwa, SGS of een regionaal laboratorium: kosten €30–150 afhankelijk van de analyse.',
  },
  {
    question: 'Filtert mijn waterbedrijf al PFAS uit het drinkwater?',
    answer:
      'Nederlandse waterbedrijven zijn verplicht te voldoen aan de Europese drinkwaternorm voor PFAS (0,1 µg/L totaal PFAS per 1 januari 2026). Bedrijven die grondwater uit PFAS-belaste gebieden winnen, passen aanvullende zuiveringstechnieken toe zoals actieve koolstoffiltratie en granulaire actieve kool. Raadpleeg het rapport van uw waterbedrijf voor specifieke PFAS-metingen in uw leveringsgebied.',
  },
];

const waterbedrijven = [
  { naam: 'Vitens', gebied: 'Noord- en Oost-Nederland (Friesland, Overijssel, Gelderland, Flevoland, Utrecht)', url: 'vitens.nl/drinkwaterkwaliteit' },
  { naam: 'Evides', gebied: 'Zeeland, delen van Zuid-Holland en Noord-Brabant', url: 'evides.nl/over-ons/drinkwaterkwaliteit' },
  { naam: 'PWN', gebied: 'Noord-Holland', url: 'pwn.nl/drinkwater/kwaliteit' },
  { naam: 'Dunea', gebied: 'Zuid-Holland (Den Haag en omstreken)', url: 'dunea.nl/drinkwater/kwaliteit-drinkwater' },
  { naam: 'Brabant Water', gebied: 'Noord-Brabant', url: 'brabantwater.nl/drinkwaterkwaliteit' },
  { naam: 'WML', gebied: 'Limburg', url: 'wml.nl/over-wml/drinkwaterkwaliteit' },
  { naam: 'Oasen', gebied: 'Midden-Holland en omgeving', url: 'oasen.nl/drinkwater/kwaliteit' },
  { naam: 'Waterbedrijf Groningen', gebied: 'Groningen en Drenthe', url: 'waterbedrijfgroningen.nl/drinkwaterkwaliteit' },
  { naam: 'Waternet', gebied: 'Amsterdam en de Amstelstreek', url: 'waternet.nl/drinkwater/kwaliteit' },
];

export default function KwaliteitsrapportPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Drinkwater', url: 'https://waterfilterplatform.nl/drinkwater' },
          { name: 'Kwaliteitsrapport', url: 'https://waterfilterplatform.nl/drinkwater/kwaliteitsrapport' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Drinkwater kwaliteitsrapport: zo lees je het rapport van uw waterbedrijf',
          description:
            'Uitleg over drinkwater kwaliteitsrapporten in Nederland: waar te vinden, welke parameters tellen, wat de normen betekenen en wanneer onafhankelijk testen zinvol is.',
          datePublished: '2026-04-18',
          url: 'https://waterfilterplatform.nl/drinkwater/kwaliteitsrapport',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/drinkwater" className="hover:text-[#005F8A]">Drinkwater</Link>
            <span className="mx-2">/</span>
            <span>Kwaliteitsrapport</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Drinkwater kwaliteitsrapport: zo leest u het rapport van uw waterbedrijf
          </h1>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Elk <strong>drinkwaterbedrijf</strong> in Nederland is wettelijk verplicht jaarlijks te rapporteren
            over de kwaliteit van het geleverde drinkwater. Maar wat staat er precies in zo&apos;n rapport?
            Welke parameters zijn relevant? En wat zegt "voldoet aan de norm" eigenlijk niet? In dit artikel
            leggen we het uit — inclusief overzicht van alle Nederlandse waterbedrijven, een gids voor de
            meest relevante parameters en advies over wanneer onafhankelijk testen zinvol is.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#parameters"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Naar parameters →
            </Link>
            <Link
              href="#waterbedrijven"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Mijn waterbedrijf vinden
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        <QuickAnswer answer="Drinkwater kwaliteitsrapporten zijn een wettelijke verplichting en beschikbaar op de website van uw waterbedrijf. Controleer E.coli (= 0), nitraat (&lt;50 mg/L), lood (&lt;10 µg/L), PFAS en hardheid. 'Voldoet aan de norm' zegt niets over huisleidingen of ongereguleerde stoffen. Bij twijfel: onafhankelijk testen via Kiwa of SGS." />

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wettelijk" className="hover:underline">Wettelijke verplichting (Drinkwaterwet)</a></li>
            <li><a href="#waterbedrijven" className="hover:underline">Overzicht waterbedrijven en rapport-URLs</a></li>
            <li><a href="#parameters" className="hover:underline">Welke parameters zijn relevant?</a></li>
            <li><a href="#norm-limiet" className="hover:underline">Wat "voldoet aan de norm" niet vertelt</a></li>
            <li><a href="#norm-overschrijding" className="hover:underline">Wat als een parameter de norm overschrijdt?</a></li>
            <li><a href="#ontbrekend" className="hover:underline">Ontbrekende parameters in standaardrapporten</a></li>
            <li><a href="#testen" className="hover:underline">Wanneer en hoe onafhankelijk testen?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wettelijk */}
        <section id="wettelijk">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wettelijke verplichting: de Drinkwaterwet en het Drinkwaterbesluit
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De kwaliteitsrapportage van drinkwaterbedrijven is geregeld in de <strong>Drinkwaterwet</strong>
            (in werking getreden in 2011, herzien in 2023 ter implementatie van de Europese Drinkwaterrichtlijn
            2020/2184). Op basis van deze wet zijn drinkwaterbedrijven verplicht:
          </p>
          <ul className="space-y-2 mb-5 text-gray-700">
            {[
              'Jaarlijks te rapporteren over de gemeten kwaliteitsparameters in het geleverde water',
              'De rapportages openbaar te maken via hun website',
              'Bewoners te informeren bij (dreigende) normoverschrijdingen',
              'Steekproefsgewijze metingen uit te voeren op het distributienet en aan de tap van consumenten',
              'Resultaten te melden aan de Inspectie Leefomgeving en Transport (ILT)',
            ].map(p => (
              <li key={p} className="flex gap-2 text-sm">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>{p}
              </li>
            ))}
          </ul>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <p className="font-semibold text-[#003F5C] mb-1">Wat is het Drinkwaterbesluit?</p>
            <p>
              Het Drinkwaterbesluit is de uitwerking van de Drinkwaterwet in concrete grenswaarden voor
              meer dan 50 parameters. Het besluit is gebaseerd op de WHO-richtlijnen en de Europese
              Drinkwaterrichtlijn. Nieuwe grenswaarden worden periodiek bijgesteld als nieuwe wetenschappelijke
              inzichten beschikbaar komen — wat voor consumenten betekent dat grenswaarden achterop kunnen
              lopen bij nieuwe verontreinigingen zoals PFAS.
            </p>
          </div>
        </section>

        {/* Waterbedrijven */}
        <section id="waterbedrijven">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Overzicht Nederlandse waterbedrijven en waar u hun rapport vindt
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Nederland heeft negen drinkwaterbedrijven die samen de hele bevolking van drinkwater voorzien.
            Elk bedrijf publiceert een eigen kwaliteitsrapport. Hieronder een overzicht per bedrijf, het
            verzorgingsgebied en de algemene URL van het kwaliteitsrapport.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[500px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Waterbedrijf</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Verzorgingsgebied</th>
                  <th className="text-left py-2.5 px-3 font-semibold">Rapport te vinden op</th>
                </tr>
              </thead>
              <tbody>
                {waterbedrijven.map((w, i) => (
                  <tr key={w.naam} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A]">{w.naam}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-600">{w.gebied}</td>
                    <td className="py-2.5 px-3 text-xs text-gray-500">{w.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">
            Zeker weten welk bedrijf uw water levert? Kijk op uw water- of energierekening of zoek uw postcode op via
            de website van de ILT (Inspectie Leefomgeving en Transport).
          </p>
        </section>

        {/* Parameters */}
        <section id="parameters">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welke parameters in het kwaliteitsrapport zijn het meest relevant?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Een drinkwaterkwaliteitsrapport bevat tientallen parameters. Niet alle parameters zijn even
            relevant voor uw dagelijkse drinkwaterkeuze. Hieronder de parameters die voor consumenten
            de grootste gezondheidsimplicaties hebben, met de Nederlandse norm en uitleg:
          </p>
          <div className="space-y-4">
            {[
              {
                param: 'E. coli',
                norm: '0 KVE per 100 mL',
                uitleg: 'E. coli is een indicator voor fecale verontreiniging. De norm is strikt nul: elke detectie leidt tot direct onderzoek en eventuele maatregelen. In de praktijk is de kans op E. coli in Nederlands leidingwater extreem klein. Een detectie is zeldzaam maar serieus.',
                kleur: 'border-red-200 bg-red-50',
                label: 'Kritisch',
              },
              {
                param: 'Nitraat',
                norm: 'Max 50 mg/L',
                uitleg: 'Nitraten in drinkwater zijn een risico voor baby\'s jonger dan 6 maanden: ze kunnen methemoglobinemia ("blauwe baby syndroom") veroorzaken. In gebieden met intensieve landbouw kan nitraat in grondwater hoger zijn. Osmosefilters verwijderen nitraat effectief (&gt;90%).',
                kleur: 'border-amber-200 bg-amber-50',
                label: 'Let op met baby\'s',
              },
              {
                param: 'Lood (aan de tap)',
                norm: 'Max 10 µg/L (norm aangescherpt per 2026)',
                uitleg: 'Lood wordt niet door het waterbedrijf in het drinkwater gestopt, maar kan oplossen uit loden huisleidingen in woningen gebouwd vóór 1960. Het rapport meet lood in het distributienet, niet aan uw specifieke tap. In oudere woningen is een eigen loodmeting zinvol.',
                kleur: 'border-red-200 bg-red-50',
                label: 'Kritisch in oude woningen',
              },
              {
                param: 'Hardheid (CaCO₃ / °dH)',
                norm: 'Geen wettelijke norm; informeel 8–20 °dH gewenst',
                uitleg: 'Waterhardheid is geen gezondheidsrisico maar beïnvloedt wel de levensduur van huishoudapparatuur, het gebruik van wasmiddelen en de smaak van koffie/thee. Boven 15 °dH loont investering in een waterontharder of osmosefilter om kalkaanslag te voorkomen.',
                kleur: 'border-blue-200 bg-blue-50',
                label: 'Comfort & apparatuur',
              },
              {
                param: 'PFAS (som-PFAS)',
                norm: 'Max 0,1 µg/L (Europese norm per 2026)',
                uitleg: 'PFAS zijn persistente organische verbindingen ("forever chemicals") die in toenemende mate in Nederlands drinkwater worden aangetroffen, met name in grondwater nabij PFAS-bronnen (industrie, Defensie, vliegvelden). Niet alle waterbedrijven rapporteren PFAS standaard. Vraag uw waterbedrijf specifiek naar PFAS-metingen in uw regio.',
                kleur: 'border-amber-200 bg-amber-50',
                label: 'Actueel zorgpunt',
              },
              {
                param: 'Turbiditeit (troebelheid)',
                norm: 'Max 1 NTU',
                uitleg: 'Turbiditeit meet de troebelheid van het water. Verhoogde turbiditeit kan wijzen op sediment in het leidingnet of microbiologische verontreiniging. Normaal leidingwater is helder. Zichtbaar troebel water uit de kraan moet altijd worden gemeld bij uw waterbedrijf.',
                kleur: 'border-gray-200 bg-gray-50',
                label: 'Indicatief',
              },
            ].map(p => (
              <div key={p.param} className={`rounded-xl border p-4 ${p.kleur}`}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <p className="font-semibold text-gray-900">{p.param}</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs font-mono bg-white px-2 py-0.5 rounded border border-gray-200">{p.norm}</span>
                    <span className="text-xs font-semibold bg-white/80 px-2 py-0.5 rounded">{p.label}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{p.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Wat de norm niet vertelt */}
        <section id="norm-limiet">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat "voldoet aan de norm" níet vertelt
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Het feit dat een kwaliteitsrapport vermeldt dat alle parameters "voldoen aan de norm" is geruststellend
            maar onvolledig. Er zijn vier belangrijke kanttekeningen die consumenten moeten begrijpen:
          </p>
          <div className="space-y-4">
            {[
              {
                titel: 'Huisleidingen worden niet getest',
                tekst: 'Het waterbedrijf meet de kwaliteit van het water dat het distributienet verlaat — niet het water dat uit uw specifieke kraan komt. Lood, koper of zink kan oplossen uit de leidingen bínnen uw woning, met name na stilstand \'s nachts. In woningen gebouwd vóór 1960 is dit een reëel risico.',
              },
              {
                titel: 'Het rapport toont jaargemiddelden',
                tekst: 'Kwaliteitsrapporten presenteren gemiddelde waarden over het kalenderjaar. Kortetermijn-pieken (na hevige regenval die het grondwater beïnvloedt, of na onderhoud van het leidingnet) worden hierin gemiddeld weg. Uw persoonlijke risico kan op een specifiek moment hoger liggen dan de jaargemiddelden suggereren.',
              },
              {
                titel: 'Ongereguleerde stoffen staan er niet in',
                tekst: 'Alleen parameters die zijn opgenomen in het Drinkwaterbesluit zijn wettelijk verplicht te meten. Nieuwe PFAS-verbindingen, farmaceutische residuen, microplastics en hormoonverstoorders zijn (deels) nog niet in het besluit opgenomen. Dit betekent niet dat ze afwezig zijn — alleen dat ze niet gemeten of gerapporteerd hoeven te worden.',
              },
              {
                titel: 'Normen zijn gebaseerd op gemiddeld gebruik',
                tekst: 'Drinkwaternormen worden vastgesteld op basis van een gemiddelde volwassen consument. Baby\'s, zwangere vrouwen en immuungecompromitteerde personen zijn gevoeliger voor bepaalde stoffen (nitraten, microbiologische verontreinigingen, lood). Voor deze groepen zijn de wettelijke normen mogelijk onvoldoende beschermend.',
              },
            ].map((k, i) => (
              <div key={k.titel} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{k.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{k.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Overschrijding */}
        <section id="norm-overschrijding">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat gebeurt er als een parameter de norm overschrijdt?
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Normoverschrijdingen in het Nederlandse drinkwaternet zijn zeldzaam, dankzij het uitgebreide
            monitoringssysteem. Toch kan het voorkomen — bij calamiteiten, na extreme neerslag of als
            verontreinigingen worden aangetroffen in een winning. Dit is de procedureketen:
          </p>
          <div className="space-y-3 mb-5">
            {[
              { stap: 'Detectie', tekst: 'Het waterbedrijf detecteert de overschrijding via routinemonitoring of alarmering vanuit het meetnet.' },
              { stap: 'Melding aan autoriteiten', tekst: 'De Inspectie Leefomgeving en Transport (ILT) en de gemeente worden onmiddellijk geïnformeerd.' },
              { stap: 'Communicatie naar bewoners', tekst: 'Bij een direct risico voor de volksgezondheid worden bewoners geïnformeerd via lokale media, het waterbedrijf\'s website en app, en eventueel brief/SMS. Een kookadvies kan worden afgegeven.' },
              { stap: 'Technische maatregelen', tekst: 'Het waterbedrijf past de zuivering aan, isoleert het betreffende netsegment of mengt met water uit een andere bron om de parameter weer onder de norm te krijgen.' },
              { stap: 'Herstelplan', tekst: 'Na de acute fase wordt een herstelplan opgesteld om herhaling te voorkomen. Structurele overschrijdingen kunnen leiden tot aanpassing van de winninglocatie of extra zuiveringsstap.' },
            ].map((s, i) => (
              <div key={s.stap} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-[#005F8A] text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-0.5">{s.stap}</p>
                  <p className="text-sm text-gray-600">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E0F2FE] rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-[#003F5C]">Wat kunt u zelf doen bij een melding?</strong> Volg het advies
            van het waterbedrijf op. Bij een kookadvies: kook water 1 minuut en laat het afkoelen voor
            gebruik als drinkwater. Bewaar geen ongekookt water in reserves. Gebruik flessenwater als tussenoplossing.
            Meld verdacht water (troebel, afwijkende geur/smaak) altijd bij uw waterbedrijf.
          </div>
        </section>

        {/* Ontbrekende parameters */}
        <section id="ontbrekend">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Parameters die niet standaard in het rapport staan maar u wél kunnen aangaan
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            De standaard kwaliteitsrapporten zijn compliant met de Drinkwaterwet, maar sommige stoffen
            die terecht zorgen wekken, zijn nog niet in de wettelijk verplichte meetlijst opgenomen.
            Hier zijn de drie meest relevante:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                stof: 'Microplastics',
                status: 'Niet wettelijk verplicht',
                beschikbaar: 'Sommige bedrijven publiceren vrijwillig onderzoeksdata (Vitens, PWN)',
                risico: 'Onduidelijk op lange termijn; NL leidingwater bevat aantoonbaar microplastics',
              },
              {
                stof: 'Farmaceutische residuen',
                status: 'Niet wettelijk verplicht',
                beschikbaar: 'KWR voert periodiek onderzoek uit; resultaten deels openbaar',
                risico: 'Zeer lage concentraties in NL drinkwater; gezondheidseffecten niet aangetoond bij drinkwaterniveaus',
              },
              {
                stof: 'Volledig PFAS-spectrum',
                status: 'Deels verplicht (som-PFAS per 2026)',
                beschikbaar: 'Sterk afhankelijk van regio en waterbedrijf',
                risico: 'Verhoogd in gebieden nabij Defensiebases, vliegvelden en industrieterreinen',
              },
            ].map(s => (
              <div key={s.stof} className="bg-white border border-gray-100 rounded-xl p-4 text-sm">
                <p className="font-bold text-gray-900 mb-2">{s.stof}</p>
                <div className="space-y-1.5">
                  <p className="text-xs"><span className="font-semibold text-gray-700">Status:</span> <span className="text-amber-700">{s.status}</span></p>
                  <p className="text-xs"><span className="font-semibold text-gray-700">Beschikbaar:</span> {s.beschikbaar}</p>
                  <p className="text-xs"><span className="font-semibold text-gray-700">Risico:</span> {s.risico}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Voor volledige zekerheid over microplastics, farmaceutische residuen en het volledige PFAS-spectrum
            in uw specifieke tap is onafhankelijk laboratoriumonderzoek de enige betrouwbare optie.
          </p>
        </section>

        <CTABanner context="osmose" />

        {/* Zelf testen */}
        <section id="testen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wanneer onafhankelijk testen zinvol is — en hoe
          </h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Voor de meeste Nederlanders is onafhankelijk testen van drinkwater niet noodzakelijk. Toch zijn
            er situaties waarbij een eigen test of laboratoriumanalyse zinvol is:
          </p>
          <div className="space-y-3 mb-6">
            {[
              {
                situatie: 'Woning gebouwd vóór 1960',
                reden: 'Mogelijke loden leidingen in de huisinstallatie. Lood kan oplossen in stilstaand water.',
                test: 'Loodanalyse via gecertificeerd lab (Kiwa, SGS): €30–60',
              },
              {
                situatie: 'Eigen waterput of regenwater',
                reden: 'Niet aangesloten op het publieke distributienet. Kwaliteit is uw eigen verantwoordelijkheid.',
                test: 'Volledig drinkwaterpakket: E.coli + nitraat + hardheid + lood: €80–150 bij Kiwa of SGS',
              },
              {
                situatie: "Baby in het huishouden",
                reden: 'Baby\'s zijn gevoeliger voor nitraten (methemoglobinemia-risico) en lood.',
                test: 'Nitraat (DIY-strip €10 of lab) + lood (lab €30–60)',
              },
              {
                situatie: 'Afwijkende geur, kleur of smaak',
                reden: 'Bruinig water = roest (oude leidingen); chloorlucht = verhoogde chloreringsdosis; rotte-eierlucht = H2S (sulfaat-reducerende bacteriën).',
                test: 'Meld eerst bij uw waterbedrijf. Bij aanhoudend probleem: uitgebreide analyse €100–200',
              },
              {
                situatie: 'PFAS-bezorging (woning nabij industrie of vliegveld)',
                reden: 'PFAS uit nabijgelegen bronnen kan in grondwater en tap terechtkomen.',
                test: 'PFAS-analyse (30+ verbindingen): €150–300 bij Kiwa of laboratoriumpartner',
              },
            ].map(s => (
              <div key={s.situatie} className="border border-gray-100 rounded-xl p-4 bg-white text-sm">
                <p className="font-semibold text-gray-900 mb-1">{s.situatie}</p>
                <p className="text-gray-600 mb-2">{s.reden}</p>
                <p className="text-[#005F8A] font-medium">{s.test}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-[#003F5C] mb-3">Testopties: van DIY tot gecertificeerd lab</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {[
              {
                type: 'DIY testsets',
                kosten: '€ 5–25',
                geschikt: 'Hardheid, nitraat (indicatief), pH, chloor',
                betrouwbaar: 'Indicatief, niet rechtsgeldig',
                waar: 'Drogisterij, tuincentrum, aquariumwinkel',
              },
              {
                type: 'Kiwa / SGS',
                kosten: '€ 30–300',
                geschikt: 'Lood, nitraat, PFAS, E.coli, volledige pakketten',
                betrouwbaar: 'Gecertificeerd, rechtsgeldig rapport',
                waar: 'kiwa.com/nl, sgs.com/nl-NL',
              },
              {
                type: 'Regionaal lab',
                kosten: '€ 40–150',
                geschikt: 'Hardheid, ijzer, mangaan, nitraat, lood',
                betrouwbaar: 'Gecertificeerd, snellere doorlooptijd',
                waar: 'Zoek op "drinkwateranalyse [uw provincie]"',
              },
            ].map(t => (
              <div key={t.type} className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-bold text-gray-900 mb-2">{t.type}</p>
                <p className="text-gray-700 mb-1"><strong>Kosten:</strong> {t.kosten}</p>
                <p className="text-gray-700 mb-1"><strong>Geschikt voor:</strong> {t.geschikt}</p>
                <p className="text-gray-600 mb-1"><strong>Betrouwbaarheid:</strong> {t.betrouwbaar}</p>
                <p className="text-[#005F8A] text-xs">{t.waar}</p>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-sm text-gray-700">
            <strong className="text-amber-900">Tip:</strong> Stuur het waterstaal bij voorkeur &apos;s ochtends vroeg
            op, na minstens 8 uur stilstand van het water in de leidingen (overnight stagnation). Dit geeft de
            hoogste concentraties van eventuele uitloging uit huisleidingen en is de worst-case beoordeling van
            uw tapwaterkwaliteit.
          </div>
        </section>

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterfilter/best-getest-2026', label: 'Beste waterfilter 2026: getest en vergeleken' },
              { href: '/omgekeerde-osmose/kosten', label: 'Osmose kosten: volledig overzicht' },
              { href: '/drinkwater/pfas', label: 'PFAS in drinkwater: wat u moet weten' },
              { href: '/drinkwater/nitraat', label: 'Nitraat in drinkwater: risico en filters' },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-sm text-[#005F8A] hover:underline bg-[#E0F2FE]/50 rounded-lg px-3 py-2"
              >
                <span>→</span> {l.label}
              </Link>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over drinkwater kwaliteitsrapporten
          </h2>
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
