import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';
import { AuthorBox } from '@/components/AuthorBox';
import { MethodologyBadge } from '@/components/MethodologyBadge';

export const metadata: Metadata = {
  title: 'Drinkwaterfontein kopen: vergelijking en koopgids 2026',
  description: 'Drinkwaterfontein kopen? Vergelijk modellen op prijs, filterkwaliteit, koeling en capaciteit. Complete koopgids voor kantoor en thuis, met prijzen vanaf €150.',
  alternates: { canonical: 'https://waterfilterplatform.nl/drinkwaterfontein/kopen' },
};

const faqSchema = {
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wat moet ik letten op bij het kopen van een drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De vijf belangrijkste beslispunten zijn: (1) Wateraansluiting beschikbaar? Zo ja, kies mains-fed; zo nee, flessenfontein. (2) Hoeveel personen gebruiken het? 1-5 personen: tafelmodel; 5-50: vloermodel; 50+: professioneel model of meerdere fonteinen. (3) Welke functies wilt u: alleen koud, of ook warm, kokend of bruisend water? (4) Budget: aanschafprijs plus maandelijkse filterkosten. (5) Ruimte: is er plek voor een vrijstaand model, of is een tafelmodel of onderbouwmodel beter?',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe duur is een drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aanschafprijzen varieren sterk: een eenvoudige flessenfontein begint bij €100-150, een tafelmodel mains-fed bij €200-300, een onderbouw POU-model bij €400-700 en een 4-in-1 osmosekraan bij €600-1.200. Professionele kantoormodellen kosten €800-2.000 of meer. Daarnaast zijn er maandelijkse kosten voor filters (€10-30 per maand) en eventueel stroom (€5-15 per maand). Huurmodellen kosten €40-200 per maand inclusief onderhoud.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is huren of kopen goedkoper voor een drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kopen is bijna altijd goedkoper op de lange termijn. Bij huur betaalt u maandelijks voor het apparaat plus service. Bij koop is de investering eenmalig; u betaalt daarna alleen voor filters en stroom. Het break-even punt ligt doorgaans bij 12-24 maanden. Huren is zinvol bij onzekerheid over de gebruiksduur, bij tijdelijke locaties, of als u geen technische kennis hebt voor zelfstandig onderhoud.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welke certificeringen zijn belangrijk voor een drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De belangrijkste NSF/ANSI-certificeringen zijn: NSF/ANSI 42 voor esthetische verbetering (smaak, geur, chloor), NSF/ANSI 53 voor gezondheidsrelevante verontreinigingen (lood, bacterien), NSF/ANSI 58 voor RO-systemen (PFAS, nitraten, zware metalen) en NSF/ANSI 55 voor UV-systemen. Europees equivalent is de EN 14652 voor waterkoelers. Kies bij voorkeur een gecertificeerd model; certificering garandeert dat de filterclaims van de fabrikant onafhankelijk zijn getest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hoe lang gaat een drinkwaterfontein mee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een goed onderhouden drinkwaterfontein gaat 8-15 jaar mee. De levensduur hangt af van de waterkwaliteit (hard water verslijt pompen sneller), het gebruiksintensiteit en de onderhoudsfrequentie. Filters moeten jaarlijks worden vervangen; een UV-lamp jaarlijks; het RO-membraan elke 2-3 jaar. Koelcompressors en Peltier-elementen gaan doorgaans 5-10 jaar mee. Let bij aankoop op de garantietermijn (2-5 jaar is gangbaar) en de beschikbaarheid van reservefilters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kan ik een drinkwaterfontein online kopen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Kleinere tafelmodellen en flessenfonteinen zijn eenvoudig online te bestellen bij bol.com, Amazon of gespecialiseerde waterfilterwebshops. Grotere mains-fed en onderbouwmodellen worden vaak via gespecialiseerde dealers verkocht, inclusief installatie. Voor POU en osmose-systemen is professionele installatie door een erkende installateur aanbevolen; sommige fabrikanten bieden dit als pakket aan. Controleer altijd de beschikbaarheid van vervangingsfilters in Nederland voordat u een buitenlands merk aanschaft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de beste merken drinkwaterfonteinen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De meest bekende merken op de Nederlandse markt zijn: Quooker (premium 4-in-1, bekend van kokend water kraan), BWT (Duits watermerk, actief koolstof en RO), Zip HydroTap (Australisch premium merk, koud/kokend/bruisend), Billi (commercieel premium, onderbouw), en PureAqua (zakelijk segment, RO-systemen). Voor consumentenmodellen zijn ook Waterdrop, APEC en RKIN populaire merken die via online winkels beschikbaar zijn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de verborgen kosten van een drinkwaterfontein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Naast de aanschafprijs zijn de volgende kosten van belang: vervangingsfilters (€30-120 per jaar, afhankelijk van filterset), stroomverbruik (€5-20 per maand voor koeling en eventueel boiler), installatie (€50-200 eenmalig voor mains-fed en onderbouwmodellen), ontkalking bij hard water (extra filter of zachtere onderhoudscyclus), en eventuele reparatiekosten na de garantieperiode. Bij flessenfonteinen komen ook de flessenkosten (€8-15 per 19L fles) bovenop de aanschafprijs.',
      },
    },
  ],
};

const articleSchema = {
  '@type': 'Article',
  headline: 'Drinkwaterfontein kopen: vergelijking en koopgids 2026',
  description: 'Drinkwaterfontein kopen? Vergelijk modellen op prijs, filterkwaliteit, koeling en capaciteit. Complete koopgids met prijsklassen en merken.',
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  url: 'https://waterfilterplatform.nl/drinkwaterfontein/kopen',
  publisher: {
    '@type': 'Organization',
    name: 'WaterfilterPlatform',
    url: 'https://waterfilterplatform.nl',
  },
};

export default function DrinkwaterfonteinKopenPage() {
  return (
    <>
      <SchemaOrg
        schema={[
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
              { '@type': 'ListItem', position: 2, name: 'Drinkwaterfontein', item: 'https://waterfilterplatform.nl/drinkwaterfontein' },
              { '@type': 'ListItem', position: 3, name: 'Drinkwaterfontein kopen', item: 'https://waterfilterplatform.nl/drinkwaterfontein/kopen' },
            ],
          },
          faqSchema,
          articleSchema,
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <MethodologyBadge lastReviewed="2026-05-29" sources={['RIVM', 'Vewin', 'EU-richtlijn 2020/2184']} />
        <AuthorBox datePublished="2026-05-29" />
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> &rsaquo;{' '}
          <Link href="/drinkwaterfontein" className="hover:underline">Drinkwaterfontein</Link> &rsaquo;{' '}
          <span>Drinkwaterfontein kopen</span>
        </nav>

        <h1 className="text-3xl font-bold text-[#003F5C] mb-4">
          Drinkwaterfontein kopen: vergelijking en koopgids 2026
        </h1>

        <QuickAnswer answer="Een drinkwaterfontein kopen? Doorloop vijf beslispunten: wateraansluiting, capaciteit, gewenste functies, budget en ruimte. Prijzen starten bij €150 (flessenfontein) tot €1.500+ (professioneel RO-model). Let op filtercertificering (NSF/ANSI 42, 53, 58) en beschikbaarheid van vervangingsfilters in Nederland." />

        <CTABanner context="osmose" />

        <div className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4 rounded-xl mb-8">
          <h2 className="text-2xl font-bold text-[#003F5C] mb-3">
            Koopgids: 5 stappen naar de juiste drinkwaterfontein
          </h2>
          <ol className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5">1</span>
              <div>
                <strong>Wateraansluiting aanwezig?</strong> Is er een kogelkraan of wateraansluiting beschikbaar op de gewenste locatie? Zo ja, kies een mains-fed of POU-model. Zo nee, is een flessenfontein de enige optie.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5">2</span>
              <div>
                <strong>Capaciteit: hoeveel personen?</strong> 1-5 personen: tafelmodel of compact POU. 5-25 personen: vrijstaand vloermodel. 25-50+ personen: professioneel kantoormodel of meerdere fonteinen.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5">3</span>
              <div>
                <strong>Functies nodig?</strong> Alleen koud: goedkoopste optie. Koud + warm: standaard mains-fed. Koud + warm + bruisend: model met CO2-integratie. Koud + warm + kokend + bruisend: 4-in-1 osmosekraan.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5">4</span>
              <div>
                <strong>Budget: aanschaf en maandelijkse kosten.</strong> Reken beide mee. Een goedkope fontein met dure filters is snel duurder dan een duurdere fontein met goedkope filtercartridges.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="bg-[#003F5C] text-white text-xs font-bold px-2 py-1 rounded-full h-fit mt-0.5">5</span>
              <div>
                <strong>Ruimte beschikbaar?</strong> Vloermodel (100-120 cm hoog), tafelmodel (30-50 cm hoog) of onderbouwmodel (past onder aanrecht). Let ook op de diepte en breedte bij kleine keukens.
              </div>
            </li>
          </ol>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Prijsklassen: wat krijgt u voor uw geld?
        </h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#E0F2FE]">
                <th className="border border-gray-300 px-3 py-2 text-left">Prijsklasse</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Wat u krijgt</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Aanbevolen voor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">&lt;&euro;200</td>
                <td className="border border-gray-300 px-3 py-2">Flessenfontein basis, koud only</td>
                <td className="border border-gray-300 px-3 py-2">Kantoor klein, tijdelijk gebruik</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">&euro;200-500</td>
                <td className="border border-gray-300 px-3 py-2">Tafelmodel mains-fed met koolstoffilter</td>
                <td className="border border-gray-300 px-3 py-2">Thuis, klein kantoor</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">&euro;500-900</td>
                <td className="border border-gray-300 px-3 py-2">Onderbouw POU met RO of UV</td>
                <td className="border border-gray-300 px-3 py-2">Thuis met kwaliteitswensen</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">&euro;900-1.500</td>
                <td className="border border-gray-300 px-3 py-2">4-in-1 met RO + kokend + bruisend</td>
                <td className="border border-gray-300 px-3 py-2">Volledig comfort thuis</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">&gt;&euro;1.500</td>
                <td className="border border-gray-300 px-3 py-2">Professioneel kantoormodel</td>
                <td className="border border-gray-300 px-3 py-2">Groot kantoor, horeca</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Filtercertificering: waar op te letten
        </h2>
        <p className="text-gray-700 mb-4">
          Niet elke drinkwaterfontein filtert even goed. Filterclaims van fabrikanten zijn niet altijd onafhankelijk getoetst. Let bij aankoop op de volgende NSF/ANSI-certificeringen, die internationale standaard zijn voor waterfiltratie:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li><strong>NSF/ANSI 42</strong>: esthetische verbetering &mdash; vermindert chloor, geur en troebeling</li>
          <li><strong>NSF/ANSI 53</strong>: gezondheidseffecten &mdash; verwijdert lood, asbestdeeltjes en cystes</li>
          <li><strong>NSF/ANSI 58</strong>: RO-systemen &mdash; verifieert verwijdering van PFAS, nitraten en arseen</li>
          <li><strong>NSF/ANSI 55</strong>: UV-systemen &mdash; garandeert effectieve microbiologische desinfectie</li>
        </ul>
        <p className="text-gray-700 mb-6">
          Modellen gecertificeerd door het Water Quality Association (WQA) of NSF International bieden de meeste zekerheid. Vermijd merken die vage filterpercentages claimen zonder certificaatvermelding.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Merken overzicht: positionering en prijs
        </h2>
        <div className="space-y-4 mb-8">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Quooker</h3>
            <p className="text-gray-700 text-sm">Nederlands premiummerk, bekend van de kokend water kraan. Quooker CUBE biedt ook gekoeld en bruisend water. Hoogste kwaliteitssegment, prijs &euro;1.000-2.000 inclusief installatie. Sterke reputatie voor betrouwbaarheid en design.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">BWT (Best Water Technology)</h3>
            <p className="text-gray-700 text-sm">Duits waterbedrijf met breed assortiment van filterkannen tot professionele RO-systemen. Middenklasse tot premium, bekende magnesium-mineralisatie technologie voor betere smaak.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Zip HydroTap</h3>
            <p className="text-gray-700 text-sm">Australisch merk, premium koud/kokend/bruisend via een elegant kranenontwerp. Populair bij architecten en in representatieve kantooromgevingen. Prijs &euro;1.500-3.000.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">Billi</h3>
            <p className="text-gray-700 text-sm">Australisch commercieel merk, onderbouwinstallatie, geschikt voor intensief kantoorgebruik. Energie-efficient design, NSF gecertificeerd. Prijs &euro;1.200-2.500.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-[#003F5C] mb-1">PureAqua / Waterdrop / APEC</h3>
            <p className="text-gray-700 text-sm">Consumentensegment, verkrijgbaar via online winkels. POU RO-systemen voor thuis, NSF 58 gecertificeerd. Prijs &euro;200-600, beste prijs-kwaliteitsverhouding voor RO-filtratie.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Huren als alternatief voor kopen
        </h2>
        <p className="text-gray-700 mb-4">
          Leveranciers als Eden Springs en AquaVita bieden maandabonnementen aan waarbij het apparaat, de filters, onderhoud en reparatie zijn inbegrepen. Dit is met name aantrekkelijk voor kantoren die geen eigen technisch personeel hebben of onzeker zijn over de gebruiksduur.
        </p>
        <p className="text-gray-700 mb-6">
          Nadeel: op de lange termijn (3+ jaar) is huren duurder dan kopen. Overweeg ook dat huurcontracten doorgaans een minimale looptijd van 12-24 maanden kennen. Controleer altijd de opzegtermijn en de kosten bij voortijdige beeindiging.
        </p>

        <h2 className="text-2xl font-semibold text-[#005F8A] mt-8 mb-4">
          Garantie, service en filteraanbod
        </h2>
        <p className="text-gray-700 mb-6">
          Let bij aankoop op: garantietermijn (2-5 jaar gangbaar voor hardware), beschikbaarheid van vervangingsfilters in Nederland (importproducten kunnen problemen geven), en de aanwezigheid van lokale servicepartners. Een drinkwaterfontein is een langetermijninvestering; servicebaarheid op de lange termijn is minstens even belangrijk als de aankoopprijs. Lees meer op onze pagina over <Link href="/drinkwaterfontein/kantoor" className="text-[#005F8A] underline">drinkwaterfonteinen voor kantoor</Link> en <Link href="/drinkwaterfontein/thuis" className="text-[#005F8A] underline">fonteinen voor thuis</Link>.
        </p>

      <section className="mt-8">
        <h2 className="text-xl font-bold text-[#005F8A] mb-4">Gerelateerde onderwerpen</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/drinkwaterfontein/huren" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaterfontein huren</h3>
            <p className="text-sm text-gray-600">Huren als alternatief voor kopen: kosten, voor- en nadelen per situatie.</p>
          </Link>
          <Link href="/drinkwaterfontein/onderhoud" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaterfontein onderhoud</h3>
            <p className="text-sm text-gray-600">Hoe houdt u uw drinkwaterfontein hygiënisch en in goede staat?</p>
          </Link>
          <Link href="/filtertechnieken/actief-kool" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Actief kool filtertechniek</h3>
            <p className="text-sm text-gray-600">Hoe actief kool werkt in drinkwaterfonteinen en wat het filtert.</p>
          </Link>
          <Link href="/drinkwaterfontein" className="block border border-gray-200 rounded-lg p-4 hover:border-[#005F8A] hover:shadow-sm transition-all">
            <h3 className="font-semibold text-[#005F8A] mb-1">Drinkwaterfontein</h3>
            <p className="text-sm text-gray-600">Alles over drinkwaterfonteinen: types, kosten en onderhoud.</p>
          </Link>
        </div>
      </section>

        <CTABanner context="osmose" />

        <div className="space-y-3 mb-8 mt-8">
          <h2 className="text-2xl font-semibold text-[#005F8A]">Veelgestelde vragen over drinkwaterfontein kopen</h2>
          {faqSchema.mainEntity.map((faq, i) => (
            <details key={i} className="border border-gray-200 rounded-lg p-4">
              <summary className="font-semibold text-[#003F5C] cursor-pointer">
                {faq.name}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Zie ook:{' '}
          <Link href="/drinkwaterfontein" className="text-[#005F8A] underline">drinkwaterfontein overzicht</Link>,{' '}
          <Link href="/drinkwaterfontein/kantoor" className="text-[#005F8A] underline">kantoorwaterfontein</Link>,{' '}
          <Link href="/drinkwaterfontein/thuis" className="text-[#005F8A] underline">thuisfontein</Link> en{' '}
          <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kraan vergelijken</Link>.
        </p>
      </main>
    </>
  );
}
