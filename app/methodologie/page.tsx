import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaOrg } from '@/components/SchemaOrg';

export function generateMetadata(): Metadata {
  const title = 'Onze Methodologie — Hoe WaterfilterPlatform Producten Beoordeelt';
  const description =
    'Lees hoe WaterfilterPlatform waterfilters, osmosesystemen en kokend water kranen evalueert: criteria, bronnen, scoring en redactionele onafhankelijkheid.';

  return {
    title,
    description,
    alternates: { canonical: 'https://waterfilterplatform.nl/methodologie' },
    openGraph: {
      title,
      description,
      url: 'https://waterfilterplatform.nl/methodologie',
      type: 'article',
      siteName: 'WaterfilterPlatform',
      locale: 'nl_NL',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

const criteria = [
  {
    nr: '01',
    naam: 'Filtratieperformantie',
    gewicht: '30%',
    uitleg:
      'Welk percentage van relevante stoffen verwijdert het systeem? We kijken naar: kalk (calcium en magnesium), nitraten, chloor, PFAS, pesticiden, zware metalen en bacteriën. Referentienormen: NSF/ANSI 58 voor omgekeerde-osmosesystemen en NSF/ANSI 42 voor actief-koolfilters. Fabrikantclaims zonder certificering worden apart vermeld.',
  },
  {
    nr: '02',
    naam: 'Totale eigendomskosten (TCO)',
    gewicht: '20%',
    uitleg:
      'Aanschafprijs + installatiekosten + jaarlijkse filterkosten, berekend over een periode van drie jaar. We presenteren bandbreedtes (laag–hoog), geen puntprijzen — omdat kosten per regio, installateur en verbruik sterk kunnen verschillen.',
  },
  {
    nr: '03',
    naam: 'Installatiegemak',
    gewicht: '15%',
    uitleg:
      'Kan een gemiddelde Nederlandse doe-het-zelver dit in minder dan twee uur installeren? Welk gereedschap is nodig? Is de installatie omkeerbaar — relevant voor huurders die geen permanente aanpassingen mogen doen? We beoordelen ook de duidelijkheid van de handleiding.',
  },
  {
    nr: '04',
    naam: 'Filterlevensduur en onderhoud',
    gewicht: '10%',
    uitleg:
      'Hoeveel liter of hoeveel maanden gaat één filtercartridge mee? Hoe makkelijk is de vervanging — gereedschapsloos of toch een monteur nodig? We corrigeren fabrikantschatting naar hard-watergebieden als de filterlevensduur daarvoor gevoelig is.',
  },
  {
    nr: '05',
    naam: 'Debiet en capaciteit',
    gewicht: '10%',
    uitleg:
      'Wat is de doorstroomsnelheid in liter per uur? Is dat voldoende voor een gezin van vier personen? Bij systemen met een opslagtank: hoe groot is die tank, en hoe lang duurt het om hem te hervullen na leeggebruik?',
  },
  {
    nr: '06',
    naam: 'Certificeringen',
    gewicht: '10%',
    uitleg:
      'Beschikt het product over NSF-, CE- of KIWA ATA-certificering? Certificeringen zijn beperkt verifieerbaar via openbare databases (nsf.org). We vermelden expliciet wanneer een fabrikant claims doet zonder aantoonbare derde-partij-verificatie.',
  },
  {
    nr: '07',
    naam: 'Garantievoorwaarden',
    gewicht: '2,5%',
    uitleg:
      'Wat dekt de garantie precies, en hoe lang? Is de fabrikant of importeur gevestigd in Nederland of de EU — relevant voor servicegemak en consumentenrechten? We lezen de kleine lettertjes, niet alleen de grote getallen op de verpakking.',
  },
  {
    nr: '08',
    naam: 'Duurzaamheid',
    gewicht: '2,5%',
    uitleg:
      'Voor omgekeerde-osmosesystemen: wat is de afvalwaterratio (liter afvalwater per liter drinkwater)? Voor filterkranen en -kannen: hoeveel plastic cartridgeafval produceer je per jaar? We leggen uit wat de cijfers betekenen, zonder te moraliseren.',
  },
];

export default function MethodologiePage() {
  return (
    <>
      <SchemaOrg
        schema={[{
          '@type': 'Article',
          headline: 'Onze methodologie: hoe WaterfilterPlatform waterfilters beoordeelt',
          description: 'De evaluatiecriteria, bronnen en redactionele principes die WaterfilterPlatform hanteert bij het beoordelen van waterfilters, osmosesystemen en kokend water kranen.',
          datePublished: '2026-01-01',
          dateModified: '2026-05-14',
          url: 'https://waterfilterplatform.nl/methodologie',
          publisher: {
            '@type': 'Organization',
            name: 'WaterfilterPlatform',
            url: 'https://waterfilterplatform.nl',
          },
        }, {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://waterfilterplatform.nl' },
            { '@type': 'ListItem', position: 2, name: 'Methodologie', item: 'https://waterfilterplatform.nl/methodologie' },
          ],
        }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-12 md:py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-4 flex gap-1 items-center">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span>›</span>
            <span className="text-gray-700">Methodologie</span>
          </nav>
          <p className="text-[#005F8A] text-sm font-semibold uppercase tracking-wide mb-3">
            Transparantie
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] leading-tight mb-4">
            Onze methodologie: zo beoordelen wij waterfilters
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Transparantie is een kernwaarde van WaterfilterPlatform. Op deze pagina leggen we precies
            uit hoe we waterfilters, osmosesystemen en kokend water kranen evalueren: welke criteria
            we hanteren, welke bronnen we raadplegen, wat we bewust niet doen — en hoe we onze
            informatie actueel houden.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Bijgewerkt op: 14 mei 2026
          </p>
        </div>
      </section>

      {/* Sectie 1: Evaluatiecriteria */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-2">
          Evaluatiecriteria
        </h2>
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          Elk product dat we behandelen beoordelen we op acht criteria. De gewichten geven aan hoe
          zwaar elk criterium meetelt in onze eindafweging. We schrijven ze hier uit zodat je
          zelf kunt bepalen welke criteria voor jouw situatie het zwaarst wegen.
        </p>

        <div className="space-y-4">
          {criteria.map(c => (
            <div key={c.nr} className="bg-white border border-gray-100 rounded-2xl p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-gray-400 shrink-0">{c.nr}</span>
                  <h3 className="font-bold text-[#003F5C]">{c.naam}</h3>
                </div>
                <span className="text-sm font-semibold text-[#005F8A] bg-[#E0F2FE] px-2.5 py-0.5 rounded-full shrink-0">
                  {c.gewicht}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-7">{c.uitleg}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#E0F2FE] rounded-2xl p-5 mt-6 text-sm text-[#003F5C]">
          <p className="font-semibold mb-1">Opmerking bij de gewichten</p>
          <p className="text-gray-700 leading-relaxed">
            De gewichten zijn niet wiskundig berekend uit een formule — ze weerspiegelen wat
            voor een gemiddeld Nederlands huishouden het zwaarst weegt. Iemand die op een boot
            woont hecht meer belang aan gewicht en capaciteit; een gezin met kleine kinderen
            kijkt anders naar filtratieperformantie. Wij geven de weging als richtlijn, niet
            als absoluut oordeel.
          </p>
        </div>
      </section>

      {/* Sectie 2: Hoe wij informatie verzamelen */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-6">
            Hoe wij informatie verzamelen
          </h2>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h3 className="font-bold text-[#003F5C] mb-3">Bronnen die wij raadplegen</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0">•</span>
                <span><strong>Fabrikant-datasheets</strong> — technische specificaties, filterlevensduur, doorstroomsnelheden en afvalwaterratios.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0">•</span>
                <span><strong>NSF-certificeringsdatabase (nsf.org)</strong> — voor verificatie van NSF/ANSI 42, 53 en 58 certificeringen per product en model.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0">•</span>
                <span><strong>Nederlands Drinkwaterbesluit</strong> — wettelijke normen voor drinkwaterkwaliteit en toegestane waarden per stof.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0">•</span>
                <span><strong>KWR Water Research Institute</strong> — onderzoeksrapporten over zuiveringstechnologieën, PFAS, nitraten en opkomende stoffen.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0">•</span>
                <span><strong>RIVM-richtlijnen</strong> — gezondheidskundige adviezen over stoffen in drinkwater.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0">•</span>
                <span><strong>Gebruikersmeldingen</strong> — praktijkervaringen van consumenten die we vergelijken met fabrikantspecificaties om discrepanties te signaleren.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
            <h3 className="font-bold text-[#003F5C] mb-3">Prijsdata</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Prijzen worden elk kwartaal gecontroleerd via de grootste Nederlandse retailers
              (Coolblue, bol.com) en de directe verkoopkanalen van de merken zelf. We vermelden
              altijd bandbreedtes, geen puntprijzen — adviesprijzen wijzigen regelmatig en
              verschillen per verkoopkanaal. De gebruikte peildatum staat bij elk artikel vermeld.
            </p>
          </div>

          <div className="bg-[#E0F2FE] rounded-2xl p-5 text-sm">
            <p className="font-semibold text-[#003F5C] mb-1">Wat wij niet doen</p>
            <p className="text-gray-700 leading-relaxed">
              Wij voeren geen eigen labmetingen uit. Als voor een bepaald product of criterium
              geen onafhankelijke testdata beschikbaar is, vermelden we dat expliciet in het artikel —
              we laten liever een veld open dan dat we niet-verifieerbare cijfers presenteren als feit.
            </p>
          </div>
        </div>
      </section>

      {/* Sectie 3: Wat wij NIET doen */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-2">
          Redactionele grenzen
        </h2>
        <p className="text-gray-600 text-sm mb-8 leading-relaxed">
          Onze onafhankelijkheid is geen marketingterm — het zijn concrete keuzes die we elke
          dag opnieuw maken. Dit zijn de grenzen die we onszelf stellen.
        </p>

        <div className="space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              Geen &ldquo;beste koop&rdquo;-badge zonder onderbouwing
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We kennen geen aanbevelingsbadges toe tenzij we elk van de acht criteria kunnen
              onderbouwen met bronnen. Een product met een knappe website maar slechte datasheet
              krijgt geen voorkeursbehandeling.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              Negatieve bevindingen worden niet onderdrukt
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Een product dat technisch goed presteert maar duur is, beschrijven we als duur.
              Een systeem met een hoge afvalwaterratio noemen we dat. We kiezen geen woorden
              om fabrikanten te sparen — we kiezen woorden die de consument helpen.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              Geen gratis producten, geen gesponsorde content
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We accepteren geen producten ter beoordeling van fabrikanten of importeurs. We
              publiceren geen gesponsorde artikelen of betaalde vermeldingen. Als een merk
              contact opneemt met een samenwerkingsvoorstel, verwijzen we naar dit beleid.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <h3 className="font-semibold text-[#003F5C] mb-2">
              Geen gezondheidsclaims buiten de officiële normen
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We doen geen uitspraken over gezondheidseffecten van gefilterd of ongefilterd water
              die verder gaan dan wat het Drinkwaterbesluit en RIVM-richtlijnen stellen.
              Beweringen als &ldquo;osmosewater is gezonder&rdquo; passen we niet toe zonder
              een nauwkeurige contextuele verklaring erbij.
            </p>
          </div>
        </div>
      </section>

      {/* Sectie 4: Updatebeleid */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-6">
            Updatebeleid
          </h2>

          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="space-y-5 text-sm text-gray-700">
              <div className="flex gap-4 items-start">
                <div className="bg-[#E0F2FE] text-[#005F8A] font-bold text-xs px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                  Jaarlijks
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Alle artikelen</p>
                  <p className="leading-relaxed">
                    Elk artikel op WaterfilterPlatform wordt minimaal één keer per jaar volledig
                    doorgelopen. Bronnen worden gecheckt, dode links verwijderd, nieuwe inzichten
                    verwerkt en de bijgewerkt-datum bovenaan het artikel aangepast.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5 flex gap-4 items-start">
                <div className="bg-[#E0F2FE] text-[#005F8A] font-bold text-xs px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                  Op publicatie
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Waterhardheidsdata per gemeente</p>
                  <p className="leading-relaxed">
                    Waterbedrijven publiceren jaarlijkse kwaliteitsrapporten. Zodra een nieuw
                    rapport beschikbaar is, verwerken we de bijgewerkte waterhardheidswaarden in
                    onze gemeentedatabase. De peildatum van de data staat altijd vermeld.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5 flex gap-4 items-start">
                <div className="bg-[#E0F2FE] text-[#005F8A] font-bold text-xs px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                  Per kwartaal
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Prijsdata</p>
                  <p className="leading-relaxed">
                    Productprijzen worden elk kwartaal opnieuw gecontroleerd. Kleine schommelingen
                    leiden niet altijd tot een aanpassing van de bijgewerkt-datum, maar een
                    materiële prijswijziging (meer dan 15%) wordt altijd verwerkt.
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5 flex gap-4 items-start">
                <div className="bg-[#E0F2FE] text-[#005F8A] font-bold text-xs px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                  Direct
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Bij foutmeldingen</p>
                  <p className="leading-relaxed">
                    Als een lezer een feitelijke onjuistheid meldt en we die na controle bevestigen,
                    corrigeren we de tekst zo snel mogelijk — doorgaans binnen enkele werkdagen.
                    De bijgewerkt-datum wordt dan ook aangepast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectie 5: Contact bij fouten */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003F5C] mb-4">
          Fout gevonden?
        </h2>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4 text-gray-700 leading-relaxed">
          <p>
            Geen enkele methode is foutloos. Als je een feitelijke onjuistheid tegenkomt —
            een verkeerde waarde, een verouderde norm, een claim die niet klopt — laat het ons weten.
            We stellen dat op prijs en reageren serieus op elke gemotiveerde correctie.
          </p>
          <p>
            <strong>E-mail:</strong>{' '}
            <a
              href="mailto:redactie@waterfilterplatform.nl"
              className="text-[#005F8A] font-medium hover:underline"
            >
              redactie@waterfilterplatform.nl
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Vermeld de URL van de pagina, de passage die je betwist en — indien mogelijk — een
            bron die de correctie onderbouwt. Reken op een reactie binnen enkele werkdagen.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 leading-relaxed">
            Meer weten over wie er achter dit platform zit, hoe we verdienen en hoe het team
            is samengesteld? Lees de{' '}
            <Link href="/over-ons" className="text-[#005F8A] font-medium hover:underline">
              Over ons-pagina
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
