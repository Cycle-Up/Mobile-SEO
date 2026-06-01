import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { gemeenten, getGemeente, getHardheidLabel, type Gemeente } from '@/data/gemeenten';
import { clampDescription } from '@/lib/seo';

import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { GemeenteLinks } from '@/components/GemeenteLinks';

interface PageProps {
  params: Promise<{ gemeente: string }>;
}

export async function generateStaticParams() {
  return gemeenten.map(g => ({ gemeente: g.slug }));
}

function buildTitle(naam: string): string {
  const full = `Drinkwater ${naam}: kwaliteit, veiligheid & filter`;
  if (full.length <= 70) return full;
  const medium = `Drinkwater ${naam}: kwaliteit & veiligheid`;
  if (medium.length <= 70) return medium;
  return `Drinkwater ${naam}: kwaliteit`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) return {};

  const title = buildTitle(gemeente.naam);
  const description = clampDescription(`Hoe is de kwaliteit van het drinkwater in ${gemeente.naam}? Lees over chloor, nitraat, hardheid (${gemeente.hardheid}°dH) en wanneer een filter zinvol is. Geleverd door ${gemeente.waterbedrijf}.`);

  return {
    title,
    description,
    alternates: { canonical: `https://waterfilterplatform.nl/drinkwater/${gemeente.slug}` },
    openGraph: {
      title,
      description: `Is het kraanwater in ${gemeente.naam} veilig? Wat zit erin en wanneer is filteren zinvol? Compleet overzicht.`,
    },
  };
}

function hardheidTekst(g: Gemeente): string {
  switch (g.categorie) {
    case 'zeer hard':
      return `Met ${g.hardheid}°dH behoort ${g.naam} tot de hardste gebieden van Nederland. Veel calcium en magnesium betekenen voor jou: kalkaanslag in de waterkoker, witte vlekken op glazen en sneller versleten apparaten. Voor de drinkbaarheid is dit geen probleem — hardheid zegt niets over veiligheid.`;
    case 'hard':
      return `Met ${g.hardheid}°dH is het kraanwater in ${g.naam} hard. Je ziet het terug in kalkaanslag op de kraan en in de waterkoker. Hardheid is geen gezondheidsrisico; het zijn juist natuurlijke mineralen. Wel kan het de smaak van thee en koffie beïnvloeden.`;
    case 'matig hard':
      return `Met ${g.hardheid}°dH is het water in ${g.naam} matig hard. Je merkt af en toe kalkaanslag, maar minder uitgesproken dan in het zuiden of oosten van het land. Voor het drinken zelf is dit prima.`;
    case 'matig':
      return `Met ${g.hardheid}°dH is het water in ${g.naam} matig van hardheid. Kalkvorming is beperkt. De mineraalsamenstelling is uitstekend voor dagelijks drinken.`;
    case 'zacht':
      return `Met ${g.hardheid}°dH is het water in ${g.naam} zacht. Kalk is hier vrijwel geen issue. Zacht water heeft als nadeel dat het iets "vlakker" kan smaken; sommige mensen prefereren daarom een remineralisatiestap na filtering.`;
  }
}

function waterbedrijfTekst(waterbedrijf: string, naam: string): string {
  const generiek = `${waterbedrijf} is verantwoordelijk voor de winning, zuivering en distributie van het drinkwater in ${naam}. Net als alle Nederlandse drinkwaterbedrijven publiceert ${waterbedrijf} jaarlijks rapportages over de waterkwaliteit en moet het voldoen aan het Drinkwaterbesluit en de Drinkwaterregeling. Het bedrijf controleert onder andere op micro-organismen, zware metalen, nitraat, pesticiden en de algehele chemische samenstelling.`;

  const bronTekst: Record<string, string> = {
    'Waternet':
      ` Het drinkwater in deze regio wordt overwegend gewonnen uit oppervlaktewater, dat in meerdere stappen wordt gezuiverd voordat het bij jou uit de kraan komt.`,
    'PWN':
      ` In deze regio wordt het drinkwater veelal gewonnen uit oppervlaktewater en duinwater, waarbij infiltratie in de duinen een natuurlijke zuiveringsstap vormt.`,
    'Vitens':
      ` In het verzorgingsgebied van Vitens wordt drinkwater hoofdzakelijk gewonnen uit grondwater. Grondwater is van nature relatief schoon, maar bevat meer mineralen — vandaar de hogere hardheid in delen van het werkgebied.`,
    'Brabant Water':
      ` Brabant Water wint zijn drinkwater grotendeels uit diep grondwater. Door de kalkrijke bodemlagen bevat het water relatief veel calcium en magnesium, wat resulteert in hardere hardheidswaardes.`,
    'Evides':
      ` In deze regio wordt drinkwater bereid uit een combinatie van oppervlaktewater (zoals het Haringvliet of de Maas) en grondwater, met uitgebreide meerstaps-zuivering.`,
    'Dunea':
      ` In het werkgebied wordt drinkwater bereid uit voorgezuiverd Maaswater dat door de duinen infiltreert — een natuurlijke filtering die het water extra zuiver maakt.`,
    'WMD':
      ` In Drenthe wordt drinkwater hoofdzakelijk gewonnen uit grondwater dat van nature beschermd is door dieper liggende bodemlagen.`,
    'Waterbedrijf Groningen':
      ` In Groningen wordt drinkwater grotendeels gewonnen uit grondwater en oppervlaktewater, afhankelijk van het deelgebied.`,
    'WML':
      ` In Limburg wordt drinkwater grotendeels gewonnen uit grondwater dat van nature mineraalrijk is — wat de hogere hardheidsgraden verklaart.`,
    'Oasen':
      ` Oasen wint drinkwater uit oeverfiltraat van rivieren als de Lek; het water wordt door de bodemlagen voorgezuiverd voordat het verder wordt behandeld.`,
  };

  return generiek + (bronTekst[waterbedrijf] ?? ` ${waterbedrijf} levert drinkwater dat voldoet aan alle Nederlandse en Europese normen.`);
}

function filterAdvies(g: Gemeente): string {
  if (g.hardheid >= 12) {
    return `Vanwege de hoge hardheid (${g.hardheid}°dH) in ${g.naam} is filteren vooral interessant om kalkaanslag te beperken en de smaak van thee, koffie en kraanwater te verbeteren. Een omgekeerde-osmosefilter verwijdert ook chloor, nitraten en microplastics.`;
  }
  if (g.hardheid >= 8) {
    return `Met ${g.hardheid}°dH is filteren in ${g.naam} geen verplichting. Wel verbetert een waterfilter de smaak (minder chloor) en verwijdert hij eventuele microplastics en restanten gewasbeschermingsmiddelen.`;
  }
  return `Bij ${g.hardheid}°dH is kalk in ${g.naam} geen issue. Filteren is daarom vooral een keuze voor maximale smaak en zuiverheid — denk aan het verwijderen van chloor, microplastics en spore-elementen die de smaak kunnen beïnvloeden.`;
}

export default async function DrinkwaterPage({ params }: PageProps) {
  const { gemeente: slug } = await params;
  const gemeente = getGemeente(slug);
  if (!gemeente) notFound();

  const hardLabel = getHardheidLabel(gemeente.categorie);
  const waterbedrijfInfo = waterbedrijfTekst(gemeente.waterbedrijf, gemeente.naam);
  const hardTekst = hardheidTekst(gemeente);
  const filterTekst = filterAdvies(gemeente);

  const faqItems = [
    {
      question: `Is het kraanwater in ${gemeente.naam} veilig om te drinken?`,
      answer: `Ja. Het drinkwater in ${gemeente.naam} wordt geleverd door ${gemeente.waterbedrijf} en voldoet aan het Drinkwaterbesluit. Het wordt doorlopend gecontroleerd op micro-organismen, zware metalen, nitraat en chemische verontreinigingen. Volgens de Nederlandse drinkwaternormen is het kraanwater dus veilig om dagelijks te drinken.`,
    },
    {
      question: `Wat zit er in het drinkwater van ${gemeente.naam}?`,
      answer: `Het kraanwater in ${gemeente.naam} bevat van nature mineralen zoals calcium en magnesium (de "hardheid", ${gemeente.hardheid}°dH — ${hardLabel.toLowerCase()}). Daarnaast kunnen kleine restanten chloor (uit de desinfectie) en zeer lage gehaltes nitraat aanwezig zijn. Alle gehaltes blijven onder de wettelijke normen.`,
    },
    {
      question: `Zit er fluor in het kraanwater van ${gemeente.naam}?`,
      answer: `Nee. In Nederland wordt geen fluor aan het drinkwater toegevoegd, ook niet in ${gemeente.naam}. Eventueel aanwezige fluoride komt enkel uit natuurlijke bronnen en blijft ver onder de WHO-richtwaarde.`,
    },
    {
      question: `Welk waterbedrijf levert drinkwater in ${gemeente.naam}?`,
      answer: `${gemeente.waterbedrijf} is verantwoordelijk voor de drinkwaterlevering in ${gemeente.naam}. Het bedrijf wint, zuivert en distribueert het kraanwater en publiceert periodiek kwaliteitsrapportages.`,
    },
    {
      question: `Heb ik een waterfilter nodig in ${gemeente.naam}?`,
      answer: filterTekst,
    },
    {
      question: `Zitten er microplastics in het drinkwater van ${gemeente.naam}?`,
      answer: `Wereldwijd zijn microplastics in zeer lage concentraties in drinkwater aangetoond. Nederlandse waterbedrijven (waaronder ${gemeente.waterbedrijf}) hanteren meerstaps-zuivering die het grootste deel verwijdert. Een omgekeerde-osmosefilter haalt vrijwel alle resterende microplastics weg.`,
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
          { name: `Drinkwater ${gemeente.naam}`, url: `https://waterfilterplatform.nl/drinkwater/${gemeente.slug}` },
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

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Drinkwater {gemeente.naam}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Drinkwater {gemeente.naam}: kwaliteit, veiligheid & filter
          </h1>
          <p className="text-gray-600 text-lg">
            Hoe goed is het kraanwater in {gemeente.naam}? Het drinkwater wordt geleverd door <strong>{gemeente.waterbedrijf}</strong> en
            voldoet aan het Nederlandse Drinkwaterbesluit — een van de strengste normenkaders ter wereld. Op deze pagina lees je wat er
            precies in het water zit, of het veilig is om te drinken, en wanneer een waterfilter zinvol is.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* Snelle feitenkaart */}
        <section className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h2 className="text-xl font-bold text-[#003F5C] mb-3">Kraanwater in {gemeente.naam} in het kort</h2>
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div>
              <dt className="text-xs text-gray-500">Waterbedrijf</dt>
              <dd className="font-semibold text-gray-800">{gemeente.waterbedrijf}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Provincie</dt>
              <dd className="font-semibold text-gray-800">{gemeente.provincie}</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Hardheid</dt>
              <dd className="font-semibold text-gray-800">{gemeente.hardheid}°dH</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Classificatie</dt>
              <dd className="font-semibold text-gray-800">{hardLabel}</dd>
            </div>
          </dl>
        </section>

        {/* Wat zit erin */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wat zit er in het drinkwater van {gemeente.naam}?</h2>
          <p className="text-gray-700 mb-4">
            Kraanwater in Nederland is geen "leeg" water. Het bevat van nature mineralen en wordt licht behandeld om bacteriologisch
            veilig te blijven tijdens transport door het leidingnet. In {gemeente.naam} gaat het concreet om de volgende componenten:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-semibold text-gray-900">Calcium & magnesium (hardheid)</h3>
              <p className="text-sm text-gray-600 mt-1">{hardTekst}</p>
            </div>
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-semibold text-gray-900">Chloor</h3>
              <p className="text-sm text-gray-600 mt-1">
                Nederlandse drinkwaterbedrijven gebruiken minimale tot geen chloor in het distributienet. In sommige gebieden wordt
                heel kort chloor gebruikt bij werkzaamheden aan het leidingnet. De gemiddelde chloorgehaltes in {gemeente.naam} zijn
                doorgaans niet of nauwelijks waarneembaar in smaak, en altijd ruim onder de wettelijke normen.
              </p>
            </div>
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-semibold text-gray-900">Nitraat</h3>
              <p className="text-sm text-gray-600 mt-1">
                De wettelijke norm voor nitraat in drinkwater is 50 mg/L. In de praktijk ligt het gehalte in Nederlands kraanwater ver
                onder deze grens. In gebieden met intensieve landbouw kan het iets hoger zijn, maar blijft binnen veilige waardes.
                Wil je nitraat helemaal kwijt, dan is een osmosefilter effectief — die haalt zo'n 90–95% weg.{' '}
                <Link href="/kennisbank/nitraat-drinkwater" className="text-[#005F8A] underline">Lees meer over nitraat in drinkwater</Link>.
              </p>
            </div>
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-semibold text-gray-900">Fluor</h3>
              <p className="text-sm text-gray-600 mt-1">
                Anders dan in sommige landen wordt in Nederland — en dus ook in {gemeente.naam} — geen fluor toegevoegd aan het
                drinkwater. Aanwezige fluoride komt enkel uit natuurlijke geologische bronnen en blijft in zeer lage concentratie.
              </p>
            </div>
            <div className="border-l-4 border-[#005F8A] pl-4">
              <h3 className="font-semibold text-gray-900">Microplastics & spoorvervuilingen</h3>
              <p className="text-sm text-gray-600 mt-1">
                Internationaal onderzoek laat zien dat microplastics in zeer kleine hoeveelheden in vrijwel alle drinkwaterbronnen
                voorkomen. De Nederlandse meerstaps-zuivering vangt het meeste hiervan af. Voor wie maximale zuiverheid wil, biedt
                omgekeerde osmose de meest doorgaande verwijdering.
              </p>
            </div>
          </div>
        </section>

        {/* Waterbedrijf info */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Waterleidingbedrijf {gemeente.waterbedrijf}</h2>
          <p className="text-gray-700 leading-relaxed">{waterbedrijfInfo}</p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Alle Nederlandse waterbedrijven werken onder toezicht van de Inspectie Leefomgeving en Transport (ILT). Dit betekent
            dat het kraanwater in {gemeente.naam} continu wordt gemonitord en dat overschrijdingen van normen direct gemeld moeten
            worden. Je hoeft als bewoner van {gemeente.naam} dan ook geen flessenwater te kopen voor de veiligheid — kraanwater is
            zowel goedkoper als duurzamer.
          </p>
        </section>

        {/* Is het veilig */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Is het drinkwater in {gemeente.naam} veilig?</h2>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
            <p className="font-semibold text-green-900 mb-2">Ja — kraanwater in {gemeente.naam} is veilig om te drinken.</p>
            <p className="text-sm text-green-800">
              Het water voldoet aan alle parameters van het Drinkwaterbesluit, inclusief microbiologische, chemische en
              indicatorparameters. Voor de dagelijkse veiligheid heb je geen filter nodig.
            </p>
          </div>
          <p className="text-gray-700 mt-4">
            Toch kiezen sommige mensen in {gemeente.naam} voor een filter. De redenen daarvoor zijn meestal niet "het water is
            onveilig" maar wel:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>Een betere smaak (minder restchloor, neutraler mondgevoel).</li>
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>Minder kalkaanslag in apparaten — vooral relevant bij {gemeente.hardheid}°dH.</li>
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>Extra zekerheid over microplastics en gewasbeschermingsmiddelen.</li>
            <li className="flex gap-2"><span className="text-[#005F8A] font-bold shrink-0">→</span>Voorkeur voor "puur" water voor babyvoeding of medische diëten.</li>
          </ul>
        </section>

        {/* Wanneer is filteren zinvol */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">Wanneer is filteren zinvol in {gemeente.naam}?</h2>
          <p className="text-gray-700 mb-4">{filterTekst}</p>
          <p className="text-gray-700">
            Wil je weten welk filtertype bij jouw situatie past? Een{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">omgekeerde-osmose systeem</Link> verwijdert
            tot 99% van opgeloste stoffen, een actief-koolfilter is goedkoper maar pakt vooral chloor en smaakproblemen aan. Lees
            ook{' '}
            <Link href="/kennisbank/osmose-water-drinken" className="text-[#005F8A] underline">is osmosewater drinken gezond?</Link>{' '}
            voor de voor- en nadelen.
          </p>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href={`/waterhardheid/${gemeente.slug}`} className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all">
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">Waterhardheid in {gemeente.naam}</p>
              <p className="text-xs text-gray-500 mt-1">Volledig overzicht van hardheid en kalkaanslag</p>
            </Link>
            <Link href="/kennisbank/nitraat-drinkwater" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all">
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">Nitraat in drinkwater</p>
              <p className="text-xs text-gray-500 mt-1">Normen, risicogroepen en filteropties</p>
            </Link>
            <Link href="/kennisbank/osmose-water-drinken" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all">
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">Osmosewater drinken</p>
              <p className="text-xs text-gray-500 mt-1">Is het gezond? Voor- en nadelen op een rij</p>
            </Link>
            <Link href="/omgekeerde-osmose/kopen" className="group border border-gray-100 rounded-xl p-4 hover:border-[#005F8A] transition-all">
              <p className="font-semibold text-sm text-gray-800 group-hover:text-[#005F8A]">Osmose filter kopen</p>
              <p className="text-xs text-gray-500 mt-1">Vergelijk de beste systemen voor thuis</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        {gemeente.hardheid >= 12 ? (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
            <p className="font-bold text-orange-800 mb-2">
              Hard water in {gemeente.naam} ({gemeente.hardheid}°dH)
            </p>
            <p className="text-orange-700 text-sm mb-4">
              In gemeenten met hard kraanwater zoals {gemeente.naam} kiezen veel huishoudens voor een osmosefilter — niet vanwege veiligheid, maar voor betere smaak, minder kalk en bescherming van keukenapparatuur.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/omgekeerde-osmose/kopen"
                className="inline-block bg-orange-700 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-800 transition-colors text-sm"
              >
                Vergelijk osmose-systemen →
              </Link>
              <Link
                href="/omgekeerde-osmose"
                className="inline-block border border-orange-300 text-orange-800 font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-100 transition-colors text-sm"
              >
                Meer over omgekeerde osmose
              </Link>
            </div>
          </div>
        ) : (
          <CTABanner context="osmose" variant="compact" />
        )}

        {/* Naburige gemeenten */}
        {naburigeGemeenten.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[#003F5C] mb-3">
              Drinkwater in andere gemeenten in {gemeente.provincie}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Vergelijk de waterkwaliteit en hardheid van {gemeente.naam} met naburige gemeenten:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {naburigeGemeenten.map(g => (
                <Link
                  key={g.slug}
                  href={`/drinkwater/${g.slug}`}
                  className="border border-gray-100 rounded-xl px-4 py-2.5 hover:border-[#005F8A] hover:shadow-sm transition-all flex justify-between items-center"
                >
                  <span className="text-sm font-medium text-gray-800">Drinkwater {g.naam}</span>
                  <span className="text-xs text-gray-500">{g.hardheid}°dH</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <GemeenteLinks gemeente={gemeente} currentPath="drinkwater" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">
            Veelgestelde vragen over drinkwater in {gemeente.naam}
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
