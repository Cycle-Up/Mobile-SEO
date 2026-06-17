import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { gemeenten, getGemeente, getHardheidLabel, type Gemeente } from '@/data/gemeenten';
import { clampDescription } from '@/lib/seo';

import { CTABanner } from '@/components/CTABanner';
import { AffiliateCTA } from '@/components/AffiliateCTA';
import { SchemaOrg } from '@/components/SchemaOrg';
import { GemeenteLinks } from '@/components/GemeenteLinks';

interface PageProps {
  params: Promise<{ gemeente: string }>;
}

export async function generateStaticParams() {
  return gemeenten.map(g => ({ gemeente: g.slug }));
}

function buildTitle(naam: string): string {
  const full = `Waterfilter ${naam}: welk type past bij jouw water?`;
  if (full.length <= 70) return full;
  const medium = `Waterfilter ${naam}: beste filter voor jouw water`;
  if (medium.length <= 70) return medium;
  return `Waterfilter ${naam}: welk type past?`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) return {};

  const title = buildTitle(gemeente.naam);
  const description = clampDescription(`Welk waterfilter past bij het water in ${gemeente.naam}? Hardheid ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}). Vergelijk filterkan, inline, osmose en kokendwaterkraan — en ontdek welk type het meest rendabel is.`);

  return {
    title,
    description,
    alternates: { canonical: `https://waterfilterplatform.nl/waterfilter/${gemeente.slug}` },
    openGraph: {
      title,
      description: `Waterhardheid ${gemeente.hardheid}°dH in ${gemeente.naam}: welk waterfilter past het beste? Kosten, filtertypen en installatieadvies op een rij.`,
    },
  };
}

// ─── Helper: recommended filter type per hardheid category ───────────────────

function getAanbeveling(g: Gemeente): {
  type: string;
  reden: string;
  badge: string;
  badgeColor: string;
} {
  if (g.categorie === 'zeer hard') {
    return {
      type: 'Omgekeerde osmose',
      reden: `Bij ${g.hardheid}°dH lost een gewone filterkan de kalkproblematiek niet op. Omgekeerde osmose verwijdert 95–99% van alle opgeloste stoffen, inclusief calcium, magnesium, nitraten en microplastics. Het resultaat: zacht, helder water zonder kalkaanslag in de waterkoker of koffiezetapparaat.`,
      badge: 'Sterk aanbevolen',
      badgeColor: 'bg-red-100 text-red-700 border border-red-200',
    };
  }
  if (g.categorie === 'hard') {
    return {
      type: 'Omgekeerde osmose of inline kalkfilter',
      reden: `${g.hardheid}°dH is hard genoeg om merkbare kalkaanslag te veroorzaken. Een osmosefilter geeft de beste prestatie; een inline kalkfilter (onder het aanrecht) is een budgetvriendelijker alternatief dat de hardheid significant verlaagt. Een eenvoudige filterkan is bij deze hardheid minder effectief.`,
      badge: 'Osmose of inline',
      badgeColor: 'bg-orange-100 text-orange-700 border border-orange-200',
    };
  }
  if (g.categorie === 'matig hard') {
    return {
      type: 'Inline kalkfilter of actief koolfilter',
      reden: `Met ${g.hardheid}°dH is kalk merkbaar maar niet extreem. Een inline kalkfilter of actief koolfilter verbetert de smaak en vermindert kalkaanslag. Osmose is ook mogelijk, maar een eenvoudiger systeem is hier al voldoende voor de meeste huishoudens.`,
      badge: 'Inline of actief kool',
      badgeColor: 'bg-amber-100 text-amber-700 border border-amber-200',
    };
  }
  if (g.categorie === 'matig') {
    return {
      type: 'Filterkan of actief koolfilter',
      reden: `Bij ${g.hardheid}°dH is het water aangenaam van hardheid. Een filterkan of eenvoudig actief koolfilter verbetert de smaak door chloor en smaakstoffen te verwijderen. Speciale ontharding is bij deze hardheid zelden nodig.`,
      badge: 'Filterkan volstaat',
      badgeColor: 'bg-blue-100 text-blue-700 border border-blue-200',
    };
  }
  // zacht
  return {
    type: 'Actief koolfilter + remineralisatie',
    reden: `Zacht water (${g.hardheid}°dH) bevat weinig kalk en smaakt soms 'vlak'. Een actief koolfilter met remineralisatiestap voegt gezonde mineralen terug toe en verbetert de smaak. Ontharding is hier niet nodig — het water is al zacht.`,
    badge: 'Smaakverbetering',
    badgeColor: 'bg-green-100 text-green-700 border border-green-200',
  };
}

// ─── Helper: intro text per hardheid category ─────────────────────────────────

function getIntroTekst(g: Gemeente): string {
  switch (g.categorie) {
    case 'zeer hard':
      return `Het kraanwater in ${g.naam} is met ${g.hardheid}°dH zeer hard — dat is de hoogste categorie op de Nederlandse hardheidschaal. Calcium en magnesium zitten in hoge concentraties in het water, wat leidt tot snelle kalkaanslag in waterkokers, koffiezetapparaten en leidingen. Voor wie water filtert in ${g.naam}, is de keuze van het juiste filtertype dan ook cruciaal: niet elk filter is berekend op dit harde water.`;
    case 'hard':
      return `Met ${g.hardheid}°dH valt het kraanwater in ${g.naam} in de categorie hard water. Kalkaanslag op kranen en in apparaten is een bekend fenomeen voor inwoners. Bij de keuze van een waterfilter is het belangrijk te weten dat een filterkan hier beperkt effect heeft — je hebt een sterker systeem nodig voor aantoonbare ontharding.`;
    case 'matig hard':
      return `Het kraanwater in ${g.naam} heeft een hardheid van ${g.hardheid}°dH: matig hard. Dit is het meest voorkomende segment in Nederland. De meeste standaard waterfilters presteren goed bij deze hardheid, maar de keuze tussen een filterkan, inline filter of osmosesysteem bepaalt wél hoeveel kalk je werkelijk verwijdert.`;
    case 'matig':
      return `In ${g.naam} bedraagt de waterhardheid ${g.hardheid}°dH — matig van hardheid. Kalkvorming is beperkt en het water is van nature goed drinkbaar. Een waterfilter heeft hier dan ook primair als doel de smaak te verbeteren: minder restchloor en een frisser, neutraler mondgevoel.`;
    case 'zacht':
      return `Het water in ${g.naam} is zacht: ${g.hardheid}°dH. Kalk is hier vrijwel geen issue. Wie toch filtert, doet dat voor smaakverbetering of voor extra zekerheid over microplastics en spoorvervuilingen. Bij zacht water is een remineralisatiestap aan te raden, zodat je de gewenste mineralen terugkrijgt.`;
  }
}

// ─── Helper: "installatie" tekst per hardheid ─────────────────────────────────

function getInstallatieTekst(g: Gemeente): string {
  if (g.hardheid >= 15) {
    return `Bewoners van ${g.naam} kiezen steeds vaker voor een onderbouw-osmosesysteem. Dat wordt direct onder het aanrecht gemonteerd, op de koude waterleiding, en heeft een eigen kraan op het keukenblad. Installatie duurt gemiddeld één à twee uur en vereist geen aardgas of elektra voor de waterleiding — alleen een stopcontact voor de pomp. De meeste installateurs leveren ook aan particulieren in ${g.naam}, en je kunt het systeem zelf plaatsen als je basale doe-het-zelf-vaardigheden hebt.`;
  }
  if (g.hardheid >= 12) {
    return `Een onderbouw-waterfilter in ${g.naam} is goed uitvoerbaar. Zowel inline kalkfilters als osmosesystemen worden onder het aanrecht gemonteerd. De installatie vergt geen speciale vergunning. Bij osmose heb je een stopcontact nodig (voor de pomp) en een afvoer voor het concentraatwater. De gemiddelde installatietijd is anderhalf uur.`;
  }
  return `In ${g.naam} is een onderbouw-waterfilter relatief eenvoudig te installeren. Een inline actief koolfilter heeft geen pomp of elektra nodig en past in vrijwel elk aanrechtformaat. Je hebt alleen een T-stuk op de koude waterleiding nodig en een extra kraantje op het keukenblad. De meeste producten worden geleverd met een montageset.`;
}

export default async function WaterfilterPage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const hardLabel = getHardheidLabel(gemeente.categorie);
  const introTekst = getIntroTekst(gemeente);
  const aanbeveling = getAanbeveling(gemeente);
  const installatieTekst = getInstallatieTekst(gemeente);

  const isHardWater = gemeente.hardheid >= 12;
  const isZeerHard = gemeente.hardheid >= 18;

  const faqItems = [
    {
      question: `Welk waterfilter is het beste voor ${gemeente.naam}?`,
      answer: `Voor ${gemeente.naam} (${gemeente.hardheid}°dH — ${hardLabel.toLowerCase()}) is een ${aanbeveling.type} de beste keuze. ${aanbeveling.reden}`,
    },
    {
      question: `Wat kost een waterfilter per jaar in ${gemeente.naam}?`,
      answer: `De jaarkosten hangen af van het filtertype. Een filterkan kost inclusief vervangingspatronen circa €25–€40 per jaar. Een inline onderbouwfilter zit op €40–€70 per jaar (filterwissel). Een osmosesysteem vraagt een hogere aanschaf (€200–€500) maar heeft lage exploitatiekosten van €80–€120 per jaar. Op de lange termijn is osmose dus vaak goedkoper dan flessenwater en vergelijkbaar met een inline filter.`,
    },
    {
      question: `Verwijdert een waterfilter de kalk uit het water in ${gemeente.naam}?`,
      answer: `Dat hangt af van het filtertype. Een standaard actief koolfilter (zoals in een filterkan) verbetert de smaak maar haalt weinig tot geen kalk weg. Een inline kalkfilter of ionenwisselaar verlaagt de hardheid aanzienlijk. Omgekeerde osmose is het meest effectief: het verwijdert 95–99% van calcium en magnesium. Bij ${gemeente.hardheid}°dH in ${gemeente.naam} ${isHardWater ? 'is een krachtig systeem aan te raden voor tastbare kalkreductie.' : 'is een eenvoudiger filter al voldoende voor de meeste huishoudens.'}`,
    },
    {
      question: `Kan ik een waterfilter zelf installeren in ${gemeente.naam}?`,
      answer: `Ja, de meeste waterfilters zijn doe-het-zelf te installeren. Een filterkan is direct klaar voor gebruik. Inline filters en osmosesystemen worden onder het aanrecht gemonteerd — dit vergt basisvaardigheden en duurt gemiddeld één à twee uur. Lees onze gids over ${isHardWater ? 'osmose onder het aanrecht' : 'waterfilters in de keuken'} voor stap-voor-stap instructies.`,
    },
    {
      question: `Hoe hard is het water precies in ${gemeente.naam}?`,
      answer: `Het kraanwater in ${gemeente.naam} heeft een hardheid van ${gemeente.hardheid}°dH (Duitse hardheidsgraden). Dat valt in de categorie "${hardLabel.toLowerCase()}". Het water wordt geleverd door ${gemeente.waterbedrijf}. Een volledig overzicht van waterhardheid per gemeente vind je op waterfilterplatform.nl/waterhardheid/${gemeente.slug}.`,
    },
    {
      question: `Is een osmosefilter ook geschikt voor zacht of matig hard water?`,
      answer: `Een osmosefilter werkt bij elke hardheidsgraad. Bij zacht water (zoals in ${gemeente.categorie === 'zacht' ? gemeente.naam : 'Groningen of Friesland'}) is het voornaamste argument zuiverheid en smaak, niet de ontharding. Osmose verwijdert naast kalk ook nitraten, microplastics, chloor en medicijnresten. Nadeel: osmosewater mist mineralen, vandaar dat een remineralisatiestap wordt aangeraden.`,
    },
  ];

  const naburigeGemeenten = gemeenten
    .filter(g => g.provincie === gemeente.provincie && g.slug !== gemeente.slug)
    .slice(0, 6);

  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Waterfilter', url: 'https://waterfilterplatform.nl/waterfilter' },
          {
            name: `Waterfilter ${gemeente.naam}`,
            url: `https://waterfilterplatform.nl/waterfilter/${gemeente.slug}`,
          },
        ]}
      />
      <SchemaOrg
        schema={[{
          '@type': 'Place',
          name: gemeente.naam,
          address: {
            '@type': 'PostalAddress',
            addressLocality: gemeente.naam,
            addressRegion: gemeente.provincie,
            addressCountry: 'NL',
          },
          description: `${gemeente.naam} heeft leidingwater met een hardheid van ${gemeente.hardheid}°dH (${getHardheidLabel(gemeente.categorie).toLowerCase()}), geleverd door ${gemeente.waterbedrijf}.`,
        }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>/</span>
            <Link href="/kennisbank/waterfilter-vergelijken" className="hover:text-[#005F8A]">Waterfilter</Link>
            <span>/</span>
            <span className="text-gray-600">{gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4 leading-tight">
            Waterfilter {gemeente.naam}: welk type past bij jouw water?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Het kraanwater in {gemeente.naam} heeft een hardheid van{' '}
            <strong>{gemeente.hardheid}°dH</strong> — {hardLabel.toLowerCase()}. Dat bepaalt
            welk waterfilter zinvol is. Op deze pagina vergelijken we alle filtertypen en geven
            we een concreet advies voor jouw gemeente.
          </p>
          {/* Quick badge */}
          <div className="mt-5 inline-flex items-center gap-2">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${aanbeveling.badgeColor}`}>
              Advies: {aanbeveling.badge}
            </span>
            <span className="text-xs text-gray-500">voor {gemeente.naam}</span>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        {/* Snelle feitenkaart */}
        <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h2 className="text-lg font-bold text-[#003F5C] mb-3">
            Water in {gemeente.naam} in het kort
          </h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div>
              <dt className="text-xs text-gray-500">Hardheid</dt>
              <dd className="font-semibold text-gray-800">{gemeente.hardheid}°dH</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Categorie</dt>
              <dd className="font-semibold text-gray-800">{hardLabel}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Waterbedrijf</dt>
              <dd className="font-semibold text-gray-800">{gemeente.waterbedrijf}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Provincie</dt>
              <dd className="font-semibold text-gray-800">{gemeente.provincie}</dd>
            </div>
          </dl>
        </section>

        {/* Intro + hardheid context */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Waterhardheid in {gemeente.naam}: {gemeente.hardheid}°dH
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{introTekst}</p>
          <p className="text-gray-700">
            Wil je meer weten over de waterhardheid in jouw gemeente?{' '}
            <Link href={`/waterhardheid/${gemeente.slug}`} className="text-[#005F8A] underline">
              Bekijk het volledige waterhardheidsoverzicht voor {gemeente.naam}
            </Link>
            .
          </p>
        </section>

        {/* Welk waterfilter past? */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Welk waterfilter past bij {gemeente.hardheid}°dH in {gemeente.naam}?
          </h2>
          <div className={`rounded-2xl p-5 border mb-6 ${aanbeveling.badgeColor}`}>
            <p className="font-bold text-base mb-2">Ons advies: {aanbeveling.type}</p>
            <p className="text-sm leading-relaxed">{aanbeveling.reden}</p>
          </div>
          <p className="text-gray-700">
            Wil je alle opties vergelijken?{' '}
            <Link href="/kennisbank/waterfilter-vergelijken" className="text-[#005F8A] underline">
              Lees onze complete vergelijking van waterfiltertypes
            </Link>
            {' '}of{' '}
            <Link href="/kennisbank/waterfilter-keuken" className="text-[#005F8A] underline">
              bekijk welk waterfilter voor de keuken het beste past
            </Link>
            .
          </p>
        </section>

        {/* Overzicht 4 filtertypen */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-5">
            De 4 waterfiltertypes voor {gemeente.naam} vergeleken
          </h2>
          <div className="space-y-4">
            {/* Filterkan */}
            <div className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-[#003F5C] text-base">Filterkan (bijv. Brita)</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                  gemeente.categorie === 'zacht' || gemeente.categorie === 'matig'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {gemeente.categorie === 'zacht' || gemeente.categorie === 'matig'
                    ? 'Geschikt'
                    : 'Beperkt geschikt'}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Een filterkan gebruikt actief kool en een ionenwisselaar om chloor, smaakverontreiniging en een deel van de kalk te verwijderen. Goedkoop in aanschaf, maar de patronen moeten elke 4–8 weken worden vervangen.
              </p>
              <p className="text-sm font-medium text-gray-800">
                Advies voor {gemeente.naam}:{' '}
                {gemeente.hardheid >= 12
                  ? `Bij ${gemeente.hardheid}°dH heeft een filterkan onvoldoende capaciteit om de hoge kalklast in ${gemeente.naam} effectief te reduceren. Je voelt de verbetering, maar kalkaanslag in apparaten blijft een probleem.`
                  : `Prima optie bij ${gemeente.hardheid}°dH. Verbetert de smaak duidelijk; kalkreductie is beperkt maar bij deze hardheid acceptabel.`}
              </p>
            </div>

            {/* Inline kalkfilter */}
            <div className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-[#003F5C] text-base">Inline kalkfilter (onderbouw)</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                  gemeente.categorie === 'matig hard' || gemeente.categorie === 'hard'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {gemeente.categorie === 'matig hard' || gemeente.categorie === 'hard'
                    ? 'Aanbevolen'
                    : 'Goed alternatief'}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Een inline filter wordt onder het aanrecht gemonteerd op de waterleiding. Combineert actief kool met een kalkfilterpatroon. Geen reservoir nodig — water filtert rechtstreeks door de leiding. Filter jaarlijks vervangen.
              </p>
              <p className="text-sm font-medium text-gray-800">
                Advies voor {gemeente.naam}:{' '}
                {gemeente.hardheid >= 15
                  ? `Bij de hoge hardheid van ${gemeente.hardheid}°dH in ${gemeente.naam} is een inline kalkfilter een stap in de goede richting, maar voor maximale ontharding heeft osmose de voorkeur.`
                  : gemeente.hardheid >= 8
                  ? `Goede keuze voor ${gemeente.naam} (${gemeente.hardheid}°dH). Merkbare kalkreductie en smaakvorbeterening. Relatief laag installatiebudget.`
                  : `Werkt prima in ${gemeente.naam}, hoewel kalkreductie bij ${gemeente.hardheid}°dH minder urgent is. Primair voordeel: smaakverbetering.`}
              </p>
            </div>

            {/* Omgekeerde osmose */}
            <div className={`border rounded-2xl p-5 shadow-sm ${isHardWater ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-[#003F5C] text-base">Omgekeerde osmose (RO)</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                  isHardWater
                    ? 'bg-[#005F8A] text-white'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {isHardWater ? 'Beste keuze' : 'Premium optie'}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Osmose perst water door een semi-permeabel membraan dat 95–99% van opgeloste stoffen tegenhoudt: kalk, nitraten, chloor, medicijnresten en microplastics. Wordt onder het aanrecht geplaatst met een eigen kraan. Heeft een pomp (elektra) en afvoer nodig.
              </p>
              <p className="text-sm font-medium text-gray-800">
                Advies voor {gemeente.naam}:{' '}
                {isZeerHard
                  ? `Bij ${gemeente.hardheid}°dH in ${gemeente.naam} is osmose de enige filteroptie die echt het verschil maakt. Kalkaanslag verdwijnt vrijwel volledig.`
                  : isHardWater
                  ? `Met ${gemeente.hardheid}°dH in ${gemeente.naam} is osmose de meest effectieve keuze voor wie structureel van kalkvrij water wil genieten en zijn apparaten wil beschermen.`
                  : `Osmose is ook in ${gemeente.naam} een uitstekende optie voor maximale zuiverheid — ook al is het water hier minder hard. Het verwijdert naast kalk ook andere ongewenste stoffen.`}
              </p>
            </div>

            {/* Kokend water kraan */}
            <div className="border border-gray-100 rounded-2xl p-5 bg-white shadow-sm">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-[#003F5C] text-base">Kokend water kraan met filter</h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full shrink-0 bg-purple-100 text-purple-700">
                  All-in-one
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">
                Een 4-in-1 kokend water kraan combineert kokend, koud, warm en bruisend water met een ingebouwd osmosefilter. Ideaal als je ook van thee, koffie of pasta koken wil profiteren van gefilterd, ontharder water.
              </p>
              <p className="text-sm font-medium text-gray-800">
                Advies voor {gemeente.naam}:{' '}
                {isHardWater
                  ? `Bij hard water in ${gemeente.naam} is dit de slimste all-in-one investering: je lost de kalkproblematiek op én hebt altijd kokend gefilterd water beschikbaar.`
                  : `In ${gemeente.naam} is een kokend water kraan een premium keuze — niet voor de ontharding, maar voor het gemak van instant heet water gecombineerd met smaakverbetering.`}
              </p>
              <Link
                href="/kokend-water-kraan/met-filter"
                className="inline-block mt-2 text-xs text-[#005F8A] underline"
              >
                Meer over kokend water kranen met filter →
              </Link>
            </div>
          </div>
        </section>

        {/* Kostenverlijking */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">
            Kosten waterfilter per jaar: wat past bij jouw budget?
          </h2>
          <p className="text-gray-700 mb-5">
            De totaalkosten bestaan uit aanschaf én vervangingspatronen. Hieronder de gemiddelde jaarkosten voor een huishouden in {gemeente.naam}:
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse min-w-[480px]">
              <thead>
                <tr className="bg-[#003F5C] text-white">
                  <th className="text-left px-4 py-2.5 rounded-tl-xl font-semibold">Filtertype</th>
                  <th className="text-left px-4 py-2.5 font-semibold">Aanschaf</th>
                  <th className="text-left px-4 py-2.5 font-semibold">Jaarkosten</th>
                  <th className="text-left px-4 py-2.5 rounded-tr-xl font-semibold">Kalkwerking</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium text-gray-800">Filterkan</td>
                  <td className="px-4 py-3 text-gray-600">€20–€50</td>
                  <td className="px-4 py-3 text-gray-600">~€30/jr</td>
                  <td className="px-4 py-3 text-gray-600">Beperkt</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-800">Inline filter (onderbouw)</td>
                  <td className="px-4 py-3 text-gray-600">€80–€200</td>
                  <td className="px-4 py-3 text-gray-600">~€50/jr</td>
                  <td className="px-4 py-3 text-gray-600">Matig–goed</td>
                </tr>
                <tr className={`border-b border-gray-100 ${isHardWater ? 'bg-[#E0F2FE]' : ''}`}>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    Omgekeerde osmose
                    {isHardWater && <span className="ml-2 text-xs text-[#005F8A] font-semibold">(aanbevolen)</span>}
                  </td>
                  <td className="px-4 py-3 text-gray-600">€200–€500</td>
                  <td className="px-4 py-3 text-gray-600">~€100/jr</td>
                  <td className="px-4 py-3 text-gray-600">Uitstekend (95–99%)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-800">Kokend water kraan + osmose</td>
                  <td className="px-4 py-3 text-gray-600">€500–€1.200</td>
                  <td className="px-4 py-3 text-gray-600">~€120/jr</td>
                  <td className="px-4 py-3 text-gray-600">Uitstekend</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2 px-1">
            Jaarkosten zijn indicatief op basis van een gemiddeld huishouden van 2–4 personen.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/kennisbank/waterfilter-vergelijken"
              className="text-sm text-[#005F8A] underline"
            >
              Uitgebreide vergelijking van alle filtertypen →
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="text-sm text-[#005F8A] underline"
            >
              Osmosefilter kopen — vergelijk modellen en prijzen →
            </Link>
          </div>
        </section>

        {/* Installatie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Waterfilter installeren in {gemeente.naam}: wat moet je weten?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{installatieTekst}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/kennisbank/waterfilter-onder-aanrecht"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Waterfilter onder het aanrecht
              </p>
              <p className="text-xs text-gray-500 mt-1">Installatiegids, kosten en welk systeem past</p>
            </Link>
            <Link
              href="/kennisbank/waterfilter-keuken"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Waterfilter in de keuken
              </p>
              <p className="text-xs text-gray-500 mt-1">Overzicht van alle opties voor de keuken</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        {isHardWater ? (
          <div className="bg-gradient-to-br from-[#005F8A] to-[#003F5C] text-white rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              {isZeerHard
                ? `Zeer hard water in ${gemeente.naam} (${gemeente.hardheid}°dH)`
                : `Hard water in ${gemeente.naam} (${gemeente.hardheid}°dH)`}
            </h2>
            <p className="text-blue-100 mb-5 max-w-lg">
              {isZeerHard
                ? `In ${gemeente.naam} is een osmosefilter geen luxe maar een praktische noodzaak. Bekijk welk systeem het beste past bij de hoge kalklast in jouw regio.`
                : `Met hard water in ${gemeente.naam} is een osmosesysteem de meest effectieve keuze. Vergelijk onder-aanrecht osmosefilters en 4-in-1 kokend water kranen met ingebouwde osmose.`}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="inline-block bg-white text-[#005F8A] font-bold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
              >
                Osmosefilters vergelijken →
              </Link>
              <Link
                href="/waterfilter/vergelijken"
                className="inline-block border border-blue-300 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                Alle waterfilters
              </Link>
              <Link
                href="/kokend-water-kraan/met-filter"
                className="inline-block border border-blue-300 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
              >
                4-in-1 kokend water kraan
              </Link>
            </div>
          </div>
        ) : (
          <CTABanner context="waterhardheid" variant="default" />
        )}

        <AffiliateCTA
          destination="zuiverWaterKranen"
          campaign="omgekeerde-osmose"
          content="waterfilter-gemeente-cta"
          label="Bekijk de zuiver-water-kranen bij PureAqua"
          title="Zuiver water uit je eigen kraan?"
          sub="Bekijk de zuiver-water-kranen (osmosesysteem met kraan) bij onze partner PureAqua."
        />

        {/* Interne links sectie */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen over waterfilters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/kennisbank/waterfilter-vergelijken"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">Waterfilter vergelijken</p>
              <p className="text-xs text-gray-500 mt-1">Alle typen naast elkaar: pros, cons en kosten</p>
            </Link>
            <Link
              href="/omgekeerde-osmose/kopen"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">Osmose filter kopen</p>
              <p className="text-xs text-gray-500 mt-1">Beste systemen voor thuis vergeleken</p>
            </Link>
            <Link
              href={`/waterhardheid/${gemeente.slug}`}
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">
                Waterhardheid {gemeente.naam}
              </p>
              <p className="text-xs text-gray-500 mt-1">Hardheid, kalk en wat dit betekent voor jou</p>
            </Link>
            <Link
              href="/kennisbank/waterfilter-keuken"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">Waterfilter keuken</p>
              <p className="text-xs text-gray-500 mt-1">Welk type past in de keuken?</p>
            </Link>
            <Link
              href="/kennisbank/waterfilter-onder-aanrecht"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">Waterfilter onder aanrecht</p>
              <p className="text-xs text-gray-500 mt-1">Onderbouwsystemen: installatie en kosten</p>
            </Link>
            <Link
              href="/kokend-water-kraan/met-filter"
              className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] hover:shadow-sm transition-all"
            >
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">Kokend water kraan met filter</p>
              <p className="text-xs text-gray-500 mt-1">Instant heet water + osmosefilter in één</p>
            </Link>
          </div>
        </section>

        {/* Naburige gemeenten */}
        {naburigeGemeenten.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">
              Waterfilter in andere gemeenten in {gemeente.provincie}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Vergelijk het filteradvies voor {gemeente.naam} met naburige gemeenten:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {naburigeGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/waterfilter/${g.slug}`}
                  className="border border-gray-100 rounded-xl px-4 py-2.5 hover:border-[#005F8A] hover:shadow-sm transition-all flex justify-between items-center"
                >
                  <span className="text-sm font-medium text-gray-800">Waterfilter {g.naam}</span>
                  <span className="text-xs text-gray-500">{g.hardheid}°dH</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <GemeenteLinks gemeente={gemeente} currentPath="waterfilter" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen: waterfilter in {gemeente.naam}
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
