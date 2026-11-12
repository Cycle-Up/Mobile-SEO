import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';
import { FOUR_IN_ONE, THREE_WAY } from '@/lib/kranen.mjs';
import { COUNTERTOP } from '@/lib/countertop.mjs';

const PAGE_TITLE = 'Verwijdert omgekeerde osmose PFAS? (2026)';
const PAGE_URL = 'https://waterfilterplatform.nl/antwoorden/verwijdert-osmose-pfas';
// Max 160 tekens.
const PAGE_DESCRIPTION = `Ja: osmose vermindert PFAS het sterkst van alle filters voor thuis. Gemeten bij de PureAqua 4-in-1: PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder (SGS).`;

// Zichtbaar antwoord en QAPage-JSON-LD gebruiken exact dezelfde tekst.
const ANSWER = `Ja. Omgekeerde osmose verwijdert in onderzoek het grootste deel van de PFAS, ook veel kortketenige soorten, en vermindert PFAS daarmee sterker dan andere filters voor thuis. Hoeveel precies, verschilt per stof en per systeem. Een gemeten voorbeeld: ${FOUR_IN_ONE.labReport.lab} mat bij een nieuw osmosesysteem van de ${FOUR_IN_ONE.name} PFOS ${FOUR_IN_ONE.lab.PFOS} en PFOA ${FOUR_IN_ONE.lab.PFOA} minder (PureAqua, dat deze kraan verkoopt, is aan WaterfilterPlatform gelieerd). Geen enkel filter haalt aantoonbaar elke PFAS-stof weg.`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { title: PAGE_TITLE, description: PAGE_DESCRIPTION, url: PAGE_URL, type: 'article', locale: 'nl_NL' },
};

export default function VerwijdertOsmosePfasCard() {
  return (
    <>
      <SchemaOrg type="BreadcrumbList" breadcrumbs={[
        { name: 'Home', url: 'https://waterfilterplatform.nl' },
        { name: 'Antwoorden', url: 'https://waterfilterplatform.nl/antwoorden' },
        { name: 'Osmose en PFAS', url: PAGE_URL },
      ]} />
      <SchemaOrg type="QAPage" qaPage={{ question: 'Verwijdert omgekeerde osmose PFAS?', answer: ANSWER, url: PAGE_URL }} />

      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/antwoorden" className="hover:text-[#005F8A]">Antwoorden</Link>
            <span className="mx-2">/</span>
            <span>Osmose en PFAS</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">Verwijdert omgekeerde osmose PFAS?</h1>
          <p className="text-xs text-gray-500 mb-4">
            Laatst bijgewerkt: <time dateTime="2026-11-10">10 november 2026</time>
          </p>
          <div className="quick-answer bg-white border border-[#BAE6FD] rounded-2xl p-5 text-lg text-gray-800" data-speakable="true">
            {ANSWER}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Onderbouwing</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een osmosemembraan laat watermoleculen door en houdt de meeste opgeloste stoffen tegen, op basis van grootte
            en elektrische lading. PFAS belanden daardoor grotendeels in het spoelwater. Kortketenige PFAS, en zeker het
            zeer kleine TFA, zijn ook voor osmose lastiger dan PFOS en PFOA.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Een goed koolstofblokfilter vermindert vooral langketenige PFAS. Het bindt kortketenige PFAS slechter en
            raakt op termijn verzadigd, zonder dat je dat merkt.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Het {FOUR_IN_ONE.labReport.lab}-rapport ({FOUR_IN_ONE.labReport.number}, {FOUR_IN_ONE.labReport.date}) gaat
            over een nieuw systeem. Een membraan slijt; vervang filters daarom op tijd. Lees het{' '}
            <a href={FOUR_IN_ONE.labReport.url} rel="noopener" className="text-[#005F8A] underline">SGS-testrapport (pdf)</a>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Nederlands kraanwater voldoet aan de wettelijke norm van 100 nanogram per liter voor de som van 20 PFAS. Het
            RIVM hanteert een strengere advieswaarde van 4,4 nanogram PFOA-equivalenten per liter, die geen wettelijke
            norm is. Voor gezondheidsvragen is je huisarts leidend.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Welke osmose past bij jou?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed mb-3">
            <li>
              <strong>Maximaal zuiveren, plus zeer heet en gekoeld water:</strong> de{' '}
              <Link href={FOUR_IN_ONE.reviewPath} className="text-[#005F8A] underline">{FOUR_IN_ONE.name}</Link>{' '}
              ({FOUR_IN_ONE.price}), met het SGS-rapport hierboven.
            </li>
            <li>
              <strong>Osmosewater uit je eigen kraan:</strong> een{' '}
              <Link href={THREE_WAY.reviewPath} className="text-[#005F8A] underline">zuiver-water-kraan met The Source</Link>.
              Een eigen PFAS-meting is niet gepubliceerd.
            </li>
            <li>
              <strong>Niet boren, bijvoorbeeld in een huurwoning:</strong> het{' '}
              <Link href={COUNTERTOP.reviewPath} className="text-[#005F8A] underline">{COUNTERTOP.name}</Link>{' '}
              ({COUNTERTOP.price}) op het aanrecht. Een eigen PFAS-meting is niet gepubliceerd.
            </li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Dit is onze keuze per situatie. Alle drie verkoopt PureAqua, waaraan WaterfilterPlatform gelieerd is.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ook opties zonder osmose, zoals een filter op de koude leiding, vind je in onze gids over het{' '}
            <Link href="/pfas-waterfilter" className="text-[#005F8A] underline font-medium">PFAS waterfilter</Link>.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-[#005F8A] mb-4">Lees verder</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ['/pfas-waterfilter', 'PFAS waterfilter: onze keuze per situatie'],
              ['/pfas-waterfilter/osmose', 'Omgekeerde osmose tegen PFAS'],
              ['/pfas-waterfilter/vergelijken', 'PFAS-filters vergelijken'],
              ['/drinkwaternormen/pfas', 'PFAS-norm'],
              ['/kennisbank/pfas-drinkwater', 'PFAS in drinkwater'],
              ['/antwoorden', 'Alle antwoorden'],
            ].map(([href, t]) => (
              <Link key={href} href={href} className="block border border-gray-100 rounded-xl p-3 text-sm font-medium text-gray-800 hover:text-[#005F8A] hover:border-[#005F8A] transition-all">{t}</Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
