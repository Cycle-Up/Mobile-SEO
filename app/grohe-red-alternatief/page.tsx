import type { Metadata } from 'next';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { SchemaOrg } from '@/components/SchemaOrg';
import { QuickAnswer } from '@/components/QuickAnswer';

export function generateMetadata(): Metadata {
  return {
    title: 'Wat is het beste Grohe Red alternatief? Opties 2026',
    description:
      'Op zoek naar een goedkoper alternatief voor de Grohe Red? Vergelijk prijs, functies en kosten van de beste opties naast Grohe Red in 2026.',
    alternates: { canonical: 'https://waterfilterplatform.nl/grohe-red-alternatief' },
    openGraph: {
      title: 'Grohe Red alternatief vergelijken — beste opties 2026',
      description:
        'Grohe Red is een kwaliteitsmerk, maar er zijn goedkopere alternatieven met vergelijkbare functies. Vergelijk 4-in-1 osmosekraan, Quooker, InSinkErator en Franke.',
      url: 'https://waterfilterplatform.nl/grohe-red-alternatief',
      type: 'article',
      locale: 'nl_NL',
    },
  };
}

const faqItems = [
  {
    question: 'Wat is een goed alternatief voor de Grohe Red?',
    answer:
      'De beste alternatieven voor de Grohe Red zijn een 4-in-1 kraan met osmosefilter, Quooker, InSinkErator en Franke Vital. Grohe Red is een kwaliteitsmerk met strak Duits design en betrouwbare kokendwaterfunctie. Wie echter ook een ingebouwd waterfilter, bruisend water of een lager prijspunt zoekt, vindt een 4-in-1 kraan met osmose een completer pakket voor minder geld.',
  },
  {
    question: 'Is er een goedkoper alternatief dan Grohe Red?',
    answer:
      'Ja. De Grohe Red Duo kost al snel tussen de 1.200 en 2.000 euro inclusief installatie. Een 4-in-1 kraan met osmosefilter biedt kokend, koud, warm en bruisend gefilterd water voor 699 tot 899 euro. Daarmee is de aanschafprijs aanzienlijk lager, terwijl het functiepakket groter is door het standaard ingebouwde omgekeerde osmose filter.',
  },
  {
    question: 'Wat zijn de voornaamste verschillen tussen Grohe Red en een 4-in-1 kraan met osmose?',
    answer:
      'Grohe Red levert kokend water en heeft optioneel een filterpatroon voor kalkbehandeling, maar heeft geen standaard osmose filter en geen bruisend water. Een 4-in-1 kraan met osmosefilter combineert kokend, koud gefilterd, warm en bruisend water in één kraan met een ingebouwde omgekeerde osmose installatie. De prijs ligt bovendien aanzienlijk lager dan een vergelijkbare Grohe Red setup.',
  },
  {
    question: 'Kun je een alternatief voor Grohe Red zelf installeren?',
    answer:
      'Bij Grohe Red wordt installatie via een erkende dealer aanbevolen en is soms vereist voor garantie. Een 4-in-1 kraan met osmosefilter en InSinkErator zijn in de meeste gevallen zelf te installeren met standaardaansluitingen onder het aanrecht. De meeste 4-in-1 systemen worden geleverd met een Nederlandstalige installatiehandleiding. Zo bespaar je op installatiekosten.',
  },
  {
    question: 'Heeft Grohe Red een waterfilter ingebouwd?',
    answer:
      'De Grohe Red heeft een optioneel filterpatroon dat voornamelijk kalkkorrels wegvangt, maar dit is geen volledig omgekeerde osmose systeem. Wil je puur gefilterd water dat ook chloor, nitraten en microplastics verwijdert, dan biedt een 4-in-1 kraan met ingebouwde osmose filter een completere oplossing.',
  },
  {
    question: 'Is Grohe Red een betrouwbaar merk?',
    answer:
      'Ja. Grohe is een gerenommeerd Duits sanitairbedrijf dat al tientallen jaren kwalitatieve kranen maakt. De Grohe Red lijn heeft een goede reputatie op het gebied van design, afwerking en kookwaterprecisie. Als je design en merkvertrouwen prioriteit geeft boven prijs en extra filteropties, is Grohe Red een serieuze keuze.',
  },
];

const topAlternatieven = [
  {
    naam: '4-in-1 kraan met osmose',
    prijs: '€ 699–899',
    kokend: 'Ja (100°C)',
    gefilterd: 'Ja (osmose ingebouwd)',
    bruisend: 'Ja, standaard',
    garantie: '2 jaar',
    installatie: 'Zelf installeerbaar',
    highlight: true,
    notitie: 'Meest complete pakket voor de laagste prijs, met ingebouwde osmose filter',
  },
  {
    naam: 'Grohe Red (referentie)',
    prijs: '€ 1.200–2.000',
    kokend: 'Ja (100°C)',
    gefilterd: 'Optioneel filterpatroon',
    bruisend: 'Niet standaard',
    garantie: 'Via dealer',
    installatie: 'Aanbevolen via dealer',
    highlight: false,
    notitie: 'Strak Duits design, bewezen kwaliteit in sanitair segment',
  },
  {
    naam: 'Quooker Combi+',
    prijs: '€ 1.500–2.800',
    kokend: 'Ja (100°C)',
    gefilterd: 'Optioneel scale control',
    bruisend: 'Met CUBE module',
    garantie: 'Meerjarig',
    installatie: 'Via installateur',
    highlight: false,
    notitie: 'Bekendste merk in Nederland, uitgebreid dealernetwerk',
  },
  {
    naam: 'InSinkErator',
    prijs: '€ 800–1.600',
    kokend: 'Ja (98–99°C)',
    gefilterd: 'Optioneel filterpatroon',
    bruisend: 'Niet standaard',
    garantie: 'Via dealer',
    installatie: 'Zelf of via installateur',
    highlight: false,
    notitie: 'Amerikaans merk, breed assortiment en modellen',
  },
];

const tco5jaar = [
  {
    set: '4-in-1 kraan met osmose',
    aanschaf: '€ 799',
    installatie: '€ 0 (zelf)',
    filters: '€ 90/jaar',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 1.424',
    highlight: true,
  },
  {
    set: 'Grohe Red Duo',
    aanschaf: '€ 1.700',
    installatie: '± € 200',
    filters: '± € 70/jaar',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 2.425',
    highlight: false,
  },
  {
    set: 'Quooker Combi + CUBE',
    aanschaf: '€ 2.500',
    installatie: '€ 250',
    filters: '± € 60/jaar',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 3.225',
    highlight: false,
  },
  {
    set: 'InSinkErator HC3300',
    aanschaf: '€ 1.300',
    installatie: '± € 150',
    filters: '± € 70/jaar',
    energie: '± € 35/jaar',
    totaal5jaar: '± € 1.975',
    highlight: false,
  },
];

export default function GroheRedAlternatiefPage() {
  return (
    <>
      <SchemaOrg type="FAQPage" faqItems={faqItems} />
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: 'Home', url: 'https://waterfilterplatform.nl' },
          { name: 'Grohe Red alternatief', url: 'https://waterfilterplatform.nl/grohe-red-alternatief' },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#E0F2FE] to-white py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-[#005F8A]">Home</Link>
            <span className="mx-2">/</span>
            <span>Grohe Red alternatief</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#003F5C] mb-4">
            Grohe Red alternatief: goedkoper met meer functies?
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            De <strong>Grohe Red</strong> is een kwaliteitskraan met een verdiende reputatie in het hogere segment.
            Toch zoeken steeds meer mensen naar een <strong>alternatief voor Grohe Red</strong> — omdat ze naast
            kokend water ook een waterfilter of bruisend water willen, of simpelweg een{' '}
            <strong>goedkoper alternatief voor Grohe Red</strong> zoeken met een vergelijkbaar functiepakket.
            We zetten de vier serieuze opties naast elkaar.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/kokend-water-kraan/vergelijken"
              className="bg-[#005F8A] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#003F5C] transition-colors text-sm"
            >
              Merken vergelijken →
            </Link>
            <Link
              href="/kokend-water-kraan"
              className="border border-[#005F8A] text-[#005F8A] font-semibold px-5 py-2.5 rounded-xl hover:bg-[#E0F2FE] transition-colors text-sm"
            >
              Kokend water kranen
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-12">

        <QuickAnswer answer="Een Grohe Red alternatief levert kokend kraanwater voor €300–600 minder. De beste alternatieven zijn 4-in-1 kranen met ingebouwde osmose: die bieden extra gefilterd koud en bruisend water dat Grohe Red niet heeft. Grohe Red heeft geen waterfilter — bij hard water slijt de boiler sneller zonder extra filtering." />

        {/* Grohe Red functies uitleg */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat biedt de Grohe Red precies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Grohe is een internationaal erkend Duits sanitairbedrijf dat bekend staat om zijn strakke design en
            hoge materiaalkwaliteit. De Grohe Red lijn is hun antwoord op de vraag naar instant kokend water in de
            keuken. Voordat je alternatieven kunt beoordelen, is het handig te weten wat je bij Grohe Red krijgt.
          </p>
          <div className="bg-[#E0F2FE] rounded-2xl p-5 space-y-3 text-sm mb-4">
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Instant kokend water (100°C)</strong> — via een geïsoleerd reservoir dat water constant
                op kooktemperatuur houdt voor direct gebruik.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Grohe Red Mono vs. Duo</strong> — de Mono-variant levert alleen kokend water via een
                aparte kraan; de Duo vervangt de gewone mengkraan en levert ook warm en koud water.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Optioneel filterpatroon</strong> — Grohe biedt een eigen filterpatroon dat kalk
                vermindert, maar dit is geen volledig omgekeerde osmose systeem.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Geen standaard bruisend water</strong> — bruisend water is niet beschikbaar bij de
                huidige Grohe Red lijn.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Strak Duits design</strong> — de Grohe Red is beschikbaar in meerdere afwerkingen
                (chroom, supersteel, grafiet) met een minimalistisch professioneel uiterlijk.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#005F8A] font-bold">•</span>
              <p className="text-gray-700">
                <strong>Installatie via dealer</strong> — Grohe Red wordt doorgaans geinstalleerd via een
                erkende dealer of installateur, wat de totaalprijs verhoogt.
              </p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            De Grohe Red is kortom een sterk product voor wie primair kokend water zoekt met een Duits design.
            Maar voor wie ook puur gefilterd water of bruisend water wil, of een lagere totaalprijs, zijn er
            alternatieven die meer bieden voor minder geld. Lees meer over <Link href="/heet-water-kraan" className="text-[#005F8A] underline">heet water kranen</Link> in
            het algemeen om de categorie beter te begrijpen.
          </p>
        </section>

        {/* Top 4 alternatieven vergelijkingstabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wat zijn de top 4 alternatieven voor Grohe Red?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Hieronder vergelijken we vier serieuze alternatieven — inclusief Grohe Red als referentie.
            Let op de verhouding tussen prijs, aanwezige functies en filteropties.
          </p>
          <div className="overflow-x-auto -mx-4 px-4 mb-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Merk</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Prijs</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Kokend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Gefilterd</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Bruisend</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Garantie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                </tr>
              </thead>
              <tbody>
                {topAlternatieven.map(a => (
                  <tr key={a.naam} className={`border-b border-gray-100 ${a.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {a.naam}
                      {a.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Aanbevolen</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{a.prijs}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.kokend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.gefilterd}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.bruisend}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.garantie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{a.installatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3">
            {topAlternatieven.map(a => (
              <div
                key={a.naam}
                className={`rounded-xl border p-4 ${a.highlight ? 'border-[#005F8A] bg-[#E0F2FE]' : 'border-gray-100 bg-white'}`}
              >
                <div className="flex items-start justify-between gap-3 mb-1">
                  <p className="font-bold text-gray-900">{a.naam}</p>
                  <span className="font-semibold text-[#005F8A] shrink-0 text-sm">{a.prijs}</span>
                </div>
                <p className="text-sm text-gray-600">{a.notitie}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Prijzen indicatief op basis van publieke richtprijzen. Bijgewerkt mei 2026.
          </p>
        </section>

        {/* 4-in-1 kraan met osmose detail sectie */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Is een 4-in-1 kraan met osmose het meest complete alternatief?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Van de vier alternatieven is de 4-in-1 kraan met osmosefilter het enige systeem dat standaard kokend water, koud gefilterd
            water, warm water én bruisend water combineert in één kraan — inclusief een ingebouwde{' '}
            <Link href="/omgekeerde-osmose" className="text-[#005F8A] underline">omgekeerde osmose installatie</Link>.
            Dat maakt het voor veel huishoudens een aantrekkelijker alternatief dan de Grohe Red, zeker als
            je ook puur drinkwater of bruisend water wilt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              {
                titel: '4-in-1 functies standaard',
                tekst:
                  'Kokend water, koud gefilterd water, warm water en bruisend water uit één kraan. Geen extra module of losse carbonator nodig.',
              },
              {
                titel: 'Omgekeerde osmose filter ingebouwd',
                tekst:
                  'Het osmose systeem verwijdert kalk, chloor, nitraten en microplastics. Dit zit standaard in het pakket, niet als dure optie.',
              },
              {
                titel: 'Significant lagere prijs',
                tekst:
                  'Een complete 4-in-1 set kost 699–899 euro. Een Grohe Red Duo met installatiekosten komt al snel boven de 2.000 euro uit.',
              },
              {
                titel: 'Zelf te installeren',
                tekst:
                  'Met standaard aansluitingen onder het aanrecht plaats je de kraan zelf binnen enkele uren. Geen verplichte installateur, dat scheelt.',
              },
              {
                titel: '2 jaar fabrieksgarantie',
                tekst:
                  'De meeste 4-in-1 systemen bieden 2 jaar fabrieksgarantie op zowel de kraan als het osmose systeem.',
              },
              {
                titel: 'Modern design',
                tekst:
                  'Beschikbaar in chroom en mat zwart. Strak en tijdloos, geschikt voor zowel moderne als klassieke keukens.',
              },
            ].map(b => (
              <div key={b.titel} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 mb-1">{b.titel}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{b.tekst}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meer weten over de filtertechnologie? Lees onze gids over het{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmose systeem</Link>.
            Of vergelijk hoe een 4-in-1 kraan met osmose zich verhoudt tot{' '}
            <Link href="/quooker-alternatief" className="text-[#005F8A] underline">alternatieven voor Quooker</Link>.
          </p>
        </section>

        {/* Wanneer Grohe Red */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer blijf je bij Grohe Red?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We zijn eerlijk: de Grohe Red is voor bepaalde gebruikers nog steeds de beste keuze. Het merk heeft
            een verdiende reputatie op kwaliteit en design. Kies bewust voor Grohe Red als het volgende
            voor jou doorslaggevend is.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Design is prioriteit',
                tekst:
                  'Grohe Red heeft een premium uitstraling die past bij professionele keukens en high-end interieurontwerpen. Het design is strakker en subtieler dan de meeste concurrenten.',
              },
              {
                titel: 'Merkreputatie in sanitair',
                tekst:
                  'Grohe is al decennialang een begrip in badkamer en keuken. Als je waarde hecht aan een gevestigde naam in de sanitairbranche en een breed servicenetwerk, past Grohe Red.',
              },
              {
                titel: 'Je hebt al Grohe producten in de keuken',
                tekst:
                  'Heb je al Grohe mengkranen of andere Grohe producten? Dan is een Grohe Red de logische keuze voor een uniforme uitstraling in je keuken.',
              },
              {
                titel: 'Installatie via dealer is prettig',
                tekst:
                  'Wil je professionele installatie en liever niet zelf sleutelen? Bij Grohe Red is installatie via de dealer de norm, inclusief garantie op de installatie.',
              },
            ].map(s => (
              <div key={s.titel} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Wanneer alternatief */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Wanneer kies je voor een alternatief?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Een alternatief voor Grohe Red is in veel gevallen geen concessie maar een slimmere keuze.
            Zeker in de volgende situaties levert het bekijken van alternatieven direct voordeel op.
          </p>
          <div className="space-y-3">
            {[
              {
                titel: 'Je wilt ook bruisend water',
                tekst:
                  'Grohe Red biedt geen bruisend water. Wil je bruisend kraanwater uit dezelfde kraan, dan moet je een ander systeem kiezen. Een 4-in-1 kraan met osmosefilter heeft dit standaard inbegrepen. Lees meer over bruisend water thuis.',
              },
              {
                titel: 'Je wilt puur gefilterd water via osmose',
                tekst:
                  'Het optionele filterpatroon van Grohe Red verwijdert geen chloor, nitraten of microplastics. Een volledig osmose systeem — standaard ingebouwd bij een 4-in-1 kraan — doet dat wel, zonder meerprijs.',
              },
              {
                titel: 'Je zoekt een lagere totaalprijs',
                tekst:
                  'Over 5 jaar betaal je voor een Grohe Red Duo inclusief installatie, filterpatronen en energie bijna het dubbele van wat een 4-in-1 kraan met osmose kost. Dat prijsverschil kan oplopen tot meer dan 1.000 euro.',
              },
              {
                titel: 'Je wilt zelf installeren',
                tekst:
                  'Grohe Red vereist doorgaans een installateur. Een 4-in-1 kraan met osmosefilter is zelf te installeren met standaard aansluitingen, wat direct honderden euros scheelt.',
              },
              {
                titel: 'Je wilt vergelijken met Quooker',
                tekst:
                  'Twijfel je nog tussen Grohe Red, Quooker en andere merken? Lees onze vergelijking met alternatieven voor Quooker voor een volledig overzicht.',
              },
            ].map(s => (
              <div key={s.titel} className="bg-gray-50 rounded-xl p-4 flex gap-3">
                <span className="text-[#005F8A] font-bold shrink-0 mt-0.5">→</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{s.titel}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.tekst}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            Wil je meer weten over bruisend water uit de kraan?{' '}
            <Link href="/kennisbank/bruisend-water-thuis" className="text-[#005F8A] underline">Lees onze gids over bruisend water thuis</Link>.
          </p>
        </section>

        <CTABanner context="kokend" />

        {/* 5-jaar kosten tabel */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Kostenvergelijking over 5 jaar (TCO)</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            De aanschafprijs vertelt niet het volledige verhaal. Over vijf jaar betaal je ook installatie,
            filterpatronen en standby-energie. Hieronder de totale kosten per systeem over vijf jaar, op
            basis van gemiddeld gebruik door een gezin van vier personen.
          </p>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[640px] text-sm border-collapse">
              <thead>
                <tr className="bg-[#E0F2FE]">
                  <th className="text-left py-3 px-3 font-semibold text-[#003F5C]">Set</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Aanschaf</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Installatie</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Filters/jaar</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">Energie/jaar</th>
                  <th className="py-3 px-3 font-semibold text-[#003F5C] text-left">5 jaar totaal</th>
                </tr>
              </thead>
              <tbody>
                {tco5jaar.map(r => (
                  <tr key={r.set} className={`border-b border-gray-100 ${r.highlight ? 'bg-[#E0F2FE]/40' : ''}`}>
                    <td className="py-2.5 px-3 font-semibold text-gray-800">
                      {r.set}
                      {r.highlight && (
                        <span className="ml-2 text-[10px] bg-[#005F8A] text-white px-1.5 py-0.5 rounded-full align-middle">Laagste TCO</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-gray-700">{r.aanschaf}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.installatie}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.filters}</td>
                    <td className="py-2.5 px-3 text-gray-700">{r.energie}</td>
                    <td className="py-2.5 px-3 font-semibold text-[#005F8A]">{r.totaal5jaar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Indicatieve cijfers gebaseerd op publieke richtprijzen, gemiddeld gebruik (4 personen huishouden)
            en energieprijs van € 0,30/kWh. Filterkosten variëren per merk en gebruik.
          </p>
        </section>

        {/* Samenvatting */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-4">Conclusie: welk alternatief past bij jou?</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            De Grohe Red is een kwalitatief hoogstaand product voor wie design en merkvertrouwen prioriteit geeft.
            Maar voor de meeste huishoudens die ook puur gefilterd of bruisend water willen, of die
            slimmer willen omgaan met hun budget, biedt een <strong>4-in-1 kraan met osmosefilter</strong> een completer pakket
            voor minder geld. Het is geen inferieure keuze — het is een andere afweging.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Wil je verder vergelijken? Lees onze gids over{' '}
            <Link href="/kokend-water-kraan" className="text-[#005F8A] underline">kokend water kranen</Link>,
            bekijk de{' '}
            <Link href="/kokend-water-kraan/vergelijken" className="text-[#005F8A] underline">uitgebreide merkvergelijking</Link>,
            of lees over het{' '}
            <Link href="/omgekeerde-osmose/kopen" className="text-[#005F8A] underline">kopen van een osmose systeem</Link>.
          </p>
        </section>

        {/* Meer lezen */}
        <section>
          <h2 className="text-xl font-bold text-[#003F5C] mb-4">Meer lezen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/kokend-water-kraan', label: 'Kokend water kraan: complete gids' },
              { href: '/quooker-alternatief', label: 'Quooker alternatief vergelijken' },
              { href: '/heet-water-kraan', label: 'Heet water kraan uitleg' },
              { href: '/omgekeerde-osmose/kopen', label: 'Osmose systeem kopen' },
              { href: '/kokend-water-kraan/vergelijken', label: 'Alle merken vergelijken' },
              { href: '/kennisbank/bruisend-water-thuis', label: 'Bruisend water thuis maken' },
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

        <CTABanner context="kokend" />

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#003F5C] mb-6">Veelgestelde vragen over Grohe Red alternatieven</h2>
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
