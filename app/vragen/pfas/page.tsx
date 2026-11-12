import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { HealthDisclaimer } from '@/components/HealthDisclaimer';
import { PUREFILTER } from '@/lib/purefilter.mjs';
import { FOUR_IN_ONE, THREE_WAY } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

const PAGE_TITLE = 'Alles over PFAS in kraanwater: 10 vragen beantwoord';
const PAGE_URL = 'https://waterfilterplatform.nl/vragen/pfas';
// Max 160 tekens.
const PAGE_DESCRIPTION =
  'PFAS in tien vragen: wat het is, de norm en RIVM-advieswaarde, of het in kraanwater zit en welk PFAS waterfilter het vermindert. Met bronnen.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION, url: PAGE_URL, type: 'article', locale: 'nl_NL' },
};

type FaqItem = { question: string; answer: string; links?: [string, string][] };

// Zichtbare antwoorden en FAQPage-JSON-LD gebruiken exact dezelfde tekst; de links staan los onder het antwoord.
const faqItems: FaqItem[] = [
  {
    question: 'Wat zijn PFAS?',
    answer:
      'PFAS (per- en polyfluoralkylstoffen) zijn een groep van duizenden door de mens gemaakte fluorverbindingen die zeer slecht afbreken, vandaar de bijnaam forever chemicals. De bekendste zijn PFOS en PFOA.',
  },
  {
    question: 'Zit er PFAS in Nederlands kraanwater?',
    answer:
      'Ja, in lage concentraties. Nederlands kraanwater voldoet aan de wettelijke norm. Volgens een analyse van Greenpeace (september 2026) ligt de PFAS-waarde in ongeveer een derde van het drinkwater wel boven de strengere RIVM-advieswaarde, met de hoogste waarden onder meer in IJmuiden en Zaandam. De actuele waarden voor jouw adres staan bij je drinkwaterbedrijf.',
    links: [['/kennisbank/pfas-nederland-kaart', 'PFAS-kaart van Nederland']],
  },
  {
    question: 'Wat is de PFAS-norm voor drinkwater?',
    answer:
      'Sinds januari 2026 geldt in de EU een norm van 0,1 microgram per liter (100 nanogram per liter) voor de som van 20 PFAS, uit de drinkwaterrichtlijn 2020/2184. Het RIVM hanteert daarnaast een veel strengere advieswaarde van 4,4 nanogram PFOA-equivalenten per liter. Die advieswaarde is geen wettelijke norm en weegt elke stof naar zijn giftigheid.',
    links: [['/drinkwaternormen/pfas', 'PFAS-norm uitgelegd']],
  },
  {
    question: 'Verwijdert een waterfilter PFAS?',
    answer: `Sommige wel. Omgekeerde osmose vermindert PFAS het sterkst, ook een groot deel van de kortketenige stoffen. Een goed koolstofblokfilter vermindert vooral langketenige PFAS zoals PFOS en PFOA. UV-lampen en waterontharders doen niets tegen PFAS. Gemeten bij producten die wij aanraden: ${FOUR_IN_ONE.labReport.lab} mat bij een nieuw osmosesysteem van de ${FOUR_IN_ONE.name} PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder; Equinox Labs mat bij een nieuwe ${PUREFILTER.name} ${PUREFILTER.pfasReduction} minder van vijf PFAS. Beide verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.`,
    links: [['/pfas-waterfilter', 'PFAS waterfilter: welke filters werken echt']],
  },
  {
    question: 'Welk PFAS-filter raden jullie aan?',
    answer: `Dat hangt af van je situatie. Onze keuze: wil je minder PFAS zonder osmose of installatie-gedoe, dan de ${PUREFILTER.name} (${PUREFILTER.price}) op de koude leiding. Wil je maximaal zuiveren plus zeer heet en gekoeld water, dan de ${FOUR_IN_ONE.name} (${FOUR_IN_ONE.price}). Wil je osmosewater uit je eigen keukenkraan, dan een zuiver-water-kraan met The Source. Mag je niet boren, bijvoorbeeld in een huurwoning, dan het ${COUNTERTOP.name} (${COUNTERTOP.price}) op het aanrecht. Alle vier verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.`,
    links: [
      ['/pfas-waterfilter', 'PFAS waterfilter: onze keuze per situatie'],
      [PUREFILTER.reviewPath, PUREFILTER.name],
      [FOUR_IN_ONE.reviewPath, FOUR_IN_ONE.name],
      [THREE_WAY.reviewPath, 'The Source'],
      [COUNTERTOP.reviewPath, COUNTERTOP.shortName],
    ],
  },
  {
    question: 'Helpt een filterkan (Brita) tegen PFAS?',
    answer: `Daar is weinig over bekend. Voor de filterkannen die in Nederland verkocht worden, vonden wij weinig onafhankelijk gepubliceerd bewijs over PFAS. Een filterkan is vooral gemaakt voor chloor, kalk en smaak; de contacttijd is kort en het filter raakt snel verzadigd. Wil je geen kan meer bijvullen en wel een gemeten resultaat, dan is volgens ons de ${PUREFILTER.name} op de leiding een betere stap (Equinox Labs: ${PUREFILTER.pfasReduction} minder van vijf PFAS bij een nieuw filter); voor de grootste reductie kies je osmose. PureFilter is een merk van PureAqua, waaraan WaterfilterPlatform gelieerd is.`,
    links: [
      ['/pfas-waterfilter', 'PFAS waterfilter overzicht'],
      ['/pfas-waterfilter/vergelijken', 'PFAS-filters en filterkannen vergeleken'],
    ],
  },
  {
    question: 'Is PFAS in drinkwater gevaarlijk?',
    answer:
      'Langdurige blootstelling aan hogere concentraties wordt in onderzoek in verband gebracht met onder meer een verminderde werking van het immuunsysteem en verhoogd cholesterol. De RIVM-advieswaarde is afgeleid van de veilige wekelijkse inname die de Europese voedselautoriteit EFSA vaststelde. Het RIVM noemt voedsel en drinkwater de belangrijkste bronnen van PFAS-inname. Voor persoonlijke gezondheidsvragen is je huisarts leidend.',
  },
  {
    question: 'Waar komt PFAS vandaan?',
    answer:
      'Vooral uit industriële processen en producten zoals antiaanbaklagen, blusschuim en waterafstotende coatings, die in het milieu terechtkomen. Volgens de Inspectie Leefomgeving en Transport (september 2026) vormen ook PFAS uit bestrijdingsmiddelen, zoals het afbraakproduct TFA, een groeiend risico voor drinkwater.',
  },
  {
    question: 'Kan ik PFAS uit kraanwater koken?',
    answer: 'Nee, koken verwijdert PFAS niet; door verdamping kan de concentratie zelfs licht toenemen.',
  },
  {
    question: 'Hoe weet ik hoeveel PFAS in mijn water zit?',
    answer:
      'Voor kraanwater: kijk bij je drinkwaterbedrijf, dat de gemeten waarden per leveringsgebied publiceert. Drink je water uit een eigen put, laat het dan in een geaccrediteerd laboratorium testen. Een PFAS-thuistest die je zelf afleest geeft hooguit een grove indicatie.',
    links: [['/pfas-waterfilter/testen', 'PFAS in water testen']],
  },
];

export default function PfasCluster() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems.map(({ question, answer }) => ({ question, answer }))} />
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Vragen', url: 'https://waterfilterplatform.nl/vragen' },
        { name: 'PFAS', url: PAGE_URL },
      ]} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/vragen" className="hover:text-[#005F8A]">Vragen</Link>
            <span className="mx-2">/</span>
            <span>PFAS</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Alles over PFAS in tien vragen</h1>
          <p className="text-gray-600 text-lg">De belangrijkste vragen over PFAS in drinkwater, beknopt en met bronverwijzing beantwoord.</p>
          <p className="text-xs text-gray-500 mt-3">
            Laatst bijgewerkt: <time dateTime="2026-11-10">10 november 2026</time>
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <HealthDisclaimer />
        <div className="space-y-3">
          {faqItems.map(item => (
            <details key={item.question} className="border border-gray-100 rounded-xl p-4 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">{item.question}<span className="text-[#005F8A] group-open:rotate-180 transition-transform shrink-0 ml-2">v</span></summary>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              {item.links && (
                <p className="mt-2 text-sm">
                  <span className="text-gray-500">Lees verder: </span>
                  {item.links.map(([href, label], i) => (
                    <span key={href}>
                      {i > 0 && <span className="text-gray-400">, </span>}
                      <Link href={href} className="text-[#005F8A] underline">{label}</Link>
                    </span>
                  ))}
                </p>
              )}
            </details>
          ))}
        </div>

        <section className="mt-10" aria-label="Bronnen">
          <h2 className="text-xl font-bold text-[#005F8A] mb-3">Bronnen</h2>
          <ul className="space-y-1.5 text-sm text-gray-600 leading-relaxed">
            <li>Europese drinkwaterrichtlijn 2020/2184 en RIVM (advieswaarde 4,4 nanogram PFOA-equivalenten per liter).</li>
            <li>
              NOS, 22 september 2026:{' '}
              <a href="https://nos.nl/artikel/2632030" rel="noopener" className="text-[#005F8A] underline">analyse Greenpeace over PFAS in drinkwater</a>.
            </li>
            <li>
              NOS, september 2026:{' '}
              <a href="https://nos.nl/artikel/2630617" rel="noopener" className="text-[#005F8A] underline">ILT over PFAS in bestrijdingsmiddelen</a>.
            </li>
            <li>
              Labrapporten:{' '}
              <a href={FOUR_IN_ONE.labReport.url} rel="noopener" className="text-[#005F8A] underline">SGS (pdf)</a> en{' '}
              <a href={PUREFILTER.labReportUrl} rel="noopener" className="text-[#005F8A] underline">Equinox Labs (pdf)</a>.
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Verder lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/pfas-waterfilter', 'PFAS waterfilter: onze keuze'],
              ['/pfas-water', 'PFAS in drinkwater'],
              ['/factsheets/pfas', 'PFAS-factsheet'],
              ['/drinkwaternormen/pfas', 'PFAS-norm'],
              ['/pfas-waterfilter/testen', 'PFAS in water testen'],
              ['/antwoorden/verwijdert-osmose-pfas', 'Verwijdert osmose PFAS?'],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
