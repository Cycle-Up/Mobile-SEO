import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Zoutloze waterontharder: werkt het echt? (2026)',
  description:
    'Zoutloze waterontharder: wat werkt en wat niet? Vergelijking van TAC, magnetische en citroenzuur-systemen. Wetenschappelijk bewijs, wie baat heeft en wanneer ionenwisselaar beter is.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterontharder/zoutloos' },
  openGraph: {
    title: 'Zoutloze waterontharder: werkt het echt? (2026)',
    description:
      'TAC, magnetisch of citroenzuurdosering — welke zoutloze waterontharder werkt echt? Wetenschappelijk bewijs, vergelijkingstabel en duidelijk advies voor Nederlandse consumenten.',
    url: 'https://waterfilterplatform.nl/waterontharder/zoutloos',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Werkt een zoutloze waterontharder echt?',
    answer:
      'Dat hangt af van wat je met "werken" bedoelt. TAC-systemen (Template Assisted Crystallization) laten enig wetenschappelijk bewijs zien voor minder kalkafzetting in leidingen en de cv-ketel. Magnetische apparaten hebben nauwelijks wetenschappelijk bewijs. Geen van beide verwijdert de kalk chemisch — het water blijft hard. Voor echt zacht water, minder zeepgebruik, zacht haar en huid is alleen een ionenwisselaar effectief.',
  },
  {
    question: 'Wat is het verschil tussen een TAC-systeem en een ionenwisselaar?',
    answer:
      'Een ionenwisselaar verwijdert calcium- en magnesiumionen volledig uit het water door ze te vervangen door natriumionen. Het water is chemisch zacht. Een TAC-systeem (Template Assisted Crystallization) verandert de kristalstructuur van calcium zodat het minder aan leidingen hecht — maar de calcium blijft in het water. Het water is nog steeds hard in chemische zin, maar veroorzaakt minder kalkaanslag op oppervlakken en in leidingen.',
  },
  {
    question: 'Wat is TAC (Template Assisted Crystallization)?',
    answer:
      'TAC is een filtertechnologie waarbij water langs kleine polymeerbolletjes stroomt. Deze bolletjes fungeren als "templates" of mallen waarop calciumkristallen groeien tot een specifieke grootte. Die kristallen lossen los van het template en stromen mee in het water als microscopisch kleine deeltjes. Doordat ze al in kristalvorm zijn, hechten ze minder makkelijk aan leidingen en verwarmingselementen. De calciumconcentratie in het water blijft ongewijzigd.',
  },
  {
    question: 'Hebben magnetische waterbehandeling-apparaten wetenschappelijk bewijs?',
    answer:
      'Heel beperkt. De meeste peer-reviewed studies naar magnetische waterbehandeling tonen geen significant aantoonbaar effect op kalkaanslag. De hypothese — dat een magnetisch veld de kristalstructuur van calcium verandert — heeft geen robuuste wetenschappelijke onderbouwing. Magnetische apparaten zijn goedkoop en makkelijk te installeren, maar de effectiviteit voor leidingbescherming of waterontharding is onzeker.',
  },
  {
    question: 'Is citroenzuurdosering een waterontharder?',
    answer:
      'Nee. Citroenzuurdosering is een onderhoudsmethode, geen onthardingssysteem. Citroenzuur lost bestaande kalkafzetting op en kan via automatische doseerapparaten periodiek worden toegediend aan leidingwater. Het voorkomt geen nieuwe kalkaanslag op dezelfde manier als een ontharder. Citroenzuur werkt als onderhoud voor bestaande installaties, niet als alternatief voor ontharding.',
  },
  {
    question: 'Kan ik een zoutloze waterontharder installeren als huurder?',
    answer:
      'Ja, dat is juist het voordeel. TAC-systemen worden in-line op de waterleiding geplaatst zonder afvoer en zonder elektriciteit. Ze zijn relatief klein en eenvoudig te installeren. Magnetische apparaten klemmen of klikken op de buitenkant van de leiding — geen ingrijpende installatie vereist. Controleer altijd je huurcontract, maar doorgaans zijn dit kleine hulpmiddelen die geen structurele wijziging van de leiding vereisen.',
  },
  {
    question: 'Welke EU of Nederlandse certificering geldt voor zoutloze systemen?',
    answer:
      'Er is geen specifieke Europese of Nederlandse certificering die de effectiviteit van zoutloze waterbehandeling beoordeelt. NSF/ANSI 61 toetst materiaalprestaties (geen giftige stoffen afgeven aan drinkwater), niet effectiviteit. NSF/ANSI 44 geldt alleen voor ionenwisselaars. Wees kritisch op marketingclaims over certificeringen bij zoutloze systemen — vraag naar specifieke test- en certificeringsrapporten.',
  },
  {
    question: 'Voor wie is een zoutloze waterbehandeling wél nuttig?',
    answer:
      'TAC-systemen zijn nuttig als je (1) als huurder geen ionenwisselaar kunt installeren, (2) je cv-ketel en leidingen wilt beschermen tegen kalkafzetting, (3) geen natrium wilt toevoegen aan je water en (4) bereid bent om de beperktere effectiviteit te accepteren. Wat TAC niet biedt: zacht waswater, zacht haar/huid, minder zeepgebruik, of bescherming voor het volledige huishoudelijke watergebruik.',
  },
];

const technologieën = [
  {
    naam: 'TAC (Template Assisted Crystallization)',
    werkwijze: 'Calcium en magnesium worden omgezet in microscopische kristallen die niet aan leidingen en oppervlakken hechten. De hardheidsionen blijven in het water.',
    effectiviteitKalk: 'Matig — leidingbescherming aangetoond in sommige studies',
    effectiviteitOntharding: 'Geen — water blijft chemisch hard',
    wetenschappelijkBewijs: 'Beperkt positief voor leidingen, gemengd voor apparaten',
    kosten: '€ 200 – 700',
    installatieGemak: 'Goed — in-line, geen elektriciteit, geen afvoer',
    highlight: true,
  },
  {
    naam: 'Magnetisch / Elektromagnetisch',
    werkwijze: 'Een magnetisch of elektromagnetisch veld zou de kristalstructuur van calciumdeeltjes veranderen. Apparaat klempt of kleeft op de buitenkant van de leiding.',
    effectiviteitKalk: 'Onzeker — weinig consistente resultaten',
    effectiviteitOntharding: 'Geen',
    wetenschappelijkBewijs: 'Zeer beperkt — de meeste studies tonen geen significant effect',
    kosten: '€ 20 – 200',
    installatieGemak: 'Uitstekend — geen leidingwerk nodig',
    highlight: false,
  },
  {
    naam: 'Citroenzuur dosering',
    werkwijze: 'Automatisch doseerapparaat voegt periodiek citroenzuur toe aan het leidingwater. Citroenzuur lost bestaande kalkafzetting op.',
    effectiviteitKalk: 'Goed als onderhoud, niet als preventie',
    effectiviteitOntharding: 'Geen',
    wetenschappelijkBewijs: 'Citroenzuur lost kalk op — dit is chemisch bewezen; als preventie beperkt getest',
    kosten: '€ 150 – 500 (systeem) + doseermiddel',
    installatieGemak: 'Matig — vereist stroomaansluiting en navulling',
    highlight: false,
  },
];

const vergelijkingstabel = [
  {
    aspect: 'Verwijdert hardheidsionen (Ca²⁺, Mg²⁺)',
    tac: '—',
    magnetisch: '—',
    citroenzuur: '—',
    ionenwisselaar: '✓',
    osmose: '✓',
  },
  {
    aspect: 'Voorkomt kalkaanslag in leidingen',
    tac: 'Deels',
    magnetisch: 'Onzeker',
    citroenzuur: 'Deels',
    ionenwisselaar: '✓',
    osmose: '✓',
  },
  {
    aspect: 'Zacht waswater / douche',
    tac: '—',
    magnetisch: '—',
    citroenzuur: '—',
    ionenwisselaar: '✓',
    osmose: 'Alleen drinkwater',
  },
  {
    aspect: 'Geen zoutgebruik',
    tac: '✓',
    magnetisch: '✓',
    citroenzuur: '✓',
    ionenwisselaar: '—',
    osmose: '✓',
  },
  {
    aspect: 'Geen natrium in drinkwater',
    tac: '✓',
    magnetisch: '✓',
    citroenzuur: '✓',
    ionenwisselaar: '—',
    osmose: '✓',
  },
  {
    aspect: 'Installatie zonder loodgieter',
    tac: '✓',
    magnetisch: '✓',
    citroenzuur: 'Deels',
    ionenwisselaar: '—',
    osmose: '✓',
  },
  {
    aspect: 'Verwijdert ook chloor / PFAS',
    tac: '—',
    magnetisch: '—',
    citroenzuur: '—',
    ionenwisselaar: '—',
    osmose: '✓',
  },
  {
    aspect: 'Sterke wetenschappelijke onderbouwing',
    tac: 'Beperkt',
    magnetisch: '—',
    citroenzuur: 'Beperkt',
    ionenwisselaar: '✓',
    osmose: '✓',
  },
  {
    aspect: 'Aanschafkosten',
    tac: '€ 200–700',
    magnetisch: '€ 20–200',
    citroenzuur: '€ 150–500',
    ionenwisselaar: '€ 500–1.600',
    osmose: '€ 150–900',
  },
];

export default function WaterontharderZoutloosPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterontharder', url: 'https://waterfilterplatform.nl/waterontharder' },
          { name: 'Zoutloos', url: 'https://waterfilterplatform.nl/waterontharder/zoutloos' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Zoutloze waterontharder: werkt het echt? (2026)',
          description:
            'TAC, magnetisch of citroenzuurdosering — welke zoutloze waterontharder werkt echt? Wetenschappelijk bewijs, vergelijkingstabel en duidelijk advies.',
          datePublished: '2026-04-22',
          url: 'https://waterfilterplatform.nl/waterontharder/zoutloos',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterontharder" className="hover:text-[#005F8A]">Waterontharder</Link>
            <span className="mx-2">/</span>
            <span>Zoutloos</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Zoutloze waterontharder: werkt het echt? (2026)
          </h1>

          {/* QuickAnswer */}
          <div className="bg-white border border-[#005F8A]/30 rounded-xl p-4 mb-6">
            <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-1">Snel antwoord</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Zoutloze systemen verwijderen kalk niet — ze veranderen de kristalstructuur zodat kalk minder hecht aan leidingen. TAC heeft enig wetenschappelijk bewijs voor leidingbescherming; magnetische apparaten nauwelijks. Voor echt zacht water is alleen een ionenwisselaar effectief.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#technologieen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              De 3 technologieën →
            </Link>
            <Link
              href="/waterontharder/vergelijken"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Waterontharders vergelijken
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#wat-claimen" className="hover:underline">Wat claimen zoutloze systemen?</a></li>
            <li><a href="#technologieen" className="hover:underline">De 3 technologieën</a></li>
            <li><a href="#tac-uitleg" className="hover:underline">Hoe werkt TAC?</a></li>
            <li><a href="#groot-verschil" className="hover:underline">Het cruciale verschil</a></li>
            <li><a href="#wetenschap" className="hover:underline">Wat zegt de wetenschap?</a></li>
            <li><a href="#vergelijking" className="hover:underline">Vergelijkingstabel</a></li>
            <li><a href="#wie-baat" className="hover:underline">Wie heeft baat?</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* Wat claimen */}
        <section id="wat-claimen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat claimen zoutloze waterontharders?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Fabrikanten van zoutloze waterbehandeling beloven het beste van twee werelden: kalkbescherming zonder het milieubezwaar van zoutgebruik, zonder natriumtoevoeging aan het drinkwater en zonder dure installatie op de hoofdleiding. Dat klinkt aantrekkelijk — maar de claims variëren sterk in nauwkeurigheid en wetenschappelijke onderbouwing.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De kernvraag is: verwijdert een zoutloos systeem de kalk uit het water, of verandert het alleen de gedragskenmerken van kalkkristallen? Het antwoord is voor alle zoutloze systemen hetzelfde: kalk wordt <strong>niet</strong> verwijderd. Het water blijft chemisch hard. Wat sommige systemen wel kunnen: de manier waarop kalkkristallen zich gedragen in leidingen en op verwarmingselementen beïnvloeden.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Belangrijk:</strong> De term "waterontharder" voor zoutloze systemen is technisch gezien onjuist. Een ontharder verwijdert hardheidsionen. Zoutloze systemen zijn waterbehandelingsapparaten die kalkaanslag kunnen verminderen, maar het water niet zacht maken.
          </div>
        </section>

        {/* De 3 technologieën */}
        <section id="technologieen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            De 3 hoofdtechnologieën voor zoutloze waterbehandeling
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Op de Nederlandse markt zijn drie zoutloze technologieën beschikbaar, elk met een andere werkwijze, kostenstructuur en effectiviteit.
          </p>
          <div className="space-y-5">
            {technologieën.map(t => (
              <div
                key={t.naam}
                className={`rounded-2xl border p-5 ${t.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{t.naam}</h3>
                    {t.highlight && (
                      <span className="text-xs bg-[#005F8A] text-white px-2 py-0.5 rounded-full">Meest onderzocht</span>
                    )}
                  </div>
                  <span className="font-bold text-[#005F8A] text-sm shrink-0">{t.kosten}</span>
                </div>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">{t.werkwijze}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white/60 rounded-lg p-2">
                    <p className="text-gray-400 text-xs mb-0.5">Kalkbescherming</p>
                    <p className="font-medium text-gray-800 text-xs">{t.effectiviteitKalk}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-2">
                    <p className="text-gray-400 text-xs mb-0.5">Ontharding</p>
                    <p className="font-medium text-gray-800 text-xs">{t.effectiviteitOntharding}</p>
                  </div>
                  <div className="bg-white/60 rounded-lg p-2 col-span-2 sm:col-span-1">
                    <p className="text-gray-400 text-xs mb-0.5">Installatie</p>
                    <p className="font-medium text-gray-800 text-xs">{t.installatieGemak}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3 border-t border-gray-200 pt-2">
                  <span className="font-semibold">Wetenschap:</span> {t.wetenschappelijkBewijs}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TAC uitleg */}
        <section id="tac-uitleg">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe werkt TAC (Template Assisted Crystallization)?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            TAC is de meest bestudeerde zoutloze waterbehandelingstechnologie. Het systeem bestaat uit een filter gevuld met kleine polymeerbolletjes met een specifiek oppervlak. Water stroomt langs deze bolletjes en de opgeloste calcium- en magnesiumionen hechten tijdelijk aan het oppervlak van de bolletjes.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Op het oppervlak van elk bolletje groeien calciumkristallen tot een bepaalde grootte — dit zijn de "templates". Wanneer de kristallen groot genoeg zijn lossen ze los en stromen als microscopisch kleine, stabiele kristaldeeltjes mee in het water. Deze al-gekristalliseerde deeltjes hechten minder gemakkelijk aan leidingen, boilers en verwarmingselementen dan de onbehandelde opgeloste calciumionen zouden doen.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-4">
            <h3 className="font-semibold text-[#003F5C] mb-2">Het cruciale onderscheid</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-700 mb-1">Ionenwisselaar</p>
                <p className="text-gray-600">Calcium en magnesium worden <strong>verwijderd</strong> uit het water. Natriumionen komen ervoor in de plaats. Water is chemisch zacht: TDS van kalk is gedaald.</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">TAC-systeem</p>
                <p className="text-gray-600">Calcium en magnesium <strong>blijven in het water</strong>. TDS is ongewijzigd. Alleen de kristalstructuur is veranderd zodat kalk minder hecht aan oppervlakken.</p>
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Dit heeft directe implicaties voor wat TAC kan en niet kan. TAC kan leidingen en cv-ketelwarmtewisselaars beschermen. TAC zal geen verschil maken voor zeepgebruik, huid- en haarverzorging, of de witte vlekken op badkamertegels — want daarvoor is echt zacht water nodig.
          </p>
        </section>

        {/* Het grote verschil */}
        <section id="groot-verschil">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Het grote verschil: ionenwisseling vs. kristalmodificatie
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Veel consumenten denken dat een zoutloos systeem dezelfde resultaten geeft als een ionenwisselaar, maar dan zonder de nadelen van zoutgebruik. Dit is een misverstand. De twee technologieën lossen fundamenteel verschillende problemen op.
          </p>
          <div className="grid grid-cols-1 gap-4 mb-6">
            {[
              {
                label: 'Ionenwisseling (met zout)',
                items: [
                  'Verwijdert Ca²⁺ en Mg²⁺ — water is chemisch zacht',
                  'Zeepschuim verbetert, zacht gevoel op huid en haar',
                  'Geen witte kalkranden op douche, tegels en kranen',
                  'Zachter waswater, minder wasmiddel nodig',
                  'Beschermt leidingen EN huishoudapparaten',
                  'Vereist zout, water en professionele installatie',
                ],
                positive: true,
              },
              {
                label: 'Zoutloze behandeling (TAC/magnetisch)',
                items: [
                  'Kalk blijft in het water — geen chemische ontharding',
                  'Geen verschil voor zeep, huid of haar',
                  'Kalkranden op tegels en glas blijven zichtbaar',
                  'Geen verbetering waswater',
                  'Beperkte bescherming cv-ketel en leidingen (TAC)',
                  'Geen zout, eenvoudige installatie, lagere aanschaf',
                ],
                positive: false,
              },
            ].map(col => (
              <div
                key={col.label}
                className={`rounded-xl border p-5 ${col.positive ? 'border-[#005F8A]/30 bg-[#E0F2FE]' : 'border-gray-200 bg-gray-50'}`}
              >
                <h3 className="font-bold text-gray-900 mb-3 text-sm">{col.label}</h3>
                <ul className="space-y-1.5">
                  {col.items.map(item => (
                    <li key={item} className={`text-xs flex items-start gap-2 ${col.positive ? 'text-green-800' : 'text-gray-600'}`}>
                      <span className="shrink-0 mt-0.5">{col.positive ? '✓' : '—'}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Wat zegt de wetenschap */}
        <section id="wetenschap">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wat zegt de wetenschap over zoutloze waterbehandeling?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Het wetenschappelijk onderzoek naar de drie technologieën loopt sterk uiteen in kwaliteit en conclusies.
          </p>
          <div className="space-y-4">
            {[
              {
                titel: 'TAC: gemengd maar deels positief bewijs',
                inhoud:
                  'Meerdere gecontroleerde studies, waaronder onderzoek door de Colorado School of Mines en door onafhankelijke testinstituten, tonen aan dat TAC-systemen effectief kunnen zijn in het verminderen van kalkaanslag in waterleidingen. De effectiviteit voor huishoudapparaten (waterkokers, koffiezetapparaten, boilers) is minder consistent. Resultaten hangen sterk af van de waterhardheid, stroomsnelheid en de kwaliteit van de TAC-media.',
              },
              {
                titel: 'Magnetisch: zeer beperkt wetenschappelijk bewijs',
                inhoud:
                  'De wetenschappelijke literatuur over magnetische waterbehandeling is overwegend negatief of inconcllusief. Een meta-analyse van 34 studies gepubliceerd in het Journal of Water Treatment vond geen reproduceerbaar, statistisch significant effect op kalkaanslag. De hypothese dat een magnetisch veld de kristalstructuur van calcium langdurig verandert, mist solide theoretische en experimentele onderbouwing.',
              },
              {
                titel: 'Citroenzuur: werkzaam als onderhoud, niet als preventie',
                inhoud:
                  'Citroenzuur lost calciumcarbonaat chemisch op — dit is wetenschappelijk niet controversieel. Als onderhoudsmiddel is het effectief. Als preventiesysteem (continu doseren) zijn de langetermijnresultaten onzeker en zijn er vragen over de lichte verlaging van de pH die het veroorzaakt en de effecten op leiding- en apparatuurmaterialen over langere tijd.',
              },
            ].map(s => (
              <div key={s.titel} className="border border-gray-100 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{s.titel}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.inhoud}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EU/NL certificering */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Certificering in Nederland en de EU
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De certificeringsituatie voor zoutloze waterbehandeling is complex. Er bestaat geen Europese of Nederlandse norm die de bewezen effectiviteit van TAC, magnetische of citroenzuursystemen certificeert. Normen zoals NSF/ANSI 61 (materiaalveiligheid — geen giftige stoffen afgeven) en NSF/ANSI 44 (van toepassing op ionenwisselaars) gelden niet voor zoutloze systemen.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Veel fabrikanten van zoutloze systemen verwijzen naar keurmerken die uitsluitend de materiaalkwaliteit of de productconstructie beoordelen, niet de effectiviteit van waterbehandeling. Wees kritisch: vraag altijd naar onafhankelijke testrapporten die specifiek de kalkbeschermende werking van het systeem aantonen onder vergelijkbare wateromstandigheden als in jouw regio.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
            <strong>Tip:</strong> De waterhardheid in jouw gemeente is bepalend voor de relevantie van elk kalkbeschermingssysteem. Controleer de{' '}
            <Link href="/waterhardheid" className="text-[#005F8A] underline hover:no-underline">
              waterhardheid per gemeente
            </Link>{' '}
            om te beoordelen of enige vorm van waterbehandeling voor jou zinvol is.
          </div>
        </section>

        {/* Vergelijkingstabel */}
        <section id="vergelijking">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Vergelijkingstabel: alle technieken naast elkaar
          </h2>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Kenmerk</th>
                  <th className="py-2.5 px-3 font-semibold text-center">TAC</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Magnetisch</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Citroenzuur</th>
                  <th className="py-2.5 px-3 font-semibold text-center bg-[#005F8A]">Ionenwissel.</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Osmose</th>
                </tr>
              </thead>
              <tbody>
                {vergelijkingstabel.map((r, i) => (
                  <tr key={r.aspect} className={i % 2 === 0 ? 'bg-white border-b border-gray-100' : 'bg-gray-50 border-b border-gray-100'}>
                    <td className="py-2.5 px-3 font-medium text-gray-700 text-xs">{r.aspect}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.tac}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.magnetisch}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.citroenzuur}</td>
                    <td className="py-2.5 px-3 text-center text-xs font-medium text-[#005F8A]">{r.ionenwisselaar}</td>
                    <td className="py-2.5 px-3 text-center text-xs">{r.osmose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Wie heeft baat */}
        <section id="wie-baat">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Wie heeft baat bij een zoutloos systeem?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Een zoutloos systeem is nuttig in specifieke situaties, maar is voor veel gebruikers niet de juiste keuze als ze verwachten dat het werkt als een volwaardige waterontharder.
          </p>
          <div className="space-y-4">
            {[
              {
                situatie: 'Huurder die leidingen wil beschermen',
                aanbeveling: 'TAC-systeem kan zinvol zijn',
                uitleg:
                  'Als huurder kun je geen ionenwisselaar installeren op de hoofdleiding. Een TAC-systeem op de koudwaterinvoer van je woning biedt enige bescherming voor leidingen en de cv-ketel, zonder toestemming van de verhuurder voor leidingwijzigingen.',
              },
              {
                situatie: 'Milieubewuste eigenaar, geen echte ontharding nodig',
                aanbeveling: 'TAC kan een compromis zijn',
                uitleg:
                  'Als je het milieubezwaar van zout- en waterverbruik zwaar laat wegen maar wel de cv-ketel wilt beschermen, kan TAC een acceptabel compromis zijn. Verwacht geen zachter water of minder zeepgebruik.',
              },
              {
                situatie: 'Eigenaar die echt zacht water wil',
                aanbeveling: 'Ionenwisselaar is de enige keuze',
                uitleg:
                  'Voor zachte huid, minder zeepgebruik, geen kalkranden op badkamer en douche, zacht waswater en volledige bescherming van alle huishoudapparaten is een ionenwisselaar de enige effectieve technologie. Bekijk onze{" "}vergelijkingspagina voor de beste modellen.',
              },
              {
                situatie: 'Klein huishouden, drinkwater prioriteit',
                aanbeveling: 'Osmose is waarschijnlijk beter',
                uitleg:
                  'Als je primair zuiver, kalkarm drinkwater wilt, is een omgekeerde osmose filter een betere en often goedkopere keuze. Osmose verwijdert calcium, magnesium, chloor en andere verontreinigingen uit het drinkwater.',
              },
            ].map(w => (
              <div key={w.situatie} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{w.situatie}</p>
                <p className="text-xs text-[#005F8A] font-medium mb-2">{w.aanbeveling}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{w.uitleg}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Aanbeveling */}
        <section className="bg-gradient-to-br from-[#E0F2FE] to-white border border-[#005F8A]/20 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">
            Eindadvies: wanneer welke technologie?
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            <strong>Voor echt zacht water:</strong> Kies een ionenwisselaar — de enige technologie die water chemisch onthardt. Vergelijk modellen op onze{' '}
            <Link href="/waterontharder/vergelijken" className="text-[#005F8A] underline hover:no-underline">
              waterontharder vergelijkingspagina
            </Link>.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            <strong>Voor leidingbescherming zonder zout:</strong> Een TAC-systeem kan nuttig zijn als je geen ionenwisselaar kunt of wilt installeren. Verwacht geen zachter water.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            <strong>Voor puur drinkwater:</strong> Overweeg een osmose filter — dit verwijdert kalk, chloor, nitraten en PFAS uit het drinkwater zonder enig zoutgebruik.
          </p>
          <Link
            href="/omgekeerde-osmose/kopen"
            className="inline-block bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
          >
            Osmose systemen bekijken →
          </Link>
        </section>

        <CTABanner context="waterhardheid" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterontharder/vergelijken', label: 'Waterontharder vergelijken: beste modellen 2026' },
              { href: '/waterontharder/kopen', label: 'Waterontharder kopen: complete koopgids' },
              { href: '/waterontharder/kosten', label: 'Waterontharder kosten en TCO' },
              { href: '/waterontharder/zout', label: 'Waterontharder zout: soorten en gebruik' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose filter kopen als alternatief' },
              { href: '/waterhardheid', label: 'Waterhardheid in jouw gemeente' },
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

        {/* FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over zoutloze waterontharders
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
