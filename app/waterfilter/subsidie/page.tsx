import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Waterfilter subsidie 2026: overheidsbijdrage voor waterfilterinstallatie?',
  description:
    'Is er subsidie voor een waterfilter in Nederland in 2026? Overzicht van beschikbare regelingen, ISDE-regeling, gemeentelijke bijdragen en fiscale voordelen.',
  alternates: { canonical: 'https://waterfilterplatform.nl/waterfilter/subsidie' },
  openGraph: {
    title: 'Waterfilter subsidie 2026: overheidsbijdrage voor waterfilterinstallatie?',
    description:
      'Waterfilters vallen momenteel niet onder de ISDE-regeling. Maar gemeentelijke bijdragen, BTW-voordeel en zakelijke aftrek maken aanschaf alsnog aantrekkelijk.',
    url: 'https://waterfilterplatform.nl/waterfilter/subsidie',
    type: 'article',
  },
};

const faqItems = [
  {
    question: 'Is er subsidie voor een waterfilter in Nederland in 2026?',
    answer:
      'Er is in 2026 geen landelijke subsidie specifiek voor waterfilters. De ISDE-regeling (Investeringssubsidie Duurzame Energie en Energiebesparing) dekt waterfilters niet, tenzij ze onderdeel zijn van een gecertificeerde duurzame-energieinstallatie. Sommige gemeenten in PFAS-hotspots of gebieden met putwater bieden lokale vergoedingen of kortingen aan. Controleer uw gemeente voor specifieke regelingen.',
  },
  {
    question: 'Valt een waterfilter onder de ISDE-regeling?',
    answer:
      'Nee. De ISDE-regeling subsidieert installaties voor duurzame energie (zonneboilers, warmtepompen, biomassaketels) en energie-isolatie. Waterfilters vallen hier niet onder, ook niet als ze energiebesparing opleveren via minder waterkoking. Een waterfilter die gekoppeld is aan een warmtepomp of duurzame energieinstallatie kan in sommige gevallen meelopen, maar dit is situatiespecifiek en uitzonderlijk.',
  },
  {
    question: 'Welke gemeenten vergoeden waterfilters?',
    answer:
      'Gemeenten in PFAS-hotspots (delen van Noord-Brabant en Zuid-Holland nabij industriegebieden) en gebieden met putwater bieden soms subsidie of vergoeding voor drinkwateronderzoek en -filtering. Voorbeelden: sommige Noord-Brabantse gemeenten vergoeden putwatertests en basisfiltratie. Dit varieert sterk per gemeente en per jaar. Raadpleeg het loket van uw gemeente of de provinciale milieuwebsite.',
  },
  {
    question: 'Kan ik BTW-voordeel halen uit de aanschaf van een waterfilter?',
    answer:
      'Een waterfilter valt onder het reguliere 21% BTW-tarief. Als de installatie onderdeel is van een grotere woningverbetering die via een aannemer wordt uitgevoerd, kan het totale project mogelijk onder het verlaagde 9% BTW-tarief vallen als de woning ouder dan 2 jaar is. Dit is echter afhankelijk van hoe de aannemer de werkzaamheden categoriseert en vraagt afstemming met de Belastingdienst.',
  },
  {
    question: 'Is een waterfilter voor kantoor aftrekbaar als bedrijfskosten?',
    answer:
      'Ja. Een waterfilter voor zakelijk gebruik (kantoor, horeca, bedrijf) is volledig aftrekbaar als bedrijfskost. Dit geldt voor zowel de aanschaf als de jaarlijkse filtervervanging en onderhoudskosten. U kunt ook de BTW terugvorderen als uw bedrijf BTW-plichtig is. Dit maakt een zakelijke waterfilter aanzienlijk goedkoper dan een prive-aanschaf.',
  },
  {
    question: 'Wat is de SEEH-subsidie en geldt die voor waterfilters?',
    answer:
      'De SEEH (Subsidie Energiebesparing Eigen Huis) was een regeling voor energie-isolerende maatregelen. Waterfilters vallen hier niet onder. De SEEH is in 2023 opgegaan in de ISDE. Voor woninggebonden waterbehandelingsinstallaties bestaat geen vergelijkbare nationale subsidieregeling in 2026.',
  },
  {
    question: 'Wanneer is een waterfilter financieel rendabel zonder subsidie?',
    answer:
      'Een gemiddeld gezin van 3 personen geeft jaarlijks 600-1.200 euro uit aan flessenwater of filterkannen. Een osmosefilter kost inclusief installatie 400-800 euro, met jaarlijkse filterkosten van 50-100 euro. Break-even is bereikt na 1-2 jaar ten opzichte van flessenwater. Ten opzichte van een filterkan (kosten 100-150 euro/jaar voor cartridges) is break-even na 3-5 jaar. Zonder subsidie is de investering voor drinkwatergebruikers vrijwel altijd financieel aantrekkelijk.',
  },
  {
    question: 'Hoe vraag ik gemeentelijke subsidie aan voor een waterfilter?',
    answer:
      'Controleer eerst of uw gemeente een regeling heeft via de gemeentelijke website (zoek op "drinkwater subsidie" of "waterfilter vergoeding"). In PFAS-gebieden kunt u ook de GGD of provinciale omgevingsdienst raadplegen. Als een regeling bestaat, vraagt u deze meestal aan via het gemeentelijke subsidieloket met een offerte van de installateur en bewijs van de waterkwaliteitsmeting.',
  },
];

export default function WaterfilterSubsidiePage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          { name: 'Subsidie', url: 'https://waterfilterplatform.nl/waterfilter/subsidie' },
        ]}
      />
      <SchemaOrg
        type="Article"
        article={{
          title: 'Waterfilter subsidie 2026: overheidsbijdrage voor waterfilterinstallatie?',
          description:
            'Overzicht van subsidie en fiscale voordelen voor waterfilterinstallatie in Nederland in 2026.',
          datePublished: '2026-05-01',
          url: 'https://waterfilterplatform.nl/waterfilter/subsidie',
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/waterfilter" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span className="mx-2">/</span>
            <span>Subsidie</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Waterfilter subsidie 2026: overheidsbijdrage voor waterfilterinstallatie?
          </h1>

          {/* QuickAnswer */}
          <div className="bg-white border border-[#005F8A]/30 rounded-xl p-4 mb-6">
            <p className="text-xs font-semibold text-[#005F8A] uppercase tracking-wide mb-1">Snel antwoord</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Er is in 2026 geen nationale subsidie voor waterfilters. ISDE-regeling dekt waterfilters niet. Wel zijn er gemeentelijke bijdragen in PFAS-gebieden, zakelijke aftrek als bedrijfskost, en mogelijke BTW-voordelen bij woningverbetering. Break-even zonder subsidie is 1-3 jaar.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#regelingen"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Overzicht regelingen &rarr;
            </Link>
            <Link
              href="#rendabel"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Break-even berekening
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-14">

        {/* Inhoudsopgave */}
        <section className="bg-gray-50 rounded-2xl p-5">
          <p className="font-semibold text-[#003F5C] mb-3 text-sm uppercase tracking-wide">Op deze pagina</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-[#005F8A] list-decimal list-inside">
            <li><a href="#isde" className="hover:underline">ISDE-regeling en waterfilters</a></li>
            <li><a href="#regelingen" className="hover:underline">Gemeentelijke regelingen</a></li>
            <li><a href="#btw" className="hover:underline">BTW-voordeel bij woningverbetering</a></li>
            <li><a href="#zakelijk" className="hover:underline">Zakelijk: volledige aftrek</a></li>
            <li><a href="#aanvragen" className="hover:underline">Hoe subsidie aanvragen</a></li>
            <li><a href="#rendabel" className="hover:underline">Break-even zonder subsidie</a></li>
            <li><a href="#tips" className="hover:underline">Tips voor optimale financiering</a></li>
            <li><a href="#faq" className="hover:underline">Veelgestelde vragen</a></li>
          </ol>
        </section>

        {/* ISDE */}
        <section id="isde">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            ISDE-regeling: waterfilters vallen er niet onder
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            De ISDE-regeling (Investeringssubsidie Duurzame Energie en Energiebesparing) is de voornaamste nationale subsidieregeling voor verduurzaming van woningen. De regeling subsidieert warmtepompen, zonneboilers, biomassaketels en isolatiemaatregelen.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-900">
            <strong>Duidelijk antwoord:</strong> Waterfilters vallen in 2026 niet onder de ISDE-regeling, ook niet als ze onderdeel zijn van een keukenrenovatie of duurzame installatie. De ISDE focust op energie-gerelateerde investeringen; waterkwaliteit valt buiten dit kader.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Wat valt WEL onder ISDE?</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Warmtepompen</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Zonneboilers</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Biomassaketels</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">&#10003;</span> Warmte-terugwinning douche</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-2 text-sm">Wat valt NIET onder ISDE?</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">&mdash;</span> Waterontharders</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">&mdash;</span> Osmosefilters</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">&mdash;</span> Koolstoffilters</li>
                <li className="flex items-start gap-2"><span className="text-gray-400 shrink-0">&mdash;</span> Filterkannen</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gemeentelijke regelingen */}
        <section id="regelingen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Gemeentelijke regelingen: PFAS-hotspots en putwater
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hoewel er geen nationale subsidie is, bieden sommige gemeenten wel lokale bijdragen voor waterkwaliteitsmaatregelen. Dit geldt met name voor gebieden met PFAS-verontreiniging of voor huishoudens met putwater.
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                situatie: 'PFAS-hotspots (Noord-Brabant, delen Zuid-Holland)',
                regeling: 'Sommige gemeenten vergoeden putwatertests en PFAS-tests geheel of gedeeltelijk. In ernstige gevallen wordt bijdrage aan filterinstallatie verleend via de GGD of provinciale omgevingsdienst.',
                actie: 'Raadpleeg gemeentelijke milieuafdeling of GGD voor huidige regelingen.',
              },
              {
                situatie: 'Putwater-eigenaren (prive-waterwinning)',
                regeling: 'Meerdere gemeenten ondersteunen putwater-eigenaren bij waterkwaliteitsonderzoek. In sommige gevallen worden filterinstallaties gedeeltelijk vergoed als de waterkwaliteit onder drinkwaternormen zit.',
                actie: 'Vraag aan bij gemeente of waterschap voor putwater-ondersteuningsregelingen.',
              },
              {
                situatie: 'Intensieve veeteeltgebieden (nitraat/PFAS)',
                regeling: 'In gebieden met aantoonbare nitraat- of pesticideproblematiek door landbouw zijn soms provinciale regelingen beschikbaar voor huishoudens die op eigen bron zitten.',
                actie: 'Provincie en waterschap zijn de eerste aanspreekpunten.',
              },
            ].map(r => (
              <div key={r.situatie} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{r.situatie}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{r.regeling}</p>
                <p className="text-xs text-[#005F8A] font-medium">{r.actie}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BTW voordeel */}
        <section id="btw">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            BTW-voordeel bij woningverbetering
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterfilter valt normaal gesproken onder het hoge BTW-tarief van 21%. Maar als de installatie onderdeel is van een grotere woningverbetering door een erkende aannemer, kan het verlaagde BTW-tarief van 9% van toepassing zijn.
          </p>
          <div className="bg-[#E0F2FE] rounded-xl p-5 mb-6">
            <h3 className="font-semibold text-[#003F5C] mb-2">Voorwaarden voor 9% BTW</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-[#005F8A] shrink-0">&#10003;</span> Woning is ouder dan 2 jaar (nieuwbouw altijd 21%)</li>
              <li className="flex items-start gap-2"><span className="text-[#005F8A] shrink-0">&#10003;</span> Installatie door erkende aannemer of installateur</li>
              <li className="flex items-start gap-2"><span className="text-[#005F8A] shrink-0">&#10003;</span> Waterfilter is onderdeel van grotere renovatie of keukenverbetering</li>
              <li className="flex items-start gap-2"><span className="text-[#005F8A] shrink-0">&#10003;</span> Arbeidskosten zijn hoger dan materiaalkosten op factuur</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Raadpleeg de installateur over de BTW-classificatie. Bij een gecombineerde keukeninstallatie of verbouwing kan de totale factuur onder het verlaagde tarief vallen. Het verschil is 12% op de totale installatiekosten.
          </p>
        </section>

        {/* Zakelijk */}
        <section id="zakelijk">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Zakelijk gebruik: waterfilter volledig aftrekbaar
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Voor zakelijk gebruik is een waterfilter een van de meest fiscaal aantrekkelijke investeringen. Zowel aanschaf, installatie als doorlopende onderhoudskosten zijn volledig aftrekbaar als bedrijfskost.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left py-2.5 px-3 font-semibold">Kostenpost</th>
                  <th className="py-2.5 px-3 font-semibold text-center">Zakelijk aftrekbaar?</th>
                  <th className="py-2.5 px-3 font-semibold text-left hidden sm:table-cell">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { post: 'Aanschaf waterfilter', aftrekbaar: 'Ja, volledig', toelichting: 'Als bedrijfsmiddel of directe kostenpost afhankelijk van bedrag' },
                  { post: 'Installatie', aftrekbaar: 'Ja, volledig', toelichting: 'Onderdeel van installatiekosten, direct aftrekbaar' },
                  { post: 'Jaarlijkse filtercartridges', aftrekbaar: 'Ja, volledig', toelichting: 'Periodieke onderhoudskosten, direct aftrekbaar' },
                  { post: 'BTW op aanschaf', aftrekbaar: 'Ja (BTW-plichtig)', toelichting: 'Volledige BTW-teruggave als ondernemer BTW-plichtig is' },
                  { post: 'Waterfilter thuis (thuiswerker)', aftrekbaar: 'Deels', toelichting: 'Gemengd gebruik vraagt zakelijk aandeel documenteren' },
                ].map((r, i) => (
                  <tr key={r.post} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 text-gray-800 text-xs">{r.post}</td>
                    <td className="py-2.5 px-3 text-center text-xs font-semibold text-green-700">{r.aftrekbaar}</td>
                    <td className="py-2.5 px-3 text-gray-500 text-xs hidden sm:table-cell">{r.toelichting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Aanvragen */}
        <section id="aanvragen">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Hoe subsidie aanvragen: stap voor stap
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Als u vermoedt dat uw gemeente een regeling heeft, volgt u dit stappenplan om subsidie aan te vragen.
          </p>
          <div className="space-y-3">
            {[
              {
                stap: 'Stap 1: Controleer uw gemeente',
                actie: 'Zoek op de gemeentelijke website op "waterfilter subsidie", "drinkwater vergoeding" of "putwater bijdrage". U kunt ook bellen met de milieuafdeling of het subsidieloket.',
              },
              {
                stap: 'Stap 2: Waterkwaliteitstest laten uitvoeren',
                actie: 'Veel regelingen vereisen een officieel waterkwaliteitsrapport als bewijs dat filtering noodzakelijk is. Dit kunt u aanvragen via het waterschap of een gecertificeerd laboratorium.',
              },
              {
                stap: 'Stap 3: Offerte opvragen bij gecertificeerde installateur',
                actie: 'Vraag een gespecificeerde offerte met BTW-breakdown. Sommige gemeenten vereisen een installateur die op hun goedgekeurde lijst staat.',
              },
              {
                stap: 'Stap 4: Subsidieaanvraag indienen voor installatie',
                actie: 'Dien de aanvraag in VOOR u de investering doet. Achteraf subsidiering is zelden mogelijk. Bijvoegen: offerte, waterkwaliteitsrapport, bewijs eigendom/huurovereenkomst.',
              },
              {
                stap: 'Stap 5: Installatie en declaratie',
                actie: 'Na goedkeuring kunt u installeren. Bewaar de factuur en eventuele installatiecertificaten voor de eindafrekening van de subsidie.',
              },
            ].map(s => (
              <div key={s.stap} className="border border-gray-100 rounded-xl p-4 bg-white">
                <p className="font-semibold text-gray-900 mb-1 text-sm">{s.stap}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{s.actie}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Break-even */}
        <section id="rendabel">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Break-even berekening: rendabel zonder subsidie?
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Een waterfilter is ook zonder subsidie voor de meeste gezinnen financieel aantrekkelijk. De terugverdientijd hangt af van uw huidige watergebruik.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-6">
            <table className="w-full min-w-[440px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-2.5 px-3 font-semibold text-[#003F5C]">Vergelijking</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Jaarkosten</th>
                  <th className="py-2.5 px-3 font-semibold text-[#003F5C] text-right">Break-even</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { vergelijking: 'Osmosefilter vs. flessenwater (gezin 3p.)', jaarkosten: 'Besparing ~900 euro/j.', breakeven: '~1 jaar' },
                  { vergelijking: 'Osmosefilter vs. filterkan', jaarkosten: 'Besparing ~120 euro/j.', breakeven: '4-6 jaar' },
                  { vergelijking: 'Koolstoffilter vs. flessenwater', jaarkosten: 'Besparing ~800 euro/j.', breakeven: '&lt;1 jaar' },
                  { vergelijking: 'Osmosefilter (zakelijk, 5 pers.)', jaarkosten: 'Besparing ~1.500 euro/j.', breakeven: '&lt;1 jaar' },
                ].map((r, i) => (
                  <tr key={r.vergelijking} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="py-2.5 px-3 text-gray-800 text-xs">{r.vergelijking}</td>
                    <td className="py-2.5 px-3 text-right font-semibold text-[#005F8A] text-xs whitespace-nowrap">{r.jaarkosten}</td>
                    <td className="py-2.5 px-3 text-right text-gray-700 text-xs font-medium whitespace-nowrap">{r.breakeven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De berekening laat zien dat een waterfilter ook zonder overheidssubsidie voor gezinnen die flessenwater kopen de meest aantrekkelijke investering is. De terugverdientijd is vergelijkbaar met of sneller dan de meeste gesubsidieerde verduurzamingsmaatregelen.
          </p>
        </section>

        {/* Tips */}
        <section id="tips">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Tips voor optimale financiering van uw waterfilter
          </h2>
          <div className="space-y-3">
            {[
              'Combineer de aankoop met een keukenrenovatie of woningverbetering voor maximaal BTW-voordeel via de aannemer.',
              'Vraag bij uw gemeente specifiek naar PFAS- of putwater-regelingen; deze zijn minder bekend maar bestaan in meerdere provincies.',
              'Kies als ZZP\'er of ondernemer altijd voor een zakelijke factuur en boek het filter als bedrijfskosten.',
              'Vraag meerdere offertes op; sommige leveranciers bieden subsidie-assistentie of financieringsopties aan.',
              'Controleer of uw energieleverancier of nutsbedrijf een verduurzamingslening of kortingsregeling heeft voor waterfilters.',
              'Sluit een onderhoudsabonnement af: de jaarlijkse kosten zijn volledig aftrekbaar (zakelijk) en voorspelbaar.',
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3 border border-gray-100 rounded-xl p-4 bg-white">
                <span className="text-[#005F8A] font-bold text-sm shrink-0">{i + 1}.</span>
                <p className="text-sm text-gray-600 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <CTABanner context="osmose" />

        {/* Interne links */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/waterfilter/vergelijken', label: 'Waterfilters vergelijken: welk systeem past?' },
              { href: '/waterfilter/kopen', label: 'Waterfilter kopen: complete gids 2026' },
              { href: '/waterfilter/milieu', label: 'Waterfilter en milieu: duurzamer dan flessenwater?' },
              { href: '/omgekeerde-osmose', label: 'Omgekeerde osmose: hoe werkt het?' },
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
            Veelgestelde vragen over waterfilter subsidie
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

      </div>
    </>
  );
}
