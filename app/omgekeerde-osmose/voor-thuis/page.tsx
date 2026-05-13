import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';

export const metadata: Metadata = {
  title: 'Osmose apparaat voor thuis — installatie, kosten & tips',
  description:
    'Een osmose apparaat voor thuis installeren? Lees alles over de types, installatietips, kosten en onderhoud van een osmose waterfilter voor thuisgebruik.',
  alternates: { canonical: 'https://waterfilterplatform.nl/omgekeerde-osmose/voor-thuis' },
};

const faqItems = [
  {
    question: 'Welk osmose apparaat is het beste voor thuisgebruik?',
    answer:
      'Voor thuisgebruik is een systeem met 4-5 filterstappen, een ingebouwde permeaatpomp en minimaal 50-75 liter per dag capaciteit ideaal. Wil je ook kokend water, dan is een 4-in-1 kraan de meest complete oplossing.',
  },
  {
    question: 'Hoe installeer ik een osmose apparaat?',
    answer:
      'Installeer het systeem onder het aanrecht. Je sluit het aan op de koudwatertoevoer (met een saddle valve), de afvoer (voor spoelwater) en een aparte kraan op het werkblad. Volg de instructies van de fabrikant. Meeste installaties duren 30-60 minuten.',
  },
  {
    question: 'Hoe vaak moet ik het filter onderhouden?',
    answer:
      'Pre-filters (sediment, koolstof) verwissel je elk 6-12 maanden. Het RO-membraan gaat 2-3 jaar mee. Bij een 4-in-1 systeem zoals PureAqua verwissel je het complete filterpatroon jaarlijks.',
  },
];

export default function OsmoseVoorThuisPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Omgekeerde osmose', url: 'https://waterfilterplatform.nl/omgekeerde-osmose' },
          { name: 'Voor thuis', url: 'https://waterfilterplatform.nl/omgekeerde-osmose/voor-thuis' },
        ]}
      />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/omgekeerde-osmose" className="hover:text-[#005F8A]">Omgekeerde osmose</Link>
            <span className="mx-2">/</span>
            <span>Voor thuis</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Osmose apparaat voor thuis
          </h1>
          <p className="text-gray-600 text-lg">
            Een omgekeerde osmose systeem voor thuis installeren? We leggen uit welke types er zijn, wat de installatiekosten zijn en hoe je het beste systeem kiest voor jouw situatie.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        <section className="prose max-w-none">
          <h2>Types osmose systemen voor thuis</h2>
          <p>Er zijn drie hoofdtypen osmose systemen voor thuisgebruik:</p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              titel: 'Losse osmose filter',
              prijs: '€ 150 – 350',
              geschikt: 'Basisfilttering drinkwater',
              voor: ['Klein gezin', 'Beperkt budget', 'Alleen drinkwater'],
            },
            {
              titel: 'Osmose met tankje',
              prijs: '€ 250 – 450',
              geschikt: 'Meer waterreserve',
              voor: ['Groter gezin', 'Regelmatig gebruik', 'Stabiele doorstroom'],
            },
            {
              titel: '4-in-1 kraan + osmose',
              prijs: '€ 699 – 899',
              geschikt: 'Complete keukenoplossing',
              voor: ['Kokend + koud + bruisend', 'Eén jaarlijkse filterwissel', 'Stijlvol design'],
            },
          ].map(t => (
            <div key={t.titel} className="bg-gray-50 rounded-xl p-4">
              <p className="font-bold text-gray-900 mb-1">{t.titel}</p>
              <p className="text-[#005F8A] font-semibold text-sm mb-2">{t.prijs}</p>
              <p className="text-xs text-gray-500 mb-2">{t.geschikt}</p>
              <ul className="text-xs space-y-0.5">
                {t.voor.map(v => <li key={v} className="text-gray-600">✓ {v}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <section className="prose max-w-none">
          <h2>Installatie stap voor stap</h2>
          <ol>
            <li><strong>Waterkraan afsluiten</strong> — sluit de koudwatertoevoer onder het aanrecht af</li>
            <li><strong>Saddle valve monteren</strong> — aanboorkraan op de koudwaterleiding bevestigen</li>
            <li><strong>Systeem aansluiten</strong> — koud water in, afvoerslang naar het sifon</li>
            <li><strong>Kraantje plaatsen</strong> — boor een gat in het aanrecht voor de osmose kraan</li>
            <li><strong>Eerste flush</strong> — laat 2-3 uur spoelwater doorstromen voor ingebruikname</li>
          </ol>
          <p>
            Bij een 4-in-1 kraan zoals de PureAqua installeer je ook de tank en het ketelgedeelte. Dit kost iets meer tijd maar geeft een compleet resultaat.
          </p>

          <h2>Jaarlijkse kosten</h2>
          <p>
            Reken voor een standaard osmose systeem op €50–100 per jaar aan filteronderhoud. Bij de PureAqua 4-in-1 is dit één jaarlijkse filterwissel. Vergelijk dit met flessenwater: een gezin van 4 dat dagelijks 2L per persoon drinkt, geeft €400–600 per jaar uit aan flessenwater.
          </p>
        </section>

        <CTABanner context="osmose" />

        <section>
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
